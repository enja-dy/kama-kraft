"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { User, ShoppingBag, ArrowRight, ShieldCheck, Mail } from "lucide-react";

export default function CheckoutAuthPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-[#fbfbfb] dark:bg-[#050505] flex items-center justify-center">
      <div className="max-w-5xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-4">
            ご購入手続き
          </h1>
          <p className="text-foreground/40 tracking-[0.2em] text-sm uppercase">職人の手仕事をお届けするために、進み方をお選びください</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-px bg-foreground/5 p-px overflow-hidden rounded-3xl border border-foreground/10">
          {/* Option: Guest Checkout */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#fbfbfb] dark:bg-[#050505] p-10 md:p-16 flex flex-col justify-between group hover:bg-white dark:hover:bg-white/[0.02] transition-colors"
          >
            <div>
              <div className="w-16 h-16 rounded-full bg-[#3d2b1f]/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <ShoppingBag size={32} className="text-[#3d2b1f]" />
              </div>
              <h2 className="text-2xl font-bold mb-4 tracking-tight">ゲストとして注文</h2>
              <p className="text-foreground/60 leading-relaxed text-sm mb-8">
                会員登録せずに、そのまま購入手続きへ進めます。今回のみのお買い物や、お急ぎの方に最適です。
              </p>
              <ul className="space-y-3 mb-12">
                <li className="flex items-center gap-3 text-xs text-foreground/40">
                  <ArrowRight size={14} /> 最短3分で入力完了
                </li>
                <li className="flex items-center gap-3 text-xs text-foreground/40">
                  <ArrowRight size={14} /> 登録情報の管理不要
                </li>
              </ul>
            </div>
            <Link 
              href="/checkout/shipping?mode=guest"
              className="w-full py-5 px-8 flex items-center justify-center gap-3 border border-foreground/20 hover:bg-foreground hover:text-background transition-all font-bold tracking-[0.2em] text-xs uppercase"
            >
              ゲスト購入へ
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          {/* Option: Login / Signup */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#fbfbfb] dark:bg-[#050505] p-10 md:p-16 flex flex-col justify-between group hover:bg-white dark:hover:bg-white/[0.02] transition-colors relative"
          >
            {/* Recommendation Badge */}
            <div className="absolute top-8 right-8 bg-[#3d2b1f] text-white text-[10px] px-3 py-1 tracking-[0.2em] font-bold uppercase rounded-full">
              おすすめ
            </div>

            <div>
              <div className="w-16 h-16 rounded-full bg-[#3d2b1f]/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <User size={32} className="text-[#3d2b1f]" />
              </div>
              <h2 className="text-2xl font-bold mb-4 tracking-tight">会員登録 / ログイン</h2>
              <p className="text-foreground/60 leading-relaxed text-sm mb-8">
                一生ものの家具を、より安心してお使いいただくために。購入履歴の管理やアフターメンテナンスの受付がスムーズになります。
              </p>
              <div className="space-y-4 mb-12 p-6 bg-[#3d2b1f]/5 rounded-2xl">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={18} className="text-[#3d2b1f] shrink-0 mt-0.5" />
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    <span className="font-bold block mb-1">生涯メンテナンス保証</span>
                    職人が提供するメンテナンスや修理履歴をデジタル管理し、世代を超えた継承をサポートします。
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-[#3d2b1f] shrink-0 mt-0.5" />
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    <span className="font-bold block mb-1">工房だよりの購読</span>
                    新作の発表や、職人の制作秘話、鎌倉からの季節のご挨拶をお届けします。
                  </p>
                </div>
              </div>
            </div>
            <Link 
              href="/auth"
              className="w-full bg-foreground text-background py-5 px-8 flex items-center justify-center gap-3 hover:scale-[1.02] transition-all font-bold tracking-[0.2em] text-xs uppercase shadow-xl shadow-foreground/10"
            >
              ログイン・新規登録
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Back Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/cart" className="text-sm text-foreground/40 hover:text-foreground transition-colors tracking-widest uppercase flex items-center justify-center gap-2">
            <span className="rotate-180"><ArrowRight size={16} /></span>
            買い物籠へ戻る
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
