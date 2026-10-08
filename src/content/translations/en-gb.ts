import en from './en';
import type { SiteCopy } from '../types';

// Shared English copy; only regional spelling differs, never product promises.
export default {
  ...en,
  meta: { description: 'Organise expenses, plan your month and make room for savings. Discover Vetra, your personal finance app without ads, with optional cloud sync.' },
  nav: { ...en.nav, theme: 'Change colour theme' },
  trust: { ...en.trust, text: 'No advertising in the way. No bank connection required. You decide whether to use cloud synchronisation.' },
  faq: { ...en.faq, items: [
    { title: 'Does Vetra connect to my bank?', text: 'No. You register your accounts and transactions yourself. Vetra is an organiser, not a banking service.' },
    en.faq.items[1],
    { title: 'Do I have to synchronise?', text: 'No. Cloud sync is optional. For local use, keep an up-to-date Vetra backup somewhere safe.' },
    { title: 'Can I use it without Internet?', text: 'Yes, after initial setup. Authentication, synchronisation and other online services require Internet.' },
    en.faq.items[4],
  ] },
} satisfies SiteCopy;
