import { motion } from "framer-motion";
import heroBg from "../assets/HeroPage2.webp";

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

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden snap-start shrink-0">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl text-center md:text-left"
      >
        {/* Hero Image */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 z-10" />

        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className=" max-w-3xl text-center md:text-left">
            <motion.h1
              variants={fadeSlide}
              className=" text-4xl md:text-6xl font-extrabold text-white leading-tight"
            >
              Develop Leadership <br className="hidden md:block" /> While
              Changing the World
            </motion.h1>

            <motion.p
              variants={fadeSlide}
              className=" text-gray-200 mt-6 text-lg md:text-xl max-w-lg"
            >
              AIESEC is the world's largest youth-led organization, focused on
              developing leadership through cross-cultural exchanges.
            </motion.p>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
