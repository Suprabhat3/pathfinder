import Image from "next/image";
import Link from "next/link";

export default function Logo({ showText = false }: { showText?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 hover:opacity-80 transition-opacity"
    >
      <Image
        src="/path-menties-logo.png"
        alt="Path Menties Logo"
        width={150}
        height={50}
        className="w-auto h-10 object-contain"
        priority
      />
      {showText && (
        <span className="font-bold text-xl tracking-tight text-slate-900 hidden sm:block">
          Path <span className="text-emerald-600">Menties</span>
        </span>
      )}
    </Link>
  );
}
