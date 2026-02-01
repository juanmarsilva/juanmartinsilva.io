"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-white/10 shadow-lg text-2xl hover:bg-slate-700/80 transition-colors"
      title={language === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={language}
          initial={{ opacity: 0, y: 10, rotateX: 90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -10, rotateX: -90 }}
          transition={{ duration: 0.15 }}
          className="block w-6 h-6 flex items-center justify-center"
        >
          {language === "es" ? "🇦🇷" : "🇺🇸"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
