import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HomeProjectCard({
  title,
  description,
  bgImage,
  buttonText = "Learn More",
  linkTo,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (linkTo) navigate(linkTo);
  };

  return (
    <div 
      className="relative h-screen w-screen shrink-0 overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={bgImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Flat dark overlay across the whole image as requested */}
      <div className="absolute inset-0 bg-black/40 z-[5]" />

      {/* Subtle dark gradient overlay so text is readable */}
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
          <p className="text-blue-50 font-medium text-lg md:text-xl mb-8 leading-relaxed">
            {description}
          </p>
          <button
            onClick={handleClick}
            className="px-8 py-3 bg-white text-brand-blue font-bold rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-50 hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            {buttonText}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
