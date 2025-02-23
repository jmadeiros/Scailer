import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scailer - Business Scaling Service",
  description: "Scale your business with precision using Scailer's innovative solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-scailer-dark text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
