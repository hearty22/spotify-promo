const items = [
  {
    q: "¿Cuando me cobran?",
    a: "El cobro se realiza al finalizar el dia 90 del periodo de prueba. Recibiras un recordatorio por mail y notificaciones push antes del vencimiento.",
  },
  {
    q: "¿Como cancelo la suscripcion?",
    a: "Podes cancelar en cualquier momento desde Configuracion > Cuenta > Cambiar plan. No hay permanencia ni penalidades.",
  },
  {
    q: "¿Necesito tarjeta de credito?",
    a: "Si, solicitamos un metodo de pago para validar tu cuenta. No se realizara ningun cargo durante los 3 meses de prueba.",
  },
  {
    q: "¿Aplica a cuentas existentes?",
    a: "La oferta es valida unicamente para nuevos suscriptores que nunca hayan probado Premium o que no hayan tenido una cuenta activa en los ultimos 12 meses.",
  },
  {
    q: "¿Que pasa con mi plan Familiar o Duo?",
    a: "La promo aplica solo a planes Individuales. Si ya tenes un plan Duo o Familiar, no es elegible para esta oferta.",
  },
];

export default function FAQ() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <h2 id="faq-title">Preguntas frecuentes</h2>
        <p className="sub">Todo lo que necesitas saber antes de activar la oferta.</p>
        <div className="faq">
          {items.map((it) => (
            <details key={it.q}>
              <summary>{it.q}</summary>
              <p>{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
