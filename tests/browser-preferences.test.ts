import { describe, expect, it } from 'vitest';
import * as preferences from '../src/scripts/preferences';

describe('browser language', () => {
  it.each([
    [['pt-BR', 'en'], 'pt-br'],
    [['pt-PT'], 'pt'],
    [['en-GB'], 'en'],
    [['es-MX'], 'es'],
    [['fr-CA'], 'fr'],
    [['de-CH'], 'de'],
    [['it-IT'], 'it'],
    [['zh-CN'], 'zh'],
    [['zh-Hans-SG'], 'zh'],
    [['zh-TW', 'fr'], 'fr'],
    [['ja', 'nl'], 'en'],
  ])('matches %j to %s, following the app locale policy', (languages, expected) => {
    expect(preferences.browserLocale(languages)).toBe(expected);
  });
  it('keeps manual English when the browser prefers Portuguese', () => {
    expect(preferences.languageRedirect('/Vetra_webpage/', ['pt'], 'en')).toBeNull();
  });
  it('redirects the default page but respects an explicitly localized link', () => {
    expect(preferences.languageRedirect('/Vetra_webpage/', ['pt'], null)).toBe(
      '/Vetra_webpage/pt/',
    );
    expect(preferences.languageRedirect('/Vetra_webpage/fr/', ['pt'], null)).toBeNull();
    expect(preferences.languageRedirect('/Vetra_webpage/privacy.html', ['pt-BR'], null)).toBe(
      '/Vetra_webpage/pt-br/privacy.html',
    );
  });
  it('ignores blocked storage and rejects an invalid stored language', () => {
    expect(preferences.readLanguage({ getItem: () => 'invalid' })).toBeNull();
    expect(
      preferences.readLanguage({
        getItem: () => {
          throw new Error('denied');
        },
      }),
    ).toBeNull();
    expect(() =>
      preferences.writeLanguage(
        {
          setItem: () => {
            throw new Error('denied');
          },
        },
        'pt',
      ),
    ).not.toThrow();
  });
});

describe('theme shockwave', () => {
  it('covers the furthest viewport corner from the theme button', () => {
    const ripple = preferences.rippleGeometry(980, 24, 1000, 800);
    expect(ripple.x).toBe(980);
    expect(ripple.y).toBe(24);
    expect(ripple.radius).toBeGreaterThanOrEqual(Math.hypot(980, 776));
  });
});
