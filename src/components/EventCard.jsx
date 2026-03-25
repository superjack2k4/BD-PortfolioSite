import { motion } from "framer-motion";
import EventCarousel from "./EventCarousel";

export default function EventCard({ event, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: index * 0.12,
      }}
      className="event-card group"
    >
      {/* ── Carousel ────────────────────────────────── */}
      <div className="event-card__carousel">
        <EventCarousel images={event.images} title={event.title} />
      </div>

      {/* ── Body ────────────────────────────────────── */}
      <div className="event-card__body">
        {/* Accent bar */}
        <div className="event-card__accent" />

        <h3 className="event-card__title">{event.title}</h3>
        <p className="event-card__desc">{event.description}</p>

        {/* Image count badge */}
        <span className="event-card__badge">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="event-card__badge-icon"
          >
            <path
              fillRule="evenodd"
              d="M1 5.25A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25v9.5A2.25 2.25 0 0116.75 17H3.25A2.25 2.25 0 011 14.75v-9.5zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-2.69l-2.22-2.219a.75.75 0 00-1.06 0l-1.91 1.909-4.22-4.22a.75.75 0 00-1.06 0L2.5 11.06zm6.5-3.81a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
              clipRule="evenodd"
            />
          </svg>
          {event.images.length} photos
        </span>
      </div>
    </motion.article>
  );
}
