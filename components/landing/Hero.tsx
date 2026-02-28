import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-[85vh] px-6 z-10 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Subtle ambient light centered behind text to ensure contrast */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-100/40 dark:bg-emerald-900/10 blur-[100px] rounded-full mx-auto pointer-events-none -z-10 transition-colors duration-500"></div>

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-900/50 border border-emerald-200 dark:border-emerald-800/50 backdrop-blur-md mb-8 text-sm font-semibold text-emerald-800 dark:text-emerald-300 shadow-sm shadow-emerald-100 dark:shadow-none hover:bg-white/80 dark:hover:bg-slate-800/80 transition-colors mt-10">
        <Sparkles className="w-4 h-4 text-emerald-500 animate-pulse" />
        <span>Your AI-Powered Journey to Success</span>
      </div>

      <h1 className="max-w-4xl text-5xl md:text-7xl lg:text-[5rem] font-extrabold tracking-tight text-slate-900 dark:text-slate-50 mb-6 leading-[1.1]">
        Stop guessing. <br className="hidden md:block" />
        <span className="relative inline-block mt-2">
          {/* Subtle gradient stroke or beautiful text treatment */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 relative z-10">
            Start achieving.
          </span>
          {/* Highlighting stroke behind text */}
          <div className="absolute -bottom-1 left-0 w-full h-4 bg-emerald-200/60 dark:bg-emerald-900/40 -rotate-1 rounded-full -z-10 blur-[1px]"></div>
        </span>
      </h1>

      <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl leading-relaxed mx-auto font-medium">
        Let AI build your perfect, personalized learning roadmap. From absolute
        zero to mastery, tailored to your goals and timeline.
      </p>

      {/* Call to action buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto relative group">
        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-20 blur-xl rounded-full -z-10 pointer-events-none group-hover:opacity-30 transition-opacity duration-500"></div>

        <Link
          href="/generate"
          className="group/btn relative flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-600 text-white rounded-xl font-semibold text-lg transition-all shadow-xl hover:shadow-emerald-500/20 active:scale-95 border border-transparent overflow-hidden"
        >
          {/* Shimmer effect inside button */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
          <span className="relative z-10">Start for Free</span>
          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform relative z-10" />
        </Link>
        <Link
          href="#how-it-works"
          className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-xl font-semibold text-lg transition-all shadow-sm active:scale-95 hover:shadow-md"
        >
          See How It Works
        </Link>
      </div>
    </div>
  );
}
