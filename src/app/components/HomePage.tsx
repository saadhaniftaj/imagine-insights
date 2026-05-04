"use client";
import { AlertTriangle, TrendingDown, TrendingUp, Users, Zap, Target, ExternalLink, ChevronRight, XCircle, CheckCircle2, BarChart3, DollarSign } from "lucide-react";

const competitors = [
  { name: "ImagineArt", arr: "~$23M", mau: "5M", dau: "800K", arpu: "$6-8", downloads: "150M+", funding: "$0", highlight: true },
  { name: "Midjourney", arr: "$500M", mau: "N/A", dau: "1.2-2.5M", arpu: "$238", downloads: "N/A", funding: "$0" },
  { name: "Canva", arr: "$4B", mau: "265M", dau: "N/A", arpu: "$15", downloads: "N/A", funding: "VC" },
  { name: "Picsart", arr: "~$200M", mau: "150M", dau: "N/A", arpu: "$1.3", downloads: "2B", funding: "$195M" },
  { name: "Higgsfield", arr: "$200-230M", mau: "N/A", dau: "N/A", arpu: "$13-15", downloads: "N/A", funding: "$138M" },
  { name: "Leonardo AI", arr: "$50-95M", mau: "1.2M", dau: "N/A", arpu: "N/A", downloads: "N/A", funding: "Acquired" },
  { name: "NightCafe", arr: "Private", mau: "N/A", dau: "N/A", arpu: "N/A", downloads: "N/A", funding: "$0" },
];

const killed = [
  { name: "Canva-style layered editing", reason: "Multi-year engineering. Wrong segment — Canva targets SMBs, ImagineArt targets consumers." },
  { name: "Higgsfield real-time video", reason: "$138M funding needed. 85% of their users are commercial marketers — wrong audience." },
  { name: "Copy NightCafe gamification", reason: "NightCafe has all these features at 25M users. Still not a unicorn. Features alone are not strategy." },
  { name: "Onboarding UX redesign", reason: "Table stakes. No switching cost, no identity investment. Every product should have good onboarding." },
];

const components = [
  { name: "Identity-Based Publish Prompt", layer: "Activation", effort: "1 eng, 1 week", desc: "Replace transactional 'earn tokens' with social 'share with community'" },
  { name: "First-Like Push Notification", layer: "Activation", effort: "1 eng, 1 week", desc: "One-time notification when user receives their first-ever like" },
  { name: "Style Profile Card", layer: "Activation", effort: "2 eng, 2 weeks", desc: "After 5+ generations, reflect creative identity back to user" },
  { name: "Creator Analytics Dashboard", layer: "Technical", effort: "2 eng, 3 weeks", desc: "Time-series trends replacing 3 static numbers on profile" },
  { name: "Community Remix", layer: "Technical", effort: "1 eng, 1.5 weeks", desc: "One-tap fork with pre-filled prompt, model, and settings" },
  { name: "Smart Model Recommender", layer: "Technical", effort: "1 eng, 2 weeks", desc: "Keyword analysis to suggest best model from 50+ options" },
  { name: "Daily Challenge + Voting", layer: "Technical", effort: "2 eng, 4 weeks", desc: "Daily themes with 1-5 star voting, streaks, leaderboard" },
];

const sources = [
  { label: "Vyro 800K DAU, 150M downloads", url: "https://vyro.ai" },
  { label: "Vyro 5M MAU", url: "https://growjo.com" },
  { label: "Vyro 300% revenue growth", url: "https://stripe.com/customers/vyro" },
  { label: "Midjourney $500M revenue, 21M users", url: "https://demandsage.com" },
  { label: "Midjourney ~8% monthly churn, $238 ARPU", url: "https://devgraphiq.com" },
  { label: "Canva 265M MAU, $4B ARR, 31M paid", url: "https://sacra.com" },
  { label: "Canva 12% conversion rate", url: "https://breakevenpointcalculator.com" },
  { label: "Higgsfield $200M+ ARR, $1.3B valuation", url: "https://forbes.com" },
  { label: "NightCafe 25M users, daily challenges", url: "https://newsfilecorp.com" },
  { label: "Leonardo AI 19M users, acquired by Canva", url: "https://semrush.com" },
  { label: "IKEA Effect (Norton et al., Harvard 2012)", url: "https://hbs.edu/faculty/Pages/item.aspx?num=41121" },
  { label: "D7 retention benchmarks", url: "https://businessofapps.com" },
  { label: "90/9/1 participation inequality", url: "https://talkwalker.com" },
  { label: "Activation milestones research", url: "https://amplitude.com" },
  { label: "a16z Top 50 Gen AI Apps", url: "https://a16z.com" },
];

