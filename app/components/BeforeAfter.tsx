"use client";

import React from "react";
import { XCircle, CheckCircle2, ChevronRight, CornerDownRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BeforeAfter() {
  const points = [
    {
      label: "Action Verbs",
      before: "Weak or passive ('built')",
      after: "Active & professional ('developed', 'architected')",
    },
    {
      label: "Tech Stack Specificity",
      before: "Vague references ('using React')",
      after: "Detailed integrations ('React, Node.js, Socket.IO, MongoDB')",
    },
    {
      label: "Result Quantification",
      before: "Missing outcomes or values",
      after: "Clear impact, security, and scalability metrics",
    },
  ];

  return (
    <section id="examples" className="py-24 bg-white relative scroll-mt-16">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-sky-500 uppercase tracking-widest mb-3">
            Impact Comparison
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            See the ATS-Friendly Transformation
          </h3>
          <p className="mt-4 text-base text-slate-500 font-medium leading-relaxed">
            Passive sentences fail to convey competence. Compare a typical candidate's draft with an AI-engineered bullet optimized for recruiters.
          </p>
        </div>

        {/* Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="lg:col-span-5 bg-rose-50/30 border border-rose-200/80 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex items-center gap-2 text-rose-600 font-bold text-sm uppercase tracking-wider mb-6">
                <XCircle className="w-5 h-5 shrink-0" />
                Before (Draft Content)
              </div>
              <blockquote className="text-slate-600 font-medium text-base italic leading-relaxed pl-4 border-l-2 border-rose-300">
                "Built a chat application using React."
              </blockquote>
            </div>

            <div className="mt-8 space-y-2 border-t border-rose-100 pt-5">
              <span className="text-xs font-bold text-rose-500 uppercase tracking-wider block">Issues:</span>
              <ul className="text-xs text-slate-500 space-y-1.5 font-semibold">
                <li className="flex items-center gap-1.5">• Uses generic, passive action verbs</li>
                <li className="flex items-center gap-1.5">• Leaves out core architecture context</li>
                <li className="flex items-center gap-1.5">• Missing business/engineering impact</li>
              </ul>
            </div>
          </motion.div>

          {/* Arrow Separator */}
          <div className="lg:col-span-2 flex justify-center py-4">
            <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 rotate-90 lg:rotate-0 shadow-sm">
              <ChevronRight className="w-6 h-6" />
            </div>
          </div>

          {/* After Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="lg:col-span-5 bg-emerald-50/20 border border-emerald-200/80 rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden h-full"
          >
            {/* Visual Highlight glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/30 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-wider">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  After (ATS-Optimized)
                </div>
                <span className="text-[10px] font-bold text-emerald-700 uppercase bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded">
                  Score: 98
                </span>
              </div>
              <blockquote className="text-slate-900 font-bold text-base leading-relaxed pl-4 border-l-2 border-emerald-500">
                "Developed a <span className="bg-emerald-50 text-emerald-700 px-1 border-b border-emerald-200 rounded-sm">real-time chat platform</span> using{" "}
                <span className="bg-emerald-50 text-emerald-700 px-1 border-b border-emerald-200 rounded-sm">React, Node.js, Socket.IO, and MongoDB</span>, enabling{" "}
                <span className="bg-emerald-50 text-emerald-700 px-1 border-b border-emerald-200 rounded-sm">seamless bi-directional communication</span> and secure user authentication."
              </blockquote>
            </div>

            <div className="mt-8 space-y-2 border-t border-emerald-100 pt-5">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Optimizations:</span>
              <ul className="text-xs text-slate-600 space-y-1.5 font-semibold">
                <li className="flex items-center gap-1.5 text-emerald-700">• Action verb: "Developed"</li>
                <li className="flex items-center gap-1.5 text-emerald-700">• Expanded tech stack</li>
                <li className="flex items-center gap-1.5 text-emerald-700">• Quantified features (real-time, bi-directional)</li>
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Feature Breakdown Table/Grid */}
        <div suppressHydrationWarning={true} className="mt-16 bg-slate-50/50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
          <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
            <CornerDownRight className="w-4 h-4 text-sky-500" />
            Bullet point formatting guidelines
          </h4>
          <div className="space-y-4">
            {points.map((pt, idx) => (
              <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-b border-slate-200/50 pb-3.5 last:border-b-0 last:pb-0">
                <div className="text-xs font-bold text-slate-900">{pt.label}</div>
                <div className="text-xs text-slate-400 font-medium sm:col-span-1">{pt.before}</div>
                <div className="text-xs text-sky-700 font-semibold sm:col-span-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                  {pt.after}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
