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
      Building Future Leaders <br className="hidden lg:block" /> Through Real-World Impact
    </>
  );

  const aboutDescription =
    "We connect young talent with meaningful experiences and organizations to create measurable impact in communities and businesses.";

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
