import { site } from '../config/site';
import { locales, localePath, privacyPath } from '../content/locales';
import type { LocaleId } from '../content/types';

type Theme = 'light' | 'dark';
type Reader = Pick<Storage, 'getItem'> | null;
type Writer = Pick<Storage, 'setItem'> | null;
const themeKey = 'vetra.site.theme';
const languageKey = 'vetra.site.language';

export function readTheme(storage: Reader): Theme | null {
  try {
    const value = storage?.getItem(themeKey) ?? storage?.getItem('vetra_theme');
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null;
  }
}
export function writeTheme(storage: Writer, theme: Theme): void {
  try {
    storage?.setItem(themeKey, theme);
  } catch {
    /* Preferences never block navigation. */
  }
}
export function readLanguage(storage: Reader): LocaleId | null {
  try {
    const value = storage?.getItem(languageKey);
    return locales.find((item) => item.id === value)?.id ?? null;
  } catch {
    return null;
  }
}
export function writeLanguage(storage: Writer, locale: LocaleId): void {
  try {
    storage?.setItem(languageKey, locale);
  } catch {
    /* Private browsing remains usable. */
  }
}
export function browserLocale(languages: readonly string[]): LocaleId {
  for (const value of languages) {
    const parts = value.toLowerCase().replaceAll('_', '-').split('-');
    const language = parts[0];
    if (
      language === 'zh' &&
      (parts.includes('hant') || parts.some((p) => ['tw', 'hk', 'mo'].includes(p)))
    )
      continue;
    if (language === 'pt' && parts.includes('br')) return 'pt-br';
    const found = locales.find((item) => item.id === language);
    if (found) return found.id;
  }
  return 'en';
}
export function languageRedirect(
  path: string,
  languages: readonly string[],
  saved: LocaleId | null,
): string | null {
  // Explicit localized links are authoritative; only generic entry points auto-select.
  const isHome =
    path === site.base || path === site.base.slice(0, -1) || path === `${site.base}index.html`;
  const isPrivacy = path === `${site.base}privacy.html`;
  if (!isHome && !isPrivacy) return null;
  const selected = saved ?? browserLocale(languages);
  return selected === 'en' ? null : isPrivacy ? privacyPath(selected) : localePath(selected);
}
export function rippleGeometry(x: number, y: number, width: number, height: number) {
  return { x, y, radius: Math.ceil(Math.hypot(Math.max(x, width - x), Math.max(y, height - y))) };
}

const svgCircleDataUri =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-50 -50 100 100'%3E%3Ccircle cx='0' cy='0' r='50' fill='white'/%3E%3C/svg%3E";
const svgMaskCss = `url("${svgCircleDataUri}")`;

// Pre-warm SVG mask in browser image cache to prevent cold-start lag on first theme toggle
if (typeof window !== 'undefined') {
  const warmImg = new Image();
  warmImg.src = svgCircleDataUri;
}

export function initPreferences(): void {
  let storage: Storage | null = null;
  try {
    storage = window.localStorage;
  } catch {
    /* Storage may be disabled. */
  }
  const redirect = languageRedirect(location.pathname, navigator.languages, readLanguage(storage));
  if (redirect) {
    location.replace(`${redirect}${location.search}${location.hash}`);
    return;
  }
  document.querySelectorAll<HTMLAnchorElement>('[data-language]').forEach((link) => {
    link.addEventListener('click', () => {
      const locale = locales.find((item) => item.id === link.dataset.language)?.id;
      if (locale) writeLanguage(storage, locale);
    });
  });
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const root = document.documentElement;
  const saved = readTheme(storage);
  if (saved) root.dataset.theme = saved;
  const button = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
  const icons = document.querySelectorAll<HTMLElement>('[data-theme-icon]');
  const currentTheme = (): Theme =>
    root.dataset.theme === 'dark'
      ? 'dark'
      : root.dataset.theme === 'light'
        ? 'light'
        : system.matches
          ? 'dark'
          : 'light';
  const updateIcon = () => {
    const active = currentTheme();
    icons.forEach((icon) => {
      icon.hidden = icon.dataset.themeIcon !== active;
    });
  };
  updateIcon();
  system.addEventListener('change', updateIcon);

  // Pre-mount stylesheet in <head> so the first toggle avoids DOM creation overhead
  let transitionStyle = document.getElementById('vetra-theme-transition') as HTMLStyleElement | null;
  if (!transitionStyle && typeof document !== 'undefined') {
    transitionStyle = document.createElement('style');
    transitionStyle.id = 'vetra-theme-transition';
    document.head.appendChild(transitionStyle);
  }

  let changing = false;
  button?.addEventListener('click', () => {
    if (changing) return;
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    const apply = () => {
      root.dataset.theme = next;
      writeTheme(storage, next);
      updateIcon();
    };
    if (reducedMotion.matches || !('startViewTransition' in document)) {
      button.classList.add('theme-wave');
      apply();
      setTimeout(() => button.classList.remove('theme-wave'), 750);
      return;
    }
    const box = button.getBoundingClientRect();
    const ripple = rippleGeometry(
      Math.round(box.left + box.width / 2),
      Math.round(box.top + box.height / 2),
      window.innerWidth,
      window.innerHeight,
    );
    root.style.setProperty('--theme-x', `${ripple.x}px`);
    root.style.setProperty('--theme-y', `${ripple.y}px`);
    root.style.setProperty('--theme-r', `${ripple.radius}px`);

    // Overshoot radius (2.6x) so the furthest corner (e.g. bottom-left on mobile)
    // is crossed smoothly with momentum before the deceleration phase
    const maskSize = Math.ceil(ripple.radius * 2.6);

    if (transitionStyle) {
      transitionStyle.textContent = `
        ::view-transition-new(root) {
          -webkit-mask: ${svgMaskCss} 0 0 / 0 no-repeat;
          mask: ${svgMaskCss} 0 0 / 0 no-repeat;
          animation: theme-shockwave-reveal 750ms cubic-bezier(0.25, 1, 0.4, 1) both;
        }
        @keyframes theme-shockwave-reveal {
          from {
            -webkit-mask-size: 0px;
            -webkit-mask-position: ${ripple.x}px ${ripple.y}px;
            mask-size: 0px;
            mask-position: ${ripple.x}px ${ripple.y}px;
          }
          to {
            -webkit-mask-size: ${maskSize}px;
            -webkit-mask-position: ${Math.round(ripple.x - maskSize / 2)}px ${Math.round(ripple.y - maskSize / 2)}px;
            mask-size: ${maskSize}px;
            mask-position: ${Math.round(ripple.x - maskSize / 2)}px ${Math.round(ripple.y - maskSize / 2)}px;
          }
        }
      `;
    }

    changing = true;
    button.classList.add('theme-wave');
    try {
      const transition = (
        document as unknown as {
          startViewTransition: (cb: () => void) => { finished: Promise<void> };
        }
      ).startViewTransition(apply);
      void transition.finished
        .catch(() => {
          apply();
        })
        .finally(() => {
          changing = false;
          button.classList.remove('theme-wave');
          if (transitionStyle) transitionStyle.textContent = '';
        });
    } catch {
      apply();
      changing = false;
      button.classList.remove('theme-wave');
      if (transitionStyle) transitionStyle.textContent = '';
    }
  });
  initScrollReveal();
}

export function initScrollReveal(): void {
  try {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const targets = document.querySelectorAll(
      '.chapter, .clarity-gallery figure, .details-gallery article, .trust-grid article, .faq-list details'
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' },
    );
    targets.forEach((el) => {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
    });
  } catch {
    /* Fallback safely without blocking */
  }
}
