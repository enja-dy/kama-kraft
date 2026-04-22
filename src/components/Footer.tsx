"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Brand Top Section */}
        <div className="mb-20 space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter">KamaKraft</h2>
          <p className="text-white/80 text-base leading-relaxed tracking-wide font-light max-w-2xl">
            100年レベルの耐久性・耐水性・耐虫性に優れ、シロアリや塩害にも負けない最高品質の「鉄の木」ウリン。世代を超えて受け継がれる極上の工芸美と、時と共に深まる風格。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 border-t border-white/5 pt-16">
          {/* Column 1: STORY */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">STORY</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about-ulin" className="text-sm text-white hover:text-white transition-colors font-medium">ウリンについて</Link>
              </li>
              <li>
                <Link href="/craftsmanship" className="text-sm text-white hover:text-white transition-colors font-medium">職人のこだわり</Link>
              </li>
              <li>
                <Link href="/journal" className="text-sm text-white hover:text-white transition-colors font-medium">鎌倉・家具座の知恵</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: CREATION */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">CREATION</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/products" className="text-sm text-white hover:text-white transition-colors font-medium">コレクション一覧</Link>
              </li>
              <li>
                <Link href="/custom-order" className="text-sm text-white hover:text-white transition-colors font-medium">オーダーメイドのご相談</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: SUPPORT */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">SUPPORT</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/contact" className="text-sm text-white hover:text-white transition-colors font-medium">ヘルプ・お問い合わせ</Link>
              </li>
              <li>
                <Link href="/maintenance" className="text-sm text-white hover:text-white transition-colors font-medium">お手入れ・メンテナンス</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: POLICIES */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">POLICIES</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="text-sm text-white hover:text-white transition-colors font-medium">プライバシーポリシー</Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-white hover:text-white transition-colors font-medium">利用規約</Link>
              </li>
              <li>
                <Link href="/legal" className="text-sm text-white hover:text-white transition-colors font-medium">特定商取引法に基づく表記</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          <p className="text-white/50 text-[10px] tracking-[0.3em] uppercase font-bold">
            © 2026 KamaKraft Heritage. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
