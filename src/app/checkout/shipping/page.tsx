"use client";

import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Truck, MapPin, User, Phone } from "lucide-react";

export default function ShippingPage() {
  const { cart, totalPrice } = useCart();

  const formattedPrice = (price: number) => 
    new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(price);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-[#fbfbfb] dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left: Shipping Form */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link href="/checkout/auth" className="text-xs tracking-widest text-foreground/40 hover:text-foreground transition-colors flex items-center gap-2 mb-8 uppercase">
                <ArrowLeft size={14} /> 戻る
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">お届け先情報の入力</h1>
              <p className="text-foreground/60 text-sm">職人の手仕事を丁寧にお届けするため、正確な情報をご記入ください。</p>
            </motion.div>

            {/* Stepper */}
            <div className="flex items-center gap-4 text-[10px] tracking-[0.2em] font-bold uppercase overflow-x-auto pb-4">
              <span className="text-[#3d2b1f] border-b-2 border-[#3d2b1f] pb-1">01. お届け先</span>
              <span className="text-foreground/20">02. お支払い</span>
              <span className="text-foreground/20">03. 注文確認</span>
            </div>

            <form className="space-y-10">
              {/* Contact Section */}
              <section className="space-y-6">
                <div className="flex items-center gap-3 text-lg font-bold tracking-tight">
                  <User size={20} className="text-[#3d2b1f]" />
                  <h2>お客様情報</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-foreground/40">お名前</label>
                    <input type="text" placeholder="鎌倉 太郎" className="w-full bg-white dark:bg-white/5 border border-foreground/10 p-4 rounded-xl focus:border-[#3d2b1f] outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-foreground/40">メールアドレス</label>
                    <input type="email" placeholder="kamakura@example.com" className="w-full bg-white dark:bg-white/5 border border-foreground/10 p-4 rounded-xl focus:border-[#3d2b1f] outline-none transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-foreground/40">電話番号</label>
                  <div className="flex items-center bg-white dark:bg-white/5 border border-foreground/10 rounded-xl focus-within:border-[#3d2b1f] transition-colors p-1">
                    <div className="p-3 text-foreground/40"><Phone size={18} /></div>
                    <input type="tel" placeholder="090-0000-0000" className="w-full bg-transparent border-none p-3 outline-none" />
                  </div>
                </div>
              </section>

              {/* Address Section */}
              <section className="space-y-6">
                <div className="flex items-center gap-3 text-lg font-bold tracking-tight">
                  <MapPin size={20} className="text-[#3d2b1f]" />
                  <h2>お届け先</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1 space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-foreground/40">郵便番号</label>
                    <input type="text" placeholder="248-0000" className="w-full bg-white dark:bg-white/5 border border-foreground/10 p-4 rounded-xl focus:border-[#3d2b1f] outline-none transition-colors" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-foreground/40">都道府県</label>
                    <select className="w-full bg-white dark:bg-white/5 border border-foreground/10 p-4 rounded-xl focus:border-[#3d2b1f] outline-none transition-colors appearance-none">
                      <option>神奈川県</option>
                      <option>東京都</option>
                      {/* 他の都道府県は省略 */}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-foreground/40">市区町村・番地</label>
                  <input type="text" placeholder="鎌倉市雪ノ下 1-2-3" className="w-full bg-white dark:bg-white/5 border border-foreground/10 p-4 rounded-xl focus:border-[#3d2b1f] outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-foreground/40">建物名・部屋番号（任意）</label>
                  <input type="text" placeholder="鎌倉ヒルズ 101" className="w-full bg-white dark:bg-white/5 border border-foreground/10 p-4 rounded-xl focus:border-[#3d2b1f] outline-none transition-colors" />
                </div>
              </section>

              <div className="pt-10">
                <button type="button" className="w-full md:w-auto min-w-[300px] bg-foreground text-background py-5 px-12 flex items-center justify-center gap-3 hover:scale-[1.02] transition-all font-bold tracking-[0.2em] text-xs uppercase shadow-xl shadow-foreground/10">
                  配送方法の選択へ
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>
          </div>

          {/* Right: Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-white/5 p-8 rounded-3xl border border-foreground/5 sticky top-32"
            >
              <div className="flex items-center gap-3 mb-8 pb-8 border-b border-foreground/5">
                <Truck size={20} className="text-[#3d2b1f]" />
                <h2 className="text-xl font-bold tracking-tight">注文内容の確認</h2>
              </div>
              
              <div className="space-y-6 mb-8 overflow-y-auto max-h-[40vh] pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="relative w-16 h-16 bg-gray-100 dark:bg-white/5 rounded-lg overflow-hidden shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-sm font-bold truncate">{item.name}</p>
                      <p className="text-[10px] text-foreground/40 uppercase font-bold">数量: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-medium">{formattedPrice(item.price * item.quantity)}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-8 border-t border-foreground/10">
                <div className="flex justify-between text-foreground/60 text-xs tracking-widest uppercase">
                  <span>小計</span>
                  <span>{formattedPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-foreground/60 text-xs tracking-widest uppercase">
                  <span>配送料</span>
                  <span className="text-green-600 font-bold">無料</span>
                </div>
                <div className="pt-6 mt-6 border-t border-foreground/10 flex justify-between text-xl font-bold tracking-tighter">
                  <span>合計 (税込)</span>
                  <span>{formattedPrice(totalPrice)}</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-[#3d2b1f]/5 rounded-xl border border-[#3d2b1f]/10">
                <p className="text-[9px] text-foreground/50 leading-relaxed text-center italic">
                  鎌倉の工房から、専門の配送業者が<br />
                  丁寧梱包でお届けいたします。
                </p>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
