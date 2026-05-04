"use client";
import { useState } from "react";
import { Flame, Clock, Trophy, Star, Users, TrendingUp, ChevronRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { mockChallenge } from "../data/mockData";
import InsightFooter from "./InsightFooter";

export default function DailyChallenge() {
  const [voted, setVoted] = useState<Record<number, number>>({});
  const [entered, setEntered] = useState(false);

  const handleVote = (entryId: number, rating: number) => {
    setVoted(prev => ({ ...prev, [entryId]: rating }));
  };

  return (
    <div>


      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* Left: Challenge Info + Entry */}
        <div>
          {/* Challenge Header */}
          <div className="glass-card" style={{
            padding: 24, marginBottom: 16,
            background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.05))",
            border: "1px solid rgba(139, 92, 246, 0.2)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <Flame size={18} style={{ color: "#F59E0B" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#F59E0B", textTransform: "uppercase", letterSpacing: 1 }}>
                Today's Challenge
              </span>
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }} className="gradient-text">
              {mockChallenge.theme}
            </h2>
            <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 16 }}>
              {mockChallenge.description}
            </p>

            <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Clock size={14} style={{ color: "var(--accent-red)" }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--accent-red)" }}>{mockChallenge.deadline}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Users size={14} style={{ color: "var(--text-muted)" }} />
                <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{mockChallenge.totalEntries} entries</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Trophy size={14} style={{ color: "#F59E0B" }} />
                <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{mockChallenge.prize}</span>
              </div>
            </div>

            {/* Style match banner */}
            <div style={{
              padding: 12, borderRadius: 10,
              background: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.2)",
              display: "flex", alignItems: "center", gap: 8, marginBottom: 16
            }}>
              <Zap size={16} style={{ color: "#10B981" }} />
              <p style={{ fontSize: 12, color: "#10B981", fontWeight: 600 }}>
                This challenge matches your Cinematic + Dark Fantasy style!
              </p>
            </div>

            {!entered ? (
              <button className="btn-primary" onClick={() => setEntered(true)}
                style={{ width: "100%", padding: "14px 24px", fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                Enter Challenge <ChevronRight size={16} />
              </button>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                style={{ textAlign: "center", padding: 12 }}>
                <p style={{ fontSize: 16 }}></p>
                <p style={{ fontSize: 14, fontWeight: 600 }} className="gradient-text">Entry Submitted!</p>
                <p style={{ fontSize: 12, color: "var(--text-muted)" }}>You're creator #424</p>
              </motion.div>
            )}
          </div>

          {/* Streak Counter */}
          <div className="glass-card" style={{ padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Flame size={20} style={{ color: "#F59E0B" }} />
                <h3 style={{ fontSize: 15, fontWeight: 600 }}>Creation Streak</h3>
              </div>
              <span style={{ fontSize: 28, fontWeight: 800 }} className="gradient-text">14 days</span>
            </div>

            {/* Streak milestones */}
            <div style={{ display: "flex", gap: 8, justifyContent: "space-between" }}>
              {[
                { day: 5, credits: 10, reached: true },
                { day: 14, credits: 25, reached: true },
                { day: 30, credits: 50, reached: false },
                { day: 100, credits: 200, reached: false },
                { day: 365, credits: 1000, reached: false },
              ].map(milestone => (
                <div key={milestone.day} style={{
                  flex: 1, textAlign: "center", padding: "10px 4px", borderRadius: 10,
                  background: milestone.reached ? "rgba(139, 92, 246, 0.1)" : "var(--bg-elevated)",
                  border: `1px solid ${milestone.reached ? "rgba(139, 92, 246, 0.2)" : "var(--border-subtle)"}`,
                  opacity: milestone.reached ? 1 : 0.5
                }}>
                  <p style={{ fontSize: 16, fontWeight: 700, marginBottom: 2 }}>
                    {milestone.reached ? "Done" : `${milestone.day}`}
                  </p>
                  <p style={{ fontSize: 10, color: "var(--text-muted)" }}>{milestone.day}d</p>
                  <p style={{ fontSize: 10, fontWeight: 600, color: "#10B981" }}>+{milestone.credits}cr</p>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 10, textAlign: "center" }}>
              Next milestone: 30 days (+50 credits) · Keep creating to maintain your streak!
            </p>
          </div>
        </div>

        {/* Right: Voting + Leaderboard */}
        <div>
          {/* Voting Gallery */}
          <div className="glass-card" style={{ padding: 20, marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 16 }}>
              Rate Entries · Earn 3 Credits per Vote
            </h3>
            {mockChallenge.entries.map((entry, i) => (
              <div key={entry.id} style={{
                display: "flex", alignItems: "center", gap: 12, padding: "12px 0",
                borderBottom: i < mockChallenge.entries.length - 1 ? "1px solid var(--border-subtle)" : "none"
              }}>
                {/* Mock thumbnail */}
                <div style={{
                  width: 56, height: 56, borderRadius: 10, flexShrink: 0,
                  background: `linear-gradient(135deg, ${entry.color}40, ${entry.color}15)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 10, color: "var(--text-muted)"
                }}>
                  Entry
                </div>

                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 13, fontWeight: 600 }}>{entry.creator}</p>
                  <p style={{ fontSize: 11, color: "var(--text-muted)" }}>
                    {entry.totalVotes} votes · avg {entry.votes}★
                  </p>
                </div>

                {/* Star rating */}
                <div style={{ display: "flex", gap: 2 }}>
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      onClick={() => handleVote(entry.id, star)}
                      className={`star ${(voted[entry.id] || 0) >= star ? "active" : "inactive"}`}
                      style={{ background: "none", border: "none", fontSize: 18, padding: 2 }}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Leaderboard */}
          <div className="glass-card" style={{ padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <Trophy size={18} style={{ color: "#F59E0B" }} />
              <h3 style={{ fontSize: 15, fontWeight: 600 }}>Leaderboard</h3>
            </div>
            {mockChallenge.entries.map((entry, i) => (
              <div key={entry.id} style={{
                display: "flex", alignItems: "center", gap: 12, padding: "8px 0",
                borderBottom: i < mockChallenge.entries.length - 1 ? "1px solid var(--border-subtle)" : "none"
              }}>
                <span style={{
                  width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
                  background: i === 0 ? "#F59E0B" : i === 1 ? "#9CA3AF" : i === 2 ? "#CD7F32" : "var(--bg-elevated)",
                  color: i < 3 ? "black" : "var(--text-muted)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 700
                }}>
                  {i + 1}
                </span>
                <span style={{ flex: 1, fontSize: 13, fontWeight: 500 }}>{entry.creator}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#F59E0B" }}>
                  {entry.votes}★
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <InsightFooter
        benefit="Shifts engagement cadence from 12 triggers/year (monthly challenges) to 365 triggers/year (daily). Streaks create habit loops — Duolingo's streak system is their #1 retention driver with 37% DAU/MAU ratio vs industry avg of 10-15%."
        reasoning="NightCafe runs daily challenges with 1-5 star voting, streak bonuses at 5/30/100/365 days, and daily login credits. They have 25M+ users on this model. ImagineArt has monthly challenges with like-based ranking — 12x fewer engagement opportunities per year."
        metric="Challenge Entry Rate (D30)"
        threshold="Success: 8%+ of MAU enter at least 1 challenge/month | Kill: <3%"
        sources={[
          { label: "NightCafe daily challenges — product audit", url: "https://nightcafe.studio" },
          { label: "Duolingo streak system — Q4 2025 earnings", url: "https://investors.duolingo.com" },
          { label: "Gamification retention — Storyly.io", url: "https://storyly.io" },
        ]}
      />
    </div>
  );
}
