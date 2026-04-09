"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, ArrowRight, FileText, ChevronRight } from "lucide-react";

export default function PrivacyPolicyPage() {
  const sections = [
    { title: "はじめに", id: "intro" },
    { title: "個人情報の取得について", id: "collection" },
    { title: "情報の利用目的", id: "purpose" },
    { title: "第三者への提供について", id: "third-party" },
    { title: "安全管理措置", id: "security" },
    { title: "Cookieの使用について", id: "cookies" },
    { title: "お問い合わせ窓口", id: "contact" },
  ];

  return (
    <div className="min-h-screen pt-40 pb-32 px-6 bg-[#fbfbfb] dark:bg-[#050505]">
      {/* Background Subtle Gradient */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-foreground/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-foreground/[0.01] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-foreground/5 bg-foreground/[0.02] mb-8">
            <Shield size={14} className="text-foreground/40" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/40">Privacy & Trust</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-foreground">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto leading-relaxed italic">
            お客様からお預かりする情報は、私たちが扱う「素材」と同じくらい尊いものです。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left: Table of Contents (Sticky) */}
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.3 }}
             className="lg:col-span-4"
          >
            <div className="sticky top-40 space-y-1">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/20 mb-6 pl-4">Index</p>
              {sections.map((section) => (
                <a 
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex items-center justify-between p-4 rounded-xl hover:bg-foreground/[0.03] transition-all text-sm font-bold tracking-tight text-foreground/40 hover:text-foreground"
                >
                  {section.title}
                  <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
              
              <div className="mt-12 p-8 rounded-3xl bg-foreground/5 border border-foreground/5 space-y-4">
                <Lock size={20} className="text-foreground/40" />
                <p className="text-[11px] leading-relaxed text-foreground/60 font-medium">
                  KamaKraftは、お客様のプライバシーを最優先に考え、最新の暗号化技術と厳格な管理体制で情報を保護しています。
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Main Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="lg:col-span-8 space-y-24 text-left"
          >
            {/* Intro */}
            <section id="intro" className="space-y-6 scroll-mt-40">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">はじめに</h2>
              <div className="prose dark:prose-invert prose-lg max-w-none text-foreground/80 leading-relaxed font-medium">
                <p>
                  KamaKraft（以下「当ブランド」といいます）は、当ブランドが提供するサービス（以下「本サービス」といいます）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
                </p>
                <p>
                  私たちは、伝統工法を重んじる職人と同じ誠実さを持って、お客様の情報の保護に努めます。
                </p>
              </div>
            </section>

            {/* Collection */}
            <section id="collection" className="space-y-8 scroll-mt-40">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">個人情報の取得について</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-medium">
                <div className="p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-foreground/5 hover:border-foreground/20 transition-colors">
                  <div className="w-10 h-10 rounded-2xl bg-foreground/5 flex items-center justify-center mb-6">
                    <FileText size={18} className="text-foreground" />
                  </div>
                  <h3 className="text-lg font-bold mb-4">ユーザーから直接取得</h3>
                  <ul className="text-sm text-foreground/60 space-y-3">
                    <li className="flex gap-2">・ 氏名、メールアドレス</li>
                    <li className="flex gap-2">・ 配送先住所、電話番号</li>
                    <li className="flex gap-2">・ 注文履歴、決済情報</li>
                  </ul>
                </div>
                <div className="p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-foreground/5 hover:border-foreground/20 transition-colors">
                  <div className="w-10 h-10 rounded-2xl bg-foreground/5 flex items-center justify-center mb-6">
                    <ArrowRight size={18} className="text-foreground" />
                  </div>
                  <h3 className="text-lg font-bold mb-4">自動的に取得</h3>
                  <ul className="text-sm text-foreground/60 space-y-3">
                    <li className="flex gap-2">・ IPアドレス、クッキー情報</li>
                    <li className="flex gap-2">・ ブラウザの種類、アクセス履歴</li>
                    <li className="flex gap-2">・ デバイスの識別情報</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Purpose */}
            <section id="purpose" className="space-y-6 scroll-mt-40">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">情報の利用目的</h2>
              <ul className="space-y-4 text-foreground/80 font-medium">
                {[
                  "商品の配送、代金決済のため",
                  "お客様からの注文状況の確認や、メンテナンスのご案内のため",
                  "新商品情報や展示会のご案内のため（希望者のみ）",
                  "当ブランドのサービスの改善、マーケティング分析のため",
                  "利用規約に違反する様態でのご利用を防止するため"
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 p-5 rounded-2xl bg-foreground/[0.02] border border-foreground/[0.03]">
                    <span className="text-foreground/20 font-mono">0{i+1}</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Security */}
            <section id="security" className="p-12 rounded-[3.5rem] bg-foreground text-background relative overflow-hidden scroll-mt-40">
               <div className="absolute top-0 right-0 p-12 opacity-10">
                 <Shield size={200} />
               </div>
               <div className="relative z-10 space-y-8">
                 <h2 className="text-3xl font-bold tracking-tight">安全管理措置</h2>
                 <p className="text-lg opacity-80 leading-relaxed font-medium">
                   当ブランドは、個人情報の漏洩、滅失または毀損の防止その他の個人情報の安全管理のために、必要かつ適切な措置を講じます。これには、最新のSSL暗号化通信の採用、アクセス権限の厳格な管理、および継続的な従業員教育が含まれます。
                 </p>
                 <div className="flex items-center gap-4 py-4 px-6 rounded-2xl bg-background/10 border border-background/20 inline-flex">
                   <Lock size={16} />
                   <span className="text-xs font-bold uppercase tracking-[0.2em]">High Security Environment</span>
                 </div>
               </div>
            </section>

            {/* Contact */}
            <section id="contact" className="space-y-6 scroll-mt-40">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">お問い合わせ窓口</h2>
              <div className="p-10 rounded-[2.5rem] border border-foreground/10 flex flex-col items-center text-center gap-6">
                <p className="text-foreground/60 font-medium">
                  本ポリシーに関するご質問や、個人情報の開示・訂正・削除のご要望は、下記までご連絡ください。
                </p>
                <div className="space-y-1">
                   <p className="text-sm font-bold uppercase tracking-widest text-foreground/40">Email</p>
                   <p className="text-2xl font-bold text-foreground">privacy@kamakraft.com</p>
                </div>
                <button className="bg-foreground text-background py-4 px-10 rounded-full font-bold tracking-widest text-xs uppercase hover:scale-[1.05] transition-transform">
                  お問い合わせフォームへ
                </button>
              </div>
            </section>

            <div className="pt-12 border-t border-foreground/5 text-[10px] text-foreground/20 font-bold uppercase tracking-[0.4em] text-center">
              Last Updated: April 9, 2026
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
