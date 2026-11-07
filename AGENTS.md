
## Project rules
- Homepage is one scrolling page: each section is a component in `src/components/` and nav links use `/#section` anchors so they work from any route. Why: the brief asked for a single smoothly scrolling site.
- Animations use framer-motion via the shared `Reveal`/`easeLux` helpers in `src/components/Reveal.tsx`. Why: consistent motion language across sections.
- Contact email and social URLs live only in `src/components/site-nav.ts`. Why: one place to swap placeholders for real details.
