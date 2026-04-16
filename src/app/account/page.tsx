"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { LogOut, User as UserIcon, Package, MapPin, Key, Plus, ChevronRight } from "lucide-react";
import { createClient } from "@/lib/supabase";
import { useAuth } from "@/context/AuthContext";

type Tab = "history" | "profile";

export default function AccountPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("history");
  const [isSigningOut, setIsSigningOut] = useState(false);
  const supabase = createClient();

  // 未ログイン時はログイン画面へリダイレクト
  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth");
    }
  }, [user, loading, router]);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    await supabase.auth.signOut();
    router.push("/");
    router.refresh(); // 強制的に再レンダリングしてヘッダー等の状態を即座に反映
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-6 bg-[#fbfbfb] dark:bg-[#050505] flex items-center justify-center">
        <div className="text-foreground/40 text-xs tracking-widest uppercase animate-pulse">
          認証情報を確認しています...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-12 bg-[#fbfbfb] dark:bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-2">
              My Page
            </h1>
            <p className="text-foreground/40 tracking-[0.2em] text-[10px] sm:text-xs uppercase">
              {user.email}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <button 
              onClick={handleSignOut}
              disabled={isSigningOut}
              className="flex items-center gap-2 text-xs tracking-[0.1em] font-bold uppercase text-foreground/60 hover:text-foreground transition-colors disabled:opacity-50 border border-foreground/10 hover:border-foreground/30 px-5 py-3 rounded-full"
            >
              <LogOut size={16} />
              {isSigningOut ? "Processing..." : "ログアウト"}
            </button>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <motion.aside 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="w-full lg:w-64 shrink-0"
          >
            <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
              <button
                onClick={() => setActiveTab("history")}
                className={`flex items-center gap-3 px-5 py-4 rounded-2xl transition-all whitespace-nowrap text-sm font-bold tracking-wider hover:scale-[1.02] ${
                  activeTab === "history" 
                    ? "bg-foreground text-background shadow-lg" 
                    : "bg-foreground/5 text-foreground/60 hover:bg-foreground/10 hover:text-foreground"
                }`}
              >
                <Package size={18} />
                ご注文履歴
              </button>
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex items-center gap-3 px-5 py-4 rounded-2xl transition-all whitespace-nowrap text-sm font-bold tracking-wider hover:scale-[1.02] ${
                  activeTab === "profile" 
                    ? "bg-foreground text-background shadow-lg" 
                    : "bg-foreground/5 text-foreground/60 hover:bg-foreground/10 hover:text-foreground"
                }`}
              >
                <UserIcon size={18} />
                お客様情報
              </button>
            </nav>
          </motion.aside>

          {/* Main Content Area */}
          <motion.main 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1 min-w-0"
          >
            <AnimatePresence mode="wait">
              {activeTab === "history" && (
                <motion.div
                  key="history"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-bold tracking-widest border-b border-foreground/10 pb-4 mb-6">ご注文履歴</h2>
                  
                  {/* Empty State Mock */}
                  <div className="bg-foreground/5 border border-foreground/10 rounded-3xl p-12 text-center">
                    <Package size={48} className="mx-auto text-foreground/20 mb-4" />
                    <h3 className="text-foreground/80 font-bold tracking-widest mb-2">ご注文履歴はありません</h3>
                    <p className="text-foreground/40 text-xs leading-relaxed">
                      職人の手による一生ものの家具との出会いを<br/>楽しみにお待ちしております。
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === "profile" && (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-12"
                >
                  {/* 基本情報フォーム */}
                  <section>
                    <h2 className="text-xl font-bold tracking-widest border-b border-foreground/10 pb-4 mb-6">基本情報設定</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-foreground/5 p-6 rounded-2xl border border-foreground/10">
                        <label className="block text-[10px] font-bold tracking-[0.2em] text-foreground/60 uppercase mb-2">Name</label>
                        <input type="text" placeholder="氏名をご入力ください" className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:border-foreground outline-none transition-colors text-sm" />
                      </div>
                      <div className="bg-foreground/5 p-6 rounded-2xl border border-foreground/10">
                        <label className="block text-[10px] font-bold tracking-[0.2em] text-foreground/60 uppercase mb-2">Email</label>
                        <input type="email" defaultValue={user.email} disabled className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground/50 outline-none transition-colors text-sm cursor-not-allowed" />
                        <p className="text-[10px] text-foreground/40 mt-2">※メールアドレスの変更はお問い合わせにて承ります</p>
                      </div>
                    </div>
                  </section>

                  {/* パスワード設定 */}
                  <section>
                    <h2 className="text-xl font-bold tracking-widest border-b border-foreground/10 pb-4 mb-6 flex items-center gap-2">
                      <Key size={20} className="text-foreground/60" />
                      パスワードの変更
                    </h2>
                    <div className="bg-foreground/5 p-8 rounded-3xl border border-foreground/10 max-w-lg">
                      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                          <label className="block text-[10px] font-bold tracking-[0.2em] text-foreground/60 uppercase mb-2">New Password</label>
                          <input type="password" placeholder="新しいパスワード" className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:border-foreground outline-none transition-colors text-sm" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold tracking-[0.2em] text-foreground/60 uppercase mb-2">Confirm Password</label>
                          <input type="password" placeholder="パスワード（確認用）" className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:border-foreground outline-none transition-colors text-sm" />
                        </div>
                        <button type="submit" className="bg-foreground text-background text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-lg shadow-foreground/10">
                          変更を保存する
                        </button>
                      </form>
                    </div>
                  </section>

                  {/* 配送先住所リスト */}
                  <section>
                    <div className="flex items-end justify-between border-b border-foreground/10 pb-4 mb-6">
                      <h2 className="text-xl font-bold tracking-widest flex items-center gap-2">
                        <MapPin size={20} className="text-foreground/60" />
                        配送先住所の管理
                      </h2>
                      <button className="text-[10px] tracking-widest uppercase font-bold text-foreground/60 hover:text-foreground transition-colors flex items-center gap-1 bg-foreground/5 px-3 py-2 rounded-full border border-foreground/10 hover:border-foreground/30">
                        <Plus size={14} /> 新規追加
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* ダミーの住所カード */}
                      <div className="border border-foreground/20 hover:border-foreground/50 transition-colors p-6 rounded-2xl relative group cursor-pointer bg-background dark:bg-black/20">
                        <div className="absolute top-6 right-6 text-foreground/20 group-hover:text-foreground/60 transition-colors">
                          <ChevronRight size={20} />
                        </div>
                        <span className="inline-block px-3 py-1 bg-foreground text-background text-[10px] font-bold tracking-widest mb-4 rounded-full">
                          既定の住所
                        </span>
                        <p className="text-sm font-bold mb-2">鎌倉 太郎 様</p>
                        <p className="text-xs text-foreground/60 leading-relaxed mb-1">〒248-0006</p>
                        <p className="text-xs text-foreground/60 leading-relaxed">神奈川県鎌倉市小町1-2-3<br/>KamaKraft レジデンス 101号室</p>
                      </div>

                      <div className="border border-dashed border-foreground/20 hover:border-foreground/50 transition-colors p-6 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer min-h-[200px] group bg-foreground/[0.02]">
                        <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center mb-3 group-hover:bg-foreground/10 transition-colors">
                          <Plus size={20} className="text-foreground/40 group-hover:text-foreground transition-colors" />
                        </div>
                        <p className="text-xs font-bold tracking-widest text-foreground/60 group-hover:text-foreground transition-colors">
                          新しい住所を登録する
                        </p>
                      </div>
                    </div>
                  </section>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.main>
        </div>
      </div>
    </div>
  );
}
