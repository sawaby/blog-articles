import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coding Goal",
  description: "Created By Maria Nazehat",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-slate-300">
        <Header />
        <main className="max-w-screen-xl mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
