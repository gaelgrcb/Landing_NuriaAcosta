import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Intro */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group inline-block">
              <div className="relative w-12 h-12 transition-transform group-hover:scale-105 rounded-full overflow-hidden shadow-sm">
                <img 
                  src="/images/logo.png" 
                  alt="Nuria Acosta Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-semibold text-xl tracking-tight text-white">
                Nuria Acosta
              </span>
            </Link>
            <p className="text-primary-light/80 text-sm leading-relaxed max-w-xs">
              Nutrición clínica y deportiva con un enfoque humano. Transforma tus hábitos y mejora tu calidad de vida de forma sostenible.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Navegación</h4>
            <ul className="space-y-4">
              <li><Link href="#hero" className="text-primary-light/80 hover:text-white transition-colors text-sm">Inicio</Link></li>
              <li><Link href="#servicios" className="text-primary-light/80 hover:text-white transition-colors text-sm">Servicios</Link></li>
              <li><Link href="#sobre-mi" className="text-primary-light/80 hover:text-white transition-colors text-sm">Sobre Mí</Link></li>
              <li><Link href="#testimonios" className="text-primary-light/80 hover:text-white transition-colors text-sm">Testimonios</Link></li>
              <li><Link href="#contacto" className="text-primary-light/80 hover:text-white transition-colors text-sm">Contacto</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-primary-light/80">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-accent" />
                <span>Av. Reforma 123, Consultorio 4B<br/>Ciudad de México, CDMX</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-light/80">
                <Phone size={18} className="flex-shrink-0 text-accent" />
                <span>+52 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-light/80">
                <Mail size={18} className="flex-shrink-0 text-accent" />
                <span>hola@nuria-acosta-nutricion.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Recibe consejos de salud</h4>
            <p className="text-primary-light/80 text-sm mb-4">Suscríbete a mi boletín mensual para recibir recetas y tips de nutrición.</p>
            <form className="flex" action="#">
              <input 
                type="email" 
                placeholder="Tu correo" 
                className="w-full px-4 py-2.5 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent"
                required
              />
              <button 
                type="submit" 
                className="px-4 py-2.5 bg-accent hover:bg-accent-hover transition-colors rounded-r-lg font-medium"
              >
                Unirme
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-light/60">
            &copy; {new Date().getFullYear()} Nuria Acosta Nutrición. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-xs text-primary-light/60">
            <Link href="#" className="hover:text-white transition-colors">Aviso de Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
