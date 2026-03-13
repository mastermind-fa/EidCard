import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CardViewClient } from "@/app/c/card-view-client";
import { getCardById } from "@/lib/db";

/**
 * Database-backed card view — fallback route for very long messages.
 *
 * Only used when the compressed card payload exceeds URL length limits.
 * In practice this route is rarely hit since most cards fit in the URL.
 *
 * The DB lookup is simple and fast (single row by primary key).
 * For production with Supabase, add aggressive caching headers.
 */

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const data = await getCardById(id);

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

export default async function CardByIdPage({ params }: PageProps) {
  const { id } = await params;
  const data = await getCardById(id);

  if (!data) {
    notFound();
  }

  return <CardViewClient data={data} />;
}
