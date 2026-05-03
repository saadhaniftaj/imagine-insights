"use client";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle2, XCircle, Target, Activity } from "lucide-react";

const metrics = [
  { name: "D7 Retention", current: "~12%", success: "15%+", stretch: "18%+", kill: "<14%", status: "primary" },
  { name: "D30 Retention", current: "~5%", success: "7%+", stretch: "10%+", kill: "<6%", status: "primary" },
  { name: "DAU/MAU", current: "~16%", success: "19%+", stretch: "22%+", kill: "<17%", status: "primary" },
  { name: "Publish Rate (Week 1)", current: "<5%", success: "12%+", stretch: "20%+", kill: "<8%", status: "secondary" },
  { name: "First-Like Rate", current: "N/A", success: "40%+ in 48h", stretch: "60%+", kill: "<20%", status: "secondary" },
  { name: "Challenge Entry (D30)", current: "N/A", success: "8%+", stretch: "15%+", kill: "<3%", status: "secondary" },
  { name: "Style Card Reveal", current: "N/A", success: "60%+", stretch: "80%+", kill: "<30%", status: "secondary" },
  { name: "Remix Usage", current: "N/A", success: "5%+", stretch: "10%+", kill: "<2%", status: "secondary" },
  { name: "Model Rec. Adoption", current: "N/A", success: "20%+", stretch: "35%+", kill: "<8%", status: "secondary" },
];

const counterMetrics = [
  { name: "Feed Quality (report rate)", threshold: "No increase vs control", red: ">20% increase" },
  { name: "Revenue per User", threshold: "No decrease vs control", red: ">5% decrease" },
  { name: "Premium Conversion", threshold: "No decrease vs control", red: ">10% decrease" },
  { name: "App Store Rating", threshold: "Stable", red: ">0.1 star drop" },
];

export default function MetricsPanel() {
  return (
    <div>
      {/* A/B Test Design */}
      <div className="glass-card" style={{ padding: 22, marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <Target size={16} style={{ color: "#8a3ffc" }} />
          <h3 style={{ fontSize: 15, fontWeight: 700 }}>A/B Test Design</h3>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {[
            { label: "Population", value: "5-10% of new signups" },
            { label: "Duration", value: "3-4 weeks" },
            { label: "Min Sample", value: "~10K per arm" },
            { label: "Control", value: "Current experience" },
          ].map(item => (
            <div key={item.label} style={{ padding: 14, borderRadius: 10, background: "var(--bg-elevated)" }}>
              <p style={{ fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>{item.label}</p>
              <p style={{ fontSize: 14, fontWeight: 600 }}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Primary + Secondary Metrics */}
      <div className="glass-card" style={{ padding: 22, marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <Activity size={16} style={{ color: "#8a3ffc" }} />
          <h3 style={{ fontSize: 15, fontWeight: 700 }}>Success / Kill Thresholds</h3>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
              <th style={{ textAlign: "left", padding: "8px 10px", fontSize: 10, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 0.5 }}>Metric</th>
              <th style={{ textAlign: "center", padding: "8px 10px", fontSize: 10, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase" }}>Current</th>
              <th style={{ textAlign: "center", padding: "8px 10px", fontSize: 10, fontWeight: 700, color: "#10B981", textTransform: "uppercase" }}>Success</th>
              <th style={{ textAlign: "center", padding: "8px 10px", fontSize: 10, fontWeight: 700, color: "#8a3ffc", textTransform: "uppercase" }}>Stretch</th>
              <th style={{ textAlign: "center", padding: "8px 10px", fontSize: 10, fontWeight: 700, color: "#EF4444", textTransform: "uppercase" }}>Kill</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((m, i) => (
              <tr key={m.name} style={{
                borderBottom: "1px solid var(--border-subtle)",
                background: m.status === "primary" ? "rgba(138, 63, 252, 0.04)" : "transparent"
              }}>
                <td style={{ padding: "10px", fontWeight: m.status === "primary" ? 600 : 400 }}>
                  {m.status === "primary" && <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: 3, background: "#8a3ffc", marginRight: 6 }} />}
                  {m.name}
                </td>
                <td style={{ textAlign: "center", padding: "10px", color: "var(--text-muted)" }}>{m.current}</td>
                <td style={{ textAlign: "center", padding: "10px", color: "#10B981", fontWeight: 600 }}>{m.success}</td>
                <td style={{ textAlign: "center", padding: "10px", color: "#8a3ffc", fontWeight: 600 }}>{m.stretch}</td>
                <td style={{ textAlign: "center", padding: "10px", color: "#EF4444", fontWeight: 600 }}>{m.kill}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Counter-Metrics */}
      <div className="glass-card" style={{ padding: 22, marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <AlertTriangle size={16} style={{ color: "var(--accent-amber)" }} />
          <h3 style={{ fontSize: 15, fontWeight: 700 }}>Counter-Metrics (Must Not Degrade)</h3>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {counterMetrics.map(cm => (
            <div key={cm.name} style={{ padding: 14, borderRadius: 10, background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)" }}>
              <p style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>{cm.name}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                <CheckCircle2 size={12} style={{ color: "#10B981" }} />
                <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{cm.threshold}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <XCircle size={12} style={{ color: "#EF4444" }} />
                <span style={{ fontSize: 12, color: "var(--accent-red)" }}>{cm.red}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decision Tree */}
      <div className="glass-card" style={{ padding: 22 }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 14 }}>Decision Framework</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { condition: "D7 >= 15% AND counter-metrics stable", action: "SHIP", detail: "Roll out to 25%, then 50%, then 100%", color: "#10B981" },
            { condition: "D7 14-15% AND publish rate >= 12%", action: "ITERATE", detail: "Activation works, retention tail needs tuning. Test copy, timing, themes.", color: "var(--accent-amber)" },
            { condition: "D7 < 14% AND publish rate < 8%", action: "KILL", detail: "Abandon approach. Run exit surveys. Pivot hypothesis.", color: "#EF4444" },
            { condition: "D7 >= 15% BUT revenue/user drops > 5%", action: "PAUSE", detail: "Journey may delay paywall. Insert paywall touchpoint at Day 5.", color: "#3B82F6" },
          ].map(d => (
            <div key={d.action} style={{
              padding: 14, borderRadius: 10,
              background: "var(--bg-elevated)",
              border: `1px solid ${d.color}25`,
              display: "flex", alignItems: "flex-start", gap: 12
            }}>
              <span style={{
                padding: "3px 10px", borderRadius: 6, fontSize: 11, fontWeight: 800,
                background: `${d.color}15`, color: d.color, flexShrink: 0
              }}>
                {d.action}
              </span>
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, marginBottom: 2 }}>{d.condition}</p>
                <p style={{ fontSize: 11, color: "var(--text-muted)" }}>{d.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
