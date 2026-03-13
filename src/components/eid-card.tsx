"use client";

import { motion } from "framer-motion";
import { Moon, Sparkles } from "lucide-react";
import type { CardData } from "@/lib/types";
import { FONT_LABELS } from "@/lib/types";
import { getTheme } from "@/lib/themes";
import { t } from "@/lib/i18n";
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
  const theme = getTheme(data.theme);
  const lang = data.lang || "bn";
  const fontClass = FONT_LABELS[data.font || "inter"]?.className || "font-sans";
  const c = theme.card;
  const Wrapper = animated ? motion.div : "div";
  const ItemWrapper = animated ? motion.div : "div";

  const wrapperProps = animated
    ? { variants: container, initial: "hidden", animate: "show" }
    : {};
  const itemProps = animated ? { variants: item } : {};

  return (
    <Wrapper
      {...(wrapperProps as Record<string, unknown>)}
      className={`relative overflow-hidden rounded-2xl backdrop-blur-md shadow-2xl border ${c.bg} ${c.border} ${fontClass} ${
        compact ? "p-5" : "p-6 sm:p-8"
      }`}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${c.cornerDecor1} to-transparent rounded-bl-full`} />
      <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${c.cornerDecor2} to-transparent rounded-tr-full`} />
      <div className={`absolute top-4 right-4 ${c.moonIcon}`}>
        <Moon className="h-8 w-8" />
      </div>

      <div className="relative z-10">
        <ItemWrapper {...(itemProps as Record<string, unknown>)}>
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 mb-2">
              <Sparkles className={`h-4 w-4 ${c.sparkleIcon}`} />
              <span className={`text-xs font-medium ${c.accent} uppercase tracking-[0.2em]`}>
                {t(lang, "eidUlFitr")}
              </span>
              <Sparkles className={`h-4 w-4 ${c.sparkleIcon}`} />
            </div>
            <h1
              className={`font-bold bg-gradient-to-r ${c.headerGradient} bg-clip-text text-transparent ${
                compact ? "text-2xl" : "text-3xl sm:text-4xl"
              }`}
            >
              {t(lang, "eidMubarak")}
            </h1>
            <p className={`${c.subText} text-sm mt-1`}>{t(lang, "eidMubarakSub")}</p>
          </div>
        </ItemWrapper>

        <ItemWrapper {...(itemProps as Record<string, unknown>)}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`flex-1 h-px bg-gradient-to-r from-transparent ${c.divider} to-transparent`} />
            <Moon className={`h-3 w-3 ${c.sparkleIcon}`} />
            <div className={`flex-1 h-px bg-gradient-to-r from-transparent ${c.divider} to-transparent`} />
          </div>
        </ItemWrapper>

        <ItemWrapper {...(itemProps as Record<string, unknown>)}>
          <div className={`mb-6 ${compact ? "text-sm" : "text-base"}`}>
            <p className={`${c.text} leading-relaxed whitespace-pre-line`}>
              {data.message}
            </p>
          </div>
        </ItemWrapper>

        <ItemWrapper {...(itemProps as Record<string, unknown>)}>
          <div className="text-right mb-2">
            <p className={`text-sm ${c.subText}`}>{t(lang, "withLove")}</p>
            <p className={`text-lg font-semibold ${c.sender}`}>
              {data.senderName}
            </p>
          </div>
        </ItemWrapper>

        <ItemWrapper {...(itemProps as Record<string, unknown>)}>
          <SalamiSection
            salamiNumber={data.salamiNumber}
            theme={theme}
            lang={lang}
          />
        </ItemWrapper>
      </div>
    </Wrapper>
  );
}
