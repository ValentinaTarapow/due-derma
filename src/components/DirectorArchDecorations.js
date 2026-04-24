import React from 'react';

/** SVG decorativo del marco de directora (líneas verticales). */
export function DirectorArchDecorations() {
  return (
    <svg
      className="director-frame-deco-svg"
      width="120"
      height="280"
      viewBox="0 0 120 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="52" y1="28" x2="52" y2="168" stroke="#9299A1" strokeWidth="1" />
      <line x1="66" y1="14" x2="66" y2="198" stroke="#9299A1" strokeWidth="1" />
      <line x1="80" y1="36" x2="80" y2="158" stroke="#9299A1" strokeWidth="1" />
    </svg>
  );
}
