import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sponsor Logos
import logo1 from '../assets/Sponsers logo/Barista.png';
import logo2 from '../assets/Sponsers logo/GDG-Lockup-1Line-Black_vMWBFT9.svg';
import logo3 from '../assets/Sponsers logo/Hameedia-full-Logo-Mark.png';
import logo4 from '../assets/Sponsers logo/Samaposha.png';
import logo5 from '../assets/Sponsers logo/SkyGate.png';
import logo6 from '../assets/Sponsers logo/Uniliver.png';
import logo7 from '../assets/Sponsers logo/afc.webp';

// Previews (Sponsor Posts)
import img1 from '../assets/Spons posts/Barista.png';
import img2 from '../assets/Spons posts/GDG SL.png';
import img3 from '../assets/Spons posts/Hameedia.png';
import img4 from '../assets/Spons posts/Samaposa.png';
import img5 from '../assets/Spons posts/SKY GATE.png';
import img6 from '../assets/Spons posts/Unilever.png';
import img7 from '../assets/Spons posts/AFC.png';

const partnersData = [
  { name: "Barista", logo: logo1, preview: img1 },
  { name: "Global Developer Group", logo: logo2, preview: img2 },
  { name: "Hameedia", logo: logo3, preview: img3 },
  { name: "Samaposha", logo: logo4, preview: img4 },
  { name: "SkyGate", logo: logo5, preview: img5 },
  { name: "Unilever", logo: logo6, preview: img6 },
  { name: "AFC", logo: logo7, preview: img7 },
];

function PartnerHoverCard({ partner }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-[280px] p-2 bg-white rounded-xl shadow-[0_15px_40px_-5px_rgba(0,0,0,0.15)] border border-gray-100 z-50 pointer-events-none"
    >
      <div className="rounded-lg overflow-hidden bg-gray-50 aspect-square shadow-sm">
        <img 
          src={partner.preview} 
          alt={`${partner.name} preview`} 
          className="w-full h-full object-contain" 
        />
      </div>
      {partner.name && (
        <p className="text-center font-bold text-gray-800 tracking-tight text-sm py-2">
          {partner.name}
        </p>
      )}
      
      {/* Triangle pointer */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45 shadow-[4px_4px_10px_rgba(0,0,0,0.03)]" />
    </motion.div>
  );
}

function PartnerCircle({ partner }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex justify-center items-center w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && <PartnerHoverCard partner={partner} />}
      </AnimatePresence>

      <motion.div
        animate={
          isHovered 
            ? { scale: 1.08, boxShadow: "0 0 20px rgba(24,139,246,0.25)", borderColor: "#188bf6" } 
            : { scale: 1, boxShadow: "0 0 0px rgba(24,139,246,0)", borderColor: "#188bf6" }
        }
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] rounded-full border-2 bg-white flex items-center justify-center relative z-10 cursor-pointer shadow-sm mx-auto"
      >
        <img
          src={partner.logo}
          alt={`${partner.name} logo`}
          className="object-contain max-w-[70%] max-h-[70%] mix-blend-multiply"
        />
      </motion.div>
    </div>
  );
}

export default function PartnerCollage() {
  return (
    <section className="w-full py-24 px-6 bg-gray-50 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-[#188bf6]">Our</span>{' '}
            <span className="text-black">Partners</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg font-medium max-w-xl mx-auto">
            Proud to collaborate with organisations making a difference.
          </p>
        </motion.div>

        {/* 3-Column Structured Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 max-w-3xl mx-auto place-items-center">
          {partnersData.map((partner, i) => {
            const isLastOdd = i === partnersData.length - 1 && (partnersData.length % 2 === 1 || partnersData.length % 3 === 1);
            
            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className={`w-full flex justify-center ${isLastOdd ? 'col-span-2 md:col-span-3' : ''}`}
              >
                <PartnerCircle partner={partner} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
