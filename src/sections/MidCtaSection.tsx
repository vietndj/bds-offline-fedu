import React from "react";
import { useContent } from "../content";
import { useTheme } from "../theme";
import { FadeIn, CtaButton, Sec } from "../components/ui";

export function MidCtaSection() {
  const c = useContent();
  const t = useTheme();
  return (
    <Sec maxWidth={860}>
      <FadeIn>
        <div style={{
          textAlign: "center",
          background: `linear-gradient(135deg, ${t.accent}15, transparent)`,
          border: `1px solid ${t.accent}44`,
          borderRadius: t.cardRadius,
          padding: "clamp(24px, 6vw, 48px) clamp(16px, 4vw, 32px)"
        }}>
          <h3 style={{ fontFamily: t.fontDisplay, fontSize: "clamp(22px, 5vw, 32px)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.018em", color: "#fff", margin: "0 0 16px 0" }}>
            {c.midCtaHeading || "Sẵn sàng nâng cấp hình ảnh của bạn?"}
          </h3>
          <p style={{ fontSize: "clamp(15px, 3.8vw, 19px)", color: "var(--cl-text-muted, #888)", marginBottom: 32, lineHeight: 1.75 }}>
            {c.midCtaSub || "Đừng để kỹ thuật là rào cản ngăn bạn trao đi giá trị."}
          </p>
          <a
            href="https://zalo.me/0934688632"
            target="_blank"
            rel="noopener noreferrer"
            className="cl-cta-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "var(--cl-accent)",
              color: "var(--cl-accent-text)",
              border: "none",
              borderRadius: 12,
              padding: "20px 44px",
              fontSize: "clamp(14px, 3.2vw, 17px)",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              textDecoration: "none",
              cursor: "pointer",
              boxShadow: "0 0 32px -2px var(--cl-accent-glow, rgba(212, 168, 83, 0.4))",
            }}
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" alt="Zalo" style={{ width: 20, height: 20 }} />
            {c.midCtaBtn}
          </a>
          <p style={{ fontSize: 16, color: "var(--cl-accent)", marginTop: 24, fontWeight: 500 }}>
            Chỉ với {c.price} VNĐ
          </p>
        </div>
      </FadeIn>
    </Sec>
  );
}
