export const NAV_LINKS = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Método", href: "/#metodo" },
  { label: "Sobre nosotros", href: "/#sobre-nosotros" },
  { label: "Contacto", href: "/#contacto" },
] as const;

export const CONTACT_EMAIL = "hola@wayup.es";
export const AUDIT_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Solicitud de auditoría gratuita",
)}`;

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/",
  instagram: "https://www.instagram.com/somoswayup/",
};
