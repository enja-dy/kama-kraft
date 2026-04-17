"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  { url: "/hero-urin-v3-accurate.png", position: "center" }, // 元の本物の画像に戻す場合は "/urin02.jpeg" に変更
  { url: "/urin06.jpeg", position: "right 35%" },
  { url: "/hero-3.png", position: "center" },
  { url: "/urin07.jpeg", position: "left 45%" },
];

export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentIndex].url}
            alt="Premium Ulin Furniture"
            fill
            priority
            className="object-cover brightness-75 transition-all duration-1000"
            style={{ objectPosition: slides[currentIndex].position }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl md:text-5xl font-bold tracking-tighter mb-4"
        >
          KamaKraft
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="text-lg md:text-2xl font-light tracking-[0.3em] uppercase opacity-80"
        >
          鎌倉の職人が磨き上げた、唯一無二の工芸家具
        </motion.p>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-[2px] w-8 transition-all duration-700 ${i === currentIndex ? "bg-white" : "bg-white/20"}`}
          />
        ))}
      </div>
    </div>
  );
};
