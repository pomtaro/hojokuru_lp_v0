import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "ホジョクル - 中小企業向け補助金サポート",
  description: "待ってるだけで補助金がやってくる",
  openGraph: {
    title: "ホジョクル - 中小企業向け補助金サポート",
    description: "待ってるだけで補助金がやってくる",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "ホジョクル OGイメージ",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
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
            <Link href="/" className="text-2xl font-bold">ホジョクル</Link>
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
