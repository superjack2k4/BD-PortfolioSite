import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import React, { useEffect } from "react";
import HomeHero from "../layouts/HomeHero";
import heroSec1 from "../assets/heroSection/heroSec1.webp";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutTitle = (
    <>
      Crafting Excellence <br className="hidden sm:block" /> Together
    </>
  );

  const aboutDescription =
    "At AIESEC we believe in the power of collaboration to achieve outstanding results. With a team of skilled leaders and a commitment to quality, we work hand-in-hand with our partners to bring ideas to life. Together, we create spaces and solutions that stand the test of time.";

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Reusing the exact HomeHero layout as requested */}
        <HomeHero 
          title={aboutTitle} 
          description={aboutDescription} 
          customImages={[heroSec1]} 
        />
        
        {/* More about page content can go here below the hero */}
      </main>

      <Footer />
    </div>
  );
}
