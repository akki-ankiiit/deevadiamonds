import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let lenis = null;

export function getLenis() {
  return lenis;
}

/** Smooth scrolling, created once for the lifetime of the app. */
export function useSmoothScroll() {
  useEffect(() => {
    if (reducedMotion()) return undefined;
    document.documentElement.classList.add("js-motion");
    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      anchors: { offset: -96 },
    });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenis = null;
    };
  }, []);
}

/** Per-route scroll reset, reveal-on-scroll and image parallax. */
export function usePageMotion() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const target = hash ? document.querySelector(hash) : null;
    if (target) {
      requestAnimationFrame(() =>
        lenis
          ? lenis.scrollTo(target, { immediate: true, offset: -96 })
          : target.scrollIntoView(),
      );
    } else if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);

    if (reducedMotion()) return undefined;

    // A fully clipped element never reports as intersecting, so masked
    // elements are observed through their parent.
    const targets = new Map();
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (targets.get(entry.target) || []).forEach((node) =>
            node.classList.add("is-revealed"),
          );
          observer.unobserve(entry.target);
        }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    document
      .querySelectorAll("[data-reveal]:not(.is-revealed)")
      .forEach((node) => {
        const watch =
          node.dataset.reveal === "mask" ? node.parentElement : node;
        targets.set(watch, [...(targets.get(watch) || []), node]);
        observer.observe(watch);
      });

    const mm = gsap.matchMedia();
    mm.add("(min-width: 900px)", () => {
      gsap.utils.toArray("[data-parallax]").forEach((el) => {
        const amount = Number(el.dataset.parallax) || 8;
        gsap.fromTo(
          el,
          { yPercent: -amount },
          {
            yPercent: amount,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    });
    const refresh = setTimeout(() => ScrollTrigger.refresh(), 400);

    return () => {
      clearTimeout(refresh);
      observer.disconnect();
      mm.revert();
    };
  }, [pathname, hash]);
}
