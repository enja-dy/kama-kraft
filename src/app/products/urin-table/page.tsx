"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, CheckCircle2, Ruler, Shield, Clock, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function UrinTablePage() {
  const [isAdded, setIsAdded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();

  const productImages = [
    "/product-urin-highangle-master.png", // Valid 589KB Master
    "/product-urin-front.png", // Valid 379KB Master
    "/product-urin-topdown.png", // Valid 538KB Master
    "/product-urin-side.png", // Valid 515KB Master
    "/product-urin-final-master-highangle.png", // New Ultimate Master Rendering
  ];

  const handleAddToCart = () => {
    addToCart({
      id: "urin-standard-table-1",
      name: "The Standard Table \"URIN\"",
      price: 70000,
      image: "/product-urin-highangle-master.png",
      quantity: 1,
    });
    
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 3000);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase">Return to Collection</span>
        </Link>

        {/* Product Hero Section with Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Carousel Stage */}
          <div className="space-y-6">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/5 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  {productImages[currentImageIndex] ? (
                    <Image
                      src={productImages[currentImageIndex]}
                      alt={`Product Image ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      priority
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-white/[0.02]">
                      <span className="text-white/10 font-bold tracking-[0.5em] uppercase text-[10px] italic">Image {currentImageIndex + 1} Pending</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 backdrop-blur-md border border-white/5"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 backdrop-blur-md border border-white/5"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative w-24 flex-shrink-0 aspect-square rounded-xl overflow-hidden border-2 transition-all ${currentImageIndex === idx ? 'border-white opacity-100' : 'border-transparent opacity-30 hover:opacity-50'}`}
                >
                  {img ? (
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full bg-white/5" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Product Data */}
          <div className="flex flex-col justify-center space-y-12">
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-white/40 block">The Standard Series</span>
              <h1 className="text-3xl md:text-5xl font-extralight tracking-[0.2em] leading-tight">
                The Standard Table<br />
                <span className="italic">&quot;URIN&quot;</span>
              </h1>
              <div className="flex items-baseline gap-4 pt-4">
                <span className="text-3xl font-light tracking-tighter">¥70,000</span>
                <span className="text-xs text-white/20 uppercase tracking-widest italic">Tax included</span>
              </div>
            </div>

            <p className="text-white/60 leading-relaxed font-light text-lg">
              不朽の強さを宿し、世代を超えて受け継がれる「鉄の木」の誇り。
              アイアンウッド「ウリン」の圧倒的な重量感。
              自然の呼吸をそのまま形にしたライブエッジが、空間に唯一無二の品格を与えます。
            </p>

            <div className="grid grid-cols-3 gap-8 py-8 border-y border-white/5">
              <div className="text-center space-y-2">
                <Ruler className="mx-auto text-white/20" size={20} />
                <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Size</p>
                <p className="text-sm font-light">90×45</p>
              </div>
              <div className="text-center space-y-2">
                <Shield className="mx-auto text-white/20" size={20} />
                <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Armor</p>
                <p className="text-sm font-light">Iron Wood</p>
              </div>
              <div className="text-center space-y-2">
                <Clock className="mx-auto text-white/20" size={20} />
                <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Life</p>
                <p className="text-sm font-light">Century</p>
              </div>
            </div>

            <div className="space-y-4">
              <button 
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`w-full py-6 rounded-xl flex items-center justify-center gap-3 transition-all font-bold tracking-[0.3em] uppercase text-xs ${isAdded ? 'bg-green-600 text-white' : 'bg-white text-black hover:bg-white/90'}`}
              >
                {isAdded ? (
                  <>
                    <CheckCircle2 size={18} />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart size={18} />
                    <span>Purchase Order</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Detail Sections: Story & Technical Mastery */}
        <section className="mt-48 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Emotional Visual Anchor */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square lg:aspect-auto lg:h-[800px] rounded-2xl overflow-hidden bg-white/5 border border-white/5"
          >
            <Image
              src="/product-urin-macro.png"
              alt="Artisan Texture Detail"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-8 left-8">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-bold">Material Focus</span>
              <p className="text-xl font-light tracking-widest mt-2 italic text-white/90">Undying Soul of Ironwood</p>
            </div>
          </motion.div>

          {/* Text & Table Column */}
          <div className="space-y-24">
            {/* 1. Description: Artisan Narrative */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-light tracking-[0.3em] leading-tight">
                不朽を纏い、時を刻む。<br />
                <span className="italic">一生を共にする一脚。</span>
              </h2>
              <div className="h-[1px] w-12 bg-white/20" />
              
              <div className="space-y-8 text-white/50 leading-relaxed font-light text-sm text-justify">
                <p>
                  鉄の木、ウリン。その圧倒的な密度と強度は、自然界が生み出した奇跡です。水に沈むほどの重量と、腐朽を寄せ付けない成分。鎌倉の職人は、この強固な素材に敬意を払い、一つひとつ手作業で削り出します。
                </p>
                <p>
                  リビングの主役として、あるいは潮風薫るテラスの相棒として。ウリンは場所を選ばず、その気高い佇まいを維持します。屋内では艶やかな琥珀色の輝きを、屋外では風格漂うシルバーグレーへの変遷を。環境に寄り添いながら、空間の品格を高めます。
                </p>
                <p>
                  手入れという名の、対話。数十年、あるいは一世紀という時間を共にするための準備は、その驚異的な耐候性によってすでに整っています。日常的なメンテナンスは不要。ただ、時折その肌に触れ、色の深化を愛でる。それだけで十分です。
                </p>
              </div>
            </motion.div>

            {/* 2. Specs: Technical Mastery */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8 pt-12 border-t border-white/5"
            >
              <div className="flex items-center gap-4">
                <Shield size={16} className="text-white/20" />
                <h3 className="text-sm uppercase tracking-[0.5em] font-bold text-white/40">Technical Mastery</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden shadow-2xl">
                <SpecRow label="商品名" value='The Standard Table "URIN"' />
                <SpecRow label="木材" value="ウリン（アイアンウッド / 無垢材）" />
                <SpecRow label="生産地" value="日本 鎌倉（KamaKraft）" />
                <SpecRow 
                  label="サイズ" 
                  value="幅90cm × 奥行き45cm × 高さ35cm" 
                  subValue={
                    <Link href="/contact" className="text-white/40 hover:text-white underline underline-offset-4 transition-colors">
                      ※オーダーメイド承ります。詳細はこちら。
                    </Link>
                  } 
                />
                <SpecRow label="重量 / 耐荷重" value="9.8kg / 75kg" />
                <SpecRow label="屋外使用" value="OK（最高レベルの耐候性）" />
                <SpecRow label="発送方法" value="ヤマト運輸 / 佐川急便 (大型家具便)" />
                <SpecRow label="発送までの目安" value="ご注文確定後、約3〜4週間" />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Local helper for specification table rows to maintain code cleanliness
const SpecRow = ({ label, value, subValue }: { label: string; value: string; subValue?: React.ReactNode }) => (
  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 p-5 bg-black/40">
    <span className="w-full sm:w-32 text-[10px] font-bold tracking-widest text-white/30 uppercase shrink-0">{label}</span>
    <div className="space-y-2">
      <span className="text-sm font-light tracking-wider text-white/80">{value}</span>
      {subValue && (
        <div className="text-[10px] block opacity-80">{subValue}</div>
      )}
    </div>
  </div>
);
