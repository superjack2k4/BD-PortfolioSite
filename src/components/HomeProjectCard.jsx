import { motion } from "framer-motion";

export default function HomeProjectCard({
  title,
  description,
  bgImage,
}) {
  return (
    <div 
      className="relative h-screen w-screen shrink-0 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      {/* Dark gradient overlay so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-end pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed">
            {description}
          </p>
          <button className="px-8 py-3 bg-brand-blue text-white font-bold rounded-lg hover:shadow-xl hover:bg-blue-600 transition-all duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
}
