import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div>
          &copy; {new Date().getFullYear()} Spotify AB. Campana de 3 meses gratis.
        </div>
        <nav aria-label="Enlaces legales">
          <Link href="#" style={{ marginRight: "1rem" }}>
            Terminos
          </Link>
          <Link href="#" style={{ marginRight: "1rem" }}>
            Privacidad
          </Link>
          <Link href="#">Cookies</Link>
        </nav>
      </div>
    </footer>
  );
}
