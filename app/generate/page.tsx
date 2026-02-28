"use client";

import { useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  Map,
  Target,
  Clock,
  BarChart,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GeneratePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goal: "",
    level: "Beginner",
    timeline: "",
  });

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      `/roadmap?goal=${encodeURIComponent(formData.goal)}&level=${formData.level}&timeline=${encodeURIComponent(formData.timeline)}`,
    );
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans flex flex-col items-center transition-colors duration-300">
      {/* Header */}
      <Navbar className="max-w-4xl">
        <div className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-white/50 dark:bg-slate-900/50 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800">
          Step {step} of 3
        </div>
      </Navbar>

      <div className="flex-1 w-full max-w-xl mx-auto px-6 py-12 flex flex-col">
        {/* Progress Bar */}
        <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mb-10 overflow-hidden">
          <div
            className="h-full bg-emerald-500 transition-all duration-500 ease-out"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        <form
          onSubmit={
            step === 3
              ? handleSubmit
              : (e) => {
                  e.preventDefault();
                  nextStep();
                }
          }
          className="flex-1 flex flex-col"
        >
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-6">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                What do you want to learn?
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Be as specific as you like. The more details you provide, the
                better the roadmap.
              </p>

              <div className="space-y-4">
                <input
                  type="text"
                  required
                  autoFocus
                  placeholder="e.g., Become a Full-Stack Next.js Developer"
                  value={formData.goal}
                  onChange={(e) =>
                    setFormData({ ...formData, goal: e.target.value })
                  }
                  className="w-full px-5 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg shadow-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-slate-100"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-6">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6">
                <BarChart className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                What is your current level?
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                We will adjust the starting point of your roadmap based on what
                you already know.
              </p>

              <div className="grid grid-cols-1 gap-3">
                {[
                  "Absolute Beginner",
                  "Beginner",
                  "Intermediate",
                  "Advanced",
                ].map((lvl) => (
                  <label
                    key={lvl}
                    className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${formData.level === lvl ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 ring-1 ring-emerald-500" : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-emerald-300 dark:hover:border-emerald-700"}`}
                  >
                    <input
                      type="radio"
                      name="level"
                      value={lvl}
                      checked={formData.level === lvl}
                      onChange={(e) =>
                        setFormData({ ...formData, level: e.target.value })
                      }
                      className="hidden"
                    />
                    <div className="flex-1 text-lg font-medium text-slate-900 dark:text-slate-100">
                      {lvl}
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.level === lvl ? "border-emerald-500" : "border-slate-300 dark:border-slate-700"}`}
                    >
                      {formData.level === lvl && (
                        <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-6">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                What is your time commitment?
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Tell us how much time you can dedicate and your overall
                deadline.
              </p>

              <div className="space-y-4">
                <input
                  type="text"
                  required
                  autoFocus
                  placeholder="e.g., 10 hours/week for 6 months"
                  value={formData.timeline}
                  onChange={(e) =>
                    setFormData({ ...formData, timeline: e.target.value })
                  }
                  className="w-full px-5 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg shadow-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-slate-100"
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-auto pt-10 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-xl font-medium transition-all hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Back</span>
              </button>
            ) : (
              <div /> // Spacer
            )}

            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-600 text-white rounded-xl font-medium transition-all shadow-md active:scale-95 ml-auto"
            >
              <span>{step === 3 ? "Generate Roadmap" : "Continue"}</span>
              {step !== 3 && <ArrowRight className="w-5 h-5" />}
              {step === 3 && <Sparkles className="w-4 h-4 ml-1" />}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
