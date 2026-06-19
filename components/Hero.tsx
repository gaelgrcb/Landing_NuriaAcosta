import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background">
      {/* Subtle background decorative shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-secondary opacity-50 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-primary-light opacity-10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-start text-left gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-dark/30 text-primary-dark text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Nutrición basada en evidencia
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] tracking-tight">
              Transforma tus hábitos, <span className="text-primary">mejora tu vida.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-lg">
              Encuentra tu balance ideal sin dietas restrictivas. Te acompaño a crear un estilo de vida saludable que disfrutes y puedas mantener para siempre.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <Link
                href="#contacto"
                className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-full font-medium hover:bg-primary-light transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/30"
              >
                Comienza tu Cambio
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#servicios"
                className="inline-flex justify-center items-center px-8 py-3.5 bg-transparent border-2 border-border text-foreground rounded-full font-medium hover:border-primary hover:text-primary transition-colors"
              >
                Ver Servicios
              </Link>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary-dark/10 ring-1 ring-border/50">
            <Image
              src="/images/hero-nutrition.png"
              alt="Alimentación saludable y nutrición balanceada"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Overlay gradient for a more premium look */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}
