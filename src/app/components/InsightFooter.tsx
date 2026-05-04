"use client";
import { ExternalLink, TrendingUp } from "lucide-react";

type Props = {
  benefit: string;
  reasoning: string;
  metric: string;
  threshold: string;
  sources: { label: string; url: string }[];
};

export default function InsightFooter({ benefit, reasoning, metric, threshold, sources }: Props) {
  return (
    <div style={{ marginTop: 28, borderTop: "1px solid var(--border-subtle)", paddingTop: 20 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
        <div style={{ padding: 14, borderRadius: 10, background: "rgba(16, 185, 129, 0.06)", border: "1px solid rgba(16, 185, 129, 0.12)" }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: "#10B981", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>Expected Benefit</p>
          <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6 }}>{benefit}</p>
        </div>
        <div style={{ padding: 14, borderRadius: 10, background: "rgba(138, 63, 252, 0.06)", border: "1px solid rgba(138, 63, 252, 0.12)" }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: "var(--accent-light)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>How I Reached This Conclusion</p>
          <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6 }}>{reasoning}</p>
        </div>
      </div>
      <div style={{ padding: 10, borderRadius: 8, background: "var(--bg-elevated)", display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <TrendingUp size={14} style={{ color: "var(--accent-amber)", flexShrink: 0 }} />
        <p style={{ fontSize: 12, color: "var(--text-secondary)" }}>
          <strong style={{ color: "var(--text-primary)" }}>{metric}:</strong> {threshold}
        </p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {sources.map(s => (
          <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 8px", borderRadius: 6, background: "var(--bg-elevated)", fontSize: 10, color: "var(--text-muted)", textDecoration: "none", border: "1px solid var(--border-subtle)" }}>
            <ExternalLink size={8} /> {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
