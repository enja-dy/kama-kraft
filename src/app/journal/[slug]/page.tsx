"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronLeft, 
  ShieldCheck, 
  Waves, 
  BugOff, 
  Microscope, 
  Scale, 
  History,
  Droplets,
  Sun,
  Clock,
  Sparkles,
  Hourglass,
  FileText,
  CloudRain,
  Wand2
} from "lucide-react";

import { use } from "react";

// Types for Article Content
interface Section {
  type?: "default" | "cards" | "table";
  title: string;
  subtitle?: string;
  content?: string | React.ReactNode;
  image?: string;
  imageAlt?: string;
  icon?: any;
  items?: { icon: any; text: string }[];
  accent?: string;
  cards?: { icon: any; title: string, text: string }[];
  tableData?: { label: string; ulin: string; ipe: string; soft: string; tools?: string; level?: string }[];
}

interface ArticleData {
  slug: string;
  title: string;
  titleEn: string;
  subtitle: string;
  heroImage: string;
  publishDate: string;
  category: string;
  introTitle?: string;
  introContent?: string;
  sections: Section[];
}

// Utility to handle responsive line breaks
const ResponsiveText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span className={className}>
      {text.split('\n').map((line, i) => (
        <span key={i}>
          {line}
          {i < text.split('\n').length - 1 && <br className="hidden md:block" />}
        </span>
      ))}
    </span>
  );
};

// Modified Title with Accent support
const AccentTitle = ({ title, accent, className }: { title: string; accent?: string; className?: string }) => {
  const lines = title.split('\n');
  return (
    <h3 className={className}>
      {lines.map((line, li) => {
        if (accent && line.includes(accent)) {
          const parts = line.split(accent);
          return (
            <span key={li}>
              {parts[0]}
              <span className="font-medium text-white italic underline decoration-white/20 underline-offset-8">
                {accent}
              </span>
              {parts[1]}
              {li < lines.length - 1 && <br className="hidden md:block" />}
            </span>
          );
        }
        return (
          <span key={li}>
            {line}
            {li < lines.length - 1 && <br className="hidden md:block" />}
          </span>
        );
      })}
    </h3>
  );
};

