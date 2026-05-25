"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <main className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-slate-950">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[200px] h-[200px] bg-purple-500/5 rounded-full blur-[80px] -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full p-8 md:p-12 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-[40px] shadow-2xl relative z-10"
      >
        <h1 className="text-8xl md:text-9xl font-extrabold tracking-tighter bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent select-none pb-2">
          404
        </h1>
        
        <p className="text-lg text-slate-400 mt-4 mb-8 leading-relaxed">
          {t.notFound.text}
        </p>

        <div className="flex justify-center">
          <motion.a
            href="/"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-950 font-semibold hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer"
          >
            <ArrowLeft size={18} />
            {t.notFound.button}
          </motion.a>
        </div>
      </motion.div>
    </main>
  );
}
