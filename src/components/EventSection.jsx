import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import EventSlider from "./EventSlider";

/**
 * Full-viewport immersive event section.
 * Each section fills the screen with:
 *  - Background image slider
 *  - Dark gradient overlay
 *  - Animated content (title, description, counter)
 *  - Parallax motion on scroll
 */
export default function EventSection({ event, index, total }) {
  const sectionRef = useRef(null);

  /* parallax: content moves slower than scroll */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.05]);

  const isEven = index % 2 === 0;

  return (
    <section
      ref={sectionRef}
      className="ev-section"
      id={`event-${index}`}
    >
      {/* ── Background Slider with parallax scale ────── */}
      <motion.div className="ev-section__bg" style={{ scale: imageScale }}>
        <EventSlider images={event.images} title={event.title} />
      </motion.div>

      {/* ── Gradient Overlays ────────────────────────── */}
      <div className="ev-section__overlay" />
      <div className={`ev-section__side-gradient ${isEven ? "ev-section__side-gradient--left" : "ev-section__side-gradient--right"}`} />

      {/* ── Content ──────────────────────────────────── */}
      <motion.div
        className={`ev-section__content ${isEven ? "ev-section__content--left" : "ev-section__content--right"}`}
        style={{ y: contentY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Event number */}
          <div className="ev-section__counter">
            <span className="ev-section__counter-num">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="ev-section__counter-sep" />
            <span className="ev-section__counter-total">
              {String(total).padStart(2, "0")}
            </span>
          </div>

          {/* Title */}
          <h2 className="ev-section__title">{event.title}</h2>

          {/* Accent line */}
          <div className="ev-section__accent" />

          {/* Description */}
          <p className="ev-section__desc">{event.description}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

