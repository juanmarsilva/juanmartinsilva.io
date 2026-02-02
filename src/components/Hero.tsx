"use client";

import { motion } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { HeroAnimation } from "./HeroAnimation";

export function Hero() {
  const { t, language } = useLanguage();

  const cvUrl = `https://raw.githubusercontent.com/juanmarsilva/assets/main/cv-${language}.pdf`

  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Glow */}
      <HeroAnimation />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl relative z-10 p-12 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-[80px] shadow-2xl"
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-semibold mb-6">
          {t.hero.role}
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight pb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
          {t.hero.titlePart1} <br /> {t.hero.titlePart2}
        </h1>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-white text-slate-950 font-bold flex items-center gap-2 hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Juan_Martin_Silva_CV.pdf"
          >
            {t.hero.downloadCv} <Download size={18} />
          </motion.a>
          <motion.a
            href="#experience"
            whileHover={{ x: 5 }}
            className="group px-8 py-4 rounded-full border border-white/10 bg-slate-950 text-white font-medium flex items-center gap-2"
          >
            {t.hero.workExperience} <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
