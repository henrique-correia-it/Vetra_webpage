import type { LocaleId, SiteCopy } from './types';
import en from './translations/en';
import pt from './translations/pt';
import ptBr from './translations/pt-br';
import es from './translations/es';
import fr from './translations/fr';
import de from './translations/de';
import it from './translations/it';
import zh from './translations/zh';

export const allCopy: Record<LocaleId, SiteCopy> = { en, pt, 'pt-br': ptBr, es, fr, de, it, zh };
export const getCopy = (locale: LocaleId): SiteCopy => allCopy[locale];
