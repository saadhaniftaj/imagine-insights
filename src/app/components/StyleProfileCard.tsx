"use client";
import { useState } from "react";
import { Palette, Sparkles, Share2, Lock } from "lucide-react";
import { motion } from "framer-motion";
import InsightFooter from "./InsightFooter";
import { mockStyles } from "../data/mockData";

export default function StyleProfileCard() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div>


      {!revealed ? (
        <div className="glass-card" style={{ padding: 40, textAlign: "center", maxWidth: 440, margin: "0 auto" }}>
          <div style={{
            width: 72, height: 72, borderRadius: "50%", margin: "0 auto 16px",
            background: "var(--accent-gradient)", display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <Sparkles size={32} color="white" />
          </div>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
            Your Creative Style is Ready
          </h3>
          <p style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 8 }}>
            Based on 47 generations across 12 styles and 8 models
          </p>
          <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 24 }}>
            We analyzed your choices to discover your creative DNA
          </p>
          <button className="btn-primary" onClick={() => setRevealed(true)}>
            Reveal My Style
          </button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
          style={{ maxWidth: 480, margin: "0 auto" }}
        >
          {/* Style Card */}
          <div style={{
            background: "linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.08), rgba(59, 130, 246, 0.08))",
            border: "1px solid rgba(139, 92, 246, 0.3)",
            borderRadius: 20, padding: 28, position: "relative", overflow: "hidden"
          }}>
            {/* Background glow */}
            <div style={{
              position: "absolute", top: -60, right: -60, width: 200, height: 200,
              background: "radial-gradient(circle, rgba(139,92,246,0.15), transparent)",
              borderRadius: "50%"
            }} />
            <div style={{
              position: "absolute", bottom: -40, left: -40, width: 150, height: 150,
              background: "radial-gradient(circle, rgba(236,72,153,0.1), transparent)",
              borderRadius: "50%"
            }} />

            <div style={{ position: "relative" }}>
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                <Palette size={18} style={{ color: "var(--accent-purple-light)" }} />
                <span style={{ fontSize: 12, fontWeight: 600, color: "var(--accent-purple-light)", textTransform: "uppercase", letterSpacing: 1 }}>
                  Your Creative Style
                </span>
              </div>

              {/* Style Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                {mockStyles.map((style, i) => (
                  <motion.div
                    key={style.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.15 }}
                    style={{
                      padding: "8px 16px", borderRadius: 20,
                      background: `${style.color}20`,
                      border: `1px solid ${style.color}40`,
                      fontSize: 14, fontWeight: 600,
                      color: style.color
                    }}
                  >
                    {style.name}
                  </motion.div>
                ))}
              </div>

              {/* Style Breakdown */}
              <div style={{ marginBottom: 24 }}>
                {mockStyles.map((style, i) => (
                  <motion.div
                    key={style.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    style={{ marginBottom: 12 }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{style.name}</span>
                      <span style={{ fontSize: 13, fontWeight: 600 }}>{style.percentage}%</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${style.percentage}%` }}
                        transition={{ delay: 0.7 + i * 0.15, duration: 0.8, ease: "easeOut" }}
                        style={{ background: style.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Insight */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                style={{
                  padding: 16, borderRadius: 12,
                  background: "rgba(139, 92, 246, 0.1)",
                  border: "1px solid rgba(139, 92, 246, 0.15)",
                  marginBottom: 20
                }}
              >
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  You gravitate toward <strong style={{ color: "var(--text-primary)" }}>cinematic compositions with moody, dramatic atmospheres</strong>. Your work has a distinctive dark fantasy edge with exceptional attention to lighting.
                </p>
              </motion.div>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                style={{ display: "flex", gap: 10 }}
              >
                <button className="btn-primary" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                  <Share2 size={14} /> Share Style Card
                </button>
                <button className="btn-secondary" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13 }}>
                  <Lock size={14} /> My Profile
                </button>
              </motion.div>
            </div>
          </div>

          {/* Annotation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            style={{
              marginTop: 16, padding: 12, borderRadius: 8,
              background: "rgba(16, 185, 129, 0.05)",
              border: "1px solid rgba(16, 185, 129, 0.1)"
            }}
          >
            <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
              <strong style={{ color: "#10B981" }}>No competitor has this.</strong> Midjourney has <code style={{ fontSize: 11, background: "var(--bg-elevated)", padding: "2px 6px", borderRadius: 4 }}>--p</code> personalization but no shareable identity card. Spotify Wrapped drove 200M engagements in 24hrs. This is Spotify Wrapped for AI art.
            </p>
          </motion.div>
        </motion.div>
      )}
      <InsightFooter
        benefit="Creates a competitive switching cost. Your style profile is unique to ImagineArt and does not transfer to Midjourney, Leonardo, or any competitor. Also triggers the IKEA Effect — seeing your creative identity reflected back increases platform valuation."
        reasoning="Spotify Wrapped is just a data summary. It drove 200M engagements in 24h and 11M new Premium subscribers in Q4 2024. The value isn't complexity — it's the psychological mirror. This applies directly to creative identity."
        metric="Style Card Reveal Rate"
        threshold="Success: 60%+ | Kill: <30% | Trigger: after 5+ generations"
        sources={[
          { label: "IKEA Effect — Harvard 2012", url: "https://hbs.edu/faculty/Pages/item.aspx?num=41121" },
          { label: "Spotify Wrapped engagement — Spotify Q4 2024", url: "https://newsroom.spotify.com" },
        ]}
      />
    </div>
  );
}
