"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, CheckCircle2, Ruler, Shield, Clock, ArrowLeft } from "lucide-react";
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Main Image View */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/5"
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

          {/* Product Data */}
          <div className="space-y-12">
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

        {/* Sub Information */}
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
