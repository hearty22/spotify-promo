import Link from "next/link";

export const metadata = { title: "Pagina no encontrada" };

export default function NotFound() {
  return (
    <main id="main" className="section">
      <div className="container" style={{ textAlign: "center" }}>
        <h1>404 - Pagina no encontrada</h1>
        <p style={{ color: "var(--muted)" }}>
          La pagina que buscas no existe o se movio.
        </p>
        <Link href="/" className="btn btn--primary" style={{ marginTop: "1rem" }}>
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
