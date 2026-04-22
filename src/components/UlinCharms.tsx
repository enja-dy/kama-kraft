"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const charms = [
  {
    title: "圧倒的な耐久性",
    description: "「鉄の木 / アイアンウッド」と呼ばれるウリンは、世界で最も重厚かつ屈強な木材の一つです。その最大の特徴は、一般的な木材とは一線を画す驚異的な密度にあります。鉄の木に相応しい圧倒的な重厚感を誇り、腐食を寄せ付けない天然の「ポリフェノール」を豊富に含んでいます。「100年以上腐らない」という伝説は、過酷な環境に耐え抜いてきた科学的な裏付けに基づいています。KamaKraftはこのウリンの生命力をそのままに、世代を超えて受け継がれる資産としての家具を追求しました。堅牢さはそのまま安心感へと繋がり、家族の歴史を刻む揺るぎない土台となります。一生モノという贅沢。それは単なる家具の枠を超えた、時の試練に耐えうる価値の象徴です。",
    image: "/ulin-majestic-origin.png",
  },
  {
    title: "時と共に深まる風格",
    description: "ウリンの持つ真の美しさは、手にした瞬間から始まる「深化」にあります。新品の時は明るい赤褐色を放つウリンは、時間の経過と共に日光や空気に触れることで、次第に深く、落ちついたダークブラウンへとその表情を変えていきます。この「経年変化」は劣化ではなく、むしろ素材が持つ風格を最大限に引き出すプロセスです。素材そのものが持つ気品は、日々の暮らしの中で豊かな艶を纏い、使う人の歴史と共に唯一無二の存在へと昇華していきます。銀色に輝くシルバーグレーへの変化も、あるいは磨き抜かれた深い琥珀色への変化も、すべては自然が織りなす芸術。KamaKraftは、この「育てる」愉しみこそが、真のラグジュアリーであると確信しています。",
    image: "/maint-2.png",
  },
  {
    title: "全天候型の絶対的な信頼",
    description: "ウリンがその真価を最も発揮するのは、他の木材が屈服するような厳しい自然環境下においてです。海辺の潮風や、絶え間なく降り注ぐ豪雨、そして照りつける強い日差し。これら全ての試練に対し、ウリンは「全天候型」の絶対的な信頼を持って応えます。もともと桟橋やボルネオの橋梁に使われてきた歴史が、雨に濡れても全く腐食しない圧倒的な耐候性を証明しています。KamaKraftの家具は、この特性を最大限に活かし、屋内だけでなく、テラスやプライベートガーデンといった「屋外のリビング」でも、何一つ気兼ねすることなくご使用いただけます。自然の中に身を置きながら、最高級の質感に触れる贅沢。雨の日も晴れの日も、変わることのない気高い佇まい。それは環境に左右されない、真の自由と信頼を象徴しています。",
    images: ["/product-urin-all-weather-master.png", "/product-urin-all-weather-seaside.png"],
  },
];

export const UlinCharms = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % 2);
    }, 5000); // 5秒ごとに切り替え
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-[#fbfbfb] dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4">
        {charms.map((charm, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-12 mb-24 last:mb-0`}
          >
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="w-full md:w-1/2 aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl bg-black/5"
            >
              {charm.images ? (
                <div className="relative w-full h-full">
                  {charm.images.map((img, i) => (
                    <motion.div
                      key={img}
                      initial={false}
                      animate={{ opacity: activeImageIndex === i ? 1 : 0 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={img}
                        alt={charm.title}
                        fill
                        className="object-cover"
                        priority={i === 0}
                      />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <Image
                  src={charm.image || ""}
                  alt={charm.title}
                  fill
                  className="object-cover"
                />
              )}
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full md:w-1/2 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                {charm.title}
              </h2>
              <div className="h-1 w-20 bg-[#3d2b1f]" />
              <p className="text-lg leading-relaxed text-foreground/80 text-justify">
                {charm.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
