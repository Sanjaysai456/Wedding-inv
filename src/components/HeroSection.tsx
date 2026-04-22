import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero">
      {/* Mandala SVG background */}
      <svg className="hero-mandala" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" fill="none">
        <circle cx="250" cy="250" r="240" stroke="#D4A017" strokeWidth="1"/>
        <circle cx="250" cy="250" r="200" stroke="#D4A017" strokeWidth="0.5"/>
        <circle cx="250" cy="250" r="160" stroke="#D4A017" strokeWidth="1"/>
        <circle cx="250" cy="250" r="120" stroke="#D4A017" strokeWidth="0.5"/>
        <circle cx="250" cy="250" r="80" stroke="#D4A017" strokeWidth="1"/>
        <circle cx="250" cy="250" r="40" stroke="#D4A017" strokeWidth="1.5"/>
        <g stroke="#D4A017" strokeWidth="0.5">
          <line x1="250" y1="10" x2="250" y2="490"/>
          <line x1="10" y1="250" x2="490" y2="250"/>
          <line x1="80" y1="80" x2="420" y2="420"/>
          <line x1="420" y1="80" x2="80" y2="420"/>
          <line x1="40" y1="155" x2="460" y2="345"/>
          <line x1="155" y1="40" x2="345" y2="460"/>
          <line x1="460" y1="155" x2="40" y2="345"/>
          <line x1="345" y1="40" x2="155" y2="460"/>
        </g>
        {/* Lotus petals around outer ring */}
        <g fill="#D4A017">
          <ellipse cx="250" cy="20" rx="8" ry="18" transform="rotate(0 250 250)"/>
          <ellipse cx="250" cy="20" rx="8" ry="18" transform="rotate(22.5 250 250)"/>
          <ellipse cx="250" cy="20" rx="8" ry="18" transform="rotate(45 250 250)"/>
          <ellipse cx="250" cy="20" rx="8" ry="18" transform="rotate(67.5 250 250)"/>
          <ellipse cx="250" cy="20" rx="8" ry="18" transform="rotate(90 250 250)"/>
          <ellipse cx="250" cy="20" rx="8" ry="18" transform="rotate(112.5 250 250)"/>
          <ellipse cx="250" cy="20" rx="8" ry="18" transform="rotate(135 250 250)"/>
          <ellipse cx="250" cy="20" rx="8" ry="18" transform="rotate(157.5 250 250)"/>
          <ellipse cx="250" cy="20" rx="8" ry="18" transform="rotate(180 250 250)"/>
          <ellipse cx="250" cy="20" rx="8" ry="18" transform="rotate(202.5 250 250)"/>
          <ellipse cx="250" cy="20" rx="8" ry="18" transform="rotate(225 250 250)"/>
          <ellipse cx="250" cy="20" rx="8" ry="18" transform="rotate(247.5 250 250)"/>
          <ellipse cx="250" cy="20" rx="8" ry="18" transform="rotate(270 250 250)"/>
          <ellipse cx="250" cy="20" rx="8" ry="18" transform="rotate(292.5 250 250)"/>
          <ellipse cx="250" cy="20" rx="8" ry="18" transform="rotate(315 250 250)"/>
          <ellipse cx="250" cy="20" rx="8" ry="18" transform="rotate(337.5 250 250)"/>
        </g>
      </svg>

      {/* Floral Arch */}
      <svg className="hero-arch" viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin meet">
        <defs>
          <radialGradient id="archGlow" cx="50%" cy="0%" r="60%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#B8860B" stopOpacity="0"/>
          </radialGradient>
        </defs>
        {/* Main arch shape */}
        <path d="M 50 480 Q 50 120 450 40 Q 850 120 850 480" stroke="#B8860B" strokeWidth="2" fill="url(#archGlow)"/>
        <path d="M 80 480 Q 80 150 450 70 Q 820 150 820 480" stroke="#D4A017" strokeWidth="1" fill="none" strokeDasharray="4,6"/>
        {/* Gold ornaments on arch */}
        <circle cx="450" cy="38" r="12" fill="#FFD700" opacity="0.9"/>
        <circle cx="450" cy="38" r="7" fill="#B8860B"/>
        <circle cx="160" cy="200" r="7" fill="#FFD700" opacity="0.7"/>
        <circle cx="740" cy="200" r="7" fill="#FFD700" opacity="0.7"/>
        <circle cx="100" cy="330" r="5" fill="#D4A017" opacity="0.6"/>
        <circle cx="800" cy="330" r="5" fill="#D4A017" opacity="0.6"/>
        {/* Mango leaf silhouettes along arch */}
        <g fill="#1A5C38" opacity="0.5">
          <ellipse cx="240" cy="155" rx="9" ry="22" transform="rotate(-35 240 155)"/>
          <ellipse cx="210" cy="180" rx="8" ry="20" transform="rotate(-50 210 180)"/>
          <ellipse cx="270" cy="130" rx="8" ry="20" transform="rotate(-20 270 130)"/>
          <ellipse cx="660" cy="155" rx="9" ry="22" transform="rotate(35 660 155)"/>
          <ellipse cx="690" cy="180" rx="8" ry="20" transform="rotate(50 690 180)"/>
          <ellipse cx="630" cy="130" rx="8" ry="20" transform="rotate(20 630 130)"/>
          <ellipse cx="370" cy="75" rx="8" ry="20" transform="rotate(-10 370 75)"/>
          <ellipse cx="530" cy="75" rx="8" ry="20" transform="rotate(10 530 75)"/>
          <ellipse cx="410" cy="60" rx="8" ry="20" transform="rotate(-5 410 60)"/>
          <ellipse cx="490" cy="60" rx="8" ry="20" transform="rotate(5 490 60)"/>
        </g>
        {/* Lotus at top */}
        <g fill="#C0392B" opacity="0.7" transform="translate(450, 30)">
          <ellipse cx="0" cy="-14" rx="5" ry="12"/>
          <ellipse cx="-10" cy="-10" rx="5" ry="12" transform="rotate(40)"/>
          <ellipse cx="10" cy="-10" rx="5" ry="12" transform="rotate(-40)"/>
          <ellipse cx="-14" cy="0" rx="5" ry="12" transform="rotate(80)"/>
          <ellipse cx="14" cy="0" rx="5" ry="12" transform="rotate(-80)"/>
        </g>
        {/* Jasmine strings */}
        <path d="M 100 480 Q 150 400 200 360 Q 250 320 300 290 Q 380 250 450 230" stroke="#FFF8DC" strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="2,6"/>
        <path d="M 800 480 Q 750 400 700 360 Q 650 320 600 290 Q 520 250 450 230" stroke="#FFF8DC" strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="2,6"/>
      </svg>

      <div className="hero-content">
        <span className="aum-symbol">ॐ</span>
        <p className="hero-blessing">
          With the blessings of the Almighty and our beloved elders,<br/>
          you are warmly invited to the wedding celebration of...
        </p>

        <div className="hero-names-block gold-frame">
          <div className="corner-ornament tl"></div>
          <div className="corner-ornament tr"></div>
          <div className="corner-ornament bl"></div>
          <div className="corner-ornament br"></div>

          <div className="ornament-line" style={{ marginBottom: '1rem' }}>
            <div className="ornament-diamond"></div>
            <div className="ornament-diamond"></div>
            <div className="ornament-diamond"></div>
          </div>

          <span className="bride-name">Vasanthee Devi</span>
          <span className="weds-text">✦ &nbsp; weds &nbsp; ✦</span>
          <span className="groom-name">Sai Tanuj</span>

          <div className="ornament-line" style={{ marginTop: '1rem' }}>
            <div className="ornament-diamond"></div>
            <div className="ornament-diamond"></div>
            <div className="ornament-diamond"></div>
          </div>
        </div>

        <div className="lotus-row" aria-hidden="true">
          <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="30" cy="15" rx="7" ry="14" fill="#C0392B" opacity="0.8"/>
            <ellipse cx="16" cy="22" rx="7" ry="14" transform="rotate(-40 16 22)" fill="#C0392B" opacity="0.7"/>
            <ellipse cx="44" cy="22" rx="7" ry="14" transform="rotate(40 44 22)" fill="#C0392B" opacity="0.7"/>
            <ellipse cx="8" cy="36" rx="7" ry="13" transform="rotate(-70 8 36)" fill="#C0392B" opacity="0.5"/>
            <ellipse cx="52" cy="36" rx="7" ry="13" transform="rotate(70 52 36)" fill="#C0392B" opacity="0.5"/>
            <ellipse cx="30" cy="38" rx="10" ry="8" fill="#D4A017" opacity="0.9"/>
          </svg>
          <svg width="20" height="20" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.6 }}>
            <ellipse cx="30" cy="15" rx="7" ry="14" fill="#FFD700"/>
            <ellipse cx="16" cy="22" rx="7" ry="14" transform="rotate(-40 16 22)" fill="#FFD700"/>
            <ellipse cx="44" cy="22" rx="7" ry="14" transform="rotate(40 44 22)" fill="#FFD700"/>
            <ellipse cx="30" cy="36" rx="9" ry="7" fill="#B8860B"/>
          </svg>
          <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="30" cy="15" rx="7" ry="14" fill="#C0392B" opacity="0.8"/>
            <ellipse cx="16" cy="22" rx="7" ry="14" transform="rotate(-40 16 22)" fill="#C0392B" opacity="0.7"/>
            <ellipse cx="44" cy="22" rx="7" ry="14" transform="rotate(40 44 22)" fill="#C0392B" opacity="0.7"/>
            <ellipse cx="8" cy="36" rx="7" ry="13" transform="rotate(-70 8 36)" fill="#C0392B" opacity="0.5"/>
            <ellipse cx="52" cy="36" rx="7" ry="13" transform="rotate(70 52 36)" fill="#C0392B" opacity="0.5"/>
            <ellipse cx="30" cy="38" rx="10" ry="8" fill="#D4A017" opacity="0.9"/>
          </svg>
        </div>

        <p className="save-date">✦ &nbsp; Save the Date: Thursday, 30th April 2026 &nbsp; ✦</p>
      </div>

      <div className="scroll-indicator">▾</div>
    </section>
  );
};

export default HeroSection;
