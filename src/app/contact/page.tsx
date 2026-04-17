"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail, HelpCircle, Send } from "lucide-react";

const FAQ_DATA = [
  {
    question: "注文から配送までどのくらいかかりますか？",
    answer: "KamaKraftの家具はすべて職人による手作りです。既製品の場合は1〜2週間、受注生産品や大型家具の場合は約1ヶ月〜2ヶ月ほどお時間をいただいております。職人が一点一点、魂を込めて仕上げるため、お時間を頂戴しておりますことをご了承ください。",
  },
  {
    question: "配送料について教えてください。",
    answer: "日本全国への配送を承っております。大型家具の場合は、専門の配送業者による「設置・梱包材回収込み」のプランをご案内しております。配送料は商品サイズと配送地域によって異なりますので、カート画面にて詳細をご確認いただけます。",
  },
  {
    question: "ウリン材のお手入れはどうすればいいですか？",
    answer: "ウリン（アイアンウッド）は非常に耐久性が高く、腐食に強いため、基本的にはメンテナンスフリーでお使いいただけます。経年変化により美しい銀白色（シルバーグレー）へと変わっていきます。本来の赤褐色を維持したい場合は、年に一度程度のウッドオイル塗布を推奨しております。",
  },
  {
    question: "オーダーメイドの相談は可能ですか？",
    answer: "はい、承っております。お客様のご自宅のスペースに合わせたサイズ変更や、特別なデザインのご要望など、職人と直接相談しながら製作することが可能です。お問い合わせフォームより「オーダーメイド相談」を選択してご連絡ください。",
  },
];

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"faq" | "email">("faq");

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extralight tracking-[0.2em] mb-4"
          >
            SUPPORT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-white/40 text-sm tracking-widest"
          >
            お客様の想いに、職人がお答えします。
          </motion.p>
        </div>

        {/* Sliding Toggle */}
        <div className="flex justify-center mb-16">
          <div className="relative bg-white/5 p-1 rounded-full flex w-full max-w-md border border-white/10 overflow-hidden">
            {/* Sliding Background */}
            <motion.div
              layoutId="tab-background"
              className="absolute inset-y-1 bg-white/10 rounded-full"
              initial={false}
              animate={{
                left: activeTab === "faq" ? "4px" : "50%",
                width: "calc(50% - 4px)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            <button
              onClick={() => setActiveTab("faq")}
              className={`relative z-10 flex-1 py-3 text-[13px] md:text-sm tracking-widest transition-colors duration-300 flex items-center justify-center gap-2 ${
                activeTab === "faq" ? "text-white" : "text-white/40 hover:text-white/60"
              }`}
            >
              <HelpCircle size={16} />
              <span>よくある質問</span>
            </button>
            <button
              onClick={() => setActiveTab("email")}
              className={`relative z-10 flex-1 py-3 text-[13px] md:text-sm tracking-widest transition-colors duration-300 flex items-center justify-center gap-2 ${
                activeTab === "email" ? "text-white" : "text-white/40 hover:text-white/60"
              }`}
            >
              <Mail size={16} />
              <span>お問い合わせ</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative overflow-hidden min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === "faq" ? (
              <motion.div
                key="faq"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {FAQ_DATA.map((faq, index) => (
                  <FAQItem key={index} faq={faq} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="email"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <ContactForm />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ faq, index }: { faq: typeof FAQ_DATA[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-white/5"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-light tracking-wider group-hover:text-white transition-colors">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-white/20 group-hover:text-white/60 transition-colors"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-white/60 leading-relaxed font-light text-base">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // 実際の送信処理は後ほどAPI Routeを作成して実装
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20 px-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
      >
        <div className="mb-6 flex justify-center text-white/20">
          <Send size={48} />
        </div>
        <h2 className="text-2xl font-light tracking-[0.2em] mb-4">送信完了</h2>
        <p className="text-white/40 font-light leading-relaxed mb-8">
          お問い合わせを受け付けました。職人が内容を確認の上、<br />
          通常2〜3営業日以内にご返信申し上げます。
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-10 py-3 border border-white/20 hover:bg-white text-white hover:text-black transition-all duration-500 text-xs tracking-[0.3em] font-light"
        >
          戻る
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 ml-1">Name</label>
          <input
            required
            type="text"
            className="w-full bg-transparent border-b border-white/10 py-3 px-1 focus:border-white outline-none transition-colors font-light placeholder:text-white/5"
            placeholder="お名前"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 ml-1">Email</label>
          <input
            required
            type="email"
            className="w-full bg-transparent border-b border-white/10 py-3 px-1 focus:border-white outline-none transition-colors font-light placeholder:text-white/5"
            placeholder="メールアドレス"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 ml-1">Subject</label>
        <div className="relative">
          <select
            required
            className="w-full bg-transparent border-b border-white/10 py-3 px-1 focus:border-white outline-none transition-colors font-light appearance-none text-white/80"
          >
            <option value="" className="bg-[#0a0a0a]">お問い合わせ種別をお選びください</option>
            <option value="product" className="bg-[#0a0a0a]">製品についてのご質問</option>
            <option value="custom" className="bg-[#0a0a0a]">オーダーメイドのご相談</option>
            <option value="shipping" className="bg-[#0a0a0a]">配送・納期について</option>
            <option value="maintenance" className="bg-[#0a0a0a]">メンテナンスのご相談</option>
            <option value="other" className="bg-[#0a0a0a]">その他</option>
          </select>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
            <ChevronDown size={14} />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 ml-1">Message</label>
        <textarea
          required
          rows={5}
          className="w-full bg-transparent border border-white/10 rounded-lg p-4 focus:border-white outline-none transition-colors font-light resize-none placeholder:text-white/5"
          placeholder="お問い合わせ内容をご記入ください"
        />
      </div>

      <div className="flex justify-center pt-8">
        <button
          disabled={status === "submitting"}
          className="group relative px-16 py-4 overflow-hidden border border-white/20 transition-all duration-500 hover:border-white"
        >
          <div className="absolute inset-x-0 h-[0%] bg-white group-hover:h-[100%] top-1/2 -translate-y-1/2 transition-all duration-500 -z-10" />
          <span className="flex items-center gap-4 text-xs tracking-[0.4em] font-light group-hover:text-black transition-colors">
            {status === "submitting" ? "送信中..." : "送信する — SEND"}
          </span>
        </button>
      </div>
    </form>
  );
}
