import { BentoCard } from "./BentoCard";
import { Monitor, Smartphone, Database, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function TechStack() {
  const { t } = useLanguage();

  return (
    <>
      <BentoCard span={2} className="relative group">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
            <Monitor size={24} />
          </div>
          <span className="text-xs font-medium text-slate-500">{t.stack.core}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{t.stack.frontendTitle}</h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            {t.stack.frontendDesc}
          </p>
          <div className="flex flex-wrap gap-2">
            {["React", "Next.js 15", "Angular", "Tailwind CSS", "Framer Motion"].map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </BentoCard>

      <BentoCard span={1}>
        <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 w-fit mb-4">
          <Smartphone size={24} />
        </div>
        <h3 className="text-xl font-bold mb-2">{t.stack.mobileTitle}</h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-6">
          {t.stack.mobileDesc}
        </p>
        <div className="space-y-2">
          {["Flutter", "React Native"].map((tech) => (
            <div key={tech} className="flex items-center gap-2 text-sm text-slate-300">
              <div className="w-1 h-1 rounded-full bg-purple-400" />
              {tech}
            </div>
          ))}
        </div>
      </BentoCard>

      <BentoCard span={1}>
        <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-4">
          <Database size={24} />
        </div>
        <h3 className="text-xl font-bold mb-2">{t.stack.backendTitle}</h3>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-400">
          {["NestJS", "TS", "PostgreSQL", "Oracle", "MongoDB"].map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </BentoCard>
    </>
  );
}
