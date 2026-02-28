import { ArrowRight, Sparkles, Map, CheckCircle2 } from "lucide-react";
import Link from "next/link";

function BackgroundAmbience() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 bg-slate-50">
      <div
        className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-emerald-200/40 blur-[100px] mix-blend-multiply opacity-70 animate-pulse"
        style={{ animationDuration: "8s" }}
      ></div>
      <div
        className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-teal-200/40 blur-[100px] mix-blend-multiply opacity-70 animate-pulse"
        style={{ animationDuration: "10s" }}
      ></div>
      <div
        className="absolute top-[20%] left-[20%] w-[40%] h-[40%] rounded-full bg-cyan-200/30 blur-[100px] mix-blend-multiply opacity-50 animate-pulse"
        style={{ animationDuration: "12s" }}
      ></div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-hidden font-sans">
      <BackgroundAmbience />

      {/* Navigation / Header */}
      <nav className="w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-500 p-2 rounded-xl">
            <Map className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">
            PathFinder<span className="text-emerald-600">AI</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/generate"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Features
          </Link>
          <Link
            href="/generate"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Pricing
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
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
          Let AI build your perfect, personalized learning roadmap. From
          absolute zero to mastery, tailored to your goals and timeline.
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

        {/* Feature Grid (Glassmorphism Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full text-left">
          {[
            {
              title: "Structured Paths",
              desc: "Chronological, step-by-step guidance tailored just for you.",
            },
            {
              title: "Timeline Adjusted",
              desc: "Whether you have 3 months or a year, we pace it perfectly.",
            },
            {
              title: "Progress Tracking",
              desc: "Check off milestones and watch your completion grow.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-xl border border-white/50 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-10 h-10 rounded-full bg-emerald-100/80 flex items-center justify-center border border-emerald-200/50">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-900 text-lg">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
