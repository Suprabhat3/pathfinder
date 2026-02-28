import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-20 z-10">
      <div className="relative rounded-3xl overflow-hidden bg-slate-900 p-10 md:p-16 text-center shadow-2xl">
        <div className="absolute -top-[50%] -left-[10%] w-[60%] h-[100%] bg-emerald-500/30 blur-[100px] rounded-full mix-blend-screen mix-blend-color-dodge"></div>
        <div className="absolute -bottom-[50%] -right-[10%] w-[60%] h-[100%] bg-teal-500/20 blur-[100px] rounded-full mix-blend-screen mix-blend-color-dodge"></div>

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to chart your course?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl">
            Stop wandering through thousands of disorganized YouTube tutorials.
            Get your custom roadmap in under 30 seconds.
          </p>
          <Link
            href="/generate"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-emerald-500/25 active:scale-95"
          >
            <span>Generate Roadmap Free</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
