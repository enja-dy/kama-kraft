"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronLeft, 
  ShieldCheck, 
  Waves, 
  BugOff, 
  Microscope, 
  Scale, 
  History,
  Droplets
} from "lucide-react";

import { use } from "react";

export default function ArticlePage({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  const params = use(paramsPromise);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  // Only handling the first article for now as requested
  if (params.slug !== "why-ulin-durability-100-years") {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center space-y-4">
          <p className="text-white/40">Content under preparation.</p>
          <Link href="/journal" className="text-sm underline">Back to Journal</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#050505] min-h-screen text-white/90 font-light overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0 z-0">
          <Image
            src="/journal/why-ulin-durability-v2.png"
            alt="Ulin Durability"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-[0.6em] text-white/40 uppercase block">
              The Legend of Ironwood
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-tight">
              「鉄の木」ウリンの<br />
              <span className="text-white">驚愕の耐久性とは？</span>
            </h1>
            <p className="text-white/40 text-sm md:text-base tracking-[0.2em] font-medium pt-4">
              100年腐らない理由を科学の視点で徹底検証
            </p>
          </motion.div>
          
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100px" }}
            transition={{ delay: 1, duration: 1.5 }}
            className="w-px bg-gradient-to-b from-white/40 to-transparent mx-auto"
          />
        </div>

        <motion.div style={{ opacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-white/20 uppercase">
          SCROLL TO EXPLORE
        </motion.div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 py-24 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide border-l border-white/20 pl-6 leading-relaxed">
              数十年、数百年という時間の試練に耐え、<br className="hidden md:block" />
              なお美しく在り続ける「鉄の木」。
            </h2>
            <p className="text-base md:text-lg leading-loose text-white/70">
              世界には数多の木材が存在しますが、ボルネオ島原産の「ウリン（別名アイアンウッド）」ほど、その類まれなる耐久性で職人や建築家を魅了し続けてきた木材はありません。
              <br /><br />
              海水に浸かっても、激しいスコールに晒されても、シロアリが猛威を振るっても。ウリンはなぜ、これほどまでに頑強なのか。本稿では、その驚異的な生命力の裏側に隠された科学的根拠を解き明かします。
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 1: Density */}
      <section className="bg-white/5 py-32 md:py-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center"
            >
              <Scale className="text-white/60" size={32} />
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-extralight tracking-wider leading-snug">
              水に沈む圧倒的な<span className="font-medium text-white">「比重1.0」</span>の壁
            </h3>
            <p className="text-white/60 leading-relaxed text-lg">
              一般的な木材の多くは水に浮きますが、ウリンは違います。その比重は1.0を超え、**水に投げ入れれば静かに底へ沈んでいきます。**
              <br /><br />
              この極めて高い密度は、木材組織の中に空隙（隙間）がほとんど存在しないことを意味します。これにより、腐朽菌の温床となる水分や、物理的に食い荒らそうとする害虫の侵入を徹底的に拒絶するのです。
            </p>
            <ul className="space-y-4 pt-6">
              {[
                { icon: ShieldCheck, text: "表面硬度は超高硬度。傷を寄せ付けない強さ。" },
                { icon: Microscope, text: "電子顕微鏡レベルで詰まった細胞組織。" }
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-center gap-4 text-sm text-white/80"
                >
                  <item.icon size={18} className="text-white/40" />
                  {item.text}
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-sm overflow-hidden border border-white/5"
          >
            <Image
              src="/product-v-leg.jpg"
              alt="Density view"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Polyphenols */}
      <section className="py-32 md:py-48 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <div className="flex justify-center">
            <Droplets size={48} className="text-white/20" />
          </div>
          <h3 className="text-3xl md:text-5xl font-extralight tracking-tight">
            自律する盾、<span className="text-white font-medium italic underline decoration-white/20 underline-offset-8">ポリフェノール</span>
          </h3>
          <div className="text-lg md:text-xl text-white/50 leading-loose space-y-8 font-light">
            <p>
              物理的な硬さに加え、ウリンには「化学的な鎧」が備わっています。それが大量に含まれる**超高濃度のポリフェノール**です。
            </p>
            <p className="text-white/80">
              ウリン特有の赤褐色はこの成分によるもので、これが天然の防腐剤、防虫剤として機能します。施工直後に赤い樹液（アク）が出ることがありますが、これはウリンが周囲の環境から自らを護るための**「自己防御反応」**そのものなのです。
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 3: Resilience Cards */}
      <section className="py-32 md:py-48 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <div className="text-center space-y-4">
            <h3 className="text-xs font-bold tracking-[0.5em] text-white/30 uppercase">Extreme Environment</h3>
            <p className="text-3xl font-extralight">過酷な環境での実力</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 border border-white/5 bg-white/5 backdrop-blur-3xl space-y-6"
            >
              <Waves size={32} className="text-white/40" />
              <h4 className="text-xl font-medium tracking-wide text-white">塩害・水害に対する圧倒的な信頼</h4>
              <p className="text-white/50 leading-relaxed">
                潮風に晒される沿岸部のウッドデッキや、常に水に浸かる桟橋。他の木材なら数年で朽ち果てる環境でも、ウリンはビクともしません。世界各地のリゾート地でウリンが選ばれるのは、この「絶対的な安心感」があるからです。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-12 border border-white/5 bg-white/5 backdrop-blur-3xl space-y-6"
            >
              <BugOff size={32} className="text-white/40" />
              <h4 className="text-xl font-medium tracking-wide text-white">シロアリも寄り付かない天然の拒絶</h4>
              <p className="text-white/50 leading-relaxed">
                木材住宅の最大の敵であるシロアリ。しかし、ポリフェノールを豊富に含み、鉄のように硬いウリンの心材を食害することは非常に困難です。防蟻処理（薬剤散布）なしでこの耐性を誇るのは、正に驚異と言えます。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Comparison Table */}
      <section className="py-32 md:py-48 max-w-5xl mx-auto px-6 overflow-x-auto">
        <h3 className="text-center text-2xl font-light tracking-[0.2em] mb-16">木材性能比較</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-white/10 text-[10px] tracking-[0.2em] font-bold text-white/40 uppercase">
              <th className="py-6 text-left">性能指標</th>
              <th className="py-6 px-4 text-center">ウリン (鉄の木)</th>
              <th className="py-6 px-4 text-center">イペ</th>
              <th className="py-6 px-4 text-center">ソフトウッド</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {[
              { label: "耐用年数", ulin: "30〜100年", ipe: "20〜30年", soft: "3〜5年" },
              { label: "比重", ulin: "1.04〜1.20", ipe: "0.90〜1.10", soft: "0.40〜0.60" },
              { label: "メンテナンス", ulin: "ほぼ不要", ipe: "年1回の塗装推奨", soft: "定期的な防腐処理" },
              { label: "耐蟻性", ulin: "極めて高い", ipe: "高い", soft: "低い" }
            ].map((row, i) => (
              <tr key={i} className="border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
                <td className="py-8 font-medium text-white/40">{row.label}</td>
                <td className="py-8 px-4 text-center text-white font-medium">{row.ulin}</td>
                <td className="py-8 px-4 text-center text-white/60">{row.ipe}</td>
                <td className="py-8 px-4 text-center text-white/20">{row.soft}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Section 5: Sustainable Legacy */}
      <section className="py-32 md:py-60 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/journal/why-ulin-durability-v2.png"
            alt="Durability BG"
            fill
            className="object-cover opacity-10 grayscale"
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-12">
          <History size={48} className="mx-auto text-white/20" />
          <h3 className="text-3xl md:text-6xl font-extralight tracking-tight leading-tight">
            100年後も愛される、<br />
            <span className="text-white">一生モノという贅沢。</span>
          </h3>
          <p className="text-lg md:text-xl text-white/60 leading-loose max-w-2xl mx-auto">
            私たちの家具が「一生モノ」を自負するのは、ウリンという素材が持つ永遠に近い時間に裏打ちされているからです。
            <br /><br />
            使い捨ての消費文化から脱却し、世代を超えて受け継がれる価値を持つ家具。KamaKraftは、大自然の恩恵である「鉄の木」を、最高峰の工芸技術によってあなたの日常へと繋ぎます。
          </p>
          <div className="pt-12">
            <Link 
              href="/products" 
              className="inline-block border border-white text-xs font-bold tracking-[0.4em] px-12 py-6 hover:bg-white hover:text-black transition-all"
            >
              COLLECTION VIEW
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Nav */}
      <div className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
        <Link href="/journal" className="flex items-center gap-4 text-xs font-bold tracking-widest text-white/40 hover:text-white transition-colors group">
          <ChevronLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
          BACK TO JOURNAL
        </Link>
        <div className="flex gap-10 text-[10px] tracking-[0.2em] font-bold text-white/20 uppercase">
          <span>Published on 2026.04.22</span>
          <span>Category: ウリン豆知識</span>
        </div>
      </div>
    </div>
  );
}
