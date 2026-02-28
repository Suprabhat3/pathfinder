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
    <section className="w-full bg-white relative py-24 mb-20 z-10">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            How <span className="text-emerald-600">PathFinder</span> Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
