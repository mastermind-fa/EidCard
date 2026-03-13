"use client";

import { Gift } from "lucide-react";
import { CopyButton } from "./copy-button";
import type { CardTheme } from "@/lib/themes";
import { t, type Language } from "@/lib/i18n";

interface SalamiSectionProps {
  salamiNumber: string;
  theme?: CardTheme;
  lang?: Language;
}

export function SalamiSection({
  salamiNumber,
  theme,
  lang = "bn",
}: SalamiSectionProps) {
  if (!salamiNumber) return null;

  const s = theme?.salami ?? {
    bg: "bg-amber-50/80",
    border: "border-amber-200/50",
    label: "text-amber-700",
    hint: "text-amber-600/80",
    number: "text-amber-800",
    icon: "text-amber-500",
  };

  return (
    <div className="mt-6 pt-6 border-t border-current/10">
      <div className="flex items-center gap-2 mb-3">
        <Gift className={`h-5 w-5 ${s.icon}`} />
        <h3 className={`text-sm font-semibold ${s.label} uppercase tracking-wider`}>
          {t(lang, "salami")}
        </h3>
      </div>
      <div className={`${s.bg} backdrop-blur-sm rounded-xl p-4 border ${s.border}`}>
        <p className={`text-xs ${s.hint} mb-2`}>
          {t(lang, "salamiSend")}
        </p>
        <div className="flex items-center justify-between gap-3">
          <span className={`text-lg font-bold ${s.number} font-mono tracking-wide`}>
            {salamiNumber}
          </span>
          <CopyButton
            text={salamiNumber}
            label={t(lang, "copy")}
            successLabel={t(lang, "copied")}
            size="sm"
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
}
