export default function BackgroundAmbience() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Crisp minimal grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04] dark:opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="minimal-grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 32V0H32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#minimal-grid)" />
      </svg>
    </div>
  );
}
