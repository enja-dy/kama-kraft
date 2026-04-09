"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Truck, CreditCard, Building2, Apple, Wallet, CheckCircle2, ShieldCheck } from "lucide-react";

export default function PaymentPage() {
  const { cart, totalPrice } = useCart();
  const [mounted, setMounted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  
  const islandFee = 0; 

  useEffect(() => {
    setMounted(true);
  }, []);

  const formattedPrice = (price: number) => {
    if (!mounted) return `¥${price.toLocaleString()}`;
    return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(price);
  };

  if (!mounted) return <div className="min-h-screen bg-[#fbfbfb] dark:bg-[#050505]" />;

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-[#fbfbfb] dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left: Payment Form */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link href="/checkout/shipping" className="text-xs tracking-widest text-[#3d2b1f] dark:text-white/40 hover:text-foreground transition-colors flex items-center gap-2 mb-8 uppercase font-bold">
                <ArrowLeft size={14} /> 戻る（お届け先入力へ）
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground text-left">お支払い方法の選択</h1>
              <p className="text-foreground/60 text-sm italic">お客様のライフスタイルに合わせて、最も安心で便利な決済手段をお選びください。</p>
            </motion.div>

            {/* Stepper */}
            <div className="flex items-center gap-8 text-[10px] tracking-[0.3em] font-bold uppercase border-b border-foreground/5 h-14 overflow-x-auto no-scrollbar">
              <span className="h-full flex items-center text-foreground/20 whitespace-nowrap">01. お届け先指定</span>
              <span className="relative h-full flex items-center text-foreground whitespace-nowrap">
                02. お支払い方法
                <motion.span layoutId="activeStep" className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-foreground" />
              </span>
              <span className="h-full flex items-center text-foreground/20 whitespace-nowrap">03. 注文内容の最終確認</span>
            </div>

            <div className="space-y-10">
              {/* Express Checkout */}
              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground text-left">エクスプレスチェックアウト</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Apple Pay */}
                  <button className="flex items-center justify-center gap-3 bg-black text-white p-5 rounded-2xl hover:bg-black/90 transition-all font-bold border border-white/30 shadow-lg shadow-black/50">
                    <Apple size={20} /> Pay
                  </button>
                  
                  {/* Google Pay - Stable Text + SVG G Approach */}
                  <button className="flex items-center justify-center gap-2 bg-white border border-black/30 p-5 rounded-2xl hover:bg-black/[0.02] transition-all font-bold text-black group overflow-hidden shadow-lg shadow-black/5">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="text-xl font-bold tracking-tight">Pay</span>
                  </button>
                </div>
              </section>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-foreground/5"></span>
                </div>
                <div className="relative flex justify-center text-[10px] tracking-[0.4em] uppercase font-bold">
                  <span className="bg-[#fbfbfb] dark:bg-[#050505] px-6 text-foreground/20">または</span>
                </div>
              </div>

              {/* Payment Methods */}
              <section className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  
                  {/* Credit Card Option */}
                  <div 
                    onClick={() => setPaymentMethod("card")}
                    className={`p-6 rounded-3xl border transition-all cursor-pointer group ${paymentMethod === "card" ? "border-foreground bg-white dark:bg-white/5 shadow-xl" : "border-foreground/5 bg-transparent opacity-60 hover:opacity-100"}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                       <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${paymentMethod === "card" ? "bg-foreground text-background" : "bg-foreground/5 text-foreground"}`}>
                          <CreditCard size={20} />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-bold tracking-tight">クレジットカード</p>
                          <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest mt-0.5 whitespace-nowrap">Visa, Mastercard, JCB, AMEX</p>
                        </div>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${paymentMethod === "card" ? "border-foreground bg-foreground" : "border-foreground/10"}`}>
                        {paymentMethod === "card" && <div className="w-2 h-2 rounded-full bg-background" />}
                      </div>
                    </div>

                    <AnimatePresence>
                      {paymentMethod === "card" && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-8 space-y-6">
                            <div className="space-y-3 text-left">
                              <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40 block">カード番号</label>
                              <div className="relative">
                                <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-[#fbfbfb] dark:bg-black/20 border border-foreground/10 p-5 rounded-2xl focus:border-[#3d2b1f] outline-none transition-all placeholder:text-foreground/20 font-mono tracking-[0.2em]" />
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 flex gap-2 grayscale brightness-125 opacity-30">
                                  <div className="w-8 h-5 bg-foreground/10 rounded" />
                                  <div className="w-8 h-5 bg-foreground/10 rounded" />
                                  <div className="w-8 h-5 bg-foreground/10 rounded" />
                                </div>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                              <div className="space-y-3 text-left">
                                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40 block">有効期限 (月/年)</label>
                                <input type="text" placeholder="MM / YY" className="w-full bg-[#fbfbfb] dark:bg-black/20 border border-foreground/10 p-5 rounded-2xl focus:border-[#3d2b1f] outline-none transition-all placeholder:text-foreground/20 font-mono" />
                              </div>
                              <div className="space-y-3 text-left">
                                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40 block">セキュリティコード</label>
                                <input type="text" placeholder="CVC" className="w-full bg-[#fbfbfb] dark:bg-black/20 border border-foreground/10 p-5 rounded-2xl focus:border-[#3d2b1f] outline-none transition-all placeholder:text-foreground/20 font-mono" />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bank Transfer Option */}
                  <div 
                    onClick={() => setPaymentMethod("bank")}
                    className={`p-6 rounded-3xl border transition-all cursor-pointer group ${paymentMethod === "bank" ? "border-foreground bg-white dark:bg-white/5 shadow-xl" : "border-foreground/5 bg-transparent opacity-60 hover:opacity-100"}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${paymentMethod === "bank" ? "bg-foreground text-background" : "bg-foreground/5 text-foreground"}`}>
                          <Building2 size={20} />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-bold tracking-tight">銀行振込</p>
                          <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest mt-0.5">入金確認後の発送となります</p>
                        </div>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${paymentMethod === "bank" ? "border-foreground bg-foreground" : "border-foreground/10"}`}>
                        {paymentMethod === "bank" && <div className="w-2 h-2 rounded-full bg-background" />}
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {paymentMethod === "bank" && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6">
                            <div className="p-5 bg-[#3d2b1f]/5 rounded-2xl border border-[#3d2b1f]/10 text-[11px] leading-relaxed text-[#3d2b1f] dark:text-white/80 text-left">
                              注文完了後、ご登録のメールアドレスに振込先口座情報をお送りいたします。恐れ入りますが、振込手数料はお客様負担にてお願いしております。
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>
              </section>

              <div className="p-6 bg-green-500/5 border border-green-500/20 rounded-3xl flex items-center gap-4">
                <ShieldCheck className="text-green-600 shrink-0" size={24} />
                <div className="text-left">
                  <p className="text-[11px] font-bold text-green-700 dark:text-green-400">安全な決済システム</p>
                  <p className="text-[10px] text-green-700/60 dark:text-green-400/60">お客様の情報はSSLで暗号化され、安全に処理されます。KamaKraftがカード情報を直接保存することはありません。</p>
                </div>
              </div>

              <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-foreground/5">
                <p className="text-xs text-foreground/40 max-w-md text-left leading-relaxed">
                  [注文内容を確定する] ボタンを押すと、最終確認画面へ進みます。
                </p>
                <Link 
                  href="/checkout/review"
                  className="w-full md:w-auto min-w-[300px] bg-foreground text-background py-6 px-12 flex items-center justify-center gap-3 hover:scale-[1.02] transition-all font-bold tracking-[0.3em] text-xs uppercase shadow-2xl shadow-foreground/20 group active:scale-[0.98]"
                >
                  注文内容の最終確認へ
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
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
                
                {islandFee > 0 && (
                  <div className="flex justify-between text-[#3d2b1f] dark:text-white text-xs tracking-[0.2em] uppercase font-bold bg-[#3d2b1f]/5 p-2 rounded-lg">
                    <span>離島中継料</span>
                    <span>{formattedPrice(islandFee)}</span>
                  </div>
                )}

                <div className="pt-8 mt-4 border-t-2 border-foreground flex justify-between text-2xl font-bold tracking-tighter items-end">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30 mb-2">総計</span>
                    <span className="text-lg leading-none opacity-50">Total</span>
                  </div>
                  <motion.span 
                    className="text-3xl leading-none"
                  >
                    {formattedPrice(totalPrice + islandFee)}
                  </motion.span>
                </div>
              </div>

              <div className="mt-10 p-5 bg-foreground/5 rounded-3xl border border-foreground/5 text-center">
                <p className="text-[10px] text-foreground/40 leading-relaxed italic tracking-wider">
                  世界最高水準のセキュリティで <br />
                  安全に保護されています。
                </p>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
