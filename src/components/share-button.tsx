"use client";

import { useState, useCallback } from "react";
import { Share2, Check, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { copyToClipboard, shareLink } from "@/lib/utils";

interface ShareButtonProps {
  url: string;
  title?: string;
}

export function ShareButton({
  url,
  title = "Eid Mubarak! Open your special Eid card",
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = useCallback(async () => {
    const shared = await shareLink(url, title);
    if (!shared) {
      const success = await copyToClipboard(url);
      if (success) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    }
  }, [url, title]);

  const handleCopyLink = useCallback(async () => {
    const success = await copyToClipboard(url);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  }, [url]);

  return (
    <div className="flex flex-col gap-3 w-full">
      <Button onClick={handleShare} size="lg" className="w-full">
        <Share2 className="h-5 w-5" />
        Share Eid Card
      </Button>
      <Button
        onClick={handleCopyLink}
        variant="outline"
        size="lg"
        className="w-full"
      >
        {copied ? (
          <>
            <Check className="h-5 w-5" />
            Link Copied!
          </>
        ) : (
          <>
            <Link2 className="h-5 w-5" />
            Copy Link
          </>
        )}
      </Button>
    </div>
  );
}
