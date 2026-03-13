import type { Language } from "./i18n";
import type { ThemeId } from "./themes";

export const RELATION_TYPES = [
  "senior-vaiya",
  "senior-apu",
  "junior-vaiya",
  "junior-apu",
  "sir",
  "madam",
  "family",
  "friends",
] as const;

export type RelationType = (typeof RELATION_TYPES)[number];

export const RELATION_LABELS: Record<RelationType, { en: string; bn: string }> = {
  "senior-vaiya": { en: "Senior Vaiya", bn: "সিনিয়র ভাইয়া" },
  "senior-apu": { en: "Senior Apu", bn: "সিনিয়র আপু" },
  "junior-vaiya": { en: "Junior Vaiya", bn: "জুনিয়র ভাইয়া" },
  "junior-apu": { en: "Junior Apu", bn: "জুনিয়র আপু" },
  sir: { en: "Sir", bn: "স্যার" },
  madam: { en: "Madam", bn: "ম্যাডাম" },
  family: { en: "Family", bn: "পরিবার" },
  friends: { en: "Friends", bn: "বন্ধু" },
};

export const FONT_IDS = [
  "inter",
  "playfair",
  "hind-siliguri",
  "noto-serif-bengali",
] as const;

export type FontId = (typeof FONT_IDS)[number];

export const FONT_LABELS: Record<FontId, { en: string; bn: string; className: string }> = {
  inter: { en: "Modern", bn: "মডার্ন", className: "font-sans" },
  playfair: { en: "Elegant", bn: "এলিগ্যান্ট", className: "font-serif" },
  "hind-siliguri": { en: "Bengali Classic", bn: "বাংলা ক্লাসিক", className: "font-hind" },
  "noto-serif-bengali": { en: "Bengali Serif", bn: "বাংলা সেরিফ", className: "font-noto-bn" },
};

export interface CardData {
  recipientName: string;
  relationType: RelationType;
  message: string;
  senderName: string;
  salamiNumber: string;
  theme: ThemeId;
  lang: Language;
  font: FontId;
}

export interface CardPayload extends CardData {
  v: 1;
}
