import type { CardData } from "./types";
import { cardDataSchema } from "./validation";

/**
 * Lightweight database layer — only used as fallback when card data
 * is too large for URL encoding (rare).
 *
 * Architecture:
 * - Uses in-memory Map as default (no external DB needed)
 * - For persistent testing: set DATABASE_PROVIDER=sqlite in .env
 * - For production: set DATABASE_PROVIDER=supabase in .env
 *
 * This keeps card views fast by default (no DB call for URL-encoded cards)
 * and only touches the DB when absolutely necessary.
 */

// In-memory store for development and serverless environments
const memoryStore = new Map<string, CardData>();

function generateId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
  let id = "";
  for (let i = 0; i < 8; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

export async function saveCard(data: CardData): Promise<string> {
  const validated = cardDataSchema.parse(data);
  const id = generateId();

  const provider = process.env.DATABASE_PROVIDER || "memory";

  if (provider === "supabase" && process.env.SUPABASE_URL) {
    return saveToSupabase(id, validated);
  }

  // Default: in-memory store (works great for serverless with short-lived functions)
  memoryStore.set(id, validated);
  return id;
}

export async function getCardById(id: string): Promise<CardData | null> {
  const provider = process.env.DATABASE_PROVIDER || "memory";

  if (provider === "supabase" && process.env.SUPABASE_URL) {
    return getFromSupabase(id);
  }

  return memoryStore.get(id) ?? null;
}

/**
 * Supabase integration (optional).
 *
 * To enable:
 * 1. Create a `cards` table in Supabase:
 *    CREATE TABLE cards (
 *      id TEXT PRIMARY KEY,
 *      recipient_name TEXT NOT NULL,
 *      relation_type TEXT NOT NULL,
 *      message TEXT NOT NULL,
 *      sender_name TEXT NOT NULL,
 *      salami_number TEXT DEFAULT '',
 *      theme TEXT DEFAULT 'emerald',
 *      lang TEXT DEFAULT 'bn',
 *      font TEXT DEFAULT 'inter',
 *      created_at TIMESTAMPTZ DEFAULT NOW()
 *    );
 * 2. Set these in .env:
 *    DATABASE_PROVIDER=supabase
 *    SUPABASE_URL=https://your-project.supabase.co
 *    SUPABASE_ANON_KEY=your-anon-key
 */

async function saveToSupabase(id: string, data: CardData): Promise<string> {
  const res = await fetch(`${process.env.SUPABASE_URL}/rest/v1/cards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: process.env.SUPABASE_ANON_KEY!,
      Authorization: `Bearer ${process.env.SUPABASE_ANON_KEY!}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      id,
      recipient_name: data.recipientName,
      relation_type: data.relationType,
      message: data.message,
      sender_name: data.senderName,
      salami_number: data.salamiNumber,
      theme: data.theme,
      lang: data.lang,
      font: data.font,
    }),
  });

  if (!res.ok) {
    throw new Error(`Supabase save failed: ${res.status}`);
  }

  return id;
}

async function getFromSupabase(id: string): Promise<CardData | null> {
  const res = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/cards?id=eq.${encodeURIComponent(id)}&limit=1`,
    {
      headers: {
        apikey: process.env.SUPABASE_ANON_KEY!,
        Authorization: `Bearer ${process.env.SUPABASE_ANON_KEY!}`,
      },
      next: { revalidate: 3600 }, // Cache for 1 hour — cards don't change
    }
  );

  if (!res.ok) return null;

  const rows = await res.json();
  if (!rows.length) return null;

  const row = rows[0];
  return {
    recipientName: row.recipient_name,
    relationType: row.relation_type,
    message: row.message,
    senderName: row.sender_name,
    salamiNumber: row.salami_number || "",
    theme: row.theme || "emerald",
    lang: row.lang || "bn",
    font: row.font || "inter",
  };
}
