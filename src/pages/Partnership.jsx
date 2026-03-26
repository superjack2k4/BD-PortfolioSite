import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import PageIntroOverlay from "../components/PageIntroOverlay";
import Navbar from "../layouts/Navbar";

export default function Partnership() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => setShowIntro(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {showIntro && <PageIntroOverlay prefix="Our" title="Partners" />}
      </AnimatePresence>
      <Navbar />
      <div className="pt-20 px-8">
        <h1 className="text-4xl font-bold">Partnerships</h1>
      </div>
    </div>
  );
}
