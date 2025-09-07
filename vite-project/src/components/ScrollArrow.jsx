// components/ScrollArrow.js
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { SECTIONS } from "../utils/data.js";
import { useCurrentSection } from "../hooks/useCurrentSection";

const ScrollArrow = () => {
  const { isDarkMode } = useTheme();
  const currentSection = useCurrentSection(SECTIONS);

  const currentIndex = SECTIONS.indexOf(currentSection);
  const nextSection = SECTIONS[currentIndex + 1];

  const scrollToNext = () => {
    if (nextSection) {
      const el = document.getElementById(nextSection);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" }); // 'start' for better visibility
      }
    }
  };

  // Hide if no more sections
  if (!nextSection) return null;

  return (
    <motion.div
      onClick={scrollToNext}
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer"
    >
      <ArrowDown
        size={20}
        className={isDarkMode ? "text-gray-600" : "text-gray-400"}
      />
    </motion.div>
  );
};

export default ScrollArrow;
