import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaimu_portfolio",
  description: "kaimu seino",
  icons: [
    {
      url: "/kaimu_icon.JPG",
      href: "/kaimu_icon.JPG"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
