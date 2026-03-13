"use client";

import { Type } from "lucide-react";
import { FONT_IDS, FONT_LABELS, type FontId } from "@/lib/types";
import type { Language } from "@/lib/i18n";

interface FontPickerProps {
  value: FontId;
  onChange: (font: FontId) => void;
  lang: Language;
}

export function FontPicker({ value, onChange, lang }: FontPickerProps) {
  return (
    <div className="flex items-center gap-2">
      <Type className="h-4 w-4 text-gray-400 shrink-0" />
      <div className="flex flex-wrap gap-2">
        {FONT_IDS.map((id) => {
          const font = FONT_LABELS[id];
          const selected = id === value;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onChange(id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selected
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              } ${font.className}`}
            >
              {lang === "bn" ? font.bn : font.en}
            </button>
          );
        })}
      </div>
    </div>
  );
}
