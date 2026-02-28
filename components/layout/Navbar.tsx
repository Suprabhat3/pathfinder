import Link from "next/link";
import Logo from "./Logo";
import { ArrowRight } from "lucide-react";

interface NavbarProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Navbar({ children, className = "" }: NavbarProps) {
  return (
    <div className={`w-full z-50 sticky top-0 pt-6 px-6`}>
      <nav
        className={`w-full max-w-5xl mx-auto flex items-center justify-between bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl px-6 py-4 transition-all duration-300 ${className}`}
      >
        <Logo showText={true} />
        <div className="flex items-center gap-6">
          {children ? (
            children
          ) : (
            <>
              <div className="hidden md:flex items-center gap-8 mr-2">
                <Link
                  href="/#how-it-works"
                  className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  How it Works
                </Link>
                <Link
                  href="/generate"
                  className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  Features
                </Link>
              </div>
              <Link
                href="/generate"
                className="group flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium text-sm transition-all shadow-md active:scale-95 border border-transparent"
              >
                <span>Start Free</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
