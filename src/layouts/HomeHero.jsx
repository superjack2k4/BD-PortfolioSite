import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroSec1 from "../assets/heroSection/heroSec1.webp";
import heroSec2 from "../assets/heroSection/heroSec2.webp";
import heroSec3 from "../assets/heroSection/heroSec3.webp";
import heroSec4 from "../assets/heroSection/heroSec4.webp";

const images = [heroSec1, heroSec2, heroSec3, heroSec4];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeSlide = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function HomeHero({
  title = (
    <>
      Develop Leadership <br className="hidden sm:block" /> While
      Changing the World
    </>
  ),
  description = "AIESEC is the world's largest youth-led organization, focused on developing leadership through cross-cultural exchanges.",
  customImages,
}) {
  const displayImages = customImages || images;
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % displayImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, [displayImages.length]);

  return (
    <section className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden snap-start shrink-0">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full text-center sm:text-left"
      >
        {/* Looping Hero Images */}
        {displayImages.map((img, index) => (
          <motion.div
            key={img}
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: currentImage === index ? 1 : 0,
              scale: 1.1,
            }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 12, repeat: Infinity, repeatType: "reverse", ease: "linear" },
            }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 z-10" />

        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className=" max-w-3xl text-center sm:text-left">
            <motion.h1
              variants={fadeSlide}
              className=" text-4xl md:text-6xl font-extrabold text-white leading-tight"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={fadeSlide}
              className=" text-gray-200 mt-6 text-lg md:text-xl max-w-lg"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
