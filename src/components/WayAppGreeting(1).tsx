import { useState } from "react";

export function WayAppGreeting() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes wayapp-in {
          from { opacity: 0; transform: translateX(-8px) scale(.97); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        .wayapp-bubble {
          left: 96px;
          max-width: calc(100vw - 112px);
          animation: wayapp-in .4s ease-out .3s both;
        }
        @media (min-width: 640px) {
          .wayapp-bubble {
            left: 290px;
            max-width: 260px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .wayapp-bubble { animation: none; }
        }
      `}</style>

      <div
        role="status"
        className="wayapp-bubble"
        style={{
          position: "fixed",
          bottom: 28,
          zIndex: 2147483001,
          padding: "12px 16px",
          background: "#fff",
          color: "#1e293b",
          border: "1px solid #e2e8f0",
          borderRadius: 16,
          boxShadow: "0 10px 25px -5px rgba(0,0,0,.12)",
          fontFamily: "inherit",
          fontSize: 13,
          lineHeight: 1.4,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
          <strong style={{ color: "#0f172a" }}>¡Hola! Soy Way.App</strong>
          <button
            onClick={() => setVisible(false)}
            aria-label="Cerrar saludo"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 14,
              color: "#94a3b8",
              padding: 0,
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>
        <span style={{ color: "#64748b", fontSize: 12 }}>
          ¿Hablamos? Pregúntame lo que quieras
        </span>
      </div>
    </>
  );
}
