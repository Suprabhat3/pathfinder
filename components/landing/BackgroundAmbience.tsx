export default function BackgroundAmbience() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 bg-slate-50">
      {/* Grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 40V0H40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Orbs */}
      <div
        className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-emerald-200/40 blur-[100px] mix-blend-multiply opacity-70 animate-pulse"
        style={{ animationDuration: "8s" }}
      ></div>
      <div
        className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-teal-200/40 blur-[100px] mix-blend-multiply opacity-70 animate-pulse"
        style={{ animationDuration: "10s" }}
      ></div>
      <div
        className="absolute top-[20%] left-[20%] w-[40%] h-[40%] rounded-full bg-cyan-200/30 blur-[100px] mix-blend-multiply opacity-50 animate-pulse"
        style={{ animationDuration: "12s" }}
      ></div>
    </div>
  );
}
