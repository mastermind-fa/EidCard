import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { decodeCardData } from "@/lib/encoding";
import { CardViewClient } from "./card-view-client";

/**
 * URL-encoded card view.
 *
 * This is the primary card delivery route. Card data is compressed into the
 * `d` query parameter using LZ-String, so opening this page requires ZERO
 * database calls. This makes card views instant regardless of Supabase latency.
 */

interface PageProps {
  searchParams: Promise<{ d?: string }>;
}

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const data = params.d ? decodeCardData(params.d) : null;

  if (!data) {
    return { title: "Eid Card" };
  }

  return {
    title: `Eid Mubarak, ${data.recipientName}!`,
    description: `${data.senderName} sent you a beautiful Eid greeting card.`,
    openGraph: {
      title: `Eid Mubarak, ${data.recipientName}! 🌙`,
      description: `${data.senderName} sent you a heartfelt Eid wish. Open to see your special card.`,
    },
  };
}

export default async function CardPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const data = params.d ? decodeCardData(params.d) : null;

  if (!data) {
    notFound();
  }

  return <CardViewClient data={data} />;
}
