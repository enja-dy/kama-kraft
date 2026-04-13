"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Truck, MapPin, Calendar, CreditCard, CheckCircle2, PackageCheck } from "lucide-react";

export default function ReviewPage() {
  const { cart, totalPrice, clearCart, shippingInfo, paymentMethod } = useCart();
  const [mounted, setMounted] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Stripeから戻ってきた時のURLパラメータチェック
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setIsOrdered(true);
      clearCart();
    }
  }, [clearCart]);

  const handleOrder = async () => {
    console.log('Handle Order Clicked - PaymentMethod:', paymentMethod);
    console.log('Cart Items:', cart.length);
    
    if (cart.length === 0) {
      alert('カートに商品が入っていません。');
      return;
    }

    if (paymentMethod === "bank") {
      setIsOrdered(true);
      clearCart();
      return;
    }

    // Stripe Checkout
    setLoading(true);
    try {
      console.log('Fetching /api/checkout...');
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cart,
          success_url: `${window.location.origin}/checkout/review?success=true`,
          cancel_url: `${window.location.origin}/checkout/review?canceled=true`,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '不明なエラーが発生しました。');
      }

      const { url } = await response.json();
      console.log('Redirecting to Stripe:', url);
      if (url) {
        window.location.assign(url);
      }
    } catch (error: any) {
      console.error('Payment Error:', error);
      alert(`エラーが発生しました: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const formattedPrice = (price: number) => {
    if (!mounted) return `¥${price.toLocaleString()}`;
    return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(price);
  };

  if (!mounted) return <div className="min-h-screen bg-[#fbfbfb] dark:bg-[#050505]" />;

  if (isOrdered) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-6 bg-[#fbfbfb] dark:bg-[#050505] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center space-y-8"
        >
          <div className="relative w-24 h-24 mx-auto">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="absolute inset-0 bg-green-500 rounded-full flex items-center justify-center text-white"
            >
              <CheckCircle2 size={48} />
            </motion.div>
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 bg-green-500/20 rounded-full"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter">ご注文ありがとうございます</h1>
            <p className="text-foreground/60 leading-relaxed text-sm">
              職人が一点一点、最終調整に入ります。<br />
              発送の準備が整い次第、改めてメールにてお知らせいたします。
            </p>
          </div>
          <div className="pt-8 flex flex-col gap-4">
            <Link href="/" className="bg-foreground text-background py-5 px-10 rounded-2xl font-bold tracking-widest text-xs uppercase hover:scale-[1.02] transition-all">
              トップページへ戻る
            </Link>
            <p className="text-[10px] text-foreground/20 font-bold uppercase tracking-[0.2em]">注文番号: #KK-2024-0042</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-[#fbfbfb] dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left: Review Content */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link href="/checkout/payment" className="text-xs tracking-widest text-[#3d2b1f] dark:text-white/40 hover:text-foreground transition-colors flex items-center gap-2 mb-8 uppercase font-bold">
                <ArrowLeft size={14} /> お支払い方法の変更
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground text-left">注文内容の最終確認</h1>
              <p className="text-foreground/60 text-sm italic">最後にもう一度、お届け先とお支払い内容をご確認ください。職人が心を込めて準備に入ります。</p>
            </motion.div>

            {/* Stepper */}
            <div className="flex items-center gap-8 text-[10px] tracking-[0.3em] font-bold uppercase border-b border-foreground/5 h-14 overflow-x-auto no-scrollbar">
              <span className="h-full flex items-center text-foreground/20 whitespace-nowrap">01. お届け先指定</span>
              <span className="h-full flex items-center text-foreground/20 whitespace-nowrap">02. お支払い方法</span>
              <span className="relative h-full flex items-center text-foreground whitespace-nowrap">
                03. 注文内容の最終確認
                <motion.span layoutId="activeStep" className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-foreground" />
              </span>
            </div>

            <div className="space-y-6">
              {/* Shipping Review */}
              <div className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-foreground/5 relative group hover:border-foreground/10 transition-all text-left">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3 text-lg font-bold tracking-tight">
                    <MapPin size={20} className="text-[#3d2b1f] dark:text-white/40" />
                    <h2>お届け先情報</h2>
                  </div>
                  <Link href="/checkout/shipping" className="text-[10px] uppercase tracking-widest font-bold text-[#3d2b1f] dark:text-white/40 hover:text-foreground underline underline-offset-4">変更する</Link>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-8">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/30 min-w-[80px]">お名前</span>
                    <span className="text-sm font-bold">{shippingInfo.name || "未指定"} 様</span>
                  </div>
                  <div className="flex gap-8">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/30 min-w-[80px]">メール</span>
                    <span className="text-sm">{shippingInfo.email || "未指定"}</span>
                  </div>
                  <div className="flex gap-8">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/30 min-w-[80px]">住所</span>
                    <span className="text-sm leading-relaxed">
                      〒{shippingInfo.zip} {shippingInfo.prefecture} {shippingInfo.address}<br />
                      {shippingInfo.building}
                    </span>
                  </div>
                </div>
              </div>

              {/* Delivery Schedule Review */}
              <div className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-foreground/5 relative group hover:border-foreground/10 transition-all text-left">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3 text-lg font-bold tracking-tight">
                    <Calendar size={20} className="text-[#3d2b1f] dark:text-white/40" />
                    <h2>お届け希望日程</h2>
                  </div>
                  <Link href="/checkout/shipping" className="text-[10px] uppercase tracking-widest font-bold text-[#3d2b1f] dark:text-white/40 hover:text-foreground underline underline-offset-4">変更する</Link>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-8">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/30 min-w-[80px]">希望日</span>
                    <span className="text-sm font-bold">{shippingInfo.date || "最短"}</span>
                  </div>
                  <div className="flex gap-8">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/30 min-w-[80px]">時間帯</span>
                    <span className="text-sm font-bold">{shippingInfo.time}</span>
                  </div>
                </div>
              </div>

              {/* Payment Review */}
              <div className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-foreground/5 relative group hover:border-foreground/10 transition-all text-left">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3 text-lg font-bold tracking-tight">
                    <CreditCard size={20} className="text-[#3d2b1f] dark:text-white/40" />
                    <h2>お支払い方法</h2>
                  </div>
                  <Link href="/checkout/payment" className="text-[10px] uppercase tracking-widest font-bold text-[#3d2b1f] dark:text-white/40 hover:text-foreground underline underline-offset-4">変更する</Link>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-8">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/30 min-w-[80px]">決済種別</span>
                    <span className="text-sm font-bold">
                      {paymentMethod === "card" ? "クレジットカード" : "銀行振込"}
                    </span>
                  </div>
                  <div className="flex gap-8">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/30 min-w-[80px]">詳細</span>
                    <span className="text-sm font-mono tracking-wider">
                      {paymentMethod === "card" ? "Stripeによる安全な決済" : "別途メールでお知らせ"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-foreground/5">
              <div className="flex items-center gap-4 text-left">
                <PackageCheck className="text-[#3d2b1f] dark:text-white/40" size={24} />
                <p className="text-xs text-foreground/40 max-w-md leading-relaxed">
                  注文を確定すると、契約が成立いたします。職人による最終調整後の発送となるため、キャンセル等については規約をご確認ください。
                </p>
              </div>
              <button 
                onClick={handleOrder}
                disabled={loading}
                className={`w-full md:w-auto min-w-[300px] bg-foreground text-background py-6 px-12 flex items-center justify-center gap-3 hover:scale-[1.02] transition-all font-bold tracking-[0.3em] text-xs uppercase shadow-2xl shadow-foreground/40 group active:scale-[0.98] ${loading ? 'opacity-50 cursor-not-allowed' : 'animate-pulse-slow'}`}
              >
                {loading ? '決済処理中...' : '注文を確定する'}
                {!loading && <CheckCircle2 size={20} className="group-hover:scale-110 transition-transform" />}
              </button>
            </div>
          </div>

          {/* Right: Final Summary Sidebar */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-white/5 p-10 rounded-[2.5rem] border border-foreground/5 sticky top-32 shadow-sm text-left"
            >
              <div className="flex items-center gap-3 mb-10 pb-6 border-b border-foreground/5">
                <Truck size={20} className="text-[#3d2b1f]  dark:text-white/40" />
                <h2 className="text-xl font-bold tracking-tight">最終ご注文内容</h2>
              </div>
              
              <div className="space-y-6 mb-10 overflow-y-auto max-h-[35vh] pr-4 scrollbar-thin scrollbar-thumb-foreground/10">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="relative w-16 h-16 bg-foreground/[0.03] dark:bg-white/5 rounded-xl overflow-hidden shrink-0 border border-foreground/5">
                      <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-xs font-bold truncate tracking-tight">{item.name}</p>
                      <p className="text-[10px] text-foreground/40 uppercase font-bold tracking-widest mt-1">数量: {item.quantity}</p>
                    </div>
                    <p className="text-xs font-bold">{formattedPrice(item.price * item.quantity)}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-6 border-t border-foreground/10">
                <div className="flex justify-between text-foreground/60 text-[10px] tracking-[0.2em] uppercase font-bold">
                  <span>商品合計</span>
                  <span>{formattedPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-foreground/60 text-[10px] tracking-[0.2em] uppercase font-bold">
                  <span>配送料</span>
                  <span className="text-green-600 font-bold italic tracking-normal">Free</span>
                </div>
                
                <div className="pt-6 mt-2 border-t-2 border-foreground flex justify-between text-2xl font-bold tracking-tighter items-end">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30 mb-2">総計</span>
                    <span className="text-lg leading-none opacity-50 font-medium">Grand Total</span>
                  </div>
                  <motion.span 
                    className="text-3xl leading-none"
                  >
                    {formattedPrice(totalPrice + shippingInfo.islandFee)}
                  </motion.span>
                </div>
              </div>

              <div className="mt-10 p-5 bg-[#3d2b1f]/5 rounded-3xl border border-[#3d2b1f]/10 text-center">
                <p className="text-[9px] text-[#3d2b1f] dark:text-white/40 leading-relaxed font-bold uppercase tracking-[0.1em]">
                  Artisan Quality Guaranteed <br />
                  <span className="opacity-40 italic">Crating the future of Kamakura</span>
                </p>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
