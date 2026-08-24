// Minimal inline icon set matching the source's line-style glyphs.
type P = { className?: string };
const s = (className = "", size = 24) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  className,
  width: size,
  height: size,
});

export const ArrowUpRight = ({ className = "" }: P) => (
  <svg {...s(className, 16)}>
    <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowLeft = ({ className = "" }: P) => (
  <svg {...s(className, 22)}>
    <path d="M19 12H5M5 12l6-6M5 12l6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowRight = ({ className = "" }: P) => (
  <svg {...s(className, 22)}>
    <path d="M5 12h14M19 12l-6-6M19 12l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Check = ({ className = "" }: P) => (
  <svg {...s(className, 18)}>
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Leaf = ({ className = "" }: P) => (
  <svg {...s(className, 24)}>
    <path d="M4 20C4 12 9 5 20 4c0 11-7 16-15 16-.5 0-1 0-1.5-.1C6 15 10 12 14 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Star = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="15" height="15">
    <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.8 5.9 20.5l1.4-6.8L2.2 9l6.9-.7L12 2z" />
  </svg>
);

/* --- Metrics icons (line style) --- */
export const IconArrowDown = ({ className = "" }: P) => (
  <svg {...s(className, 34)}>
    <path d="M12 4v15m0 0l-5-5m5 5l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const IconDroplet = ({ className = "" }: P) => (
  <svg {...s(className, 34)}>
    <path d="M12 3s6 6.5 6 11a6 6 0 11-12 0c0-4.5 6-11 6-11z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const IconCloud = ({ className = "" }: P) => (
  <svg {...s(className, 34)}>
    <path d="M7 18a4 4 0 010-8 5 5 0 019.6-1.3A3.5 3.5 0 0117 18H7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="12" y="16" fontSize="4.5" textAnchor="middle" fill="currentColor" stroke="none">CO₂</text>
  </svg>
);
export const IconPin = ({ className = "" }: P) => (
  <svg {...s(className, 34)}>
    <path d="M12 21c4-4 7-7.5 7-11a7 7 0 10-14 0c0 3.5 3 7 7 11z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

/* --- Services icons (line style) --- */
export const IconTransport = ({ className = "" }: P) => (
  <svg {...s(className, 40)}>
    <path d="M12 20c2-2 3-4.5 3-7a3 3 0 10-6 0c0 2.5 1 5 3 7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 13c-3 0-5-2-5-5 3 0 5 2 5 5zm0 0c0-3 2-5 5-5 0 3-2 5-5 5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
export const IconFreight = ({ className = "" }: P) => (
  <svg {...s(className, 40)}>
    <rect x="4" y="7" width="14" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 7v8M9 7v8M12 7v8M15 7v8" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="8" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="15" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);
export const IconRoute = ({ className = "" }: P) => (
  <svg {...s(className, 40)}>
    <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 18h6a2 2 0 002-2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1 2.4" />
  </svg>
);
export const IconFleet = ({ className = "" }: P) => (
  <svg {...s(className, 40)}>
    <rect x="4" y="9" width="10" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M14 12h3l2 2v2h-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="8" cy="17" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="16" cy="17" r="1.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const IconShield = ({ className = "" }: P) => (
  <svg {...s(className, 40)}>
    <path d="M12 3l7 3v5c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const IconBell = ({ className = "" }: P) => (
  <svg {...s(className, 40)}>
    <path d="M6 16V10a6 6 0 1112 0v6l2 2H4l2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 20a2 2 0 004 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const IconPlug = ({ className = "" }: P) => (
  <svg {...s(className, 40)}>
    <path d="M9 3v4M15 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 7h10v3a5 5 0 01-5 5 5 5 0 01-5-5V7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M12 15v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
export const IconHistory = ({ className = "" }: P) => (
  <svg {...s(className, 40)}>
    <path d="M4 12a8 8 0 108-8 8 8 0 00-6 2.7M6 4v3h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* --- Social icons --- */
export const IconFacebook = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="20" height="20">
    <path d="M14 8.5V7c0-.8.2-1.2 1.3-1.2H17V3h-2.6C11.7 3 11 4.6 11 6.7V8.5H9V11h2v9h3v-9h2.3l.4-2.5H14z" />
  </svg>
);
export const IconInstagram = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} width="20" height="20">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
  </svg>
);
export const IconYoutube = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="22" height="22">
    <path d="M22 12s0-3-.4-4.4a2.5 2.5 0 00-1.8-1.8C18.4 5.4 12 5.4 12 5.4s-6.4 0-7.8.4A2.5 2.5 0 002.4 7.6C2 9 2 12 2 12s0 3 .4 4.4a2.5 2.5 0 001.8 1.8c1.4.4 7.8.4 7.8.4s6.4 0 7.8-.4a2.5 2.5 0 001.8-1.8C22 15 22 12 22 12zm-12 2.8V9.2l4.8 2.8L10 14.8z" />
  </svg>
);
