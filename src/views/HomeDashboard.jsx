import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, UserSearch, Calendar, Newspaper, GraduationCap, BarChart3, CalendarDays, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import ImageSlider from '../components/ImageSlider';
import newsImg1 from '../assets/images/img6.jpeg';
import newsImg2 from '../assets/images/img7.jpeg';

export default function HomeDashboard() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const quickLinks = [
    { icon: MapPin, label: t('findStation'), path: '/stations' },
    { icon: UserSearch, label: t('verifyVoter'), path: '/verify' },
    { icon: Calendar, label: t('schedule'), path: '/calendar' },
    { icon: Newspaper, label: t('news'), path: '/news' },
    { icon: GraduationCap, label: t('voterEducation'), path: '/education' },
    { icon: BarChart3, label: t('results'), path: '/results' },
    { icon: Phone, label: t('contact'), path: '/contact' },
    { icon: MessageSquare, label: t('zecBotHelp'), path: '/bot' },
  ];

  return (
    <div style={styles.container}>
      {/* Hero Slider */}
      <section style={styles.section}>
        <ImageSlider />
        
        {/* Instant Help Banner */}
        <div className="animate-fade-in-up" style={styles.helpBanner}>
          <div style={styles.helpBannerLeft}>
            <CalendarDays size={18} color="var(--color-primary)" style={{marginRight: '8px'}} />
            <span>Uchaguzi Mkuu wa Zanzibar</span>
          </div>
          <button style={styles.helpBtn} onClick={() => navigate('/bot')}>
            Msaada wa papo hapo
          </button>
        </div>
      </section>

      <p style={styles.motto}>
        {t('motto')}
      </p>

      {/* Quick Actions Grid */}
      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>{t('electionServices')}</h3>
        <div style={styles.grid}>
          {quickLinks.map((link, index) => (
            <button 
              key={index} 
              className="animate-fade-in-up"
              style={{
                ...styles.bentoCard,
                animationDelay: `${index * 0.05}s`
              }} 
              onClick={() => navigate(link.path)}
            >
              <div style={styles.iconCircle}>
                <link.icon size={24} color="var(--color-primary)" />
              </div>
              <span style={styles.bentoLabel}>{link.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section style={styles.section}>
        <div style={styles.newsHeader}>
          <h3 style={{...styles.sectionTitle, margin:0}}>{t('news')}</h3>
          <button style={styles.seeAllBtn} onClick={() => navigate('/news')}>
            Angalia Zote <ArrowRight size={14} />
          </button>
        </div>
        
        <div style={styles.newsScroller}>
          <div className="animate-fade-in-up" style={{...styles.newsCard, animationDelay: '0.1s'}}>
            <div style={{...styles.newsThumb, backgroundImage: `url(${newsImg1})`, backgroundPosition: 'top center'}}></div>
            <p style={styles.newsCategory}>ZEC NEWS</p>
            <h4 style={styles.newsTitle}>ZEC yatangaza tarehe za uandikishaji wa daftari la kudumu.</h4>
            <p style={styles.newsDate}>Mei 14, 2026</p>
          </div>
          <div className="animate-fade-in-up" style={{...styles.newsCard, animationDelay: '0.2s'}}>
            <div style={{...styles.newsThumb, backgroundImage: `url(${newsImg2})`, backgroundPosition: 'top center'}}></div>
            <p style={styles.newsCategory}>ZEC NEWS</p>
            <h4 style={styles.newsTitle}>Mafunzo kwa wasimamizi wa vituo vya kupigia kura yaanza rasmi.</h4>
            <p style={styles.newsDate}>Mei 12, 2026</p>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: '16px',
    paddingBottom: '40px',
  },
  section: {
    marginBottom: '24px',
  },
  helpBanner: {
    marginTop: '12px',
    borderRadius: '16px',
    border: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-surface)',
    padding: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: 'var(--shadow-sm)',
  },
  helpBannerLeft: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    color: 'var(--color-text-muted)',
    fontWeight: '500',
  },
  helpBtn: {
    backgroundColor: 'rgba(229, 57, 53, 0.15)', // Light red
    color: 'var(--color-error)',
    padding: '4px 12px',
    borderRadius: '99px',
    fontSize: '11px',
    fontWeight: '700',
    transition: 'background-color 0.2s',
  },
  motto: {
    textAlign: 'center',
    fontSize: '14px',
    color: 'var(--color-text-muted)',
    marginBottom: '24px',
    padding: '0 16px',
  },
  sectionTitle: {
    fontSize: '15px',
    fontWeight: '600',
    color: 'var(--color-text)',
    marginBottom: '12px',
    paddingLeft: '4px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
  },
  bentoCard: {
    backgroundColor: 'var(--color-surface)',
    borderRadius: '18px',
    border: '1px solid var(--color-border)',
    padding: '16px 12px',
    textAlign: 'center',
    boxShadow: 'var(--shadow-sm)',
    transition: 'transform 0.15s ease',
  },
  iconCircle: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: 'rgba(212, 175, 55, 0.1)', // Light gold
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 12px auto',
  },
  bentoLabel: {
    fontSize: '14px',
    fontWeight: '500',
    color: 'var(--color-text)',
    lineHeight: 1.3,
  },
  newsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
    padding: '0 4px',
  },
  seeAllBtn: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--color-primary)',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    whiteSpace: 'nowrap',
  },
  newsScroller: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
    paddingBottom: '8px',
  },
  newsCard: {
    width: '100%',
    backgroundColor: 'var(--color-surface)',
    borderRadius: '16px',
    border: '1px solid var(--color-border)',
    padding: '8px',
    boxShadow: 'var(--shadow-sm)',
    display: 'flex',
    flexDirection: 'column',
  },
  newsThumb: {
    height: '110px',
    borderRadius: '12px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: '8px',
  },
  newsCategory: {
    fontSize: '10px',
    fontWeight: '700',
    color: 'var(--color-text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    marginBottom: '4px',
  },
  newsTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--color-text)',
    lineHeight: 1.3,
    marginBottom: '8px',
  },
  newsDate: {
    fontSize: '11px',
    color: 'var(--color-text-muted)',
  }
};
