import LZString from "lz-string";
import type { CardData, CardPayload } from "./types";
import { cardDataSchema } from "./validation";

const MAX_URL_PAYLOAD_LENGTH = 1800;

export function encodeCardData(data: CardData): {
  encoded: string;
  fitsInUrl: boolean;
} {
  const payload: CardPayload = { ...data, v: 1 };
  const json = JSON.stringify(payload);
  const encoded = LZString.compressToEncodedURIComponent(json);
  return {
    encoded,
    fitsInUrl: encoded.length <= MAX_URL_PAYLOAD_LENGTH,
  };
}

export function decodeCardData(encoded: string): CardData | null {
  try {
    const json = LZString.decompressFromEncodedURIComponent(encoded);
    if (!json) return null;
    const parsed = JSON.parse(json);

    // Backward-compatible defaults for older URLs without theme/lang
    const withDefaults = {
      theme: "emerald",
      lang: "bn",
      font: "inter",
      ...parsed,
    };

    const result = cardDataSchema.safeParse(withDefaults);
    if (!result.success) return null;
    return result.data;
  } catch {
    return null;
  }
}
