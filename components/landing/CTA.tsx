import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-20 z-10">
      <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-10 md:p-16 text-center shadow-xl relative overflow-hidden">
        {/* Subtle SVG dot pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="cta-grid"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="2"
                cy="2"
                r="1.5"
                fill="currentColor"
                className="text-white"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Ready to chart your course?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl font-medium">
            Stop wandering through thousands of disorganized YouTube tutorials.
            Get your custom roadmap in under 30 seconds.
          </p>
          <Link
            href="/generate"
            className="group flex flex-col sm:flex-row items-center justify-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 rounded-xl font-bold text-lg transition-all active:scale-95 shadow-md"
          >
            <span>Generate Roadmap Free</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
