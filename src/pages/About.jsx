import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import PageIntroOverlay from "../components/PageIntroOverlay";
import HomeHero from "../layouts/HomeHero";
import heroPageImg from "../assets/heroPage.webp";
import AboutStats from "../components/AboutStats";
import AboutProducts from "../components/AboutProducts";

export default function About() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Stop intro after 2.5s
    if (showIntro) {
      const timer = setTimeout(() => setShowIntro(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  const aboutTitle = (
    <>
      Building Future Leaders <br className="hidden lg:block" /> Through Real-World Impact
    </>
  );

  const aboutDescription =
    "We connect young talent with meaningful experiences and organizations to create measurable impact in communities and businesses.";

  return (
    <div className="flex flex-col min-h-screen font-sans relative">
      <AnimatePresence>
        {showIntro && <PageIntroOverlay prefix="Our" title="Story" />}
      </AnimatePresence>

      <Navbar />

      <main className="flex-grow">
        {/* Reusing the exact HomeHero layout as requested */}
        <HomeHero 
          title={aboutTitle} 
          description={aboutDescription} 
          customImages={[heroPageImg]} 
        />
        
        <AboutStats />
        <AboutProducts />
      </main>

      <Footer />
    </div>
  );
}
