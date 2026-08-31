"use client";

import { useEffect, useRef } from "react";

/**
 * Thin accent bar across the top showing how far down the page you are.
 *
 * Writes the transform straight to the DOM inside a rAF rather than going
 * through React state — a setState per scroll event is what made this
 * stutter. There is deliberately no CSS transition: the scroll position is
 * already frame-accurate, and easing it just makes the bar lag the page.
 */
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bar.current;
    if (!el) return;

    let frame = 0;

    const paint = () => {
      frame = 0;
      const doc = document.documentElement;
      // Recomputed every frame: reveal animations and image loads change
      // the page height as you scroll, so a cached max drifts out of date.
      const max = doc.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      el.style.transform = `scaleX(${ratio})`;
      el.style.opacity = ratio > 0.001 ? "1" : "0";
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    // Catches layout shifts that are not scroll or window resize.
    const ro = new ResizeObserver(schedule);
    ro.observe(document.body);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      ro.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      // z-50 sits above the sticky nav (z-40); isolate keeps the nav's
      // backdrop-blur from washing the bar out.
      className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none isolate"
    >
      <div
        ref={bar}
        className="h-full w-full bg-accent origin-left opacity-0"
        style={{ transform: "scaleX(0)", willChange: "transform" }}
      />
    </div>
  );
}
