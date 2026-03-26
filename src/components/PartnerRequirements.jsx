import React from 'react';
import { motion } from 'framer-motion';
import investmentValueImg from '../assets/partnerIcons/investmentValue.webp';
import globalTalentImg from '../assets/partnerIcons/globaltalentAccess.webp';
import globalVolunteerImg from '../assets/partnerIcons/Global Volunteer program.webp';

export default function PartnerRequirements() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cards = [
    {
      img: investmentValueImg,
      title: 'Investment Value',
      desc: 'LKR 400,000',
    },
    {
      img: globalTalentImg,
      title: 'Global Talent Access',
      desc: '1+ internship opportunity',
    },
    {
      img: globalVolunteerImg,
      title: 'Global Volunteer Program',
      desc: '10+ overseas experiences',
    },
  ];

  return (
    <section className="font-sans">
      {/* Text Block Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A2640] mb-6 tracking-tight">
            Flexible Partnership Opportunities
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify max-w-3xl">
            We offer quarterly event engagement opportunities, with flexibility to increase involvement based on your needs. Organizations can choose preferred events and customize their level of partnership.
          </p>
        </motion.div>
      </div>

      {/* Requirements Cards Section */}
      <div
        className="w-full py-20 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <h2 className="text-2xl md:text-[28px] font-bold italic text-black font-serif leading-snug">
              Requirements to become an entity partner of AIESEC in University of Kelaniya.
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {cards.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #188bf6 0%, #a8d8ff 100%)" }}
              >
                <div className="w-28 h-28 mb-6 flex items-center justify-center">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2 tracking-tight">{card.title}</h3>
                <p className="text-white/90 font-semibold text-lg tracking-tight">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
