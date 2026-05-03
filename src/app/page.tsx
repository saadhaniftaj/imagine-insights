"use client";
import { useState } from "react";
import {
  Send, Heart, Palette, BarChart3, Repeat2, Cpu, Flame,
  ChevronRight, Sparkles, Activity
} from "lucide-react";
import dynamic from "next/dynamic";

const PublishPrompt = dynamic(() => import("./components/PublishPrompt"), { ssr: false });
const FirstLikeNotification = dynamic(() => import("./components/FirstLikeNotification"), { ssr: false });
const StyleProfileCard = dynamic(() => import("./components/StyleProfileCard"), { ssr: false });
const CreatorDashboard = dynamic(() => import("./components/CreatorDashboard"), { ssr: false });
const CommunityRemix = dynamic(() => import("./components/CommunityRemix"), { ssr: false });
const ModelRecommender = dynamic(() => import("./components/ModelRecommender"), { ssr: false });
const DailyChallenge = dynamic(() => import("./components/DailyChallenge"), { ssr: false });
const MetricsPanel = dynamic(() => import("./components/MetricsPanel"), { ssr: false });

const tabs = [
  { id: "publish", label: "Creator Journey", icon: Send, sub: "Guided Activation", category: "Activation" },
  { id: "like", label: "Validation Loop", icon: Heart, sub: "First-Like Trigger", category: "Activation" },
  { id: "style", label: "Style Identity", icon: Palette, sub: "Switching Cost", category: "Activation" },
  { id: "dashboard", label: "Creator Analytics", icon: BarChart3, sub: "Growth Dashboard", category: "Technical" },
  { id: "remix", label: "Community Remix", icon: Repeat2, sub: "One-Tap Fork", category: "Technical" },
  { id: "model", label: "Model Recommender", icon: Cpu, sub: "Smart Matching", category: "Technical" },
  { id: "challenge", label: "Daily Challenge", icon: Flame, sub: "Habit Loop", category: "Technical" },
  { id: "metrics", label: "PM Metrics", icon: Activity, sub: "A/B Thresholds", category: "Validation" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("publish");
  const activeTabData = tabs.find(t => t.id === activeTab);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside style={{
        width: 260, padding: "20px 14px",
        borderRight: "1px solid var(--border-subtle)",
        background: "#0f0f0f",
        position: "fixed", top: 0, left: 0, bottom: 0,
        overflowY: "auto",
        display: "flex", flexDirection: "column"
      }}>
        <div style={{ padding: "0 12px 20px", borderBottom: "1px solid var(--border-subtle)", marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: "#8a3ffc",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <Sparkles size={16} color="white" />
            </div>
            <div>
              <h1 style={{ fontSize: 15, fontWeight: 800, letterSpacing: -0.3 }}>ImagineArt</h1>
              <p style={{ fontSize: 9, color: "var(--text-muted)", fontWeight: 500, textTransform: "uppercase", letterSpacing: 1 }}>Creator Journey</p>
            </div>
          </div>
        </div>

        {["Activation", "Technical", "Validation"].map(cat => (
          <div key={cat} style={{ marginBottom: 6 }}>
            <p style={{
              fontSize: 9, fontWeight: 700, color: "var(--text-muted)",
              textTransform: "uppercase", letterSpacing: 1.5,
              padding: "0 12px", marginBottom: 6, marginTop: 8
            }}>
              {cat}
            </p>
            {tabs.filter(t => t.category === cat).map(tab => (
              <div
                key={tab.id}
                className={`nav-item ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon size={15} />
                <div style={{ flex: 1 }}>
                  <span style={{ display: "block", fontSize: 13 }}>{tab.label}</span>
                  <span style={{ fontSize: 10, color: "var(--text-muted)" }}>{tab.sub}</span>
                </div>
              </div>
            ))}
          </div>
        ))}

        <div style={{ marginTop: "auto", padding: "12px" }}>
          <div style={{
            padding: 12, borderRadius: 10,
            background: "rgba(138, 63, 252, 0.06)",
            border: "1px solid rgba(138, 63, 252, 0.12)"
          }}>
            <p style={{ fontSize: 10, fontWeight: 600, color: "var(--accent-light)" }}>APM Prototype</p>
            <p style={{ fontSize: 9, color: "var(--text-muted)", marginTop: 2 }}>Hypothesis-driven. Built in 48h.</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{
        marginLeft: 260, flex: 1, padding: "28px 36px",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #192834 0%, #0f0f0f 100%)"
      }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <span style={{
              padding: "3px 10px", borderRadius: 20, fontSize: 10, fontWeight: 700,
              background: activeTabData?.category === "Activation"
                ? "rgba(138, 63, 252, 0.15)"
                : activeTabData?.category === "Validation"
                ? "rgba(16, 185, 129, 0.15)"
                : "rgba(59, 130, 246, 0.15)",
              color: activeTabData?.category === "Activation"
                ? "#a97bff"
                : activeTabData?.category === "Validation"
                ? "#10B981"
                : "#60a5fa",
              textTransform: "uppercase", letterSpacing: 1
            }}>
              {activeTabData?.category}
            </span>
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 800 }}>{activeTabData?.label}</h2>
        </div>

        {activeTab === "publish" && <PublishPrompt />}
        {activeTab === "like" && <FirstLikeNotification />}
        {activeTab === "style" && <StyleProfileCard />}
        {activeTab === "dashboard" && <CreatorDashboard />}
        {activeTab === "remix" && <CommunityRemix />}
        {activeTab === "model" && <ModelRecommender />}
        {activeTab === "challenge" && <DailyChallenge />}
        {activeTab === "metrics" && <MetricsPanel />}

        <div style={{
          display: "flex", justifyContent: "space-between",
          marginTop: 36, paddingTop: 20,
          borderTop: "1px solid var(--border-subtle)"
        }}>
          <button className="btn-secondary" onClick={() => {
            const idx = tabs.findIndex(t => t.id === activeTab);
            if (idx > 0) setActiveTab(tabs[idx - 1].id);
          }} style={{ visibility: tabs.findIndex(t => t.id === activeTab) > 0 ? "visible" : "hidden" }}>
            Previous
          </button>
          <button className="btn-primary" onClick={() => {
            const idx = tabs.findIndex(t => t.id === activeTab);
            if (idx < tabs.length - 1) setActiveTab(tabs[idx + 1].id);
          }} style={{ visibility: tabs.findIndex(t => t.id === activeTab) < tabs.length - 1 ? "visible" : "hidden" }}>
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
