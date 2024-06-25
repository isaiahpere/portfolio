import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  weight: ["300", "400", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Isaiah - SE",
  description: "Isaiah's portfolio and most current work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("relative", poppins.className)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
