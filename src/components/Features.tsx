const features = [
  {
    title: "Musica sin anuncios",
    desc: "Escucha tus canciones y podcasts favoritos sin interrupciones publicitarias.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    ),
  },
  {
    title: "Escucha sin conexion",
    desc: "Descarga tus playlists y llevalas donde vayas, sin gastar datos moviles.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    title: "Saltos ilimitados",
    desc: "Pasa a la siguiente cancion todas las veces que quieras, sin limites.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="5 4 15 12 5 20 5 4" />
        <line x1="19" y1="5" x2="19" y2="19" />
      </svg>
    ),
  },
  {
    title: "Spotify Wrapped personalizado",
    desc: "Descubre tu resumen anual con playlists hechas a tu medida y recomendaciones unicas.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Calidad de audio superior",
    desc: "Sonido envolvente y de alta fidelidad para vivir la musica como el artista la imagined.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    title: "Cancela cuando quieras",
    desc: "Sin permanencia. Podes darte de baja en cualquier momento desde tu cuenta.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="section" id="beneficios" aria-labelledby="beneficios-title">
      <div className="container">
        <h2 id="beneficios-title">Todos los beneficios de Premium, 3 meses sin cargo.</h2>
        <p className="sub">
          Disenado para acompanarte en cada momento: entrenamiento, viaje, estudio o
          descanso. Premium desbloquea la experiencia completa de Spotify.
        </p>
        <ul className="features" role="list">
          {features.map((f) => (
            <li className="feature" key={f.title}>
              <div className="feature__icon" aria-hidden="true">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
