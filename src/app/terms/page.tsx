"use client";

import { motion } from "framer-motion";
import { Gavel, CheckCircle2, AlertCircle, HelpCircle, ChevronRight, Package, CreditCard, RotateCcw, Copyright, ZapOff, ShieldAlert } from "lucide-react";

export default function TermsOfServicePage() {
  const sections = [
    { title: "第1条 適用", id: "article-1" },
    { title: "第2条 売買契約の成立", id: "article-2" },
    { title: "第3条 お支払い方法", id: "article-3" },
    { title: "第4条 配送・配送料", id: "article-4" },
    { title: "第5条 返品・交換・キャンセル", id: "article-5" },
    { title: "第6条 禁止事項", id: "article-6" },
    { title: "第7条 本サービスの停止・中断", id: "article-7" },
    { title: "第8条 免責事項", id: "article-8" },
    { title: "第10条 著作権・知的財産権", id: "article-10" },
    { title: "第11条 準拠法・裁判管轄", id: "article-11" },
  ];

  return (
    <div className="min-h-screen pt-40 pb-32 px-6 bg-[#fbfbfb] dark:bg-[#050505]">
      {/* Background Subtle Gradient */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden text-left">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-foreground/[0.01] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-foreground/[0.01] rounded-full blur-[120px]" />
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
            <Gavel size={14} className="text-foreground/40" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/40">Terms of Service</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-foreground uppercase">
            利用規約
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed italic">
            KamaKraftとお客様をつなぐ、大切な約束。
            安心してお買い物をお楽しみいただくためのガイドラインです。
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
            <div className="sticky top-40 space-y-1 text-left">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/20 mb-6 pl-4">Articles</p>
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
                <HelpCircle size={20} className="text-foreground/40" />
                <p className="text-[11px] leading-relaxed text-foreground/60 font-medium">
                  規約に関してご不明な点がございましたら、いつでも事務局までお問い合わせください。私たちは常に誠実な対応をお約束します。
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Main Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="lg:col-span-8 space-y-24 text-left font-medium"
          >
            {/* Article 1 */}
            <section id="article-1" className="space-y-6 scroll-mt-40">
              <h2 className="text-2xl font-bold tracking-tight text-foreground leading-none flex items-baseline gap-4">
                <span className="text-sm font-mono opacity-20">Art. 01</span>
                <span>適用</span>
              </h2>
              <div className="prose dark:prose-invert prose-base max-w-none text-foreground/80 leading-relaxed font-medium">
                <p>
                  本規約は、KamaKraft（以下「当ブランド」といいます）がウェブサイト上で提供するサービス（以下「本サービス」といいます）の利用条件を定めるものです。登録ユーザーの皆さまには、本規約に従って本サービスをご利用いただきます。
                </p>
              </div>
            </section>

            {/* Article 2 */}
            <section id="article-2" className="space-y-8 scroll-mt-40">
              <h2 className="text-2xl font-bold tracking-tight text-foreground leading-none flex items-baseline gap-4">
                <span className="text-sm font-mono opacity-20">Art. 02</span>
                <span>売買契約の成立</span>
              </h2>
              <div className="prose dark:prose-invert prose-base max-w-none text-foreground/80 leading-relaxed font-medium space-y-6">
                <div className="p-8 rounded-[2.5rem] bg-foreground/5 border border-foreground/5 relative overflow-hidden group">
                   <Package className="absolute -right-4 -bottom-4 text-foreground/5 w-24 h-24 group-hover:scale-110 transition-transform" />
                   <p className="relative z-10 text-sm md:text-base">
                     本サービスにおいては、ユーザーが当ブランドに対して購入の申し込みをし、これに対して当ブランドが当該申し込みを受諾した旨のメール（注文確定メール）を送信した時点で、売買契約が成立するものとします。
                   </p>
                </div>
                <p>
                  なお、商品の所有権は、当ブランドが商品を配送業者に引き渡した時点でユーザーに移転するものとします。
                </p>
              </div>
            </section>

            {/* Article 3 & 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <section id="article-3" className="p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-foreground/5 scroll-mt-40">
                 <CreditCard className="text-foreground/20 mb-6" />
                 <h3 className="text-xl font-bold mb-4">お支払い方法</h3>
                 <p className="text-sm text-foreground/60 leading-relaxed">
                   商品の代金の支払方法は、クレジットカード決済、銀行振込、その他当ブランドが別途認める方法から選択いただけます。銀行振込の場合、振込手数料はお客様負担となります。
                 </p>
               </section>
               <section id="article-4" className="p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-foreground/5 scroll-mt-40">
                 <Package className="text-foreground/20 mb-6" />
                 <h3 className="text-xl font-bold mb-4">配送・配送料</h3>
                 <p className="text-sm text-foreground/60 leading-relaxed">
                   商品は通常、注文確定後3〜5営業日以内に発送いたします。一部の離島等の地域については、別途配送料（中継料）が発生する場合がございます。
                 </p>
               </section>
            </div>

            {/* Article 5 */}
            <section id="article-5" className="space-y-8 scroll-mt-40">
              <h2 className="text-2xl font-bold tracking-tight text-foreground leading-none flex items-baseline gap-4">
                <span className="text-sm font-mono opacity-20">Art. 03</span>
                <span>返品・交換・キャンセル</span>
              </h2>
              <div className="bg-[#3d2b1f]/[0.02] border border-[#3d2b1f]/10 rounded-[3rem] p-10 space-y-8 text-sm md:text-[15px]">
                <div className="flex gap-6 items-start">
                   <RotateCcw className="shrink-0 text-[#3d2b1f]" />
                   <div className="space-y-4">
                     <h3 className="text-lg font-bold">初期不良・品違い</h3>
                     <p className="text-sm leading-relaxed opacity-70">
                       万が一、配送された商品に欠陥がある場合や、注文と異なる商品が届いた場合は、商品到着後7日以内にお問い合わせください。この場合、返送および再配送に要する送料は当ブランドが負担いたします。
                     </p>
                   </div>
                </div>
                <div className="flex gap-6 items-start">
                   <AlertCircle className="shrink-0 text-red-500/50" />
                   <div className="space-y-4">
                     <h3 className="text-lg font-bold">お客様都合による返品</h3>
                     <p className="text-sm leading-relaxed opacity-70">
                       職人の手仕事による一点物という商品の性質上、基本的にお客様都合による返品・交換・キャンセルはお受けいたしかねます。ご了承ください。
                     </p>
                   </div>
                </div>
              </div>
            </section>

            {/* Article 6 */}
            <section id="article-6" className="space-y-6 scroll-mt-40">
              <h2 className="text-2xl font-bold tracking-tight text-foreground leading-none flex items-baseline gap-4">
                <span className="text-sm font-mono opacity-20">Art. 04</span>
                <span>禁止事項</span>
              </h2>
              <div className="grid grid-cols-1 gap-3">
                 {[
                   "他人の知的財産権等の権利を侵害する行為",
                   "本サービスの運営を妨害するおそれのある行為",
                   "当ブランドの商品の転売、営利目的での購入",
                   "不正なクレジットカードの使用",
                   "その他、当ブランドが不適切と判断する行為"
                 ].map((text, i) => (
                   <div key={i} className="flex gap-4 p-5 rounded-2xl bg-red-500/[0.01] border border-red-500/5 items-center">
                     <span className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
                     <span className="text-sm text-foreground/80">{text}</span>
                   </div>
                 ))}
              </div>
            </section>

            {/* Article 7 */}
            <section id="article-7" className="space-y-6 scroll-mt-40">
              <div className="flex items-center gap-4 mb-4">
                 <ZapOff size={20} className="text-foreground/40" />
                 <h2 className="text-2xl font-bold tracking-tight text-foreground">本サービスの停止・中断</h2>
              </div>
              <div className="prose dark:prose-invert prose-base max-w-none text-foreground/80 leading-relaxed font-medium">
                <p>
                  当ブランドは、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                </p>
                <ul className="text-sm space-y-2 opacity-80 mt-4">
                  <li>・ 本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                  <li>・ 地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                  <li>・ コンピュータまたは通信回線等が事故により停止した場合</li>
                  <li>・ その他、当ブランドが本サービスの提供が困難と判断した場合</li>
                </ul>
                <p className="mt-4 text-xs italic opacity-60">
                  ※ 当ブランドは、本サービスの停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
                </p>
              </div>
            </section>

            {/* Article 8 */}
            <section id="article-8" className="space-y-6 scroll-mt-40">
              <div className="flex items-center gap-4 mb-4">
                 <ShieldAlert size={20} className="text-foreground/40" />
                 <h2 className="text-2xl font-bold tracking-tight text-foreground">免責事項</h2>
              </div>
              <div className="p-10 rounded-[2.5rem] border border-foreground/10 bg-white dark:bg-white/5 space-y-6 text-sm md:text-[15px]">
                 <p className="text-sm leading-relaxed text-foreground/80">
                   当ブランドは、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます）がないことを明示的にも黙示的にも保証しておりません。
                 </p>
                 <p className="text-sm leading-relaxed text-foreground/80">
                   当ブランドは、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし、本サービスに関する当ブランドとユーザーとの間の契約（本規約を含みます）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されませんが、その際にも、当ブランドは、当ブランドの過失（重過失を除きます）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当ブランドまたはユーザーが損害発生につき予見し、または予見し得た場合を含みます）について一切の責任を負いません。
                 </p>
              </div>
            </section>

            {/* Article 10 */}
            <section id="article-10" className="p-12 rounded-[3.5rem] bg-foreground text-background relative overflow-hidden scroll-mt-40 shadow-2xl">
               <Copyright className="absolute -right-4 -bottom-4 opacity-5 w-64 h-64" />
               <div className="relative z-10 space-y-8">
                 <h2 className="text-3xl font-bold tracking-tight">著作権・知的財産権</h2>
                 <p className="text-lg opacity-80 leading-relaxed">
                   本ウェブサイト上のすべてのコンテンツ（画像、文章、デザイン、ロゴ等）は、当ブランドまたは正当な権利者に帰属します。当ブランドの許可なくこれらを無断で使用、複製、転載することは固く禁じられています。
                 </p>
               </div>
            </section>

            {/* Article 11 */}
            <section id="article-11" className="space-y-6 scroll-mt-40">
              <h2 className="text-3xl font-bold tracking-tight text-foreground leading-none flex items-baseline gap-4">
                <span className="text-sm font-mono opacity-20">Art. 05</span>
                <span>準拠法・裁判管轄</span>
              </h2>
              <div className="p-10 rounded-[2.5rem] border border-foreground/10 text-center space-y-4">
                 <p className="text-foreground/80 font-medium">
                   本規約の解釈にあたっては，日本法を準拠法とします。 本サービスに関して紛争が生じた場合には，当ブランドの本店所在地を管轄する裁判所を専属的合意管轄とします。
                 </p>
                 <div className="pt-6">
                    <CheckCircle2 size={32} className="mx-auto text-foreground/20" />
                 </div>
              </div>
            </section>

            <div className="pt-24 flex flex-col items-center gap-4">
               <div className="w-12 h-0.5 bg-foreground/10" />
               <p className="text-[10px] text-foreground/20 font-bold uppercase tracking-[0.5em]">KamaKraft Artisan Collective</p>
               <p className="text-[9px] text-foreground/20 font-bold uppercase tracking-[0.2em]">Effective as of April 9, 2026</p>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
