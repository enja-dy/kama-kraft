"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, User, HelpCircle, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export const Header = () => {
  const { totalItems } = useCart();
  const { user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#050505]/80 backdrop-blur-md py-4 border-b border-white/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tighter text-white transition-colors">
              KamaKraft
            </h1>
            <div className="h-[1px] w-0 group-hover:w-full bg-white transition-all duration-300" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/cart"
              className="relative group flex items-center gap-2 text-sm tracking-widest text-white hover:text-white transition-colors"
            >
              <ShoppingCart size={18} className="text-white group-hover:text-white transition-opacity" />
              買い物籠
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -left-2 bg-white text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center translate-x-[-50%]"
                >
                  {totalItems}
                </motion.span>
              )}
            </Link>
            <Link
              href="/help"
              className="group flex items-center gap-2 text-sm tracking-widest text-white hover:text-white transition-colors"
            >
              <HelpCircle size={18} className="text-white group-hover:text-white transition-opacity" />
              お問い合わせ
            </Link>
            <Link
              href={user ? "/account" : "/auth"}
              className="group flex items-center gap-2 text-sm tracking-widest bg-white/[0.12] hover:bg-white/20 px-5 py-2.5 rounded-full border border-white/20 text-white transition-all font-bold"
            >
              <User size={18} className="text-white group-hover:text-white transition-opacity" />
              {user ? "マイページ" : "新規登録 / ログイン"}
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#050505] flex flex-col p-8"
          >
            <div className="flex justify-end mb-12">
              <button
                className="text-white p-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              <Link
                href="/cart"
                className="text-3xl font-bold text-white tracking-widest flex items-center gap-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                買い物籠
                {totalItems > 0 && (
                  <span className="bg-white text-black text-sm px-3 py-1 rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
              <Link
                href="/help"
                className="text-3xl font-bold text-white tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                お問い合わせ
              </Link>
              <Link
                href={user ? "/account" : "/auth"}
                className="text-3xl font-bold text-white tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {user ? "マイページ" : "新規登録 / ログイン"}
              </Link>
            </div>
            <div className="mt-auto border-t border-white/10 pt-8 text-white/40 text-sm tracking-widest">
              © 2026 KamaKraft Heritage
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
