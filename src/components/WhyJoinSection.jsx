import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import globalConnection from "../assets/whyjoincard/globalConnection.jpg";
import internship from "../assets/whyjoincard/internship.png";
import hassleFree from "../assets/whyjoincard/hassleFree.webp";

const cards = [
  {
    title: "Global Network",
    image: globalConnection,
    bullets: [
      "Access opportunities in 120+ countries",
      "Build lifelong international friendships",
      "Join a diverse community of change-makers",
    ],
  },
  {
    title: "Skill Development",
    image: internship,
    bullets: [
      "Hands-on leadership training",
      "Cross-cultural communication skills",
      "Mentorship from experienced professionals",
    ],
  },
  {
    title: "Hassle-Free Process",
    image: hassleFree,
    bullets: [
      "Dedicated support throughout your journey",
      "Clear step-by-step application process",
      "Safe & structured program environment",
    ],
  },
];

export default function WhyJoinSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-white snap-start"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Fade-in heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-blue mb-4">
            Why join
          </h2>
          <p className="text-gray-500 font-normal tracking-tight leading-relaxed text-base md:text-lg max-w-xl mx-auto">
            Discover the reasons thousands of young leaders choose AIESEC every
            year.
          </p>
        </motion.div>

        {/* Cards — horizontal on md+, stacked on mobile */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, x: -80 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.7 + i * 0.2, // start after heading (0.7s)
              }}
              className="
                flex-1
                bg-gray-50
                rounded-xl
                border border-gray-200
                shadow-sm
                hover:shadow-md
                transition-shadow
                duration-300
                p-6 md:p-8
                flex flex-col
              "
            >
              {/* Accent bar */}
              <div className="w-10 h-1.5 rounded-full bg-[#037ec3] mb-5" />

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-brand-dark mb-4">
                {card.title}
              </h3>

              {/* Image Edge-to-Edge with Overlay */}
              <div className="relative w-[calc(100%+3rem)] md:w-[calc(100%+4rem)] -mx-6 md:-mx-8 h-48 md:h-56 overflow-hidden mt-1 mb-6">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/30 pointer-events-none" />
              </div>

              {/* Bullet points */}
              <ul className="mt-auto flex flex-col gap-4">
                {card.bullets.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm md:text-base font-normal leading-relaxed text-gray-600"
                  >
                    <span
                      className="mt-[6px] md:mt-[7px] w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: "#037ec3" }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
