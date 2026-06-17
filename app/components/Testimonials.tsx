"use client";

import React from "react";
import { Star, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      quote: "The achievements generated for my e-commerce project made my resume feel ten times more professional. I landed interviews at both Stripe and Vercel within two weeks.",
      author: "Alex Rivers",
      role: "Frontend Engineer",
      company: "Stripe",
      stars: 5,
    },
    {
      quote: "I always struggled to quantify my engineering achievements. The tool gave me direct suggestions on what metrics to estimate and query, which completely transformed my profile.",
      author: "Sarah Chen",
      role: "Backend Team Lead",
      company: "Scale AI",
      stars: 5,
    },
    {
      quote: "The interview talking points and STAR preparation guide were absolute game changers. I walked into my system design interview with absolute clarity on how to present my projects.",
      author: "Marcus Brody",
      role: "Solutions Architect",
      company: "AWS",
      stars: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 70, damping: 14 },
    },
  };

  return (
    <section className="py-24 bg-slate-50/50 border-y border-slate-100 relative scroll-mt-16">
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-40" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-sky-500 uppercase tracking-widest mb-3">
            Social Proof
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Loved by Developers & Job Seekers
          </h3>
          <p className="mt-4 text-base text-slate-500 font-medium leading-relaxed">
            Read how professionals are using the bullet generator to optimize their applications, revamp portfolios, and secure interviews.
          </p>
        </div>

        {/* Testimonials Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between"
            >
              {/* Quote details */}
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                <blockquote className="text-sm text-slate-600 leading-relaxed font-medium mb-8">
                  "{rev.quote}"
                </blockquote>
              </div>

              {/* Author profile */}
              <div className="flex items-center gap-3.5 border-t border-slate-50 pt-5 mt-auto">
                <div className="w-10 h-10 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center font-bold text-sm select-none border border-sky-100/50">
                  {rev.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">
                    {rev.role} at <span className="text-sky-600 font-semibold">{rev.company}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Callout stats below testimonials */}
        <div className="mt-16 text-center text-xs text-slate-400 font-medium flex items-center justify-center gap-2">
          <MessageSquare className="w-4.5 h-4.5 text-sky-500" />
          <span>Average profile improvement score increases by over <span className="text-slate-800 font-bold">45%</span>.</span>
        </div>

      </div>
    </section>
  );
}
