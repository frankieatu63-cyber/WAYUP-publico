import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="pt-36 pb-24">
        <article className="container-wide max-w-3xl">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 text-4xl font-normal text-foreground md:text-6xl">{title}</h1>
          <div className="mt-12 space-y-6 leading-relaxed text-muted-foreground [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:text-foreground">
            {children}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
