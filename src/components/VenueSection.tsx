import React from 'react';

const VenueSection: React.FC = () => {
  return (
    <section id="venue">
      <div className="section-inner">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label" style={{ color: 'var(--turmeric-light)' }}>✦ The Venue ✦</span>
          <h2 className="section-title" style={{ color: 'var(--cream)' }}>Join Us <span>Here</span></h2>
          <div className="ornament-line" style={{ margin: '1rem auto', maxWidth: '300px' }}>
            <div className="ornament-diamond"></div>
            <div className="ornament-diamond"></div>
            <div className="ornament-diamond"></div>
          </div>
        </div>

        <div className="venue-card gold-frame reveal" style={{ borderColor: 'rgba(255,215,0,0.35)' }}>
          <div className="corner-ornament tl" style={{ borderColor: 'var(--gold-bright)' }}></div>
          <div className="corner-ornament tr" style={{ borderColor: 'var(--gold-bright)' }}></div>
          <div className="corner-ornament bl" style={{ borderColor: 'var(--gold-bright)' }}></div>
          <div className="corner-ornament br" style={{ borderColor: 'var(--gold-bright)' }}></div>

          <div className="jasmine-divider" style={{ color: 'var(--turmeric-light)', marginBottom: '1rem' }}>✿ ✿ ✿</div>

          <p className="venue-name">SHREE CONVENTION</p>
          <p className="venue-sub">Mini Hall</p>

          <div className="ornament-line" style={{ maxWidth: '200px', margin: '0 auto 1.5rem' }}>
            <div className="ornament-diamond"></div>
          </div>

          <p className="venue-address">
            Inner Ring Road, Phase-II,<br/>
            Chillies Daba – RTO Office Road,<br/>
            <strong style={{ color: 'var(--turmeric-light)' }}>Guntur</strong>
          </p>

          <a className="directions-btn" href="https://www.google.com/maps/search/Shree+Convention+Guntur+Inner+Ring+Road" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Get Directions
          </a>

          <div className="jasmine-divider" style={{ color: 'var(--turmeric-light)', marginTop: '1.5rem' }}>✿ ✿ ✿</div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