const ARTICLES: Record<string, ArticleData> = {
  "why-ulin-durability-100-years": {
    slug: "why-ulin-durability-100-years",
    title: "「鉄の木」ウリンの\n驚愕の耐久性とは？",
    titleEn: "The Legend of Ironwood",
    subtitle: "100年腐らない理由を科学の視点で徹底検証",
    heroImage: "/journal/why-ulin-durability-v2.png",
    publishDate: "2026.04.22",
    category: "ウリン豆知識",
    introTitle: "数十年、数百年という時間の試練に耐え、\nなお美しく在り続ける「鉄の木」。",
    introContent: "世界には数多の木材が存在しますが、ボルネオ島原産の「ウリン（別名アイアンウッド）」ほど、その類まれなる耐久性で職人や建築家を魅了し続けてきた木材はありません。\n\n海水に浸かっても、激しいスコールに晒されても、シロアリが猛威を振るっても。ウリンはなぜ、これほどまでに頑強なのか。本稿では、その驚異的な生命力の裏側に隠された科学的根拠を解き明かします。",
    sections: [
      {
        title: "水に沈む圧倒的な「比重1.0」の壁",
        content: `一般的な木材の多くは水に浮きますが、ウリンは違います。その比重は1.0を超え、\n水に投げ入れれば静かに底へ沈んでいきます。\n\nこの極めて高い密度は、木材組織の中に空隙（隙間）がほとんど存在しないことを意味します。\nこれにより、腐朽菌の温床となる水分や、害虫の侵入を徹底的に拒絶するのです。`,
        image: "/journal/common/ulin-natural-submerged-v2.png",
        imageAlt: "Ulin Beam Submerged in a Natural Stream",
        icon: Scale,
        items: [
          { icon: ShieldCheck, text: "表面硬度は超高硬度。傷を寄せ付けない強さ。" },
          { icon: Microscope, text: "電子顕微鏡レベルで詰まった細胞組織。" }
        ]
      },
      {
        title: "自律する盾、ポリフェノール",
        accent: "ポリフェノール",
        content: `物理的な硬さに加え、ウリンには「化学的な鎧」が備わっています。\nそれが大量に含まれる超高濃度のポリフェノールです。\n\nウリン特有の赤褐色はこの成分によるもので、これが天然の防腐剤、防虫剤として機能します。\n施工直後に赤い樹液（アク）が出ることがありますが、これはウリンが周囲の家を守るための\n「自己防御反応」そのものなのです。`,
        icon: Droplets
      },
      {
        type: "cards",
        title: "過酷な環境での実力",
        subtitle: "Extreme Environment",
        cards: [
          { 
            icon: Waves, 
            title: "塩害・水害に対する\n圧倒的な信頼", 
            text: "潮風に晒される沿岸部のウッドデッキや、常に水に浸かる桟橋。\n他の木材なら数年で朽ち果てる環境でも、ウリンはビクともしません。" 
          },
          { 
            icon: BugOff, 
            title: "シロアリも寄り付かない\n天然の拒絶", 
            text: "木材住宅の最大の敵であるシロアリ。しかし、ポリフェノールを豊富に含み、\n鉄のように硬いウリンの心材を食害することは非常に困難です。" 
          }
        ]
      },
      {
        type: "table",
        title: "木材性能比較",
        tableData: [
          { label: "耐用年数", ulin: "30〜100年", ipe: "20〜30年", soft: "3〜5年" },
          { label: "比重", ulin: "1.04〜1.20", ipe: "0.90〜1.10", soft: "0.40〜0.60" },
          { label: "メンテナンス", ulin: "ほぼ不要", ipe: "年1回の塗装推奨", soft: "定期的な防腐処理" },
          { label: "耐蟻性", ulin: "極めて高い", ipe: "高い", soft: "低い" }
        ]
      }
    ]
  },
  "ulin-aging-silver-gray-guide": {
    slug: "ulin-aging-silver-gray-guide",
    title: "赤褐色から銀色へ。\nウリンの経年変化が描く、時を刻む美学",
    titleEn: "The Aesthetics of Aging",
    subtitle: "シルバーグレーの気高さと、その美しさを維持するための完全ガイド",
    heroImage: "/journal/ulin-aging-guide.png",
    publishDate: "2026.04.18",
    category: "ウリン豆知識",
    sections: [
      {
        title: "時間の試練を、\n美しさへと昇華させる勇気",
        content: `多くの木材にとって、雨風に晒されることは「劣化」を意味します。\nしかし、ボルネオの厳しい自然で育まれたウリンにとって、それは「深化（エイジング）」の過程です。\n\n施工直後の瑞々しい赤褐色は、数年の時を経て、高貴な輝きを放つ「シルバーグレー」へと変化します。\nこの変化こそが、ウリンが本物の天然素材である証であり、欧州のプロフェッショナルな\n建築家たちが「一生モノ」の素材としてウリンを熱望する最大の理由なのです。`,
        icon: Hourglass
      },
      {
        title: "銀色に輝く科学的メカニズム",
        content: `なぜウリンはグレーに変わるのか？ それは木の表面に含まれる「リグニン」という成分が\n太陽の紫外線によって分解され、雨水によって洗い流されるからです。\n\n特筆すべきは、この変化が「表面わずか0.1mm程度」の現象であること。\n内部の強靭な構造を維持したまま、表面だけが美しく銀色の衣を纏います。\nこれは、本質的な強さの証明に他なりません。`,
        image: "/journal/common/ulin-aged-macro.png",
        imageAlt: "Aged Ulin Silver Gray Texture",
        icon: Sun,
        items: [
          { icon: CloudRain, text: "雨と光が織りなす、天然のパティナ（古色）。" },
          { icon: History, text: "30年経っても変わらない内部強度。" }
        ]
      },
      {
        title: "「赤い樹液（アク）」という\n自己防御の証",
        content: `施工後、数ヶ月の間見られる「赤い樹液（アク）」。\nこれはウリンに含まれる豊富なポリフェノールが水に溶け出したものです。\n\n周囲のコンクリートや壁を汚してしまうため敬遠されがちですが、\nこれこそがウリンを100年腐らせない「天然の防腐剤」です。\nアクが出尽くした頃、ウリンの表面は安定期に入り、シルバーグレーへの第一歩を踏み出します。`,
        icon: Droplets,
      },
      {
        type: "table",
        title: "ウリンのアク抜き・洗浄ガイド",
        subtitle: "コンクリートや壁面の汚れへの対処法",
        tableData: [
          { label: "施工直後の軽微な汚れ", ulin: "水洗い（高圧洗浄）", ipe: "デッキブラシ・ホース", soft: "★☆☆" },
          { label: "時間が経った黒ずみ", ulin: "アルカリ性洗剤＋漂白", ipe: "重曹・木材専用洗剤", soft: "★★☆" },
          { label: "コンクリートへの沈着", ulin: "サンポール（希塩酸）洗浄", ipe: "専用クリーナー・防護具", soft: "★★★" },
          { label: "予防対策", ulin: "アルミ水切り・浸透性塗料", ipe: "設計時の工夫", soft: "-" }
        ]
      },
      {
        title: "美しさを継承する、\n大人のメンテナンス儀礼",
        content: `ウリンはメンテナンス・フリーと言われますが、適切な「手入れ」は木にさらなる品格を与えます。\n\nシルバーグレーをそのまま愉しむなら、年に一度の高圧洗浄だけで十分です。\nもし、あの施工直後の赤褐色を取り戻したいのであれば、表面を軽くサンディングしてください。\n驚くほど鮮やかな「本来の色」が、時を超えて再び顔を出します。`,
        icon: Wand2,
        items: [
          { icon: Sparkles, text: "中性洗剤とデッキブラシで表面を清掃。" },
          { icon: Clock, text: "数年に一度のサンディングで色を再生。" }
        ]
      }
    ]
  }
};

