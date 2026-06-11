import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import Stats from "@/components/Stats";
import EmailCapture from "@/components/EmailCapture";

/**
 * Página principal - Server Component
 * 
 * Propósito: Consume datos mock en servidor para renderizado SSR.
 * Esto garantiza SEO óptimo ya que el HTML se genera en servidor.
 * 
 * SEO:
 * - El título dinámico se renderiza antes de enviar al cliente
 * - No hay Content Layout Shift (CLS) por hydration
 * - Los crawlers ven el contenido completo
 */
export const metadata: Metadata = {
  title: "Spotify Premium: 3 Meses Gratis | Oferta Exclusiva",
  description:
    "Prueba Spotify Premium 3 meses gratis. Escucha música sin anuncios, sin conexión y con saltos ilimitados. Cancela cuando quieras.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Spotify Premium: 3 Meses Gratis",
    description:
      "Prueba Spotify Premium 3 meses gratis. Cancela cuando quieras.",
    url: "/",
  },
};

// Función para leer datos mock (simula lectura de API/BD)
async function getMockData() {
  // Simula delay de API (en producción sería fetch real)
  const mockData = await import("../data/mockData.json");
  return mockData.default;
}

export default async function HomePage() {
  // Server-Side: consume datos mock
  const mockData = await getMockData();

  return (
    <main id="main">
      {/* Pasa datos al Hero para renderizado dinámico */}
      <Hero 
        userName={mockData.user} 
        topGenre={mockData.topGenre} 
      />
      <Stats />
      <Features />
      <Testimonial />
      <EmailCapture />
      <CTABand />
      <FAQ />
    </main>
  );
}
