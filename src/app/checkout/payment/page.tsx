"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Truck, CreditCard, Building2, Apple, Wallet, CheckCircle2, ShieldCheck } from "lucide-react";

export default function PaymentPage() {
  const { cart, totalPrice, paymentMethod, setPaymentMethod } = useCart();
  const [mounted, setMounted] = useState(false);
  
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
              {/* Payment Methods */}
              <section className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  
                  {/* Credit Card & Digital Wallet Option */}
                  <div 
                    onClick={() => setPaymentMethod("card")}
                    className={`p-8 rounded-[2.5rem] border transition-all cursor-pointer group ${paymentMethod === "card" ? "border-foreground bg-white dark:bg-white/5 shadow-2xl" : "border-foreground/5 bg-transparent opacity-60 hover:opacity-100"}`}
                  >
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-6">
                        <div className={`p-4 rounded-2xl ${paymentMethod === "card" ? "bg-foreground text-background" : "bg-foreground/5 text-foreground"}`}>
                          <CreditCard size={24} />
                        </div>
                        <div className="text-left">
                          <p className="text-lg font-bold tracking-tight mb-1">クレジットカード / デジタル決済</p>
                          <div className="flex items-center gap-4 flex-wrap">
                            <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest whitespace-nowrap">Visa, Mastercard, JCB, AMEX</p>
                            <span className="w-1 h-1 bg-foreground/10 rounded-full" />
                            <div className="flex items-center gap-2">
                              <Apple size={14} className="opacity-60" />
                              <svg width="32" height="13" viewBox="0 0 32 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
                                <path d="M4.532 1.096c-.952 0-1.896.38-2.584.996C1.26 2.708.912 3.652.912 4.604c0 .952.348 1.896.936 2.612.688.616 1.632.996 2.684.996 1.052 0 1.996-.38 2.684-.996l-1.008-.948c-.46.36-1.032.612-1.676.612-.644 0-1.216-.252-1.676-.612-.46-.36-.72-.888-.72-1.664s.26-1.304.72-1.664c.46-.36 1.032-.612 1.676-.612.644 0 1.152.252 1.612.612l1.008-.948c-.688-.616-1.632-.912-2.572-.912zm6.204.144c-1.308 0-2.364 1.056-2.364 2.364s1.056 2.364 2.364 2.364 2.364-1.056 2.364-2.364-1.056-2.364-2.364-2.364zm0 3.756c-.756 0-1.392-.636-1.392-1.392s.636-1.392 1.392-1.392 1.392.636 1.392 1.392-.636 1.392-1.392 1.392zm4.392-3.612h-1c-.132 0-.24.108-.24.24v4.248c0 .132.108.24.24.24h1c.132 0 .24-.108.24-.24V1.628c0-.132-.108-.24-.24-.24zm4.248.144c-1.308 0-2.364 1.056-2.364 2.364s1.056 2.364 2.364 2.364c.54 0 1.032-.18 1.428-.48v.24c0 .756-.636 1.392-1.392 1.392h-.036c-.516 0-.96-.288-1.2-.72l-.84.444c.42.756 1.176 1.248 2.076 1.248.132 0 .192.012.216.012 1.308 0 2.364-1.056 2.364-2.364V1.628c0-.132-.108-.24-.24-.24h-1c-.132 0-.24.108-.24.24v.24c-.396-.3-.888-.48-1.428-.48zm0 3.756c-.756 0-1.392-.636-1.392-1.392s.636-1.392 1.392-1.392 1.392.636 1.392 1.392-.636 1.392-1.392 1.392zm4.656-3.756c-.132 0-.24.108-.24.24v4.248c0 .132.108.24.24.24h1c.132 0 .24-.108.24-.24V1.628c0-.132-.108-.24-.24-.24h-1zm4.62.144c-1.308 0-2.364 1.056-2.364 2.364s1.056 2.364 2.364 2.364c.912 0 1.668-.516 2.076-1.272l-.84-.444c-.24.432-.684.72-1.2.72-.756 0-1.392-.636-1.392-1.392 0-.756.636-1.392 1.392-1.392.516 0 .96.288 1.2.72l.84-.444c-.42-.756-1.164-1.272-2.076-1.272z" fill="currentColor"/>
                              </svg>
                            </div>
                          </div>
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
                          <div className="pt-8 space-y-4">
                            <div className="p-5 bg-foreground/5 rounded-2xl text-[11px] leading-relaxed text-foreground/70 text-left flex items-center gap-4">
                              <span className="shrink-0 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                              Apple Pay, Google Pay もご利用いただけます。次の画面でお支払いいただけます。
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
                        <div className={`p-3 rounded-xl ${paymentMethod === "bank" ? "bg-foreground text-background" : "bg-foreground/10 text-foreground"}`}>
                          <Building2 size={20} />
                        </div>
                        <div className="text-left">
                          <p className={`text-sm font-bold tracking-tight ${paymentMethod === "bank" ? "text-foreground" : "text-foreground/90"}`}>銀行振込</p>
                          <p className={`text-[10px] font-bold uppercase tracking-widest mt-0.5 ${paymentMethod === "bank" ? "text-foreground/60" : "text-foreground/70"}`}>入金確認後の発送となります</p>
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
