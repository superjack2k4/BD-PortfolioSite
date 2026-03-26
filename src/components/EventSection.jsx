import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import EventSlider from "./EventSlider";

/**
 * Alternating event section — detailed structured data left, image right.
 * Clean, bright, modern-classic AIESEC layout.
 */
export default function EventSection({ event, index, total, reversed = false }) {
  const ref = useRef(null);

  // Subtle scroll parallax for the image container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={ref}
      className={`ev-block ${reversed ? "ev-block--reversed" : ""}`}
      id={`event-${index}`}
    >
      {/* ── Text Content ─────────────────────────── */}
      <motion.div
        className="ev-block__text"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <span className="ev-block__counter">
          {String(index + 1).padStart(2, "0")}
          <span className="ev-block__counter-sep">/</span>
          {String(total).padStart(2, "0")}
        </span>

        <h2 className="ev-block__title">{event.title}</h2>

        <div className="ev-block__accent-line" />

        <p className="ev-block__desc">{event.description}</p>

        {/* ── Event Details List ──────────────────────── */}
        <div className="ev-block__details">
          {event.timeline && (
            <div className="ev-block__detail-item">
              <span className="ev-block__detail-label">Timeline:</span>
              <span className="ev-block__detail-value">{event.timeline}</span>
            </div>
          )}
          {event.type && (
            <div className="ev-block__detail-item">
              <span className="ev-block__detail-label">Type:</span>
              <span className="ev-block__detail-value">{event.type}</span>
            </div>
          )}
          {event.audience && (
            <div className="ev-block__detail-item">
              <span className="ev-block__detail-label">Audience:</span>
              <span className="ev-block__detail-value">{event.audience}</span>
            </div>
          )}
          {event.participants && (
            <div className="ev-block__detail-item">
              <span className="ev-block__detail-label">Participants:</span>
              <span className="ev-block__detail-value">{event.participants}</span>
            </div>
          )}
          {event.partnership && (
            <div className="ev-block__detail-item">
              <span className="ev-block__detail-label">Partnership:</span>
              <span className="ev-block__detail-value">{event.partnership}</span>
            </div>
          )}
        </div>

        {/* ── Action Button ───────────────────────────── */}
        {event.link && (
          <button
            className="ev-block__action-btn"
            onClick={() => window.open(event.link, "_blank", "noopener,noreferrer")}
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="ev-block__action-icon"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        )}
      </motion.div>

      {/* ── Image Carousel ────────────────────────── */}
      <motion.div
        className="ev-block__media"
        style={{ y }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <EventSlider images={event.images} title={event.title} />
      </motion.div>
    </section>
  );
}
