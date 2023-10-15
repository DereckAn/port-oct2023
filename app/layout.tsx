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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-dark text-gray-300", font.className)}>
        <main className="lg:pl-[15vw] px-5 lg:px-0  ">
          {children}
        </main>
      </body>
    </html>
  );
}

// ! para correr el codigo ---> "npm run dev"
