import { BentoCard } from "./BentoCard";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="pb-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <BentoCard span={2} className="flex-row items-center gap-6 py-8">
          <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400">
            <Mail size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold">Hablemos</h3>
            <p className="text-sm text-slate-400 mb-2">¿Tienes un proyecto en mente?</p>
            <a href="mailto:hola@ejemplo.com" className="text-blue-400 hover:underline">hola@ejemplo.com</a>
          </div>
        </BentoCard>

        <BentoCard span={2} className="justify-center items-center gap-4 py-8">
          <h3 className="text-sm font-medium text-slate-500 uppercase">Social</h3>
          <div className="flex gap-6">
            <a href="#" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-400 hover:text-white transition-all flex items-center gap-3">
              <Linkedin size={24} />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a href="#" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-400 hover:text-white transition-all flex items-center gap-3">
              <Github size={24} />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </div>
        </BentoCard>
      </div>
    </footer>
  );
}
