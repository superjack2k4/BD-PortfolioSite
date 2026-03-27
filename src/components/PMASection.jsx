import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

// Assets
import pma1 from "../assets/PMA/1.png";
import pma2 from "../assets/PMA/2.png";
import pma3 from "../assets/PMA/3.png";
import pma4 from "../assets/PMA/4.png";

const slides = [
  { id: 1, src: pma1, alt: "Public Media Appearance 1" },
  { id: 2, src: pma2, alt: "Public Media Appearance 2" },
  { id: 3, src: pma3, alt: "Public Media Appearance 3" },
  { id: 4, src: pma4, alt: "Public Media Appearance 4" },
];

const AUTOPLAY_MS = 2800;
const EASE = [0.25, 0.9, 0.3, 1]; // Smooth spring-like cubic-bezier
const DURATION = 0.55;

const PMASection = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dragX = useRef(0);
  const total = slides.length;

  // ── Autoplay ──
  useEffect(() => {
    if (paused || dragging) return;
    const id = setInterval(() => setActive((p) => (p + 1) % total), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, dragging, total]);

  const next = useCallback(() => setActive((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setActive((p) => (p - 1 + total) % total), [total]);

  // ── Drag / Swipe ──
  const onDown = (e) => {
    setDragging(true);
    dragX.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
  };
  const onUp = (e) => {
    if (!dragging) return;
    const end = e.clientX ?? e.changedTouches?.[0]?.clientX ?? 0;
    const d = end - dragX.current;
    if (d > 40) prev();
    else if (d < -40) next();
    setDragging(false);
  };

  // ── Slide positioning: only 3 visible (center + 2 sides) ──
  const getProps = (idx) => {
    let diff = idx - active;
    if (diff < -(total / 2)) diff += total;
    if (diff > total / 2) diff -= total;

    const pos = {
      // Center
      0: {
        x: "0%", scale: 1, opacity: 1, zIndex: 20, y: 0,
        shadow: "0 20px 50px -12px rgba(0,0,0,0.18), 0 8px 24px -8px rgba(24,139,246,0.12)",
      },
      // Left
      "-1": {
        x: "-72%", scale: 0.78, opacity: 0.88, zIndex: 10, y: 8,
        shadow: "0 8px 24px -8px rgba(0,0,0,0.10)",
      },
      // Right
      1: {
        x: "72%", scale: 0.78, opacity: 0.88, zIndex: 10, y: 8,
        shadow: "0 8px 24px -8px rgba(0,0,0,0.10)",
      },
    };

    // Only render center + immediate neighbours
    if (Math.abs(diff) > 1) {
      // Hidden — positioned off-screen in direction of travel for smooth entry
      return {
        x: diff < 0 ? "-120%" : "120%",
        scale: 0.6, opacity: 0, zIndex: 0, y: 16,
        shadow: "none",
        visible: false, isCenter: false, isLeft: false, isRight: false,
      };
    }

    const p = pos[diff];
    return {
      ...p,
      visible: true,
      isCenter: diff === 0,
      isLeft: diff === -1,
      isRight: diff === 1,
    };
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* ── Title ── */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black">
            <span className="text-[#188bf6]">Public Media</span>{" "}
            <span className="text-black">Appearance</span>
          </h2>
          <p className="mt-3 text-gray-400 text-base font-medium">
            Highlights from our latest media features
          </p>
        </div>

        {/* ── Carousel ── */}
        <div
          className="relative w-full max-w-5xl mx-auto select-none"
          style={{
            height: "clamp(260px, 38vw, 400px)",
            cursor: dragging ? "grabbing" : "grab",
            touchAction: "pan-y",
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => { setPaused(false); setDragging(false); }}
          onMouseDown={onDown}
          onMouseUp={onUp}
          onTouchStart={onDown}
          onTouchEnd={onUp}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {slides.map((slide, idx) => {
              const p = getProps(idx);

              return (
                <motion.div
                  key={slide.id}
                  initial={false}
                  animate={{
                    x: p.x,
                    y: p.y,
                    scale: p.scale,
                    opacity: p.opacity,
                    zIndex: p.zIndex,
                  }}
                  transition={{ duration: DURATION, ease: EASE }}
                  style={{
                    position: "absolute",
                    willChange: "transform, opacity",
                    transformOrigin: "center center",
                    boxShadow: p.shadow,
                    borderRadius: "1rem",
                  }}
                  className={`w-[60%] sm:w-[50%] md:w-[42%] overflow-hidden ${
                    !p.visible ? "pointer-events-none" : ""
                  }`}
                  onClick={() => {
                    if (p.isLeft) prev();
                    if (p.isRight) next();
                  }}
                >
                  <div
                    className="relative overflow-hidden rounded-2xl"
                    style={{
                      border: p.isCenter
                        ? "2.5px solid rgba(24,139,246,0.18)"
                        : "1.5px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-auto block select-none pointer-events-none"
                      draggable={false}
                    />
                    {/* Side-slide tint — subtle, NOT washed out */}
                    {!p.isCenter && p.visible && (
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.14) 100%)",
                        }}
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── Dot Indicators ── */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-40">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setActive(i); }}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 h-2.5 bg-[#188bf6] shadow-[0_0_10px_rgba(24,139,246,0.35)]"
                    : "w-2.5 h-2.5 bg-gray-300/80 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PMASection;
