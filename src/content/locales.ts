import { site } from '../config/site';
import type { LocaleId } from './types';
export type { LocaleId } from './types';

export const locales: { id: LocaleId; label: string; lang: string; capture: string }[] = [
  { id: 'en', label: 'English (United States)', lang: 'en-US', capture: 'en' },
  { id: 'en-gb', label: 'English (United Kingdom)', lang: 'en-GB', capture: 'en-GB' },
  { id: 'pt', label: 'Português', lang: 'pt-PT', capture: 'pt' },
  { id: 'pt-br', label: 'Português (Brasil)', lang: 'pt-BR', capture: 'pt-BR' },
  { id: 'es', label: 'Español', lang: 'es', capture: 'es' },
  { id: 'fr', label: 'Français', lang: 'fr', capture: 'fr' },
  { id: 'de', label: 'Deutsch', lang: 'de', capture: 'de' },
  { id: 'it', label: 'Italiano', lang: 'it', capture: 'it' },
  { id: 'zh', label: '简体中文', lang: 'zh-Hans', capture: 'zh-Hans' },
];

export function localePath(locale: LocaleId, anchor?: string): string {
  return `${site.base}${locale === 'en' ? '' : `${locale}/`}${anchor ? `#${encodeURIComponent(anchor)}` : ''}`;
}

export function privacyPath(locale: LocaleId, anchor?: string): string {
  return `${localePath(locale)}privacy.html${anchor ? `#${encodeURIComponent(anchor)}` : ''}`;
}
export const flagFiles: Record<LocaleId, string> = {
  en: 'en_us',
  'en-gb': 'en_gb',
  pt: 'pt',
  'pt-br': 'pt_br',
  es: 'es',
  fr: 'fr',
  de: 'de',
  it: 'it',
  zh: 'zh',
};
