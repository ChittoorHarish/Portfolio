import React, { useState, useEffect } from 'react';

const Intro = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Intro animation duration: 8 seconds (expanded to show full animation)
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 8000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // The HC text + metallic shine have been removed; no JS nudge required.

  if (!isVisible) return null;

  return (
    <div className="intro-overlay">
      {/* LEFT SIDE: Multiple smoke streams */}
      <div className="smoke-side smoke-left">
        <div className="smoke-stream stream-1"></div>
        <div className="smoke-stream stream-2"></div>
        <div className="smoke-stream stream-3"></div>
        <div className="smoke-wave wave-1"></div>
        <div className="smoke-wave wave-2"></div>
      </div>

      {/* RIGHT SIDE: Multiple smoke streams */}
      <div className="smoke-side smoke-right">
        <div className="smoke-stream stream-1"></div>
        <div className="smoke-stream stream-2"></div>
        <div className="smoke-stream stream-3"></div>
        <div className="smoke-wave wave-1"></div>
        <div className="smoke-wave wave-2"></div>
      </div>

      {/* CENTER: Collision dust cloud and centered elements */}
      <div className="intro-center-anchor">
        <div className="collision-center centered">
        <div className="dust-layer dust-1"></div>
        <div className="dust-layer dust-2"></div>
        <div className="dust-layer dust-3"></div>
        <div className="dust-particles">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={`dust-particle p${i}`}></div>
          ))}
        </div>
        </div>
        {/* SHOCKWAVE */}
        <div className="intro-shockwave centered"></div>

      {/* PREMIUM HC EXPANSION REVEAL */}
      <div className="name-container centered">
        {/* HC Metallic Initials that expand to full name in place */}
        <div className="hc-phase">
          <div className="hc-wrapper">
            <div className="hc-letter hc-h">
              <span className="hc-text">H</span>
              <span className="hc-expanded">arish</span>
              <div className="hc-shine shine-1"></div>
              <div className="hc-shine shine-2"></div>
              <div className="hc-corner corner-tl"></div>
              <div className="hc-corner corner-tr"></div>
              <div className="hc-corner corner-bl"></div>
              <div className="hc-corner corner-br"></div>
            </div>
            <div className="hc-letter hc-c">
              <span className="hc-text">C</span>
              <span className="hc-expanded">hittoor</span>
              <div className="hc-shine shine-1"></div>
              <div className="hc-shine shine-2"></div>
              <div className="hc-corner corner-tl"></div>
              <div className="hc-corner corner-tr"></div>
              <div className="hc-corner corner-bl"></div>
              <div className="hc-corner corner-br"></div>
            </div>
          </div>
          <div className="hc-glow"></div>
        </div>

        {/* Particle burst */}
        <div className="particle-burst">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={`burst-particle bp${i}`}></div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Intro;
