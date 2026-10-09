import {
  initLanguageLinks,
  languageRedirect,
  readLanguage,
  writeLanguage,
  browserLocale,
} from './locale';
import { initThemeToggle, readTheme, writeTheme, rippleGeometry, type Theme } from './theme';
import { initCustomCursor, initCardSpotlight, initGlobalSpotlight } from './cursor';
import { initScrollReveal } from './scroll';

export {
  readTheme,
  writeTheme,
  rippleGeometry,
  readLanguage,
  writeLanguage,
  browserLocale,
  languageRedirect,
  initThemeToggle,
  initLanguageLinks,
  initCustomCursor,
  initCardSpotlight,
  initGlobalSpotlight,
  initScrollReveal,
};
export type { Theme };

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

  initLanguageLinks(storage);
  initThemeToggle(storage);
  initScrollReveal();
  initCardSpotlight();
  initGlobalSpotlight();
  initCustomCursor();
}
