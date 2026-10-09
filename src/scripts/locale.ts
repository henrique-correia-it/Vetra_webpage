import { site } from '../config/site';
import { locales, localePath, privacyPath } from '../content/locales';
import type { LocaleId } from '../content/types';

type Reader = Pick<Storage, 'getItem'> | null;
type Writer = Pick<Storage, 'setItem'> | null;
const languageKey = 'vetra.site.language';

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
    ) {
      continue;
    }
    if (language === 'pt' && parts.includes('br')) return 'pt-br';
    if (language === 'en' && parts.includes('gb')) return 'en-gb';
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
  const isHome =
    path === site.base || path === site.base.slice(0, -1) || path === `${site.base}index.html`;
  const isPrivacy = path === `${site.base}privacy.html`;
  if (!isHome && !isPrivacy) return null;
  const selected = saved ?? browserLocale(languages);
  return selected === 'en' ? null : isPrivacy ? privacyPath(selected) : localePath(selected);
}

export function initLanguageLinks(storage: Storage | null): void {
  document.querySelectorAll<HTMLAnchorElement>('[data-language]').forEach((link) => {
    link.addEventListener('click', () => {
      const locale = locales.find((item) => item.id === link.dataset.language)?.id;
      if (locale) writeLanguage(storage, locale);
    });
  });

  const languageMenus = document.querySelectorAll<HTMLDetailsElement>('details.language-menu');
  if (languageMenus.length > 0) {
    document.addEventListener('click', (event) => {
      const target = event.target as Node | null;
      languageMenus.forEach((menu) => {
        if (menu.open && target && !menu.contains(target)) {
          menu.open = false;
        }
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        languageMenus.forEach((menu) => {
          if (menu.open) {
            menu.open = false;
            menu.querySelector('summary')?.focus();
          }
        });
      }
    });
  }
}
