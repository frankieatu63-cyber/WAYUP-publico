import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal, easeLux } from "./Reveal";

const FAQS = [
  {
    q: "¿Cuánto tarda en estar lista mi landing page?",
    a: "Entre 2 y 3 semanas desde el diagnóstico. En la primera semana definimos mensaje y estructura; en la segunda diseñamos y desarrollamos; y antes de publicar la revisamos contigo hasta que esté perfecta.",
  },
  {
    q: "¿Cómo funciona la formación y la mentoría?",
    a: "En la Fase 2 te entregamos plantillas, accesos configurados y sesiones prácticas. Te enseñamos el porqué de cada acción para que entiendas tu ecosistema digital y puedas gestionarlo con confianza.",
  },
  {
    q: "¿Necesito conocimientos técnicos?",
    a: "No. Empezamos desde cero y a tu ritmo. Todo lo que te enseñamos está pensado para dueños de negocio, no para programadores: guías claras, vídeos cortos y acompañamiento real.",
  },
  {
    q: "¿De quién son la web, las cuentas y los datos?",
    a: "Tuyos, desde el primer día. Dominio, web, Google Business Profile, cuentas publicitarias y datos de clientes se crean a tu nombre. Si un día decides seguir solo, no pierdes nada.",
  },
  {
    q: "¿Hay permanencia?",
    a: "No trabajamos con permanencias. Nuestro objetivo es que llegues a la Fase 3 y no nos necesites; te quedas con nosotros solo mientras te aportemos valor.",
  },
  {
    q: "¿Qué pasa si necesito ayuda después de la Fase 3?",
    a: "Seguimos a un mensaje de distancia. Puedes contratar revisiones puntuales, nuevas campañas o formación avanzada cuando lo necesites, sin compromisos.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="preguntas" className="border-t border-border bg-paper py-24 md:py-36">
      <div className="container-wide grid gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2 className="mt-4 text-4xl font-normal text-foreground text-balance-tight md:text-6xl">
              Cómo trabajamos, paso a paso.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Respuestas rápidas, sin rodeos, sobre plazos, formación y tu autonomía.
            </p>
            <Button asChild variant="outline" size="lg" className="mt-10">
              <a href="#contacto">
                ¿Otra duda? Escríbenos
                <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            </Button>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <ul className="border-t border-border">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b border-border">
                  <Reveal delay={i * 0.05} y={16}>
                    <h3 className="font-sans tracking-normal">
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-${i}`}
                        className="group flex w-full items-center gap-6 py-7 text-left"
                      >
                        <span className="font-serif text-sm text-muted-foreground">0{i + 1}</span>
                        <span
                          className={`flex-1 text-lg font-medium transition-colors md:text-xl ${
                            isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
                          }`}
                        >
                          {f.q}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.4, ease: easeLux }}
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                            isOpen
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border-strong text-foreground"
                          }`}
                        >
                          <Plus className="h-4 w-4" />
                        </motion.span>
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: easeLux }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-2xl pb-8 pl-11 leading-relaxed text-muted-foreground">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
