import Link from "next/link";
import Logo from "./Logo";
import { ArrowRight } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

interface NavbarProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Navbar({ children, className = "" }: NavbarProps) {
  return (
    <div className={`w-full z-50 sticky top-0 pt-6 px-6`}>
      <nav
        className={`w-full max-w-5xl mx-auto flex items-center justify-between bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/50 dark:border-slate-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl px-6 py-4 transition-all duration-300 ${className}`}
      >
        <Logo showText={true} />
        <div className="flex items-center gap-4 sm:gap-6">
          {children ? (
            children
          ) : (
            <>
              <div className="hidden md:flex items-center gap-8">
                <Link
                  href="/#how-it-works"
                  className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  How it Works
                </Link>
                <Link
                  href="/generate"
                  className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Features
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <ModeToggle />
                <Link
                  href="/generate"
                  className="hidden sm:flex group items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-600 text-white dark:text-white rounded-xl font-medium text-sm transition-all shadow-md active:scale-95 border border-transparent"
                >
                  <span>Start Free</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
