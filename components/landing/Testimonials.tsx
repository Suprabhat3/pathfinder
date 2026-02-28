import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Alex M.",
      role: "Self-Taught Developer",
      quote:
        "I wanted to switch careers but had no idea what to study first. PathFinder gave me a 6-month React timeline that I followed exclusively. I just landed my first Junior role.",
      avatar: "https://i.pravatar.cc/150?u=1",
      rating: 5,
    },
    {
      name: "Sarah J.",
      role: "College Student",
      quote:
        "Cramming for finals was chaotic until I started plugging my syllabi into PathFinder. It broke down exactly what I needed to read week-by-week.",
      avatar: "https://i.pravatar.cc/150?u=2",
      rating: 5,
    },
    {
      name: "David K.",
      role: "Senior Data Analyst",
      quote:
        "Even at a senior level, finding a structured path for new languages like Rust is hard. This tool stripped away the fluff and gave me only the resources I needed.",
      avatar: "https://i.pravatar.cc/150?u=3",
      rating: 5,
    },
  ];

  return (
    <section className="w-full py-20 px-6 z-10 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 text-emerald-500 mb-4 bg-emerald-50 dark:bg-emerald-900/30 px-4 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-800/50">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-current text-emerald-500 dark:text-emerald-400"
              />
            ))}
            <span className="text-emerald-700 dark:text-emerald-300 font-semibold ml-2 text-sm">
              Loved by thousands
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4 tracking-tight">
            Real people. Real results.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md dark:shadow-none dark:hover:border-slate-700 transition-all"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-8 italic">
                "{review.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden relative bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">
                    {review.name}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
