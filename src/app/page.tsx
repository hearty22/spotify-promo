import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import Stats from "@/components/Stats";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Spotify Premium: 3 Meses Gratis | Oferta Exclusiva",
  description:
    "Proba Spotify Premium 3 meses gratis. Escucha musica sin anuncios, sin conexion y con saltos ilimitados. Cancela cuando quieras.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Spotify Premium: 3 Meses Gratis",
    description:
      "Proba Spotify Premium 3 meses gratis. Cancela cuando quieras.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Stats />
      <Features />
      <Testimonial />
      <EmailCapture />
      <CTABand />
      <FAQ />
    </main>
  );
}
