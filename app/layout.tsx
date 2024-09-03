import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ホジョクル - 中小企業向け補助金サポート",
  description: "中小企業の皆様に、最新の補助金情報をお届けします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <header className="flex justify-between items-center p-6 border-b sticky top-0 bg-white z-10">
            <Link href="/" className="text-2xl font-bold">▲</Link>
            <nav className="flex items-center">
              <ul className="hidden md:flex space-x-8 mr-12">
                <li><Link href="/#features" className="text-gray-600 hover:text-gray-900">特徴</Link></li>
                <li><Link href="/#benefits" className="text-gray-600 hover:text-gray-900">メリット</Link></li>
                <li><Link href="/#how-it-works" className="text-gray-600 hover:text-gray-900">仕組み</Link></li>
                <li><Link href="/#pricing" className="text-gray-600 hover:text-gray-900">料金</Link></li>
                <li><Link href="/#faq" className="text-gray-600 hover:text-gray-900">FAQ</Link></li>
                <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
              </ul>
              <Button className="bg-black text-white hover:bg-gray-800">資料ダウンロード</Button>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
