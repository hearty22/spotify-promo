export default function Testimonial() {
  return (
    <section className="section" id="testimonios" aria-labelledby="test-title">
      <div className="container">
        <h2 id="test-title">Lo que dicen los suscriptores</h2>
        <p className="sub">Mas de 200 millones de personas ya son Premium.</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          <figure className="testimonial">
            &ldquo;Deje de usar el celular para musica: las descargas y la calidad de audio
            cambiaron mi forma de entrenar.&rdquo;
            <cite>- Lucia, 28 - Buenos Aires</cite>
          </figure>
          <figure className="testimonial">
            &ldquo;El Wrapped es una tradicion familiar. Premium me da acceso completo y
            las recomendaciones son increibles.&rdquo;
            <cite>- Martin, 34 - Cordoba</cite>
          </figure>
          <figure className="testimonial">
            &ldquo;Lo uso en colectivo, en el gym y en casa. Sin conexion, sin limites,
            sin anuncios.&rdquo;
            <cite>- Sofia, 22 - Mendoza</cite>
          </figure>
        </div>
      </div>
    </section>
  );
}
