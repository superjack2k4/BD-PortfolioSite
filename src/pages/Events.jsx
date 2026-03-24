import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import EventSection from "../components/EventSection";
import eventsData from "../data/eventsData";
import "../styles/Events.css";

export default function Events() {
  const [activeSection, setActiveSection] = useState(0);
  const totalSections = eventsData.length + 1; // +1 for hero

  /* scroll to top on mount */
  useEffect(() => {
    window.scrollTo(0, 0);
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  /* track which section is in view for side nav dots */
  useEffect(() => {
    const sections = document.querySelectorAll(".ev-section, .events-hero");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Array.from(sections).indexOf(entry.target);
            if (idx !== -1) setActiveSection(idx);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* scroll to section on dot click */
  const scrollToSection = useCallback((idx) => {
    const sections = document.querySelectorAll(".ev-section, .events-hero");
    sections[idx]?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="flex flex-col min-h-screen" style={{ scrollSnapType: "y mandatory" }}>
      <Navbar />

      <main className="flex-grow">
        {/* ═══════════════════════════════════════════════
            Hero Section
            ═══════════════════════════════════════════════ */}
        <section className="events-hero">
          {/* Floating decorative dots */}
          <div className="events-hero__dots">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="events-hero__dot" />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="events-hero__content"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="events-hero__badge"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width="14"
                height="14"
              >
                <path
                  fillRule="evenodd"
                  d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                  clipRule="evenodd"
                />
              </svg>
              Our Events
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="events-hero__title"
            >
              Experiences That <span>Inspire</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="events-hero__subtitle"
            >
              From leadership summits to cultural celebrations — scroll through
              the moments that define the AIESEC journey.
            </motion.p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="events-hero__scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <span>Scroll to explore</span>
            <div className="events-hero__scroll-line" />
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════
            Immersive Event Sections
            ═══════════════════════════════════════════════ */}
        {eventsData.map((event, i) => (
          <EventSection
            key={event.title}
            event={event}
            index={i}
            total={eventsData.length}
          />
        ))}
      </main>

      {/* ── Side Navigation Dots ──────────────────────── */}
      <nav className="ev-nav" aria-label="Event sections navigation">
        {Array.from({ length: totalSections }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(i)}
            className={`ev-nav__dot ${activeSection === i ? "ev-nav__dot--active" : ""}`}
            aria-label={i === 0 ? "Hero section" : `Event ${i}`}
          />
        ))}
      </nav>

      <Footer />
    </div>
  );
}
