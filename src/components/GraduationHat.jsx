import React from 'react';

const GraduationHat = ({ className = '', style = {} }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 320 300" 
      className={className} 
      style={style}
    >
      <defs>
        <filter id="hatShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#000" floodOpacity="0.3" />
        </filter>

        {/* Cap Base Gradient (Deep 3D dark blues/blacks) */}
        <linearGradient id="capBase" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0A0A0E" />
          <stop offset="30%" stopColor="#1E1E2A" />
          <stop offset="70%" stopColor="#111118" />
          <stop offset="100%" stopColor="#050508" />
        </linearGradient>

        {/* Gold Rim/Band Gradient */}
        <linearGradient id="goldBand" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E69900" />
          <stop offset="15%" stopColor="#FFDF00" />
          <stop offset="30%" stopColor="#FFF5B8" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="75%" stopColor="#FFDF00" />
          <stop offset="90%" stopColor="#FFF5B8" />
          <stop offset="100%" stopColor="#B37700" />
        </linearGradient>

        {/* Top of Mortarboard Gradient */}
        <linearGradient id="boardTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3A3A4A" />
          <stop offset="40%" stopColor="#1A1A24" />
          <stop offset="100%" stopColor="#0A0A10" />
        </linearGradient>

        {/* Thickness Edges */}
        <linearGradient id="boardLeftEdge" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#232330" />
          <stop offset="100%" stopColor="#0A0A0E" />
        </linearGradient>

        <linearGradient id="boardRightEdge" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#55556B" />
          <stop offset="30%" stopColor="#2D2D3A" />
          <stop offset="100%" stopColor="#15151E" />
        </linearGradient>

        {/* Tassel Fringe Base Gradient */}
        <linearGradient id="tasselFringe" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A67C00" />
          <stop offset="30%" stopColor="#FFDF00" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#805E00" />
        </linearGradient>
      </defs>

      <g filter="url(#hatShadow)">
        {/* Skullcap Base */}
        <path d="M 90 140 L 90 200 C 90 240, 210 230, 210 180 L 210 120 Z" fill="url(#capBase)" />
        
        {/* Gold Band 3D Geometry */}
        <path d="M 90 180 C 100 215, 200 205, 210 160 L 210 180 C 200 225, 100 235, 90 200 Z" fill="url(#goldBand)" />
        {/* Gold Band Highlights & Shadows */}
        <path d="M 90 180 C 100 215, 200 205, 210 160" fill="none" stroke="#FFFFCC" strokeWidth="2" opacity="0.7" />
        <path d="M 90 200 C 100 235, 200 225, 210 180" fill="none" stroke="#664D00" strokeWidth="3" opacity="0.6" />

        {/* Mortarboard Left Edge Thickness */}
        <polygon points="30,120 120,160 120,172 30,132" fill="url(#boardLeftEdge)" />
        {/* Mortarboard Right Edge Thickness */}
        <polygon points="120,160 270,110 270,122 120,172" fill="url(#boardRightEdge)" />

        {/* Mortarboard Top (Diamond) */}
        <polygon points="30,120 120,160 270,110 180,70" fill="url(#boardTop)" stroke="#4A4A60" strokeWidth="1.5" strokeLinejoin="round" />

        {/* Tassel String Shadow on Board */}
        <path d="M 150 119 Q 210 139 268 118" fill="none" stroke="#000" strokeWidth="4" opacity="0.4" strokeLinecap="round" />
        
        {/* Tassel String on Board */}
        <path d="M 150 115 Q 210 135 268 114" fill="none" stroke="url(#goldBand)" strokeWidth="4" strokeLinecap="round" />

        {/* Center Button Shadow & Body */}
        <ellipse cx="150" cy="118" rx="11" ry="6" fill="#000" opacity="0.5" />
        <ellipse cx="150" cy="115" rx="10" ry="5" fill="#1C1C26" stroke="#4A4A60" strokeWidth="1.5" />

        {/* Hanging Tassel String Shadow & Body */}
        <path d="M 268 114 Q 275 125 272 160" fill="none" stroke="#000" strokeWidth="4" opacity="0.4" transform="translate(-2, 2)" strokeLinecap="round" />
        <path d="M 268 114 Q 275 125 272 160" fill="none" stroke="url(#goldBand)" strokeWidth="4" strokeLinecap="round" />

        {/* Fringe Shadow & Body */}
        <path d="M 267 164 L 255 215 A 16 5 0 0 1 285 215 L 277 164 Z" fill="#000" opacity="0.4" transform="translate(3, 4)" />
        <path d="M 267 164 L 255 215 A 16 5 0 0 1 285 215 L 277 164 Z" fill="url(#tasselFringe)" />
        
        {/* Fringe Texture Lines */}
        <path d="M 269 164 L 259 214 M 272 164 L 270 216 M 275 164 L 280 214" stroke="#805E00" strokeWidth="1.5" fill="none" opacity="0.7" />

        {/* Tassel Knot Base & Wrap */}
        <rect x="264" y="156" width="14" height="10" rx="3" fill="url(#goldBand)" />
        <line x1="264" y1="161" x2="278" y2="161" stroke="#997300" strokeWidth="1.5" />
      </g>
    </svg>
  );
};

export default GraduationHat;
