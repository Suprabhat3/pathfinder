import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-[85vh] px-6 z-10 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Subtle grid pattern mask */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-40 -z-10" />

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-emerald-200 backdrop-blur-md mb-8 text-sm font-semibold text-emerald-800 shadow-sm shadow-emerald-100 mt-10">
        <Sparkles className="w-4 h-4 text-emerald-500" />
        <span>Your AI-Powered Journey to Success</span>
      </div>

      <h1 className="max-w-4xl text-5xl md:text-7xl lg:text-[5rem] font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
        Stop guessing. <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 relative inline-block">
          Start achieving.
          <div className="absolute -bottom-2 left-0 w-full h-3 bg-emerald-200/50 -rotate-2 -z-10 rounded-full"></div>
        </span>
      </h1>

      <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl leading-relaxed mx-auto font-medium">
        Let AI build your perfect, personalized learning roadmap. From absolute
        zero to mastery, tailored to your goals and timeline.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <Link
          href="/generate"
          className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold text-lg transition-all shadow-xl hover:shadow-slate-500/25 active:scale-95 border border-transparent hover:border-slate-700"
        >
          <span>Start for Free</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href="#how-it-works"
          className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white/50 backdrop-blur-md hover:bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold text-lg transition-all shadow-sm active:scale-95 hover:shadow-md"
        >
          See How It Works
        </Link>
      </div>
    </div>
  );
}
