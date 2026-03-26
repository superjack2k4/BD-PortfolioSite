import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';



export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Helper to get relative indices for infinite loop
  const getRelativeIndex = (offset) => {
    const len = images.length;
    return (currentIndex + offset + len) % len;
  };

  return (
    <div className="relative w-full max-w-[600px] mx-auto h-[350px] sm:h-[450px] flex items-center justify-center overflow-hidden py-4">
      {/* Container for cards */}
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Render all cards dynamically for smooth property transitions based on stable keys */}
        {images.map((item, index) => {
          const total = images.length;
          let diff = index - currentIndex;

          // Adjust circular looping distance
          if (diff < -Math.floor(total / 2)) diff += total;
          if (diff > Math.floor(total / 2)) diff -= total;

          const isCenter = diff === 0;
          const isLeft = diff === -1 || (total === 2 && diff < 0);
          const isRight = diff === 1;
          const isVisible = isCenter || isLeft || isRight;

          let xTransform = "0%";
          let opacity = 0;
          let scale = 0.85;
          let zIndex = 0;

          if (isCenter) {
            xTransform = "0%";
            opacity = 1;
            scale = 1;
            zIndex = 20;
          } else if (isLeft) {
            xTransform = "-60%";
            opacity = 0.8;
            scale = 0.85;
            zIndex = 5;
          } else if (isRight) {
            xTransform = "60%";
            opacity = 0.8;
            scale = 0.85;
            zIndex = 5;
          } else {
            xTransform = diff < 0 ? "-100%" : "100%";
            opacity = 0;
            scale = 0.85;
            zIndex = 0;
          }

          return (
            <motion.div
              key={item.id}
              initial={false}
              animate={{ 
                x: xTransform, 
                scale: scale, 
                opacity: opacity,
                zIndex: zIndex
              }}
              style={{ willChange: "transform, opacity" }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className={`absolute w-[200px] h-[280px] sm:w-[260px] sm:h-[360px] rounded-[24px] overflow-hidden shadow-2xl origin-center bg-gray-200 cursor-pointer ${isCenter ? 'border-[4px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.3)]' : 'shadow-none'} ${!isVisible ? 'pointer-events-none' : ''}`}
              onClick={() => {
                if (isLeft) handlePrev();
                if (isRight) handleNext();
              }}
            >
              <img 
                src={item.image} 
                alt={item.title || "Carousel Image"} 
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
