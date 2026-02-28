"use client";

import { useState, Suspense } from "react";
import {
  CheckCircle2,
  Circle,
  Clock,
  ExternalLink,
  Map,
  Download,
  Share2,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// Mock data to serve as the static UI placeholder for Phase 1
const mockRoadmap = [
  {
    id: 1,
    title: "1. Fundamentals of the Web",
    description:
      "Understand how the internet works, HTTP protocols, DNS, and hosting basics.",
    time: "Week 1",
    resources: [
      { name: "MDN Web Docs: How the Web Works", url: "#" },
      { name: "Crash Course: Internet", url: "#" },
    ],
  },
  {
    id: 2,
    title: "2. HTML5 & Semantic Web",
    description:
      "Learn to structure documents, use semantic tags for accessibility, and work with forms.",
    time: "Week 2",
    resources: [
      { name: "FreeCodeCamp: HTML", url: "#" },
      { name: "HTML.com", url: "#" },
    ],
  },
  {
    id: 3,
    title: "3. CSS3 & Tailwind CSS",
    description:
      "Master CSS Flexbox, Grid, Responsive Design, and transition into using Tailwind CSS 4 for rapid UI building.",
    time: "Week 3-4",
    resources: [
      { name: "Tailwind CSS Docs", url: "#" },
      { name: "CSS Tricks: Flexbox Guide", url: "#" },
    ],
  },
  {
    id: 4,
    title: "4. JavaScript Deep Dive",
    description:
      "Variables, Functions, ES6+ features, async/await, DOM manipulation, and fundamental data structures.",
    time: "Week 5-7",
    resources: [
      { name: "JavaScript.info", url: "#" },
      { name: "Eloquent JavaScript", url: "#" },
    ],
  },
  {
    id: 5,
    title: "5. React 19 & Next.js 15",
    description:
      "Components, Hooks, Server Components, App Router, Data Fetching, and forms.",
    time: "Week 8-10",
    resources: [
      { name: "React.dev", url: "#" },
      { name: "Next.js Documentation", url: "#" },
    ],
  },
];

function RoadmapContent() {
  const searchParams = useSearchParams();
  const goalStr = searchParams.get("goal");
  const goal = goalStr ? decodeURIComponent(goalStr) : "Your Learning Journey";

  const [completed, setCompleted] = useState<number[]>([]);

  const toggleComplete = (id: number) => {
    if (completed.includes(id)) {
      setCompleted(completed.filter((c) => c !== id));
    } else {
      setCompleted([...completed, id]);
    }
  };

  const progress = Math.round((completed.length / mockRoadmap.length) * 100);

  return (
    <main className="min-h-screen bg-slate-50 font-sans flex flex-col items-center">
      {/* Header */}
      <nav className="w-full max-w-4xl mx-auto px-6 py-6 flex items-center justify-between z-10 sticky top-0 bg-slate-50/80 backdrop-blur-md border-b border-slate-200/50">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="bg-emerald-500 p-2 rounded-xl">
            <Map className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900 hidden sm:block">
            PathFinder<span className="text-emerald-600">AI</span>
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100">
            <Share2 className="w-4 h-4" /> Share
          </button>
          <button className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100">
            <Download className="w-4 h-4" /> Export
          </button>
        </div>
      </nav>

      <div className="flex-1 w-full max-w-3xl mx-auto px-6 py-12 flex flex-col">
        {/* Title & Progress */}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            {goal}
          </h1>

          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-700">
                Overall Progress
              </span>
              <span className="font-bold text-emerald-600">{progress}%</span>
            </div>
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden relative">
              <div
                className="absolute left-0 top-0 bottom-0 bg-emerald-500 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-slate-500">
              {completed.length} of {mockRoadmap.length} milestones completed.
              Keep going!
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 space-y-12 pb-10">
          {mockRoadmap.map((step) => {
            const isCompleted = completed.includes(step.id);

            return (
              <div key={step.id} className="relative pl-8 sm:pl-12 opacity-100">
                {/* Timeline dot/icon */}
                <button
                  onClick={() => toggleComplete(step.id)}
                  className="absolute -left-[21px] top-6 bg-slate-50 p-1 rounded-full text-slate-300 hover:text-emerald-500 transition-colors group z-10"
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-8 h-8 text-emerald-500 bg-white rounded-full" />
                  ) : (
                    <Circle className="w-8 h-8 text-slate-300 group-hover:text-emerald-400 fill-white" />
                  )}
                </button>

                {/* Step Card */}
                <div
                  className={`bg-white border p-6 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md ${isCompleted ? "border-emerald-200 bg-emerald-50/30" : "border-slate-200"}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <h2
                      className={`text-xl font-bold transition-colors ${isCompleted ? "text-emerald-800" : "text-slate-900"}`}
                    >
                      {step.title}
                    </h2>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-lg shrink-0">
                      <Clock className="w-4 h-4" />
                      {step.time}
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Resources */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
                      Resources
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {step.resources.map((res, i) => (
                        <li key={i}>
                          <a
                            href={res.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors p-2 -ml-2 rounded-lg hover:bg-emerald-50"
                          >
                            <ExternalLink className="w-4 h-4" />
                            {res.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default function RoadmapPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
          <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent stroke-emerald-500 rounded-full animate-spin"></div>
        </div>
      }
    >
      <RoadmapContent />
    </Suspense>
  );
}
