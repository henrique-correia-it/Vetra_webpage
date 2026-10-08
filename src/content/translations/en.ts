import type { SiteCopy } from '../types';
export default {
  meta: {
    description:
      'Organise expenses, plan your month and make room for savings. Discover Vetra, your personal finance app without ads, with optional cloud sync.',
  },
  nav: {
    features: 'Discover',
    faq: 'Questions',
    download: 'View on Google Play',
    language: 'Language',
    theme: 'Change colour theme',
    skip: 'Skip to content',
  },
  hero: {
    eyebrow: 'A LITTLE CLARITY. A LOT MORE CALM.',
    title: 'Make room for what matters.',
    text: 'Your expenses, your plans, your next chapter. Bring your money together in a place that feels simple.',
    note: 'Currently available through closed testing on Google Play.',
    chips: ['No ads', 'Your pace', 'Your choice'],
  },
  planning: {
    eyebrow: 'A PLAN THAT FITS YOUR LIFE',
    title: 'Your month. Not just a calendar.',
    text: 'From payday to the next, give everyday spending, bills and savings their own place. Know what is set aside and what is still available.',
    items: ['Bills to pay', 'Everyday spending', 'Savings'],
  },
  clarity: {
    eyebrow: 'THE BIG PICTURE, WITHOUT THE NOISE',
    title: 'Everything adds up to clarity.',
    text: 'See your accounts together, find a transaction in seconds and understand where your money goes. Useful detail, only when you need it.',
    items: ['Accounts together', 'Clear transactions', 'Meaningful analysis'],
  },
  details: {
    eyebrow: 'SMALL DETAILS. REAL DIFFERENCE.',
    title: 'For the way you actually live.',
    text: 'Money is not only a monthly total. Vetra makes room for the details around it.',
    items: [
      {
        title: 'A place for each goal',
        text: 'Separate money in vaults and follow your savings goals.',
      },
      {
        title: 'All your accounts in one place',
        text: 'Keep track of bank accounts, cash, and savings without mixing them up. Every account has its own clear balance and history.',
      },
      {
        title: 'Nothing left forgotten',
        text: 'Track what people owe you and record payments as they arrive.',
      },
    ],
  },
  trust: {
    eyebrow: 'YOUR MONEY. YOUR DECISIONS.',
    title: 'A calmer place for your finances.',
    text: 'No advertising in the way. No bank connection required. You decide whether to use cloud synchronisation.',
    items: [
      {
        title: 'Works offline',
        text: 'Manage your finances offline after initial setup. Sign-in and cloud services need a connection.',
      },
      {
        title: 'Sync when you choose',
        text: 'Enable cloud sync to keep your account data available across devices.',
      },
      {
        title: 'Keep a backup',
        text: 'Save a Vetra backup for restoration, or export a PDF for a readable overview.',
      },
    ],
  },
  faq: {
    title: 'A few things you might wonder.',
    items: [
      {
        title: 'Does Vetra connect to my bank?',
        text: 'No. You register your accounts and transactions yourself. Vetra is an organiser, not a banking service.',
      },
      {
        title: 'Which currencies can I use?',
        text: 'Choose EUR, USD, GBP, CNY, CHF, AUD, CAD or BRL during onboarding. Your chosen main currency applies to your finances; changing it later is not currently available.',
      },
      {
        title: 'Do I have to synchronise?',
        text: 'No. Cloud sync is optional. For local use, keep an up-to-date Vetra backup somewhere safe.',
      },
      {
        title: 'Can I use it without Internet?',
        text: 'Yes, after initial setup. Authentication, synchronisation and other online services require Internet.',
      },
      {
        title: 'How can I try the app?',
        text: 'The app is currently in closed testing. Open its Google Play page to check availability for your account.',
      },
    ],
  },
  footer: {
    title: 'A little more clarity, every day.',
    text: 'Make your next month feel a little lighter.',
    privacy: 'Privacy',
    contact: 'Get in touch',
    deletion: 'Request account deletion',
    rights: 'Made with care. Without ads.',
    images: 'Explore the real interface',
  },
} satisfies SiteCopy;
