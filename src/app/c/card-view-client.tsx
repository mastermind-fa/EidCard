"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Moon, Sparkles } from "lucide-react";
import type { CardData } from "@/lib/types";
import { getTheme } from "@/lib/themes";
import { t } from "@/lib/i18n";
import { EidCard } from "@/components/eid-card";
import { PdfDownloadButton } from "@/components/pdf-download-button";
import { Footer } from "@/components/footer";

interface CardViewClientProps {
  data: CardData;
}

export function CardViewClient({ data }: CardViewClientProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const theme = getTheme(data.theme);
  const lang = data.lang || "bn";
  const p = theme.page;

  return (
    <main
      className="min-h-screen bg-grain relative overflow-hidden"
      style={{ background: p.bg }}
    >
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [-10, 10, -10], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-8"
        >
          <Moon className={`h-16 w-16 ${p.floatingIcon}`} />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-6"
        >
          <Sparkles className={`h-12 w-12 ${p.floatingIcon}`} />
        </motion.div>
        <motion.div
          animate={{ y: [-5, 15, -5], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-1/4"
        >
          <Moon className={`h-10 w-10 ${p.floatingIcon}`} />
        </motion.div>

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            className={`absolute w-1.5 h-1.5 rounded-full ${p.dot}`}
            style={{
              top: `${15 + i * 14}%`,
              left: `${10 + ((i * 17) % 80)}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-8 text-center"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${p.badgeBg} backdrop-blur-sm border ${p.badgeBorder}`}>
            <Sparkles className={`h-3.5 w-3.5 ${p.badgeSparkle}`} />
            <span className={`text-xs font-medium ${p.badgeText} tracking-wider uppercase`}>
              {t(lang, "specialWish")}
            </span>
            <Sparkles className={`h-3.5 w-3.5 ${p.badgeSparkle}`} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-lg"
        >
          {/* Plain div for PDF capture - motion/transform can break html2canvas */}
          <div ref={cardRef} data-theme={data.theme || "emerald"}>
            <EidCard data={data} animated />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-6 w-full max-w-lg flex flex-col gap-3"
        >
          <PdfDownloadButton
            cardRef={cardRef}
            recipientName={data.recipientName}
            lang={data.lang || "bn"}
            variant="light"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <a
            href="/create"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full ${p.ctaBg} backdrop-blur-sm border ${p.ctaBorder} text-sm font-medium ${p.ctaText} hover:opacity-90 transition-all duration-200`}
          >
            <Sparkles className="h-4 w-4" />
            {t(lang, "createOwn")}
          </a>
        </motion.div>

        <Footer variant="light" />
      </div>
    </main>
  );
}
