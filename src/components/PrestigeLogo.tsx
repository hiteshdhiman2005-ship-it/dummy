import { useId } from 'react';

interface PrestigeLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export default function PrestigeLogo({
  className = '',
  size = 'md',
  showSubtitle = true,
}: PrestigeLogoProps) {
  const gradientId = useId().replace(/:/g, '');
  const innerGradientId = `${gradientId}-inner`;
  const glowId = `${gradientId}-glow`;

  const svgSize = {
    sm: 'w-[270px]',
    md: 'w-[360px]',
    lg: 'w-[520px]',
  }[size];

  const wordmarkSize = {
    sm: 56,
    md: 74,
    lg: 100,
  }[size];

  const subtitleSize = {
    sm: 14,
    md: 18,
    lg: 24,
  }[size];

  return (
    <div className={`group select-none ${className}`}>
      <svg
        viewBox="0 0 820 560"
        className={`${svgSize} h-auto block drop-shadow-[0_16px_28px_rgba(0,0,0,0.45)]`}
        role="img"
        aria-label="PrestigeTime Geneva logo"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#f8e7dc" />
            <stop offset="18%" stopColor="#d5a991" />
            <stop offset="38%" stopColor="#efe0d2" />
            <stop offset="55%" stopColor="#c89270" />
            <stop offset="72%" stopColor="#f5ddd0" />
            <stop offset="100%" stopColor="#c98f66" />
          </linearGradient>

          <linearGradient id={innerGradientId} x1="0%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#18222e" />
            <stop offset="100%" stopColor="#0a1019" />
          </linearGradient>

          <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="rgba(0,0,0,0.32)" />
          </filter>
        </defs>

        <g filter={`url(#${glowId})`}>
          <path
            d="M410 70 L518 104 L600 150 L616 294 C616 396 547 480 410 521 C273 480 204 396 204 294 L220 150 L302 104 Z"
            fill="url(#gradientId)"
            stroke="url(#gradientId)"
            strokeWidth="7"
          />

          <path
            d="M410 100 L500 127 L564 162 L578 290 C578 381 521 447 410 482 C299 447 242 381 242 290 L256 162 L320 127 Z"
            fill="url(#innerGradientId)"
            stroke="url(#gradientId)"
            strokeWidth="5"
          />

          <line x1="410" y1="112" x2="410" y2="146" stroke="url(#gradientId)" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
          <line x1="410" y1="426" x2="410" y2="470" stroke="url(#gradientId)" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
          <line x1="286" y1="252" x2="248" y2="252" stroke="url(#gradientId)" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
          <line x1="534" y1="252" x2="572" y2="252" stroke="url(#gradientId)" strokeWidth="4" strokeLinecap="round" opacity="0.8" />

          <path
            d="M339 95 Q410 40 481 95"
            fill="none"
            stroke="url(#gradientId)"
            strokeWidth="8"
            strokeLinecap="round"
          />

          <path
            d="M372 116 Q410 68 448 116"
            fill="none"
            stroke="url(#gradientId)"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.85"
          />

          <path
            d="M352 136c14-34 46-52 58-52s44 18 58 52c-14-10-32-15-58-15s-44 5-58 15Z"
            fill="url(#innerGradientId)"
            opacity="0.95"
          />

          <g transform="translate(0 3)">
            <path
              d="M325 176c20-18 34-28 85-28s65 10 85 28c-20 7-39 17-64 20 8 10 13 20 14 30-14-6-28-8-43-8s-29 2-43 8c1-10 6-20 14-30-25-3-44-13-64-20Z"
              fill="url(#gradientId)"
              opacity="0.9"
            />
          </g>

          <path
            d="M297 82 A24 24 0 1 1 299 118 A20 20 0 1 1 297 82Z"
            fill="url(#gradientId)"
            opacity="0.9"
          />

          <path
            d="M375 82 L382 101 L401 108 L382 115 L375 134 L368 115 L349 108 L368 101 Z"
            fill="url(#gradientId)"
          />

          <g transform="translate(0 -5)">
            <circle cx="410" cy="290" r="133" fill="#0d141d" stroke="url(#gradientId)" strokeWidth="5" />
            <circle cx="410" cy="290" r="119" fill="none" stroke="url(#gradientId)" strokeWidth="2" opacity="0.7" />

            <g stroke="url(#gradientId)" strokeWidth="2.4" opacity="0.8">
              <line x1="410" y1="160" x2="410" y2="172" />
              <line x1="410" y1="408" x2="410" y2="420" />
              <line x1="282" y1="290" x2="294" y2="290" />
              <line x1="526" y1="290" x2="538" y2="290" />
              <line x1="325" y1="186" x2="333" y2="194" />
              <line x1="487" y1="186" x2="479" y2="194" />
              <line x1="325" y1="394" x2="333" y2="386" />
              <line x1="487" y1="394" x2="479" y2="386" />
            </g>

            <g fill="url(#gradientId)" fontFamily="Georgia, 'Times New Roman', serif" fontSize="16" fontWeight="700">
              <text x="410" y="182" textAnchor="middle">XII</text>
              <text x="540" y="299" textAnchor="middle">III</text>
              <text x="410" y="418" textAnchor="middle">VI</text>
              <text x="280" y="299" textAnchor="middle">IX</text>
            </g>

            <g stroke="url(#gradientId)" strokeLinecap="round">
              <line x1="410" y1="290" x2="410" y2="233" strokeWidth="5" />
              <line x1="410" y1="290" x2="469" y2="290" strokeWidth="3" />
              <line x1="410" y1="290" x2="354" y2="330" strokeWidth="2.2" opacity="0.9" />
            </g>

            <circle cx="410" cy="290" r="7" fill="url(#gradientId)" />
          </g>
        </g>

        <g>
          <text
            x="410"
            y="500"
            fill="url(#gradientId)"
            textAnchor="middle"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontWeight="700"
            letterSpacing="2"
            fontSize={wordmarkSize}
          >
            PRESTIGETIME
          </text>

          {showSubtitle && (
            <text
              x="410"
              y="540"
              fill="url(#gradientId)"
              textAnchor="middle"
              fontFamily="Georgia, 'Times New Roman', serif"
              fontWeight="600"
              letterSpacing="10"
              fontSize={subtitleSize}
            >
              GENEVE
            </text>
          )}
        </g>
      </svg>
    </div>
  );
}
