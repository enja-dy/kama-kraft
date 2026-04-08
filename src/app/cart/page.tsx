"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Minus, Plus, ArrowRight, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  const formattedPrice = (price: number) => 
    new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(price);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-[#fbfbfb] dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-4">
            カートの中身
          </h1>
          <p className="text-foreground/40 tracking-[0.2em] text-sm uppercase">鎌倉の職人が真心込めて仕上げた、あなただけの逸品</p>
        </motion.div>

        {cart.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-32 border-t border-foreground/10"
          >
            <ShoppingBag size={48} className="mb-8 text-foreground/20" />
            <p className="text-xl text-foreground/60 mb-8 font-light italic text-[#3d2b1f]/60 dark:text-white/40">カートにはまだ魂のピースがありません。</p>
            <Link 
              href="/"
              className="bg-foreground text-background px-8 py-4 tracking-widest text-sm font-bold hover:scale-105 transition-transform"
            >
              名作を閲覧する
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-8">
              <AnimatePresence mode="popLayout">
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col md:flex-row gap-8 pb-8 border-b border-foreground/10 items-center justify-between"
                  >
                    <div className="flex gap-8 items-center w-full">
                      <div className="relative w-32 h-32 bg-gray-100 dark:bg-white/5 rounded-lg overflow-hidden shrink-0 group">
                        <Image src={item.image} alt={item.name} fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-700" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold tracking-tight">{item.name}</h3>
                        <p className="text-foreground/40 text-[10px] tracking-[0.2em] uppercase font-bold">最高級ウリン材</p>
                        <p className="text-lg font-medium pt-2">{formattedPrice(item.price)}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-12 w-full md:w-auto justify-between md:justify-end">
                      <div className="flex items-center border border-foreground/10 rounded-full px-4 py-2 gap-6 bg-white/5">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="hover:text-red-500 transition-colors disabled:opacity-20"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-bold text-lg">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="hover:text-green-500 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-foreground/20 hover:text-red-500 transition-all hover:rotate-12"
                      >
                        <Trash2 size={24} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="lg:col-span-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-foreground/5 sticky top-32 backdrop-blur-sm"
              >
                <h2 className="text-2xl font-bold tracking-tight mb-8">ご注文内容</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-foreground/60 text-sm tracking-widest uppercase">
                    <span>商品合計</span>
                    <span>{formattedPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-foreground/60 text-sm tracking-widest uppercase">
                    <span>送料</span>
                    <span className="italic normal-case text-xs opacity-50 text-green-600">無料</span>
                  </div>
                  <div className="pt-6 mt-6 border-t border-foreground/10 flex justify-between text-2xl font-bold tracking-tighter">
                    <span>合計</span>
                    <span>{formattedPrice(totalPrice)}</span>
                  </div>
                </div>
                
                <button className="w-full bg-foreground text-background py-5 px-8 flex items-center justify-center gap-3 hover:scale-[1.02] transition-all group active:scale-[0.98] font-bold tracking-[0.2em] text-xs">
                  購入手続きへ進む
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="mt-6 text-[8px] text-foreground/30 text-center tracking-[0.3em] uppercase">
                  職人の誇りに基づく安全な決済
                </p>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
