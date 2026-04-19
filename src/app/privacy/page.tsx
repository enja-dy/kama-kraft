"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, ArrowRight, FileText, ChevronRight, Share2, MousePointer2, RefreshCw } from "lucide-react";

export default function PrivacyPolicyPage() {
  const sections = [
    { title: "はじめに", id: "intro" },
    { title: "個人情報の取得について", id: "collection" },
    { title: "情報の利用目的", id: "purpose" },
    { title: "第三者への提供について", id: "third-party" },
    { title: "業務委託について", id: "outsourcing" },
    { title: "安全管理措置", id: "security" },
    { title: "Cookieの使用について", id: "cookies" },
    { title: "権利の尊重", id: "rights" },
    { title: "ポリシーの変更", id: "changes" },
    { title: "お問い合わせ窓口", id: "contact" },
  ];

  return (
    <div className="min-h-screen pt-40 pb-32 px-6 bg-[#050505] text-white">
      {/* Background Subtle Gradient */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/[0.01] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] mb-12">
            <Shield size={14} className="text-white/40" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">Privacy Policy</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extralight tracking-[0.4em] uppercase mb-12">
            Privacy Policy
          </h1>
          <div className="space-y-6">
            <h2 className="text-lg md:text-xl font-light tracking-[0.5em] text-white/80">
              個人情報保護方針
            </h2>
            <div className="h-[1px] w-12 bg-white/20 mx-auto" />
            <p className="text-sm md:text-base text-white/40 max-w-3xl mx-auto leading-relaxed italic tracking-widest">
              お客様からお預かりする情報は、私たちが扱う「素材」と同じくらい尊いものです。<br />
              誠実な管理を通じて、心地よい体験を支えます。
            </p>
          </div>
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
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20 mb-6 pl-4">Index</p>
              {sections.map((section) => (
                <a 
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/[0.03] transition-all text-sm font-bold tracking-tight text-white/40 hover:text-white"
                >
                  {section.title}
                  <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
              
              <div className="mt-12 p-8 rounded-3xl bg-white/5 border border-white/5 space-y-4">
                <Lock size={20} className="text-white/40" />
                <p className="text-[11px] leading-relaxed text-white/60 font-medium">
                  KamaKraftは、最新のSSL暗号化技術を採用し、お客様が入力される個人情報を安全に保護します。自社サーバー内にカード情報を蓄積することはありません。
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
              <h2 className="text-2xl font-bold tracking-tight text-white">はじめに</h2>
              <div className="prose prose-invert prose-base max-w-none text-white/80 leading-relaxed font-medium">
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
              <h2 className="text-3xl font-bold tracking-tight text-white">個人情報の取得について</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-medium">
                <div className="p-8 rounded-[2rem] bg-white bg-white/5 border border-white/5 transition-colors group hover:border-white/20">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center mb-6 overflow-hidden">
                    <FileText size={18} className="text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-base font-bold mb-4">ユーザーから直接取得</h3>
                  <ul className="text-sm text-white/60 space-y-3">
                    <li className="flex gap-2">・ 氏名、メールアドレス</li>
                    <li className="flex gap-2">・ 配送先住所、電話番号</li>
                    <li className="flex gap-2">・ 注文履歴、決済に必要な情報</li>
                  </ul>
                </div>
                <div className="p-8 rounded-[2rem] bg-white bg-white/5 border border-white/5 transition-colors group hover:border-white/20">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center mb-6 overflow-hidden">
                    <ArrowRight size={18} className="text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-base font-bold mb-4">自動的に取得</h3>
                  <ul className="text-sm text-white/60 space-y-3">
                    <li className="flex gap-2">・ IPアドレス、クッキー情報</li>
                    <li className="flex gap-2">・ ブラウザの種類、アクセス履歴</li>
                    <li className="flex gap-2">・ 端末の識別情報</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Purpose */}
            <section id="purpose" className="space-y-6 scroll-mt-40">
              <h2 className="text-2xl font-bold tracking-tight text-white">情報の利用目的</h2>
              <ul className="space-y-4 text-white/80 font-medium text-sm md:text-base">
                {[
                  "商品の配送、およびアフターサービスのご提供のため",
                  "お客様からの注文履歴管理、お問い合わせ対応のため",
                  "新商品情報、展示会、キャンペーン等のご案内のため",
                  "利用規約に違反する様態でのご利用を防止するため",
                  "統計データの作成、およびサービスの改善・向上に役立てるため"
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.03]">
                    <span className="text-white/20 font-mono italic">0{i+1}</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Third Party Disclosure */}
            <section id="third-party" className="space-y-6 scroll-mt-40">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                   <Share2 size={18} className="text-white" />
                 </div>
                 <h2 className="text-2xl font-bold tracking-tight text-white">第三者への提供について</h2>
              </div>
              <div className="prose prose-invert prose-base max-w-none text-white/80 leading-relaxed font-medium">
                <p>
                  当ブランドは、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく第三者に個人情報を提供することはありません。
                </p>
                <div className="grid grid-cols-1 gap-4 mt-8">
                  {[
                    "法令に基づく場合",
                    "人の生命、身体または財産の保護のために必要がある場合",
                    "公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合",
                    "国の機関もしくは地方公共団体等の事務に協力する必要がある場合",
                    "合併その他の事由による事業の承継に伴って個人情報が提供される場合"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 border-l-[3px] border-white/10 bg-white/[0.01]">
                      <CheckCircle i={i} />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Outsourcing */}
            <section id="outsourcing" className="space-y-6 scroll-mt-40">
              <h2 className="text-2xl font-bold tracking-tight text-white">業務委託について</h2>
              <div className="p-10 rounded-[2.5rem] bg-[#3d2b1f]/[0.02] border border-[#3d2b1f]/10">
                <p className="text-white/80 font-medium leading-relaxed text-sm md:text-base">
                  当ブランドは、サービスの提供に必要な範囲において、個人情報の取り扱いを外部に委託することがあります（配送委託業者、決済サービス提供会社、システム管理会社等）。
                  この場合、個人情報の安全管理が図られるよう、委託先に対して必要かつ適切な監督を行い、情報の保護を徹底いたします。
                </p>
              </div>
            </section>

            {/* Security */}
            <section id="security" className="p-12 rounded-[3.5rem] bg-white text-black relative overflow-hidden scroll-mt-40 shadow-2xl">
               <div className="absolute top-0 right-0 p-12 opacity-10">
                 <Shield size={160} />
               </div>
               <div className="relative z-10 space-y-8">
                 <h2 className="text-2xl font-bold tracking-tight">安全管理措置</h2>
                 <p className="text-base md:text-lg opacity-80 leading-relaxed font-medium">
                   当ブランドは、預かりした情報を職人が精魂込めて仕上げる作品と同じように大切にします。最新のセキュリティ技術（SSL暗号化通信等）の導入、アクセス制限の徹底、定期的なシステム監査を行い、不正アクセスや紛失、漏洩の防止に努めています。
                 </p>
               </div>
            </section>

            {/* Cookie */}
            <section id="cookies" className="space-y-6 scroll-mt-40">
              <div className="flex items-center gap-4 mb-4">
                 <MousePointer2 size={20} className="text-white/40" />
                 <h2 className="text-2xl font-bold tracking-tight text-white">Cookieの使用について</h2>
              </div>
              <div className="prose prose-invert prose-base max-w-none text-white/80 leading-relaxed font-medium">
                <p>
                  本サービスでは、カート機能の保持やセッション管理、より利便性の高いショッピング体験の提供のためにCookie（クッキー）を使用しています。Cookieはブラウザの設定によって無効にすることも可能ですが、その際、ショッピングカートが正常に動作しなくなる等、本サービスの一部機能がご利用いただけなくなる場合があります。
                </p>
              </div>
            </section>

            {/* Rights */}
            <section id="rights" className="space-y-6 scroll-mt-40">
              <h2 className="text-2xl font-bold tracking-tight text-white">権利の尊重</h2>
              <div className="prose prose-invert prose-base max-w-none text-white/80 leading-relaxed font-medium">
                <p>
                  お客様ご本人から個人情報の開示、訂正、利用停止等の請求を受けた場合には、ご本人であることを確認の上、遅滞なく対応いたします。
                  これらの権利の行使を希望される場合は、下記のお問い合わせ窓口までご連絡ください。
                </p>
              </div>
            </section>

            {/* Changes */}
            <section id="changes" className="space-y-6 scroll-mt-40">
              <div className="flex items-center gap-4 mb-4">
                 <RefreshCw size={20} className="text-white/40 animate-spin-slow" />
                 <h2 className="text-2xl font-bold tracking-tight text-white">ポリシーの変更</h2>
              </div>
              <div className="prose prose-invert prose-base max-w-none text-white/80 leading-relaxed font-medium">
                <p>
                  当ブランドは、法令の変更やサービス内容の変更に伴い、本ポリシーを随時改善・更新します。改定後の本ポリシーは、本ウェブサイトに掲載した時点から効力を生じるものとします。重大な変更がある場合には、本ウェブサイト上にてわかりやすく告知いたします。
                </p>
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="space-y-6 scroll-mt-40">
              <h2 className="text-2xl font-bold tracking-tight text-white">お問い合わせ窓口</h2>
              <div className="p-10 rounded-[2.5rem] border border-white/10 flex flex-col items-center text-center gap-8 bg-white bg-white/5">
                <p className="text-white/60 font-medium max-w-lg">
                  本ポリシーに関するご質問やご相談、その他個人情報の取り扱いに関するお問い合わせは、下記までお願いいたします。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-xl">
                  <div className="space-y-1">
                     <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">担当窓口</p>
                     <p className="text-lg font-bold text-white">KamaKraft 事務局</p>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Email Address</p>
                     <p className="text-lg font-bold text-white underline decoration-white/20 underline-offset-8">privacy@kamakraft.com</p>
                  </div>
                </div>
                <button className="bg-white text-black py-5 px-12 rounded-full font-bold tracking-[0.2em] text-[11px] uppercase hover:scale-[1.05] transition-transform shadow-xl shadow-white/20">
                  お問い合わせフォームを開く
                </button>
              </div>
            </section>

            <div className="pt-24 flex flex-col items-center gap-4">
               <div className="w-12 h-0.5 bg-white/10" />
               <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.5em]">KamaKraft Artisan Collective</p>
               <p className="text-[9px] text-white/20 font-bold uppercase tracking-[0.2em]">Last Updated: April 9, 2026</p>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}

function CheckCircle({ i }: { i: number }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-0.5">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" className="opacity-10" />
      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
