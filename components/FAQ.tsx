"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Cómo es la primera consulta?",
      answer: "La primera consulta dura aproximadamente 60 minutos. Hablaremos sobre tu historial de salud, hábitos actuales, gustos alimenticios y metas. Con esta información, diseñaré tu primer plan nutricional 100% personalizado.",
    },
    {
      question: "¿Tengo que dejar de comer lo que me gusta?",
      answer: "¡Para nada! Mi enfoque es enseñarte a incluir tus alimentos favoritos de manera balanceada. No hay alimentos prohibidos, solo porciones y combinaciones más adecuadas para tus objetivos.",
    },
    {
      question: "¿Atiendes consultas online?",
      answer: "Sí, ofrezco consultas online a cualquier parte del mundo. Utilizo herramientas digitales para evaluar tu progreso y enviarte todo tu material a través de una app especializada.",
    },
    {
      question: "¿Cada cuánto son las revisiones?",
      answer: "Dependiendo de tu objetivo y el plan que elijas, las revisiones pueden ser cada 2 o 4 semanas. En estas sesiones ajustamos el plan y resolvemos cualquier dificultad que hayas tenido.",
    },
  ];

  return (
    <section className="py-24 bg-background-alt">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Preguntas Frecuentes</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">Resolvemos tus dudas</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl border transition-all duration-300 ${
                openIndex === index ? 'border-primary shadow-md' : 'border-border hover:border-primary/50'
              }`}
            >
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-lg text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  size={24} 
                  className={`text-primary transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-6 text-foreground-muted leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
