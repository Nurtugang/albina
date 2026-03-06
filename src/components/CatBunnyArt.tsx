import React from 'react';

// Cute kawaii bunny SVG component
export const KawaiiCatMain = () => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
    {/* Ears */}
    <path d="M32 70 L44 28 L62 55Z" fill="#FFB3C6" />
    <path d="M128 70 L116 28 L98 55Z" fill="#FFB3C6" />
    <path d="M40 65 L48 38 L60 56Z" fill="#FF8FAB" />
    <path d="M120 65 L112 38 L100 56Z" fill="#FF8FAB" />
    {/* Head */}
    <ellipse cx="80" cy="90" rx="52" ry="48" fill="#FFF0F5" />
    {/* Blush */}
    <ellipse cx="54" cy="98" rx="11" ry="7" fill="#FFB3C6" opacity="0.65" />
    <ellipse cx="106" cy="98" rx="11" ry="7" fill="#FFB3C6" opacity="0.65" />
    {/* Eyes */}
    <circle cx="65" cy="82" r="9" fill="#3D1A6B" />
    <circle cx="95" cy="82" r="9" fill="#3D1A6B" />
    <circle cx="68" cy="79" r="3" fill="white" />
    <circle cx="98" cy="79" r="3" fill="white" />
    <circle cx="64" cy="85" r="1.2" fill="white" opacity="0.6" />
    {/* Nose */}
    <path d="M77 95 L80 98 L83 95 Q80 92 77 95Z" fill="#FF6B9D" />
    {/* Mouth */}
    <path d="M80 98 Q74 105 68 102" stroke="#FF6B9D" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M80 98 Q86 105 92 102" stroke="#FF6B9D" strokeWidth="2" strokeLinecap="round" fill="none"/>
    {/* Whiskers */}
    <line x1="48" y1="92" x2="70" y2="95" stroke="#C77DFF" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="47" y1="99" x2="70" y2="98" stroke="#C77DFF" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="90" y1="95" x2="112" y2="92" stroke="#C77DFF" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="90" y1="98" x2="113" y2="99" stroke="#C77DFF" strokeWidth="1.3" strokeLinecap="round"/>
    {/* Collar */}
    <rect x="56" y="128" width="48" height="10" rx="5" fill="#FF6B9D"/>
    <circle cx="80" cy="128" r="5" fill="#FFD93D"/>
    <text x="77" y="132" fontSize="6" fill="#FF6B9D">★</text>
  </svg>
);

export const KawaiiiBunny = () => (
  <svg viewBox="0 0 160 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-24">
    {/* Long ears */}
    <ellipse cx="58" cy="38" rx="14" ry="35" fill="#E8D5FF" />
    <ellipse cx="102" cy="38" rx="14" ry="35" fill="#E8D5FF" />
    <ellipse cx="58" cy="38" rx="8" ry="28" fill="#FFB3C6" />
    <ellipse cx="102" cy="38" rx="8" ry="28" fill="#FFB3C6" />
    {/* Head */}
    <ellipse cx="80" cy="95" rx="45" ry="42" fill="#F5EEFF" />
    {/* Blush */}
    <ellipse cx="57" cy="104" rx="12" ry="8" fill="#FFB3C6" opacity="0.6" />
    <ellipse cx="103" cy="104" rx="12" ry="8" fill="#FFB3C6" opacity="0.6" />
    {/* Eyes - sparkly U shape */}
    <path d="M65 90 Q70 84 75 90" stroke="#5B2C6F" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M85 90 Q90 84 95 90" stroke="#5B2C6F" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <circle cx="67" cy="87" r="1.5" fill="#5B2C6F"/>
    <circle cx="93" cy="87" r="1.5" fill="#5B2C6F"/>
    {/* Nose */}
    <ellipse cx="80" cy="100" rx="4" ry="3" fill="#FF6B9D"/>
    {/* Mouth */}
    <path d="M80 103 Q75 109 70 107" stroke="#FF6B9D" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    <path d="M80 103 Q85 109 90 107" stroke="#FF6B9D" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    {/* Body */}
    <ellipse cx="80" cy="148" rx="32" ry="26" fill="#F5EEFF"/>
    {/* Paws */}
    <ellipse cx="55" cy="158" rx="14" ry="10" fill="#E8D5FF"/>
    <ellipse cx="105" cy="158" rx="14" ry="10" fill="#E8D5FF"/>
    {/* Tail */}
    <circle cx="80" cy="168" r="8" fill="white"/>
    {/* Little bow */}
    <path d="M72 135 L80 131 L88 135 L80 139Z" fill="#FF6B9D"/>
    <circle cx="80" cy="135" r="3" fill="#FFD93D"/>
  </svg>
);

// Decorative cat paw prints
export const PawPrints = () => (
  <div className="flex gap-4 justify-center opacity-40">
    {[0, 1, 2].map(i => (
      <svg key={i} viewBox="0 0 40 40" className="w-6 h-6" fill="#C77DFF">
        <circle cx="20" cy="26" r="10" />
        <circle cx="10" cy="15" r="5" />
        <circle cx="20" cy="11" r="5" />
        <circle cx="30" cy="15" r="5" />
      </svg>
    ))}
  </div>
);
