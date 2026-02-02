"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  span?: 1 | 2 | 3 | 4;
}

export function BentoCard({ children, className, span = 1 }: BentoCardProps) {
  const spanClass = {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3",
    4: "md:col-span-4",
  }[span];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "glass overflow-hidden rounded-2xl p-6 flex flex-col justify-start transition-all hover:bg-white/10 group",
        spanClass,
        className
      )}
    >
      {children}
    </motion.div>
  );
}
