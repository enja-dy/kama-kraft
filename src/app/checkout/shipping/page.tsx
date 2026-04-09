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
  
  // Hydrationエラー防止用のマウント状態
  const [mounted, setMounted] = useState(false);
  
  // フォーム状態
  const [zip, setZip] = useState("");
  const [isIsland, setIsIsland] = useState(false);
  const [islandFee, setIslandFee] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("指定なし");
  
  // 住所・都道府県の状態
  const [prefecture, setPrefecture] = useState("");
  const [address, setAddress] = useState("");
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 郵便番号入力時の離島判定・住所自動入力ロジック (API連携)
  const handleZipChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, "");
    if (value.length <= 7) {
      setZip(value);
      
      // 3桁時点で離島判定を先行
      if (value.length >= 3) {
        const islandFound = ISLAND_PREFIXES.some(p => value.startsWith(p));
        setIsIsland(islandFound);
        setIslandFee(islandFound ? 5500 : 0);
      } else {
        setIsIsland(false);
        setIslandFee(0);
      }

      // 7桁入力された時点でAPIを叩く
      if (value.length === 7) {
        setIsLoadingAddress(true);
        try {
          const res = await fetch(`/api/zipcode?zipcode=${value}`);
          const data = await res.json();
          // zipaddress.net のデータ形式に対応
          if (data.code === 200 && data.data) {
            const result = data.data;
            setPrefecture(result.pref);
            setAddress(result.address);
            
            // 実際の住所データから再判定
            if (result.pref === "沖縄県") {
              setIsIsland(true);
              setIslandFee(5500);
            }
          }
        } catch (error) {
          console.error("Address fetch failed:", error);
        } finally {
          setIsLoadingAddress(false);
        }
      }
    }
  };

  // 最短お届け日の計算
  const minDeliveryDate = useMemo(() => {
    if (!mounted) return "";
    const date = new Date();
    // 通常5営業日 + 週末を考慮して安全に7日後
    let leadTime = isIsland ? 12 : 7; 
    date.setDate(date.getDate() + leadTime);
    return date.toISOString().split("T")[0];
  }, [isIsland, mounted]);

  // 通過表示の安定化
  const formattedPrice = (price: number) => {
    if (!mounted) return `¥${price.toLocaleString()}`;
    return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(price);
  };

  if (!mounted) return <div className="min-h-screen bg-[#fbfbfb] dark:bg-[#050505]" />;

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
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground text-left">お届け先・日時の入力</h1>
              <p className="text-foreground/60 text-sm italic">職人の手仕事を丁寧にお届けするため、お届け先とご希望の日時をお知らせください。</p>
            </motion.div>

            {/* Stepper */}
            <div className="flex items-center gap-8 text-[10px] tracking-[0.3em] font-bold uppercase border-b border-foreground/5 h-14 overflow-x-auto no-scrollbar">
              <span className="relative h-full flex items-center text-foreground whitespace-nowrap">
                01. お届け先指定
                <motion.span layoutId="activeStep" className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-foreground" />
              </span>
              <span className="h-full flex items-center text-foreground/20 whitespace-nowrap">02. お支払い方法</span>
              <span className="h-full flex items-center text-foreground/20 whitespace-nowrap">03. 注文内容の最終確認</span>
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
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40 text-left block">お名前</label>
                    <input type="text" placeholder="鎌倉 太郎" className="w-full bg-white dark:bg-white/5 border border-foreground/10 p-5 rounded-2xl focus:border-[#3d2b1f] outline-none transition-all placeholder:text-foreground/20" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40 text-left block">メールアドレス</label>
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
                  <div className="md:col-span-1 space-y-3 text-left">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40 block">郵便番号</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        value={zip}
                        onChange={handleZipChange}
                        placeholder="例：2480000" 
                        maxLength={7}
                        className="w-full bg-white dark:bg-white/5 border border-foreground/10 p-5 rounded-2xl focus:border-[#3d2b1f] outline-none transition-all placeholder:text-foreground/20 font-mono tracking-wider" 
                      />
                      {isLoadingAddress && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="w-5 h-5 border-2 border-[#3d2b1f] border-t-transparent rounded-full"
                          />
                        </div>
                      )}
                      {!isLoadingAddress && zip.length === 7 && (
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
                  <div className="md:col-span-2 space-y-3 text-left">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40 block">都道府県</label>
                    <div className="relative">
                      <select 
                        value={prefecture}
                        onChange={(e) => setPrefecture(e.target.value)}
                        className={`w-full bg-white dark:bg-white/5 border border-foreground/10 p-5 rounded-2xl focus:border-[#3d2b1f] outline-none transition-all appearance-none cursor-pointer ${!prefecture ? 'text-foreground/20' : 'text-foreground'}`}
                      >
                        <option value="" disabled>選択してください</option>
                        <option value="北海道">北海道</option>
                        <option value="青森県">青森県</option>
                        <option value="岩手県">岩手県</option>
                        <option value="宮城県">宮城県</option>
                        <option value="秋田県">秋田県</option>
                        <option value="山形県">山形県</option>
                        <option value="福島県">福島県</option>
                        <option value="茨城県">茨城県</option>
                        <option value="栃木県">栃木県</option>
                        <option value="群馬県">群馬県</option>
                        <option value="埼玉県">埼玉県</option>
                        <option value="千葉県">千葉県</option>
                        <option value="東京都">東京都</option>
                        <option value="神奈川県">神奈川県</option>
                        <option value="新潟県">新潟県</option>
                        <option value="富山県">富山県</option>
                        <option value="石川県">石川県</option>
                        <option value="福井県">福井県</option>
                        <option value="山梨県">山梨県</option>
                        <option value="長野県">長野県</option>
                        <option value="岐阜県">岐阜県</option>
                        <option value="静岡県">静岡県</option>
                        <option value="愛知県">愛知県</option>
                        <option value="三重県">三重県</option>
                        <option value="滋賀県">滋賀県</option>
                        <option value="京都府">京都府</option>
                        <option value="大阪府">大阪府</option>
                        <option value="兵庫県">兵庫県</option>
                        <option value="奈良県">奈良県</option>
                        <option value="和歌山県">和歌山県</option>
                        <option value="鳥取県">鳥取県</option>
                        <option value="島根県">島根県</option>
                        <option value="岡山県">岡山県</option>
                        <option value="広島県">広島県</option>
                        <option value="山口県">山口県</option>
                        <option value="徳島県">徳島県</option>
                        <option value="香川県">香川県</option>
                        <option value="愛媛県">愛媛県</option>
                        <option value="高知県">高知県</option>
                        <option value="福岡県">福岡県</option>
                        <option value="佐賀県">佐賀県</option>
                        <option value="長崎県">長崎県</option>
                        <option value="熊本県">熊本県</option>
                        <option value="大分県">大分県</option>
                        <option value="宮崎県">宮崎県</option>
                        <option value="鹿児島県">鹿児島県</option>
                        <option value="沖縄県">沖縄県</option>
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
                      <div className="space-y-1 text-left">
                        <p className="text-sm font-bold text-[#3d2b1f] dark:text-white">離島・遠隔地エリア判定</p>
                        <p className="text-xs text-[#3d2b1f]/70 dark:text-white/60 leading-relaxed">
                          ご入力いただいた地域（{prefecture}）は離島・遠隔地エリアに該当するため、別途「離島中継料」が加算され、お届けまで通常よりお時間をいただきます。職人が最も安全なルートを手配いたします。
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-3 text-left">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40 block">市区町村・番地</label>
                  <input 
                    type="text" 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder={zip.length < 7 ? "郵便番号を入力すると反映されます" : "鎌倉市雪ノ下 1-2-3"}
                    className="w-full bg-white dark:bg-white/5 border border-foreground/10 p-5 rounded-2xl focus:border-[#3d2b1f] outline-none transition-all placeholder:text-foreground/20" 
                  />
                </div>
                <div className="space-y-3 text-left">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40 block">建物名・部屋番号（任意）</label>
                  <input type="text" placeholder="鎌倉ヒルズ 101" className="w-full bg-white dark:bg-white/5 border border-foreground/10 p-5 rounded-2xl focus:border-[#3d2b1f] outline-none transition-all placeholder:text-foreground/20" />
                </div>
              </section>

              {/* Delivery Schedule Section */}
              <section className="space-y-8 p-10 bg-white dark:bg-white/5 rounded-3xl border border-foreground/5">
                <div className="flex items-center gap-3 text-xl font-bold tracking-tight text-foreground text-left">
                  <Calendar size={22} className="text-[#3d2b1f] dark:text-white/40" />
                  <h2>お届け希望日時の指定</h2>
                </div>
                
                <div className="text-[11px] text-foreground/80 leading-relaxed bg-foreground/[0.07] p-5 rounded-2xl border-l-4 border-[#3d2b1f] dark:border-white/40 text-left shadow-sm">
                  職人が一点一点、最終調整を施してから発送するため、ご注文日から最短5営業日の準備期間をいただいております。
                  {isIsland && <span className="block mt-2 font-bold text-[#3d2b1f] dark:text-white/90">※離島エリアのため、さらに数日の配送期間を要します。</span>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3 text-left">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40 block">お届け希望日</label>
                    <input 
                      type="date" 
                      min={minDeliveryDate}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-[#fbfbfb] dark:bg-black/20 border border-foreground/10 p-5 rounded-2xl focus:border-[#3d2b1f] outline-none transition-all cursor-pointer" 
                    />
                  </div>
                  <div className="space-y-3 text-left">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40 block">お届け時間帯</label>
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
                <p className="text-xs text-foreground/40 max-w-md text-left leading-relaxed">
                  次へ進むことで、KamaKraftの利用規約およびプライバシーポリシーに同意したものとみなされます。
                </p>
                <Link 
                  href="/checkout/payment"
                  className="w-full md:w-auto min-w-[300px] bg-foreground text-background py-6 px-12 flex items-center justify-center gap-3 hover:scale-[1.02] transition-all font-bold tracking-[0.3em] text-xs uppercase shadow-2xl shadow-foreground/20 group active:scale-[0.98]"
                >
                  お支払い方法の選択
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </form>
          </div>

          {/* Right: Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-white/5 p-10 rounded-[2.5rem] border border-foreground/5 sticky top-32 shadow-sm text-left"
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
                  <span className="text-green-600 font-bold italic tracking-normal">Free</span>
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

                <div className="pt-8 mt-4 border-t-2 border-foreground flex justify-between text-2xl font-bold tracking-tighter items-end">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30 mb-2">総計</span>
                    <span className="text-lg leading-none opacity-50">Total</span>
                  </div>
                  <motion.span 
                    key={isIsland ? 'island-total' : 'normal-total'}
                    initial={{ scale: 1.1, color: "#3d2b1f" }}
                    animate={{ scale: 1, color: "var(--foreground)" }}
                    className="text-3xl leading-none"
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
