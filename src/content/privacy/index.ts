import en from './en';
import enGB from './en-gb';
import pt from './pt';
import ptBR from './pt-br';
import es from './es';
import fr from './fr';
import de from './de';
import it from './it';
import zh from './zh';
import type { LocaleId } from '../types';
import type { PrivacyCopy } from './types';

const policies: Record<LocaleId, PrivacyCopy> = { en, 'en-gb': enGB, pt, 'pt-br': ptBR, es, fr, de, it, zh };
export const getPrivacy = (locale: LocaleId): PrivacyCopy => policies[locale];
export const controller = { name: 'Henrique Correia', updated: '2026-10-09' } as const;
export const providerLinks = [
  {
    label: 'Supabase · DPA',
    url: 'https://supabase.com/legal/customer-resources/data-processing-addendum',
  },
  { label: 'Google', url: 'https://policies.google.com/privacy' },
  { label: 'Cloudflare', url: 'https://www.cloudflare.com/privacypolicy/' },
  {
    label: 'GitHub',
    url: 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement',
  },
  { label: 'CNPD', url: 'https://www.cnpd.pt/cidadaos/participacoes/' },
] as const;
