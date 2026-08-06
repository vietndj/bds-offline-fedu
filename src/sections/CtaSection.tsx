import React from "react";
import { useContent } from "../content";
import { useTheme } from "../theme";
import { FadeIn, Label, SH, MediaSection } from "../components/ui";

export function CtaSection() {
  const c = useContent();
  const t = useTheme();
  return (
    <section id="dang-ky" style={{ maxWidth: 760, margin: "84px auto 0", padding: "0 20px" }}>
      <FadeIn>
        <div style={{ background: `linear-gradient(135deg, var(--cl-card), var(--cl-card2))`, border: `1px solid var(--cl-accent)`, borderRadius: "clamp(16px, 4vw, 28px)", overflow: "hidden" }}>
          <div style={{ background: "var(--cl-accent)", padding: "14px 24px", textAlign: "center" }}>
            <p style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--cl-accent-text)" }}>
              {c.urgencyBar}
            </p>
          </div>
          <div style={{ padding: "clamp(24px, 6vw, 48px) clamp(16px, 5vw, 40px)" }}>
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <Label>{c.ctaLabel}</Label>
              <SH typed>{c.ctaHeading}</SH>
              <p style={{ fontSize: 16, color: "var(--cl-text-body, #b0b0b0)", marginBottom: 32, lineHeight: 1.75 }}>{c.ctaSub}</p>
            </div>

            {/* Price Display */}
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <div style={{ fontSize: "clamp(36px, 8vw, 56px)", fontWeight: 600, color: "var(--cl-accent)", fontFamily: "var(--cl-font-display)", letterSpacing: "-0.02em" }}>
                {c.price} <span style={{ fontSize: "clamp(16px, 3vw, 22px)" }}>VNĐ</span>
              </div>
              <p style={{ fontSize: 15, color: "var(--cl-text-muted, #888)", marginTop: 8 }}>
                Khóa Offline 2 Ngày — Giới Hạn 4 Học Viên/Lớp
              </p>
            </div>

            {/* Value Stack */}
            <div style={{ background: "#0a0a0c", border: `1px solid var(--cl-line)`, borderRadius: t.cardRadius, padding: "26px 24px", marginBottom: 32 }}>
              <p style={{ fontSize: 13, fontWeight: 500, color: "var(--cl-text-base, #fff)", marginBottom: 18, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "var(--cl-font-mono)" }}>{c.valueStackTitle}</p>
              {c.valueStack.map(({ label, price }, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: 12, marginBottom: 12, alignItems: "baseline" }}>
                  <span style={{ fontSize: 14, color: "var(--cl-text-body, #bbb)", lineHeight: 1.5 }}>{label}</span>
                  <span style={{ fontSize: 14, color: "var(--cl-accent)", fontFamily: "var(--cl-font-mono)", flexShrink: 0, fontWeight: 600 }}>{price}</span>
                </div>
              ))}
              <div style={{ borderTop: `1px solid var(--cl-line)`, marginTop: 14, paddingTop: 16 }}>
                <p style={{ fontSize: 11, fontWeight: 500, color: "var(--cl-accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12, fontFamily: "var(--cl-font-mono)" }}>🎁 QUÀ TẶNG ĐI KÈM:</p>
                {c.bonusItems?.map((item, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: 12, marginBottom: 10, alignItems: "baseline" }}>
                    <span style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.5, display: "flex", gap: 6 }}>
                      <span style={{ color: "var(--cl-accent)", flexShrink: 0 }}>✓</span>
                      {item.title}
                    </span>
                    <span style={{ fontSize: 13, color: "#64748b", fontFamily: "var(--cl-font-mono)", flexShrink: 0 }}>Trao tay</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Zalo CTA Button */}
            <a
              href="https://zalo.me/0934688632"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                width: "100%",
                background: "var(--cl-accent)",
                color: "var(--cl-accent-text)",
                border: "none",
                borderRadius: t.btnRadius,
                padding: `${t.btnPaddingY}px ${t.btnPaddingX}px`,
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
                letterSpacing: "0.04em",
                textTransform: "uppercase" as const,
                textDecoration: "none",
                boxShadow: t.accentGlow ? `0 0 32px -2px ${t.accent}66` : "none",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" alt="Zalo" style={{ width: 24, height: 24 }} />
              GỬI THÔNG TIN — TÔI MUỐN GIỮ 1 SUẤT OFFLINE NÀY
            </a>
            <p style={{ textAlign: "center", fontSize: 13, color: "#666", fontStyle: "italic", marginTop: 12 }}>
              Nhắn tin Zalo để được tư vấn chi tiết và giữ chỗ
            </p>

            {/* Guarantee */}
            <div style={{ marginTop: 32, paddingTop: 28, borderTop: `1px solid var(--cl-line)`, textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
                <svg width={44} height={44} viewBox="0 0 40 40" fill="none" style={{ overflow: "visible" }}>
                  <path d="M20 4 L34 10 L34 22 C34 30 20 38 20 38 C20 38 6 30 6 22 L6 10 Z"
                    fill={`${t.accent}14`} stroke={t.accent} strokeWidth="1.8" strokeLinejoin="round"
                    style={{ filter: `drop-shadow(0 0 8px ${t.accent}44)` }}/>
                  <polyline points="13,21 17,26 27,15" stroke={t.accent} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ fontSize: 15, color: "var(--cl-text-body, #cfcfcf)", lineHeight: 1.7, maxWidth: 520, margin: "0 auto", fontStyle: "italic", textWrap: "balance" as any }}>
                {c.guarantee}
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