export default function ArticlePage({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  const params = use(paramsPromise);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 1.05]);

  const article = ARTICLES[params.slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center space-y-4">
          <p className="text-white/40">記事の準備中です。</p>
          <Link href="/journal" className="text-sm underline font-bold tracking-widest">ジャーナル一覧に戻る</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#050505] min-h-screen text-white/90 font-light overflow-x-hidden selection:bg-white selection:text-black">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0 z-0">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
        </motion.div>

        {/* Floating Top Nav */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute top-24 left-6 md:left-10 z-20"
        >
          <Link 
            href="/journal" 
            className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-white/40 hover:text-white transition-colors group uppercase"
          >
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            ジャーナル一覧に戻る
          </Link>
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-4 text-balance"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-[0.6em] text-white/40 uppercase block">
              {article.titleEn}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-tight">
              <ResponsiveText text={article.title} />
            </h1>
            <p className="text-white/40 text-sm md:text-base tracking-[0.2em] font-medium pt-4">
              {article.subtitle}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "80px" }}
            transition={{ delay: 1, duration: 1.5 }}
            className="w-px bg-gradient-to-b from-white/40 to-transparent mx-auto"
          />
        </div>

        <motion.div style={{ opacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-white/20 uppercase">
          スクロールして読み進める
        </motion.div>
      </section>

      {/* Intro Section */}
      {article.introTitle && (
        <section className="max-w-3xl mx-auto px-6 py-24 md:py-40 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-extralight tracking-wide md:border-l border-white/20 md:pl-8 leading-relaxed">
                <ResponsiveText text={article.introTitle} />
              </h2>
              <div className="text-base md:text-lg leading-loose text-white/70 space-y-6">
                {article.introContent?.split('\n\n').map((para, i) => (
                  <p key={i}><ResponsiveText text={para} /></p>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Dynamic Sections Loop */}
      <div className="relative">
        {article.sections.map((section, index) => {
          if (section.type === "cards") {
            return (
              <section key={index} className="py-32 md:py-48 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6 space-y-24">
                  <div className="text-center space-y-4">
                    <h3 className="text-xs font-bold tracking-[0.5em] text-white/30 uppercase">{section.subtitle}</h3>
                    <p className="text-3xl md:text-4xl font-extralight tracking-wider"><ResponsiveText text={section.title} /></p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {section.cards?.map((card, ci) => (
                      <motion.div
                        key={ci}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: ci * 0.2 }}
                        className="p-12 border border-white/5 bg-white/5 backdrop-blur-3xl space-y-6 group hover:border-white/20 transition-colors"
                      >
                        <card.icon size={32} className="text-white/40 group-hover:text-white transition-colors" />
                        <h4 className="text-xl font-medium tracking-wide text-white"><ResponsiveText text={card.title} /></h4>
                        <p className="text-white/50 circle leading-relaxed font-light"><ResponsiveText text={card.text} /></p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          if (section.type === "table") {
            return (
              <section key={index} className="py-32 md:py-48 max-w-5xl mx-auto px-6 overflow-x-auto">
                <div className="text-center space-y-6 mb-16">
                  <h3 className="text-center text-2xl font-light tracking-[0.2em]">{section.title}</h3>
                  {section.subtitle && <p className="text-white/40 text-sm">{section.subtitle}</p>}
                </div>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-[10px] tracking-[0.2em] font-bold text-white/40 uppercase">
                      <th className="py-6 text-left">{article.slug === "why-ulin-durability-100-years" ? "性能指標" : "状況"}</th>
                      <th className="py-6 px-4 text-center">{article.slug === "why-ulin-durability-100-years" ? "ウリン (鉄の木)" : "推奨される方法"}</th>
                      <th className="py-6 px-4 text-center">{article.slug === "why-ulin-durability-100-years" ? "イペ" : "必要なツール"}</th>
                      <th className="py-6 px-4 text-center">{article.slug === "why-ulin-durability-100-years" ? "ソフトウッド" : "難易度"}</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-light">
                    {section.tableData?.map((row, i) => (
                      <tr key={i} className="border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
                        <td className="py-8 font-medium text-white/40">{row.label}</td>
                        <td className="py-8 px-4 text-center text-white">{row.ulin}</td>
                        <td className="py-8 px-4 text-center text-white/60">{row.ipe}</td>
                        <td className="py-8 px-4 text-center text-white/40">{row.soft}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            );
          }

          return (
            <section 
              key={index} 
              className={`py-32 md:py-48 ${index % 2 === 1 ? 'bg-white/[0.02]' : ''}`}
            >
              <div className="max-w-7xl mx-auto px-6">
                <div className={section.image 
                  ? `grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`
                  : `max-w-4xl mx-auto text-center flex flex-col items-center`
                }>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={section.image ? "space-y-8" : "space-y-12"}
                  >
                    {section.icon && (
                      <div className={`w-16 h-16 rounded-full bg-white/5 flex items-center justify-center ${!section.image ? 'mx-auto' : ''}`}>
                        <section.icon className="text-white/40" size={32} />
                      </div>
                    )}
                    
                    <AccentTitle 
                      title={section.title} 
                      accent={section.accent} 
                      className={`text-3xl md:text-5xl font-extralight tracking-wider leading-tight ${!section.image ? 'text-center' : ''}`} 
                    />

                    <div className={`text-white/60 leading-loose text-lg space-y-6 ${!section.image ? 'text-center' : ''}`}>
                      {section.content?.toString().split('\n\n').map((para, pidx) => (
                        <p key={pidx}><ResponsiveText text={para} /></p>
                      ))}
                    </div>
                    
                    {section.items && (
                      <ul className={`space-y-4 pt-6 ${!section.image ? 'flex flex-col items-center' : ''}`}>
                        {section.items.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="flex items-center gap-4 text-sm text-white/80"
                          >
                            <item.icon size={18} className="text-white/40" />
                            {item.text}
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </motion.div>

                  {section.image && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="relative aspect-square rounded-sm overflow-hidden border border-white/5 order-first lg:order-none"
                    >
                      <Image
                        src={section.image}
                        alt={section.imageAlt || ""}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Final Message */}
      <section className="py-32 md:py-60 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={article.heroImage}
            alt="Durability BG"
            fill
            className="object-cover opacity-10 grayscale"
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-12">
          <History size={48} className="mx-auto text-white/20" />
          <h3 className="text-3xl md:text-6xl font-extralight tracking-tight leading-tight">
            100年後も愛される、<br />
            <span className="text-white">一生モノという贅沢。</span>
          </h3>
          <p className="text-lg md:text-xl text-white/60 leading-loose max-w-2xl mx-auto">
            私たちの家具が「一生モノ」を自負するのは、ウリンという素材が持つ永遠に近い時間に裏打ちされているからです。
            <br /><br />
            使い捨ての消費文化から脱却し、世代を超えて受け継がれる価値を持つ家具。KamaKraftは、大自然の恩恵である「鉄の木」を、最高峰の工芸技術によってあなたの日常へと繋ぎます。
          </p>
          <div className="pt-12">
            <Link 
              href="/products" 
              className="inline-block border border-white/80 text-xs font-bold tracking-[0.4em] px-12 py-6 hover:bg-white hover:text-black transition-all uppercase"
            >
              コレクションを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Nav */}
      <div className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
        <Link href="/journal" className="flex items-center gap-4 text-xs font-bold tracking-widest text-white/40 hover:text-white transition-colors group uppercase">
          <ChevronLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
          ジャーナル一覧を見る
        </Link>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-[10px] tracking-[0.2em] font-bold text-white/20 uppercase text-center">
          <span>公開日 {article.publishDate}</span>
          <span>カテゴリー: {article.category}</span>
        </div>
      </div>
    </div>
  );
}
