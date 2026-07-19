import React, { useState, useEffect } from 'react';
import { Landmark, CheckCircle, Megaphone } from 'lucide-react';

import img1 from '../assets/images/img1.webp';
import img2 from '../assets/images/img2.webp';
import img3 from '../assets/images/img3.webp';
import img4 from '../assets/images/img4.webp';
import img5 from '../assets/images/img5.webp';

const slides = [
  { 
    img: img1, 
    badge: "Kauli Mbiu", 
    title: "Uwazi, uaminifu na huduma za uchaguzi kwa watu wote", 
    desc: "Tume ya Uchaguzi Zanzibar", 
    Icon: Landmark 
  },
  { 
    img: img2, 
    badge: "Taarifa muhimu", 
    title: "Taarifa sahihi na za wakati zinapatikana kwa urahisi", 
    desc: "Uchaguzi Mkuu", 
    Icon: CheckCircle 
  },
  { 
    img: img3, 
    badge: "Mawasiliano", 
    title: "Tumia ZEC App kupokea taarifa na msaada wa haraka", 
    desc: "Huduma kwa Umma", 
    Icon: Megaphone 
  },
  { 
    img: img4, 
    badge: "Uandikishaji", 
    title: "Zoezi la uandikishaji linaendelea vituoni kote", 
    desc: "Daftari la Kudumu", 
    Icon: CheckCircle 
  },
  { 
    img: img5, 
    badge: "Matokeo", 
    title: "ZEC inahakikisha uchaguzi unafanyika kwa uwazi", 
    desc: "Huru na Haki", 
    Icon: Landmark 
  }
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Swipe/Drag state
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const minSwipeDistance = 50;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]); // restart timer when user changes slide manually

  const handleSwipe = (distance) => {
    if (distance > minSwipeDistance) {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    } else if (distance < -minSwipeDistance) {
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  // Touch handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    handleSwipe(touchStart - touchEnd);
  };

  // Mouse handlers
  const onMouseDown = (e) => {
    setIsDragging(true);
    setTouchEnd(null);
    setTouchStart(e.clientX);
  };
  const onMouseMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };
  const onMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (!touchStart || !touchEnd) return;
    handleSwipe(touchStart - touchEnd);
  };
  const onMouseLeave = () => {
    if (isDragging) onMouseUp();
  };

  return (
    <div 
      style={styles.sliderContainer}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            ...styles.slide,
            opacity: index === currentIndex ? 1 : 0,
          }}
        >
          <div style={{...styles.bgImage, backgroundImage: `url(${slide.img})`}} />
          <div style={styles.gradientOverlay} />
          
          <div style={styles.contentWrapper}>
            <div style={styles.badge}>
              <div style={styles.badgeIconBg}>
                <slide.Icon size={14} color="#fff" />
              </div>
              <span style={styles.badgeText}>{slide.badge}</span>
            </div>
            
            <div style={styles.textContainer}>
              <p style={styles.desc}>{slide.desc}</p>
              <h2 style={styles.title}>{slide.title}</h2>
            </div>
          </div>
        </div>
      ))}
      
      <div style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              ...styles.dot,
              backgroundColor: index === currentIndex ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)',
              transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)'
            }}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  sliderContainer: {
    position: 'relative',
    width: '100%',
    height: '320px',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-surface)',
    cursor: 'grab',
    userSelect: 'none',
    WebkitUserSelect: 'none',
  },
  slide: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    transition: 'opacity 0.6s ease-in-out',
  },
  bgImage: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 100%)',
  },
  contentWrapper: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    padding: '20px',
    color: '#fff',
  },
  badge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'rgba(255,255,255,0.15)',
    backdropFilter: 'blur(4px)',
    padding: '4px 12px 4px 4px',
    borderRadius: '999px',
    width: 'fit-content',
  },
  badgeIconBg: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: '11px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  textContainer: {
    paddingBottom: '16px',
    maxWidth: '90%',
  },
  desc: {
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    opacity: 0.8,
    marginBottom: '6px',
  },
  title: {
    fontSize: '20px',
    fontWeight: '600',
    lineHeight: 1.3,
    margin: 0,
  },
  dotsContainer: {
    position: 'absolute',
    bottom: '16px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px',
    zIndex: 20,
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  }
};
