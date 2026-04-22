"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, ArrowRight, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { products } from "@/constants/products";

export const FeaturedProduct = () => {
  const { addToCart } = useCart();
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.thumbnail || product.images[0],
      quantity: 1,
    });
    
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 3000);
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(61,43,31,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Toast Notification */}
      <AnimatePresence>
        {addedProductId && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-12 left-1/2 z-[100] bg-white text-black py-4 px-10 rounded-full shadow-[0_20px_50px_rgba(255,255,255,0.2)] flex items-center gap-4 backdrop-blur-xl border border-white/20"
          >
            <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
              <CheckCircle2 size={14} className="text-white" />
            </div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase">カートに追加しました</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-xs font-bold tracking-[0.5em] text-white/30 uppercase block"
          >
            Artisan Collections
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-extralight tracking-[0.2em] text-white"
          >
            職人の魂が宿る、三つの造形。
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "40px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-px bg-white/20 mx-auto mt-8"
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-white/5 rounded-sm mb-8">
                {/* Product Image */}
                <Image
                  src={product.thumbnail || product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-[2s] cubic-bezier(0.2, 1, 0.3, 1) group-hover:scale-110"
                  style={{ objectPosition: product.objectPosition || "center" }}
                />
                
                {/* Whole Image Detail Link Overlay */}
                <Link 
                  href={`/products/${product.slug}`}
                  className="absolute inset-0 z-10"
                />

                {/* --- RESTORED: Quick Action Buttons Overlay --- */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                  <div className="flex gap-2">
                    <Link 
                      href={`/products/${product.slug}`}
                      className="flex-1 bg-black/40 backdrop-blur-md text-white py-4 flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 transition-all rounded-sm"
                    >
                      <ArrowRight size={14} />
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase">詳細をみる</span>
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product);
                      }}
                      disabled={addedProductId === product.id}
                      className="flex-1 bg-white text-black py-4 flex items-center justify-center gap-2 shadow-2xl hover:bg-white/90 transition-colors rounded-sm"
                    >
                      <ShoppingCart size={14} />
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">
                        {addedProductId === product.id ? "追加しました" : "カートに"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6 text-center px-2">
                <div className="space-y-1">
                  <h3 className="text-lg md:text-xl font-light tracking-widest text-white group-hover:text-white/80 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[10px] tracking-[0.2em] text-white/30 uppercase font-medium">
                    {product.series}
                  </p>
                </div>
                
                <div>
                  <div className="text-sm md:text-base font-medium tracking-widest text-white/80">
                    <span className="text-[10px] mr-2 opacity-40">¥</span>
                    {product.price.toLocaleString()}
                    <span className="text-[9px] ml-2 opacity-40 font-bold uppercase">（税込）</span>
                  </div>
                </div>

                {/* Permanent Buttons Below Price (As per instructions) */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Link 
                    href={`/products/${product.slug}`}
                    className="border border-white/10 hover:border-white/30 text-white/40 hover:text-white py-4 px-2 text-[9px] font-bold tracking-[0.2em] uppercase transition-all duration-500 flex items-center justify-center gap-2 rounded-sm"
                  >
                    <ArrowRight size={14} />
                    詳細をみる
                  </Link>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(product);
                    }}
                    disabled={addedProductId === product.id}
                    className="bg-white text-black py-4 px-2 text-[9px] font-bold tracking-[0.1em] uppercase hover:bg-white/90 transition-all flex items-center justify-center gap-2 rounded-sm shadow-md shadow-white/5 active:scale-95"
                  >
                    <ShoppingCart size={14} />
                    <span className="whitespace-nowrap">
                      {addedProductId === product.id ? "追加しました" : "カートに入れる"}
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
