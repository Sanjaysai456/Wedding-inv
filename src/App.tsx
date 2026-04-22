import React, { useEffect } from 'react';
import FallingPetals from './components/FallingPetals';
import HeroSection from './components/HeroSection';
import ParentsSection from './components/ParentsSection';
import TimelineSection from './components/TimelineSection';
import VenueSection from './components/VenueSection';

const App: React.FC = () => {
  useEffect(() => {
    // ─── SCROLL REVEAL ───
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          // Stagger children
          const children = e.target.querySelectorAll('.event-item, .family-card, .credential-item');
          children.forEach((child, i) => {
            (child as HTMLElement).style.animationDelay = `${i * 0.15}s`;
            child.classList.add('visible');
          });
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));

    // ─── PARALLAX on HERO ───
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      const scrolled = window.pageYOffset;
      if (hero && scrolled < window.innerHeight) {
        hero.style.backgroundPositionY = `${scrolled * 0.4}px`;
        const content = hero.querySelector('.hero-content') as HTMLElement | null;
        if (content) {
          content.style.transform = `translateY(${scrolled * 0.25}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      reveals.forEach(el => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <FallingPetals />

      <HeroSection />

      <div className="kolam-bar"></div>

      <ParentsSection />

      <div className="kolam-bar"></div>

      <TimelineSection />

      <div className="kolam-bar"></div>

      <VenueSection />

      <footer>
        <span className="footer-names">Vasanthee &amp; Sai Tanuj</span>
        <p>Thursday, 30th April 2026 &nbsp;·&nbsp; Shree Convention, Guntur</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', opacity: 0.4 }}>
          With love from the family of Peramsetty Naga Sesha Prasad &amp; Smt. Seetha Devi
        </p>
      </footer>
    </>
  );
};

export default App;
