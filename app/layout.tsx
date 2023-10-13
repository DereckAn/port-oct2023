import Sidebar from "@/components/shared/sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { cn } from "@/libs/utils";

const font = Figtree({ subsets: ["latin"] }); // NOTE: this is a custom font

export const metadata: Metadata = {
  title: "Portafolio Web",
  description: "Portafolio Web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn('bg-dark text-gray-300',font.className)}>
        <Sidebar/>
        <main className="pl-[13vw] container mx-auto py-5 lg:py-8 ">{children}</main>
      </body>
    </html>
  );
}
