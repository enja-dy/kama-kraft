"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Placeholder data for initial articles
const articles = [
  {
    slug: "why-ulin-is-ironwood",
    title: "なぜウリンは「鉄の木」と呼ばれるのか？ 科学的根拠とポリフェノールの秘密",
    date: "2024.04.22",
    category: "ウリン豆知識",
    thumbnail: "/product-urin-all-weather-master.png"
  },
  {
    slug: "custom-furniture-kamakura",
    title: "鎌倉で叶える、一生モノのオーダーメイド家具選び",
    date: "2024.04.20",
    category: "家具選び",
    thumbnail: "/maint-2.png"
  },
  {
    slug: "seaside-living-salt-damage",
    title: "海辺の暮らしを豊かに。潮風に負けないインテリアの選び方",
    date: "2024.04.18",
    category: "インテリア",
    thumbnail: "/product-v-leg.jpg"
  }
];

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] md:text-xs font-bold tracking-[0.5em] text-white/30 uppercase block text-center md:text-left"
          >
            Kamakura Furniture Wisdom
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extralight tracking-[0.2em] text-white text-center md:text-left"
          >
            鎌倉・家具座の知恵
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ delay: 0.4, duration: 1 }}
            className="h-px bg-white/20 mx-auto md:mx-0"
          />
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="group"
            >
              <Link href={`/journal/${article.slug}`} className="block space-y-6">
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-white/5">
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/40 backdrop-blur-md text-white/80 py-1.5 px-3 text-[9px] font-bold tracking-[0.1em] uppercase border border-white/10">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <time className="text-[10px] text-white/30 font-bold tracking-widest">
                    {article.date}
                  </time>
                  <h2 className="text-lg font-light leading-relaxed text-white group-hover:text-white/70 transition-colors">
                    {article.title}
                  </h2>
                  <div className="flex items-center gap-2 pt-2 text-[10px] text-white/50 font-bold tracking-[0.2em] uppercase">
                    READ MORE
                    <div className="h-px w-4 bg-white/20 group-hover:w-8 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
