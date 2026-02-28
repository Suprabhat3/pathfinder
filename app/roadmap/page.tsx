"use client";

import { useState, useEffect, Suspense } from "react";
import {
  CheckCircle2,
  Circle,
  Clock,
  ExternalLink,
  Map,
  Download,
  Share2,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";

interface Resource {
  name: string;
  url: string;
}

interface Step {
  id: number;
  title: string;
  description: string;
  time: string;
  resources: Resource[];
}

function RoadmapContent() {
  const searchParams = useSearchParams();
  const goalStr = searchParams.get("goal");
  const levelStr = searchParams.get("level") || "Beginner";
  const timelineStr = searchParams.get("timeline") || "";
  const goal = goalStr ? decodeURIComponent(goalStr) : "Your Learning Journey";

  const [completed, setCompleted] = useState<number[]>([]);
  const [roadmap, setRoadmap] = useState<Step[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!goalStr) return;

    // A unique key for this local storage entry to cache the AI generation
    const cacheKey = `roadmap-${goalStr}-${levelStr}-${timelineStr}`
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-");
    const cachedData = localStorage.getItem(cacheKey);
    const cachedCompleted = localStorage.getItem(`${cacheKey}-completed`);

    if (cachedCompleted) {
      try {
        setCompleted(JSON.parse(cachedCompleted));
      } catch (e) {}
    }

    if (cachedData) {
      try {
        setRoadmap(JSON.parse(cachedData));
        setLoading(false);
        return;
      } catch (e) {}
    }

    // Call API if no cache
    const fetchRoadmap = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            goal: goalStr,
            level: levelStr,
            timeline: timelineStr,
          }),
        });

        if (!res.ok) {
          const errData = await res.json();
          throw new Error(
            errData.details || errData.error || "Failed to generate roadmap",
          );
        }

        const data = await res.json();
        if (data.roadmap && Array.isArray(data.roadmap)) {
          setRoadmap(data.roadmap);
          localStorage.setItem(cacheKey, JSON.stringify(data.roadmap));
        } else {
          throw new Error("Invalid format received from AI.");
        }
      } catch (err: any) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchRoadmap();
  }, [goalStr, levelStr, timelineStr]);

  const toggleComplete = (id: number) => {
    const newCompleted = completed.includes(id)
      ? completed.filter((c) => c !== id)
      : [...completed, id];

    setCompleted(newCompleted);

    // Save to localstorage
    const cacheKey = `roadmap-${goalStr}-${levelStr}-${timelineStr}`
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-");
    localStorage.setItem(`${cacheKey}-completed`, JSON.stringify(newCompleted));
  };

  const currentSteps = roadmap || [];
  const progress =
    currentSteps.length > 0
      ? Math.round((completed.length / currentSteps.length) * 100)
      : 0;

  return (
    <main className="min-h-screen bg-slate-50 font-sans flex flex-col items-center">
      {/* Header */}
      <Navbar className="max-w-4xl sticky top-0 bg-slate-50/80 backdrop-blur-md border-b border-slate-200/50">
        <button className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100">
          <Share2 className="w-4 h-4" /> Share
        </button>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100"
        >
          <Download className="w-4 h-4" /> Export
        </button>
      </Navbar>

      <div className="flex-1 w-full max-w-3xl mx-auto px-6 py-12 flex flex-col">
        {/* Title & Progress */}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            {goal}
          </h1>

          {!loading && !error && currentSteps.length > 0 && (
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
                {completed.length} of {currentSteps.length} milestones
                completed. Keep going!
              </p>
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 animate-in fade-in duration-500">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-slate-200 rounded-full animate-pulse"></div>
              <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent stroke-emerald-500 rounded-full animate-spin absolute top-0 left-0"></div>
              <Sparkles className="w-6 h-6 text-emerald-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
              AI is crafting your roadmap...
            </h3>
            <p className="text-slate-500 text-center max-w-sm">
              Analyzing your goal, adjusting for your '{levelStr}' level, and
              tailoring to your timeline.
            </p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-red-900 mb-2">
              Generation Failed
            </h3>
            <p className="text-red-700 mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Timeline */}
        {!loading && !error && currentSteps.length > 0 && (
          <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 space-y-12 pb-10">
            {currentSteps.map((step) => {
              const isCompleted = completed.includes(step.id);

              return (
                <div
                  key={step.id}
                  className="relative pl-8 sm:pl-12 opacity-100 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
                  style={{ animationDelay: `${step.id * 100}ms` }}
                >
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
                    {step.resources && step.resources.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
                          Resources
                        </h4>
                        <ul className="flex flex-col gap-2">
                          {step.resources.map((res, i) => (
                            <li key={i}>
                              {res.url !== "#" ? (
                                <a
                                  href={res.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors p-2 -ml-2 rounded-lg hover:bg-emerald-50"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  {res.name}
                                </a>
                              ) : (
                                <span className="inline-flex items-center gap-2 text-slate-600 font-medium p-2 -ml-2 rounded-lg cursor-default">
                                  <ExternalLink className="w-4 h-4 opacity-50" />
                                  {res.name}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
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
