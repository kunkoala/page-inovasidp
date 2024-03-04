import React from "react";

const MainBackground: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 1200 800"
    >
      <rect fill="#F0F3FF" width="1200" height="800" />
      <defs>
        <radialGradient
          id="a"
          cx="0"
          cy="800"
          r="800"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#d0fffc" />
          <stop offset="1" stop-color="#d0fffc" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="b"
          cx="1200"
          cy="800"
          r="800"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#78bbff" />
          <stop offset="1" stop-color="#78bbff" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="c"
          cx="600"
          cy="0"
          r="600"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#58ffc3" />
          <stop offset="1" stop-color="#58ffc3" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="d"
          cx="600"
          cy="800"
          r="600"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#F0F3FF" />
          <stop offset="1" stop-color="#F0F3FF" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="e"
          cx="0"
          cy="0"
          r="800"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#B0FFB6" />
          <stop offset="1" stop-color="#B0FFB6" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="f"
          cx="1200"
          cy="0"
          r="800"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#0CF" />
          <stop offset="1" stop-color="#0CF" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect fill="url(#a)" width="1200" height="800" />
      <rect fill="url(#b)" width="1200" height="800" />
      <rect fill="url(#c)" width="1200" height="800" />
      <rect fill="url(#d)" width="1200" height="800" />
      <rect fill="url(#e)" width="1200" height="800" />
      <rect fill="url(#f)" width="1200" height="800" />
    </svg>
  );
};

export default MainBackground;
