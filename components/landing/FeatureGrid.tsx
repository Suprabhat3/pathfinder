import { CheckCircle2 } from "lucide-react";

export default function FeatureGrid() {
  const features = [
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
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-4xl mx-auto px-6 text-left mb-24 z-10">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/50 dark:border-slate-800/50 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.8)] hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="w-10 h-10 rounded-full bg-emerald-100/80 dark:bg-emerald-900/40 flex items-center justify-center border border-emerald-200/50 dark:border-emerald-800/50">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-lg">
            {feature.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            {feature.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
