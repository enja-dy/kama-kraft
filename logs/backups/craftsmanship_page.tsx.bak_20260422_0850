"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Ruler, Hammer, Heart, Shield, Sparkles, Compass } from "lucide-react";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function CraftsmanshipPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/craft-1-v2.png"
          alt="Artisan Workshop"
          fill
          className="object-cover opacity-60 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-7xl font-extralight tracking-[0.3em] mb-6 uppercase">Craftsmanship</h1>
            <p className="text-lg md:text-xl font-light tracking-[0.5em] text-white/80">
              魂は、細部に。人生を共にする、一点のために。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro: Philosophy */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <FadeIn>
          <div className="space-y-8 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-light tracking-widest leading-tight">
              木の声を聞く、<br className="md:hidden" />最初の一歩。
            </h2>
            <div className="h-[1px] w-20 bg-white/20 mx-auto md:mx-0" />
            <p className="text-white/70 leading-relaxed text-lg font-light">
              ウリン（鉄の木）には、一つとして同じ表情はありません。
              複雑に流れる木目、岩のような硬さ、そして僅かな曲がり。
              職人はまず、木材の前に静かに座り、その個性を対話するように見極めます。
              どこを切り出し、どう組めば、最も美しく、最も強く仕上がるのか。
              この「木取り」という工程に、KamaKraftの精神が凝縮されています。
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Precision Section */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-center text-xs tracking-[0.4em] text-white/40 uppercase mb-20">The Precision — 妥協なき精度</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
            <FeatureCard
              icon={<Ruler size={32} />}
              title="1cmの設計思想"
              description="鉄に匹敵する硬度を持つウリンを、1cm単位の緻密な設計で制御します。豪胆さと繊細さが同居するその計算が、空間に置いた瞬間の圧倒的な『収まり』の良さを生み出します。"
            />
            <FeatureCard
              icon={<Hammer size={32} />}
              title="魂を宿す構築"
              description="鉄に匹敵する硬度を持つウリンを、職人の確かな手技で一つひとつ丁寧に組み上げます。単なる接合を超え、木材の個性を引き出しながら形にするその工程が、他にはない唯一無二の品格を生み出します。"
            />
            <FeatureCard
              icon={<Sparkles size={32} />}
              title="究極の手ざわり"
              description="幾度もの研磨工程を経て、ウリンはシルクのような滑らかさを手に入れます。硬質な木材から生まれる意外なほどの温もりこそ、職人のこだわりの証です。"
            />
          </div>
        </div>
      </section>

      {/* Tools Section (Detail) */}
      <section className="relative py-32 flex flex-col md:flex-row-reverse items-center gap-16 overflow-hidden">
        <div className="w-full md:w-1/2 px-6 md:pr-20 space-y-8">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-light tracking-widest leading-tight">
              精密な道具、<br />研ぎ澄まされた感覚。
            </h2>
            <p className="text-white/60 leading-relaxed font-light text-lg">
              職人の耳に挟まれた鉛筆、手慣れた動作で繰り出されるメジャー。
              電ノコの鋭い回転音と、手作業による丁寧な紙やすりでの仕上げ。
              これらはウリンという最強の素材に命を吹き込むための、欠かせない相棒です。
              現代の精密機器と、人間の繊細な感覚が融合し、次世代へ受け継がれる家具が生まれます。
            </p>
          </FadeIn>
        </div>
        <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px]">
          <Image
            src="/craft-3-v2.png"
            alt="Modern Tools"
            fill
            className="object-cover md:rounded-r-3xl opacity-80"
          />
        </div>
      </section>

      {/* Lifetime Promise */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <FadeIn>
          <div className="inline-block p-4 rounded-full bg-white/5 mb-10">
            <Shield size={40} className="text-white/40" />
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-widest leading-tight mb-8">
            私たちが作るのは、<br />受け継がれる時間。
          </h2>
          <p className="text-white/50 leading-relaxed font-light text-lg max-w-2xl mx-auto">
            KamaKraftの家具に終わりはありません。
            数十年後に現れるシルバーグレーへの美しき変貌さえも、私たちは設計図の中に描き込んでいます。
            生涯を通した修理・メンテナンス体制。
            それは、職人が一生をかけてあなたの暮らしを見守り続けるという、私たちの誇り高き約束です。
          </p>
        </FadeIn>
      </section>

      {/* Joint Image (Aesthetic) */}
      <section className="relative py-20 px-6 max-w-6xl mx-auto">
        <FadeIn>
          <div className="relative aspect-video rounded-3xl overflow-hidden">
            <Image
              src="/craft-2.png"
              alt="Precision Joint"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60" />
            <div className="absolute bottom-10 left-10">
              <p className="text-xs tracking-[0.5em] text-white/40 uppercase">Aesthetic of Structure — 構造の美</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Creation: Custom Made */}
      <section className="py-32 bg-white/[0.02] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 space-y-8 relative z-10">
            <FadeIn>
              <div className="flex items-center gap-4 text-white/30 mb-4">
                <Compass size={24} />
                <span className="text-xs tracking-[0.3em] uppercase">Co-Creation</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-light tracking-widest leading-tight">
                あなたの想いを、<br />硬質な木に刻む。
              </h2>
              <p className="text-white/60 leading-relaxed font-light text-lg">
                お客様の「こんな暮らしがしたい」という漠然としたイメージを、職人が確かな技術で具現化します。
                スケッチから始まる対話、空間に合わせた1cm単位の調整。
                完全特注（オーダーメイド）という贅沢を、もっと身近に。
                職人と共に作り上げるプロセスそのものが、かけがえのない思い出となります。
              </p>
              <div className="pt-8 text-center md:text-left">
                <a
                  href="/contact"
                  className="inline-block px-12 py-4 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-500 tracking-[0.4em] text-xs font-light"
                >
                  職人へのご相談 — CONSULTATION
                </a>
              </div>
            </FadeIn>
          </div>
          <div className="w-full md:w-1/2 relative h-[500px]">
            <FadeIn>
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/craft-4.png"
                  alt="Design Sketch"
                  fill
                  className="object-cover opacity-90"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <FadeIn>
      <div className="space-y-6 group">
        <div className="text-white/30 group-hover:text-white transition-colors duration-500">
          {icon}
        </div>
        <h3 className="text-xl font-light tracking-wider">{title}</h3>
        <p className="text-white/50 leading-relaxed font-light text-sm">
          {description}
        </p>
      </div>
    </FadeIn>
  );
}
