"use client";

import { Send, MessageCircle } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-background-alt rounded-[3rem] p-8 md:p-16 shadow-lg border border-border/50 relative overflow-hidden">
          
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info & WhatsApp */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Da el primer paso hacia tu bienestar
              </h2>
              <p className="text-lg text-foreground-muted mb-10 leading-relaxed">
                ¿Tienes dudas sobre los programas o quieres agendar tu primera consulta? Escríbeme y estaré encantada de orientarte.
              </p>
              
              <div className="space-y-6">
                <a 
                  href="https://wa.me/526941183851" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-[#25D366] text-white rounded-2xl font-medium hover:bg-[#20bd5a] transition-colors shadow-md hover:shadow-lg"
                >
                  <MessageCircle size={24} />
                  Escríbeme por WhatsApp
                </a>
                <p className="text-sm text-foreground-muted">
                  * Respuesta típica en menos de 2 horas laborables.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/50">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Nombre completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Correo electrónico</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="tu@correo.com"
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Teléfono</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="+52 123 456 7890"
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">¿En qué te puedo ayudar?</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    placeholder="Cuéntame un poco sobre tu objetivo..."
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 px-6 py-4 bg-foreground text-white rounded-xl font-medium hover:bg-black transition-colors shadow-md"
                >
                  <Send size={18} />
                  Enviar Mensaje
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
