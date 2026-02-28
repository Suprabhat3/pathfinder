import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-6 z-10 text-center mt-12 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-slate-200 backdrop-blur-md mb-8 text-sm font-medium text-slate-700 shadow-sm">
        <Sparkles className="w-4 h-4 text-emerald-500" />
        <span>Your AI-Powered Journey to Success</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
        Stop guessing. <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
          Start achieving.
        </span>
      </h1>

      <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
        Let AI build your perfect, personalized learning roadmap. From absolute
        zero to mastery, tailored to your goals and timeline.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <Link
          href="/generate"
          className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-emerald-500/25 active:scale-95"
        >
          <span>Start for Free</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href="/generate"
          className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold text-lg transition-all shadow-sm active:scale-95"
        >
          View Example
        </Link>
      </div>
    </div>
  );
}
