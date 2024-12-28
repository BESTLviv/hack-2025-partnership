import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import {inter} from "@/app/fonts";
import Providers from "@/redux/Providers";


export const metadata: Metadata = {
    title: "Partnership Hackath0n`2025",
    description: "BEST Hackath0n`2025 partnership broshure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={`${inter.className} bg-black text-neutral-100`}>
      <Providers>{children}</Providers>
      </body>
      </html>
  );
}
