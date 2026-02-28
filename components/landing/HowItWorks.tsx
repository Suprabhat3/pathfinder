import { BookOpen, MapPin, Zap } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <MapPin className="w-6 h-6 text-emerald-600" />,
      title: "1. Tell Us Your Destination",
      description:
        "Enter your exact learning goal, from passing a tough exam to mastering React, along with your current skill level.",
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-600" />,
      title: "2. AI Crafts Your Timeline",
      description:
        "Our engine adjusts precisely to the hours you can dedicate, formatting it into perfectly paced learning milestones.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-emerald-600" />,
      title: "3. Start Your Journey",
      description:
        "Follow the roadmap sequentially. Check off your progress, view curated resources, and actually reach your goals without the overwhelm.",
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-slate-950 relative py-24 mb-20 z-10 transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4 tracking-tight">
            How{" "}
            <span className="text-emerald-600 dark:text-emerald-500">
              PathFinder
            </span>{" "}
            Works
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Skip the tutorial hell and the endless searching. Here is the
            streamlined path to your learning goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
