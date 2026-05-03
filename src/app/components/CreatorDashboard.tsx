"use client";
import { Eye, Heart, Download, Coins, TrendingUp, ArrowUpRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { mockAnalytics, mockStyles } from "../data/mockData";

const StatBox = ({ icon: Icon, label, value, change, color }: {
  icon: any; label: string; value: string; change: string; color: string;
}) => (
  <div className="stat-card">
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
      <div>
        <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 4 }}>{label}</p>
        <p style={{ fontSize: 28, fontWeight: 700 }}>{value}</p>
      </div>
      <div style={{
        width: 40, height: 40, borderRadius: 10,
        background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center"
      }}>
        <Icon size={20} style={{ color }} />
      </div>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 8 }}>
      <ArrowUpRight size={14} style={{ color: "#10B981" }} />
      <span style={{ fontSize: 13, fontWeight: 600, color: "#10B981" }}>{change}</span>
      <span style={{ fontSize: 12, color: "var(--text-muted)" }}>vs last week</span>
    </div>
  </div>
);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: "var(--bg-elevated)", border: "1px solid var(--border-light)",
        borderRadius: 8, padding: 12, fontSize: 12
      }}>
        <p style={{ fontWeight: 600, marginBottom: 4 }}>{label}</p>
        {payload.map((p: any, i: number) => (
          <p key={i} style={{ color: p.color }}>
            {p.name}: <strong>{p.value}</strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function CreatorDashboard() {
  return (
    <div>


      {/* Stat Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
        <StatBox icon={Eye} label="Total Views" value="2,847" change={mockAnalytics.viewsChange} color="#8B5CF6" />
        <StatBox icon={Heart} label="Total Likes" value="189" change={mockAnalytics.likesChange} color="#EC4899" />
        <StatBox icon={Download} label="Downloads" value="67" change={mockAnalytics.downloadsChange} color="#3B82F6" />
        <StatBox icon={Coins} label="Credits Earned" value="134" change={mockAnalytics.creditsChange} color="#10B981" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
        {/* Views & Likes Chart */}
        <div className="glass-card" style={{ padding: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 600 }}>Views & Likes This Week</h3>
            <div style={{ display: "flex", gap: 12, fontSize: 12 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#8B5CF6" }} /> Views
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#EC4899" }} /> Likes
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={mockAnalytics.viewsOverTime}>
              <defs>
                <linearGradient id="viewsGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="likesGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EC4899" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#EC4899" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="views" stroke="#8B5CF6" fill="url(#viewsGrad)" strokeWidth={2} name="Views" />
              <Area type="monotone" dataKey="likes" stroke="#EC4899" fill="url(#likesGrad)" strokeWidth={2} name="Likes" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Top Creations */}
        <div className="glass-card" style={{ padding: 20 }}>
          <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 16 }}>Top Creations</h3>
          {mockAnalytics.topCreations.map((item, i) => (
            <div key={item.id} style={{
              display: "flex", alignItems: "center", gap: 12, padding: "10px 0",
              borderBottom: i < mockAnalytics.topCreations.length - 1 ? "1px solid var(--border-subtle)" : "none"
            }}>
              <span style={{
                width: 24, height: 24, borderRadius: 6,
                background: "var(--bg-elevated)", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 11, fontWeight: 700, color: "var(--text-muted)", flexShrink: 0
              }}>
                {i + 1}
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 13, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {item.title}
                </p>
                <p style={{ fontSize: 11, color: "var(--text-muted)" }}>{item.style}</p>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <p style={{ fontSize: 13, fontWeight: 600 }}>{item.views}</p>
                <p style={{ fontSize: 11, color: "var(--text-muted)" }}>views</p>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}
