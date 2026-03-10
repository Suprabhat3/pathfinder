import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-[85vh] px-6 z-10 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-8 text-sm font-semibold text-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors mt-10">
        <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
        <span>Your AI-Powered Journey to Success</span>
      </div>

      <h1 className="max-w-5xl text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-slate-900 dark:text-slate-50 mb-8 leading-[1.1] sm:leading-[1.1]">
        Stop guessing. <br className="hidden md:block" />
        <span className="text-emerald-600 dark:text-emerald-500 relative z-10">
          Start achieving.
        </span>
      </h1>

      <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl leading-relaxed mx-auto">
        Let AI build your perfect, personalized learning roadmap. From absolute
        zero to mastery, tailored to your goals and timeline.
      </p>

      {/* Call to action buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto relative group">
        <Link
          href="/generate"
          className="group/btn relative flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600 text-white rounded-xl font-bold text-lg transition-all active:scale-95 border border-transparent"
        >
          <span className="relative z-10">Start for Free</span>
          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform relative z-10" />
        </Link>
        <Link
          href="#how-it-works"
          className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-lg transition-all active:scale-95 shadow-sm"
        >
          See How It Works
        </Link>
      </div>
    </div>
  );
}
