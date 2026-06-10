"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "600M+", label: "Usuarios activos", suffix: "" },
  { value: "100M+", label: "Canciones disponibles", suffix: "" },
  { value: "4.8", label: "Rating en tiendas", suffix: "★" },
  { value: "97%", label: "Satisfacción", suffix: "%" },
];

export default function Stats() {
  return (
    <section className="stats" aria-labelledby="stats-title">
      <div className="container">
        <h2 id="stats-title" className="visually-hidden">Estadísticas de Spotify</h2>
        <ul className="stats__list" role="list">
          {stats.map((stat, i) => (
            <motion.li
              key={stat.label}
              className="stats__item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <span className="stats__value">
                {stat.value}{stat.suffix}
              </span>
              <span className="stats__label">{stat.label}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
