import Link from "next/link";
import Logo from "./Logo";

interface NavbarProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Navbar({ children, className = "" }: NavbarProps) {
  return (
    <nav
      className={`w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between z-10 ${className}`}
    >
      <Logo />
      <div className="flex items-center gap-4">
        {children || (
          <>
            <Link
              href="/generate"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/generate"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Pricing
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
