import { afterEach, describe, expect, it } from 'vitest';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { verifyBuild } from '../tool/verify-build.mjs';
const roots: string[] = [];
function output() {
  const root = mkdtempSync(join(tmpdir(), 'vetra-site-test-'));
  roots.push(root);
  for (const [path, lang] of [
    ['', 'en-US'],
    ['en-gb', 'en-GB'],
    ['pt', 'pt-PT'],
    ['pt-br', 'pt-BR'],
    ['es', 'es'],
    ['fr', 'fr'],
    ['de', 'de'],
    ['it', 'it'],
    ['zh', 'zh-Hans'],
  ]) {
    const folder = join(root, path);
    mkdirSync(folder, { recursive: true });
    writeFileSync(
      join(folder, 'index.html'),
      `<html lang="${lang}"><head><title>Vetra</title></head><body><a href="/Vetra_webpage/privacy.html">Privacy</a></body></html>`,
    );
  }
  writeFileSync(join(root, 'privacy.html'), '<html>Privacy</html>');
  return root;
}
afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true });
});
describe('static deployment validation', () => {
  it('accepts all localized pages and the preserved privacy route', () => {
    expect(verifyBuild(output()).ok).toBe(true);
  });
  it('rejects a local URL that forgets the project base', () => {
    const root = output();
    writeFileSync(
      join(root, 'index.html'),
      '<html lang="en"><img src="/assets/missing.png" /></html>',
    );
    expect(verifyBuild(root).errors.some((error: string) => error.includes('project base'))).toBe(
      true,
    );
  });
  it('rejects missing privacy and missing referenced resources', () => {
    const root = output();
    rmSync(join(root, 'privacy.html'));
    writeFileSync(
      join(root, 'pt', 'index.html'),
      '<html lang="pt-PT"><img src="/Vetra_webpage/missing.webp" /></html>',
    );
    const result = verifyBuild(root);
    expect(result.ok).toBe(false);
    expect(result.errors.some((error: string) => error.includes('privacy.html'))).toBe(true);
    expect(result.errors.some((error: string) => error.includes('missing.webp'))).toBe(true);
  });
  it('rejects a footer action pointing to a missing section', () => {
    const root = output();
    writeFileSync(
      join(root, 'index.html'),
      '<html lang="en"><a href="/Vetra_webpage/privacy.html#delete-account">Delete account</a></html>',
    );
    expect(
      verifyBuild(root).errors.some((error: string) => error.includes('Missing section')),
    ).toBe(true);
  });
});
