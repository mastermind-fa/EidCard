import LZString from "lz-string";
import type { CardData, CardPayload } from "./types";
import { cardDataSchema } from "./validation";

/**
 * URL-encoded card architecture:
 *
 * Card data is compressed with LZ-String and encoded into the URL query param.
 * This avoids any database call for the vast majority of cards (~95%+).
 *
 * For a typical card (~400 bytes JSON), the compressed payload is ~200-400 chars,
 * well within the 2048-char safe URL limit.
 *
 * If the encoded payload exceeds MAX_URL_PAYLOAD_LENGTH, the caller should
 * fall back to storing the card in the database and using a short ID URL instead.
 */
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
    const result = cardDataSchema.safeParse(parsed);
    if (!result.success) return null;
    return result.data;
  } catch {
    return null;
  }
}
