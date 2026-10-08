# Vetra — Official Website

> **Official website and landing page for Vetra — a calm, private personal finance tracker for Android.**

🌐 **Live Website:** [https://henrique-correia-it.github.io/Vetra_webpage/](https://henrique-correia-it.github.io/Vetra_webpage/)

---

## Overview

This repository contains the source code for the Vetra product landing page and official legal documentation. Built with **Astro** for high performance, zero runtime framework overhead, and comprehensive internationalization.

### Key Highlights
- **Multi-language (i18n):** Native support for 8 languages (`en`, `pt`, `pt-br`, `es`, `fr`, `de`, `it`, `zh`).
- **Automatic Language Detection:** Adapts to the visitor's browser language, with manual selection persisted locally.
- **Light / Dark Mode:** Smooth circular view-transition respecting system preferences and reduced motion.
- **Device Mockups:** High-resolution localized screenshots generated directly from the authentic app interface.
- **Privacy & Compliance:** Comprehensive, GDPR-compliant privacy policy available across all supported locales.

---

## Tech Stack

- **Framework:** [Astro](https://astro.build/) (Static Site Generation)
- **Language:** TypeScript
- **Styling:** Modern Vanilla CSS (Design Tokens, View Transitions API)
- **Testing:** [Vitest](https://vitest.dev/)
- **Deployment:** GitHub Pages via GitHub Actions

---

## Getting Started

### Prerequisites
- Node.js (v22 LTS or newer)
- npm

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/henrique-correia-it/Vetra_webpage.git
cd Vetra_webpage

# Install dependencies
npm install

# Start local dev server
npm run dev
```

The site will be available at `http://localhost:4321/Vetra_webpage/`.

### Build & Verification

```bash
# Run unit and locale tests
npm test

# Type check Astro and TypeScript files
npm run check

# Build production static bundle (dist/)
npm run build
```

---

## Deployment

The website is continuously built and published to GitHub Pages on every push to `main` via [GitHub Actions](.github/workflows/deploy.yml).

---

## Links & Support

- 📱 **Google Play:** [Vetra on Google Play](https://play.google.com/store/apps/details?id=pt.projetos.vetra)
- 🛡️ **Privacy Policy:** [Read Online](https://henrique-correia-it.github.io/Vetra_webpage/privacy.html)
- ✉️ **Support & Feedback:** `vetra.app.support@gmail.com`
