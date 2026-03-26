import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import PageIntroOverlay from "../components/PageIntroOverlay";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import EventSection from "../components/EventSection";
import eventsData from "../data/eventsData";
import "../styles/Events.css";

export default function Events() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 2500); // Overlay holds for 2.5s before fading out
      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  /* scroll to top on mount and disable global snap scrolling */
  useEffect(() => {
    // Force scroll to top (setTimeout helps bypass React rendering delays)
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 10);
    
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    
    // Disable global snap scrolling for this page
    const originalSnap = document.documentElement.style.getPropertyValue("scroll-snap-type");
    const originalPriority = document.documentElement.style.getPropertyPriority("scroll-snap-type");
    
    document.documentElement.style.setProperty("scroll-snap-type", "none", "important");
    
    return () => {
      document.documentElement.style.setProperty("scroll-snap-type", originalSnap, originalPriority);
    };
  }, []);

  return (
    <div className="ev-page relative">
      <AnimatePresence>
        {showIntro && <PageIntroOverlay prefix="Our" title="Events" />}
      </AnimatePresence>

      <Navbar />

      <main>
        {/* ═══════════════════════════════════════════════
            Page Header
            ═══════════════════════════════════════════════ */}
        <header className="ev-header">
          <motion.span
            className="ev-header__label"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            OUR EVENTS
          </motion.span>

          <motion.h1
            className="ev-header__title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Experiences That{" "}
            <span className="ev-header__accent">Inspire</span>
          </motion.h1>

          <motion.p
            className="ev-header__subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          >
            From leadership summits to cultural celebrations — moments that
            shape the AIESEC journey.
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            className="ev-header__divider"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          />
        </header>

        {/* ═══════════════════════════════════════════════
            Alternating Event Sections
            ═══════════════════════════════════════════════ */}
        <div className="ev-sections">
          {eventsData.map((event, i) => (
            <EventSection
              key={event.title}
              event={event}
              index={i}
              total={eventsData.length}
              reversed={i % 2 !== 0}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
