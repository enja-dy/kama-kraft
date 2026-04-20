"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Ruler, 
  Settings, 
  MessageSquare, 
  CheckCircle2, 
  Info, 
  ArrowRight,
  Maximize,
  PenTool,
  Truck
} from "lucide-react";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export default function CustomOrderPage() {
  // Simulator State
  const [width, setWidth] = useState(90);
  const [depth, setDepth] = useState(45);
  const [height, setHeight] = useState(35);
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Price Calculation Logic
  useEffect(() => {
    // 基準モデル（90x45x35cm = 70,000円）に基づいた計算ロジック
    // 固定費: 45,000円（脚部製作費 + デザイン・基本技術料）
    // 変動費: 面積(cm2) × 6.2円（ウリン材材料費 + 面積比例の加工人件費）
    // 高さ調整: 35cmを基準とし、1cmごとに500円
    
    const fixedBaseCost = 45000;
    const surfaceArea = width * depth;
    const variableCost = surfaceArea * 6.2;
    const heightAdjustment = Math.max(0, height - 35) * 500;
    
    setEstimatedPrice(Math.round(fixedBaseCost + variableCost + heightAdjustment));
  }, [width, depth, height]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const formattedPrice = (price: number) => 
    new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(price);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/order-hero.png"
          alt="Custom Order Blueprint"
          fill
          className="object-cover opacity-60 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        
        <div className="relative z-10 text-center space-y-8 px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className="text-3xl md:text-5xl font-extralight tracking-[0.4em] uppercase mb-12">
              Bespoke
            </h1>
            <div className="space-y-6">
              <h2 className="text-lg md:text-xl font-light tracking-[0.5em] text-white/80">
                オーダーメイドのご相談
              </h2>
              <div className="h-[1px] w-12 bg-white/20 mx-auto" />
              <p className="text-sm md:text-base font-light tracking-[0.4em] text-white/60 leading-relaxed italic">
                1cmのこだわり、一生の対話。<br className="md:hidden" />
                あなたの空間に、完璧な一点を。
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center"
          >
            <div className="w-px h-24 bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-32 pb-32">
        
        {/* Philosophy Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center pt-24">
          <FadeIn>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">1cm単位という、<br />究極の自由。</h2>
              <p className="text-lg text-white/60 leading-relaxed text-justify">
                KamaKraftのオーダーメイドは、単なるサイズ変更ではありません。それは、あなたのライフスタイルや空間の呼吸、そして100年先まで続く「使い心地」を設計するプロセスです。
                <br /><br />
                アイアンウッド「ウリン」の圧倒的な重量感と美しさを、ミリ単位の精度で制御する。私たちは既製品の枠組みを捨て、一人の職人が一人の主（あるじ）のために、魂を削り出して形にします。
              </p>

            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative aspect-square rounded-2xl overflow-hidden group">
              <Image
                src="/order-precision-ulin.png"
                alt="Precision Measurement in Ulin Wood"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </FadeIn>
        </section>

        {/* Simulator Section */}
        <section id="simulator" className="p-8 md:p-16 bg-[#0a0a0a] rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-[0.02] blur-[100px] -mr-48 -mt-48" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Control Panel */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/40">
                  <Settings size={18} />
                  <span className="text-xs font-bold tracking-[0.4em] uppercase">Studio Simulation</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight">概算お見積り</h2>
                <p className="text-sm text-white/40">サイズを入力すると、職人による基本制作費を含めた概算金額が算出されます。</p>
              </div>

              <div className="space-y-10">
                {/* Width Input */}
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-end">
                    <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">Width / 幅 (cm)</label>
                    <span className="text-xl font-mono text-white">{width}cm</span>
                  </div>
                  <input 
                    type="range" min="50" max="200" step="1" 
                    value={width} onChange={(e) => setWidth(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-white"
                  />
                </div>

                {/* Depth Input */}
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-end">
                    <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">Depth / 奥行き (cm)</label>
                    <span className="text-xl font-mono text-white">{depth}cm</span>
                  </div>
                  <input 
                    type="range" min="30" max="100" step="1" 
                    value={depth} onChange={(e) => setDepth(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-white"
                  />
                </div>

                {/* Height Input */}
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-end">
                    <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">Height / 高さ (cm)</label>
                    <span className="text-xl font-mono text-white">{height}cm</span>
                  </div>
                  <input 
                    type="range" min="30" max="100" step="1" 
                    value={height} onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-white"
                  />
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 space-y-4">
                <div className="flex justify-between items-center bg-white/5 p-6 rounded-2xl">
                  <span className="text-xs font-bold tracking-widest text-white/40 uppercase">Estimated Price</span>
                  <div className="text-right">
                    <motion.div 
                      key={estimatedPrice}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-3xl font-bold tracking-tighter"
                    >
                      {mounted ? formattedPrice(estimatedPrice) : "---"}
                    </motion.div>
                    <span className="text-[10px] text-white/20 italic">税込・国内標準配送料込</span>
                  </div>
                </div>
                <p className="text-[10px] text-white/30 leading-relaxed text-center italic">
                  ※上記は目安です。木材の希少性や詳細な加工指示により変動します。
                </p>
              </div>
            </div>

            {/* Visualization Canvas */}
            <div className="lg:col-span-3 flex items-center justify-center p-8 bg-white/[0.02] rounded-[2rem] border border-white/5 relative group overflow-hidden min-h-[500px]">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <Image
                  src="/order-sketch.png"
                  alt="Dimension Sketch"
                  fill
                  className="object-contain p-12 opacity-30"
                />
              </div>
              
              {/* 3D Wireframe Scene - Perfectionist Prism */}
              <div className="relative w-full h-full flex items-center justify-center pointer-events-none" style={{ perspective: "20000px" }}>
                <motion.div 
                  animate={{ 
                    rotateY: -45,
                    rotateX: 18,
                    scale: 1.85
                  }}
                  className="relative w-0 h-0"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    className="relative"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Front Face */}
                    <div 
                      className="absolute border border-white/20 bg-white/5 flex items-center justify-center" 
                      style={{ 
                        width: width,
                        height: height,
                        left: -width / 2,
                        top: -height / 2,
                        transform: `translateZ(${depth / 2}px)`
                      }} 
                    >
                       <div className="text-[8px] text-white/5 uppercase tracking-widest font-bold">FRONT</div>
                    </div>

                    {/* Back Face */}
                    <div 
                      className="absolute border border-white/10 bg-white/[0.02]" 
                      style={{ 
                        width: width,
                        height: height,
                        left: -width / 2,
                        top: -height / 2,
                        transform: `rotateY(180deg) translateZ(${depth / 2}px)`
                      }} 
                    />

                    {/* Right Face */}
                    <div 
                      className="absolute border border-white/10 bg-white/[0.05]" 
                      style={{ 
                        width: depth, 
                        height: height,
                        left: -depth / 2,
                        top: -height / 2,
                        transform: `rotateY(90deg) translateZ(${width / 2}px)` 
                      }} 
                    />

                    {/* Left Face */}
                    <div 
                      className="absolute border border-white/10 bg-white/[0.05]" 
                      style={{ 
                        width: depth, 
                        height: height,
                        left: -depth / 2,
                        top: -height / 2,
                        transform: `rotateY(-90deg) translateZ(${width / 2}px)` 
                      }} 
                    />

                    {/* Top Face */}
                    <div 
                      className="absolute border-2 border-white/40 bg-white/20 flex items-center justify-center shadow-2xl shadow-white/5" 
                      style={{ 
                        width: width,
                        height: depth, 
                        left: -width / 2,
                        top: -depth / 2,
                        transform: `rotateX(90deg) translateZ(${height / 2}px)` 
                      }} 
                    >
                       <div className="text-[8px] text-white/20 uppercase tracking-[0.4em] font-bold">TOP SURFACE</div>
                    </div>

                    {/* Bottom Face */}
                    <div 
                      className="absolute border border-white/5 bg-white/[0.01]" 
                      style={{ 
                        width: width,
                        height: depth, 
                        left: -width / 2,
                        top: -depth / 2,
                        transform: `rotateX(-90deg) translateZ(${height / 2}px)` 
                      }} 
                    />
                  </motion.div>
                </motion.div>
              </div>

              {/* Data Display */}
              <div className="absolute bottom-8 right-8 flex flex-col items-end gap-2">
                <div className="px-5 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col gap-1 items-end">
                   <div className="text-[8px] text-white/30 uppercase tracking-widest font-bold mb-1">Dimensions</div>
                   <div className="flex gap-4">
                     <div className="text-right">
                       <span className="block text-[8px] text-white/20 uppercase">W</span>
                       <span className="text-sm font-bold text-white">{width}cm</span>
                     </div>
                     <div className="text-right">
                       <span className="block text-[8px] text-white/20 uppercase">D</span>
                       <span className="text-sm font-bold text-white/80">{depth}cm</span>
                     </div>
                     <div className="text-right">
                       <span className="block text-[8px] text-white/20 uppercase">H</span>
                       <span className="text-sm font-bold text-white/60">{height}cm</span>
                     </div>
                   </div>
                </div>
              </div>

              <div className="absolute top-8 left-8 flex flex-col gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2 text-white text-[10px] uppercase font-bold tracking-[0.3em]">
                  <Maximize size={14} />
                  <span>3D Space Visualizer</span>
                </div>
                <p className="text-[8px] text-white/40 tracking-widest uppercase">Depth-enabled simulation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="space-y-24 py-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">実現までの旅路</h2>
            <p className="text-white/40 tracking-widest uppercase text-xs font-bold">The Story of Creation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: MessageSquare, title: "対話と構想", desc: "空間の悩みや理想を、職人が丁寧にヒアリングします。" },
              { icon: PenTool, title: "図面作成", desc: "1cm単位で理想を形にし、詳細な図面をご提案します。" },
              { icon: Ruler, title: "素材選定", desc: "一本のウリンから、最も美しい表情を持つ部位を厳選します。" },
              { icon: Truck, title: "魂を届ける", desc: "最終調整を施し、専門の配送員が据付まで行います。" }
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/5 h-full space-y-6 hover:bg-white/[0.08] transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group">
                    <step.icon size={24} className="text-white opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">{step.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Integrated Inquiry Form */}
        <section id="form" className="max-w-4xl mx-auto pt-24">
          <div className="bg-[#0c0c0c] p-10 md:p-20 rounded-[3rem] border border-white/10 shadow-2xl relative">
            <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
            
            <FadeIn>
              <div className="text-center space-y-8 mb-16">
                <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Consultation Open</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">理想を、言葉に。</h2>
                <p className="text-white/40 text-sm leading-relaxed max-w-lg mx-auto italic">
                  シミュレーション結果をもとに、さらに深く詳細なご相談を承ります。職人からの直接の回答をお待ちください。
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-10 relative">
                  <div className="space-y-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 ml-4">お名前</label>
                        <input 
                          type="text" required
                          value={name} onChange={(e) => setName(e.target.value)}
                          placeholder="鎌倉 太郎"
                          className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-white outline-none transition-all placeholder:text-white/10"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 ml-4">メールアドレス</label>
                        <input 
                          type="email" required
                          value={email} onChange={(e) => setEmail(e.target.value)}
                          placeholder="kamakura@example.com"
                          className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-white outline-none transition-all placeholder:text-white/10"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 ml-4">現在のシミュレーション内容</label>
                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl text-sm font-mono text-white/60">
                      幅: {width}cm / 奥行き: {depth}cm / 高さ: {height}cm <br />
                      概算金額: {mounted ? formattedPrice(estimatedPrice) : "---"}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 ml-4">具体的なご要望（任意）</label>
                    <textarea 
                      rows={5}
                      value={message} onChange={(e) => setMessage(e.target.value)}
                      placeholder="例：天板のエッジを自然な形で残したい、脚の素材を黒いアイアンにしたい、等"
                      className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-white outline-none transition-all placeholder:text-white/10 resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-white text-black py-6 rounded-2xl font-bold tracking-[0.4em] text-xs uppercase hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
                  >
                    この内容で相談する
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/20">
                    <CheckCircle2 size={40} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">承りました。</h3>
                  <p className="text-white/40 max-w-sm mx-auto leading-relaxed">
                    職人が内容を精査し、3営業日以内にご入力いただいたメールアドレスへ回答いたします。一生ものの出会いを、今しばらくお待ちください。
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs tracking-widest text-white/20 hover:text-white transition-colors uppercase font-bold pt-8"
                  >
                    別の内容で相談する
                  </button>
                </motion.div>
              )}
            </FadeIn>
          </div>
        </section>

      </div>
    </div>
  );
}
