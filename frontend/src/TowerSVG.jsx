export default function TowerSVG({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Main tower legs */}
      <line x1="60" y1="10" x2="15" y2="280" stroke="currentColor" strokeWidth="2.5" />
      <line x1="60" y1="10" x2="105" y2="280" stroke="currentColor" strokeWidth="2.5" />
      {/* Cross braces */}
      <line x1="22" y1="240" x2="98" y2="240" stroke="currentColor" strokeWidth="2" />
      <line x1="26" y1="200" x2="94" y2="200" stroke="currentColor" strokeWidth="2" />
      <line x1="30" y1="160" x2="90" y2="160" stroke="currentColor" strokeWidth="2" />
      <line x1="35" y1="120" x2="85" y2="120" stroke="currentColor" strokeWidth="2" />
      <line x1="40" y1="80" x2="80" y2="80" stroke="currentColor" strokeWidth="2" />
      {/* Diagonal braces */}
      <line x1="22" y1="240" x2="50" y2="200" stroke="currentColor" strokeWidth="1.5" />
      <line x1="98" y1="240" x2="70" y2="200" stroke="currentColor" strokeWidth="1.5" />
      <line x1="26" y1="200" x2="54" y2="160" stroke="currentColor" strokeWidth="1.5" />
      <line x1="94" y1="200" x2="66" y2="160" stroke="currentColor" strokeWidth="1.5" />
      <line x1="30" y1="160" x2="52" y2="120" stroke="currentColor" strokeWidth="1.5" />
      <line x1="90" y1="160" x2="68" y2="120" stroke="currentColor" strokeWidth="1.5" />
      {/* Top crossarm */}
      <line x1="10" y1="40" x2="110" y2="40" stroke="currentColor" strokeWidth="2.5" />
      <line x1="60" y1="10" x2="60" y2="40" stroke="currentColor" strokeWidth="2" />
      {/* Insulators / cable hang points */}
      <circle cx="10" cy="40" r="3" fill="currentColor" />
      <circle cx="60" cy="40" r="3" fill="currentColor" />
      <circle cx="110" cy="40" r="3" fill="currentColor" />
      {/* Cables going off-screen */}
      <line x1="10" y1="40" x2="-20" y2="65" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
      <line x1="110" y1="40" x2="140" y2="65" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
      <line x1="60" y1="40" x2="60" y2="70" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
      {/* Base spread */}
      <line x1="15" y1="280" x2="0" y2="290" stroke="currentColor" strokeWidth="2" />
      <line x1="15" y1="280" x2="30" y2="290" stroke="currentColor" strokeWidth="2" />
      <line x1="105" y1="280" x2="90" y2="290" stroke="currentColor" strokeWidth="2" />
      <line x1="105" y1="280" x2="120" y2="290" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
