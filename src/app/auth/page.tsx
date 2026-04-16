"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Key, Wand2, AlertCircle, CheckCircle2 } from "lucide-react";
import { createClient } from "@/lib/supabase";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<"password" | "magic">("magic");
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotMode, setIsForgotMode] = useState(false);

  // Auth States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const supabase = createClient();

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setMessage({ type: 'error', text: `メールの送信に失敗しました（詳細: ${error.message}）` });
    } else {
      setMessage({ type: 'success', text: '認証リンクを記載したメールを送信しました。メールボックスをご確認ください。' });
    }
    setLoading(false);
  };

  const handlePasswordAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    if (isSignUp) {
      if (password !== confirmPassword) {
        setMessage({ type: 'error', text: 'パスワードが一致しません。' });
        setLoading(false);
        return;
      }
      
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        setMessage({ type: 'error', text: '登録エラー: ' + error.message });
      } else {
        setMessage({ type: 'success', text: '確認メールを送信しました。メール記載のリンクを開いて本登録を完了してください。' });
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setMessage({ type: 'error', text: 'メールアドレスまたはパスワードが正しくありません。' });
      } else {
        // Success
        window.location.href = '/'; 
      }
    }
    setLoading(false);
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setMessage({ type: 'error', text: 'パスワードを再設定するには、まずメールアドレスを入力してください。' });
      return;
    }
    setLoading(true);
    setMessage(null);
    
    // パスワード再設定メールを送信し、設定用画面（/auth/update-password）へリダイレクト
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/update-password`,
    });
    
    if (error) {
       setMessage({ type: 'error', text: `再設定メールの送信に失敗しました（詳細: ${error.message}）` });
    } else {
       setMessage({ type: 'success', text: 'パスワード再設定用のメールを送信しました。リンクを開いて新しいパスワードを設定してください。' });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-[#fbfbfb] dark:bg-[#050505] flex items-center justify-center">
      <div className="max-w-md w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-4">
            {isForgotMode ? "パスワードの再設定" : "新規登録 / ログイン"}
          </h1>
          <p className="text-foreground/40 tracking-[0.2em] text-[10px] sm:text-xs uppercase leading-relaxed">
            {isForgotMode ? "登録済みのメールアドレスを入力してください" : "お客様に合った認証方法をお選びください"}
          </p>
        </motion.div>

        {/* Tab Selection */}
        {!isForgotMode && (
          <div className="flex p-1 bg-foreground/5 rounded-2xl mb-8 border border-foreground/10 relative">
            <button
              onClick={() => { setActiveTab("magic"); setMessage(null); }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300 relative z-10 ${
                activeTab === "magic" ? "text-background" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              <Wand2 size={16} />
              マジックリンク
            </button>
            <button
              onClick={() => { setActiveTab("password"); setMessage(null); }}
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
        )}

        {/* Alerts */}
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              className={`mb-6 p-4 rounded-xl flex items-start gap-3 border text-xs leading-relaxed ${
                message.type === 'success' 
                  ? 'bg-green-500/10 border-green-500/20 text-green-700 dark:text-green-500' 
                  : 'bg-red-500/10 border-red-500/20 text-red-700 dark:text-red-400'
              }`}
            >
              {message.type === 'success' ? <CheckCircle2 size={16} className="shrink-0 mt-0.5" /> : <AlertCircle size={16} className="shrink-0 mt-0.5" />}
              <p>{message.text}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form Container */}
        <div className="bg-[#fbfbfb] dark:bg-[#050505] p-8 md:p-10 rounded-3xl border border-foreground/10 shadow-2xl shadow-black/5 relative overflow-hidden">
          <form className="space-y-5" onSubmit={activeTab === 'magic' ? handleMagicLink : isForgotMode ? handleResetPassword : handlePasswordAuth}>
            {activeTab === "magic" && !isForgotMode && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="mb-6 text-center">
                  <h2 className="text-lg font-bold mb-2">パスワード不要（推奨）</h2>
                  <p className="text-xs text-foreground/60 leading-relaxed text-left mt-4 mb-6">
                    ご入力いただいたメールアドレス宛に、一度だけ使える専用の認証リンクをお送りします。<br/><br/>
                    <strong className="text-foreground">初めての方も、リンクをクリックするだけで自動的に会員登録が完了します。</strong>
                  </p>
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-foreground/60 uppercase mb-2">Email Address</label>
                  <input type="email" placeholder="メールアドレス" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-transparent border-b border-foreground/20 py-3 text-foreground focus:border-foreground outline-none transition-colors text-sm" />
                </div>
              </motion.div>
            )}

            {activeTab === "password" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {!isForgotMode && (
                  <div className="mb-6 text-center">
                    <h2 className="text-lg font-bold mb-2">{isSignUp ? "パスワードで新規登録" : "パスワードでログイン"}</h2>
                    <p className="text-xs text-foreground/60 leading-relaxed text-left mt-4 mb-6">
                      {isSignUp ? "ご希望のメールアドレスとパスワードを入力して、新しくアカウントを作成します。" : "ご登録済みのメールアドレスとパスワードを使用して、ログインします。"}
                    </p>
                  </div>
                )}
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-foreground/60 uppercase mb-2">Email Address</label>
                  <input type="email" placeholder="メールアドレス" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-transparent border-b border-foreground/20 py-3 text-foreground focus:border-foreground outline-none transition-colors text-sm" />
                </div>
                
                {!isForgotMode && (
                  <div className="mt-5 space-y-5">
                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <label className="block text-[10px] font-bold tracking-[0.2em] text-foreground/60 uppercase">Password</label>
                        {!isSignUp && (
                          <button type="button" onClick={() => { setIsForgotMode(true); setMessage(null); }} className="text-[10px] text-foreground/40 hover:text-foreground transition-colors underline-offset-4 hover:underline">お忘れですか？</button>
                        )}
                      </div>
                      <input type="password" placeholder="パスワード" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-transparent border-b border-foreground/20 py-3 text-foreground focus:border-foreground outline-none transition-colors text-sm" />
                    </div>

                    {isSignUp && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="pt-2">
                        <label className="block text-[10px] font-bold tracking-[0.2em] text-foreground/60 uppercase mb-2">Confirm Password</label>
                        <input type="password" placeholder="パスワード（確認用）" required={isSignUp} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full bg-transparent border-b border-foreground/20 py-3 text-foreground focus:border-foreground outline-none transition-colors text-sm" />
                      </motion.div>
                    )}
                  </div>
                )}
              </motion.div>
            )}

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-foreground text-background py-4 flex items-center justify-center gap-2 hover:scale-[1.02] transition-all font-bold tracking-[0.2em] text-xs uppercase shadow-xl shadow-foreground/10 mt-8 disabled:opacity-50 disabled:hover:scale-100"
            >
              {loading ? "PROCESSING..." : activeTab === 'magic' ? "ログインリンクを送信" : isForgotMode ? "再設定リンクを送信" : isSignUp ? "会員登録する" : "ログイン"}
            </button>
          </form>

          {/* Toggle Links */}
          {activeTab === "password" && (
            <div className="mt-8 text-center border-t border-foreground/10 pt-6">
              {isForgotMode ? (
                <button type="button" onClick={() => { setIsForgotMode(false); setMessage(null); }} className="text-xs text-foreground/60 hover:text-foreground transition-colors underline underline-offset-4">
                  ログイン画面に戻る
                </button>
              ) : (
                <button type="button" onClick={() => { setIsSignUp(!isSignUp); setMessage(null); }} className="text-xs text-foreground/60 hover:text-foreground transition-colors underline underline-offset-4">
                  {isSignUp ? "すでにアカウントをお持ちの方はこちら（ログイン）" : "初めての方はこちら（メールアドレスで新規登録）"}
                </button>
              )}
            </div>
          )}
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
