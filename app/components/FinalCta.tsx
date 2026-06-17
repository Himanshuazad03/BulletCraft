"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCta() {

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background soft blur effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-sky-100 to-sky-200/50 rounded-full blur-[100px] pointer-events-none opacity-80" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 md:p-16 text-center text-white shadow-xl relative overflow-hidden"
        >
          {/* Subtle grid pattern inside */}
          <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

          {/* Badge icon */}
          <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center mx-auto mb-8 shadow-lg shadow-sky-500/20">
            <Sparkles className="w-6 h-6 fill-white" />
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 max-w-2xl mx-auto leading-tight">
            Upgrade Your Resume in Minutes
          </h3>
          <p className="text-base sm:text-lg text-slate-300 font-medium max-w-xl mx-auto mb-10 leading-relaxed">
            Generate recruiter-ready bullet points and stand out from the competition. Stop selling yourself short.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <Link
              href="/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 hover:translate-y-[-1px] cursor-pointer"
            >
              Generate Resume Bullets
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="mt-8 text-xs text-slate-500 font-medium">
            No registration required for core features • Start for free
          </div>
        </motion.div>
      </div>
    </section>
  );
}