export default function HomePage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      {/* Hero */}
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <span className="tag-pill" style={{ marginBottom: 12, display: "inline-block" }}>Associate Product Manager Proposal</span>
        <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.2, marginBottom: 12 }}>
          Creator Journey<br /><span className="gradient-text">Activation System</span>
        </h1>
        <p style={{ fontSize: 15, color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
          A 7-component feature suite for ImagineArt that transforms casual generators into active creators through behavioral psychology — closing the ARPU gap without new model infrastructure.
        </p>
      </div>

      {/* THE PROBLEM */}
      <div className="glass-card" style={{ padding: 28, marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <AlertTriangle size={18} style={{ color: "var(--accent-amber)" }} />
          <h2 style={{ fontSize: 20, fontWeight: 700 }}>The Problem</h2>
        </div>
        <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>
          ImagineArt has <strong style={{ color: "var(--text-primary)" }}>150 million downloads on zero external funding</strong> — making it the most capital-efficient AI creative company in the market. Acquisition is world-class.
          But ARPU tells a different story.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            { label: "ImagineArt ARPU", value: "$6-8/yr", sub: "Current", color: "var(--accent-red)" },
            { label: "Midjourney ARPU", value: "$238/yr", sub: "30x higher", color: "var(--accent-amber)" },
            { label: "Canva ARPU", value: "$15/yr", sub: "2x higher", color: "var(--accent-green)" },
          ].map(s => (
            <div key={s.label} style={{ padding: 18, borderRadius: 12, background: "var(--bg-elevated)", textAlign: "center" }}>
              <p style={{ fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>{s.label}</p>
              <p style={{ fontSize: 28, fontWeight: 800, color: s.color }}>{s.value}</p>
              <p style={{ fontSize: 11, color: "var(--text-muted)" }}>{s.sub}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 16, lineHeight: 1.7 }}>
          Revenue = Retained Users x Conversion x Price. ImagineArt converts downloads into generators — but not generators into creators. Users generate, download, and leave. The activation gap between "first generation" and "active community member" is where revenue leaks.
        </p>
      </div>

      {/* MARKET CONTEXT */}
      <div className="glass-card" style={{ padding: 28, marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <BarChart3 size={18} style={{ color: "#8a3ffc" }} />
          <h2 style={{ fontSize: 20, fontWeight: 700 }}>Market Context</h2>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                {["Platform", "ARR", "MAU", "DAU", "ARPU", "Downloads", "Funding"].map(h => (
                  <th key={h} style={{ textAlign: "left", padding: "8px 10px", fontSize: 10, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 0.5 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {competitors.map(c => (
                <tr key={c.name} style={{ borderBottom: "1px solid var(--border-subtle)", background: c.highlight ? "rgba(138, 63, 252, 0.06)" : "transparent" }}>
                  <td style={{ padding: "10px", fontWeight: 600, color: c.highlight ? "var(--accent-light)" : "var(--text-primary)" }}>{c.name}</td>
                  <td style={{ padding: "10px" }}>{c.arr}</td>
                  <td style={{ padding: "10px" }}>{c.mau}</td>
                  <td style={{ padding: "10px" }}>{c.dau}</td>
                  <td style={{ padding: "10px", fontWeight: 600, color: c.name === "Midjourney" ? "var(--accent-amber)" : "" }}>{c.arpu}</td>
                  <td style={{ padding: "10px" }}>{c.downloads}</td>
                  <td style={{ padding: "10px" }}>{c.funding}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 12, fontStyle: "italic" }}>
          Sources: vyro.ai, demandsage.com, sacra.com, forbes.com, growjo.com, devgraphiq.com, semrush.com. All figures from 2025-2026 industry reports.
        </p>
      </div>

      {/* PRODUCT AUDIT */}
      <div className="glass-card" style={{ padding: 28, marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <Target size={18} style={{ color: "#8a3ffc" }} />
          <h2 style={{ fontSize: 20, fontWeight: 700 }}>Product Audit</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ padding: 18, borderRadius: 12, background: "var(--bg-elevated)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
              <CheckCircle2 size={14} style={{ color: "var(--accent-green)" }} />
              <h3 style={{ fontSize: 13, fontWeight: 700, color: "var(--accent-green)" }}>What Exists (Strong)</h3>
            </div>
            {["50+ AI models (Kling 3.0, Wan 2.7, Flux Pro, Sora 2)", "Node-based workflows, brand kit, film studio", "30+ UGC mini-apps, prompt enhancer", "Community gallery with profiles and likes", "Monthly challenges with cash prizes", "Image-to-image, text-to-video generation"].map(item => (
              <p key={item} style={{ fontSize: 12, color: "var(--text-secondary)", padding: "4px 0", borderBottom: "1px solid var(--border-subtle)" }}>{item}</p>
            ))}
          </div>
          <div style={{ padding: 18, borderRadius: 12, background: "var(--bg-elevated)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
              <XCircle size={14} style={{ color: "var(--accent-red)" }} />
              <h3 style={{ fontSize: 13, fontWeight: 700, color: "var(--accent-red)" }}>What's Missing (Gap)</h3>
            </div>
            {["No guided path from generating to publishing", "No notification when someone likes your work", "No style analysis or identity reflection", "Monthly challenges only = 12 triggers/year", "No one-tap remix from community creations", "50+ models with zero recommendation"].map(item => (
              <p key={item} style={{ fontSize: 12, color: "var(--text-secondary)", padding: "4px 0", borderBottom: "1px solid var(--border-subtle)" }}>{item}</p>
            ))}
          </div>
        </div>
        <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 14, lineHeight: 1.7 }}>
          <strong style={{ color: "var(--text-primary)" }}>Key finding:</strong> ImagineArt is not feature-poor. The breadth is unmatched — no single competitor covers this many tools. The gap is not in generation capabilities. It is in the post-generation experience — the journey from "I made something" to "I am a creator here."
        </p>
      </div>

      {/* WHAT WE KILLED */}
      <div className="glass-card" style={{ padding: 28, marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <XCircle size={18} style={{ color: "var(--accent-red)" }} />
          <h2 style={{ fontSize: 20, fontWeight: 700 }}>Ideas We Evaluated and Discarded</h2>
        </div>
        <p style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 16, lineHeight: 1.7 }}>
          What you don't build matters as much as what you do. Each of these was the obvious engineering answer. None was the strategic one.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {killed.map(k => (
            <div key={k.name} style={{ padding: 16, borderRadius: 10, background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)" }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "var(--accent-red)", marginBottom: 6, textDecoration: "line-through", textDecorationColor: "var(--accent-red)" }}>{k.name}</p>
              <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6 }}>{k.reason}</p>
            </div>
          ))}
        </div>
      </div>

      {/* THE INSIGHT */}
      <div className="glass-card" style={{ padding: 28, marginBottom: 24, border: "1px solid rgba(138, 63, 252, 0.2)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <Zap size={18} style={{ color: "#8a3ffc" }} />
          <h2 style={{ fontSize: 20, fontWeight: 700 }}>The Core Insight</h2>
        </div>
        <div style={{ padding: 20, borderRadius: 12, background: "rgba(138, 63, 252, 0.06)", marginBottom: 20, textAlign: "center" }}>
          <p style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.5 }}>
            ImagineArt converts downloads into <span style={{ color: "var(--accent-red)" }}>generators</span>.
            <br />Not generators into <span className="gradient-text">creators</span>.
            <br /><span style={{ fontSize: 14, color: "var(--text-muted)", fontWeight: 400 }}>That is the activation gap.</span>
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
          {[
            { title: "IKEA Effect", desc: "People value self-created items 63% more — but only on 'successful completion.' Publishing + receiving a like IS completion.", source: "Norton, Mochon, Ariely — Harvard Business School, 2012" },
            { title: "90/9/1 Rule", desc: "In any community: 90% lurk, 9% contribute occasionally, 1% create actively. ImagineArt makes zero effort to move users up this ladder.", source: "Talkwalker Community Participation Research, 2025" },
            { title: "Activation Milestones", desc: "Users who hit a meaningful milestone retain at 2-3x the rate. Current milestone ('generate first image') is too early. Proposed: 'publish + receive first like.'", source: "Lenny Rachitsky / Amplitude Research / UXCam" },
          ].map(f => (
            <div key={f.title} style={{ padding: 16, borderRadius: 10, background: "var(--bg-elevated)" }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }} className="gradient-text">{f.title}</h3>
              <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 8 }}>{f.desc}</p>
              <p style={{ fontSize: 10, color: "var(--text-muted)", fontStyle: "italic" }}>{f.source}</p>
            </div>
          ))}
        </div>
      </div>

      {/* THE SOLUTION */}
      <div className="glass-card" style={{ padding: 28, marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <CheckCircle2 size={18} style={{ color: "var(--accent-green)" }} />
          <h2 style={{ fontSize: 20, fontWeight: 700 }}>The Proposed Solution: 7 Components</h2>
        </div>
        <p style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 16, lineHeight: 1.7 }}>
          Each component is demonstrated in the interactive tabs on the left. Navigate through each to see the working prototype, the reasoning, and the metrics that will validate it.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {components.map((c, i) => (
            <div key={c.name} style={{ display: "flex", alignItems: "center", gap: 14, padding: 14, borderRadius: 10, background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)" }}>
              <span style={{ width: 28, height: 28, borderRadius: 8, background: c.layer === "Activation" ? "rgba(138, 63, 252, 0.15)" : "rgba(59, 130, 246, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: c.layer === "Activation" ? "var(--accent-light)" : "#60a5fa", flexShrink: 0 }}>{i + 1}</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 13, fontWeight: 700 }}>{c.name}</p>
                <p style={{ fontSize: 11, color: "var(--text-muted)" }}>{c.desc}</p>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <span className="tag-pill" style={{ fontSize: 10 }}>{c.layer}</span>
                <p style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 4 }}>{c.effort}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 14 }}>
          <strong>Total engineering estimate:</strong> 54-70 person-weeks across 3 phases. Phase 1 ships in 4 weeks with 3-4 engineers.
        </p>
      </div>

      {/* PROJECTED IMPACT */}
      <div className="glass-card" style={{ padding: 28, marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <DollarSign size={18} style={{ color: "var(--accent-green)" }} />
          <h2 style={{ fontSize: 20, fontWeight: 700 }}>Projected Impact</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ padding: 18, borderRadius: 12, background: "var(--bg-elevated)" }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: "var(--accent-amber)", marginBottom: 10 }}>Phase 1 (Conservative)</h3>
            {[
              { l: "Monthly new signups", v: "~500,000" },
              { l: "D7 retention lift", v: "+3pp (12% to 15%)" },
              { l: "Additional retained/month", v: "+15,000 users" },
              { l: "If 4% convert to paid", v: "+600 subscribers/mo" },
              { l: "At $8/mo subscription", v: "+$4,800 MRR" },
              { l: "Year 1 incremental", v: "$58K-$100K ARR" },
            ].map(r => (
              <div key={r.l} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid var(--border-subtle)", fontSize: 12 }}>
                <span style={{ color: "var(--text-secondary)" }}>{r.l}</span>
                <span style={{ fontWeight: 600 }}>{r.v}</span>
              </div>
            ))}
          </div>
          <div style={{ padding: 18, borderRadius: 12, background: "var(--bg-elevated)" }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: "var(--accent-green)", marginBottom: 10 }}>Full System (Year 2-3)</h3>
            {[
              { l: "D7 retention lift", v: "+5-8pp" },
              { l: "Additional retained/year", v: "+240,000 users" },
              { l: "New paid subscribers/year", v: "+12,000" },
              { l: "At $10/mo avg", v: "+$1.4M ARR" },
              { l: "Organic content loop", v: "Creators attract new users" },
              { l: "3-year compound", v: "$3-5M incremental ARR" },
            ].map(r => (
              <div key={r.l} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid var(--border-subtle)", fontSize: 12 }}>
                <span style={{ color: "var(--text-secondary)" }}>{r.l}</span>
                <span style={{ fontWeight: 600, color: "var(--accent-green)" }}>{r.v}</span>
              </div>
            ))}
          </div>
        </div>
        <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 16, lineHeight: 1.7 }}>
          <strong style={{ color: "var(--text-primary)" }}>The strategic prize:</strong> Closing the ARPU gap from $6-8 to $12-15 puts ImagineArt on trajectory from $23M ARR toward $50M+ — on the existing user base, with zero additional acquisition spend.
        </p>
      </div>

      {/* SOURCES */}
      <div className="glass-card" style={{ padding: 28, marginBottom: 24 }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 14 }}>Sources</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          {sources.map(s => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 0", fontSize: 12, color: "var(--text-secondary)", textDecoration: "none", borderBottom: "1px solid var(--border-subtle)" }}>
              <ExternalLink size={10} style={{ color: "var(--accent-light)", flexShrink: 0 }} />
              <span>{s.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ textAlign: "center", padding: "20px 0 40px" }}>
        <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
          Prepared by Saad Hanif Taj | Interactive prototype built in 48 hours | Navigate the tabs to explore each component
        </p>
      </div>
    </div>
  );
}
