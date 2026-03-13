import { NextRequest, NextResponse } from "next/server";
import { cardDataSchema } from "@/lib/validation";
import { saveCard } from "@/lib/db";

/**
 * POST /api/cards — stores a card in the database.
 *
 * Only called when the URL-encoded payload is too large (rare).
 * Most cards are served via the /c?d= route with zero DB dependency.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = cardDataSchema.parse(body);
    const id = await saveCard(data);

    return NextResponse.json({ id }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Invalid card data" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to save card" },
      { status: 500 }
    );
  }
}
