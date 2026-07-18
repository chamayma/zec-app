import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Languages, PlayCircle, Image as ImageIcon, ExternalLink, ChevronRight, ArrowRight, Newspaper } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

// Import local assets
import heroImg from '../assets/images/img12.jpeg';
import newsImg1 from '../assets/images/img4.jpeg';
import newsImg2 from '../assets/images/img5.jpeg';
import newsImg3 from '../assets/images/img6.jpeg';

import mediaThumb1 from '../assets/images/img1.jpeg';
import mediaThumb2 from '../assets/images/img7.jpeg';
import mediaThumb3 from '../assets/images/img8.jpeg';

import video1 from '../assets/Video/elimu_ya_wapiga_kura.mp4';
import video2 from '../assets/Video/mzunguuko_wa_uchaguzi.mp4';

export default function NewsScreen() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  
  const [activeChip, setActiveChip] = useState('Zote');
  const chips = ['Zote', 'Matangazo', 'Video', 'Picha', 'Hotuba'];

  const featuredNews = {
    title: 'Ratiba ya Uhakiki wa Wapiga Kura 2025: Maeneo na Tarehe',
    date: 'Mei 14, 2025',
    category: 'Muhimu',
    excerpt: 'Tume ya Uchaguzi Zanzibar (ZEC) inatangaza kuanza kwa mchakato wa uhakiki wa daftari la wapiga kura kwa visiwa vyote vya Unguja na Pemba...',
    img: heroImg
  };

  const newsItems = [
    {
      id: 1,
      title: 'Uteuzi wa Wasimamizi wa Vituo vya Uchaguzi Pemba',
      date: 'Mei 12, 2025',
      img: newsImg1
    },
    {
      id: 2,
      title: 'Mkutano wa ZEC na Vyama vya Siasa Visiwani',
      date: 'Mei 10, 2025',
      img: newsImg2
    },
    {
      id: 3,
      title: 'Mwongozo Mpya wa Elimu ya Mpiga Kura kwa Umma',
      date: 'Mei 08, 2025',
      img: newsImg3
    }
  ];

  return (
    <div style={styles.container}>
      {/* TopAppBar */}
      <div style={styles.headerArea}>
        <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
          <button 
            onClick={() => navigate(-1)} 
            style={{background: 'none', border: 'none', padding: 0, marginRight: '12px', cursor: 'pointer', display: 'flex'}}
          >
            <ArrowLeft size={24} color="var(--color-primary)" />
          </button>
          <div style={styles.iconCircle}>
            <Newspaper size={24} color="var(--color-primary)" />
          </div>
        </div>
        <h2 style={styles.pageTitle}>{t('news') || 'Habari & Matukio'}</h2>
        <p style={styles.pageSubtitle}>{t('newsSubtitle') || 'Pata taarifa za hivi punde'}</p>
      </div>

      <main style={styles.main}>
        {/* Featured News Hero */}
        <section style={styles.sectionMargin}>
          <div style={styles.heroCard}>
            <div style={styles.heroImgContainer}>
              <img src={featuredNews.img} alt={featuredNews.title} style={styles.heroImg} />
            </div>
            <div style={styles.heroContent}>
              <div style={styles.heroMetaRow}>
                <span style={styles.badge}>{featuredNews.category}</span>
                <span style={styles.dateLabel}>{featuredNews.date}</span>
              </div>
              <h2 style={{...styles.heroTitle, color: isDark ? 'var(--color-primary)' : 'var(--color-text)'}}>{featuredNews.title}</h2>
              <p style={styles.heroExcerpt}>{featuredNews.excerpt}</p>
              <button style={styles.somaZaidiBtn}>
                Soma Zaidi <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* News Categories (Chips) */}
        <section style={{...styles.sectionMargin, ...styles.chipsContainer}}>
          {chips.map(chip => (
            <button 
              key={chip} 
              onClick={() => setActiveChip(chip)}
              style={activeChip === chip ? styles.activeChip : styles.chip}
            >
              {chip}
            </button>
          ))}
        </section>

        {/* News Feed Grid */}
        <section style={styles.newsGrid}>
          {newsItems.map(item => (
            <div key={item.id} style={styles.newsCard}>
              <div style={styles.newsThumbContainer}>
                <img src={item.img} alt={item.title} style={styles.newsThumb} />
              </div>
              <div style={styles.newsCardContent}>
                <div>
                  <span style={styles.dateLabel}>{item.date}</span>
                  <h3 style={{...styles.newsTitle, color: isDark ? 'var(--color-primary)' : 'var(--color-text)'}}>{item.title}</h3>
                </div>
                <div style={styles.somaZaidiSmall}>
                  Soma zaidi <ChevronRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Multimedia Section */}
        <section style={styles.sectionMargin}>
          <div style={styles.mediaHeaderRow}>
            <h2 style={{...styles.mediaTitle, color: isDark ? 'var(--color-primary)' : 'var(--color-text)'}}>Maktaba ya Vyombo vya Habari</h2>
            <button style={styles.tazamaZoteBtn}>
              Tazama Zote <ExternalLink size={14} />
            </button>
          </div>
          
          <div style={styles.mediaGrid}>
            {/* Video Item */}
            <div style={styles.mediaItem}>
              <video 
                src={video1} 
                poster={mediaThumb1}
                controls
                style={styles.mediaImg} 
              />
              <div style={styles.mediaCaption}>
                <p style={styles.mediaCaptionText}>Ujumbe wa Mwenyekiti</p>
              </div>
            </div>
            
            {/* Photo Gallery Item */}
            <div style={styles.mediaItem}>
              <img src={mediaThumb2} alt="Gallery" style={styles.mediaImg} />
              <div style={styles.mediaOverlay} />
              <div style={styles.mediaPlayIcon}>
                <ImageIcon size={32} color="#fff" />
              </div>
              <div style={styles.mediaCaption}>
                <div style={styles.mediaCaptionRow}>
                  <ImageIcon size={14} color="#fff" />
                  <p style={styles.mediaCaptionText}>Picha: Mazoezi ya Uhakiki</p>
                </div>
              </div>
            </div>

            {/* Video Item 2 */}
            <div style={styles.mediaItemDesktop}>
              <video 
                src={video2} 
                poster={mediaThumb3}
                controls
                style={styles.mediaImg} 
              />
              <div style={styles.mediaCaption}>
                <p style={styles.mediaCaptionText}>ZEC Live: Mei 2025</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = {
  container: {
    paddingBottom: '100px',
    backgroundColor: 'var(--color-bg)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  headerArea: {
    padding: '24px 16px 0 16px',
    maxWidth: '1280px',
    margin: '0 auto',
    width: '100%'
  },
  iconCircle: {
    width: '48px',
    height: '48px',
    borderRadius: '16px',
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageTitle: {
    fontSize: '24px',
    fontWeight: '800',
    color: 'var(--color-text)',
    marginTop: '12px',
    marginBottom: '4px',
  },
  pageSubtitle: {
    fontSize: '14px',
    color: 'var(--color-text-muted)',
    lineHeight: '1.4',
  },
  iconButton: {
    background: 'none',
    border: 'none',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: '50%',
  },
  main: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '24px 16px',
    width: '100%',
  },
  sectionMargin: {
    marginBottom: '32px'
  },
  heroCard: {
    backgroundColor: 'var(--color-surface)',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid var(--color-border)',
    borderTop: '4px solid var(--color-primary)',
    boxShadow: 'var(--shadow-sm)',
    display: 'flex',
    flexDirection: 'column'
  },
  heroImgContainer: {
    width: '100%',
    aspectRatio: '16/9',
    overflow: 'hidden'
  },
  heroImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  heroContent: {
    padding: '16px',
  },
  heroMetaRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px'
  },
  badge: {
    backgroundColor: 'var(--color-primary)',
    color: '#000',
    padding: '2px 12px',
    borderRadius: '99px',
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  dateLabel: {
    fontSize: '12px',
    color: 'var(--color-secondary)',
    fontWeight: '500'
  },
  heroTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: 'var(--color-text)',
    lineHeight: '1.3',
    marginBottom: '8px'
  },
  heroExcerpt: {
    fontSize: '14px',
    color: 'var(--color-text-muted)',
    lineHeight: '1.5',
    marginBottom: '16px',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  somaZaidiBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'none',
    border: 'none',
    color: 'var(--color-primary)',
    fontWeight: '600',
    fontSize: '14px',
    padding: 0,
    cursor: 'pointer'
  },
  chipsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '6px',
    margin: '0 0 24px 0',
    width: '100%',
  },
  chip: {
    flex: 1,
    whiteSpace: 'nowrap',
    padding: '8px 2px',
    borderRadius: '16px',
    backgroundColor: 'var(--color-bg)',
    color: 'var(--color-text-muted)',
    border: '1px solid var(--color-border)',
    fontSize: '11px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textAlign: 'center',
  },
  activeChip: {
    flex: 1,
    whiteSpace: 'nowrap',
    padding: '8px 2px',
    borderRadius: '16px',
    backgroundColor: 'var(--color-primary)',
    color: '#000',
    border: '1px solid var(--color-primary)',
    fontSize: '11px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textAlign: 'center',
  },
  newsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '16px',
    marginBottom: '40px'
  },
  newsCard: {
    display: 'flex',
    gap: '16px',
    backgroundColor: 'var(--color-surface)',
    padding: '16px',
    borderRadius: '16px',
    border: '1px solid var(--color-border)',
    borderTop: '4px solid var(--color-primary)',
    boxShadow: 'var(--shadow-sm)',
    cursor: 'pointer',
    transition: 'border-color 0.2s ease',
  },
  newsThumbContainer: {
    width: '96px',
    height: '96px',
    flexShrink: 0,
    borderRadius: '8px',
    overflow: 'hidden'
  },
  newsThumb: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  newsCardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1
  },
  newsTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--color-text)',
    marginTop: '4px',
    lineHeight: '1.4',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  somaZaidiSmall: {
    color: 'var(--color-primary)',
    fontSize: '12px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    marginTop: '8px'
  },
  mediaHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '16px'
  },
  mediaTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: 'var(--color-text)',
    margin: 0
  },
  tazamaZoteBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    background: 'none',
    border: 'none',
    color: 'var(--color-primary)',
    fontWeight: '600',
    fontSize: '14px',
    padding: 0,
    cursor: 'pointer'
  },
  mediaGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px'
  },
  mediaItem: {
    position: 'relative',
    aspectRatio: '16/9',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#eee',
    cursor: 'pointer'
  },
  mediaItemDesktop: {
    position: 'relative',
    aspectRatio: '16/9',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#eee',
    cursor: 'pointer',
  },
  mediaImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  mediaOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    transition: 'background-color 0.2s ease',
  },
  mediaPlayIcon: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
  },
  mediaCaption: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '8px',
    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
    pointerEvents: 'none'
  },
  mediaCaptionRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  },
  mediaCaptionText: {
    color: '#fff',
    fontSize: '12px',
    fontWeight: '500',
    margin: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
};
