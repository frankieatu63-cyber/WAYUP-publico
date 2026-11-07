import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { CONTACT_EMAIL } from "@/components/site-nav";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad — Way Up" },
      { name: "description", content: "Cómo trata Way Up tus datos personales." },
      { property: "og:title", content: "Política de privacidad — Way Up" },
      { property: "og:description", content: "Cómo trata Way Up tus datos personales." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage title="Política de privacidad">
      <p>
        En Way Up respetamos tu privacidad. Esta página explica qué datos recogemos cuando nos
        contactas y para qué los usamos.
      </p>
      <h2>Qué datos recogemos</h2>
      <p>
        Solo los datos que nos facilitas voluntariamente al escribirnos: nombre, correo electrónico,
        teléfono y la información sobre tu negocio que quieras compartir.
      </p>
      <h2>Para qué los usamos</h2>
      <p>
        Para responder a tu solicitud, preparar tu diagnóstico o auditoría y, si lo aceptas,
        enviarte información relacionada con nuestros servicios.
      </p>
      <h2>Tus derechos</h2>
      <p>
        Puedes acceder, rectificar o suprimir tus datos en cualquier momento escribiendo a{" "}
        <a className="text-primary underline" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </LegalPage>
  );
}
