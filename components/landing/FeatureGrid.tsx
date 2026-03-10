import { CheckCircle2, Clock, Map } from "lucide-react";

export default function FeatureGrid() {
  const features = [
    {
      title: "Structured Paths",
      desc: "Chronological, step-by-step guidance tailored just for you.",
      icon: Map,
    },
    {
      title: "Timeline Adjusted",
      desc: "Whether you have 3 months or a year, we pace it perfectly.",
      icon: Clock,
    },
    {
      title: "Progress Tracking",
      desc: "Check off milestones and watch your completion grow.",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl mx-auto px-6 text-left mb-24 z-10">
      {features.map((feature, idx) => {
        const Icon = feature.icon;
        return (
          <div
            key={idx}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5 dark:hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20 group-hover:border-emerald-200 dark:group-hover:border-emerald-800/50 transition-colors">
              <Icon className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-xl mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                {feature.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
