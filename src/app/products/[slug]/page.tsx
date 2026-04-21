"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, CheckCircle2, Ruler, Shield, ArrowLeft, ChevronLeft, ChevronRight, MapPin, User } from "lucide-react";
import { useState, useMemo } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { products } from "@/constants/products";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Find product by slug
  const product = useMemo(() => products.find(p => p.slug === slug), [slug]);
  
  const [isAdded, setIsAdded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();

  if (!product) {
    return notFound();
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    });
    
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 3000);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase">コレクションに戻る</span>
        </Link>

        {/* Product Hero Section */}
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
                  <Image
                    src={product.images[currentImageIndex]}
                    alt={`${product.name} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </motion.div>
              </AnimatePresence>

              {product.images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 backdrop-blur-md border border-white/5">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 backdrop-blur-md border border-white/5">
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-24 flex-shrink-0 aspect-square rounded-xl overflow-hidden border-2 transition-all ${currentImageIndex === idx ? 'border-white opacity-100' : 'border-transparent opacity-30 hover:opacity-50'}`}
                  >
                    <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" unoptimized />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Data */}
          <div className="flex flex-col justify-center space-y-12">
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-white/40 block">{product.series}</span>
              <h1 className="text-3xl md:text-5xl font-extralight tracking-[0.2em] leading-tight">
                {product.name}
              </h1>
              <div className="flex items-baseline gap-4 pt-4">
                <span className="text-3xl font-light tracking-tighter">¥{product.price.toLocaleString()}</span>
                <span className="text-sm text-white/50 font-bold ml-1">税込</span>
              </div>
            </div>

            <p className="text-white/60 leading-relaxed font-light text-lg">
              {product.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 py-12 sm:py-8 border-y border-white/5">
              <div className="text-center space-y-3 sm:space-y-2">
                <Ruler className="mx-auto text-white/20" size={20} />
                <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Specs</p>
                <div className="text-sm sm:text-xs font-light leading-relaxed tracking-wider space-y-1">
                  {product.specs.slice(0, 3).map((spec, i) => (
                    <p key={i}>{spec.value}</p>
                  ))}
                </div>
              </div>
              <div className="text-center space-y-3 sm:space-y-2 sm:border-x border-white/5 px-2">
                <User className="mx-auto text-white/20" size={20} />
                <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Artisan</p>
                <p className="text-sm font-light tracking-wider">{product.artisan.name}</p>
              </div>
              <div className="text-center space-y-3 sm:space-y-2">
                <MapPin className="mx-auto text-white/20" size={20} />
                <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Origin</p>
                <p className="text-sm font-light tracking-wider">{product.artisan.location}</p>
              </div>
            </div>

            <div className="space-y-4">
              <button 
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`w-full py-6 rounded-xl flex items-center justify-center gap-3 transition-all font-bold tracking-[0.3em] uppercase text-xs ${isAdded ? 'bg-green-600 text-white' : 'bg-white text-black hover:bg-white/90'}`}
              >
                {isAdded ? (
                  <><CheckCircle2 size={18} /><span>カートに追加しました</span></>
                ) : (
                  <><ShoppingCart size={18} /><span>カートに入れる</span></>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Artisan Story & Technical Specs */}
        <section className="mt-48 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-24">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
              <h2 className="text-3xl font-light tracking-[0.3em] leading-tight text-white/90 italic">
                Artisan Story
              </h2>
              <div className="h-[1px] w-12 bg-white/20" />
              <div className="space-y-8 text-white/50 leading-relaxed font-light text-sm text-justify">
                <p>{product.artisan.bio}</p>
                <p>
                  鎌倉の潮風と歴史が育んだ感性と、強靭なウリン材が融合。
                  一人の職人が木と対話し、その魂を削り出すことで生まれる、一生ものの輝き。
                  KamaKraftは、職人と主（あるじ）を繋ぐ信頼の証です。
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-8 pt-12 border-t border-white/5">
              <div className="flex items-center gap-4">
                <Shield size={16} className="text-white/20" />
                <h3 className="text-sm uppercase tracking-[0.5em] font-bold text-white/40">Specifications</h3>
              </div>
              <div className="grid grid-cols-1 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden shadow-2xl">
                <SpecRow label="商品名" value={product.name} />
                <SpecRow label="職人" value={product.artisan.name} />
                {product.specs.map((spec, i) => (
                  <SpecRow key={i} label={spec.label} value={spec.value} />
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative aspect-square lg:aspect-auto lg:h-[800px] rounded-2xl overflow-hidden bg-white/5 border border-white/5">
            <Image
              src={product.images[0]}
              alt="Artisan Texture Detail"
              fill
              className="object-cover opacity-60"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-bold uppercase">{product.artisan.name}</span>
              <p className="text-xl font-light tracking-widest mt-2 italic text-white/90">Created by Artisan Hands</p>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

const SpecRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 p-5 bg-black/40">
    <span className="w-full sm:w-32 text-[10px] font-bold tracking-widest text-white/30 uppercase shrink-0">{label}</span>
    <span className="text-sm font-light tracking-wider text-white/80">{value}</span>
  </div>
);
