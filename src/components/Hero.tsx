import Link from "next/link";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title" id="oferta">
      <div className="container hero__inner">
        <div>
          <span className="hero__badge">Oferta limitada - Solo 7 dias</span>
          <h1 id="hero-title">
            Escucha sin limites. <br />
            <span>3 meses de Spotify Premium gratis.</span>
          </h1>
          <p className="lead">
            Disfruta musica sin anuncios, descargas para escuchar sin conexion y
            saltos ilimitados durante 90 dias.{" "}
            <strong>Cobramos recien al finalizar el cuarto mes</strong> y podes
            cancelar cuando quieras.
          </p>

          <Countdown />

          <div className="hero__ctas">
            <Link
              href="https://www.spotify.com/ar/signup/"
              className="btn btn--primary btn--lg"
              aria-label="Comenzar mis 3 meses gratis"
              target="_blank"
              rel="noopener noreferrer"
            >
              Comenzar mis 3 meses gratis
            </Link>
            <Link href="#beneficios" className="btn btn--ghost btn--lg">
              Ver beneficios
            </Link>
          </div>
          <p className="hero__meta">
            Aplica a nuevos suscriptores. Sujeto a terminos. Cobro desde
            el mes 4.
          </p>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1DB954" />
                <stop offset="100%" stopColor="#0a3d22" />
              </linearGradient>
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
            </defs>
            <rect width="400" height="400" fill="url(#bgGrad)" />
            <circle cx="200" cy="200" r="160" fill="url(#glow)" />
            <g
              transform="translate(200,200)"
              stroke="rgba(255,255,255,0.7)"
              fill="none"
              strokeWidth="1.5"
            >
              <circle r="40" />
              <circle r="70" />
              <circle r="100" />
              <circle r="130" />
              <path d="M-150 0 Q-90 -60 0 -50 T150 -20" strokeWidth="1" />
              <path d="M-130 30 Q-60 -20 30 -30 T140 10" strokeWidth="1" />
            </g>
            <g fill="white">
              <circle cx="80" cy="100" r="6" />
              <circle cx="320" cy="120" r="5" />
              <circle cx="340" cy="280" r="7" />
              <circle cx="60" cy="300" r="4" />
            </g>
            <text
              x="200"
              y="210"
              textAnchor="middle"
              fill="white"
              fontSize="42"
              fontWeight="900"
              fontFamily="Inter, sans-serif"
            >
              3
            </text>
            <text
              x="200"
              y="240"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontWeight="700"
              letterSpacing="2"
              fontFamily="Inter, sans-serif"
            >
              MESES GRATIS
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
