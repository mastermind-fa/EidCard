"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState, useCallback } from "react";
import { Sparkles, Loader2, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ShareButton } from "@/components/share-button";
import { EidCard } from "@/components/eid-card";
import { cardDataSchema, type CardFormData, MESSAGE_MAX_LENGTH } from "@/lib/validation";
import { RELATION_TYPES, RELATION_LABELS, type RelationType } from "@/lib/types";
import { generateMessage, getTemplateByIndex, getTemplateCount } from "@/lib/templates";
import { encodeCardData } from "@/lib/encoding";
import { getBaseUrl } from "@/lib/utils";

export function CardForm() {
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [userEditedMessage, setUserEditedMessage] = useState(false);
  const [templateIndex, setTemplateIndex] = useState(0);

  const form = useForm<CardFormData>({
    resolver: zodResolver(cardDataSchema),
    defaultValues: {
      recipientName: "",
      relationType: "family",
      message: "",
      senderName: "",
      salamiNumber: "",
    },
    mode: "onChange",
  });

  const { watch, setValue, handleSubmit, formState } = form;
  const watchedValues = watch();
  const { errors } = formState;

  // Auto-generate message when relation type or recipient name changes
  const relationType = watch("relationType");
  const recipientName = watch("recipientName");

  // Auto-fill message from template when relation/name/index changes
  useEffect(() => {
    if (!userEditedMessage) {
      const name = recipientName || "[Name]";
      const msg = getTemplateByIndex(relationType as RelationType, templateIndex, name);
      setValue("message", msg);
    }
  }, [relationType, recipientName, templateIndex, userEditedMessage, setValue]);

  // Reset template index when relation type changes
  useEffect(() => {
    setTemplateIndex(0);
    setUserEditedMessage(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [relationType]);

  const handleMessageChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      if (value.length > MESSAGE_MAX_LENGTH) return;
      setUserEditedMessage(true);
      setValue("message", value);
    },
    [setValue]
  );

  const handleRelationChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setUserEditedMessage(false);
      setValue("relationType", e.target.value as RelationType);
    },
    [setValue]
  );

  const onSubmit = useCallback(
    async (data: CardFormData) => {
      setIsGenerating(true);

      // Tiny delay for UX feel
      await new Promise((r) => setTimeout(r, 400));

      const { encoded, fitsInUrl } = encodeCardData(data);

      if (fitsInUrl) {
        const url = `${getBaseUrl()}/c?d=${encoded}`;
        setGeneratedUrl(url);
      } else {
        // Fallback: store in DB via API
        try {
          const res = await fetch("/api/cards", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          const { id } = await res.json();
          setGeneratedUrl(`${getBaseUrl()}/card/${id}`);
        } catch {
          // If DB fails, try URL anyway (it might work with longer URLs on most browsers)
          const url = `${getBaseUrl()}/c?d=${encoded}`;
          setGeneratedUrl(url);
        }
      }

      setIsGenerating(false);
    },
    []
  );

  const resetForm = useCallback(() => {
    setGeneratedUrl(null);
    setUserEditedMessage(false);
    form.reset();
  }, [form]);

  // Build preview data
  const previewData = {
    recipientName: watchedValues.recipientName || "Someone Special",
    relationType: (watchedValues.relationType || "family") as RelationType,
    message: watchedValues.message || "Your heartfelt Eid message will appear here...",
    senderName: watchedValues.senderName || "You",
    salamiNumber: watchedValues.salamiNumber || "",
  };

  if (generatedUrl) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
            <Sparkles className="h-8 w-8 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Your Eid Card is Ready!
          </h2>
          <p className="text-gray-500 text-sm">
            Share this link with {watchedValues.recipientName || "your loved one"}
          </p>
        </div>

        <div className="bg-emerald-50/50 rounded-xl p-4 border border-emerald-200/50">
          <p className="text-xs text-emerald-600 font-medium mb-2">Your shareable link:</p>
          <p className="text-sm text-gray-700 break-all font-mono bg-white/80 rounded-lg p-3 border border-emerald-100">
            {generatedUrl}
          </p>
        </div>

        <ShareButton url={generatedUrl} />

        <div className="pt-4">
          <h3 className="text-sm font-medium text-gray-500 mb-3 text-center">Preview</h3>
          <EidCard data={previewData} animated={false} compact />
        </div>

        <Button
          onClick={resetForm}
          variant="ghost"
          className="w-full"
        >
          Create Another Card
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Recipient Name */}
        <div className="space-y-2">
          <Label htmlFor="recipientName">Recipient&apos;s Name</Label>
          <Input
            id="recipientName"
            placeholder="Enter their name..."
            {...form.register("recipientName")}
          />
          {errors.recipientName && (
            <p className="text-xs text-red-500">{errors.recipientName.message}</p>
          )}
        </div>

        {/* Relation Type */}
        <div className="space-y-2">
          <Label htmlFor="relationType">Relation</Label>
          <select
            id="relationType"
            className="flex h-11 w-full rounded-xl border-2 border-emerald-200/50 bg-white/80 px-4 py-2 text-sm text-gray-900 transition-colors duration-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 cursor-pointer"
            value={watchedValues.relationType}
            onChange={handleRelationChange}
          >
            {RELATION_TYPES.map((type) => (
              <option key={type} value={type}>
                {RELATION_LABELS[type]}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="message">Eid Message</Label>
            <div className="flex items-center gap-3">
              {userEditedMessage && (
                <button
                  type="button"
                  onClick={() => {
                    setUserEditedMessage(false);
                    setTemplateIndex(0);
                  }}
                  className="text-xs text-emerald-600 hover:text-emerald-700 underline cursor-pointer"
                >
                  Reset to template
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  setUserEditedMessage(false);
                  setTemplateIndex((prev) => prev + 1);
                }}
                className="inline-flex items-center gap-1 text-xs text-amber-600 hover:text-amber-700 cursor-pointer transition-colors"
                title="Try a different message"
              >
                <Shuffle className="h-3 w-3" />
                Shuffle ({getTemplateCount(relationType as RelationType)} styles)
              </button>
            </div>
          </div>
          <Textarea
            id="message"
            rows={6}
            value={watchedValues.message}
            onChange={handleMessageChange}
            maxLength={MESSAGE_MAX_LENGTH}
            placeholder="Your heartfelt Eid message..."
          />
          <div className="flex items-center justify-between">
            {errors.message ? (
              <p className="text-xs text-red-500">{errors.message.message}</p>
            ) : (
              <span />
            )}
            <span
              className={`text-xs tabular-nums ${
                (watchedValues.message?.length || 0) >= MESSAGE_MAX_LENGTH
                  ? "text-red-500 font-medium"
                  : (watchedValues.message?.length || 0) >= MESSAGE_MAX_LENGTH * 0.9
                    ? "text-amber-500"
                    : "text-gray-400"
              }`}
            >
              {watchedValues.message?.length || 0}/{MESSAGE_MAX_LENGTH}
            </span>
          </div>
        </div>

        {/* Sender Name */}
        <div className="space-y-2">
          <Label htmlFor="senderName">From (Your Name)</Label>
          <Input
            id="senderName"
            placeholder="Your name..."
            {...form.register("senderName")}
          />
          {errors.senderName && (
            <p className="text-xs text-red-500">{errors.senderName.message}</p>
          )}
        </div>

        {/* Salami Number */}
        <div className="space-y-2">
          <Label htmlFor="salamiNumber">
            Salami Number{" "}
            <span className="text-gray-400 font-normal">(optional)</span>
          </Label>
          <Input
            id="salamiNumber"
            placeholder="e.g. 01XXXXXXXXX (bKash/Nagad/Rocket)"
            {...form.register("salamiNumber")}
          />
          <p className="text-xs text-gray-400">
            Recipients can copy this number to send Salami
          </p>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isGenerating || !formState.isValid}
        >
          {isGenerating ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Creating your card...
            </>
          ) : (
            <>
              <Sparkles className="h-5 w-5" />
              Create Eid Card Link
            </>
          )}
        </Button>
      </form>

      {/* Live Preview */}
      <div>
        <h3 className="text-sm font-medium text-gray-400 mb-3 text-center uppercase tracking-wider">
          Live Preview
        </h3>
        <EidCard data={previewData} animated={false} compact />
      </div>
    </div>
  );
}
