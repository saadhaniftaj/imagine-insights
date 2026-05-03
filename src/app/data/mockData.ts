// ===== Mock Data for ImagineArt Creator Journey Prototype =====

export const mockUser = {
  name: "Sarah Chen",
  username: "@sarahcreates",
  avatar: "SC",
  bio: "Digital artist exploring AI-generated worlds",
  joinDate: "April 2026",
  totalGenerations: 47,
  publishedCount: 12,
  streak: 14,
  credits: 234,
};

export const mockStyles = [
  { name: "Cinematic", percentage: 42, color: "#8B5CF6" },
  { name: "Dark Fantasy", percentage: 28, color: "#EC4899" },
  { name: "High Detail", percentage: 18, color: "#3B82F6" },
  { name: "Moody Lighting", percentage: 12, color: "#10B981" },
];

export const mockAnalytics = {
  totalViews: 2847,
  totalLikes: 189,
  totalDownloads: 67,
  totalCreditsEarned: 134,
  viewsChange: "+32%",
  likesChange: "+18%",
  downloadsChange: "+45%",
  creditsChange: "+22%",
  viewsOverTime: [
    { day: "Mon", views: 120, likes: 8 },
    { day: "Tue", views: 280, likes: 15 },
    { day: "Wed", views: 350, likes: 22 },
    { day: "Thu", views: 190, likes: 12 },
    { day: "Fri", views: 520, likes: 34 },
    { day: "Sat", views: 680, likes: 48 },
    { day: "Sun", views: 707, likes: 50 },
  ],
  topCreations: [
    { id: 1, title: "Neon Samurai", views: 892, likes: 67, downloads: 23, style: "Cinematic" },
    { id: 2, title: "Crystal Cave", views: 634, likes: 45, downloads: 18, style: "Dark Fantasy" },
    { id: 3, title: "Storm Rider", views: 521, likes: 38, downloads: 12, style: "Cinematic" },
    { id: 4, title: "Mystic Portal", views: 412, likes: 24, downloads: 8, style: "High Detail" },
    { id: 5, title: "Cyber Market", views: 388, likes: 15, downloads: 6, style: "Moody Lighting" },
  ],
};

export const mockCommunityCreations = [
  {
    id: 1,
    title: "Neon Samurai in Rain",
    creator: "ArtMaster42",
    prompt: "A cyberpunk samurai standing in neon-lit rain, cinematic lighting, blade reflecting city lights, 8k ultrarealistic, moody atmosphere",
    model: "Kling 3.0",
    style: "Cinematic",
    likes: 234,
    views: 1892,
    color: "#4F46E5",
  },
  {
    id: 2,
    title: "Crystal Dragon Cave",
    creator: "PixelDreamer",
    prompt: "Ancient dragon sleeping in a crystal cave, bioluminescent mushrooms, volumetric fog, fantasy art, detailed scales, magical atmosphere",
    model: "Wan 2.7",
    style: "Dark Fantasy",
    likes: 187,
    views: 1456,
    color: "#7C3AED",
  },
  {
    id: 3,
    title: "Floating City Sunset",
    creator: "SkyForge",
    prompt: "Floating steampunk city at golden hour, airships docking, waterfalls cascading from islands, epic wide angle, volumetric clouds",
    model: "Sora 2",
    style: "Cinematic",
    likes: 312,
    views: 2341,
    color: "#2563EB",
  },
  {
    id: 4,
    title: "Mechanical Garden",
    creator: "NeoBloom",
    prompt: "Garden where flowers are made of clockwork and brass, morning dew on metal petals, macro photography, tilt-shift, warm light",
    model: "Flux Pro",
    style: "High Detail",
    likes: 156,
    views: 1123,
    color: "#059669",
  },
];

export const mockChallenge = {
  theme: "Neon Noir",
  description: "Create a scene that blends neon aesthetics with film noir atmosphere. Think rain-soaked streets, dramatic shadows, and vibrant light.",
  deadline: "23h 47m",
  totalEntries: 423,
  totalVotes: 1847,
  prize: "500 Credits + Featured Creator",
  entries: [
    { id: 1, creator: "NightOwl", votes: 4.7, totalVotes: 89, color: "#6366F1" },
    { id: 2, creator: "CyberPunk99", votes: 4.5, totalVotes: 76, color: "#8B5CF6" },
    { id: 3, creator: "PixelRain", votes: 4.3, totalVotes: 64, color: "#A855F7" },
    { id: 4, creator: "DarkLens", votes: 4.1, totalVotes: 58, color: "#C084FC" },
    { id: 5, creator: "NeonDreamer", votes: 3.9, totalVotes: 52, color: "#D8B4FE" },
  ],
};

export const mockModels = [
  {
    name: "Kling 3.0",
    match: 95,
    reason: "Best for cinematic scenes with dramatic lighting",
    speed: "8-12s",
    quality: "Ultra",
  },
  {
    name: "Wan 2.7",
    match: 87,
    reason: "Excellent photorealism and natural textures",
    speed: "6-10s",
    quality: "High",
  },
  {
    name: "Flux Pro",
    match: 72,
    reason: "Strong at detailed compositions with text rendering",
    speed: "4-8s",
    quality: "High",
  },
];
