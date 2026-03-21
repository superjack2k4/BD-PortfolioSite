import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import Navbar from "../layouts/Navbar";
import HomeProjectCard from "../components/HomeProjectCard";
import ImpactNumberCard from "../components/ImpactNumberCard";
import HomeHero from "../layouts/HomeHero";
import card1 from "../assets/homeCards/card1.webp";
import card2 from "../assets/homeCards/card2.webp";
import card3 from "../assets/homeCards/card3.webp";
import WhyJoinSection from "../components/WhyJoinSection";
// import Footer from "../layouts/Footer";

export default function Home() {
  const targetRef = useRef(null);
  const statsRef = useRef(null);
  
  // Trigger animation only when the stats section is completely in view (amount: 0.8)
  const statsInView = useInView(statsRef, { once: true, amount: 0.8 });

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Map raw continuous scroll directly
  const baseTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66666%"]);
  // Re-enable useSpring with a very tight, critically-damped configuration to prevent wobbling/bouncing
  const x = useSpring(baseTransform, {
    stiffness: 400,
    damping: 50,
    mass: 0.1,
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <HomeHero />

        {/* HORIZONTAL CAROUSEL SECTION */}
        <section ref={targetRef} className="relative h-[300vh] bg-gray-900">
          {/* Sticky Container */}
          <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <motion.div style={{ x }} className="flex w-[300vw]">
              <HomeProjectCard
                title="Global Volunteer"
                description="Contribute to the Sustainable Development Goals (SDGs) through a 6-8 week cross-cultural volunteer experience."
                bgImage={card1}
              />
              <HomeProjectCard
                title="Global Talent"
                description="Develop your professional skills and gain a global perspective through a professional internship abroad."
                bgImage={card2}
              />
              <HomeProjectCard
                title="Global Teacher"
                description="Gain international teaching experience and impact the world's future through education."
                bgImage={card3}
              />
            </motion.div>
          </div>

          {/* Invisible Vertical Snap Points Overlay */}
          <div className="absolute inset-0 pointer-events-none flex flex-col">
            <div className="h-screen w-full snap-start snap-always" />
            <div className="h-screen w-full snap-start snap-always" />
            <div className="h-screen w-full snap-start snap-always" />
          </div>
        </section>

        {/* STATS SECTION (Moved below cards, added snap-start) */}
        <section ref={statsRef} className="py-24 bg-white border-y border-gray-100 shrink-0 min-h-screen flex items-center justify-center snap-start">
          <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { val: "1600+", label: "Active Members" },
              { val: "20", label: "Universities" },
              { val: "120+", label: "Countries" },
              { val: "75+", label: "Years Impact" },
            ].map((stat, i) => {
              let borderClass = "";
              // On small screens (2x2 grid), items 1 and 3 are on the right side, so they always get a left border.
              if (i === 1 || i === 3) borderClass = "border-l-[3px] border-black";
              // On large screens (4 columns), item 2 is in the middle instead of starting a new row, so it gets a left border ONLY on lg+.
              if (i === 2) borderClass = "lg:border-l-[3px] border-black";

              return (
                <ImpactNumberCard
                  key={i}
                  val={stat.val}
                  label={stat.label}
                  borderClass={borderClass}
                  startAnimation={statsInView}
                />
              );
            })}
          </div>
        </section>

        {/* WHY JOIN SECTION */}
        <WhyJoinSection />
      </main>

      {/* Footer from your structure */}
      {/* <Footer /> */}
    </div>
  );
}
