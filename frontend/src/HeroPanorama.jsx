/* Panoramic SVG of high-voltage transmission towers with power lines.
   Rendered as a decorative background element inside each hero section. */
export default function HeroPanorama({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 960 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMaxYMax meet"
      aria-hidden="true"
    >
      {/* ─── Tower helper: each tower is drawn manually at its position ─── */}

      {/* ── TOWER A  x=540 ── */}
      <g opacity="0.55">
        <line x1="540" y1="40"  x2="498" y2="195" stroke="currentColor" strokeWidth="3.2"/>
        <line x1="540" y1="40"  x2="582" y2="195" stroke="currentColor" strokeWidth="3.2"/>
        <line x1="500" y1="58"  x2="580" y2="58"  stroke="currentColor" strokeWidth="2.8"/>
        <line x1="504" y1="95"  x2="576" y2="95"  stroke="currentColor" strokeWidth="2"/>
        <line x1="508" y1="125" x2="572" y2="125" stroke="currentColor" strokeWidth="1.8"/>
        <line x1="513" y1="152" x2="567" y2="152" stroke="currentColor" strokeWidth="1.6"/>
        <line x1="518" y1="175" x2="562" y2="175" stroke="currentColor" strokeWidth="1.5"/>
        {/* diagonals */}
        <line x1="504" y1="95"  x2="513" y2="125" stroke="currentColor" strokeWidth="1.4"/>
        <line x1="576" y1="95"  x2="567" y2="125" stroke="currentColor" strokeWidth="1.4"/>
        <line x1="508" y1="125" x2="513" y2="152" stroke="currentColor" strokeWidth="1.3"/>
        <line x1="572" y1="125" x2="567" y2="152" stroke="currentColor" strokeWidth="1.3"/>
        <line x1="500" y1="58"  x2="510" y2="95"  stroke="currentColor" strokeWidth="1.4"/>
        <line x1="580" y1="58"  x2="570" y2="95"  stroke="currentColor" strokeWidth="1.4"/>
        {/* feet */}
        <line x1="498" y1="195" x2="484" y2="210" stroke="currentColor" strokeWidth="2.8"/>
        <line x1="498" y1="195" x2="512" y2="210" stroke="currentColor" strokeWidth="2.8"/>
        <line x1="582" y1="195" x2="568" y2="210" stroke="currentColor" strokeWidth="2.8"/>
        <line x1="582" y1="195" x2="596" y2="210" stroke="currentColor" strokeWidth="2.8"/>
        {/* insulator dots */}
        <circle cx="500" cy="58" r="3.5" fill="currentColor"/>
        <circle cx="540" cy="58" r="3.5" fill="currentColor"/>
        <circle cx="580" cy="58" r="3.5" fill="currentColor"/>
      </g>

      {/* ── TOWER B  x=690 ── */}
      <g opacity="0.70">
        <line x1="690" y1="20"  x2="642" y2="200" stroke="currentColor" strokeWidth="3.5"/>
        <line x1="690" y1="20"  x2="738" y2="200" stroke="currentColor" strokeWidth="3.5"/>
        <line x1="644" y1="40"  x2="736" y2="40"  stroke="currentColor" strokeWidth="3"/>
        <line x1="648" y1="80"  x2="732" y2="80"  stroke="currentColor" strokeWidth="2.2"/>
        <line x1="654" y1="112" x2="726" y2="112" stroke="currentColor" strokeWidth="2"/>
        <line x1="659" y1="140" x2="721" y2="140" stroke="currentColor" strokeWidth="1.8"/>
        <line x1="664" y1="165" x2="716" y2="165" stroke="currentColor" strokeWidth="1.6"/>
        <line x1="669" y1="185" x2="711" y2="185" stroke="currentColor" strokeWidth="1.5"/>
        {/* diagonals */}
        <line x1="648" y1="80"  x2="654" y2="112" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="732" y1="80"  x2="726" y2="112" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="654" y1="112" x2="659" y2="140" stroke="currentColor" strokeWidth="1.4"/>
        <line x1="726" y1="112" x2="721" y2="140" stroke="currentColor" strokeWidth="1.4"/>
        <line x1="659" y1="140" x2="664" y2="165" stroke="currentColor" strokeWidth="1.3"/>
        <line x1="721" y1="140" x2="716" y2="165" stroke="currentColor" strokeWidth="1.3"/>
        <line x1="644" y1="40"  x2="652" y2="80"  stroke="currentColor" strokeWidth="1.5"/>
        <line x1="736" y1="40"  x2="728" y2="80"  stroke="currentColor" strokeWidth="1.5"/>
        {/* feet */}
        <line x1="642" y1="200" x2="626" y2="218" stroke="currentColor" strokeWidth="3"/>
        <line x1="642" y1="200" x2="658" y2="218" stroke="currentColor" strokeWidth="3"/>
        <line x1="738" y1="200" x2="722" y2="218" stroke="currentColor" strokeWidth="3"/>
        <line x1="738" y1="200" x2="754" y2="218" stroke="currentColor" strokeWidth="3"/>
        {/* insulator dots */}
        <circle cx="644" cy="40" r="4" fill="currentColor"/>
        <circle cx="690" cy="40" r="4" fill="currentColor"/>
        <circle cx="736" cy="40" r="4" fill="currentColor"/>
      </g>

      {/* ── TOWER C  x=850 ── */}
      <g opacity="0.45">
        <line x1="850" y1="50"  x2="816" y2="200" stroke="currentColor" strokeWidth="2.8"/>
        <line x1="850" y1="50"  x2="884" y2="200" stroke="currentColor" strokeWidth="2.8"/>
        <line x1="817" y1="65"  x2="883" y2="65"  stroke="currentColor" strokeWidth="2.5"/>
        <line x1="820" y1="100" x2="880" y2="100" stroke="currentColor" strokeWidth="1.8"/>
        <line x1="824" y1="130" x2="876" y2="130" stroke="currentColor" strokeWidth="1.6"/>
        <line x1="828" y1="155" x2="872" y2="155" stroke="currentColor" strokeWidth="1.4"/>
        <line x1="832" y1="175" x2="868" y2="175" stroke="currentColor" strokeWidth="1.3"/>
        <line x1="820" y1="100" x2="824" y2="130" stroke="currentColor" strokeWidth="1.3"/>
        <line x1="880" y1="100" x2="876" y2="130" stroke="currentColor" strokeWidth="1.3"/>
        <line x1="817" y1="65"  x2="822" y2="100" stroke="currentColor" strokeWidth="1.3"/>
        <line x1="883" y1="65"  x2="878" y2="100" stroke="currentColor" strokeWidth="1.3"/>
        {/* feet */}
        <line x1="816" y1="200" x2="804" y2="214" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="816" y1="200" x2="828" y2="214" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="884" y1="200" x2="872" y2="214" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="884" y1="200" x2="896" y2="214" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="817" cy="65" r="3" fill="currentColor"/>
        <circle cx="850" cy="65" r="3" fill="currentColor"/>
        <circle cx="883" cy="65" r="3" fill="currentColor"/>
      </g>

      {/* ── POWER LINES A→B (3 conductors) ── */}
      <path d="M500,58  Q615,80  644,40"  stroke="currentColor" strokeWidth="1.3" opacity="0.45"/>
      <path d="M540,58  Q615,76  690,40"  stroke="currentColor" strokeWidth="1.3" opacity="0.45"/>
      <path d="M580,58  Q615,72  736,40"  stroke="currentColor" strokeWidth="1.3" opacity="0.45"/>

      {/* ── POWER LINES B→C (3 conductors) ── */}
      <path d="M644,40  Q768,60  817,65"  stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
      <path d="M690,40  Q770,55  850,65"  stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
      <path d="M736,40  Q795,50  883,65"  stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>

      {/* ── Ground / horizon line ── */}
      <line x1="440" y1="270" x2="960" y2="270" stroke="currentColor" strokeWidth="1" opacity="0.12"/>

      {/* ── Subtle glow dots at insulator points (tower B, brightest) ── */}
      <circle cx="644" cy="40" r="6" fill="currentColor" opacity="0.08"/>
      <circle cx="690" cy="40" r="6" fill="currentColor" opacity="0.08"/>
      <circle cx="736" cy="40" r="6" fill="currentColor" opacity="0.08"/>
    </svg>
  );
}
