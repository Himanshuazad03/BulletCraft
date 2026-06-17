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
  Compass 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

interface ProjectPreset {
  title: string;
  technologies: string;
  description: string;
  bullets: string[];
  linkedin: string;
  interview: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
}

const PRESETS: Record<string, ProjectPreset> = {
  ecommerce: {
    title: "Full-Stack E-commerce Engine",
    technologies: "Next.js, Node.js, Express, MongoDB, Stripe, Redis",
    description: "I built a web store where users can browse, search for items, login, and pay. I also worked on database queries to make it load quicker and set up redis to cache catalog data.",
    bullets: [
      "Engineered a high-concurrency e-commerce portal utilizing Next.js, Node.js, and MongoDB, supporting 12,000+ active product listings.",
      "Integrated secure Stripe gateway payment and JWT-based authentication, reducing transaction abandonment rates by 24%.",
      "Optimized query structures and implemented Redis cache layer, reducing database response times and improving First Contentful Paint by 35%."
    ],
    linkedin: "🚀 Excited to share my latest project: a full-stack e-commerce engine! Built using Next.js, Node.js, MongoDB, Stripe, and Redis, it features secure payment gateways, optimized catalog search, and query caching that boosted load speeds by 35%. Check out how it performs under heavy concurrency!",
    interview: {
      situation: "The client wanted a robust e-commerce catalog that could handle fast search queries and secure payments without page-load delays.",
      task: "I was tasked with building the backend payment integration and optimizing the slow catalog queries.",
      action: "I built JWT-based authentication, integrated Stripe API, refactored database queries, and implemented Redis to cache product searches.",
      result: "Checkout drop-off rates fell by 24% and catalog query load speeds improved by 35%."
    }
  },
  fitness: {
    title: "Mobile Fitness & Workout Tracker",
    technologies: "React Native, Expo, Redux Toolkit, Firebase, Node.js",
    description: "I created a mobile app for users to log workout routines, count calories, and track weight. I synced it up with Firebase to save user details and used Redux to keep tracking states consistent.",
    bullets: [
      "Designed and deployed a responsive iOS & Android tracking app utilizing React Native, Expo, and Redux Toolkit, capturing 5,000+ daily active users.",
      "Configured Firebase Firestore backend architecture, facilitating offline data sync and reducing profile loading times by 18%.",
      "Created structured state-management pipelines using Redux, guaranteeing consistent caching of workout records and user history logs."
    ],
    linkedin: "💪 Just finalized the build of a mobile workout tracker! Scaled using React Native, Expo, Redux, and Firebase. It enables offline data caching and synchronization, providing users with a frictionless tracking experience. Extremely proud of achieving a sub-100ms response time on user inputs!",
    interview: {
      situation: "Users needed a reliable mobile fitness tracker that would not lose their workout state when they disconnected from internet.",
      task: "My objective was to ensure offline state consistency and sync data safely to database stores.",
      action: "I developed a redundant offline caching logic using React Native AsyncStorage, and wired it up to sync with Firebase Firestore on reconnect.",
      result: "Successfully retained workout states with 100% data consistency, achieving 5k+ daily active users."
    }
  },
  datapipeline: {
    title: "Real-time Data Processing Pipeline",
    technologies: "Python, Apache Kafka, AWS Lambda, PostgreSQL, Docker",
    description: "I made a pipeline that reads logs from servers, filters them out, and writes them into PostgreSQL. I used Kafka to process it in real-time, and hosted standard lambdas on AWS.",
    bullets: [
      "Architected a scalable stream pipeline using Python and Apache Kafka, processing 500,000+ server log updates per day in real-time.",
      "Configured Dockerized AWS Lambda microservices to clean data, resulting in a 40% reduction in database write overhead.",
      "Optimized PostgreSQL database schemas and index settings, ensuring sub-50ms query processing for diagnostic analytics reports."
    ],
    linkedin: "📊 Developed a real-time data ingestion pipeline! Leveraging Python, Apache Kafka, AWS Lambda, and PostgreSQL, this pipeline streams, cleanses, and indexes over 500,000 logs daily. Used Docker to containerize services and AWS to scale, decreasing database write load by 40%!",
    interview: {
      situation: "Our servers were writing logs too slowly, bottlenecking relational database write locks.",
      task: "I had to stream server logs into database storage asynchronously without interrupting front-facing systems.",
      action: "I utilized Apache Kafka as a buffer stream, containerized cleansing tasks in AWS Lambda, and tuned indices on PostgreSQL tables.",
      result: "Reduced database insert contention by 40% and logs are indexed in under 50ms."
    }
  }
};

type TabId = "bullets" | "linkedin" | "interview";

