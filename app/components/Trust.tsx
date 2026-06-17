"use client";

import React from "react";
import { Cpu, Zap, UserCheck, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Trust() {
  const stats = [
    {
      icon: Cpu,
      title: "ATS Optimized",
      description: "Keywords mapped specifically for applicant tracking systems.",
      value: "100%",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Receive recruiter-ready descriptions in less than 3 seconds.",
      value: "< 3s",
    },
    {
      icon: UserCheck,
      title: "Recruiter Friendly",
      description: "Formated using key action verbs that capture attention.",
      value: "STAR",
    },
    {
      icon: Award,
      title: "Free to Use",
      description: "Start formatting and copying your bullets with zero cost.",
      value: "Free",
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 12 },
    },
  };

  return (
    <section className="py-16 bg-slate-50/50 border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-wider text-slate-400 uppercase">
            Built for students, developers, job seekers, and professionals
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group relative bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-500 flex items-center justify-center mb-5 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-sky-600 transition-colors">
                    {stat.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {stat.description}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-baseline justify-between">
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Metric</span>
                  <span className="font-extrabold text-sky-950 text-lg">{stat.value}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
