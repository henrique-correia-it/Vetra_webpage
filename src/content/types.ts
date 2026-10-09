export type LocaleId = 'en' | 'en-gb' | 'pt' | 'pt-br' | 'es' | 'fr' | 'de' | 'it' | 'zh';
export type Section = { eyebrow: string; title: string; text: string };
export type Item = { title: string; text: string };
export type ComparisonCopy = {
  eyebrow: string;
  title: string;
  text: string;
  othersTitle: string;
  others: [string, string, string, string];
  vetraTitle: string;
  vetra: [string, string, string, string];
};
export type CurrenciesCopy = {
  badge: string;
  title: string;
  text: string;
};
export type SiteCopy = {
  meta: { description: string };
  nav: {
    features: string;
    faq: string;
    download: string;
    language: string;
    theme: string;
    skip: string;
  };
  hero: Section & { note: string; chips: [string, string, string]; views: [string, string, string] };
  planning: Section & { items: [string, string, string] };
  clarity: Section & { items: [string, string, string] };
  details: Section & { items: [Item, Item, Item]; currencies: CurrenciesCopy };
  comparison: ComparisonCopy;
  trust: Section & { items: [Item, Item, Item] };
  faq: Section & { items: Item[] };
  footer: {
    title: string;
    text: string;
    privacy: string;
    contact: string;
    deletion: string;
    rights: string;
    images: string;
  };
};
