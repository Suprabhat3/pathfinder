import { BookOpen, MapPin, Zap } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <MapPin className="w-7 h-7" />,
      title: "Tell Us Your Destination",
      description:
        "Enter your exact learning goal, from passing a tough exam to mastering React, along with your current skill level.",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "AI Crafts Your Timeline",
      description:
        "Our engine adjusts precisely to the hours you can dedicate, formatting it into perfectly paced learning milestones.",
    },
    {
      icon: <BookOpen className="w-7 h-7" />,
      title: "Start Your Journey",
      description:
        "Follow the roadmap sequentially. Check off your progress, view curated resources, and actually reach your goals without the overwhelm.",
    },
  ];

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 py-24 mb-20 z-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-50 mb-6 tracking-tight">
            How PathFinder Works
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Skip the tutorial hell and the endless searching. Here is the
            streamlined path to your learning goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[2.5rem] left-[15%] right-[15%] h-0.5 bg-slate-200 dark:bg-slate-700 z-0"></div>

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group relative z-10"
            >
              <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-950 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center mb-8 group-hover:border-emerald-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300 shadow-sm bg-white dark:bg-slate-950 relative">
                {step.icon}
              </div>
              <div className="inline-block px-3 py-1 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-300 rounded-full text-sm font-bold mb-4">
                Step {idx + 1}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
