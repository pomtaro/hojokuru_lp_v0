'use client'

import { useEffect, useRef } from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, ArrowRight, Star } from "lucide-react"

export function LandingPage() {
  const featuresRef = useRef<HTMLElement>(null)
  const benefitsRef = useRef<HTMLElement>(null)
  const howItWorksRef = useRef<HTMLElement>(null)
  const pricingRef = useRef<HTMLElement>(null)
  const faqRef = useRef<HTMLElement>(null)

  const scrollToSection = (elementRef: React.RefObject<HTMLElement>, offset: number = 0) => {
    const element = elementRef.current
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset + offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      e.preventDefault()
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
      switch (href) {
        case '#features':
          scrollToSection(featuresRef, -200) // オフセットを-100pxに設定
          break
        case '#benefits':
          scrollToSection(benefitsRef, -200) // オフセットを-100pxに設定
          break
        case '#how-it-works':
          scrollToSection(howItWorksRef, -200) // オフセットを-100pxに設定
          break
        case '#pricing':
          scrollToSection(pricingRef, -200) // オフセットを-100pxに設定
          break
        case '#faq':
          scrollToSection(faqRef, -200) // オフセットを-100pxに設定
          break
      }
    }

    const links = document.querySelectorAll('nav a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleClick as EventListener)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick as EventListener)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <header className="flex justify-between items-center p-6 border-b sticky top-0 bg-white z-10">
        <div className="text-2xl font-bold">▲</div>
        <nav className="flex items-center">
          <ul className="hidden md:flex space-x-8 mr-12">
            <li><a href="#features" className="text-gray-600 hover:text-gray-900">特徴</a></li>
            <li><a href="#benefits" className="text-gray-600 hover:text-gray-900">メリット</a></li>
            <li><a href="#how-it-works" className="text-gray-600 hover:text-gray-900">仕組み</a></li>
            <li><a href="#pricing" className="text-gray-600 hover:text-gray-900">料金</a></li>
            <li><a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
          </ul>
          <Button className="bg-black text-white hover:bg-gray-800">資料ダウンロード</Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-24 max-w-[1200px] space-y-64">
        <section className="text-center">
          <h1 className="text-5xl font-bold mb-8">ホジョクル</h1>
          <p className="text-xl mb-12">
            中小企業の皆様に、最新の補助金情報をお届けします。国や省庁、自治体の補助金を簡単に検索・活用できます。
          </p>
          <div className="mb-12">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-s9zZBZn5cgFF8z1eWB7RMc672sSAg5.png"
              alt="補助金を活用するビジネスマン"
              width={450}
              height={450}
              className="mx-auto"
            />
          </div>
          <div className="flex justify-center space-x-6">
            <Button className="bg-black text-white hover:bg-gray-800 w-48 py-6 text-lg">資料ダウンロード</Button>
            <Button variant="outline" className="w-48 py-6 text-lg">お問い合わせ</Button>
          </div>
        </section>

        <section id="features" ref={featuresRef}>
          <h2 className="text-4xl font-bold text-center mb-12">主な特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">最新情報</h3>
                <p className="text-lg">国や自治体の最新補助金情報をリアルタイムで更新し、お届けします。</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">簡単検索</h3>
                <p className="text-lg">業種や目的に合わせて、最適な補助金を簡単に検索できます。</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">専門家サポート</h3>
                <p className="text-lg">補助金の申請方法や注意点について、専門家がサポートします。</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="benefits" ref={benefitsRef}>
          <h2 className="text-4xl font-bold text-center mb-12">ホジョクルのメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <CheckCircle className="text-green-500 w-12 h-12" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">資金調達の機会拡大</h3>
                <p className="text-lg">様々な補助金情報にアクセスすることで、資金調達の可能性が広がります。</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <CheckCircle className="text-green-500 w-12 h-12" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">時間と労力の節約</h3>
                <p className="text-lg">補助金情報の収集や整理にかかる時間を大幅に削減できます。</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <CheckCircle className="text-green-500 w-12 h-12" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">的確な意思決定</h3>
                <p className="text-lg">最新の補助金情報を基に、より戦略的な経営判断が可能になります。</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <CheckCircle className="text-green-500 w-12 h-12" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">専門家のサポート</h3>
                <p className="text-lg">経験豊富な専門家による適切なアドバイスを受けられます。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" ref={howItWorksRef}>
          <h2 className="text-4xl font-bold text-center mb-12">ホジョクルの仕組み</h2>
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="flex items-center">
              <div className="bg-black text-white rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center mr-8 text-xl font-bold md:w-16 md:h-16 md:text-2xl sm:w-12 sm:h-12 sm:text-xl xs:w-12 xs:h-12 xs:text-xl">1</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 md:text-2xl sm:text-xl xs:text-xl">アカウント作成</h3>
                <p className="text-lg md:text-lg sm:text-sm xs:text-sm">簡単な情報入力でアカウントを作成します。</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-black text-white rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center mr-8 text-xl font-bold md:w-16 md:h-16 md:text-2xl sm:w-12 sm:h-12 sm:text-xl xs:w-12 xs:h-12 xs:text-xl">2</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 md:text-2xl sm:text-xl xs:text-xl">補助金検索</h3>
                <p className="text-lg md:text-lg sm:text-sm xs:text-sm">業種や目的に応じて、最適な補助金を検索します。</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-black text-white rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center mr-8 text-xl font-bold md:w-16 md:h-16 md:text-2xl sm:w-12 sm:h-12 sm:text-xl xs:w-12 xs:h-12 xs:text-xl">3</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 md:text-2xl sm:text-xl xs:text-xl">専門家サポート</h3>
                <p className="text-lg md:text-lg sm:text-sm xs:text-sm">経験豊富な専門家が申請をサポートします。</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-black text-white rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center mr-8 text-xl font-bold md:w-16 md:h-16 md:text-2xl sm:w-12 sm:h-12 sm:text-xl xs:w-12 xs:h-12 xs:text-xl">4</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 md:text-2xl sm:text-xl xs:text-xl">申請・管理</h3>
                <p className="text-lg md:text-lg sm:text-sm xs:text-sm">補助金の申請を行い、進捗を管理します。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" ref={pricingRef}>
          <h2 className="text-4xl font-bold text-center mb-12">料金プラン</h2>
          <div className="max-w-md mx-auto">
            <Card className="border-2 border-black">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">プロプラン</h3>
                <p className="text-4xl font-bold mb-6">¥9,900 <span className="text-base font-normal">/月</span></p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-4 text-green-500 w-6 h-6" />
                    <span className="text-lg">補助金の自動検索</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-4 text-green-500 w-6 h-6" />
                    <span className="text-lg">専門家による補助金の提案</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-4 text-green-500 w-6 h-6" />
                    <span className="text-lg">申請サポート</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="testimonials">
          <h2 className="text-4xl font-bold text-center mb-12">お客様の声</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Star className="text-yellow-400 w-8 h-8" />
                  <Star className="text-yellow-400 w-8 h-8" />
                  <Star className="text-yellow-400 w-8 h-8" />
                  <Star className="text-yellow-400 w-8 h-8" />
                  <Star className="text-yellow-400 w-8 h-8" />
                </div>
                <p className="text-lg mb-6">「ホジョクルのおかげで、今まで知らなかった補助金を見つけることができました。申請も無事通り、事業拡大の大きな助けになりました。」</p>
                <p className="font-semibold text-lg">- 田中様（小売業）</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Star className="text-yellow-400 w-8 h-8" />
                  <Star className="text-yellow-400 w-8 h-8" />
                  <Star className="text-yellow-400 w-8 h-8" />
                  <Star className="text-yellow-400 w-8 h-8" />
                  <Star className="text-yellow-400 w-8 h-8" />
                </div>
                <p className="text-lg mb-6">「専門家のサポートが非常に心強かったです。複雑な申請書類も的確なアドバイスのおかげでスムーズに準備できました。」</p>
                <p className="font-semibold text-lg">- 佐藤様（製造業）</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="faq" ref={faqRef}>
          <h2 className="text-4xl font-bold text-center mb-12">よくある質問</h2>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl">利用料金はかかりますか？</AccordionTrigger>
              <AccordionContent className="text-lg">
                ホジョクルは月額9,900円でご利用いただけます。この料金には補助金の自動検索、専門家による補助金の提案、申請サポートが含まれています。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl">どのような業種に対応してい
ますか？</AccordionTrigger>
              <AccordionContent className="text-lg">
                製造業、小売業、サービス業など、幅広い業種に対応しています。具体的な業種については、お問い合わせください。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl">補助金の申請は確実に通りますか？</AccordionTrigger>
              <AccordionContent className="text-lg">
                補助金の採択を保証するものではありませんが、申請のサポートや適切なアドバイスを通じて、採択率の向上に貢献します。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section id="cta" className="text-center">
          <h2 className="text-4xl font-bold mb-6">今すぐ始めましょう</h2>
          <p className="text-xl mb-12">ホジョクルで、あなたのビジネスに最適な補助金を見つけましょう。</p>
          <Button className="bg-black text-white hover:bg-gray-800 text-xl px-12 py-6">資料ダウンロード</Button>
        </section>
      </main>

      <footer className="bg-gray-100 py-16 mt-64">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">ホジョクルについて</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">会社概要</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">ミッション</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">お問い合わせ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">サービス</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">補助金検索</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">専門家サポート</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">申請代行</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">フォローする</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Twitter</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Facebook</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 text-center text-gray-600">
            <p>&copy; 2023 ホジョクル. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}