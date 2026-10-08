export type LocaleId = 'en' | 'pt' | 'pt-br' | 'es' | 'fr' | 'de' | 'it' | 'zh';
export type Section = { eyebrow: string; title: string; text: string };
export type Item = { title: string; text: string };
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
  hero: Section & { note: string; chips: [string, string, string] };
  planning: Section & { items: [string, string, string] };
  clarity: Section & { items: [string, string, string] };
  details: Section & { items: [Item, Item, Item] };
  trust: Section & { items: [Item, Item, Item] };
  faq: { title: string; items: [Item, Item, Item, Item, Item] };
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
