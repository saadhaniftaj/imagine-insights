"use client";
import { useState } from "react";
import { Cpu, Zap, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { mockModels } from "../data/mockData";

export default function ModelRecommender() {
  const [prompt, setPrompt] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setShowResults(true);
    }, 1500);
  };

  const samplePrompts = [
    "A cinematic landscape at golden hour with dramatic clouds",
    "Anime character in neon-lit cyberpunk city at night",
    "Photorealistic portrait with soft studio lighting and bokeh",
  ];

  return (
    <div>


      {/* Prompt Input */}
      <div className="glass-card" style={{ padding: 24, marginBottom: 20 }}>
        <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 0.5, display: "block", marginBottom: 8 }}>
          Enter your prompt
        </label>
        <div style={{ display: "flex", gap: 12 }}>
          <input
            type="text"
            value={prompt}
            onChange={(e) => { setPrompt(e.target.value); setShowResults(false); }}
            placeholder="Describe what you want to create..."
            style={{
              flex: 1, padding: "14px 18px", borderRadius: 12,
              background: "var(--bg-elevated)", border: "1px solid var(--border-light)",
              color: "var(--text-primary)", fontSize: 14, outline: "none"
            }}
          />
          <button
            className="btn-primary"
            onClick={handleAnalyze}
            disabled={!prompt.trim()}
            style={{
              padding: "14px 24px", display: "flex", alignItems: "center", gap: 8,
              opacity: prompt.trim() ? 1 : 0.5
            }}
          >
            <Sparkles size={16} /> Find Best Models
          </button>
        </div>

        {/* Quick prompts */}
        <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
          <span style={{ fontSize: 11, color: "var(--text-muted)", lineHeight: "28px" }}>Try:</span>
          {samplePrompts.map((sp) => (
            <button
              key={sp}
              onClick={() => { setPrompt(sp); setShowResults(false); }}
              style={{
                padding: "4px 12px", borderRadius: 20, fontSize: 11,
                background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)",
                color: "var(--text-secondary)", cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              {sp.slice(0, 40)}...
            </button>
          ))}
        </div>
      </div>

      {/* Analyzing state */}
      <AnimatePresence>
        {analyzing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="glass-card"
            style={{ padding: 40, textAlign: "center" }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{
                width: 48, height: 48, borderRadius: "50%", margin: "0 auto 16px",
                border: "3px solid var(--bg-hover)",
                borderTopColor: "var(--accent-purple)",
              }}
            />
            <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>
              Analyzing prompt keywords and matching to model strengths...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results */}
      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div style={{
              padding: "8px 14px", borderRadius: 8, marginBottom: 16,
              background: "rgba(139, 92, 246, 0.05)",
              border: "1px solid rgba(139, 92, 246, 0.1)",
              display: "flex", alignItems: "center", gap: 8
            }}>
              <Cpu size={14} style={{ color: "var(--accent-purple-light)" }} />
              <p style={{ fontSize: 12, color: "var(--text-secondary)" }}>
                Detected: <strong style={{ color: "var(--text-primary)" }}>cinematic, landscape, dramatic lighting, golden hour</strong>
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {mockModels.map((model, i) => (
                <motion.div
                  key={model.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="glass-card"
                  style={{
                    padding: 20, display: "flex", alignItems: "center", gap: 16,
                    border: i === 0 ? "1px solid rgba(139, 92, 246, 0.3)" : "1px solid var(--border-subtle)",
                    cursor: "pointer", transition: "all 0.2s ease"
                  }}
                >
                  {/* Match score */}
                  <div style={{
                    width: 56, height: 56, borderRadius: 14, flexShrink: 0,
                    background: i === 0
                      ? "var(--accent-gradient)"
                      : "var(--bg-elevated)",
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"
                  }}>
                    <span style={{ fontSize: 18, fontWeight: 800 }}>{model.match}</span>
                    <span style={{ fontSize: 9, fontWeight: 600, opacity: 0.7 }}>MATCH</span>
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <h4 style={{ fontSize: 16, fontWeight: 700 }}>{model.name}</h4>
                      {i === 0 && (
                        <span style={{
                          padding: "2px 8px", borderRadius: 10, fontSize: 10, fontWeight: 700,
                          background: "rgba(16, 185, 129, 0.15)", color: "#10B981"
                        }}>
                          BEST MATCH
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: 13, color: "var(--text-secondary)" }}>{model.reason}</p>
                  </div>

                  <div style={{ display: "flex", gap: 16, flexShrink: 0 }}>
                    <div style={{ textAlign: "center" }}>
                      <p style={{ fontSize: 11, color: "var(--text-muted)" }}>Speed</p>
                      <p style={{ fontSize: 13, fontWeight: 600 }}>{model.speed}</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <p style={{ fontSize: 11, color: "var(--text-muted)" }}>Quality</p>
                      <p style={{ fontSize: 13, fontWeight: 600 }}>{model.quality}</p>
                    </div>
                  </div>

                  <button className={i === 0 ? "btn-primary" : "btn-secondary"}
                    style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: 4 }}>
                    Use <ChevronRight size={14} />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
