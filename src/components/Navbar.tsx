"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { User, Code, Briefcase, Mail } from "lucide-react";

const navItems = [
  { name: "Sobre Mí", href: "#hero", icon: User },
  { name: "Stack", href: "#stack", icon: Code },
  { name: "Experiencia", href: "#experience", icon: Briefcase },
  { name: "Contacto", href: "#contact", icon: Mail },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl"
    >
      <div className="glass px-6 py-3 rounded-full flex items-center justify-between shadow-2xl">
        <div className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          JMS.
        </div>
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <item.icon size={16} className="group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
