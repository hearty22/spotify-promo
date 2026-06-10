"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Aquí integrarías con tu API de email marketing
    }
  };

  return (
    <section className="email-capture" aria-labelledby="email-title">
      <div className="container">
        <motion.div
          className="email-capture__box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="email-title">No dejes que se te escape esta oferta</h2>
          <p>
            Déjanos tu email y te enviamos un recordatorio antes de que expire tu 3 meses gratis.
            <strong> Sin spam, solo música.</strong>
          </p>
          {submitted ? (
            <motion.div
              className="email-capture__success"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              Listo! Te avisamos cuando expire la oferta
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="email-capture__form">
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Tu correo electrónico"
              />
              <button type="submit" className="btn btn--primary">
                Avisarme
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
