import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nuria Acosta | Nutricionista",
  description: "Nutrición clínica y deportiva con un enfoque humano y basado en evidencia. Transforma tus hábitos y mejora tu calidad de vida de forma sostenible.",
  openGraph: {
    title: "Nuria Acosta | Nutricionista",
    description: "Transforma tus hábitos y mejora tu calidad de vida con planes nutricionales personalizados.",
    url: "https://nuria-acosta-nutricion.com",
    siteName: "Nuria Acosta Nutrición",
    images: [
      {
        url: "/images/hero-nutrition.png",
        width: 1200,
        height: 630,
        alt: "Nuria Acosta Nutricionista",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary-light selection:text-white">
        {children}
      </body>
    </html>
  );
}
