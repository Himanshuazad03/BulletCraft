"use client";

import React from "react";
import { FileText, MessageSquareCode, TrendingUp, Copy, PenTool } from "lucide-react";
import { motion } from "framer-motion";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Features() {
  const featureList = [
    {
      icon: FileText,
      title: "ATS-Friendly Resume Bullets",
      description: "Convert basic project responsibilities into result-focused statements using active language that ranks high on recruitment algorithms.",
      tag: "Core Engine",
    },
    {
      icon: LinkedinIcon,
      title: "LinkedIn Project Descriptions",
      description: "Generate structured, professional summaries tailored to LinkedIn's project section to catch the eye of browsing recruiters.",
      tag: "Social Ready",
    },
    {
      icon: MessageSquareCode,
      title: "Interview Talking Points",
      description: "Equip yourself with contextual prep prompts detailing how to explain the project challenge, action, and results (STAR model).",
      tag: "Prep Mode",
    },
    {
      icon: TrendingUp,
      title: "Achievement Quantification",
      description: "Get smart suggestions on metrics to estimate and quantify, transforming qualitative code edits into statistical accomplishments.",
      tag: "Impact Focus",
    },
    {
      icon: Copy,
      title: "One-Click Copy & Export",
      description: "Instantly copy optimized bullets, LinkedIn descriptions, or talking points individually or in bulk to streamline formatting.",
      tag: "Workflow",
    },
    {
      icon: PenTool,
      title: "Multiple Writing Styles",
      description: "Select from action-oriented, technical, business-focused, or minimalist tones to align perfectly with target company profiles.",
      tag: "Customization",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 70, damping: 14 },
    },
  };

  return (
    <section id="features" className="py-24 bg-white relative scroll-mt-16">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-sky-500 uppercase tracking-widest mb-3">
            Features & Capabilities
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Optimize Your Professional Presence Across All Touchpoints
          </h3>
          <p className="mt-4 text-base text-slate-500 font-medium leading-relaxed">
            Our tool goes beyond just writing bullet points. It helps you prepare for interviews, format social profiles, and prove your actual impact.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featureList.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-white border border-slate-200/80 rounded-2xl p-6.5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Top Header Card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-500 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full group-hover:border-sky-100 group-hover:text-sky-700 group-hover:bg-sky-50/50 transition-colors">
                      {feature.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-sky-600 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>

                
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
