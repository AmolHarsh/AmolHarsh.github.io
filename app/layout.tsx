import type { Metadata } from "next";
import Script from "next/script";
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
// The "js" class lets CSS hide scroll-reveal content only when the script that
// reveals it can run — without JS, everything simply renders visible.
const noFlash = `document.documentElement.classList.add("js");try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
      </head>
      <body className="min-h-screen antialiased">
        {children}
        {/* Cloudflare Web Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "36ff976487d64a00814bc8779b475a9a"}'
        />
      </body>
    </html>
  );
}
