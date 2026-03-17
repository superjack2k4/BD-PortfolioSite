import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "../layouts/Navbar";
import HomeProjectCard from "../components/HomeProjectCard";
import HomeHero from "../layouts/HomeHero";
// import Footer from "../layouts/Footer";

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Apply a smooth spring to the raw transform value to eliminate jitter during fast mobile snapping
  const x = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "-66.66666%"]), {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
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
                bgImage="/src/assets/homeCards/card1.webp"
              />
              <HomeProjectCard
                title="Global Talent"
                description="Develop your professional skills and gain a global perspective through a professional internship abroad."
                bgImage="/src/assets/homeCards/card2.webp"
              />
              <HomeProjectCard
                title="Global Teacher"
                description="Gain international teaching experience and impact the world's future through education."
                bgImage="/src/assets/homeCards/card3.webp"
              />
            </motion.div>
          </div>

          {/* Invisible Vertical Snap Points Overlay */}
          <div className="absolute inset-0 pointer-events-none flex flex-col">
            <div className="h-screen w-full snap-start" />
            <div className="h-screen w-full snap-start" />
            <div className="h-screen w-full snap-start" />
          </div>
        </section>

        {/* STATS SECTION (Moved below cards, added snap-start) */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="py-24 bg-white border-y border-gray-100 snap-start shrink-0 min-h-screen flex items-center justify-center"
        >
          <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { val: "1600+", label: "Active Members" },
              { val: "20", label: "Universities" },
              { val: "120+", label: "Countries" },
              { val: "75+", label: "Years Impact" },
            ].map((stat, i) => (
              <div
                key={i}
                className={i !== 0 ? "md:border-l border-gray-100" : ""}
              >
                <h2 className="text-4xl md:text-5xl font-black text-brand-blue mb-2">
                  {stat.val}
                </h2>
                <p className="text-gray-500 font-medium text-lg uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Footer from your structure */}
      {/* <Footer /> */}
    </div>
  );
}
