import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import Stats from "@/components/Stats";
import EmailCapture from "@/components/EmailCapture";
import { getUserLocation } from "@/data/geo";
import { getRandomGenreForRegion, getCountryName } from "@/data/regionData";
import { getMockData } from "@/lib/mockData";

/**
 * Página principal - Server Component
 * 
 * Propósito: Personaliza el contenido según ubicación geográfica del usuario.
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

export default async function HomePage() {
  // 1. Detectar ubicación del usuario (IP o headers)
  const countryCode = await getUserLocation();
  
  // 2. Obtener género musical para esa región (randomizado)
  const topGenre = getRandomGenreForRegion(countryCode);
  const countryName = getCountryName(countryCode);
  
  // 3. Datos mock del usuario
  const mockData = await getMockData();

  return (
    <main id="main">
      <Hero 
        userName={mockData.user}
        topGenre={topGenre}
        countryName={countryName}
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
