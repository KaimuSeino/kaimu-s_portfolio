import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "清野海夢のポートフォリオ",
  description: "自己分析も兼ねてポートフォリオを作成しています。日々デザインや内容を更新しているので是非ご覧ください。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/kaimu_icon.JPG" sizes="any" />
      <body className={cn(inter)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
