import React from 'react';

export default function SimulinkIcon(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 64 64"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {/* Left input stub (larger to match icon scale) */}
      <path d="M8 32 H24" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>

      {/* Wedge/triangle (source) – scaled up */}
      <path d="M24 20 L50 32 L24 44 Z" fill="currentColor"/>

      {/* Connector elbow to the block – thicker */}
      <path d="M50 32 H56 V38" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>

      {/* Arrowhead (downward) – larger */}
      <path d="M56 38 L51 33 L61 33 Z" fill="currentColor"/>

      {/* Destination block – larger to balance overall weight */}
      <rect x="48" y="40" width="14" height="14" rx="2" fill="currentColor"/>
    </svg>
  );
}
