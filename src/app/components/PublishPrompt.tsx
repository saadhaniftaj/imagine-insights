"use client";
import { useState } from "react";
import { Send, Heart, Palette, Award, ChevronRight, ChevronLeft, Users, Sparkles, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "You just created something",
    subtitle: "Generation complete",
    content: "post-generation",
  },
  {
    id: 2,
    title: "Share your creation",
    subtitle: "Identity-based prompt",
    content: "publish",
  },
  {
    id: 3,
    title: "Your first community reaction",
    subtitle: "Validation loop trigger",
    content: "first-reaction",
  },
  {
    id: 4,
    title: "Your style is emerging",
    subtitle: "Style identity formation",
    content: "style-forming",
  },
  {
    id: 5,
    title: "A challenge matches your style",
    subtitle: "Personalized engagement",
    content: "challenge-match",
  },
];

export default function PublishPrompt() {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => setCurrentStep(s => Math.min(s + 1, steps.length - 1));
  const prev = () => setCurrentStep(s => Math.max(s - 1, 0));

  return (
    <div>
      {/* Step Indicator */}
      <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 28 }}>
        {steps.map((step, i) => (
          <div key={step.id} style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <div
              onClick={() => setCurrentStep(i)}
              style={{
                width: i === currentStep ? 32 : 8, height: 8,
                borderRadius: 4,
                background: i <= currentStep ? "#8a3ffc" : "var(--bg-hover)",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
            />
          </div>
        ))}
        <span style={{ marginLeft: 12, fontSize: 12, color: "var(--text-muted)" }}>
          Step {currentStep + 1} of {steps.length}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.25 }}
        >
          {/* STEP 1: Post-generation */}
          {currentStep === 0 && (
            <div className="glass-card" style={{ padding: 32, maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
              <div style={{
                width: "100%", height: 200, borderRadius: 12, marginBottom: 20,
                background: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <span style={{ fontSize: 13, color: "var(--text-muted)" }}>AI Generated Image</span>
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>Your creation is ready</h3>
              <p style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 20 }}>
                Right now most users download and leave. The journey ends here.
              </p>
              <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
                <button className="btn-secondary">Download</button>
                <button className="btn-primary" onClick={next} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  What if it didn't end here? <ChevronRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Identity-based publish */}
          {currentStep === 1 && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div className="glass-card" style={{ padding: 24 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: "var(--accent-red)", textTransform: "uppercase", letterSpacing: 1 }}>Current</span>
                <div style={{ background: "var(--bg-elevated)", borderRadius: 14, padding: 24, marginTop: 12, textAlign: "center" }}>
                  <div style={{ width: 120, height: 120, borderRadius: 10, margin: "0 auto 14px", background: "linear-gradient(135deg, #1a1a2e, #0f3460)" }} />
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>Publish and earn tokens!</h3>
                  <p style={{ fontSize: 12, color: "var(--text-secondary)", marginBottom: 16 }}>Earn tokens when someone downloads your work.</p>
                  <button className="btn-secondary" style={{ width: "100%" }}>Publish</button>
                </div>
                <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 12 }}>
                  Transactional framing. New users don't value tokens yet.
                </p>
              </div>

              <div className="glass-card" style={{ padding: 24, border: "1px solid rgba(138, 63, 252, 0.2)" }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: "var(--accent-green)", textTransform: "uppercase", letterSpacing: 1 }}>Proposed</span>
                <div style={{ background: "var(--bg-elevated)", borderRadius: 14, padding: 24, marginTop: 12, textAlign: "center" }}>
                  <div style={{ width: 120, height: 120, borderRadius: 10, margin: "0 auto 14px", background: "linear-gradient(135deg, #1a1a2e, #0f3460)" }} />
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>Love what you made?</h3>
                  <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }} className="gradient-text">Share it with the community</p>
                  <p style={{ fontSize: 12, color: "var(--text-secondary)", marginBottom: 4 }}>See what other creators think</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4, fontSize: 11, color: "var(--text-muted)", marginBottom: 16 }}>
                    <Users size={11} /> 2.4M creators exploring today
                  </div>
                  <button className="btn-primary" onClick={next} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                    Share with Community <Send size={13} />
                  </button>
                  <p style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 8 }}>+ Earn credits when people download</p>
                </div>
                <p style={{ fontSize: 11, color: "var(--accent-green)", marginTop: 12 }}>
                  Social motivation. Credits are secondary, not the headline.
                </p>
              </div>
            </div>
          )}

          {/* STEP 3: First reaction */}
          {currentStep === 2 && (
            <div style={{ maxWidth: 460, margin: "0 auto" }}>
              <div style={{
                background: "linear-gradient(135deg, rgba(138, 63, 252, 0.12), rgba(138, 63, 252, 0.04))",
                border: "1px solid rgba(138, 63, 252, 0.25)",
                borderRadius: 18, padding: 24
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{ position: "relative", flexShrink: 0 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: "50%", background: "#8a3ffc",
                      display: "flex", alignItems: "center", justifyContent: "center"
                    }}>
                      <Heart size={20} fill="white" color="white" />
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                      <span style={{ fontSize: 11, fontWeight: 600, color: "var(--accent-light)" }}>ImagineArt</span>
                      <span style={{ fontSize: 10, color: "var(--text-muted)" }}>now</span>
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>Someone loved your creation!</h3>
                    <p style={{ fontSize: 13, color: "var(--text-secondary)" }}>
                      Your <strong>"Neon Samurai"</strong> got its first like from <strong>@ArtMaster42</strong>
                    </p>
                    <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 12px", borderRadius: 16, background: "rgba(138, 63, 252, 0.15)", fontSize: 12 }}>
                        <Heart size={11} fill="#a97bff" color="#a97bff" /> 1 like
                      </div>
                      <button className="btn-primary" onClick={next} style={{ fontSize: 12, padding: "5px 14px" }}>
                        See community
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 16, textAlign: "center" }}>
                This is the human validation factor. The IKEA Effect kicks in: 63% higher valuation on self-created work when effort reaches completion (Norton et al., Harvard 2012).
              </p>
            </div>
          )}

          {/* STEP 4: Style emerging */}
          {currentStep === 3 && (
            <div style={{ maxWidth: 440, margin: "0 auto" }}>
              <div style={{
                background: "linear-gradient(135deg, rgba(138, 63, 252, 0.1), rgba(214, 51, 132, 0.05))",
                border: "1px solid rgba(138, 63, 252, 0.2)",
                borderRadius: 18, padding: 28
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
                  <Palette size={16} style={{ color: "var(--accent-light)" }} />
                  <span style={{ fontSize: 10, fontWeight: 700, color: "var(--accent-light)", textTransform: "uppercase", letterSpacing: 1 }}>Your Creative Style</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 22 }}>
                  {["Cinematic", "Dark Fantasy", "High Detail", "Moody Lighting"].map((s, i) => (
                    <motion.span key={s} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="tag-pill" style={{ fontSize: 13, padding: "6px 14px" }}>
                      {s}
                    </motion.span>
                  ))}
                </div>
                {[
                  { name: "Cinematic", pct: 42, color: "#8a3ffc" },
                  { name: "Dark Fantasy", pct: 28, color: "#d63384" },
                  { name: "High Detail", pct: 18, color: "#3B82F6" },
                  { name: "Moody Lighting", pct: 12, color: "#10B981" },
                ].map((s, i) => (
                  <div key={s.name} style={{ marginBottom: 10 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                      <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{s.name}</span>
                      <span style={{ fontSize: 12, fontWeight: 600 }}>{s.pct}%</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div className="progress-fill" initial={{ width: 0 }} animate={{ width: `${s.pct}%` }} transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }} style={{ background: s.color }} />
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 18, padding: 14, borderRadius: 10, background: "rgba(138, 63, 252, 0.08)" }}>
                  <p style={{ fontSize: 12, color: "var(--text-secondary)" }}>
                    You gravitate toward <strong style={{ color: "var(--text-primary)" }}>cinematic compositions with dramatic atmospheres</strong>.
                  </p>
                </div>
              </div>
              <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 16, textAlign: "center" }}>
                This is the switching cost. Your style profile doesn't transfer to Midjourney.
              </p>
            </div>
          )}

          {/* STEP 5: Challenge match */}
          {currentStep === 4 && (
            <div style={{ maxWidth: 460, margin: "0 auto" }}>
              <div className="glass-card" style={{ padding: 28, border: "1px solid rgba(138, 63, 252, 0.2)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <Flame size={16} style={{ color: "var(--accent-amber)" }} />
                  <span style={{ fontSize: 10, fontWeight: 700, color: "var(--accent-amber)", textTransform: "uppercase", letterSpacing: 1 }}>Today's Challenge</span>
                </div>
                <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 6 }} className="gradient-text">Neon Noir</h2>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 16 }}>
                  Neon aesthetics meet film noir. Rain-soaked streets, dramatic shadows, vibrant light.
                </p>
                <div style={{
                  padding: 10, borderRadius: 10, marginBottom: 16,
                  background: "rgba(16, 185, 129, 0.08)",
                  border: "1px solid rgba(16, 185, 129, 0.15)",
                  display: "flex", alignItems: "center", gap: 8
                }}>
                  <Sparkles size={14} style={{ color: "#10B981" }} />
                  <p style={{ fontSize: 12, color: "#10B981", fontWeight: 600 }}>Matches your Cinematic + Dark Fantasy style</p>
                </div>
                <div style={{ display: "flex", gap: 12, marginBottom: 16, fontSize: 12, color: "var(--text-secondary)" }}>
                  <span>23h 47m left</span>
                  <span>423 entries</span>
                  <span>500 Credits prize</span>
                </div>
                <button className="btn-primary" style={{ width: "100%", padding: "14px 24px", fontSize: 15 }}>
                  Enter Challenge
                </button>
              </div>
              <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 16, textAlign: "center" }}>
                The loop closes. Consumer to creator in 5 steps: Generate, Publish, Get validated, See identity, Enter challenge.
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 28 }}>
        <button className="btn-secondary" onClick={prev} style={{ visibility: currentStep > 0 ? "visible" : "hidden", display: "flex", alignItems: "center", gap: 4 }}>
          <ChevronLeft size={14} /> Previous
        </button>
        <button className="btn-primary" onClick={next} style={{ visibility: currentStep < steps.length - 1 ? "visible" : "hidden", display: "flex", alignItems: "center", gap: 4 }}>
          Next <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
