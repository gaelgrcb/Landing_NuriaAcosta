import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const credentials = [
    "Licenciatura en Nutrición",
    "Especialidad en Nutrición Clínica",
    "Diplomado en Nutrición Deportiva",
    "Certificación en Psiconutrición",
  ];

  return (
    <section id="sobre-mi" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-secondary rounded-[3rem] transform -rotate-3 scale-105 z-0" />
            <div className="relative z-10 w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/nuria-acosta-profile.png"
                alt="Nuria Acosta - Nutricionista"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl z-20 hidden md:block">
              <p className="text-4xl font-bold text-primary mb-1">+2</p>
              <p className="text-sm font-medium text-foreground-muted">Años de<br/>Experiencia</p>
            </div>
          </div>

          {/* Text Column */}
          <div className="order-1 lg:order-2">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Conóceme</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Hola, soy Nuria Acosta</h3>
            
            <div className="space-y-4 text-lg text-foreground-muted mb-8 leading-relaxed">
              <p>
                Mi misión es ayudarte a construir una relación sana con la comida. Olvídate de contar calorías obsesivamente o de sentir culpa por disfrutar tus alimentos favoritos.
              </p>
              <p>
                Creo firmemente en la nutrición integrativa: somos más que lo que comemos. Por eso, en nuestras consultas abordaremos tus hábitos, tu descanso, tu nivel de estrés y tus emociones.
              </p>
              <p>
                Con amor. Gael❤️
              </p>
            </div>

            <div className="space-y-4 mb-10">
              <h4 className="font-semibold text-foreground text-xl mb-4">Mi formación</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {credentials.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground-muted">
                    <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
