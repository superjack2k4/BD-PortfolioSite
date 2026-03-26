import React, { useState } from 'react';
import { motion } from 'framer-motion';

const benefits = [
  { text: 'Boost brand recognition locally & globally.' },
  { text: 'Connect with university graduates & undergraduates.' },
  { text: 'Tap into global talent for internships & exposure.' },
  { text: 'Gain extensive promotions via AIESEC\'s networks.' },
  { text: 'Strengthen brand presence among key audiences.' },
  { text: 'Engage with schools through impactful initiatives.' },
  { text: 'Access talent with seasonal skills & expertise.' },
  { text: 'Support CSR initiatives with driven youth.' },
  { text: 'Receive a tailored partnership proposal.' },
  { text: 'Collaborate with skilled young leaders for innovation.' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function WhyPartnerSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="w-full py-20 px-6 bg-gray-50 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={titleVariants}
          className="mb-14 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="text-[#188bf6]">Why Partner</span>{' '}
            <span className="text-black">With Us?</span>
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              animate={hovered === i ? { scale: 1.03 } : { scale: 1 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-4 p-5 rounded-2xl cursor-default transition-colors duration-200"
              style={{
                background: hovered === i
                  ? 'linear-gradient(135deg, #188bf6 0%, #a8d8ff 100%)'
                  : 'white',
                boxShadow: hovered === i
                  ? '0 8px 30px rgba(24,139,246,0.25)'
                  : '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              <p
                className="text-base md:text-[17px] font-semibold leading-snug transition-colors duration-200"
                style={{ color: hovered === i ? 'white' : '#1a2e44' }}
              >
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
