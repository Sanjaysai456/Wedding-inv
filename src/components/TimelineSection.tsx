import React from 'react';

const TimelineSection: React.FC = () => {
  return (
    <section id="timeline">
      <div className="section-inner">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">✦ Auspicious Moments ✦</span>
          <h2 className="section-title">The <span>Celebrations</span></h2>
          <div className="ornament-line" style={{ margin: '1rem auto', maxWidth: '300px' }}>
            <div className="ornament-diamond"></div>
            <div className="ornament-diamond"></div>
            <div className="ornament-diamond"></div>
          </div>
        </div>

        <div className="timeline-container reveal">
          <div className="timeline-spine"></div>

          {/* DAY 1 */}
          <div className="day-block">
            <div className="day-heading">
              <div className="day-badge">Day One</div>
              <span className="day-date">Wednesday, 29th April 2026</span>
            </div>

            <div className="event-item">
              <div className="event-node">
                <div className="event-dot main"></div>
                <span className="event-time">9:00 AM</span>
              </div>
              <div className="event-card haldi">
                <div className="event-icon">🌼</div>
                <p className="event-name">Pellikuthuru &amp; Haldi</p>
                <p className="event-desc">
                  The radiant turmeric ceremony — where the bride is anointed with sandalwood 
                  and turmeric paste, glowing golden in the blessings of her family.
                </p>
              </div>
            </div>

            <div className="event-item">
              <div className="event-node">
                <div className="event-dot"></div>
                <span className="event-time">Evening</span>
              </div>
              <div className="event-card mehandi">
                <div className="event-icon">🌿</div>
                <p className="event-name">Mehandi</p>
                <p className="event-desc">
                  Intricate henna designs bloom across the bride's hands — each pattern 
                  carrying whispered prayers and fragrant stories of love.
                </p>
              </div>
            </div>
          </div>

          {/* DAY 2 */}
          <div className="day-block">
            <div className="day-heading">
              <div className="day-badge" style={{ background: 'linear-gradient(135deg,#8B1A1A,#C0392B)' }}>
                Day Two &nbsp;✦&nbsp; The Wedding Day
              </div>
              <span className="day-date">Thursday, 30th April 2026</span>
            </div>

            <div className="event-item">
              <div className="event-node">
                <div className="event-dot"></div>
                <span className="event-time">Morning</span>
              </div>
              <div className="event-card ritual">
                <div className="event-icon">🪔</div>
                <p className="event-name">Pellikuthuru Rituals</p>
                <p className="event-desc">
                  Sacred morning rites to sanctify the bride — a joyful, flower-filled prelude 
                  to the grandest moment of her life.
                </p>
              </div>
            </div>

            <div className="event-item">
              <div className="event-node">
                <div className="event-dot main" style={{ width: '26px', height: '26px', boxShadow: '0 0 18px rgba(255,215,0,0.7)' }}></div>
                <span className="event-time">7:38 PM</span>
              </div>
              <div className="event-card muhurtham">
                <div className="muhurtham-glow"></div>
                <div className="event-icon">💍</div>
                <p className="event-name" style={{ fontSize: '1.3rem', color: 'var(--kumkum-deep)' }}>Sumuhurtham</p>
                <p className="event-desc" style={{ fontSize: '1rem' }}>
                  The auspicious moment — as sacred fire witnesses, two souls are bound by 
                  sacred vows, eternal thread, and the blessings of all present.
                </p>
              </div>
            </div>

            <div className="event-item">
              <div className="event-node">
                <div className="event-dot"></div>
                <span className="event-time">8:00 PM+</span>
              </div>
              <div className="event-card dinner">
                <div className="event-icon">🍽️</div>
                <p className="event-name">Wedding Dinner</p>
                <p className="event-desc">
                  A sumptuous traditional feast — join us as we celebrate with warmth, 
                  joy, and the flavours of Telugu tradition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
