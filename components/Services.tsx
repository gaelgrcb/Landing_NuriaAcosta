import { Apple, Activity, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Consulta Inicial",
    description: "Evaluación completa de tu estado actual, historial clínico, hábitos y objetivos. Incluye tu primer plan nutricional personalizado.",
    icon: <Apple size={32} className="text-primary" />,
    features: ["Historia clínica y dietética", "Evaluación corporal", "Plan de alimentación", "Educación nutricional"],
  },
  {
    title: "Plan de Seguimiento",
    description: "Ajustamos tu plan según tus avances. Evaluamos cambios en composición corporal y resolvemos todas tus dudas.",
    icon: <Activity size={32} className="text-accent" />,
    features: ["Ajuste de plan nutricional", "Medición de progresos", "Nuevas recetas", "Soporte continuo"],
  },
  {
    title: "Nutrición Especializada",
    description: "Programas diseñados para objetivos específicos: rendimiento deportivo, embarazo, o condiciones clínicas (diabetes, SOP).",
    icon: <Heart size={32} className="text-primary-dark" />,
    features: ["Protocolos específicos", "Suplementación", "Monitoreo detallado", "Atención prioritaria"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-background-alt relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Mis Servicios</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Programas diseñados para tus necesidades</h3>
          <p className="text-foreground-muted text-lg">
            No creo en las dietas de moda ni en las restricciones extremas. Mi enfoque es enseñarte a comer de manera inteligente y saludable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-border/50 group flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-3">{service.title}</h4>
              <p className="text-foreground-muted mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                href="#contacto" 
                className="mt-auto flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors group/link"
              >
                Solicitar información 
                <ArrowRight size={18} className="transform group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
