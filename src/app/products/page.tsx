"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Ruler, MapPin } from "lucide-react";
import { products } from "@/constants/products";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-20 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extralight tracking-[0.2em] uppercase">
            Collection
          </h1>
          <div className="h-[1px] w-24 bg-white/20" />
          <p className="text-white/60 text-lg font-light tracking-widest max-w-2xl leading-relaxed">
            鎌倉の職人が、アイアンウッド「ウリン」に命を吹き込んだ一点物の数々。
            時を重ねるごとに深まる風格、一生を共にするための強さを、その手に。
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[2rem] overflow-hidden">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-[#050505] overflow-hidden"
            >
              <Link href={`/products/${product.slug}`} className="block">
                {/* Image Stage */}
                <div className="relative aspect-[4/5] md:aspect-square overflow-hidden">
                    <Image
                      src={product.thumbnail || product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      unoptimized
                      style={{ objectPosition: product.objectPosition || 'center' }}
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Specs */}
                  <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                    <div className="space-y-2">
                       <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-bold block">
                        {product.series}
                      </span>
                      <h2 className="text-2xl font-light tracking-wide">{product.name}</h2>
                    </div>
                    <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-white/40">
                      <div className="flex items-center gap-2">
                        <Ruler size={14} />
                        <span className="text-[10px] font-bold tracking-widest uppercase">Size</span>
                      </div>
                      <span className="text-xs font-light">{product.specs[0].value}</span>
                    </div>
                    <span className="text-xl font-light tracking-tighter">¥{product.price.toLocaleString()}</span>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <MapPin size={14} className="text-white/40" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Artisan</p>
                      <p className="text-xs font-light tracking-wider">{product.artisan.name}（{product.artisan.location}）</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-32 text-center p-20 bg-white/[0.02] rounded-[3rem] border border-white/5">
          <h3 className="text-2xl md:text-3xl font-light tracking-[0.3em] mb-8 italic">
            Your unique vision, made real.
          </h3>
          <p className="text-white/40 text-sm max-w-xl mx-auto mb-12 leading-relaxed">
            理想のサイズ、こだわりの形状。KamaKraftでは1cm単位でのオーダーメイドを承っております。
            現在、シミュレーターにて概算お見積りも可能です。
          </p>
          <Link 
            href="/custom-order"
            className="inline-flex items-center gap-4 px-12 py-5 rounded-full bg-white text-black text-xs font-bold tracking-[0.4em] uppercase hover:scale-105 active:scale-95 transition-all"
          >
            シミュレーターを試す <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
