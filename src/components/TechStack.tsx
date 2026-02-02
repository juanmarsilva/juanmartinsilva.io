import { BentoCard } from "./BentoCard";
import { Monitor, Smartphone, Database } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const getChipStyle = (name: string) => {
  const styles = [
    "bg-blue-500/10 border-blue-500/20 text-blue-300 hover:bg-blue-500/20",
    "bg-purple-500/10 border-purple-500/20 text-purple-300 hover:bg-purple-500/20",
    "bg-emerald-500/10 border-emerald-500/20 text-emerald-300 hover:bg-emerald-500/20",
    "bg-amber-500/10 border-amber-500/20 text-amber-300 hover:bg-amber-500/20",
    "bg-pink-500/10 border-pink-500/20 text-pink-300 hover:bg-pink-500/20",
    "bg-cyan-500/10 border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/20",
    "bg-indigo-500/10 border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/20",
    "bg-rose-500/10 border-rose-500/20 text-rose-300 hover:bg-rose-500/20",
  ];
  
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const index = Math.abs(hash) % styles.length;
  return styles[index];
};

export function TechStack() {
  const { t } = useLanguage();

  const frontendTechs = ["React", "Next.js", "Angular", "TypeScript"];
  const mobileTechs = ["Flutter", "React Native"];
  const backendTechs = ["NestJS", "PostgreSQL", "MongoDB"];

  return (
    <>
      {/* Frontend Card */}
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
            {frontendTechs.map((tech) => (
              <span key={tech} className={`px-3 py-1 rounded-md border text-xs transition-colors duration-300 ${getChipStyle(tech)}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </BentoCard>

      {/* Mobile Card */}
      <BentoCard span={1}>
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
            <Smartphone size={24} />
          </div>
          <span className="text-xs font-medium text-slate-500">{t.stack.mobileSubtitle}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{t.stack.mobileTitle}</h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-6">
          {t.stack.mobileDesc}
        </p>
        <div className="flex flex-wrap gap-2">
          {mobileTechs.map((tech) => (
            <span key={tech} className={`px-3 py-1 rounded-md border text-xs transition-colors duration-300 ${getChipStyle(tech)}`}>
              {tech}
            </span>
          ))}
        </div>
      </BentoCard>

      {/* Backend & DB Card */}
      <BentoCard span={1}>
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
            <Database size={24} />
          </div>
          <span className="text-xs font-medium text-slate-500">{t.stack.backendSubtitle}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{t.stack.backendTitle}</h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-6">
          {t.stack.backendDesc}
        </p>
        <div className="flex flex-wrap gap-2">
          {backendTechs.map((tech) => (
            <span key={tech} className={`px-3 py-1 rounded-md border text-xs transition-colors duration-300 ${getChipStyle(tech)}`}>
              {tech}
            </span>
          ))}
        </div>
      </BentoCard>
    </>
  );
}
