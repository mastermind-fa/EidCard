import { z } from "zod";
import { RELATION_TYPES, FONT_IDS } from "./types";
import { LANGUAGES } from "./i18n";
import { THEME_IDS } from "./themes";

export const MESSAGE_MAX_LENGTH = 500;

export const cardDataSchema = z.object({
  recipientName: z
    .string()
    .min(1, "Recipient name is required")
    .max(100, "Name is too long"),
  relationType: z.enum(RELATION_TYPES),
  message: z
    .string()
    .min(1, "Message is required")
    .max(MESSAGE_MAX_LENGTH, `Message is too long (max ${MESSAGE_MAX_LENGTH} characters)`),
  senderName: z
    .string()
    .min(1, "Your name is required")
    .max(100, "Name is too long"),
  salamiNumber: z.string().max(50, "Salami number is too long"),
  theme: z.enum(THEME_IDS),
  lang: z.enum(LANGUAGES),
  font: z.enum(FONT_IDS),
});

export type CardFormData = z.infer<typeof cardDataSchema>;
