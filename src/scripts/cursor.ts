export function initCardSpotlight(): void {
  try {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(hover: none), (pointer: coarse), (prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const cards = document.querySelectorAll<HTMLElement>(
      '.comparison-card, .details-gallery article, .bento-item, .trust-grid article',
    );
    cards.forEach((card) => {
      let rect: DOMRect | null = null;
      let rafId: number | null = null;
      let mouseX = 0;
      let mouseY = 0;

      const updateRect = () => {
        rect = card.getBoundingClientRect();
      };

      card.addEventListener('mouseenter', updateRect, { passive: true });
      window.addEventListener('scroll', () => { rect = null; }, { passive: true });
      window.addEventListener('resize', () => { rect = null; }, { passive: true });

      card.addEventListener(
        'mousemove',
        (e) => {
          if (!rect) updateRect();
          if (!rect) return;
          mouseX = e.clientX - rect.left;
          mouseY = e.clientY - rect.top;

          if (rafId === null) {
            rafId = window.requestAnimationFrame(() => {
              card.style.setProperty('--mouse-x', `${mouseX}px`);
              card.style.setProperty('--mouse-y', `${mouseY}px`);
              rafId = null;
            });
          }
        },
        { passive: true },
      );

      card.addEventListener(
        'mouseleave',
        () => {
          rect = null;
          if (rafId !== null) {
            window.cancelAnimationFrame(rafId);
            rafId = null;
          }
        },
        { passive: true },
      );
    });
  } catch {
    /* Fallback safely without blocking */
  }
}

export function initGlobalSpotlight(): void {
  try {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(hover: none), (pointer: coarse), (prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const orb = document.querySelector<HTMLElement>(
      '.page-spotlight-orb',
    );
    if (!orb) return;

    let mouseX = -999;
    let mouseY = -999;
    let orbX = -999;
    let orbY = -999;
    let isVisible = false;
    let hasMoved = false;
    let rafId: number | null = null;

    const stopLoop = () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const hide = () => {
      isVisible = false;
      orb.classList.remove('is-active');
      stopLoop();
    };

    const render = () => {
      if (!isVisible) {
        stopLoop();
        return;
      }

      const dx = mouseX - orbX;
      const dy = mouseY - orbY;
      const dist = Math.hypot(dx, dy);

      if (dist < 0.2) {
        orbX = mouseX;
        orbY = mouseY;
        orb.style.transform = `translate3d(${orbX}px, ${orbY}px, 0) translate(-50%, -50%)`;
        rafId = null;
        return;
      }

      const ease = 0.12;
      orbX += dx * ease;
      orbY += dy * ease;
      orb.style.transform = `translate3d(${orbX}px, ${orbY}px, 0) translate(-50%, -50%)`;

      rafId = window.requestAnimationFrame(render);
    };

    window.addEventListener(
      'pointermove',
      (e) => {
        if (e.clientX < 0 || e.clientY < 0) return;
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!hasMoved || !isVisible) {
          hasMoved = true;
          isVisible = true;
          orbX = mouseX;
          orbY = mouseY;
          orb.style.transform = `translate3d(${orbX}px, ${orbY}px, 0) translate(-50%, -50%)`;
          orb.classList.add('is-active');
        }

        if (rafId === null && isVisible) {
          rafId = window.requestAnimationFrame(render);
        }
      },
      { passive: true },
    );

    document.addEventListener('mouseleave', hide);
    window.addEventListener('blur', hide);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) hide();
    });
  } catch {
    /* Fallback safely without blocking */
  }
}