export default function LiveDemo() {
  const [activePreset, setActivePreset] = useState<keyof typeof PRESETS>("ecommerce");
  const [title, setTitle] = useState(PRESETS.ecommerce.title);
  const [technologies, setTechnologies] = useState(PRESETS.ecommerce.technologies);
  const [description, setDescription] = useState(PRESETS.ecommerce.description);
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>("bullets");
  const [copied, setCopied] = useState(false);

  // Active generated content based on fields
  const [generatedContent, setGeneratedContent] = useState<ProjectPreset>(PRESETS.ecommerce);

  const handleSelectPreset = (key: keyof typeof PRESETS) => {
    setActivePreset(key);
    setTitle(PRESETS[key].title);
    setTechnologies(PRESETS[key].technologies);
    setDescription(PRESETS[key].description);
    setGeneratedContent(PRESETS[key]);
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    // Simulate AI generation lag
    setTimeout(() => {
      // For the demo, if they changed something, we generate customized outputs
      // If matching preset, use preset; otherwise make dynamic variants of active presets to simulate editing
      const basePreset = PRESETS[activePreset] || PRESETS.ecommerce;
      
      setGeneratedContent({
        title: title || "My Project",
        technologies: technologies || "React",
        description: description,
        bullets: basePreset.bullets.map(b => {
          // simple dynamic interpolation mock
          let updated = b;
          if (title) updated = updated.replace(/e-commerce portal|tracking app|stream pipeline/i, title.toLowerCase());
          return updated;
        }),
        linkedin: `🚀 Check out my latest project: ${title}! Powered by ${technologies}. Key stats: ${basePreset.linkedin.substring(basePreset.linkedin.indexOf("boosting") || basePreset.linkedin.indexOf("Offline") || 50)}`,
        interview: {
          situation: `Our team needed to build ${title} using ${technologies} within a short deadline.`,
          task: `I took ownership of designing components and backend structures using ${technologies.split(",")[0] || "React"}.`,
          action: `I built core modules, streamlined integration flows, and wired up API responses.`,
          result: basePreset.interview.result
        }
      });
      
      setIsGenerating(false);
    }, 800);
  };

  const getCopyText = () => {
    if (activeTab === "bullets") {
      return generatedContent.bullets.join("\n");
    } else if (activeTab === "linkedin") {
      return generatedContent.linkedin;
    } else {
      const { situation, task, action, result } = generatedContent.interview;
      return `SITUATION: ${situation}\nTASK: ${task}\nACTION: ${action}\nRESULT: ${result}`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCopyText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="live-demo" className="py-24 bg-white scroll-mt-16 relative">
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-40" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-sky-500 uppercase tracking-widest mb-3">
            Interactive Sandbox
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Try the Live Mock Generator
          </h3>
          <p className="mt-4 text-base text-slate-500 font-medium leading-relaxed">
            Select a project template below, tweak the parameters, and watch how it transforms into recruiter-optimized professional descriptions instantly.
          </p>
        </div>

        {/* Preset Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 max-w-2xl mx-auto">
          <button
            onClick={() => handleSelectPreset("ecommerce")}
            className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activePreset === "ecommerce"
                ? "bg-sky-500 text-white shadow-md shadow-sky-500/15"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/50"
            }`}
          >
            🛒 Full-Stack E-commerce
          </button>
          <button
            onClick={() => handleSelectPreset("fitness")}
            className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activePreset === "fitness"
                ? "bg-sky-500 text-white shadow-md shadow-sky-500/15"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/50"
            }`}
          >
            🏋️ Mobile Fitness App
          </button>
          <button
            onClick={() => handleSelectPreset("datapipeline")}
            className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activePreset === "datapipeline"
                ? "bg-sky-500 text-white shadow-md shadow-sky-500/15"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/50"
            }`}
          >
            ⚡ Data Streaming Pipeline
          </button>
        </div>

        {/* Interactive Sandbox Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Input Panel Form (Left Column) */}
          <form
            onSubmit={handleGenerate}
            className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
          >
            <h4 className="font-extrabold text-slate-800 text-base border-b border-slate-100 pb-4 flex items-center gap-2">
              <FileEdit className="w-5 h-5 text-sky-500" />
              Configure Project Details
            </h4>

            {/* Project Title */}
            <div>
              <label htmlFor="title" className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
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
              <label htmlFor="tech" className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
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
              <label htmlFor="desc" className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
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
              className="w-full py-4 bg-sky-500 hover:bg-sky-600 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-sky-500/15 hover:shadow-sky-500/25 transition-all cursor-pointer select-none"
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
              <button
                type="button"
                onClick={() => setActiveTab("interview")}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "interview"
                    ? "bg-white text-sky-600 shadow-sm border border-slate-200/50"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/50"
                }`}
              >
                <Compass className="w-4 h-4 shrink-0" />
                Interview STAR Prep
              </button>
            </div>

            {/* Tab content space */}
            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab + "_" + activePreset + "_" + isGenerating}
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
                        <div className="space-y-4">
                          {generatedContent.bullets.map((bullet, index) => (
                            <div key={index} className="flex gap-3 text-sm text-slate-700 leading-relaxed font-medium">
                              <span className="text-sky-500 shrink-0 select-none mt-1 font-bold">•</span>
                              <p className="hover:text-slate-900 transition-colors">
                                {bullet}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* LinkedIn Summary Tab */}
                      {activeTab === "linkedin" && (
                        <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl text-sm text-slate-700 leading-relaxed font-medium whitespace-pre-wrap">
                          {generatedContent.linkedin}
                        </div>
                      )}

                      {/* Interview Prep Tab */}
                      {activeTab === "interview" && (
                        <div className="space-y-4">
                          {[
                            { label: "SITUATION", text: generatedContent.interview.situation, color: "border-sky-500 bg-sky-50/20 text-sky-850" },
                            { label: "TASK", text: generatedContent.interview.task, color: "border-amber-500 bg-amber-50/10 text-slate-800" },
                            { label: "ACTION", text: generatedContent.interview.action, color: "border-indigo-500 bg-indigo-50/10 text-slate-800" },
                            { label: "RESULT", text: generatedContent.interview.result, color: "border-emerald-500 bg-emerald-50/20 text-emerald-950 font-bold" }
                          ].map((phase, idx) => (
                            <div key={idx} className={`border-l-4 ${phase.color} pl-4 py-2`}>
                              <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{phase.label}</span>
                              <p className="text-sm leading-relaxed">{phase.text}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Copy Area Footer */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-400 font-medium">
                  ATS score verified: <span className="text-emerald-600 font-bold">Excellent</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer shadow-sm hover:border-slate-300"
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
