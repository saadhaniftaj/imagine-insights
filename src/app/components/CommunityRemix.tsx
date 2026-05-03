"use client";
import { useState } from "react";
import { Repeat2, Wand2, ChevronRight, Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { mockCommunityCreations } from "../data/mockData";

export default function CommunityRemix() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [remixed, setRemixed] = useState(false);

  const selected = mockCommunityCreations.find(c => c.id === selectedId);

  return (
    <div>


      {/* Community Gallery */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 24 }}>
        {mockCommunityCreations.map(creation => (
          <div key={creation.id} className="glass-card" style={{
            padding: 0, overflow: "hidden", cursor: "pointer",
            border: selectedId === creation.id ? "1px solid var(--accent-purple)" : "1px solid var(--border-subtle)",
            transition: "all 0.2s ease"
          }}
            onClick={() => { setSelectedId(creation.id); setRemixed(false); }}
          >
            {/* Mock image */}
            <div style={{
              height: 140, background: `linear-gradient(135deg, ${creation.color}30, ${creation.color}10, var(--bg-card))`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, color: "var(--text-muted)", position: "relative"
            }}>
              <span style={{ padding: "4px 10px", borderRadius: 6, background: "rgba(0,0,0,0.4)" }}>
                {creation.title}
              </span>
              {/* Remix badge */}
              <div style={{
                position: "absolute", top: 8, right: 8,
                width: 28, height: 28, borderRadius: "50%",
                background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <Repeat2 size={14} style={{ color: "var(--accent-purple-light)" }} />
              </div>
            </div>
            <div style={{ padding: 12 }}>
              <p style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{creation.title}</p>
              <p style={{ fontSize: 11, color: "var(--text-muted)" }}>by {creation.creator}</p>
              <div style={{ display: "flex", gap: 12, marginTop: 8, fontSize: 11, color: "var(--text-secondary)" }}>
                <span>{creation.likes} likes</span>
                <span>{creation.views} views</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Remix Panel */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="glass-card"
            style={{ padding: 24 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <Repeat2 size={18} style={{ color: "var(--accent-purple-light)" }} />
              <h3 style={{ fontSize: 16, fontWeight: 600 }}>Remix: {selected.title}</h3>
              <span className="tag-pill" style={{ marginLeft: "auto" }}>{selected.style}</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 20 }}>
              {/* Prompt */}
              <div style={{
                padding: 16, borderRadius: 12, background: "var(--bg-elevated)",
                border: "1px solid var(--border-subtle)"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 0.5 }}>
                    Prompt
                  </span>
                  <Copy size={12} style={{ color: "var(--text-muted)", cursor: "pointer" }} />
                </div>
                <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  {selected.prompt}
                </p>
              </div>

              {/* Model */}
              <div style={{
                padding: 16, borderRadius: 12, background: "var(--bg-elevated)",
                border: "1px solid var(--border-subtle)"
              }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 0.5, display: "block", marginBottom: 8 }}>
                  Model
                </span>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "6px 12px", borderRadius: 8,
                  background: "rgba(139, 92, 246, 0.1)", border: "1px solid rgba(139, 92, 246, 0.2)"
                }}>
                  <Wand2 size={14} style={{ color: "var(--accent-purple-light)" }} />
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{selected.model}</span>
                </div>
                <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 8 }}>
                  Pre-selected from original creation
                </p>
              </div>

              {/* Style */}
              <div style={{
                padding: 16, borderRadius: 12, background: "var(--bg-elevated)",
                border: "1px solid var(--border-subtle)"
              }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 0.5, display: "block", marginBottom: 8 }}>
                  Style Settings
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  <span className="tag-pill">{selected.style}</span>
                  <span className="tag-pill">HD Quality</span>
                  <span className="tag-pill">16:9</span>
                </div>
                <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 8 }}>
                  All settings pre-filled
                </p>
              </div>
            </div>

            {!remixed ? (
              <button className="btn-primary" onClick={() => setRemixed(true)}
                style={{ width: "100%", padding: "14px 24px", fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                <Repeat2 size={18} /> Remix — Create My Version
              </button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: 20 }}
              >
                <p style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }} className="gradient-text">
                  Generating your remix...
                </p>
                <p style={{ fontSize: 13, color: "var(--text-secondary)" }}>
                  Prompt, model, and style settings applied automatically
                </p>
                <div className="progress-bar" style={{ maxWidth: 300, margin: "16px auto" }}>
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
