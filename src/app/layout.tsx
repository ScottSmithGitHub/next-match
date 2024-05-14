import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import TopNav from "@/components/navbar/TopNav";

export const metadata: Metadata = {
  title: "NextMatch",
  description: "Find a great match",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <TopNav />
          <main className="container mx-auto p-10">
            {children}
          </main>
        </Providers>        
      </body>
    </html>
  );
}
