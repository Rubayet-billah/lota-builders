import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lota Builders & Co Ltd | Commercial, Faith & Residential Contractors Birmingham",
  description:
    "Established 2000 in Kings Heath & Moseley. Turnkey design & build, structural engineering, places of worship, commercial developments, and high-end residential extensions across Birmingham and the West Midlands.",
  keywords: [
    "Lota Builders",
    "Birmingham Builders",
    "Kings Heath contractors",
    "Moseley residential builders",
    "Faith building contractors Birmingham",
    "Commercial design and build Birmingham",
    "NICEIC Gas Safe contractor Birmingham",
    "JCT building contracts West Midlands",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900 selection:bg-amber-500/20 selection:text-amber-900 font-sans">
        {children}
      </body>
    </html>
  );
}
