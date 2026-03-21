import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    title: "Global Network",
    description:
      "Connect with a global network of 75,000+ youth and professionals across the world.",
    bullets: [
      "Access opportunities in 120+ countries",
      "Build lifelong international friendships",
      "Join a diverse community of change-makers",
    ],
  },
  {
    title: "Skill Development",
    description:
      "Build leadership, communication, and professional skills through real-world experiences.",
    bullets: [
      "Hands-on leadership training",
      "Cross-cultural communication skills",
      "Mentorship from experienced professionals",
    ],
  },
  {
    title: "Hassle-Free Process",
    description:
      "We guide you through every step — from application to your exchange experience.",
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
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-3">
            Why join
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
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
                gap-4
              "
            >
              {/* Accent bar */}
              <div className="w-10 h-1 rounded-full bg-[#037ec3]" />

              {/* Title */}
              <h3 className="text-xl font-semibold text-brand-dark">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.description}
              </p>

              {/* Bullet points */}
              <ul className="mt-auto flex flex-col gap-2">
                {card.bullets.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span
                      className="mt-[5px] w-2 h-2 rounded-full shrink-0"
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
