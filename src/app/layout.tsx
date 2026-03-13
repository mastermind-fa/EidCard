import type { Metadata } from "next";
import { Inter, Playfair_Display, Hind_Siliguri, Noto_Serif_Bengali } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
  display: "swap",
});

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-noto-bn",
  subsets: ["bengali", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Eid Card — Send Beautiful Eid Wishes",
    template: "%s | Eid Card",
  },
  description:
    "Create and share personalized Eid greeting cards with heartfelt messages. Send your Eid Mubarak wishes with a beautiful card and Salami.",
  keywords: [
    "Eid",
    "Eid Mubarak",
    "Eid Card",
    "Eid Wishes",
    "Eid Greeting",
    "Salami",
    "ঈদ মোবারক",
  ],
  openGraph: {
    title: "Eid Card — Send Beautiful Eid Wishes",
    description:
      "Create and share personalized Eid greeting cards with heartfelt messages.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${hindSiliguri.variable} ${notoSerifBengali.variable} antialiased`}
      >
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
