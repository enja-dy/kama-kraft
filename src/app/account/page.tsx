"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { LogOut, User as UserIcon, Package, MapPin, Key, Plus, ChevronRight, X, CheckCircle2 } from "lucide-react";
import { createClient } from "@/lib/supabase";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

type Tab = "history" | "profile";

export default function AccountPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("history");
  const [isSigningOut, setIsSigningOut] = useState(false);
  const supabase = createClient();

  // Address State
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState<string | null>(null);
  const [addresses, setAddresses] = useState<any[]>([]);
  const [loadingAddresses, setLoadingAddresses] = useState(true);

  // Orders State
  const [orders, setOrders] = useState<any[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  // Modal Form State
  const [newName, setNewName] = useState("");
  const [newZip, setNewZip] = useState("");
  const [newPrefecture, setNewPrefecture] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newBuilding, setNewBuilding] = useState("");
  const [isLoadingAddress, setIsLoadingAddress] = useState(false); // API探索用
  const [isSaving, setIsSaving] = useState(false); // 保存中のローディング

  const fetchAddresses = async () => {
    if (!user) return;
    setLoadingAddresses(true);
    const { data, error } = await supabase
      .from('user_addresses')
      .select('*')
      .order('is_default', { ascending: false })
      .order('created_at', { ascending: false });
      
    if (error) {
      console.error("Error fetching addresses:", error);
    } else {
      setAddresses(data || []);
    }
    setLoadingAddresses(false);
  };

  const fetchOrders = async () => {
    if (!user) return;
    setLoadingOrders(true);
    const { data, error } = await supabase
      .from('user_orders')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) {
      console.error("Error fetching orders:", error);
    } else {
      setOrders(data || []);
    }
    setLoadingOrders(false);
  };

  useEffect(() => {
    if (!authLoading && user) {
      fetchAddresses();
      fetchOrders();
    }
  }, [user, authLoading]);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/auth");
    }
  }, [user, authLoading, router]);

  const handleZipChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, "");
    if (value.length <= 7) {
      setNewZip(value);
      if (value.length === 7) {
        setIsLoadingAddress(true);
        try {
          const res = await fetch(`/api/zipcode?zipcode=${value}`);
          const data = await res.json();
          if (data.code === 200 && data.data) {
            setNewPrefecture(data.data.pref);
            setNewAddress(data.data.address);
          }
        } catch (error) {
          console.error("Address fetch failed:", error);
        } finally {
          setIsLoadingAddress(false);
        }
      }
    }
  };

  const handleEditAddress = (addr: any) => {
    setEditingAddressId(addr.id);
    setNewName(addr.name.replace(" 様", ""));
    setNewZip(addr.zip.replace("-", ""));
    setNewPrefecture(addr.pref);
    setNewAddress(addr.addr);
    setNewBuilding(addr.build || "");
    setShowAddressModal(true);
  };

  const closeModal = () => {
    setNewName("");
    setNewZip("");
    setNewPrefecture("");
    setNewAddress("");
    setNewBuilding("");
    setEditingAddressId(null);
    setShowAddressModal(false);
  };

  const handleSaveAddress = async () => {
    if (!newName || !newZip || !newPrefecture || !newAddress || !user) return;
    setIsSaving(true);
    
    const addressData = {
      user_id: user.id,
      name: `${newName} 様`,
      zip: `${newZip.slice(0, 3)}-${newZip.slice(3)}`,
      pref: newPrefecture,
      addr: newAddress,
      build: newBuilding,
      is_default: addresses.length === 0
    };

    if (editingAddressId) {
      const { error } = await supabase
        .from('user_addresses')
        .update(addressData)
        .eq('id', editingAddressId);
      if (error) console.error("Error updating address:", error);
    } else {
      const { error } = await supabase
        .from('user_addresses')
        .insert([addressData]);
      if (error) console.error("Error adding address:", error);
    }
    
    await fetchAddresses();
    setIsSaving(false);
    closeModal();
  };

  const handleSignOut = async () => {
    setIsSigningOut(true);
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(price);
  };

  const translateStatus = (status: string) => {
    switch (status) {
      case 'paid': return '支払い完了・準備中';
      case 'pending': return '決済確認中';
      case 'shipped': return '発送済み';
      case 'canceled': return 'キャンセル';
      default: return '処理中';
    }
  };

  if (authLoading || !user) {
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-2">マイページ</h1>
            <p className="text-foreground/40 tracking-[0.2em] text-[10px] sm:text-xs uppercase">{user.email}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <button 
              onClick={handleSignOut}
              disabled={isSigningOut}
              className="flex items-center gap-2 text-xs tracking-[0.1em] font-bold uppercase text-foreground/60 hover:text-foreground transition-colors disabled:opacity-50 border border-foreground/10 hover:border-foreground/30 px-5 py-3 rounded-full"
            >
              <LogOut size={16} />
              {isSigningOut ? "処理中..." : "ログアウト"}
            </button>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.aside 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="w-full lg:w-64 shrink-0"
          >
            <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
              <button
                onClick={() => setActiveTab("history")}
                className={`flex items-center gap-3 px-5 py-4 rounded-2xl transition-all whitespace-nowrap text-sm font-bold tracking-wider hover:scale-[1.02] ${activeTab === "history" ? "bg-foreground text-background shadow-lg" : "bg-foreground/5 text-foreground/60 hover:bg-foreground/10 hover:text-foreground"}`}
              >
                <Package size={18} />ご注文履歴
              </button>
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex items-center gap-3 px-5 py-4 rounded-2xl transition-all whitespace-nowrap text-sm font-bold tracking-wider hover:scale-[1.02] ${activeTab === "profile" ? "bg-foreground text-background shadow-lg" : "bg-foreground/5 text-foreground/60 hover:bg-foreground/10 hover:text-foreground"}`}
              >
                <UserIcon size={18} />お客様情報
              </button>
            </nav>
          </motion.aside>

          <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              {activeTab === "history" && (
                <motion.div key="history" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="space-y-6">
                  <h2 className="text-xl font-bold tracking-widest border-b border-foreground/10 pb-4 mb-6">ご注文履歴</h2>
                  
                  {loadingOrders ? (
                    <div className="py-12 text-center text-foreground/40 text-xs tracking-widest uppercase animate-pulse">
                      注文データを取得中...
                    </div>
                  ) : orders.length === 0 ? (
                    <div className="bg-foreground/5 border border-foreground/10 rounded-3xl p-12 text-center">
                      <Package size={48} className="mx-auto text-foreground/20 mb-4" />
                      <h3 className="text-foreground/80 font-bold tracking-widest mb-2">ご注文履歴はありません</h3>
                      <p className="text-foreground/40 text-xs leading-relaxed">
                        職人の手による一生ものの家具との出会いを<br/>楽しみにお待ちしております。
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {orders.map((order) => (
                        <div key={order.id} className="bg-white dark:bg-white/5 border border-foreground/10 p-6 sm:p-8 rounded-[2rem] hover:border-foreground/30 transition-colors shadow-sm">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-foreground/5">
                            <div>
                              <p className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest mb-1">
                                注文日: {new Date(order.created_at).toLocaleDateString('ja-JP')}
                              </p>
                              <p className="text-[10px] text-foreground/30 font-mono tracking-wider">
                                注文番号: {order.id.split('-')[0].toUpperCase()}
                              </p>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className={`px-4 py-2 rounded-full text-[10px] font-bold tracking-widest shadow-sm ${order.status === 'paid' ? 'bg-green-500 text-white' : 'bg-foreground/10 text-foreground/70'}`}>
                                {translateStatus(order.status)}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row justify-between gap-6">
                            <div className="space-y-2 flex-1">
                              <p className="text-[10px] text-foreground/50 font-bold uppercase tracking-widest">お届け先</p>
                              <div className="flex flex-col gap-1 text-sm text-foreground/80 leading-relaxed">
                                <span className="font-bold">{order.shipping_name || "登録先の氏名"}</span>
                                <span className="text-xs">〒{order.shipping_zip}</span>
                                <span className="text-xs">{order.shipping_pref} {order.shipping_address}</span>
                              </div>
                            </div>
                            <div className="flex flex-col sm:items-end justify-end pt-4 sm:pt-0 sm:border-l border-t sm:border-t-0 border-foreground/5 sm:pl-8">
                              <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30 mb-2">総計</span>
                              <span className="text-2xl font-bold tracking-tighter">{formatPrice(order.total_amount)}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === "profile" && (
                <motion.div key="profile" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="space-y-12">
                  <section>
                    <h2 className="text-xl font-bold tracking-widest border-b border-foreground/10 pb-4 mb-6">基本情報設定</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-foreground/5 p-6 rounded-2xl border border-foreground/10">
                        <label className="block text-[10px] font-bold tracking-[0.2em] text-foreground/60 uppercase mb-2">お名前</label>
                        <input type="text" placeholder="氏名をご入力ください" className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:border-foreground outline-none transition-colors text-sm" />
                      </div>
                      <div className="bg-foreground/5 p-6 rounded-2xl border border-foreground/10">
                        <label className="block text-[10px] font-bold tracking-[0.2em] text-foreground/60 uppercase mb-2">メールアドレス</label>
                        <input type="email" defaultValue={user.email} disabled className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground/50 outline-none transition-colors text-sm cursor-not-allowed" />
                        <p className="text-[10px] text-foreground/40 mt-2">※メールアドレスの変更はお問い合わせにて承ります</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold tracking-widest border-b border-foreground/10 pb-4 mb-6 flex items-center gap-2"><Key size={20} className="text-foreground/60" />パスワードの変更</h2>
                    <div className="bg-foreground/5 p-8 rounded-3xl border border-foreground/10 max-w-lg">
                      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                          <label className="block text-[10px] font-bold tracking-[0.2em] text-foreground/60 uppercase mb-2">新しいパスワード</label>
                          <input type="password" placeholder="新しいパスワード" className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:border-foreground outline-none transition-colors text-sm" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold tracking-[0.2em] text-foreground/60 uppercase mb-2">パスワード（再入力）</label>
                          <input type="password" placeholder="パスワード（確認用）" className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:border-foreground outline-none transition-colors text-sm" />
                        </div>
                        <button type="submit" className="bg-foreground text-background text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-lg shadow-foreground/10">変更を保存する</button>
                      </form>
                    </div>
                  </section>

                  <section>
                    <div className="flex items-end justify-between border-b border-foreground/10 pb-4 mb-6">
                      <h2 className="text-xl font-bold tracking-widest flex items-center gap-2"><MapPin size={20} className="text-foreground/60" />配送先住所の管理</h2>
                      <button onClick={() => { setEditingAddressId(null); setShowAddressModal(true); }} className="text-[10px] tracking-widest uppercase font-bold text-foreground/60 hover:text-foreground transition-colors flex items-center gap-1 bg-foreground/5 px-3 py-2 rounded-full border border-foreground/10 hover:border-foreground/30"><Plus size={14} /> 新規追加</button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {loadingAddresses ? (
                        <div className="col-span-1 md:col-span-2 text-center py-10 text-foreground/40 text-xs tracking-widest uppercase animate-pulse">住所を読み込み中...</div>
                      ) : (
                        <>
                          {addresses.map((addr) => (
                            <div key={addr.id} onClick={() => handleEditAddress(addr)} className="border border-foreground/20 hover:border-foreground/50 transition-colors p-6 rounded-2xl relative group cursor-pointer bg-background dark:bg-black/20">
                              <div className="absolute top-6 right-6 text-foreground/20 group-hover:text-foreground/60 transition-colors"><ChevronRight size={20} /></div>
                              {addr.is_default && <span className="inline-block px-3 py-1 bg-foreground text-background text-[10px] font-bold tracking-widest mb-4 rounded-full shadow-sm">基本のお届け先</span>}
                              <p className="text-sm font-bold mb-2">{addr.name}</p>
                              <p className="text-xs text-foreground/60 leading-relaxed mb-1">〒{addr.zip}</p>
                              <p className="text-xs text-foreground/60 leading-relaxed">{addr.pref}{addr.addr}<br/>{addr.build}</p>
                            </div>
                          ))}
                        </>
                      )}

                      <div onClick={() => { setEditingAddressId(null); setShowAddressModal(true); }} className="border border-dashed border-foreground/20 hover:border-foreground/50 transition-colors p-6 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer min-h-[200px] group bg-foreground/[0.02]">
                        <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center mb-3 group-hover:bg-foreground/10 transition-colors"><Plus size={20} className="text-foreground/40 group-hover:text-foreground transition-colors" /></div>
                        <p className="text-xs font-bold tracking-widest text-foreground/60 group-hover:text-foreground transition-colors">新しい住所を登録する</p>
                      </div>
                    </div>
                  </section>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.main>
        </div>
      </div>

      <AnimatePresence>
        {showAddressModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} className="bg-[#fbfbfb] dark:bg-[#050505] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2rem] border border-foreground/10 shadow-2xl relative p-8 sm:p-12 text-foreground">
              <button onClick={closeModal} disabled={isSaving} className="absolute top-8 right-8 text-foreground/40 hover:text-foreground transition-colors"><X size={24} /></button>
              <div className="mb-10 text-left">
                <h2 className="text-2xl font-bold tracking-tighter mb-2">{editingAddressId ? "登録住所の編集" : "新しい住所を登録"}</h2>
                <p className="text-xs text-foreground/40">配送先の詳細情報をご入力ください。</p>
              </div>
              <div className="space-y-6 text-left">
                <div><label className="block text-[10px] font-bold tracking-[0.2em] text-foreground/60 uppercase mb-2">お名前</label><input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="鎌倉 太郎" disabled={isSaving} className="w-full bg-white dark:bg-white/5 border border-foreground/10 p-4 rounded-xl focus:border-foreground outline-none transition-all placeholder:text-foreground/20 text-sm disabled:opacity-50" /></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <label className="block text-[10px] font-bold tracking-[0.2em] text-foreground/60 uppercase mb-2">郵便番号</label>
                    <div className="relative">
                      <input type="text" value={newZip} onChange={handleZipChange} placeholder="2480000" maxLength={7} disabled={isSaving} className="w-full bg-white dark:bg-white/5 border border-foreground/10 p-4 rounded-xl focus:border-foreground outline-none transition-all placeholder:text-foreground/20 font-mono text-sm disabled:opacity-50" />
                      {isLoadingAddress && <div className="absolute right-3 top-1/2 -translate-y-1/2"><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-4 h-4 border-2 border-foreground border-t-transparent rounded-full" /></div>}
                      {!isLoadingAddress && newZip.length === 7 && <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500"><CheckCircle2 size={16} /></div>}
                    </div>
                  </div>
                  <div className="md:col-span-2"><label className="block text-[10px] font-bold tracking-[0.2em] text-foreground/60 uppercase mb-2">都道府県</label><input type="text" value={newPrefecture} onChange={(e) => setNewPrefecture(e.target.value)} placeholder="神奈川県" disabled={isSaving} className="w-full bg-white dark:bg-white/5 border border-foreground/10 p-4 rounded-xl focus:border-foreground outline-none transition-all placeholder:text-foreground/20 text-sm disabled:opacity-50" /></div>
                </div>
                <div><label className="block text-[10px] font-bold tracking-[0.2em] text-foreground/60 uppercase mb-2">市区町村・番地</label><input type="text" value={newAddress} onChange={(e) => setNewAddress(e.target.value)} placeholder="鎌倉市雪ノ下 1-2-3" disabled={isSaving} className="w-full bg-white dark:bg-white/5 border border-foreground/10 p-4 rounded-xl focus:border-foreground outline-none transition-all placeholder:text-foreground/20 text-sm disabled:opacity-50" /></div>
                <div><label className="block text-[10px] font-bold tracking-[0.2em] text-foreground/60 uppercase mb-2">建物名・部屋番号（任意）</label><input type="text" value={newBuilding} onChange={(e) => setNewBuilding(e.target.value)} placeholder="鎌倉ヒルズ 101" disabled={isSaving} className="w-full bg-white dark:bg-white/5 border border-foreground/10 p-4 rounded-xl focus:border-foreground outline-none transition-all placeholder:text-foreground/20 text-sm disabled:opacity-50" /></div>
              </div>
              <div className="mt-10 flex gap-4">
                <button onClick={closeModal} disabled={isSaving} className="flex-1 px-6 py-4 rounded-xl border border-foreground/10 text-foreground/60 hover:bg-foreground/5 hover:text-foreground transition-all font-bold text-xs tracking-widest uppercase disabled:opacity-50">キャンセル</button>
                <button onClick={handleSaveAddress} disabled={!newName || !newZip || !newPrefecture || !newAddress || isSaving} className="flex-1 px-6 py-4 rounded-xl bg-foreground text-background transition-all font-bold text-xs tracking-widest uppercase hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-xl shadow-foreground/10 flex items-center justify-center gap-2">
                  {isSaving ? <><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-4 h-4 border-2 border-background border-t-transparent rounded-full" />保存中...</> : "保存する"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
