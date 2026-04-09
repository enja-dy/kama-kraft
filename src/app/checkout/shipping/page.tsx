"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Truck, MapPin, User, Phone, Calendar, Info, CheckCircle2 } from "lucide-react";

// 離島シミュレーション用の郵便番号プレフィックス
const ISLAND_PREFIXES = ["90", "89", "100"];

export default function ShippingPage() {
  const { cart, totalPrice } = useCart();
  
  // フォーム状態
  const [zip, setZip] = useState("");
  const [isIsland, setIsIsland] = useState(false);
  const [islandFee, setIslandFee] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("指定なし");
  
  // 住所・都道府県の状態
  const [prefecture, setPrefecture] = useState("神奈川県");
  const [address, setAddress] = useState("");

  // 郵便番号入力時の離島判定・住所自動入力ロジック
  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, "");
    if (value.length <= 7) {
      setZip(value);
      
      // 3桁または7桁入力された時点で判定・補完開始
      if (value.length >= 3) {
        // 離島判定
        const islandFound = ISLAND_PREFIXES.some(p => value.startsWith(p));
        setIsIsland(islandFound);
        setIslandFee(islandFound ? 5500 : 0);

        // 住所デモ補完
        if (value.startsWith("900")) {
          setPrefecture("沖縄県");
          if (value.length === 7) setAddress("那覇市泉崎");
        } else if (value.startsWith("248")) {
          setPrefecture("神奈川県");
          if (value.length === 7) setAddress("鎌倉市雪ノ下");
        } else if (value.startsWith("100")) {
          setPrefecture("東京都");
          if (value.length === 7) setAddress("千代田区千代田");
        } else if (value.startsWith("060")) {
          setPrefecture("北海道");
          if (value.length === 7) setAddress("札幌市中央区北一条西");
        }
      } else {
        setIsIsland(false);
        setIslandFee(0);
      }
    }
  };

  // 最短お届け日の計算
  const minDeliveryDate = useMemo(() => {
    const date = new Date();
    // 通常5営業日 + 週末を考慮して安全に7日後
    let leadTime = isIsland ? 12 : 7; 
    date.setDate(date.getDate() + leadTime);
    return date.toISOString().split("T")[0];
  }, [isIsland]);

  const formattedPrice = (price: number) => 
    new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(price);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-[#fbfbfb] dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left: Shipping Form */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link href="/checkout/auth" className="text-xs tracking-widest text-[#3d2b1f] dark:text-white/40 hover:text-foreground transition-colors flex items-center gap-2 mb-8 uppercase font-bold">
                <ArrowLeft size={14} /> 戻る
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground">お届け先・日時の入力</h1>
              <p className="text-foreground/60 text-sm italic">職人の手仕事を丁寧にお届けするため、お届け先とご希望の日時をお知らせください。</p>
            </motion.div>

            {/* Stepper */}
            <div className="flex items-center gap-8 text-[10px] tracking-[0.3em] font-bold uppercase border-b border-foreground/5 pb-4">
              <span className="text-foreground border-b-2 border-foreground pb-4 -mb-[18px]">01. お届け先指定</span>
              <span className="text-foreground/20 pb-4">02. お支払い方法</span>
              <span className="text-foreground/20 pb-4">03. 注文内容の最終確認</span>
            </div>

            <form className="space-y-16 pt-8">
              {/* Contact Section */}
              <section className="space-y-8">
                <div className="flex items-center gap-3 text-xl font-bold tracking-tight text-foreground">
                  <User size={22} className="text-[#3d2b1f] dark:text-white/40" />
                  <h2>お客様情報</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40">お名前</label>
                    <input type="text" placeholder="鎌倉 太郎" className="w-full bg-white dark:bg-white/5 border border-foreground/10 p-5 rounded-2xl focus:border-[#3d2b1f] outline-none transition-all placeholder:text-foreground/20" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40">メールアドレス</label>
                    <input type="email" placeholder="kamakura@example.com" className="w-full bg-white dark:bg-white/5 border border-foreground/10 p-5 rounded-2xl focus:border-[#3d2b1f] outline-none transition-all placeholder:text-foreground/20" />
                  </div>
                </div>
              </section>

              {/* Address Section */}
              <section className="space-y-8">
                <div className="flex items-center gap-3 text-xl font-bold tracking-tight text-foreground">
                  <MapPin size={22} className="text-[#3d2b1f] dark:text-white/40" />
                  <h2>お届け先住所</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1 space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40">郵便番号</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        value={zip}
                        onChange={handleZipChange}
                        placeholder="2480000" 
                        maxLength={7}
                        className="w-full bg-white dark:bg-white/5 border border-foreground/10 p-5 rounded-2xl focus:border-[#3d2b1f] outline-none transition-all placeholder:text-foreground/20 font-mono tracking-wider" 
                      />
                      {zip.length === 7 && (
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500"
                        >
                          <CheckCircle2 size={20} />
                        </motion.div>
                      )}
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40">都道府県</label>
                    <div className="relative">
                      <select 
                        value={prefecture}
                        onChange={(e) => setPrefecture(e.target.value)}
                        className="w-full bg-white dark:bg-white/5 border border-foreground/10 p-5 rounded-2xl focus:border-[#3d2b1f] outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="神奈川県">神奈川県</option>
                        <option value="東京都">東京都</option>
                        <option value="沖縄県">沖縄県</option>
                        <option value="北海道">北海道</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                        <ArrowRight size={16} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {isIsland && (
                    <motion.div 
                      key="island-alert"
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      className="bg-[#3d2b1f]/5 border border-[#3d2b1f]/20 p-6 rounded-2xl flex gap-4 items-start mb-4 overflow-hidden"
                    >
                      <Info className="text-[#3d2b1f] dark:text-white/60 shrink-0 mt-0.5" size={20} />
                      <div className="space-y-1">
                        <p className="text-sm font-bold text-[#3d2b1f] dark:text-white">離島・遠隔地エリア判定</p>
                        <p className="text-xs text-[#3d2b1f]/70 dark:text-white/60 leading-relaxed">
                          ご入力いただいた地域（{prefecture}）は離島・遠隔地エリアに該当するため、別途「離島中継料」が加算され、お届けまで通常よりお時間をいただきます。職人が最も安全なルートを手配いたします。
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40">市区町村・番地</label>
                  <input 
                    type="text" 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="鎌倉市雪ノ下 1-2-3" 
                    className="w-full bg-white dark:bg-white/5 border border-foreground/10 p-5 rounded-2xl focus:border-[#3d2b1f] outline-none transition-all placeholder:text-foreground/20" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40">建物名・部屋番号（任意）</label>
                  <input type="text" placeholder="鎌倉ヒルズ 101" className="w-full bg-white dark:bg-white/5 border border-foreground/10 p-5 rounded-2xl focus:border-[#3d2b1f] outline-none transition-all placeholder:text-foreground/20" />
                </div>
              </section>

              {/* Delivery Schedule Section */}
              <section className="space-y-8 p-10 bg-white dark:bg-white/5 rounded-3xl border border-foreground/5">
                <div className="flex items-center gap-3 text-xl font-bold tracking-tight text-foreground">
                  <Calendar size={22} className="text-[#3d2b1f] dark:text-white/40" />
                  <h2>お届け希望日時の指定</h2>
                </div>
                
                <p className="text-xs text-foreground/40 leading-relaxed bg-foreground/5 p-4 rounded-xl border-l-4 border-[#3d2b1f]">
                  職人が一点一点、最終調整を施してから発送するため、ご注文日から最短5営業日の準備期間をいただいております。
                  {isIsland && <span className="block mt-1 font-bold text-[#3d2b1f]">※離島エリアのため、さらに数日の配送期間を要します。</span>}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40">お届け希望日</label>
                    <input 
                      type="date" 
                      min={minDeliveryDate}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-[#fbfbfb] dark:bg-black/20 border border-foreground/10 p-5 rounded-2xl focus:border-[#3d2b1f] outline-none transition-all cursor-pointer" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40">お届け時間帯</label>
                    <select 
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full bg-[#fbfbfb] dark:bg-black/20 border border-foreground/10 p-5 rounded-2xl focus:border-[#3d2b1f] outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option>指定なし</option>
                      <option>午前中</option>
                      <option>14時〜16時</option>
                      <option>16時〜18時</option>
                      <option>18時〜20時</option>
                      <option>19時〜21時</option>
                      <option>職人と電話で相談して決定</option>
                    </select>
                  </div>
                </div>
              </section>

              <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-foreground/5">
                <p className="text-xs text-foreground/40 max-w-md">
                  次へ進むことで、KamaKraftの利用規約およびプライバシーポリシーに同意したものとみなされます。
                </p>
                <button type="button" className="w-full md:w-auto min-w-[300px] bg-foreground text-background py-6 px-12 flex items-center justify-center gap-3 hover:scale-[1.02] transition-all font-bold tracking-[0.3em] text-xs uppercase shadow-2xl shadow-foreground/20 group active:scale-[0.98]">
                  お支払い方法の選択
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

          {/* Right: Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-white/5 p-10 rounded-[2.5rem] border border-foreground/5 sticky top-32 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-10 pb-6 border-b border-foreground/5">
                <Truck size={20} className="text-[#3d2b1f]  dark:text-white/40" />
                <h2 className="text-xl font-bold tracking-tight">ご注文の概要</h2>
              </div>
              
              <div className="space-y-8 mb-10 overflow-y-auto max-h-[35vh] pr-4 scrollbar-thin scrollbar-thumb-foreground/10">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-5 items-center">
                    <div className="relative w-20 h-20 bg-foreground/[0.03] dark:bg-white/5 rounded-2xl overflow-hidden shrink-0 border border-foreground/5">
                      <Image src={item.image} alt={item.name} fill className="object-contain p-3" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-sm font-bold truncate tracking-tight">{item.name}</p>
                      <p className="text-[10px] text-foreground/40 uppercase font-bold tracking-widest mt-1">数量: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-bold">{formattedPrice(item.price * item.quantity)}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-5 pt-8 border-t border-foreground/10">
                <div className="flex justify-between text-foreground/60 text-xs tracking-[0.2em] uppercase font-bold">
                  <span>商品合計</span>
                  <span>{formattedPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-foreground/60 text-xs tracking-[0.2em] uppercase font-bold">
                  <span>配送料</span>
                  <span className="text-green-600">無料</span>
                </div>
                
                <AnimatePresence>
                  {isIsland && (
                    <motion.div 
                      key="island-fee-total"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex justify-between text-[#3d2b1f] dark:text-white text-xs tracking-[0.2em] uppercase font-bold bg-[#3d2b1f]/5 p-2 rounded-lg"
                    >
                      <span>離島中継料</span>
                      <span>{formattedPrice(islandFee)}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="pt-8 mt-4 border-t-2 border-foreground flex justify-between text-2xl font-bold tracking-tighter">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30 mb-2">総計</span>
                    <span>Total</span>
                  </div>
                  <motion.span 
                    key={isIsland ? 'island-total' : 'normal-total'}
                    initial={{ scale: 1.1, color: "#3d2b1f" }}
                    animate={{ scale: 1, color: "var(--foreground)" }}
                    className="text-3xl"
                  >
                    {formattedPrice(totalPrice + islandFee)}
                  </motion.span>
                </div>
              </div>

              <div className="mt-10 p-5 bg-foreground/5 rounded-3xl border border-foreground/5">
                <p className="text-[10px] text-foreground/40 leading-relaxed text-center italic tracking-wider">
                  鎌倉の工房から、専門の配送業者が<br />
                  丁寧梱包でお届けいたします。
                </p>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
