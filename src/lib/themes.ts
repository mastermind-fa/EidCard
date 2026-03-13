export const THEME_IDS = [
  "emerald",
  "navy",
  "rose",
  "midnight",
  "golden",
] as const;

export type ThemeId = (typeof THEME_IDS)[number];

export interface CardTheme {
  id: ThemeId;
  name: string;
  nameBn: string;
  preview: string; // CSS gradient for the swatch
  card: {
    bg: string;
    border: string;
    headerGradient: string;
    subText: string;
    accent: string;
    divider: string;
    text: string;
    sender: string;
    moonIcon: string;
    sparkleIcon: string;
    cornerDecor1: string;
    cornerDecor2: string;
  };
  page: {
    bg: string; // CSS background for the card view page
    floatingIcon: string;
    dot: string;
    badgeBg: string;
    badgeBorder: string;
    badgeText: string;
    badgeSparkle: string;
    ctaBg: string;
    ctaBorder: string;
    ctaText: string;
  };
  salami: {
    bg: string;
    border: string;
    label: string;
    hint: string;
    number: string;
    icon: string;
  };
}

export const THEMES: Record<ThemeId, CardTheme> = {
  emerald: {
    id: "emerald",
    name: "Emerald Classic",
    nameBn: "পান্না ক্লাসিক",
    preview: "linear-gradient(135deg, #059669, #d4a017)",
    card: {
      bg: "bg-white/95",
      border: "border-emerald-100/50",
      headerGradient: "from-emerald-700 via-emerald-600 to-amber-600",
      subText: "text-emerald-600/60",
      accent: "text-amber-600",
      divider: "via-emerald-300/50",
      text: "text-gray-700",
      sender: "text-emerald-700",
      moonIcon: "text-amber-400/20",
      sparkleIcon: "text-amber-500",
      cornerDecor1: "from-amber-400/10",
      cornerDecor2: "from-emerald-400/10",
    },
    page: {
      bg: "linear-gradient(160deg, #064e3b 0%, #065f46 20%, #047857 40%, #059669 60%, #065f46 80%, #1e3a5f 100%)",
      floatingIcon: "text-amber-300/15",
      dot: "bg-amber-300/30",
      badgeBg: "bg-white/10",
      badgeBorder: "border-white/10",
      badgeText: "text-amber-100/80",
      badgeSparkle: "text-amber-300",
      ctaBg: "bg-white/10",
      ctaBorder: "border-white/15",
      ctaText: "text-white/70",
    },
    salami: {
      bg: "bg-amber-50/80",
      border: "border-amber-200/50",
      label: "text-amber-700",
      hint: "text-amber-600/80",
      number: "text-amber-800",
      icon: "text-amber-500",
    },
  },
  navy: {
    id: "navy",
    name: "Royal Navy",
    nameBn: "রয়্যাল নেভি",
    preview: "linear-gradient(135deg, #1e3a5f, #d4a017)",
    card: {
      bg: "bg-white/95",
      border: "border-blue-100/50",
      headerGradient: "from-blue-800 via-blue-700 to-amber-500",
      subText: "text-blue-600/60",
      accent: "text-amber-600",
      divider: "via-blue-300/50",
      text: "text-gray-700",
      sender: "text-blue-800",
      moonIcon: "text-amber-400/20",
      sparkleIcon: "text-amber-500",
      cornerDecor1: "from-amber-400/10",
      cornerDecor2: "from-blue-400/10",
    },
    page: {
      bg: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 30%, #1e40af 60%, #1e3a5f 80%, #0f172a 100%)",
      floatingIcon: "text-amber-300/15",
      dot: "bg-amber-300/25",
      badgeBg: "bg-white/10",
      badgeBorder: "border-white/10",
      badgeText: "text-amber-100/80",
      badgeSparkle: "text-amber-300",
      ctaBg: "bg-white/10",
      ctaBorder: "border-white/15",
      ctaText: "text-white/70",
    },
    salami: {
      bg: "bg-blue-50/80",
      border: "border-blue-200/50",
      label: "text-blue-700",
      hint: "text-blue-600/80",
      number: "text-blue-900",
      icon: "text-amber-500",
    },
  },
  rose: {
    id: "rose",
    name: "Rose Blossom",
    nameBn: "গোলাপ",
    preview: "linear-gradient(135deg, #e11d48, #fda4af)",
    card: {
      bg: "bg-white/95",
      border: "border-rose-100/50",
      headerGradient: "from-rose-700 via-rose-600 to-pink-400",
      subText: "text-rose-500/60",
      accent: "text-rose-500",
      divider: "via-rose-300/50",
      text: "text-gray-700",
      sender: "text-rose-700",
      moonIcon: "text-rose-300/20",
      sparkleIcon: "text-rose-400",
      cornerDecor1: "from-rose-300/10",
      cornerDecor2: "from-pink-300/10",
    },
    page: {
      bg: "linear-gradient(160deg, #4c0519 0%, #881337 25%, #be123c 50%, #9f1239 75%, #4c0519 100%)",
      floatingIcon: "text-rose-300/15",
      dot: "bg-rose-300/25",
      badgeBg: "bg-white/10",
      badgeBorder: "border-white/10",
      badgeText: "text-rose-100/80",
      badgeSparkle: "text-rose-300",
      ctaBg: "bg-white/10",
      ctaBorder: "border-white/15",
      ctaText: "text-white/70",
    },
    salami: {
      bg: "bg-rose-50/80",
      border: "border-rose-200/50",
      label: "text-rose-700",
      hint: "text-rose-600/80",
      number: "text-rose-900",
      icon: "text-rose-500",
    },
  },
  midnight: {
    id: "midnight",
    name: "Midnight Gold",
    nameBn: "মিডনাইট গোল্ড",
    preview: "linear-gradient(135deg, #18181b, #d4a017)",
    card: {
      bg: "bg-zinc-900/95",
      border: "border-amber-500/20",
      headerGradient: "from-amber-400 via-yellow-300 to-amber-500",
      subText: "text-amber-400/60",
      accent: "text-amber-400",
      divider: "via-amber-500/30",
      text: "text-zinc-300",
      sender: "text-amber-400",
      moonIcon: "text-amber-500/15",
      sparkleIcon: "text-amber-400",
      cornerDecor1: "from-amber-500/10",
      cornerDecor2: "from-amber-600/5",
    },
    page: {
      bg: "linear-gradient(160deg, #09090b 0%, #18181b 30%, #27272a 50%, #18181b 80%, #09090b 100%)",
      floatingIcon: "text-amber-400/10",
      dot: "bg-amber-400/20",
      badgeBg: "bg-amber-500/10",
      badgeBorder: "border-amber-500/20",
      badgeText: "text-amber-200/80",
      badgeSparkle: "text-amber-400",
      ctaBg: "bg-amber-500/10",
      ctaBorder: "border-amber-500/20",
      ctaText: "text-amber-200/70",
    },
    salami: {
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      label: "text-amber-400",
      hint: "text-amber-400/60",
      number: "text-amber-300",
      icon: "text-amber-500",
    },
  },
  golden: {
    id: "golden",
    name: "Golden Desert",
    nameBn: "সোনালি",
    preview: "linear-gradient(135deg, #b45309, #fbbf24)",
    card: {
      bg: "bg-white/95",
      border: "border-amber-200/50",
      headerGradient: "from-amber-700 via-amber-600 to-yellow-500",
      subText: "text-amber-600/60",
      accent: "text-amber-600",
      divider: "via-amber-300/50",
      text: "text-gray-700",
      sender: "text-amber-700",
      moonIcon: "text-amber-400/20",
      sparkleIcon: "text-amber-500",
      cornerDecor1: "from-amber-300/15",
      cornerDecor2: "from-yellow-300/10",
    },
    page: {
      bg: "linear-gradient(160deg, #78350f 0%, #92400e 25%, #b45309 50%, #92400e 75%, #78350f 100%)",
      floatingIcon: "text-amber-200/15",
      dot: "bg-yellow-300/25",
      badgeBg: "bg-white/10",
      badgeBorder: "border-white/10",
      badgeText: "text-amber-100/80",
      badgeSparkle: "text-yellow-300",
      ctaBg: "bg-white/10",
      ctaBorder: "border-white/15",
      ctaText: "text-white/70",
    },
    salami: {
      bg: "bg-amber-50/80",
      border: "border-amber-200/50",
      label: "text-amber-700",
      hint: "text-amber-600/80",
      number: "text-amber-800",
      icon: "text-amber-500",
    },
  },
};

export function getTheme(id?: string): CardTheme {
  if (id && id in THEMES) return THEMES[id as ThemeId];
  return THEMES.emerald;
}
