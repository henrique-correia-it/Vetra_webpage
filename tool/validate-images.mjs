import { readFileSync, realpathSync, mkdirSync, copyFileSync } from 'node:fs';
import { resolve, relative, isAbsolute, dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
export const captureLocales = ['en', 'pt', 'pt-BR', 'es', 'fr', 'de', 'it', 'zh-Hans'];
export const scenes = [
  'overview',
  'transactions',
  'planning',
  'accounts',
  'insights',
  'saving',
  'receivables',
  'vaults',
];
export function validateManifest(manifest) {
  if (
    !manifest ||
    manifest.status !== 'complete' ||
    manifest.fictionalDataOnly !== true ||
    !Array.isArray(manifest.assets) ||
    !Array.isArray(manifest.locales)
  )
    throw new Error('A complete fictional artwork manifest is required.');
  if (captureLocales.some((locale) => !manifest.locales.includes(locale)))
    throw new Error('Missing languages.');
  const assets = manifest.assets.filter(
    (asset) => asset.device === 'phone' && asset.kind === 'artwork',
  );
  const seen = new Set();
  for (const asset of assets) {
    if (
      typeof asset.path !== 'string' ||
      !/^[a-zA-Z0-9_/-]+\.png$/.test(asset.path) ||
      asset.path.startsWith('/') ||
      asset.path.split('/').includes('..')
    )
      throw new Error('Unsafe artwork path.');
    if (
      !Number.isInteger(asset.width) ||
      !Number.isInteger(asset.height) ||
      asset.width <= 0 ||
      asset.height <= 0 ||
      asset.width > 7680 ||
      asset.height > 7680
    )
      throw new Error('Invalid dimensions.');
    if (!captureLocales.includes(asset.locale) || !scenes.includes(asset.scene))
      throw new Error('Unknown locale or scene.');
    const key = `${asset.locale}/${asset.scene}`;
    if (seen.has(key)) throw new Error('Duplicate artwork.');
    seen.add(key);
  }
  if (assets.length !== captureLocales.length * scenes.length)
    throw new Error('Incomplete phone artwork set.');
  return { assets };
}
function within(root, path) {
  const rel = relative(root, path);
  return rel !== '' && !isAbsolute(rel) && rel !== '..' && !rel.startsWith(`..${sep}`);
}
export function prepareImages(sourceDirectory) {
  const root = realpathSync(sourceDirectory);
  const { assets } = validateManifest(
    JSON.parse(readFileSync(resolve(root, 'manifest.json'), 'utf8')),
  );
  // Read and verify the ENTIRE batch before overwriting any selected file.
  const verified = assets.map((asset) => {
    const source = realpathSync(resolve(root, asset.path));
    if (!within(root, source)) throw new Error('Artwork resolves outside the source directory.');
    const png = readFileSync(source);
    if (
      png.length < 24 ||
      png.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a' ||
      png.readUInt32BE(16) !== asset.width ||
      png.readUInt32BE(20) !== asset.height
    )
      throw new Error(`Invalid PNG: ${asset.path}`);
    return { asset, source };
  });
  const repo = realpathSync(resolve(dirname(fileURLToPath(import.meta.url)), '..'));
  const target = resolve(repo, 'src/assets/screens');
  mkdirSync(target, { recursive: true });
  if (!within(repo, realpathSync(target)))
    throw new Error('Target resolves outside the repository.');
  for (const { asset, source } of verified) {
    const folder = resolve(target, asset.locale);
    mkdirSync(folder, { recursive: true });
    if (!within(target, realpathSync(folder)))
      throw new Error('Target language folder is outside the image directory.');
    const output = resolve(folder, `${asset.scene}.png`);
    // Existing destination symlinks are not followed.
    try {
      if (!within(folder, realpathSync(output))) throw new Error('Unsafe existing target.');
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
    copyFileSync(source, output);
  }
  return verified.length;
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    console.log(`Prepared ${prepareImages(process.argv[2])} verified fictional artworks.`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
