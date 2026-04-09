"use client";

import { motion } from "framer-motion";
import { Scale, Building2, User, MapPin, Phone, Mail, Package, CreditCard, RotateCcw, Clock, ChevronRight } from "lucide-react";

export default function LegalNoticePage() {
  const sections = [
    { title: "販売業者・運営責任者", id: "merchant" },
    { title: "連絡先情報", id: "contact" },
    { title: "販売価格・代金以外の料金", id: "pricing" },
    { title: "お支払い方法・時期", id: "payment" },
    { title: "商品の引渡時期", id: "delivery" },
    { title: "返品・交換・キャンセル", id: "returns" },
    { title: "特別条件とその他", id: "misc" },
  ];

  const items = [
    { label: "販売業者", value: "KamaKraft Artisan Collective (運営事務局)" },
    { label: "運営責任者", value: "山田 太郎 (担当者名をご入力ください)" },
    { label: "所在地", value: "〒000-0000 東京都〇〇区〇〇 0-0-0 (正確な住所をご入力ください)" },
    { label: "電話番号", value: "03-0000-0000 (代表番号をご入力ください)" },
    { label: "メールアドレス", value: "support@kamakraft.com" },
    { label: "販売価格", value: "各商品ページに記載（消費税込み）" },
    { label: "商品代金以外の必要料金", value: "・消費税\n・配送料（全国一律 800円、離島等は別途中継料）\n・銀行振込手数料（銀行振込をご利用の場合）" },
    { label: "お支払い方法", value: "クレジットカード決済、Apple Pay、Google Pay、銀行振込" },
    { label: "お支払い時期", value: "・クレジットカード決済：購入完了時\n・銀行振込：注文確定後7日以内のお振込み" },
    { label: "商品の引渡時期", value: "ご注文確定（銀行振込の場合は入金確認）後、3〜5営業日以内に発送いたします。" },
    { label: "返品・交換について", value: "職人の手仕事による一点物という製品の性質上、お客様都合による返品・交換・キャンセルはお受けいたしかねます。\n万が一、お届けした商品に初期不良や破損、品違いがあった場合は、商品到着後7日以内にお問い合わせください。良品と交換、または代金を返還させていただきます。" },
  ];

  return (
    <div className="min-h-screen pt-40 pb-32 px-6 bg-[#fbfbfb] dark:bg-[#050505]">
      {/* Background Subtle Gradient */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden text-left">
        <div className="absolute top-[-10%] right-[-5%] w-[45%] h-[45%] bg-foreground/[0.01] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[35%] h-[35%] bg-foreground/[0.01] rounded-full blur-[120px]" />
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
            <Scale size={14} className="text-foreground/40" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/40">Specific Commercial Transactions Act</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8 text-foreground">
            特定商取引法に基づく表記
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed italic">
            誠実な手仕事を通じて、心地よく安心できるお買い物体験をお約束します。
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
            </div>
          </motion.div>

          {/* Right: Main Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="lg:col-span-8 space-y-16 text-left"
          >
            {/* Table Section */}
            <div className="space-y-1">
              {items.map((item, index) => (
                <section 
                  key={index}
                  id={sections.find(s => item.label.includes(s.title.slice(0, 2)))?.id} 
                  className={`grid grid-cols-1 md:grid-cols-12 gap-6 p-8 rounded-2xl border-b border-foreground/[0.03] hover:bg-foreground/[0.01] transition-colors scroll-mt-40`}
                >
                  <div className="md:col-span-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/30">
                      {item.label}
                    </span>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-[15px] md:text-base text-foreground/80 leading-relaxed font-medium whitespace-pre-wrap">
                      {item.value}
                    </p>
                  </div>
                </section>
              ))}
            </div>

            {/* Additional Features / Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
               <div className="p-8 rounded-[2rem] bg-foreground/5 border border-foreground/5 text-center space-y-4">
                  <CreditCard className="mx-auto text-foreground/30" size={24} />
                  <p className="text-[10px] font-bold tracking-widest uppercase opacity-40">Secure Payment</p>
               </div>
               <div className="p-8 rounded-[2rem] bg-foreground/5 border border-foreground/5 text-center space-y-4">
                  <Package className="mx-auto text-foreground/30" size={24} />
                  <p className="text-[10px] font-bold tracking-widest uppercase opacity-40">Insured Delivery</p>
               </div>
               <div className="p-8 rounded-[2rem] bg-foreground/5 border border-foreground/5 text-center space-y-4">
                  <RotateCcw className="mx-auto text-foreground/30" size={24} />
                  <p className="text-[10px] font-bold tracking-widest uppercase opacity-40">Quality Guarantee</p>
               </div>
            </div>

            <div className="pt-24 flex flex-col items-center gap-4">
               <div className="w-12 h-0.5 bg-foreground/10" />
               <p className="text-[10px] text-foreground/20 font-bold uppercase tracking-[0.5em]">KamaKraft Artisan Collective</p>
               <p className="text-[9px] text-foreground/20 font-bold uppercase tracking-[0.2em]">Specified Commercial Transactions Act Compliance</p>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
