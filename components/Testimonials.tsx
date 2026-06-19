import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "María Fernanda P.",
      goal: "Pérdida de grasa y recomposición corporal",
      text: "Llevaba años intentando bajar de peso con dietas extremas que solo me daban rebote. Con Nuria aprendí a comer de todo, mejoré mi digestión y logré mi meta sin sentir que estaba 'a dieta'. Su empatía lo cambia todo.",
      rating: 5,
    },
    {
      name: "Carlos R.",
      goal: "Rendimiento deportivo",
      text: "Como corredor amateur, no entendía por qué me quedaba sin energía. El plan estructurado de Nuria me ayudó a mejorar mis tiempos y mi recuperación muscular. Una profesional súper recomendada.",
      rating: 5,
    },
    {
      name: "Elena S.",
      goal: "Mejora de hábitos y salud digestiva",
      text: "Llegué con muchos problemas de inflamación. En un par de meses, identificamos qué alimentos me afectaban y logramos un balance increíble. Nunca me había sentido con tanta energía y ligereza.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonios" className="py-24 bg-background relative">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 rounded-full bg-secondary-dark opacity-20 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Testimonios</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Historias reales, resultados reales</h3>
          <p className="text-foreground-muted text-lg">
            Conoce la experiencia de pacientes que decidieron transformar su vida y descubrieron que comer sano también se disfruta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonio, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm border border-border hover:shadow-lg transition-shadow duration-300 flex flex-col relative mt-8"
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-secondary shadow-md">
                <Quote size={20} fill="currentColor" />
              </div>
              
              <div className="flex gap-1 text-accent mb-6 mt-4">
                {[...Array(testimonio.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-foreground-muted italic leading-relaxed mb-8 flex-grow">
                "{testimonio.text}"
              </p>
              
              <div className="mt-auto pt-6 border-t border-border">
                <p className="font-bold text-foreground">{testimonio.name}</p>
                <p className="text-sm text-primary-light font-medium">{testimonio.goal}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
