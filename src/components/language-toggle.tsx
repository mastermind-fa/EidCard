"use client";

import { Languages } from "lucide-react";
import { type Language, LANGUAGE_LABELS } from "@/lib/i18n";

interface LanguageToggleProps {
  lang: Language;
  onChange: (lang: Language) => void;
  variant?: "light" | "dark";
}

export function LanguageToggle({
  lang,
  onChange,
  variant = "dark",
}: LanguageToggleProps) {
  const next = lang === "en" ? "bn" : "en";
  const baseStyle =
    variant === "light"
      ? "bg-white/10 border-white/15 text-white/70 hover:bg-white/20 hover:text-white"
      : "bg-emerald-50 border-emerald-200/50 text-emerald-700 hover:bg-emerald-100";

  return (
    <button
      onClick={() => onChange(next)}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-all cursor-pointer ${baseStyle}`}
      aria-label={`Switch to ${LANGUAGE_LABELS[next]}`}
    >
      <Languages className="h-3.5 w-3.5" />
      {LANGUAGE_LABELS[next]}
    </button>
  );
}
