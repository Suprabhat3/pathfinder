"use client";

import Link from "next/link";
import Logo from "./Logo";
import { ArrowRight, Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { useState } from "react";

interface NavbarProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Navbar({ children, className = "" }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                <Link
                  href="/history"
                  className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  History
                </Link>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <ModeToggle />
                <Link
                  href="/generate"
                  className="hidden sm:flex group items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-600 text-white dark:text-white rounded-xl font-medium text-sm transition-all shadow-md active:scale-95 border border-transparent"
                >
                  <span>Start Free</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && !children && (
        <div className="md:hidden absolute top-[calc(100%+0.5rem)] left-6 right-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-lg flex flex-col gap-2 animate-in slide-in-from-top-2 duration-200">
          <Link
            href="/#how-it-works"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-semibold text-slate-600 dark:text-slate-300 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            How it Works
          </Link>
          <Link
            href="/generate"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-semibold text-slate-600 dark:text-slate-300 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            Features
          </Link>
          <Link
            href="/history"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-semibold text-slate-600 dark:text-slate-300 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            History
          </Link>
          <Link
            href="/generate"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex sm:hidden items-center justify-center gap-2 px-5 py-3 mt-2 bg-slate-900 dark:bg-emerald-500 text-white rounded-xl font-medium text-base transition-all shadow-md active:scale-95"
          >
            <span>Start Free</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
