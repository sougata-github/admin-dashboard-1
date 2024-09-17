import "./globals.css";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard built using Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex h-screen bg-gray-800 text-gray-100 overflow-hidden",
          inter.className
        )}
      >
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
