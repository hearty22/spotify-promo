"use client";

import { useRouter } from "next/navigation";

/**
 * CTA Button Component - Client Component
 * 
 * Propósito: Manejar el evento de click para tracking de Matomo
 * antes de la redirección.
 * 
 * SEO: El botón es el elemento de conversión principal, por lo que
 * debe ser accesible y tener aria-label descriptivo.
 * 
 * Tracking: Usa window._paq para enviar evento a Matomo
 */
export default function CTAContainer() {
  const handleClick = () => {
    // Track event en Matomo antes de redirigir
    if (typeof window !== "undefined" && window._paq) {
      window._paq.push([
        "trackEvent",
        "Conversión",
        "Click",
        "CTA 3 Meses Gratis"
      ]);
      console.log("Matomo event: CTA 3 Meses Gratis clicked");
    }
    
    // Redirección a Spotify
    window.location.href = "https://www.spotify.com/ar/signup/";
  };

  return (
    <button
      onClick={handleClick}
      className="btn btn--primary btn--lg"
      aria-label="Comenzar mis 3 meses gratis"
    >
      Comenzar mis 3 meses gratis
    </button>
  );
}
