"use client";

import { Gift } from "lucide-react";
import { CopyButton } from "./copy-button";

interface SalamiSectionProps {
  salamiNumber: string;
}

export function SalamiSection({ salamiNumber }: SalamiSectionProps) {
  if (!salamiNumber) return null;

  return (
    <div className="mt-6 pt-6 border-t border-emerald-200/30">
      <div className="flex items-center gap-2 mb-3">
        <Gift className="h-5 w-5 text-amber-500" />
        <h3 className="text-sm font-semibold text-amber-700 uppercase tracking-wider">
          Salami
        </h3>
      </div>
      <div className="bg-amber-50/80 backdrop-blur-sm rounded-xl p-4 border border-amber-200/50">
        <p className="text-xs text-amber-600/80 mb-2">
          Send your Salami to this number
        </p>
        <div className="flex items-center justify-between gap-3">
          <span className="text-lg font-bold text-amber-800 font-mono tracking-wide">
            {salamiNumber}
          </span>
          <CopyButton
            text={salamiNumber}
            label="Copy"
            successLabel="Copied!"
            size="sm"
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
}
