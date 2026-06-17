"use client";

import React from "react";
import { Sparkles, Mail } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200/60 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-slate-200/50 pb-12">

          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <a
              href="#"
              onClick={(e) => handleScrollTo(e, "#")}
              className="flex items-center gap-2 group cursor-pointer w-fit"
            >
              <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white shadow-md shadow-sky-500/10 group-hover:bg-sky-600 transition-colors">
                <Sparkles className="w-4.5 h-4.5" />
              </div>
              <span className="font-bold text-base tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                Resume Bullet <span className="text-sky-500">Generator</span>
              </span>
            </a>
            <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-sm">
              Helping developers, designers, and tech professionals build bulletproof resumes that pass screening filters and secure top recruiter phone calls.
            </p>
          </div>

          {/* Links Col */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">Navigation</span>
              <a
                href="#features"
                onClick={(e) => handleScrollTo(e, "#features")}
                className="text-xs text-slate-500 hover:text-sky-600 transition-colors font-medium cursor-pointer"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => handleScrollTo(e, "#how-it-works")}
                className="text-xs text-slate-500 hover:text-sky-600 transition-colors font-medium cursor-pointer"
              >
                How It Works
              </a>
              <a
                href="#examples"
                onClick={(e) => handleScrollTo(e, "#examples")}
                className="text-xs text-slate-500 hover:text-sky-600 transition-colors font-medium cursor-pointer"
              >
                Examples
              </a>
              <a
                href="#faq"
                onClick={(e) => handleScrollTo(e, "#faq")}
                className="text-xs text-slate-500 hover:text-sky-600 transition-colors font-medium cursor-pointer"
              >
                FAQ
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">Connect</span>
              <a
                href="https://github.com/Himanshuazad03/BulletCraft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 hover:text-sky-600 transition-colors font-medium cursor-pointer flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                GitHub
              </a>
              <a
                href="mailto:himanshuazad05@gmail.com"
                className="text-xs text-slate-500 hover:text-sky-600 transition-colors font-medium cursor-pointer flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                Contact Email
              </a>
            </div>
          </div>
        </div>

        {/* Footer Meta Row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
          <span>&copy; 2026 Resume Bullet Generator. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-700">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-700">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
