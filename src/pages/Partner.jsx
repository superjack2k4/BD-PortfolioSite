import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import PartnerRequirements from "../components/PartnerRequirements";
import WhyPartnerSection from "../components/WhyPartnerSection";
import OurExpectations from "../components/OurExpectations";
import PartnerCollage from "../components/PartnerCollage";
import heroImg from "../assets/heroPage.webp";

export default function Partner() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white overflow-hidden">
      <Navbar />

      <main className="flex-grow">
        {/* Custom Hero Section for Partner Page */}
        <section className="relative w-full bg-gray-50 pt-16 pb-12 lg:pt-28 lg:pb-24">
          <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center gap-12">
            
            {/* Left Content */}
            <motion.div 
              initial="hidden" animate="visible" variants={slideIn}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                <span className="text-[#188bf6]">Entity</span> <span className="text-black">Partnership</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Join forces with AIESEC in University of Kelaniya to empower youth and create lasting impact through global connections.
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                <img src={heroImg} alt="Entity Partnership" className="w-full h-auto object-cover max-h-[450px]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#188bf6]/20 to-transparent mix-blend-overlay pointer-events-none"></div>
              </div>
            </motion.div>

          </div>
        </section>

        <PartnerRequirements />
        <WhyPartnerSection />
        <OurExpectations />
        <PartnerCollage />
      </main>

      <Footer />
    </div>
  );
}
