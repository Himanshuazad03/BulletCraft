"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  ChevronRight,
  Code2,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  const mockBullets = [
    {
      text: "Architected a full-stack e-commerce engine with React, Node.js, and MongoDB, supporting 10k+ active listings",
      metric: "full-stack e-commerce engine",
    },
    {
      text: "Engineered JWT-based secure auth & stripe gateway, decreasing checkout friction and drop-offs by 24%",
      metric: "decreasing checkout friction and drop-offs by 24%",
    },
    {
      text: "Optimized database queries and asset compression, yielding a 35% improvement in page-load speed (LCP)",
      metric: "35% improvement in page-load speed (LCP)",
    },
  ];

  return (
    <section className="relative pt-32 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-white">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-80" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-sky-200/30 to-blue-200/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Badges Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
          >
            <a
              href="mailto:himanshuazad05@gmail.com"
              className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 px-3 py-1 rounded-full text-xs font-semibold text-slate-700 shadow-sm transition-all hover:translate-y-[-0.5px] cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-sky-500" />
              <span className="font-bold text-sky-600">Created by:</span>{" "}
              Himanshu Azad • himanshuazad05@gmail.com
            </a>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6"
          >
            Turn Project Descriptions Into{" "}
            <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              ATS-Friendly
            </span>{" "}
            Resume Bullet Points
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl leading-relaxed mb-10"
          >
            Generate professional resume achievements, LinkedIn-ready
            descriptions, and interview talking points in seconds.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto px-4 justify-center"
          >
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 hover:translate-y-[-1.5px] cursor-pointer"
            >
              Generate Free Bullets
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Hero Visual Mockup */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-5xl bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/40 overflow-hidden flex flex-col md:flex-row text-left"
          >
            {/* Header Mac Buttons */}
            <div className="md:hidden flex items-center gap-1.5 px-5 py-3.5 border-b border-slate-100 bg-slate-50/50">
              <span className="w-3 h-3 rounded-full bg-rose-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>

            {/* Left side: Input Mockup */}
            <div className="flex-1 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-slate-200 bg-slate-50/20">
              <div className="hidden md:flex items-center gap-1.5 mb-6">
                <span className="w-3 h-3 rounded-full bg-rose-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3.5">
                <Code2 className="w-4 h-4 text-slate-400" />
                Your Draft Project Description
              </div>
              <div className="bg-white border border-slate-200/80 rounded-xl p-5 min-h-[160px] text-slate-600 text-sm leading-relaxed shadow-inner font-medium">
                <p className="mb-2 text-slate-400 font-normal">
                  Project Title: E-commerce Website
                </p>
                <p className="mb-2 text-slate-400 font-normal">
                  Tech: React, Node, MongoDB, Stripe
                </p>
                <p className="text-slate-700">
                  I built an e-commerce website using React and Node.js. It had
                  a login page and a checkout. I made it faster. It listed about
                  10k items.
                </p>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="inline-block w-1 h-4 bg-sky-500 ml-0.5 vertical-middle"
                />
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-slate-400">
                <span>Word count: 32</span>
                <span>•</span>
                <span className="text-amber-500 font-semibold">
                  Impact Score: Low
                </span>
              </div>
            </div>

            {/* Right side: Output Mockup */}
            <div className="flex-1 p-6 sm:p-8 bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-sky-500" />
                    ATS-Optimized Output
                  </div>
                  <div className="bg-sky-50 text-sky-700 px-2 py-0.5 rounded text-xxs font-bold uppercase tracking-wider">
                    STAR Method
                  </div>
                </div>

                <div className="space-y-4">
                  {mockBullets.map((bullet, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + idx * 0.3, duration: 0.5 }}
                      className="flex gap-3 text-sm text-slate-700 leading-relaxed font-medium"
                    >
                      <ChevronRight className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                      <p>
                        {bullet.text
                          .split(bullet.metric)
                          .map((part, i, arr) => (
                            <React.Fragment key={i}>
                              {part}
                              {i < arr.length - 1 && (
                                <span className="font-bold text-slate-900 border-b border-sky-200 bg-sky-50/50 px-1 rounded-sm">
                                  {bullet.metric}
                                </span>
                              )}
                            </React.Fragment>
                          ))}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium">Quantified achievements: 2</span>
                <span className="text-emerald-600 font-bold uppercase flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Score: 94/100
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
