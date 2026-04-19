"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, CheckCircle2, Ruler, Shield, Clock, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function UrinTablePage() {
  const [isAdded, setIsAdded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();

  const productImages = [
    "/product-urin-highangle-master.png", // Valid 589KB Master
    "/product-urin-front.png", // Valid 379KB Master
    "/product-urin-topdown.png", // Valid 538KB Master
    "/product-urin-side.png", // Valid 515KB Master
    "/product-urin-studio-highangle.png", // New Ultimate Master Rendering
  ];

  const handleAddToCart = () => {
    addToCart({
      id: "urin-standard-table-1",
      name: "The Standard Table \"URIN\"",
      price: 70000,
      image: "/product-urin-highangle-master.png",
      quantity: 1,
    });
    
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 3000);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase">Return to Collection</span>
        </Link>

        {/* Product Hero Section with Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Carousel Stage */}
          <div className="space-y-6">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/5 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  {productImages[currentImageIndex] ? (
                    <Image
                      src={productImages[currentImageIndex]}
                      alt={`Product Image ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      priority
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-white/[0.02]">
                      <span className="text-white/10 font-bold tracking-[0.5em] uppercase text-[10px] italic">Image {currentImageIndex + 1} Pending</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 backdrop-blur-md border border-white/5"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 backdrop-blur-md border border-white/5"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative w-24 flex-shrink-0 aspect-square rounded-xl overflow-hidden border-2 transition-all ${currentImageIndex === idx ? 'border-white opacity-100' : 'border-transparent opacity-30 hover:opacity-50'}`}
                >
                  {img ? (
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full bg-white/5" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Product Data */}
          <div className="flex flex-col justify-center space-y-12">
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-white/40 block">The Standard Series</span>
              <h1 className="text-3xl md:text-5xl font-extralight tracking-[0.2em] leading-tight">
                The Standard Table<br />
                <span className="italic">&quot;URIN&quot;</span>
              </h1>
              <div className="flex items-baseline gap-4 pt-4">
                <span className="text-3xl font-light tracking-tighter">¥70,000</span>
                <span className="text-xs text-white/20 uppercase tracking-widest italic">Tax included</span>
              </div>
            </div>

            <p className="text-white/60 leading-relaxed font-light text-lg">
              100年の熟成を経て、鎌倉の地で新たな命。
              アイアンウッド「ウリン」の圧倒的な重量感。
              自然の呼吸をそのまま形にしたライブエッジが、空間に唯一無二の品格を与えます。
            </p>

            <div className="grid grid-cols-3 gap-8 py-8 border-y border-white/5">
              <div className="text-center space-y-2">
                <Ruler className="mx-auto text-white/20" size={20} />
                <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Size</p>
                <p className="text-sm font-light">180×90</p>
              </div>
              <div className="text-center space-y-2">
                <Shield className="mx-auto text-white/20" size={20} />
                <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Armor</p>
                <p className="text-sm font-light">Iron Wood</p>
              </div>
              <div className="text-center space-y-2">
                <Clock className="mx-auto text-white/20" size={20} />
                <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Life</p>
                <p className="text-sm font-light">Century</p>
              </div>
            </div>

            <div className="space-y-4">
              <button 
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`w-full py-6 rounded-xl flex items-center justify-center gap-3 transition-all font-bold tracking-[0.3em] uppercase text-xs ${isAdded ? 'bg-green-600 text-white' : 'bg-white text-black hover:bg-white/90'}`}
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

        {/* Sub Information Sections - Consistent with restored content */}
        <section className="space-y-32">
          {/* Material Detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-light tracking-widest">鉄の木、ウリン。</h2>
              <div className="h-[1px] w-12 bg-white/20" />
              <p className="text-white/40 leading-relaxed font-light">
                東南アジアで「アイアンウッド（鉄の木）」と呼ばれるウリン。
                他の木材とは一線を画す圧倒的な密度を持ち、水に沈むほどの重量を誇ります。
                シロアリや腐朽菌を寄せ付けないポリフェノールを豊富に含み、
                屋外でも数十年にわたってその強度を維持し続ける、最強の木材です。
              </p>
              <div className="flex gap-12 pt-4">
                <div className="space-y-1">
                  <div className="text-xl font-bold">1200+</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">Gravity (kg/m3)</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xl font-bold">Grade A</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">Resilience</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 bg-white/5">
              <Image
                src="/product-urin-macro.png"
                alt="Ulin Texture"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Aging Detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center flex-row-reverse">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 md:order-last bg-white/5">
              <Image
                src="/product-urin-topdown.png"
                alt="Ulin Topdown Pattern"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-light tracking-widest">シルバーグレーへの、物語。</h2>
              <div className="h-[1px] w-12 bg-white/20" />
              <p className="text-white/40 leading-relaxed font-light">
                ウリンは、時間の経過と共に重厚な赤褐色から、美しいシルバーグレー（銀白色）へと変化していきます。
                これは天然の酸化被膜によるもので、木材の強度が落ちたわけではありません。
                色が変わるたびに深まる表情は、あなたと共に年を重ね、
                このテーブルが真の「家族の一員」になった証となります。
              </p>
            </div>
          </div>

          {/* Structural Detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center pb-24">
            <div className="space-y-8">
              <h2 className="text-3xl font-light tracking-widest">揺るぎない、構造。</h2>
              <div className="h-[1px] w-12 bg-white/20" />
              <p className="text-white/40 leading-relaxed font-light">
                ハの字型に設計された堅牢な脚部フレームは、重量級のウリン天板を確実に支え、
                何世代にもわたって使い続けられる安定性を提供します。
                接合部には伝統的な木組みの知恵と現代の技術を融合。
                見た目の美しさだけでなく、家具としての「道具的完成度」を追求しました。
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 bg-white/5">
              <Image
                src="/product-urin-side.png"
                alt="Ulin Structure"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
