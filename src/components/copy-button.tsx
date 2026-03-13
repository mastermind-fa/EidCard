"use client";

import { useState, useCallback } from "react";
import { Check, Copy } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/utils";

interface CopyButtonProps extends Omit<ButtonProps, "onClick"> {
  text: string;
  label?: string;
  successLabel?: string;
}

export function CopyButton({
  text,
  label = "Copy",
  successLabel = "Copied!",
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [text]);

  return (
    <Button
      onClick={handleCopy}
      variant={copied ? "secondary" : "outline"}
      aria-label={copied ? successLabel : `${label}: ${text}`}
      {...props}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          {successLabel}
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          {label}
        </>
      )}
    </Button>
  );
}
