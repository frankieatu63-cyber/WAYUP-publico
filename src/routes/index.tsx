import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Method } from "@/components/Method";
// import { Cases } from "@/components/Cases";
import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { ContactCta } from "@/components/ContactCta";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollProgress } from "@/components/Reveal";

const TITLE = "Way Up — Más clientes para tu negocio, con Soberanía Digital";
const DESCRIPTION =
  "Agencia de marketing en Salamanca: webs que convierten, SEO local y automatización con IA. Te acompañamos hasta que puedas crecer por tu cuenta.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Method />
        {/* <Cases /> */}
        <About />
        <Faq />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
