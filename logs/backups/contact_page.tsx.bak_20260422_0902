"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail, HelpCircle, Send } from "lucide-react";

const FAQ_DATA = [
  // お支払い
  {
    category: "お支払い",
    question: "どのような決済方法が利用できますか？",
    answer: "クレジットカード（Visa, Mastercard, American Express, JCB）、Apple Pay、Google Pay、および銀行振込での決済が可能です。銀行振込の場合、ご入金確認後の製作開始・商品手配となります。",
  },
  {
    category: "お支払い",
    question: "領収書の発行は可能ですか？",
    answer: "はい、可能です。商品発送完了後にマイページよりPDF形式でダウンロードいただけます。また、宛名や但し書きの指定が必要な場合は、お問い合わせフォームよりお申し付けください。",
  },
  // 配送・送料
  {
    category: "配送・送料",
    question: "配送料はいくらですか？",
    answer: "商品サイズと配送地域によって異なります。カート画面にてお届け先住所を入力いただくと自動計算されます。大型家具については、開梱・設置・梱包材回収までを含む専門便でお届けいたします。",
  },
  {
    category: "配送・送料",
    question: "注文から届くまでどのくらいの期間がかかりますか？",
    answer: "KamaKraftの商品はすべて職人の手作業により仕上げられます。在庫がある場合は1〜2週間、受注生産品の場合は1ヶ月〜2ヶ月程度お時間をいただいております。正確な納期はご注文確定後のメールにてお知らせいたします。",
  },
  {
    category: "配送・送料",
    question: "配送日時の指定はできますか？",
    answer: "大型家具などの特別な配送便を除き、発送準備完了後にお届け日の指定が可能です。受注生産品は製作完了の目処が立ち次第、職人より改めてご相談の連絡を差し上げます。",
  },
  // 返品・交換・キャンセル
  {
    category: "返品・交換・キャンセル",
    question: "注文後のキャンセルはできますか？",
    answer: "受注生産という商品の性質上、製作開始後のキャンセル・内容変更は原則として承っておりません。ご注文内容に間違いがないか、確定前に十分ご確認ください。",
  },
  {
    category: "返品・交換・キャンセル",
    question: "届いた商品が破損していた、または注文と異なる場合は？",
    answer: "万全を期して発送しておりますが、万が一配送中の破損や誤送があった場合は、商品到着後7日以内にお問い合わせください。至急、修理または交換の対応をさせていただきます。",
  },
  {
    category: "返品・交換・キャンセル",
    question: "イメージと違うので返品したいのですが可能ですか？",
    answer: "天然素材（ウリン材）を使用し職人が一点ずつ手作りしているため、木目や色味の個体差、微細な加工痕などを理由としたお客様都合の返品・交換は承っておりません。一点物としての風合いとしてお楽しみください。",
  },
  // 製品・お手入れ
  {
    category: "製品・お手入れ",
    question: "ウリン材の特徴について教えてください。",
    answer: "「鉄の木」と呼ばれるウリンは、世界最強クラスの耐久性・耐水性を持つ木材です。塗装なしでも腐食に強く、シロアリなどの害虫被害もほとんどありません。経年変化により、重厚な赤褐色から気品あるシルバーグレーへと色調が変化するのが最大の特徴です。",
  },
  {
    category: "製品・お手入れ",
    question: "日頃の手入れについて教えてください。",
    answer: "基本的には特別なメンテナンスは不要です。汚れが気になる場合は、水拭きまたは中性洗剤を薄めたもので拭き取ってください。シルバーグレー化を遅らせ、本来の赤褐色を維持したい場合は、年に1度程度のウッドオイル塗布をおすすめいたします。",
  },
  {
    category: "製品・お手入れ",
    question: "使用中にささくれが出てきた場合は？",
    answer: "天然木のため、乾燥などにより「ささくれ」が生じることがあります。その場合は市販のサンドペーパー（100〜240番程度）で軽く表面を均してください。ウリンは非常に硬いため、一度均すことで長く滑らかな状態を保てます。",
  },
  // 注文・会員情報
  {
    category: "注文・会員情報",
    question: "注文完了メールが届きません。",
    answer: "迷惑メールフォルダに振り分けられているか、ご登録のメールアドレスに誤りがある可能性がございます。マイページの「ご注文履歴」に反映されている場合は正常に受け付けられています。不明な場合は事務局までお問い合わせください。",
  },
  {
    category: "注文・会員情報",
    question: "オーダーメイドや特注サイズの相談はできますか？",
    answer: "はい、承っております。既存製品のサイズ変更から、完全オリジナルの家具製作まで、職人が直接ご要望をお伺いします。お問い合わせフォームの「オーダーメイドのご相談」よりお気軽にご連絡ください。",
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
                className="space-y-12"
              >
                {Object.entries(
                  FAQ_DATA.reduce((acc, obj) => {
                    const key = obj.category;
                    if (!acc[key]) acc[key] = [];
                    acc[key].push(obj);
                    return acc;
                  }, {} as Record<string, typeof FAQ_DATA>)
                ).map(([category, items], catIndex) => (
                  <div key={category} className="space-y-4">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: catIndex * 0.1 }}
                      className="text-[10px] uppercase tracking-[0.4em] text-white/30 border-b border-white/5 pb-2 ml-1"
                    >
                      {category}
                    </motion.h3>
                    <div className="space-y-0">
                      {items.map((faq, index) => (
                        <FAQItem key={index} faq={faq} index={index} />
                      ))}
                    </div>
                  </div>
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
