"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const FeaturedProduct = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: "heritage-coffee-table-1",
      name: "Heritage Coffee Table",
      price: 450000,
      image: "/product-1.png",
      quantity: 1,
    });
  };

  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="w-full lg:w-3/5 aspect-square relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900"
          >
            <Image
              src="/product-1.png"
              alt="Heritage Coffee Table - Ulin Edition"
              fill
              className="object-contain p-8 transform hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>

          {/* Product Info */}
          <div className="w-full lg:w-2/5 space-y-10">
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs font-bold tracking-[0.4em] text-[#3d2b1f] dark:text-white/40 uppercase"
              >
                鎌倉の職人が贈る、一生ものの家具
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]"
              >
                Heritage Coffee Table<br />
                <span className="text-2xl md:text-3xl font-light italic text-[#3d2b1f]/60 dark:text-white/40">ウリン・エディション</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg leading-relaxed text-foreground/70 text-justify"
            >
              100年の封印を解かれた、ウリンの息吹。
              圧倒的な厚みと密度を誇る「鉄の木」から削り出された、世界に一点だけのヘリテージ・コーヒーテーブル。
              自然が描いたライブエッジ（耳付き）の有機的なラインと、アイアンウッド特有の重厚な赤褐色のコントラストが、リビングルームに圧倒的な品格と野生の静寂をもたらします。
              世代を超えて受け継がれる、真の資産価値を持つ名作です。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="space-y-6 pt-4 border-t border-gray-100 dark:border-white/5"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-bold">¥450,000</span>
                <span className="text-sm text-foreground/40 italic">税込</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-foreground/60">
                <div className="flex flex-col gap-1">
                  <span className="uppercase tracking-widest text-[10px] font-bold opacity-50">サイズ</span>
                  <span>180cm × 90cm × 厚さ6cm</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="uppercase tracking-widest text-[10px] font-bold opacity-50">重量</span>
                  <span>約 120kg</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#3d2b1f] text-white py-5 px-8 flex items-center justify-center gap-3 hover:bg-black transition-all group active:scale-[0.98]"
                >
                  <ShoppingCart size={20} className="group-hover:rotate-12 transition-transform" />
                  <span className="text-sm tracking-widest font-bold">カートに入れる</span>
                </button>
                <button className="flex-1 border border-foreground/20 text-foreground py-5 px-8 flex items-center justify-center gap-3 hover:bg-foreground/5 transition-all group active:scale-[0.98]">
                  <span className="text-sm tracking-widest font-bold">詳細を見る</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
