import "./globals.css";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { DM_Sans } from "next/font/google";
import Sidebar from "@/components/Sidebar";

const dm_sans = DM_Sans({ subsets: ["latin"] });

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
          "flex h-screen bg-black text-gray-100 overflow-hidden",
          dm_sans.className
        )}
      >
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
