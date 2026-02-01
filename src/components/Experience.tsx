import { BentoCard } from "./BentoCard";
import { cn } from "@/lib/utils";

export function Experience() {
  const experiences = [
    {
      role: "Front End Developer",
      company: "Quares IT Solutions",
      period: "2023 - Presente",
      activities: [
        "Desarrollo y mantenimiento de interfaces de usuario modernas utilizando Next.js y TypeScript.",
        "Optimización de performance y Core Web Vitals para aplicaciones de alta escalabilidad.",
        "Implementación de sistemas de diseño robustos con Tailwind CSS y Framer Motion.",
        "Colaboración estrecha con equipos de Producto y UI/UX para asegurar la mejor experiencia de usuario."
      ],
      highlight: true
    }
  ];

  return (
    <>
      {experiences.map((exp, index) => (
        <BentoCard 
          key={index} 
          span={2} 
          className={cn(
            "relative group border-purple-500/10",
            exp.highlight 
              ? "bg-gradient-to-br from-purple-500/15 via-purple-500/5 to-transparent border-purple-500/20" 
              : "hover:bg-purple-500/5"
          )}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors uppercase tracking-tight">
                {exp.role}
              </h3>
              <p className="text-lg text-slate-400 font-medium">{exp.company}</p>
            </div>
            <div className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-semibold whitespace-nowrap">
              {exp.period}
            </div>
          </div>
          
          <ul className="space-y-3">
            {exp.activities.map((activity, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-400 leading-relaxed text-sm md:text-base">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500/40 shrink-0" />
                {activity}
              </li>
            ))}
          </ul>
        </BentoCard>
      ))}
    </>
  );
}
