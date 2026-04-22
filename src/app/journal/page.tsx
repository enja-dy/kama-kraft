"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Populated with 7 SEO-optimized titles for "Ulin Knowledge"
const articles = [
  {
    slug: "why-ulin-durability-100-years",
    title: "「鉄の木」ウリンの驚愕の耐久性とは？100年腐らない理由を徹底検証",
    date: "2024.04.22",
    category: "ウリン豆知識",
    thumbnail: "/journal/why-ulin-durability.png"
  },
  {
    slug: "ulin-aging-silver-gray-guide",
    title: "ウリン材の経年変化完全ガイド：赤褐色から美しいシルバーグレーへ変わる過程と維持のコツ",
    date: "2024.04.18",
    category: "ウリン豆知識",
    thumbnail: "/maint-2.png"
  },
  {
    slug: "strongest-wood-salt-damage-termites",
    title: "シロアリ・塩害に最強の木材はどれ？海辺のテラスや湿気地で「ウリン」が選ばれる理由",
    date: "2024.04.15",
    category: "ウリン豆知識",
    thumbnail: "/product-v-leg.jpg"
  },
  {
    slug: "ulin-maintenance-essential-tips",
    title: "ウリンのメンテナンスは本当に不要？数十年使い続けるための正しいお手入れ術",
    date: "2024.04.11",
    category: "ウリン豆知識",
    thumbnail: "/ulin-majestic-origin.png"
  },
  {
    slug: "hardwood-comparison-ulin-ipe",
    title: "【比較】ウリン vs イペ vs セランガンバツ。ハードウッド選びで失敗しないための決定版",
    date: "2024.04.08",
    category: "ウリン豆知識",
    thumbnail: "/charms-3_2.png"
  },
  {
    slug: "ulin-sap-stain-prevention",
    title: "ウリンの「赤い樹液（アク）」対策。汚れを落とす方法と、施工前に知っておくべき注意点",
    date: "2024.04.05",
    category: "ウリン豆知識",
    thumbnail: "/order-precision-ulin.png"
  },
  {
    slug: "borneo-ulin-asset-value",
    title: "世界最強の希少木材。ボルネオ産「本ウリン」の資産価値と、一生モノの家具を選ぶ意義",
    date: "2024.04.01",
    category: "ウリン豆知識",
    thumbnail: "/product-urin-all-weather-seaside.png"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
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