export function initCustomCursor(): void {
  try {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(hover: none), (pointer: coarse), (prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const dot = document.querySelector<HTMLElement>('.custom-cursor-dot');
    const ring = document.querySelector<HTMLElement>('.custom-cursor-ring');
    const originEl = document.querySelector<HTMLElement>('.autoscroll-origin');
    const anchor = document.querySelector<HTMLElement>('.autoscroll-anchor');
    const arrowUp = anchor?.querySelector<SVGElement>('.autoscroll-arrow-up');
    const arrowDown = anchor?.querySelector<SVGElement>('.autoscroll-arrow-down');
    if (!dot || !ring) return;

    document.documentElement.classList.add('custom-cursor-enabled');

    let mouseX = -999;
    let mouseY = -999;
    let ringX = -999;
    let ringY = -999;
    let isVisible = false;
    let hasMoved = false;
    let rafId: number | null = null;

    let isAutoscrolling = false;
    let anchorX = 0;
    let anchorY = 0;
    let autoscrollRaf: number | null = null;
    let pressStartTime = 0;
    let movedDuringPress = false;
    let lastTime = 0;

    const stopCursorLoop = () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const stopAutoscroll = () => {
      if (!isAutoscrolling) return;
      isAutoscrolling = false;
      document.documentElement.classList.remove('is-autoscrolling-active');
      if (autoscrollRaf !== null) {
        window.cancelAnimationFrame(autoscrollRaf);
        autoscrollRaf = null;
      }
      lastTime = 0;
      if (originEl) originEl.classList.remove('is-active');
      if (anchor) anchor.classList.remove('is-active');
      dot.classList.remove('is-autoscrolling');
      ring.classList.remove('is-autoscrolling');
      arrowUp?.classList.remove('is-pointing');
      arrowDown?.classList.remove('is-pointing');
    };

    const startAutoscroll = (startX: number, startY: number) => {
      isAutoscrolling = true;
      document.documentElement.classList.add('is-autoscrolling-active');
      anchorX = startX;
      anchorY = startY;
      mouseX = startX;
      mouseY = startY;
      pressStartTime = Date.now();
      movedDuringPress = false;
      lastTime = 0;

      if (originEl) {
        originEl.style.left = `${anchorX}px`;
        originEl.style.top = `${anchorY}px`;
        originEl.classList.add('is-active');
      }

      if (anchor) {
        anchor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(1)`;
        anchor.classList.add('is-active');
      }
      dot.classList.add('is-autoscrolling');
      ring.classList.add('is-autoscrolling');

      const autoscrollLoop = (currentTime: number) => {
        if (!isAutoscrolling) return;
        if (!lastTime) lastTime = currentTime;
        const dt = Math.min((currentTime - lastTime) / 16.667, 3);
        lastTime = currentTime;

        const deltaY = mouseY - anchorY;
        const deadzone = 10;

        if (Math.abs(deltaY) > deadzone) {
          const distance = deltaY > 0 ? deltaY - deadzone : deltaY + deadzone;
          const speed = Math.sign(distance) * Math.min(Math.pow(Math.abs(distance) / 10, 1.6), 80);
          window.scrollBy({ top: speed * dt, left: 0, behavior: 'instant' });

          if (deltaY < 0) {
            arrowUp?.classList.add('is-pointing');
            arrowDown?.classList.remove('is-pointing');
          } else {
            arrowDown?.classList.add('is-pointing');
            arrowUp?.classList.remove('is-pointing');
          }
        } else {
          arrowUp?.classList.remove('is-pointing');
          arrowDown?.classList.remove('is-pointing');
        }

        autoscrollRaf = window.requestAnimationFrame(autoscrollLoop);
      };

      if (autoscrollRaf !== null) window.cancelAnimationFrame(autoscrollRaf);
      autoscrollRaf = window.requestAnimationFrame(autoscrollLoop);
    };

    const hide = () => {
      isVisible = false;
      dot.classList.remove('is-active', 'is-hovering', 'is-grab', 'is-dragging');
      ring.classList.remove('is-active', 'is-hovering', 'is-pressed', 'is-grab', 'is-dragging');
      stopCursorLoop();
      stopAutoscroll();
    };

    const render = () => {
      if (!isVisible) {
        stopCursorLoop();
        return;
      }

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

      const dx = mouseX - ringX;
      const dy = mouseY - ringY;
      const dist = Math.hypot(dx, dy);

      if (dist < 0.15 && !isAutoscrolling) {
        ringX = mouseX;
        ringY = mouseY;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
        rafId = null;
        return;
      }

      const ease = 0.20;
      ringX += dx * ease;
      ringY += dy * ease;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      if (isAutoscrolling && anchor) {
        anchor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(1)`;
      }

      rafId = window.requestAnimationFrame(render);
    };

    window.addEventListener(
      'pointermove',
      (e) => {
        if (e.clientX < 0 || e.clientY < 0) return;
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (isAutoscrolling) {
          const dist = Math.hypot(mouseX - anchorX, mouseY - anchorY);
          if (dist > 30) {
            movedDuringPress = true;
          }
          if (anchor) {
            anchor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(1)`;
          }
        }

        if (!hasMoved || !isVisible) {
          hasMoved = true;
          isVisible = true;
          ringX = mouseX;
          ringY = mouseY;
          dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
          ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
          dot.classList.add('is-active');
          ring.classList.add('is-active');
        }

        if (rafId === null && isVisible) {
          rafId = window.requestAnimationFrame(render);
        }
      },
      { passive: true },
    );

    window.addEventListener(
      'mousedown',
      (e) => {
        if (e.button === 1) {
          const isLink = Boolean((e.target as HTMLElement | null)?.closest('a[href]'));
          if (isLink) return;

          e.preventDefault();

          if (isAutoscrolling) {
            stopAutoscroll();
          } else {
            startAutoscroll(e.clientX, e.clientY);
          }
          return;
        }

        if (isAutoscrolling) {
          e.preventDefault();
          e.stopPropagation();
          stopAutoscroll();
        }
      },
      true,
    );

    window.addEventListener('mouseup', (e) => {
      if (e.button === 1 && isAutoscrolling) {
        const timeHeld = Date.now() - pressStartTime;
        if (movedDuringPress && timeHeld > 400) {
          stopAutoscroll();
        }
      }
    });

    window.addEventListener('auxclick', (e) => {
      if (e.button === 1 && !((e.target as HTMLElement | null)?.closest('a[href]'))) {
        e.preventDefault();
      }
    });

    window.addEventListener(
      'wheel',
      () => {
        if (isAutoscrolling) stopAutoscroll();
      },
      { passive: true },
    );

    window.addEventListener('keydown', (e) => {
      if (isAutoscrolling && (e.key === 'Escape' || e.key === ' ' || e.key.startsWith('Arrow'))) {
        stopAutoscroll();
      }
    });

    window.addEventListener('pointerdown', (e) => {
      if (e.button === 0 && !isAutoscrolling) {
        ring.classList.add('is-pressed');
        if (ring.classList.contains('is-grab')) {
          ring.classList.add('is-dragging');
          dot.classList.add('is-dragging');
        }
      }
    });

    window.addEventListener('pointerup', (e) => {
      if (e.button === 0) {
        ring.classList.remove('is-pressed', 'is-dragging');
        dot.classList.remove('is-dragging');
      }
    });

    document.addEventListener('mouseleave', hide);
    window.addEventListener('blur', hide);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) hide();
    });

    const interactiveSelector =
      'a, button, summary, input, select, textarea, [role="button"], [role="tab"], .currency-pill, .detail-card, .plan-step, .comparison-card, .faq-summary, .theme-toggle';
    const grabSelector =
      '[data-cursor="grab"], [data-showcase-track], .showcase-track';

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(interactiveSelector);
      const grab = !interactive && target.closest(grabSelector);

      if (interactive) {
        ring.classList.add('is-hovering');
        dot.classList.add('is-hovering');
        ring.classList.remove('is-grab');
        dot.classList.remove('is-grab');
      } else if (grab) {
        ring.classList.remove('is-hovering');
        dot.classList.remove('is-hovering');
        ring.classList.add('is-grab');
        dot.classList.add('is-grab');
      } else {
        ring.classList.remove('is-hovering', 'is-grab');
        dot.classList.remove('is-hovering', 'is-grab');
      }
    };

    document.addEventListener('mouseover', updateHoverState, { passive: true });

    document.addEventListener(
      'mouseout',
      (e) => {
        if (!e.relatedTarget) {
          ring.classList.remove('is-hovering', 'is-grab', 'is-dragging');
          dot.classList.remove('is-hovering', 'is-grab', 'is-dragging');
        }
      },
      { passive: true },
    );
  } catch {
    /* Fallback safely without blocking */
  }
}

