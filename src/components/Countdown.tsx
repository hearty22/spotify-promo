"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Oferta válida por 7 días desde ahora
    const end = new Date();
    end.setDate(end.getDate() + 7);

    const tick = () => {
      const now = new Date();
      const diff = end.getTime() - now.getTime();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="countdown" role="timer" aria-label="Tiempo restante de la oferta">
      {[
        { label: "Días", value: timeLeft.days },
        { label: "Horas", value: timeLeft.hours },
        { label: "Min", value: timeLeft.minutes },
        { label: "Seg", value: timeLeft.seconds },
      ].map((item, i) => (
        <motion.div
          key={item.label}
          className="countdown__item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <span className="countdown__value">{String(item.value).padStart(2, "0")}</span>
          <span className="countdown__label">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
