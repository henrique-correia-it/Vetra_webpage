import { describe, expect, it } from 'vitest';
import { validateManifest } from '../tool/validate-images.mjs';
const languages = ['en', 'pt', 'pt-BR', 'es', 'fr', 'de', 'it', 'zh-Hans'];
const scenes = [
  'overview',
  'transactions',
  'planning',
  'accounts',
  'insights',
  'saving',
  'receivables',
  'vaults',
];
const fixture = () => ({
  status: 'complete',
  fictionalDataOnly: true,
  locales: languages,
  assets: languages.flatMap((locale) =>
    scenes.map((scene) => ({
      locale,
      scene,
      device: 'phone',
      kind: 'artwork',
      path: `${locale}/phone/${scene}.png`,
      width: 1080,
      height: 1920,
    })),
  ),
});
describe('source artwork validation', () => {
  it('accepts a complete fictional phone set', () => {
    expect(validateManifest(fixture()).assets).toHaveLength(64);
  });
  it('rejects incomplete or non-fictional sets', () => {
    expect(() => validateManifest({ ...fixture(), status: 'partial' })).toThrow();
    expect(() => validateManifest({ ...fixture(), fictionalDataOnly: false })).toThrow();
    const missing = fixture();
    missing.assets.pop();
    expect(() => validateManifest(missing)).toThrow();
  });
  it.each([
    '../escape.png',
    '/absolute.png',
    'C:/outside.png',
    'en/../../out.png',
    'en\\..\\out.png',
  ])('rejects unsafe paths: %s', (path) => {
    const input = fixture();
    input.assets[0].path = path;
    expect(() => validateManifest(input)).toThrow();
  });
  it('rejects invalid image dimensions and duplicate scene entries', () => {
    const input = fixture();
    input.assets[0].width = 0;
    expect(() => validateManifest(input)).toThrow();
    const duplicate = fixture();
    duplicate.assets.push(duplicate.assets[0]);
    expect(() => validateManifest(duplicate)).toThrow();
  });
});
