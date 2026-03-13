"use client";

import { motion } from "framer-motion";
import { Moon, Sparkles } from "lucide-react";
import type { CardData } from "@/lib/types";
import { EidCard } from "@/components/eid-card";
import { Footer } from "@/components/footer";

interface CardViewClientProps {
  data: CardData;
}

export function CardViewClient({ data }: CardViewClientProps) {
  return (
    <main className="min-h-screen bg-festive bg-grain relative overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [-10, 10, -10], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-8"
        >
          <Moon className="h-16 w-16 text-amber-300/15" />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-6"
        >
          <Sparkles className="h-12 w-12 text-amber-200/15" />
        </motion.div>
        <motion.div
          animate={{ y: [-5, 15, -5], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-1/4"
        >
          <Moon className="h-10 w-10 text-emerald-200/10" />
        </motion.div>

        {/* Subtle light dots */}
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
            className="absolute w-1.5 h-1.5 rounded-full bg-amber-300/30"
            style={{
              top: `${15 + i * 14}%`,
              left: `${10 + ((i * 17) % 80)}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            <span className="text-xs font-medium text-amber-100/80 tracking-wider uppercase">
              You have a special Eid wish
            </span>
            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
          </div>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-lg"
        >
          <EidCard data={data} animated />
        </motion.div>

        {/* CTA for recipients */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <a
            href="/create"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-sm font-medium text-white/70 hover:bg-white/20 hover:text-white transition-all duration-200"
          >
            <Sparkles className="h-4 w-4" />
            Create your own Eid card
          </a>
        </motion.div>

        <Footer variant="light" />
      </div>
    </main>
  );
}
