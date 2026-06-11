import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const SITE_URL = "https://spotify-3-meses-gratis.example.com";
const SITE_NAME = "Spotify Premium - 3 Meses Gratis";
const TITLE = "Spotify Premium: 3 Meses Gratis | Oferta Exclusiva";
const DESCRIPTION =
  "Prueba Spotify Premium 3 meses gratis. Escucha música sin anuncios, sin conexión y con saltos ilimitados. Cancela cuando quieras.";
const KEYWORDS = [
  "Spotify Premium",
  "Spotify 3 meses gratis",
  "música en transmisión",
  "escuchar música sin anuncios",
  "Spotify Wrapped",
  "oferta Spotify",
  "suscripción musical",
];
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: `%s | ${SITE_NAME}` },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: "Spotify Campaña" }],
  creator: "Spotify",
  publisher: "Spotify",
  category: "music",
  alternates: {
    canonical: SITE_URL,
    languages: { "es-AR": SITE_URL, es: SITE_URL },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Spotify Premium - 3 meses gratis",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@spotify",
    creator: "@spotify",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  other: { "theme-color": "#1DB954", "format-detection": "telephone=no" },
};

export const viewport: Viewport = {
  themeColor: "#1DB954",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Spotify Premium - Suscripción 3 meses gratis",
  description: DESCRIPTION,
  brand: { "@type": "Brand", name: "Spotify" },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "ARS",
    availability: "https://schema.org/InStock",
    url: SITE_URL,
    description: "3 meses gratis. Cobro desde el mes 3.",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "12480",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preload" as="image" href="/hero-bg.svg" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Matomo Analytics - Medición de visitas y conversiones */}
        <Script
          id="matomo-script"
          strategy="afterInteractive"
          src="https://cdn.matomo.cloud/spotifypromotwovercelapp.matomo.cloud/matomo.js"
        />
        <Script
          id="matomo-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var _paq = window._paq = window._paq || [];
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              _paq.push(['setTrackerUrl', 'https://spotifypromotwovercelapp.matomo.cloud/matomo.php']);
              _paq.push(['setSiteId', '1']);
            `,
          }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Saltar al contenido principal
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
