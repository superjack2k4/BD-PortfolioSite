import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function ImpactNumberCard({ val, label, borderClass, startAnimation }) {
  // 1. Separate the numeric part from potential suffixes (e.g., "1600" and "+")
  const numericVal = parseInt(val.replace(/[^0-9]/g, ""), 10);
  const suffix = val.replace(/[0-9]/g, "");

  const [displayVal, setDisplayVal] = useState(0);

  const controls = useAnimation();

  useEffect(() => {
    if (startAnimation) {
      // Start the container fade-up
      controls.start("visible");

      // Framer Motion doesn't natively tween React state strings, but we can animate a dummy object
      // and use its 'onUpdate' to update our state.
      let startTime;
      const duration = 1000; // 1 second

      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Easing function (easeOutExpo)
        const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setDisplayVal(Math.floor(easeOutProgress * numericVal));

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [startAnimation, numericVal, controls]);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className={`flex flex-col items-center justify-center p-4 
        ${borderClass || ""}
      `}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-blue mb-2 tabular-nums">
        {displayVal}
        {suffix}
      </h2>
      <p className="text-gray-500 font-medium text-sm md:text-lg uppercase tracking-wider text-center">
        {label}
      </p>
    </motion.div>
  );
}
