import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { CONTACT_EMAIL } from "@/components/site-nav";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: "Términos y condiciones — Way Up" },
      { name: "description", content: "Condiciones de uso del sitio web y servicios de Way Up." },
      { property: "og:title", content: "Términos y condiciones — Way Up" },
      {
        property: "og:description",
        content: "Condiciones de uso del sitio web y servicios de Way Up.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage title="Términos y condiciones">
      <p>
        Al utilizar este sitio web aceptas estas condiciones. Si tienes cualquier duda, escríbenos a{" "}
        <a className="text-primary underline" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        .
      </p>
      <h2>Uso del sitio</h2>
      <p>
        Los contenidos de esta web son informativos. Las condiciones concretas de cada servicio se
        detallan en la propuesta personalizada que entregamos a cada cliente.
      </p>
      <h2>Propiedad intelectual</h2>
      <p>
        Los textos, imágenes y la marca Way Up pertenecen a sus titulares y no pueden reproducirse sin
        autorización.
      </p>
    </LegalPage>
  );
}
