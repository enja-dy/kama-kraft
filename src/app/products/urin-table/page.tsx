"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, CheckCircle2, Ruler, Shield, Clock, Droplets, ArrowLeft, Info, Calendar } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function UrinTablePage() {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: "urin-standard-table-1",
      name: "The Standard Table \"URIN\"",
      price: 70000,
      image: "/product-urin-highangle.png",
      quantity: 1,
    });
    
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 3000);
  };

  const sections = [
    {
      id: "story",
      title: "100年の封印、その息吹。",
      content: "東南アジアの熱帯雨林で、一世紀近い歳月をかけて育まれた「鉄の木」ウリン。かつては橋梁や埠頭など、国家レベルの重要インフラを支えてきたこの稀少材が、鎌倉の職人の手仕事によって、あなたの家の中心（センターテーブル）として生まれ変わります。水に沈むほどの圧倒的な密度、そして腐朽菌を寄せ付けない強靭な生命力を、日常の空間に。"
    },
    {
      id: "detail",
      title: "資産としての、家具。",
      content: "ウリンは単なる木材ではありません。時と共に明るい赤褐色から、深みのあるダークブラウンへと深まり、最終的には気高いシルバーグレーへと昇華していきます。一生を添い遂げ、世代を超えて受け継がれる「真のラグジュアリー」を。屋外のテラスからラグジュアリーなリビングまで、あらゆる環境でその真価を発揮します。"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-48 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Navigation */}
        <Link 
          href="/"
          className="inline-flex items-center gap-3 text-white/40 hover:text-white transition-all mb-16 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Return to Collection</span>
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 mb-48">
          {/* Main Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="relative aspect-square rounded-[2rem] overflow-hidden bg-white/[0.02] border border-white/5"
          >
            <Image
              src="/product-urin-highangle.png"
              alt="The Standard Table URIN"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </motion.div>

          {/* Product Info */}
          <div className="flex flex-col justify-center space-y-12">
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-white/30 block">The Standard Series</span>
              <h1 className="text-4xl md:text-5xl font-extralight tracking-[0.2em] leading-tight">
                The Standard Table<br />
                <span className="italic font-light">&quot;URIN&quot;</span>
              </h1>
              <div className="flex items-baseline gap-4 pt-4">
                <span className="text-3xl font-light tracking-tighter">¥70,000</span>
                <span className="text-[10px] text-white/20 uppercase tracking-[0.4em]">Tax Included</span>
              </div>
            </div>

            <p className="text-white/50 leading-[2.2] font-light text-lg tracking-wide text-justify">
              アイアンウッド「ウリン」の圧倒的な重量感と生命力。
              自然の息吹をそのまま形にしたライブエッジが、あなたの空間に静謐な品格をもたらします。
              100年の熟成を経て、新たな歴史を刻み始める一枚。
            </p>

            {/* Quick Specs */}
            <div className="grid grid-cols-3 gap-6 py-10 border-y border-white/5">
              <div className="text-center space-y-3">
                <Ruler className="mx-auto text-white/20" size={18} />
                <p className="text-[9px] font-bold tracking-[0.3em] text-white/30 uppercase">Size</p>
                <p className="text-xs font-light">180 × 90</p>
              </div>
              <div className="text-center space-y-3">
                <Shield className="mx-auto text-white/20" size={18} />
                <p className="text-[9px] font-bold tracking-[0.3em] text-white/30 uppercase">Armor</p>
                <p className="text-xs font-light">Iron Wood</p>
              </div>
              <div className="text-center space-y-3">
                <Clock className="mx-auto text-white/20" size={18} />
                <p className="text-[9px] font-bold tracking-[0.3em] text-white/30 uppercase">Life</p>
                <p className="text-xs font-light">Century</p>
              </div>
            </div>

            <div className="space-y-4">
              <button 
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`w-full py-7 rounded-2xl flex items-center justify-center gap-4 transition-all font-bold tracking-[0.4em] uppercase text-xs ${isAdded ? 'bg-green-600/20 text-green-400 border border-green-500/20' : 'bg-white text-black hover:scale-[1.02]'}`}
              >
                {isAdded ? (
                  <>
                    <CheckCircle2 size={18} />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart size={18} />
                    <span>Purchase Order</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Philosophy & Story Section */}
        <div className="space-y-48">
          {sections.map((section, idx) => (
            <motion.section 
              key={section.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-20 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <div className="space-y-8">
                  <h2 className="text-3xl font-light tracking-[0.3em] leading-tight">
                    {section.title}
                  </h2>
                  <div className="h-[1px] w-12 bg-white/20" />
                  <p className="text-white/40 leading-[2.4] font-light tracking-[0.1em] text-justify text-[15px]">
                    {section.content}
                  </p>
                </div>
              </div>
              <div className={`aspect-video rounded-[2rem] bg-white/[0.02] border border-white/5 relative overflow-hidden ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                 {/* Decorative background for story */}
                 <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-20" />
                 <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    {section.id === 'story' ? <Info size={120} /> : <Calendar size={120} />}
                 </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Technical Detail */}
        <section className="mt-48 pt-32 border-t border-white/5">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-light tracking-[0.3em] mb-16 underline decoration-white/10 underline-offset-[20px]">
              鉄の木、ウリン。
            </h2>
            <div className="space-y-12">
              <p className="text-white/40 leading-[2.4] font-light tracking-wide text-justify">
                東南アジアで「アイアンウッド（鉄の木）」と呼ばれるウリン。
                他の木材とは一線を画す圧倒的な密度を持ち、水に沈むほどの重量を誇ります。
                シロアリや腐朽菌を寄せ付けないポリフェノールを豊富に含み、
                屋外でも数十年にわたってその強度を維持し続ける、最強の木材です。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                <div className="flex gap-6 items-start">
                  <Droplets className="text-white/20 shrink-0" size={20} />
                  <div className="space-y-2">
                    <p className="text-xs font-bold tracking-widest text-white/60">圧倒的な耐水性</p>
                    <p className="text-[11px] text-white/30 leading-relaxed font-light">水を含んでも膨張や割れが少なく、常に安定した強度を維持します。</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <Shield className="text-white/20 shrink-0" size={20} />
                  <div className="space-y-2">
                    <p className="text-xs font-bold tracking-widest text-white/60">腐敗ゼロの歴史</p>
                    <p className="text-[11px] text-white/30 leading-relaxed font-light">港湾施設などで100年以上の使用に耐えうる実績が、その信頼を証明します。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
