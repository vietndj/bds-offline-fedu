import React, { useState, useEffect } from "react";
import { useContent } from "../content";
import { useTheme } from "../theme";
import { FadeIn, ScrollTypewriter, CtaButton, AppYTEmbed, MediaSection } from "../components/ui";

export function HeroSection() {
  const c = useContent();
  const t = useTheme();
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => { const timer = setTimeout(() => setHeroReady(true), 80); return () => clearTimeout(timer); }, []);

  return (
    <>
      <section style={{ position: "relative", textAlign: "center", padding: "64px 20px 0", maxWidth: 960, margin: "0 auto" }}>
        <div aria-hidden style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(${t.accent}08 1px, transparent 1px), linear-gradient(90deg, ${t.accent}08 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }} />
        <div style={{ opacity: heroReady ? 1 : 0, transform: heroReady ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>


          <div style={{
            display: "inline-block", border: `1px solid ${t.accent}44`,
            borderRadius: 100, padding: "7px 18px", marginBottom: 36,
            fontFamily: t.fontMono, fontSize: 13, letterSpacing: "0.15em",
            color: "var(--cl-accent)", textTransform: "uppercase",
          }}>
            {c.heroBadge}
          </div>
          <h1 className="cl-hero__h1">
            {c.heroHeadline1 && (
              <span className="cl-hero__eyebrow-span">
                {c.heroHeadline1}
              </span>
            )}
            <span className="cl-hero__main-span" style={{ textTransform: "none", fontSize: "clamp(28px, 4.2vw, 54px)", lineHeight: 1.15, fontWeight: 500, letterSpacing: "-0.018em" }}>
              <ScrollTypewriter text={c.heroHeadline2 || ""} highlightText="mượt đến vô lý" speed={5} />
            </span>
          </h1>

          {(c as any).heroPoem && (c as any).heroPoem.length > 0 && (
            <div style={{
              margin: "8px auto 36px",
              maxWidth: 480,
              background: "rgba(255, 255, 255, 0.01)",
              border: `1px dashed ${t.accent}33`,
              borderRadius: 16,
              padding: "22px clamp(16px, 4vw, 30px)",
              position: "relative",
              backdropFilter: "blur(8px)",
              boxShadow: `0 8px 32px -8px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.05)`,
            }}>
              <span style={{ position: "absolute", top: 4, left: 16, fontSize: 36, fontFamily: "Georgia, serif", color: `${t.accent}33`, lineHeight: 1, userSelect: "none" }}>“</span>
              <div style={{
                fontFamily: t.fontDisplay, fontSize: "clamp(17px, 2.4vw, 21px)", fontStyle: "italic",
                fontWeight: 600, color: "var(--cl-accent)", lineHeight: 1.6, textAlign: "center",
                display: "flex", flexDirection: "column", gap: 6, position: "relative", zIndex: 2,
              }}>
                {(c as any).heroPoem.map((line: string, i: number) => (
                  <span key={i}>{line}</span>
                ))}
              </div>
              <span style={{ position: "absolute", bottom: -16, right: 16, fontSize: 36, fontFamily: "Georgia, serif", color: `${t.accent}33`, lineHeight: 1, userSelect: "none" }}>”</span>
            </div>
          )}

          <div className="cl-hero__cta-wrap">
            <a
              href="https://zalo.me/0934688632"
              target="_blank"
              rel="noopener noreferrer"
              className="cl-cta-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
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
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" alt="Zalo" style={{ width: 22, height: 22 }} />
              {c.heroCta} — LIÊN HỆ ZALO
            </a>
            <p className="cl-hero__sub-price">
              (Học phí: 50.000.000 VNĐ — Giới hạn 4 Học viên/Lớp)
            </p>
          </div>
        </div>
      </section>
      <MediaSection blockId="hero" />

      {/* 1B: Triết lý */}
      <section style={{ 
        position: "relative", padding: "clamp(48px, 10vw, 100px) clamp(16px, 4vw, 24px)", maxWidth: 800, margin: "0 auto", 
        textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      }}>
        <div aria-hidden style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(${t.accent}04 1px, transparent 1px), linear-gradient(90deg, ${t.accent}04 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black 40%, transparent 100%)",
        }} />
        <FadeIn>
          <div className="cl-label">
            <span style={{ opacity: 0.4 }}>// </span>Triết lý quay dựng
          </div>
          <h2 className="cl-sh" style={{ fontFamily: t.fontDisplay }}>
            <ScrollTypewriter text={c.heroAccentLine} speed={7} />
          </h2>
          <p style={{
            fontFamily: t.fontBody, fontSize: "clamp(16px, 1.8vw, 19px)", lineHeight: 1.9,
            color: "var(--cl-text-body, #b0b0b0)", maxWidth: "62ch", margin: "0 auto", textWrap: "balance",
          }}>
            {c.heroSub}
          </p>


        </FadeIn>
      </section>
    </>
  );
}
