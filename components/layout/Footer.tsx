import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white py-12 px-6 z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Logo />
          <p className="text-sm text-slate-500 text-center md:text-left">
            Empowering your learning journey with AI.
          </p>
        </div>
        <div className="flex gap-6 text-sm font-medium text-slate-600">
          <Link
            href="/generate"
            className="hover:text-emerald-600 transition-colors"
          >
            Generate Roadmap
          </Link>
          <Link href="#" className="hover:text-emerald-600 transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-emerald-600 transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-slate-400">
        &copy; {new Date().getFullYear()} Path Menties. All rights reserved.
      </div>
    </footer>
  );
}
