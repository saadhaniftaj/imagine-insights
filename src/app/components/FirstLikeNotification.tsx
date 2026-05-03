"use client";
import { useState, useEffect } from "react";
import { Heart, MessageCircle, Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FirstLikeNotification() {
  const [stage, setStage] = useState<"waiting" | "notification" | "expanded">("waiting");
  const [likeCount, setLikeCount] = useState(0);

  const triggerNotification = () => {
    setStage("notification");
    setLikeCount(1);
    setTimeout(() => setLikeCount(3), 2000);
    setTimeout(() => setLikeCount(7), 4000);
  };

  return (
    <div>


      {stage === "waiting" && (
        <div className="glass-card" style={{ padding: 40, textAlign: "center", maxWidth: 500, margin: "0 auto" }}>
          <div style={{
            width: 64, height: 64, borderRadius: "50%", margin: "0 auto 16px",
            background: "var(--bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <Bell size={24} style={{ color: "var(--text-muted)" }} />
          </div>
          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: "var(--text-secondary)" }}>
            Waiting for first community interaction...
          </h3>
          <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
            Your creation "Neon Samurai" was published 2 hours ago
          </p>
          <button className="btn-primary" onClick={triggerNotification}>
            Simulate First Like →
          </button>
        </div>
      )}

      <AnimatePresence>
        {stage === "notification" && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            style={{ maxWidth: 420, margin: "0 auto" }}
          >
            {/* Phone notification style */}
            <div style={{
              background: "linear-gradient(135deg, rgba(138, 63, 252, 0.15), rgba(138, 63, 252, 0.05))",
              border: "1px solid rgba(138, 63, 252, 0.25)",
              borderRadius: 20, padding: 20,
              position: "relative", overflow: "hidden"
            }}>
              {/* Glow effect */}
              <div style={{
                position: "absolute", top: -20, left: -20, width: 100, height: 100,
                background: "radial-gradient(circle, rgba(138,63,252,0.2), transparent)",
                borderRadius: "50%", filter: "blur(20px)"
              }} />

              <div style={{ display: "flex", alignItems: "flex-start", gap: 14, position: "relative" }}>
                {/* Notification icon with pulse */}
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: "50%",
                    background: "var(--accent-gradient)",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <Heart size={22} fill="white" color="white" />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      position: "absolute", inset: -4, borderRadius: "50%",
                      border: "2px solid var(--accent)"
                    }}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "var(--accent-light)" }}>
                      ImagineArt
                    </span>
                    <span style={{ fontSize: 11, color: "var(--text-muted)" }}>now</span>
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>
                    Someone loved your creation!
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.5 }}>
                    Your <strong>"Neon Samurai"</strong> just received its first like from <strong>@ArtMaster42</strong>
                  </p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    style={{ marginTop: 12, display: "flex", gap: 8 }}
                  >
                    <div style={{
                      display: "flex", alignItems: "center", gap: 4,
                      padding: "6px 12px", borderRadius: 20,
                      background: "rgba(138, 63, 252, 0.15)", fontSize: 13
                    }}>
                      <Heart size={12} fill="#a97bff" color="#a97bff" />
                      <motion.span
                        key={likeCount}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontWeight: 600 }}
                      >
                        {likeCount} {likeCount === 1 ? "like" : "likes"}
                      </motion.span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                    style={{ marginTop: 12, display: "flex", gap: 8 }}
                  >
                    <button className="btn-primary" onClick={() => setStage("expanded")}
                      style={{ fontSize: 13, padding: "8px 16px" }}>
                      See what others are creating →
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Why this matters */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              style={{
                marginTop: 16, padding: 12, borderRadius: 8,
                background: "rgba(138, 63, 252, 0.05)",
                border: "1px solid rgba(138, 63, 252, 0.1)"
              }}
            >
              <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
                <strong style={{ color: "var(--accent-light)" }}>IKEA Effect trigger:</strong> Users value self-created work 63% more when effort reaches completion (Norton et al., Harvard 2012). A like IS the completion moment.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {stage !== "waiting" && (
        <div style={{ textAlign: "center", marginTop: 16 }}>
          <button className="btn-secondary" onClick={() => { setStage("waiting"); setLikeCount(0); }}
            style={{ fontSize: 12 }}>
            Reset Demo
          </button>
        </div>
      )}
    </div>
  );
}
