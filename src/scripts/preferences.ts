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
  const currentTheme = (): Theme =>
    root.dataset.theme === 'dark'
      ? 'dark'
      : root.dataset.theme === 'light'
        ? 'light'
        : system.matches
          ? 'dark'
          : 'light';
  const updateIcon = () => {
    document.querySelectorAll<HTMLElement>('[data-theme-icon]').forEach((icon) => {
      icon.hidden = icon.dataset.themeIcon !== currentTheme();
    });
  };
  updateIcon();
  system.addEventListener('change', updateIcon);
  let changing = false;
  button?.addEventListener('click', () => {
    if (changing) return;
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    const apply = () => {
      root.dataset.theme = next;
      writeTheme(storage, next);
      updateIcon();
    };
    const isMobile =
      window.matchMedia('(max-width: 768px)').matches ||
      window.matchMedia('(pointer: coarse)').matches;
    if (reducedMotion.matches || !document.startViewTransition || isMobile) {
      button.classList.add('theme-wave');
      apply();
      setTimeout(() => button.classList.remove('theme-wave'), 650);
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
    changing = true;
    button.classList.add('theme-wave');
    try {
      const transition = document.startViewTransition(apply);
      void transition.finished
        .catch(() => {
          apply();
        })
        .finally(() => {
          changing = false;
          button.classList.remove('theme-wave');
        });
    } catch {
      apply();
      changing = false;
      button.classList.remove('theme-wave');
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
