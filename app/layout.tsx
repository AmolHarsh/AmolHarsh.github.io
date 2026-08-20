import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/content/data";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.tagline}`,
  description: profile.blurb,
  openGraph: {
    title: `${profile.name} — ${profile.tagline}`,
    description: profile.blurb,
    type: "website",
  },
  robots: { index: true, follow: true },
};

// Applies the stored theme before first paint so there is no flash.
const noFlash = `try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
