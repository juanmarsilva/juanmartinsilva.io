import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { TechStack } from "@/components/TechStack";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Main Content Grid */}
      <section id="stack" className="py-20 relative">
        <div className="absolute inset-0 bg-purple-500/5 blur-[100px] -z-10" />
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Stack Tecnológico</h2>
          <p className="text-slate-400">Herramientas y tecnologías que domino para crear productos digitales.</p>
        </div>
        <BentoGrid>
          <TechStack />
        </BentoGrid>
      </section>

      <section id="experience" className="py-20 relative">
        <div className="absolute inset-0 bg-blue-500/5 blur-[100px] -z-10" />
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Trayectoria</h2>
          <p className="text-slate-400">Impacto y resultados en proyectos de alto nivel.</p>
        </div>
        <BentoGrid>
          <Experience />
        </BentoGrid>
      </section>

      {/* Contact & Closing */}
      <Footer />
    </main>
  );
}
