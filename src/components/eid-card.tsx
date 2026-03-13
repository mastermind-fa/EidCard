"use client";

import { motion } from "framer-motion";
import { Moon, Sparkles } from "lucide-react";
import type { CardData } from "@/lib/types";
import { SalamiSection } from "./salami-section";

interface EidCardProps {
  data: CardData;
  animated?: boolean;
  compact?: boolean;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function EidCard({ data, animated = true, compact = false }: EidCardProps) {
  const Wrapper = animated ? motion.div : "div";
  const ItemWrapper = animated ? motion.div : "div";

  const wrapperProps = animated
    ? { variants: container, initial: "hidden", animate: "show" }
    : {};
  const itemProps = animated ? { variants: item } : {};

  return (
    <Wrapper
      {...(wrapperProps as Record<string, unknown>)}
      className={`relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl shadow-emerald-900/10 border border-emerald-100/50 ${
        compact ? "p-5" : "p-6 sm:p-8"
      }`}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-400/10 to-transparent rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-400/10 to-transparent rounded-tr-full" />
      <div className="absolute top-4 right-4 text-amber-400/20">
        <Moon className="h-8 w-8" />
      </div>

      <div className="relative z-10">
        {/* Eid Mubarak header */}
        <ItemWrapper {...(itemProps as Record<string, unknown>)}>
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 mb-2">
              <Sparkles className="h-4 w-4 text-amber-500" />
              <span className="text-xs font-medium text-amber-600 uppercase tracking-[0.2em]">
                Eid ul-Fitr
              </span>
              <Sparkles className="h-4 w-4 text-amber-500" />
            </div>
            <h1
              className={`font-bold bg-gradient-to-r from-emerald-700 via-emerald-600 to-amber-600 bg-clip-text text-transparent ${
                compact ? "text-2xl" : "text-3xl sm:text-4xl"
              }`}
            >
              ঈদ মোবারক
            </h1>
            <p className="text-emerald-600/60 text-sm mt-1">Eid Mubarak</p>
          </div>
        </ItemWrapper>

        {/* Divider */}
        <ItemWrapper {...(itemProps as Record<string, unknown>)}>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />
            <Moon className="h-3 w-3 text-amber-400" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />
          </div>
        </ItemWrapper>

        {/* Message */}
        <ItemWrapper {...(itemProps as Record<string, unknown>)}>
          <div className={`mb-6 ${compact ? "text-sm" : "text-base"}`}>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {data.message}
            </p>
          </div>
        </ItemWrapper>

        {/* From section */}
        <ItemWrapper {...(itemProps as Record<string, unknown>)}>
          <div className="text-right mb-2">
            <p className="text-sm text-gray-500">With love,</p>
            <p className="text-lg font-semibold text-emerald-700">
              {data.senderName}
            </p>
          </div>
        </ItemWrapper>

        {/* Salami section */}
        <ItemWrapper {...(itemProps as Record<string, unknown>)}>
          <SalamiSection salamiNumber={data.salamiNumber} />
        </ItemWrapper>
      </div>
    </Wrapper>
  );
}
