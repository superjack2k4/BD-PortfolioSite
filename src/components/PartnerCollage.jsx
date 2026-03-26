import React, { useState } from 'react';
import { motion } from 'framer-motion';

import img1  from '../assets/ParnterCollage/WhatsApp Image 2026-03-26 at 22.51.38 (1).jpeg';
import img2  from '../assets/ParnterCollage/WhatsApp Image 2026-03-26 at 22.51.38 (2).jpeg';
import img3  from '../assets/ParnterCollage/WhatsApp Image 2026-03-26 at 22.51.38 (3).jpeg';
import img4  from '../assets/ParnterCollage/WhatsApp Image 2026-03-26 at 22.51.38.jpeg';
import img5  from '../assets/ParnterCollage/WhatsApp Image 2026-03-26 at 22.51.39 (1).jpeg';
import img6  from '../assets/ParnterCollage/WhatsApp Image 2026-03-26 at 22.51.39.jpeg';
import img7  from '../assets/ParnterCollage/WhatsApp Image 2026-03-26 at 22.51.40 (1).jpeg';
import img8  from '../assets/ParnterCollage/WhatsApp Image 2026-03-26 at 22.51.40.jpeg';
import img9  from '../assets/ParnterCollage/WhatsApp Image 2026-03-26 at 22.51.41 (1).jpeg';
import img10 from '../assets/ParnterCollage/WhatsApp Image 2026-03-26 at 22.51.41 (2).jpeg';
import img11 from '../assets/ParnterCollage/WhatsApp Image 2026-03-26 at 22.51.41 (3).jpeg';
import img12 from '../assets/ParnterCollage/WhatsApp Image 2026-03-26 at 22.51.41.jpeg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function PartnerCollage() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="w-full py-20 px-6 bg-gray-50 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-[#188bf6]">Our</span>{' '}
            <span className="text-black">Partners</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg font-medium max-w-xl mx-auto">
            Proud to collaborate with organisations making a difference.
          </p>
        </motion.div>

        {/* Collage grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5"
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              animate={
                hovered === i
                  ? { scale: 1.06, zIndex: 10 }
                  : hovered !== null
                  ? { scale: 0.96, opacity: 0.7 }
                  : { scale: 1, opacity: 1, zIndex: 1 }
              }
              transition={{ duration: 0.25 }}
              className="relative rounded-2xl overflow-hidden bg-white cursor-pointer"
              style={{
                boxShadow:
                  hovered === i
                    ? '0 12px 40px rgba(24,139,246,0.3)'
                    : '0 2px 12px rgba(0,0,0,0.08)',
              }}
            >
              {/* Image */}
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={src}
                  alt={`Partner ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Hover overlay ring */}
              {hovered === i && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    border: '2.5px solid #188bf6',
                    background: 'rgba(24,139,246,0.04)',
                  }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
