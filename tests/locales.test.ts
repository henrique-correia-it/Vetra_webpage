import { describe, expect, it } from 'vitest';
import { localePath, locales } from '../src/content/locales';
import { allCopy, getCopy } from '../src/content/copy';

describe('localized navigation', () => {
  it('keeps English at the project root and anchors under localized pages', () => {
    expect(localePath('en')).toBe('/');
    expect(localePath('pt-br', 'features')).toBe('/pt-br/#features');
  });
  it('gives every page translated content', () => {
    expect(Object.keys(allCopy).sort()).toEqual([
      'de',
      'en',
      'en-gb',
      'es',
      'fr',
      'it',
      'pt',
      'pt-br',
      'zh',
    ]);
    for (const locale of locales) {
      const copy = getCopy(locale.id);
      expect(copy.hero.title.trim().length).toBeGreaterThan(4);
      expect(copy.faq.items).toHaveLength(8);
      expect(copy.meta.description.length).toBeGreaterThan(30);
    }
  });
});
