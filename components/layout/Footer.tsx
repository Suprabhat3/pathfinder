import Link from "next/link";
import Logo from "./Logo";
import { Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200 text-slate-600 py-16 px-6 z-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6">
            <div className="bg-white/60 p-2 rounded-xl backdrop-blur-sm border border-slate-200/50 shadow-sm">
              <Logo showText={true} />
            </div>
            <p className="text-slate-600 leading-relaxed text-sm max-w-sm font-medium">
              Stop guessing, start achieving. Let AI build your perfect,
              personalized learning roadmap from absolute zero to mastery.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-sm transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-sm transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-sm transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-slate-900 tracking-wide text-sm uppercase">
                Product
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="/generate"
                    className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    Generate Roadmap
                  </Link>
                </li>
                <li>
                  <Link
                    href="#features"
                    className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-slate-900 tracking-wide text-sm uppercase">
                Resources
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
              <h3 className="font-bold text-slate-900 tracking-wide text-sm uppercase">
                Stay Updated
              </h3>
              <p className="text-sm text-slate-600 mb-2 font-medium">
                Get the latest updates and learning resources.
              </p>
              <form className="flex flex-col gap-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-white border border-slate-200 rounded-lg py-2.5 pl-10 pr-4 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-400 shadow-sm"
                  />
                </div>
                <button
                  type="button"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-lg py-2.5 text-sm font-semibold transition-colors flex items-center justify-center gap-2 group shadow-sm active:scale-[0.98]"
                >
                  Subscribe
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm font-medium text-slate-500">
            &copy; {currentYear} Path Menties. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
            <Link href="#" className="hover:text-emerald-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-emerald-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-emerald-600 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
