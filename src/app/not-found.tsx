import Link from "next/link";
import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-grain">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
          <Moon className="h-8 w-8 text-emerald-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Card Not Found
        </h1>
        <p className="text-gray-500 mb-6">
          This Eid card link may have expired or is invalid. But don&apos;t worry
          — you can create a new one!
        </p>
        <Link href="/create">
          <Button size="lg">Create a New Eid Card</Button>
        </Link>
      </div>
    </main>
  );
}
