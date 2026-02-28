import Image from "next/image";
import Link from "next/link";

export default function Logo({ showText = false }: { showText?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 hover:opacity-80 transition-opacity"
    >
      <div className="relative w-15 h-15 overflow-hidden flex-shrink-0">
        <Image
          src="/path menties logo.png"
          alt="Path Menties Logo"
          fill
          className="object-contain"
        />
      </div>
      {showText && (
        <span className="font-bold text-xl tracking-tight text-slate-900 hidden sm:block">
          PathFinder<span className="text-emerald-600">AI</span>
        </span>
      )}
    </Link>
  );
}
