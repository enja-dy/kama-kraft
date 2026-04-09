"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter">KamaKraft</h2>
            <p className="text-white/75 text-sm leading-relaxed tracking-wide font-medium">
              ボルネオの深林で育まれた「鉄の木」ウリン。<br />
              世代を超えて受け継がれる極上の工芸美と、<br />
              時と共に深まる風格。
            </p>
          </div>

          {/* Shop Column */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-[0.2em] text-white/70 uppercase">製品一覧</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/products" className="text-sm text-white/85 hover:text-white transition-colors font-medium">すべての商品</Link>
              </li>
              <li>
                <Link href="/about-ulin" className="text-sm text-white/85 hover:text-white transition-colors font-medium">ウリンについて</Link>
              </li>
              <li>
                <Link href="/craftsmanship" className="text-sm text-white/85 hover:text-white transition-colors font-medium">職人のこだわり</Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-[0.2em] text-white/70 uppercase">サポート</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/help" className="text-sm text-white/85 hover:text-white transition-colors font-medium">ヘルプ・お問い合わせ</Link>
              </li>
              <li>
                <Link href="/maintenance" className="text-sm text-white/85 hover:text-white transition-colors font-medium">お手入れ・メンテナンス</Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-[0.2em] text-white/70 uppercase">規約・法定表記</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="text-sm text-white/85 hover:text-white transition-colors font-medium">プライバシーポリシー</Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-white/85 hover:text-white transition-colors font-medium">利用規約</Link>
              </li>
              <li>
                <Link href="/legal" className="text-sm text-white/85 hover:text-white transition-colors font-medium">特定商取引法に基づく表記</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          <p className="text-white/50 text-[10px] tracking-[0.3em] uppercase font-bold">
            © 2026 KamaKraft Heritage. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/50 hover:text-white transition-colors font-bold">Instagram</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors font-bold">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
