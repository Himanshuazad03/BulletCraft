"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Copy,
  Check,
  Code2,
  Wrench,
  FileEdit,
  CheckCircle2,
  RefreshCw,
  Briefcase,
  Compass,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { generateProjectContent, type ProjectPreset } from "../actions/generation";

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

type TabId = "bullets" | "linkedin";

export default function LiveDemo() {
  const [title, setTitle] = useState("");
  const [technologies, setTechnologies] = useState("" );
  const [description, setDescription] = useState("");

  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>("bullets");
  const [copied, setCopied] = useState(false);

  // Active generated content based on fields
  const [generatedContent, setGeneratedContent] = useState<ProjectPreset>(
    {title:"",
      technologies:"",
      description:"",
      bullets:[],
      linkedin:""}  
  );

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    setIsGenerating(true);

    try {
      const data = await generateProjectContent(title, technologies, description);
      setGeneratedContent(data);
      // Auto-fill form inputs if they were left blank but returned by AI
      if (data.title && !title.trim()) {
        setTitle(data.title);
      }
      if (data.technologies && !technologies.trim()) {
        setTechnologies(data.technologies);
      }
    } catch (error) {
      console.error("Failed to generate content:", error);
      alert("Error generating content. Please make sure GOOGLE_GENERATIVE_AI_API_KEY is set in your environment.");
    } finally {
      setIsGenerating(false);
    }
  };

  const getCopyText = () => {
    if (activeTab === "bullets") {
      return generatedContent.bullets.join("\n");
    } 
    else{
      return generatedContent.linkedin;
    } 
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCopyText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="live-demo" className="pt-10 bg-white ">
      <div className=" max-w-7xl mx-auto px-6 md:px-8">
        {/* Interactive Sandbox Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Input Panel Form (Left Column) */}
          <form onSubmit={handleGenerate} className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <h4 className="font-extrabold text-slate-800 text-base border-b border-slate-100 pb-4 flex items-center gap-2">
              <FileEdit className="w-5 h-5 text-sky-500" />
              Configure Project Details
            </h4>

            {/* Project Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2"
              >
                Project Name
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 transition-all font-medium"
                  placeholder="e.g. NextGen Web Shop"
                />
              </div>
            </div>

            {/* Technologies */}
            <div>
              <label
                htmlFor="tech"
                className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2"
              >
                Technologies Integrated
              </label>
              <div className="relative">
                <Code2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  id="tech"
                  value={technologies}
                  onChange={(e) => setTechnologies(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 transition-all font-medium"
                  placeholder="e.g. React, TypeScript, Node.js"
                />
              </div>
            </div>

            {/* Raw Description */}
            <div>
              <label
                htmlFor="desc"
                className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2"
              >
                Project Description (Draft notes)
              </label>
              <textarea
                id="desc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="w-full p-4 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 transition-all font-medium resize-none leading-relaxed"
                placeholder="What did you build? What does it do? Write simple sentences..."
              />
            </div>

            {/* Action Button */}
            <button
              type="submit"
              disabled={isGenerating || !description.trim()}
              className="w-full py-4 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-800/80 disabled:text-slate-200 disabled:cursor-not-allowed text-white border border-slate-800 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-slate-950/10 hover:shadow-slate-950/20 transition-all cursor-pointer select-none"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Generating Recruiter Data...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 fill-white" />
                  Generate Bullet Achievements
                </>
              )}
            </button>
          </form>

          {/* Output Dashboard (Right Column) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden flex flex-col h-full min-h-[460px]">
            {/* Tabs Header */}
            <div className="flex border-b border-slate-100 bg-slate-50/50 p-2 gap-1">
              <button
                type="button"
                onClick={() => setActiveTab("bullets")}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "bullets"
                    ? "bg-white text-sky-600 shadow-sm border border-slate-200/50"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/50"
                }`}
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                Resume Bullets
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("linkedin")}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "linkedin"
                    ? "bg-white text-sky-600 shadow-sm border border-slate-200/50"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/50"
                }`}
              >
                <LinkedinIcon className="w-4 h-4 shrink-0" />
                LinkedIn Post
              </button>
            </div>

            {/* Tab content space */}
            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab + "_" + isGenerating}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {isGenerating ? (
                    <div className="space-y-4 py-6">
                      <div className="h-4 bg-slate-100 rounded animate-pulse w-3/4" />
                      <div className="h-4 bg-slate-100 rounded animate-pulse w-5/6" />
                      <div className="h-4 bg-slate-100 rounded animate-pulse w-2/3" />
                    </div>
                  ) : (
                    <>
                      {/* Resume Bullets Tab */}
                      {activeTab === "bullets" && (
                        generatedContent.bullets.length > 0 ? (
                          <div className="space-y-4">
                            {generatedContent.bullets.map((bullet, index) => (
                              <div
                                key={index}
                                className="flex gap-3 text-sm text-slate-700 leading-relaxed font-medium"
                              >
                                <span className="text-sky-500 shrink-0 select-none mt-1 font-bold">
                                  •
                                </span>
                                <p className="hover:text-slate-900 transition-colors">
                                  {bullet}
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
                            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center mb-4 shadow-sm">
                              <Sparkles className="w-5 h-5 fill-sky-100 animate-pulse" />
                            </div>
                            <h5 className="font-bold text-slate-800 text-sm mb-1">Your Achievements Await</h5>
                            <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                              Describe your project and technology stack on the left, then click generate to craft optimized resume bullets.
                            </p>
                          </div>
                        )
                      )}

                      {/* LinkedIn Summary Tab */}
                      {activeTab === "linkedin" && (
                        generatedContent.linkedin ? (
                          <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl text-sm text-slate-700 leading-relaxed font-medium whitespace-pre-wrap">
                            {generatedContent.linkedin}
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
                            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center mb-4 shadow-sm">
                              <Sparkles className="w-5 h-5 fill-sky-100 animate-pulse" />
                            </div>
                            <h5 className="font-bold text-slate-800 text-sm mb-1">LinkedIn Post Draft</h5>
                            <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                              Your generated LinkedIn project announcement post will show up here after running the builder.
                            </p>
                          </div>
                        )
                      )}
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Copy Area Footer */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-400 font-medium">
                  ATS score status:{" "}
                  <span className={`${activeTab === "bullets" && generatedContent.bullets.length === 0 ? "text-slate-400 font-medium" : "text-emerald-600 font-bold"}`}>
                    {activeTab === "bullets" && generatedContent.bullets.length === 0 ? "Waiting for generation" : "Excellent"}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  disabled={activeTab === "bullets" ? generatedContent.bullets.length === 0 : !generatedContent.linkedin}
                  className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-slate-50 text-slate-700 border border-slate-200/80 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer shadow-sm hover:border-slate-300"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied content!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Output</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
