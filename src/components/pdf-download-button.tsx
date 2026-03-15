"use client";

import { useState, useCallback } from "react";
import { FileDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { downloadElementAsPdf } from "@/lib/pdf";
import { t, type Language } from "@/lib/i18n";
import { toast } from "sonner";

interface PdfDownloadButtonProps {
  cardRef: React.RefObject<HTMLElement | null>;
  recipientName?: string;
  lang?: Language;
  /** Use "light" on dark backgrounds (e.g. card view page) for visibility */
  variant?: "light" | "default";
}

export function PdfDownloadButton({
  cardRef,
  recipientName = "eid-card",
  lang = "bn",
  variant = "default",
}: PdfDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = useCallback(async () => {
    if (!cardRef.current) {
      toast.error(t(lang, "pdfFailed"));
      return;
    }
    setIsDownloading(true);
    const safeName = recipientName.replace(/[^a-zA-Z0-9\u0980-\u09FF\s-]/g, "").trim() || "eid-card";
    const filename = `eid-mubarak-${safeName}.pdf`;
    const success = await downloadElementAsPdf(cardRef.current, filename);
    setIsDownloading(false);
    if (success) {
      toast.success(t(lang, "pdfDownloaded"));
    } else {
      toast.error(t(lang, "pdfFailed"));
    }
  }, [cardRef, recipientName, lang]);

  const isOnDark = variant === "light";

  return (
    <Button
      onClick={handleDownload}
      variant={isOnDark ? "default" : "outline"}
      size="lg"
      disabled={isDownloading}
      className={
        isOnDark
          ? "w-full bg-white text-emerald-800 border-2 border-white/50 hover:bg-white/95 hover:border-white shadow-lg"
          : "w-full"
      }
    >
      {isDownloading ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          {lang === "bn" ? "ডাউনলোড হচ্ছে..." : "Downloading..."}
        </>
      ) : (
        <>
          <FileDown className="h-5 w-5" />
          {t(lang, "downloadPdf")}
        </>
      )}
    </Button>
  );
}
