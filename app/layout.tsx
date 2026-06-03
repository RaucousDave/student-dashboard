import type { Metadata } from "next";
import Sidebar from "./components/Sidebar";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { LayoutProvider } from "@/lib/hooks/useLayout";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Student Dashboard",
  description:
    "A compact student dashboard with courses and progress tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700&display=swap"
        />
      </head>
      <body className="h-full bg-background text-foreground md:flex md:overflow-hidden">
        <LayoutProvider>
          <Sidebar />
          <main className="h-full min-h-0 min-w-0 flex-1 overflow-y-auto p-4 pb-28 sm:p-5 sm:pb-28 lg:p-6 lg:pb-6">
            {children}
          </main>
        </LayoutProvider>
      </body>
    </html>
  );
}
