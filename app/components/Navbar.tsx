"use client";

import React, { useState, useEffect } from "react";
import { Caveat } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, X, ArrowRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Examples", href: "#examples" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (pathname === "/") {
      e.preventDefault();
      setIsOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm py-3 z-50`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-9 h-9 ">
            <img src="/image.png" alt="logo" className="h-9 w-9 rounded-lg" />
          </div>
          <span className="hidden sm:inline font-bold text-xl tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
            Bullet{" "}
            <span
              className={`text-sky-700 font-bold text-2xl ${caveat.className}`}
            >
              Craft
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={pathname === "/" ? link.href : `/${link.href}`}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors duration-200 cursor-pointer relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex gap-1.5 sm:gap-2 items-center">
          <Link href="/demo">
            <Button className="h-8 w-8 sm:w-auto px-0 sm:px-4 text-[10px] sm:text-xs font-semibold bg-sky-950 hover:bg-sky-900 text-white flex items-center justify-center sm:gap-1.5 cursor-pointer rounded-lg">
              <span className="hidden sm:inline">Generate Bullets</span>
              <Sparkles className="w-3.5 h-3.5 sm:hidden" />
              <ArrowRight className="hidden sm:inline w-3.5 h-3.5" />
            </Button>
          </Link>
          <Link href="https://digitalheroesco.com/">
            <Button
              variant="outline"
              className="h-8 w-8 sm:w-auto px-0 sm:px-4 text-[10px] sm:text-xs font-semibold hover:bg-muted cursor-pointer flex items-center justify-center rounded-lg"
            >
              <span className="hidden sm:inline">Built for Digital Heroes</span>
              <ExternalLink className="w-3.5 h-3.5 sm:hidden" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-b border-slate-100 shadow-lg overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={pathname === "/" ? link.href : `/${link.href}`}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-base font-semibold text-slate-700 hover:text-sky-600 transition-colors py-2 cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
