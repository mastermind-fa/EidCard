"use client";

import { Check } from "lucide-react";
import { THEMES, THEME_IDS, type ThemeId } from "@/lib/themes";
import type { Language } from "@/lib/i18n";

interface ThemePickerProps {
  value: ThemeId;
  onChange: (theme: ThemeId) => void;
  lang: Language;
}

export function ThemePicker({ value, onChange, lang }: ThemePickerProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {THEME_IDS.map((id) => {
        const theme = THEMES[id];
        const selected = id === value;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            className={`group relative flex flex-col items-center gap-1.5 cursor-pointer transition-all duration-200 ${
              selected ? "scale-105" : "hover:scale-105 opacity-70 hover:opacity-100"
            }`}
            aria-label={theme.name}
          >
            <div
              className={`w-10 h-10 rounded-xl shadow-md transition-all duration-200 ${
                selected ? "ring-2 ring-offset-2 ring-emerald-500" : ""
              }`}
              style={{ background: theme.preview }}
            >
              {selected && (
                <div className="w-full h-full flex items-center justify-center">
                  <Check className="h-4 w-4 text-white drop-shadow" />
                </div>
              )}
            </div>
            <span className="text-[10px] font-medium text-gray-500 whitespace-nowrap">
              {lang === "bn" ? theme.nameBn : theme.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
