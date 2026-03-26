import { motion } from "framer-motion";

export default function PageIntroOverlay({ prefix = "Our", title }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="flex flex-wrap items-center justify-center gap-3 overflow-hidden text-5xl md:text-7xl">
        <motion.span
          className="text-[#212121] font-medium"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {prefix}
        </motion.span>
        <motion.span
          className="text-[#037ec3] font-bold"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {title}
        </motion.span>
      </div>
    </motion.div>
  );
}
