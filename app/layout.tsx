import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistMono = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next JS Scroll Animation ",
  description: "Next JS Scroll Animation ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${geistMono.className} antialiased`}>{children}</body>
    </html>
  );
}
