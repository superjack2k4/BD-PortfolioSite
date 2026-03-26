import React, { useState } from 'react';
import { motion } from 'framer-motion';

const expectations = [
  {
    title: 'Flexible Support Options',
    desc: 'Monetary or in-kind contributions for agreed events.',
  },
  {
    title: 'Collaborative Planning',
    desc: 'Initial meeting to align goals & expectations.',
  },
  {
    title: 'Open Communication',
    desc: 'Frequent updates & discussions for smooth coordination.',
  },
  {
    title: 'Valuable Insights',
    desc: 'Feedback & testimonials to enhance future collaborations.',
  },
  {
    title: 'Long-Term Impact',
    desc: 'Build a sustainable, mutually beneficial partnership.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function OurExpectations() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="w-full py-20 px-6 bg-white font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-12 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="text-[#188bf6]">Our</span>{' '}
            <span className="text-black">Expectations</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col gap-4"
        >
          {expectations.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              animate={hovered === i ? { scale: 1.02, x: 6 } : { scale: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-5 p-5 rounded-2xl cursor-default transition-colors duration-200"
              style={{
                background: hovered === i
                  ? 'linear-gradient(135deg, #188bf6 0%, #a8d8ff 100%)'
                  : '#f8faff',
                boxShadow: hovered === i
                  ? '0 8px 30px rgba(24,139,246,0.22)'
                  : '0 2px 10px rgba(0,0,0,0.05)',
              }}
            >
              {/* Bullet dot */}
              <div
                className="shrink-0 w-3 h-3 rounded-full mt-2 transition-colors duration-200"
                style={{ background: hovered === i ? 'white' : '#188bf6' }}
              />
              <p
                className="text-base md:text-[17px] leading-relaxed transition-colors duration-200"
                style={{ color: hovered === i ? 'white' : '#1a2e44' }}
              >
                <span className="font-extrabold tracking-tight">{item.title}</span>
                {' – '}
                <span className="font-medium">{item.desc}</span>
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
