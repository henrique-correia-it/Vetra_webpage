export type Artwork = { path: string; locale: string; scene: string; width: number; height: number; device: string; kind: string };
export const captureLocales: string[];
export const scenes: string[];
export function validateManifest(manifest: unknown): { assets: Artwork[] };
export function prepareImages(sourceDirectory: string): number;
