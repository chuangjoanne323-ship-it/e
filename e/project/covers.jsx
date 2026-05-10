// Course covers — themed gradient placeholders + label, no fake imagery

const COVER_THEMES = {
  training: { c1: "#2a3344", c2: "#0f1622", accent: "#e85d54", label: "新進訓練", icon: "users" },
  job:      { c1: "#324b6b", c2: "#101a2a", accent: "#7cc1ff", label: "JOB 2026", icon: "badge" },
  privacy:  { c1: "#27425a", c2: "#0f1c28", accent: "#86d1c8", label: "ISO 27701", icon: "library" },
  ethics:   { c1: "#5a3526", c2: "#1f1410", accent: "#f0a16b", label: "Ethics", icon: "thumbs" },
  governance:{ c1: "#3a3553", c2: "#171426", accent: "#b9a0ff", label: "Governance", icon: "book" },
  yolo:     { c1: "#4a1c2a", c2: "#1a0a10", accent: "#ff6b8a", label: "YOLO v8", icon: "spark" },
  gdp:      { c1: "#274332", c2: "#0e1c14", accent: "#7adba4", label: "GDP", icon: "exam" },
  hr:       { c1: "#3d3a2a", c2: "#16140e", accent: "#e6c870", label: "HR Policy", icon: "users" },
  medical:  { c1: "#1f3a4d", c2: "#0a1620", accent: "#67c0e6", label: "TFDA", icon: "library" },
};

const Cover = ({ theme }) => {
  const t = COVER_THEMES[theme] || COVER_THEMES.training;
  const id = `g-${theme}`;
  return (
    <svg className="cover-svg" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={t.c1}/>
          <stop offset="100%" stopColor={t.c2}/>
        </linearGradient>
        <pattern id={`p-${theme}`} width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
          <line x1="0" y1="0" x2="0" y2="22" stroke={t.accent} strokeWidth="0.5" opacity="0.18"/>
        </pattern>
      </defs>
      <rect width="400" height="220" fill={`url(#${id})`}/>
      <rect width="400" height="220" fill={`url(#p-${theme})`}/>
      {/* glow blob */}
      <circle cx="320" cy="40" r="80" fill={t.accent} opacity="0.22"/>
      <circle cx="60" cy="200" r="120" fill={t.c1} opacity="0.4"/>
      {/* big label */}
      <text x="32" y="180" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="13" letterSpacing="2" fill={t.accent} opacity="0.85">{t.label.toUpperCase()}</text>
      <text x="32" y="200" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="9" letterSpacing="1.5" fill="#ffffff" opacity="0.4">JOHNSON · e-ACADEMY</text>
      {/* subtle grid corner */}
      <g stroke={t.accent} strokeWidth="0.6" opacity="0.5" fill="none">
        <path d="M340 175 L370 175 L370 205"/>
        <circle cx="370" cy="175" r="2"/>
      </g>
    </svg>
  );
};

window.Cover = Cover;
window.COVER_THEMES = COVER_THEMES;
