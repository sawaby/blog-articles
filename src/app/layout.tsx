import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import OpenMenuContextProvider, { TopicContextProvider } from "./context/menu-context";

const mulish = Mulish({ weight: '400', subsets: ["latin"] });

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
      <body className={`bg-primary text-slate-300 ${mulish.className}`}>
       <TopicContextProvider>
        <OpenMenuContextProvider>
          <Header />
        </OpenMenuContextProvider>
       
        <main className="max-w-screen-xl mx-auto">
         
            {children}
            
        </main>
        </TopicContextProvider>
      </body>
    </html>
  );
}
