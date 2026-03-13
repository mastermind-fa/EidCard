"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/language-toggle";
import { t, type Language } from "@/lib/i18n";

export function Hero() {
  const [lang, setLang] = useState<Language>("en");

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      {/* Language toggle */}
      <div className="absolute top-4 right-4 z-20">
        <LanguageToggle lang={lang} onChange={setLang} />
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-amber-400/40 animate-pulse" />
        <div className="absolute top-32 right-16 w-3 h-3 rounded-full bg-emerald-400/30 animate-pulse delay-700" />
        <div className="absolute bottom-40 left-20 w-2 h-2 rounded-full bg-amber-300/30 animate-pulse delay-1000" />
        <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 rounded-full bg-emerald-300/40 animate-pulse delay-500" />
        <div className="absolute bottom-1/3 right-12 w-2.5 h-2.5 rounded-full bg-amber-400/25 animate-pulse delay-300" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-100 to-amber-50 shadow-lg shadow-emerald-200/50 mb-8"
        >
          <Moon className="h-10 w-10 text-emerald-600" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/50">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span className="text-xs font-medium text-amber-700 tracking-wider uppercase">
              {t(lang, "heroTagline")}
            </span>
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-amber-600 bg-clip-text text-transparent">
            {t(lang, "heroTitle1")}
          </span>
          <br />
          <span className="bg-gradient-to-r from-amber-600 via-emerald-600 to-emerald-700 bg-clip-text text-transparent">
            {t(lang, "heroTitle2")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-gray-500 text-lg sm:text-xl mb-8 max-w-md mx-auto leading-relaxed"
        >
          {t(lang, "heroSubtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/create">
            <Button size="lg" className="text-base px-8 h-14 shadow-xl shadow-emerald-600/20">
              {t(lang, "heroCta")}
              <ArrowRight className="h-5 w-5 ml-1" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Sample card preview */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="mt-16 w-full max-w-md mx-auto px-4"
      >
        <div className="relative">
          <div className="absolute -top-2 left-4 right-4 h-full bg-emerald-200/20 rounded-2xl rotate-2" />
          <div className="absolute -top-1 left-2 right-2 h-full bg-emerald-100/30 rounded-2xl rotate-1" />

          <div className="relative bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl shadow-emerald-900/10 border border-emerald-100/50 p-6 overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-400/10 to-transparent rounded-bl-full" />
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-1.5 mb-2">
                <Sparkles className="h-3 w-3 text-amber-500" />
                <span className="text-[10px] font-medium text-amber-600 uppercase tracking-[0.15em]">
                  {t(lang, "eidUlFitr")}
                </span>
                <Sparkles className="h-3 w-3 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-amber-600 bg-clip-text text-transparent">
                {t(lang, "eidMubarak")}
              </h3>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent" />
              <Moon className="h-2.5 w-2.5 text-amber-400" />
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent" />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed text-center mb-3">
              {lang === "bn"
                ? "আপনার প্রিয়জনদের জন্য একটি হৃদয়গ্রাহী বার্তা..."
                : "A personalized heartfelt message for your loved ones..."}
            </p>
            <p className="text-right text-sm font-medium text-emerald-600">
              — {lang === "bn" ? "আপনার নাম" : "Your Name"}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
