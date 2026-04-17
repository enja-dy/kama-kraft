"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Droplets, Sun, Wind, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";

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

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden pb-32">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/maint-1.png"
          alt="Gentle Maintenance"
          fill
          className="object-cover opacity-60 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-7xl font-extralight tracking-[0.2em] mb-8 uppercase">Maintenance</h1>
            <p className="text-lg md:text-2xl font-light tracking-[0.4em] text-white/90 leading-relaxed uppercase">
              手入れを愛でる。<br className="md:hidden" />時を刻む、美しき作法。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro: Philosophy */}
      <section className="py-32 px-6 max-w-4xl mx-auto space-y-12">
        <FadeIn>
          <div className="space-y-8 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-light tracking-widest leading-tight">
              育てるという、<br className="md:hidden" />究極の贅沢。
            </h2>
            <div className="h-[1px] w-20 bg-white/20 mx-auto md:mx-0" />
            <p className="text-white/70 leading-relaxed text-lg font-light">
              KamaKraftがお届けするウリン家具に、決まったメンテナンス周期はありません。
              なぜならウリン（鉄の木）は、人間よりも長い時を生き抜く、圧倒的な生命力を持っているからです。
              日々の手入れは、修理のためではなく、あなたと家具の絆を深めるための対話。
              手で触れ、汚れを拭う。その僅かな時間が、無垢の木に唯一無二の気品を吹き込みます。
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Aging Section */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-24">
              <h2 className="text-xs tracking-[0.4em] text-white/40 uppercase mb-4">The Art of Aging</h2>
              <h3 className="text-3xl font-light tracking-widest">銀白色への、気高き昇華。</h3>
            </div>
            
            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-16 shadow-2xl">
              <Image
                src="/maint-2.png"
                alt="Aging Process"
                fill
                className="object-cover opacity-80"
              />
            </div>
            
            <p className="text-center text-white/50 max-w-3xl mx-auto leading-relaxed font-light">
              太陽と風、そして雨。自然の洗礼を受けることで、ウリンは深い赤褐色から、高貴な「シルバーグレー（銀白色）」へと姿を変えていきます。
              これは表面が酸化し、木が自らを守るための「鎧」を纏った証。
              割れや反りさえも、自然と共に生きる姿として受け入れる。それこそが、ウリンを選ぶ方の、成熟した美学です。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Practical Guide: Red Tears */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20">
          <div className="space-y-8">
            <FadeIn>
              <div className="inline-flex items-center gap-3 text-white/30 mb-4">
                <Droplets size={24} />
                <span className="text-xs tracking-[0.3em] uppercase">Red Patina Management</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-light tracking-widest leading-tight">
                「赤い涙」との、<br />健やかな付き合い。
              </h2>
              <p className="text-white/60 leading-relaxed font-light text-lg">
                使い始めの時期、雨が降るとウリンから赤褐色の液体（ポリフェノール）が溶け出すことがあります。
                私たちはこれを「赤い涙」と呼びます。
                もし床面などが汚れても、ご安心ください。中性洗剤や、コンクリートであれば薄めた塩素系漂白剤で、驚くほど簡単に落とすことができます。
                この溶出はやがて収まり、銀色の静寂が訪れます。
              </p>
            </FadeIn>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden order-first md:order-last">
            <FadeIn>
              <Image
                src="/maint-4.png"
                alt="Noble Gray Chair"
                fill
                className="object-cover opacity-70"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Care Items & Methods */}
      <section className="py-32 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <FadeIn>
                <Image
                  src="/maint-3.png"
                  alt="Care Items"
                  fill
                  className="object-cover opacity-90"
                />
              </FadeIn>
            </div>
            <div className="space-y-16">
              <FadeIn>
                <h2 className="text-3xl md:text-5xl font-light tracking-widest">
                  愛着を深める、<br />最小限の道具。
                </h2>
              </FadeIn>
              
              <div className="space-y-12">
                <CareStep 
                  number="01"
                  title="日常の清掃"
                  content="柔らかい布での乾拭き、あるいは水拭き。特別な薬剤は不要です。木の温もりを感じながら、表面を整えるだけで十分です。"
                />
                <CareStep 
                  number="02"
                  title="汚れの除去"
                  content="落ちにくい汚れは、薄めた中性洗剤を含ませた布で拭き取ってください。自然の成分だけで作られた石鹸は、ウリンとの相性も抜群です。"
                />
                <CareStep 
                  number="03"
                  title="輝きの再生"
                  content="どうしても元の赤褐色を取り戻したい場合は、#240程度のサンドペーパーで表面を軽く磨いてください。内側から鮮やかな色が、再び瑞々しく蘇ります。"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Declaration (No repair needed) */}
      <section className="py-40 px-6 max-w-4xl mx-auto text-center">
        <FadeIn>
          <div className="inline-block p-4 rounded-full bg-white/5 mb-10">
            <ShieldCheck size={40} className="text-white/40" />
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-widest leading-tight mb-8 uppercase text-white/90">
            修理を、<br />必要としない品質。
          </h2>
          <p className="text-white/50 leading-relaxed font-light text-lg max-w-2xl mx-auto">
            KamaKraftでは、あえて修理・メンテナンスの委託サービスを行っておりません。
            それは、適切なお手入れさえあれば、修理が必要なほど劣化することがないという、ウリンの絶対的な品質に対する誇りの証です。
            一生を、そして世代を超えて。
            自分で育て、共に歩む家具。それがKamaKraftの提案する、究極のサステナビリティです。
          </p>
        </FadeIn>
      </section>

      {/* Contact Link */}
      <section className="py-20 text-center">
        <FadeIn>
          <a 
            href="/contact"
            className="group relative inline-flex items-center gap-6 px-16 py-6 border border-white/10 overflow-hidden transition-all duration-700 hover:border-white/40"
          >
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out opacity-[0.03]" />
            <MessageCircle size={20} className="text-white/40 group-hover:text-white transition-colors duration-500" />
            <span className="text-xs tracking-[0.5em] font-light group-hover:tracking-[0.6em] transition-all duration-500">
              お手入れのご相談・お問い合わせ
            </span>
          </a>
        </FadeIn>
      </section>
    </div>
  );
}

function CareStep({ number, title, content }: { number: string; title: string; content: string }) {
  return (
    <div className="group space-y-4">
      <div className="flex items-center gap-6">
        <span className="text-2xl font-extralight text-white/20 group-hover:text-white transition-colors duration-500 font-mono italic">{number}</span>
        <h4 className="text-xl font-light tracking-widest">{title}</h4>
      </div>
      <p className="text-white/50 leading-relaxed font-light pl-[60px]">
        {content}
      </p>
    </div>
  );
}
