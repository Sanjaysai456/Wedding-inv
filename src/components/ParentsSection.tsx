import React from 'react';

const ParentsSection: React.FC = () => {
  return (
    <section id="parents">
      <div className="section-inner">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">✦ With Love & Pride ✦</span>
          <h2 className="section-title">Invited by the <span>Bride's Family</span></h2>
          <div className="ornament-line" style={{ margin: '1rem auto', maxWidth: '300px' }}>
            <div className="ornament-diamond"></div>
            <div className="ornament-diamond"></div>
            <div className="ornament-diamond"></div>
          </div>
        </div>

        <p className="invite-message reveal">
          Sri <strong>Peramsetty Naga Sesha Prasad</strong> & Smt. <strong>Seetha Devi</strong><br/>
          joyfully invite you to grace this auspicious occasion<br/>
          and shower your blessings upon the beloved couple.
        </p>

        <div className="parents-wrapper reveal">
          <div className="family-card gold-frame">
            <div className="corner-ornament tl"></div>
            <div className="corner-ornament tr"></div>
            <div className="corner-ornament bl"></div>
            <div className="corner-ornament br"></div>
            <span className="family-card-badge">Bride's Parents</span>
            <div className="jasmine-divider" style={{ marginBottom: '0.75rem' }}>✿ ✿ ✿</div>
            <p className="family-name">Sri Peramsetty Naga Sesha Prasad</p>
            <p className="family-name">&amp; Smt. Seetha Devi</p>
            <p className="family-sub" style={{ marginTop: '0.5rem' }}>Parents of the Bride</p>
          </div>

          <div className="family-card gold-frame">
            <div className="corner-ornament tl"></div>
            <div className="corner-ornament tr"></div>
            <div className="corner-ornament bl"></div>
            <div className="corner-ornament br"></div>
            <span className="family-card-badge">Groom's Parents</span>
            <div className="jasmine-divider" style={{ marginBottom: '0.75rem' }}>✿ ✿ ✿</div>
            <p className="family-name">Sri Tirumalasetty Mukthi Vigneswara Rao <span style={{ fontSize: '0.7em', color: '#888' }}>(Late)</span></p>
            <p className="family-name">&amp; Smt. Lalitha Siva Jyothi</p>
            <p className="family-sub" style={{ marginTop: '0.5rem' }}>Safilguda, Malkajgiri, Rangareddy Dist.</p>
          </div>
        </div>

        <div className="credentials-block reveal">
          <div className="credential-item gold-frame">
            <div className="corner-ornament tl"></div><div className="corner-ornament tr"></div>
            <div className="corner-ornament bl"></div><div className="corner-ornament br"></div>
            <p className="credential-role">✿ The Bride ✿</p>
            <p className="credential-name">Chi. La. Sow. Vasanthee Devi</p>
            <p className="credential-degree">M.B.A.</p>
          </div>
          <div className="credential-item gold-frame">
            <div className="corner-ornament tl"></div><div className="corner-ornament tr"></div>
            <div className="corner-ornament bl"></div><div className="corner-ornament br"></div>
            <p className="credential-role">✦ The Groom ✦</p>
            <p className="credential-name">Chi. Sai Tanuj</p>
            <p className="credential-degree">M.S. (Australia)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentsSection;
