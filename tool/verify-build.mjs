import { existsSync, readFileSync, statSync } from 'node:fs';
import { resolve, relative, isAbsolute } from 'node:path';
import { fileURLToPath } from 'node:url';
const base = '/Vetra_webpage/';
const origin = 'https://henrique-correia-it.github.io';
const languages = [
  ['', 'en-US'],
  ['en-gb', 'en-GB'],
  ['pt', 'pt-PT'],
  ['pt-br', 'pt-BR'],
  ['es', 'es'],
  ['fr', 'fr'],
  ['de', 'de'],
  ['it', 'it'],
  ['zh', 'zh-Hans'],
];
export function verifyBuild(distPath) {
  const root = resolve(distPath);
  const errors = [];
  const checked = new Set();
  const asset = (url, from) => {
    if (!url || /^(mailto:|tel:|data:)/i.test(url)) return;
    let parsed;
    try {
      parsed = new URL(url.replaceAll('&amp;', '&'), `${origin}${base}${from}`);
    } catch {
      errors.push(`Invalid URL in ${from}: ${url}`);
      return;
    }
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      errors.push(`Unsafe URL in ${from}: ${url}`);
      return;
    }
    if (parsed.origin !== origin) return;
    if (!parsed.pathname.startsWith(base)) {
      errors.push(`Missing project base in ${from}: ${url}`);
      return;
    }
    let path;
    try {
      path = decodeURIComponent(parsed.pathname.slice(base.length));
    } catch {
      errors.push(`Invalid encoded path: ${url}`);
      return;
    }
    const file = resolve(root, path || 'index.html');
    const rel = relative(root, file);
    if (isAbsolute(rel) || rel.startsWith('..')) {
      errors.push(`Path outside output: ${url}`);
      return;
    }
    const target =
      existsSync(file) && statSync(file).isDirectory() ? resolve(file, 'index.html') : file;
    if (!existsSync(target)) {
      errors.push(`Missing resource in ${from}: ${url}`);
      return;
    }
    if (parsed.hash && target.endsWith('.html')) {
      let anchor;
      try {
        anchor = decodeURIComponent(parsed.hash.slice(1));
      } catch {
        errors.push(`Invalid section in ${from}: ${url}`);
        return;
      }
      const html = readFileSync(target, 'utf8');
      const ids = [...html.matchAll(/\bid=["']([^"']+)["']/g)].map((item) => item[1]);
      if (!ids.includes(anchor)) errors.push(`Missing section in ${from}: ${url}`);
    }
    // Check font/image references in CSS too, without re-reading a shared sheet.
    if (target.endsWith('.css') && !checked.has(target)) {
      checked.add(target);
      const css = readFileSync(target, 'utf8');
      for (const match of css.matchAll(/url\(\s*['"]?([^'"\s)]+)['"]?\s*\)/g))
        asset(match[1], relative(root, target).replaceAll('\\', '/'));
    }
  };
  if (!existsSync(resolve(root, 'privacy.html'))) errors.push('Missing privacy.html.');
  for (const [path, lang] of languages) {
    const page = `${path ? `${path}/` : ''}index.html`;
    const file = resolve(root, page);
    if (!existsSync(file)) {
      errors.push(`Missing localized page: ${page}`);
      continue;
    }
    const html = readFileSync(file, 'utf8');
    if (!new RegExp(`<html[^>]+lang=["']${lang}["']`).test(html))
      errors.push(`Wrong document language: ${page}`);
    for (const match of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/g)) asset(match[1], page);
    for (const match of html.matchAll(/\bsrcset=["']([^"']+)["']/g))
      for (const candidate of match[1].split(',')) asset(candidate.trim().split(/\s+/)[0], page);
  }
  return { ok: errors.length === 0, errors: [...new Set(errors)] };
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = verifyBuild(process.argv[2] ?? 'dist');
  if (result.ok) console.log(`Verified ${languages.length} localized pages, privacy and referenced assets.`);
  else {
    console.error(result.errors.join('\n'));
    process.exitCode = 1;
  }
}
