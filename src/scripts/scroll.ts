export function initScrollReveal(): void {
  try {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const targets = document.querySelectorAll(
      '.chapter, .clarity-showcase > div, .details-gallery article, .bento-item, .comparison-card, .trust-grid article, .faq-list details',
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' },
    );
    targets.forEach((el) => {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
    });
  } catch {
    /* Fallback safely without blocking */
  }
}
