import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Moon } from "lucide-react";
import { CardForm } from "@/components/card-form";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Create Your Eid Card",
  description:
    "Create a personalized Eid greeting card with a heartfelt message and share it instantly.",
};

export default function CreatePage() {
  return (
    <main className="min-h-screen bg-grain">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FEFCF3]/80 backdrop-blur-md border-b border-emerald-100/50">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <Moon className="h-4 w-4 text-emerald-500" />
            <span className="text-sm font-semibold text-emerald-700">
              Eid Card
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Create Your Eid Card
          </h1>
          <p className="text-gray-500 text-sm">
            Fill in the details and we&apos;ll create a beautiful card for you
          </p>
        </div>

        <CardForm />
      </div>

      <Footer />
    </main>
  );
}
