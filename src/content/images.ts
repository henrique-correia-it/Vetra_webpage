import type { ImageMetadata } from 'astro';
import { locales } from './locales';
import type { LocaleId } from './types';
export const scenes = [
  'overview',
  'transactions',
  'planning',
  'accounts',
  'insights',
  'saving',
  'receivables',
  'vaults',
] as const;
export type SiteScene = (typeof scenes)[number];
export type ImageMeta = { src: ImageMetadata; width: number; height: number; altKey: SiteScene };
const source = import.meta.glob<{ default: ImageMetadata }>('../assets/screens/*/*.png', {
  eager: true,
});
export const siteImages = Object.fromEntries(
  locales.map((locale) => [
    locale.id,
    Object.fromEntries(
      scenes.map((scene) => {
        const image = source[`../assets/screens/${locale.capture}/${scene}.png`]?.default;
        if (!image) throw new Error(`Missing verified artwork: ${locale.id}/${scene}`);
        return [scene, { src: image, width: image.width, height: image.height, altKey: scene }];
      }),
    ),
  ]),
) as Record<LocaleId, Record<SiteScene, ImageMeta>>;
