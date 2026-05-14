export default function ConexsisLogo({ variant = "dark", className = "" }) {
  const textFill   = variant === "light" ? "#ffffff"              : "#0d1e5c";
  const subFill    = variant === "light" ? "rgba(255,255,255,0.6)": "rgba(13,30,92,0.5)";

  return (
    <svg
      viewBox="0 0 238 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`conexsis-logo ${className}`}
      aria-label="CONEXSIS"
    >
      {/* ── outer ring ── */}
      <circle cx="29" cy="29" r="25" stroke="#1a3494" strokeWidth="2.6" />

      {/* ── orbital ellipse 1 — warm orange ── */}
      <ellipse cx="29" cy="29" rx="25" ry="10.5"
        stroke="#e07820" strokeWidth="2.2"
        transform="rotate(-42 29 29)" />

      {/* ── orbital ellipse 2 — blue ghost ── */}
      <ellipse cx="29" cy="29" rx="25" ry="10.5"
        stroke="#1a3494" strokeWidth="1.5" opacity="0.32"
        transform="rotate(42 29 29)" />

      {/* ── center node ── */}
      <circle cx="29" cy="29" r="4.5" fill="#1a3494" />
      <circle cx="29" cy="29" r="2"   fill="#e07820" />

      {/* ── wordmark ── */}
      <text
        x="64" y="27"
        fill={textFill}
        fontSize="18.5" fontWeight="700"
        fontFamily="Space Grotesk, sans-serif"
        letterSpacing="2.8"
      >CONEXSIS</text>

      {/* ── tagline ── */}
      <text
        x="65" y="43"
        fill={subFill}
        fontSize="6.4"
        fontFamily="IBM Plex Sans, sans-serif"
        letterSpacing="0.9"
      >INGENIERÍA EN SOLUCIONES ELÉCTRICAS S.A.S</text>
    </svg>
  );
}
