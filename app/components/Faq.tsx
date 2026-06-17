"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "Is it free?",
      answer: "Yes, the Resume Bullet Generator core engine is completely free to use. You can input as many project drafts as you want, refine the descriptions, and copy the optimized output results with no hidden subscriptions.",
    },
    {
      question: "Is it ATS-friendly?",
      answer: "Absolutely. The bullet generation algorithm is specifically designed to use high-impact action verbs and structure achievements using the STAR methodology. It helps bypass ATS screening filters by eliminating weak terminology and mapping tech stack elements cleanly.",
    },
    {
      question: "Can I use it for LinkedIn?",
      answer: "Yes. In addition to resume bullets, the generator exports formatted descriptions tailored for the 'Projects' or 'Experience' sections of your LinkedIn profile. You can switch to the LinkedIn tab in the output panel to copy them directly.",
    },
    {
      question: "Do I need AI experience?",
      answer: "None at all. Just input your project details exactly how you would describe them to a colleague in plain speech. The generator will analyze the phrasing, prompt you for key details if needed, and draft the professional copy automatically.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-16 relative">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-sky-500 uppercase tracking-widest mb-3">
            Got Questions?
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h3>
          <p className="mt-4 text-base text-slate-500 font-medium leading-relaxed">
            Find quick answers to common questions about ATS optimization, exporting to LinkedIn, and profile builders.
          </p>
        </div>

        {/* Accordion Questions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/80 rounded-2xl bg-white overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-slate-50/50 transition-colors select-none"
                >
                  <span className="font-bold text-slate-800 text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4 text-sky-500" /> : <Plus className="w-4 h-4 text-slate-400" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-slate-500 leading-relaxed border-t border-slate-100 font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer help callout */}
        <div className="mt-12 text-center text-xs text-slate-400 font-medium flex items-center justify-center gap-1.5 bg-slate-50 border border-slate-200/50 py-3.5 px-6 rounded-full max-w-md mx-auto">
          <HelpCircle className="w-4.5 h-4.5 text-sky-500 shrink-0" />
          <span>Have another question? Get in touch at <span className="text-slate-800 font-bold hover:underline cursor-pointer">support@resumebullet.com</span></span>
        </div>

      </div>
    </section>
  );
}
