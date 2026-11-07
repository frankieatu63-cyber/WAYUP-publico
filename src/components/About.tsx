import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Eye, GraduationCap, LineChart } from "lucide-react";

import aboutImg from "@/assets/about-wayup-poster.jpg";
import { Reveal, easeLux } from "./Reveal";

const VALUES = [
  {
    icon: Eye,
    title: "Transparencia total",
    text: "Cuentas, datos y accesos a tu nombre desde el primer día.",
  },
  {
    icon: GraduationCap,
    title: "Formación real",
    text: "Te explicamos el porqué de cada acción, no solo el qué.",
  },
  {
    icon: LineChart,
    title: "Resultados medibles",
    text: "Llamadas, citas y clientes. Nada de métricas de vanidad.",
  },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // Observe the wrapper, not the clipped poster: a fully clipped element never counts as "in view".
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Gentle zoom only — the poster carries text, so it must never be cropped by a slide.
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1]);

  return (
    <section id="sobre-nosotros" className="py-24 md:py-36">
      <div className="container-wide grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <div ref={ref} className="relative">
            {/* Poster uncovers from the bottom up, like a curtain rising */}
            <motion.div
              initial={{ clipPath: reduce ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)" }}
              animate={{ clipPath: inView || reduce ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)" }}
              transition={{ duration: 1.4, ease: easeLux }}
              className="relative aspect-[2/3] overflow-hidden rounded-[2rem] shadow-lift"
            >
              <motion.img
                style={{ scale }}
                src={aboutImg}
                alt="Cartel de Way Up: elevamos marcas, impulsamos tu crecimiento, tú mantienes el control"
                width={1024}
                height={1536}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </motion.div>
            <div className="absolute -bottom-6 -right-2 rounded-2xl border border-border bg-paper p-5 shadow-lift sm:-right-8">
              <p className="font-serif text-4xl text-primary">100%</p>
              <p className="mt-1 max-w-[10rem] text-xs leading-snug text-muted-foreground">
                de las herramientas quedan a tu nombre
              </p>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">Sobre nosotros</p>
            <h2 className="mt-4 text-4xl font-normal text-foreground text-balance-tight md:text-6xl">
              Las agencias te hacen dependiente. <em className="text-primary">Nosotros no.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Way Up nace en Salamanca con una idea sencilla: un negocio local merece crecer en
              digital sin quedarse atado a nadie. Unimos el marketing tradicional que ya funciona con
              las herramientas digitales que hoy deciden quién recibe la llamada.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Primero lo hacemos por ti. Después te enseñamos a hacerlo. Al final, lo haces tú. Eso es
              la Soberanía Digital.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 border-t border-border pt-10 sm:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={0.15 + i * 0.08}>
                <v.icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
                <h3 className="mt-4 font-sans text-base font-semibold tracking-normal text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
