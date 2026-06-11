const items = [
  {
    q: "¿Cuando me cobran?",
    a: "El cobro se realiza al finalizar el día 90 del período de prueba. Recibirás un recordatorio por mail y notificaciones push antes del vencimiento.",
  },
  {
    q: "¿Cómo cancelo la suscripción?",
    a: "Podés cancelar en cualquier momento desde Configuración > Cuenta > Cambiar plan. No hay permanencia ni penalidades.",
  },
  {
    q: "¿Necesito tarjeta de credito?",
    a: "Si, solicitamos un método de pago para válidar tu cuenta. No se realizará ningun cargo durante los 3 meses de prueba.",
  },
  {
    q: "¿Aplica a cuentas existentes?",
    a: "La oferta es válida únicamente para nuevos suscriptores que nunca hayan probado Premium o que no hayan tenido una cuenta activa en los últimos 12 meses.",
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
