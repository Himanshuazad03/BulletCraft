"use client";

import React from "react";
import { ListTodo, Sliders, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      icon: ListTodo,
      number: "01",
      title: "Enter Project Details",
      description: "Provide the draft details, title, and role context. Write just like you normally would speak—no professional jargon required.",
    },
    {
      icon: Sliders,
      number: "02",
      title: "Choose Customizations",
      description: "Select technologies, key achievements to highlight, and set the style tone that matches your target sector or job profile.",
    },
    {
      icon: Sparkles,
      number: "03",
      title: "Generate Content",
      description: "Instant access to ATS-friendly bullets, formatted LinkedIn-ready summaries, and custom-tailored interview talking points.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 12 },
    },
  };

  return (
    <section id="how-it-works" className="py-24 bg-slate-50/50 border-y border-slate-100 relative scroll-mt-16">
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-40" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-sky-500 uppercase tracking-widest mb-3">
            Workflow & Process
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            How The Generator Works
          </h3>
          <p className="mt-4 text-base text-slate-500 font-medium leading-relaxed">
            Optimizing project text only takes a few mouse clicks. Follow our structured path to generate recruiter-approved outputs.
          </p>
        </div>

        {/* Steps Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative"
        >
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[68px] left-[15%] right-[15%] h-[1.5px] bg-slate-200 pointer-events-none z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 z-10 flex flex-col justify-between"
              >
                <div>
                  {/* Step Header with Icon & Number */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center border border-sky-100/50 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-extrabold text-3xl text-slate-200 tracking-tight group-hover:text-sky-100 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Micro animation highlight on hover */}
                <div className="w-full h-1 bg-slate-100 rounded-full mt-8 overflow-hidden">
                  <div className="w-0 h-full bg-sky-500 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
