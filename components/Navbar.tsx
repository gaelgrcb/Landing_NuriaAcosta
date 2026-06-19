"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Servicios", href: "#servicios" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Testimonios", href: "#testimonios" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 transition-transform group-hover:scale-105 rounded-full overflow-hidden shadow-sm">
            <img 
              src="/images/logo.png" 
              alt="Nuria Acosta Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-start">
            <span className="font-semibold text-xl tracking-tight text-foreground leading-none mb-0.5">
              Nuria Acosta
            </span>
            <span className="text-[11px] font-semibold text-primary tracking-wider uppercase leading-none">
              Nutrióloga
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground-muted hover:text-primary font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contacto"
            className="px-6 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary-light transition-all transform hover:scale-105 active:scale-95 shadow-md shadow-primary/20"
          >
            Agendar Cita
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-border/50 flex flex-col py-4 px-4 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-foreground-muted hover:text-primary font-medium py-2"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contacto"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center px-6 py-3 mt-2 bg-primary text-white rounded-full font-medium hover:bg-primary-light transition-colors"
          >
            Agendar Cita
          </Link>
        </div>
      )}
    </header>
  );
}
