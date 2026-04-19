"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Droplets, Clock, AlertTriangle, Hammer, Sparkles } from "lucide-react";

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

export default function AboutUlinPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/ulin-1.png"
          alt="Ulin Forest"
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
            <h1 className="text-3xl md:text-5xl font-extralight tracking-[0.4em] mb-6">ULIN</h1>
            <p className="text-lg md:text-2xl font-light tracking-[0.5em] text-white/80">
              水に沈む、鉄の木。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro: Knowledge */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <FadeIn>
          <div className="space-y-8 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-light tracking-widest leading-tight">
              ウリンとは？
            </h2>
            <div className="h-[1px] w-20 bg-white/20 mx-auto md:mx-0" />
            <p className="text-white/70 leading-relaxed text-lg font-light">
              ウリンは、東南アジア原産の非常に珍しい木材です。
              普通の木は水に浮きますが、ウリンはあまりに密度が高く重いため、
              <span className="text-white font-medium border-b border-white/40 pb-1 mx-1">水に入れると石のように沈みます。</span>
              その圧倒的な硬さから、世界中で「アイアンウッド（鉄の木）」と呼ばれ、
              最強の耐久性を持つ木として愛されています。
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Pros Section */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-center text-xs tracking-[0.4em] text-white/40 uppercase mb-20">The Merits — ウリンの凄さ</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
            <FeatureCard 
              icon={<Shield size={32} />}
              title="腐らない・虫に負けない"
              description="ウリンには「ポリフェノール」という成分がたっぷりと詰まっています。これが強力な防腐・防虫効果を発揮し、シロアリや菌を寄せ付けません。"
            />
            <FeatureCard 
              icon={<Droplets size={32} />}
              title="水に浸かっても大丈夫"
              description="驚くことに、海の中でも腐りにくい性質があります。そのため、桟橋やディズニーシーのデッキなど、厳しい環境下で使われています。"
            />
            <FeatureCard 
              icon={<Clock size={32} />}
              title="100年の寿命"
              description="一般的なウッドデッキは10年ほどで腐りますが、ウリンは塗装をしなくても30年〜50年、手入れ次第では100年持つと言われています。"
            />
          </div>
        </div>
      </section>

      {/* Cons (Realities) Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-center text-xs tracking-[0.4em] text-white/40 uppercase mb-16">The Realities — 知っておいてほしいこと</h2>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 space-y-8">
            <div className="flex items-start gap-6">
              <div className="mt-1 text-white/40"><AlertTriangle size={24} /></div>
              <div className="space-y-4">
                <h3 className="text-xl font-light tracking-wider">「赤い涙」が出ます</h3>
                <p className="text-white/50 leading-relaxed font-light">
                  使い始めの時期、雨が降ると木の中から赤い成分（ポリフェノール）が溶け出すことがあります。
                  これが地面を汚すことがありますが、<span className="text-white/80 font-normal">害はなく、家庭用洗剤や塩素系漂白剤で簡単に落とせます。</span>
                  数ヶ月で落ち着く、ウリンが健康である証拠です。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="mt-1 text-white/40"><Hammer size={24} /></div>
              <div className="space-y-4">
                <h3 className="text-xl font-light tracking-wider">硬すぎて、扱いが困難です</h3>
                <p className="text-white/50 leading-relaxed font-light">
                  非常に硬いため、釘を打とうとしても釘が曲がってしまいます。
                  加工には特殊な刃物と、熟練の職人の技術が必要です。
                  <span className="text-white/80 font-normal">素人には扱えない「職人泣かせ」の素材</span>ですが、その分完成した時の強度は他に類を見ません。
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Silver Gray Transition */}
      <section className="relative py-32 flex flex-col md:flex-row items-center gap-16 overflow-hidden">
        <div className="w-full md:w-1/2 px-6 md:pl-20 space-y-8">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-light tracking-widest leading-tight">
              銀白色への美しき変貌
            </h2>
            <p className="text-white/60 leading-relaxed font-light text-lg">
              ウリンは最初は重厚な赤褐色をしていますが、太陽の光を浴び続けることで、
              <span className="text-white italic">シルバーグレー（銀白色）</span>へと変化していきます。
              これは表面が酸化することで起こる「天然のコーティング」です。
              色は変わっても、中の強さはビクともしません。
              この色の変化を「深化」として楽しむのが、本物のウリン通の楽しみ方です。
            </p>
          </FadeIn>
        </div>
        <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px]">
          <Image
            src="/ulin-4.png"
            alt="Weathered Ulin"
            fill
            className="object-cover md:rounded-l-3xl opacity-80"
          />
        </div>
      </section>

      {/* Deck to Furniture (KamaKraft Mission) */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-1/2 space-y-8">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-light tracking-widest leading-tight">
                高級ウッドデッキから、<br />極上の家具へ。
              </h2>
              <p className="text-white/60 leading-relaxed font-light text-lg">
                これほどまでに頑丈なウリンは、これまで主に「高級ホテルのウッドデッキ」や「公共施設の外構」として使われてきました。
                しかし私たちKamaKraftは、この最強の素材を **「一生ものの室内外兼用家具」** として昇華させました。
                全天候型でありながら、室内に置いても美しい。
                この挑戦は、日本国内でも極めて稀な取り組みです。
              </p>
            </FadeIn>
          </div>
          <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px]">
            <Image
              src="/ulin-2.png"
              alt="Ulin Luxury Deck"
              fill
              className="object-cover rounded-3xl opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Artisan & Order Made */}
      <section className="py-32 bg-white/[0.02] relative overflow-hidden">
        <Image
          src="/ulin-3.png"
          alt="Artisan hands"
          fill
          className="object-cover opacity-10 blur-sm flex md:hidden"
        />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
          <FadeIn>
            <div className="flex justify-center mb-10">
              <Sparkles size={48} className="text-white/20 animate-pulse" />
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-widest leading-tight">
              鎌倉の息吹を、あなただけの形に。
            </h2>
            <p className="text-white/70 leading-relaxed font-light max-w-2xl mx-auto text-lg">
              KamaKraftでは、この強固なウリンを一点一点、熟練の職人が手作業で切り出し、組み上げます。
              既製品では得られない、あなたの生活にぴったり寄り添う**オーダーメイド（特注製作）**も承っております。
              一生を共にする家具。その重みと温もりを、ぜひ手にとって感じてください。
            </p>
            <div className="pt-12">
              <a 
                href="/contact"
                className="inline-block px-12 py-4 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-500 tracking-[0.4em] text-xs font-light"
              >
                オーダーメイドのご相談 — CONTACT
              </a>
            </div>
          </FadeIn>
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
