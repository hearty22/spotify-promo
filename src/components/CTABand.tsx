import Link from "next/link";

export default function CTABand() {
  return (
    <section className="section" id="registro" aria-label="Activar oferta">
      <div className="container">
        <div className="cta-band">
          <h2>Empieza hoy. Cobramos ahora en el mes 4.</h2>
          <p>
            Activa tu cuenta en menos de 2 minutos con tu mail, Google, Apple o
            Facebook. No te cobraremos durante los 90 días de prueba.
          </p>
          <Link
            href="https://www.spotify.com/ar/signup/"
            className="btn"
            style={{ background: "#000", color: "#fff" }}
            aria-label="Activar mis 3 meses gratis"
            target="_blank"
            rel="noopener noreferrer"
          >
            Activar mis 3 meses gratis
          </Link>
        </div>
      </div>
    </section>
  );
}
