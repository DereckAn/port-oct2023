import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { cn } from "@/libs/utils";

const font = Figtree({ subsets: ["latin"] }); // NOTE: this is a custom font

// note: Si convierto este al lado delcliente
// note: Los metadatos me dejran de funcionar
export const metadata: Metadata = {
  title: "Portafolio Web",
  description: "Portafolio Web",
};

interface RootLayoutProps {
  readonly children: React.ReactNode; // Mark children as read-only
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={cn("bg-dark text-gray-300", font.className)}>
        <main className="lg:pl-[23vw] xl:pl-[16vw]  px-5 xl:-px-0  ">
          {children}
        </main>
      </body>
    </html>
  );
}

// ! para correr el codigo ---> "npm run dev"