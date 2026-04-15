"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Key, Wand2 } from "lucide-react";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<"password" | "magic">("magic");
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-[#fbfbfb] dark:bg-[#050505] flex items-center justify-center">
      <div className="max-w-md w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-4">
            ログイン / 新規登録
          </h1>
          <p className="text-foreground/40 tracking-[0.2em] text-[10px] sm:text-xs uppercase leading-relaxed">
            お客様に合った認証方法をお選びください
          </p>
        </motion.div>

        {/* Tab Selection */}
        <div className="flex p-1 bg-foreground/5 rounded-2xl mb-8 border border-foreground/10 relative">
          <button
            onClick={() => setActiveTab("magic")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300 relative z-10 ${
              activeTab === "magic" ? "text-background" : "text-foreground/60 hover:text-foreground"
            }`}
          >
            <Wand2 size={16} />
            マジックリンク
          </button>
          <button
            onClick={() => setActiveTab("password")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300 relative z-10 ${
              activeTab === "password" ? "text-background" : "text-foreground/60 hover:text-foreground"
            }`}
          >
            <Key size={16} />
            パスワード
          </button>
          
          {/* Active Tab Background Animation */}
          <motion.div
            className="absolute top-1 bottom-1 w-[calc(50%-0.25rem)] bg-foreground rounded-xl shadow-md z-0"
            initial={false}
            animate={{
              left: activeTab === "magic" ? "0.25rem" : "50%"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>

        {/* Form Container */}
        <div className="bg-[#fbfbfb] dark:bg-[#050505] p-8 md:p-10 rounded-3xl border border-foreground/10 shadow-2xl shadow-black/5 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === "magic" ? (
              <motion.div
                key="magic"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-6 text-center">
                  <h2 className="text-lg font-bold mb-2">パスワード不要（推奨）</h2>
                  <p className="text-xs text-foreground/60 leading-relaxed text-left mt-4 mb-6">
                    ご入力いただいたメールアドレス宛に、一度だけ使える専用の認証リンクをお送りします。<br/><br/>
                    <strong className="text-foreground">初めての方も、リンクをクリックするだけで自動的に会員登録が完了します。</strong>
                    パスワードを管理したり、覚える必要はありません。
                  </p>
                </div>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.2em] text-foreground/60 uppercase mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      placeholder="メールアドレス" 
                      required
                      className="w-full bg-transparent border-b border-foreground/20 py-3 text-foreground focus:border-foreground outline-none transition-colors text-sm"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-foreground text-background py-4 flex items-center justify-center gap-2 hover:scale-[1.02] transition-all font-bold tracking-[0.2em] text-xs uppercase shadow-xl shadow-foreground/10 mt-8"
                  >
                    ログインリンクを送信
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="password"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-6 text-center">
                  <h2 className="text-lg font-bold mb-2">{isSignUp ? "パスワードで新規登録" : "パスワードでログイン"}</h2>
                  <p className="text-xs text-foreground/60 leading-relaxed text-left mt-4 mb-6">
                    {isSignUp 
                      ? "ご希望のメールアドレスとパスワードを入力して、新しくアカウントを作成します。"
                      : "ご登録済みのメールアドレスとパスワードを使用して、ログインします。"}
                  </p>
                </div>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.2em] text-foreground/60 uppercase mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      placeholder="メールアドレス" 
                      required
                      className="w-full bg-transparent border-b border-foreground/20 py-3 text-foreground focus:border-foreground outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <label className="block text-[10px] font-bold tracking-[0.2em] text-foreground/60 uppercase">
                        Password
                      </label>
                      {!isSignUp && (
                        <button type="button" className="text-[10px] text-foreground/40 hover:text-foreground transition-colors underline-offset-4 hover:underline">
                          お忘れですか？
                        </button>
                      )}
                    </div>
                    <input 
                      type="password" 
                      placeholder="パスワード" 
                      required
                      className="w-full bg-transparent border-b border-foreground/20 py-3 text-foreground focus:border-foreground outline-none transition-colors text-sm"
                    />
                  </div>
                  
                  {/* Sign Up Confirmation Password */}
                  {isSignUp && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="pt-2"
                    >
                      <label className="block text-[10px] font-bold tracking-[0.2em] text-foreground/60 uppercase mb-2">
                        Confirm Password
                      </label>
                      <input 
                        type="password" 
                        placeholder="パスワード（確認用）" 
                        required
                        className="w-full bg-transparent border-b border-foreground/20 py-3 text-foreground focus:border-foreground outline-none transition-colors text-sm"
                      />
                    </motion.div>
                  )}

                  <button 
                    type="submit"
                    className="w-full bg-foreground text-background py-4 flex items-center justify-center gap-2 hover:scale-[1.02] transition-all font-bold tracking-[0.2em] text-xs uppercase shadow-xl shadow-foreground/10 mt-8"
                  >
                    {isSignUp ? "会員登録する" : "ログイン"}
                  </button>
                </form>

                <div className="mt-8 text-center border-t border-foreground/10 pt-6">
                  <button 
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-xs text-foreground/60 hover:text-foreground transition-colors underline underline-offset-4"
                  >
                    {isSignUp ? "すでにアカウントをお持ちの方はこちら（ログイン）" : "初めての方はこちら（メールアドレスで新規登録）"}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Back Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/checkout/auth" className="text-xs text-foreground/40 hover:text-foreground transition-colors tracking-widest uppercase flex items-center justify-center gap-2">
            <ArrowLeft size={14} />
            前の画面へ戻る
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
