"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { LogOut, User as UserIcon, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/lib/supabase";
import { useAuth } from "@/context/AuthContext";

export default function AccountPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
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
    <div className="min-h-screen pt-32 pb-24 px-6 bg-[#fbfbfb] dark:bg-[#050505] flex items-center justify-center">
      <div className="max-w-md w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-4">
            My Account
          </h1>
          <p className="text-foreground/40 tracking-[0.2em] text-[10px] sm:text-xs uppercase leading-relaxed">
            お客様のご登録情報
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-[#fbfbfb] dark:bg-[#050505] p-8 md:p-10 rounded-3xl border border-foreground/10 shadow-2xl shadow-black/5 relative overflow-hidden"
        >
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="w-20 h-20 bg-foreground/5 rounded-full flex items-center justify-center mb-4 border border-foreground/10">
              <UserIcon size={32} className="text-foreground/60" />
            </div>
            <p className="text-foreground text-sm font-bold tracking-wider break-all text-center">
              {user.email}
            </p>
          </div>

          <div className="space-y-4">
            <button 
              onClick={handleSignOut}
              disabled={isSigningOut}
              className="w-full bg-transparent border border-foreground/20 text-foreground py-4 flex items-center justify-center gap-2 hover:bg-foreground/5 transition-all font-bold tracking-[0.2em] text-xs uppercase disabled:opacity-50"
            >
              <LogOut size={16} />
              {isSigningOut ? "Processing..." : "ログアウト"}
            </button>
          </div>
        </motion.div>

        {/* Back Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/" className="text-xs text-foreground/40 hover:text-foreground transition-colors tracking-widest uppercase flex items-center justify-center gap-2">
            <ArrowLeft size={14} />
            トップページへ戻る
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
