import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Building2, Eye, Target, Scale, ShieldCheck, UserCheck, CheckCircle2, Users, Landmark, ArrowLeft } from 'lucide-react';
import heroImg from '../assets/images/img2.webp';
import kaziImg from '../assets/images/kazi.webp';
import azizaImg from '../assets/images/aziza.webp';
import thabitImg from '../assets/images/thabit.webp';
import awadhImg from '../assets/images/awadh.webp';
import idrisaImg from '../assets/images/idrisa.webp';
import ayoubImg from '../assets/images/ayoub.webp';
import jumaImg from '../assets/images/juma.webp';
import halimaImg from '../assets/images/halima.webp';

export default function AboutZec() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const leaders = [
    { name: 'Mhe. Jaji George Joseph Kazi', role: 'Mwenyekiti', img: kaziImg },
    { name: 'Mhe. Jaji Aziza Iddi Suwedi', role: 'Makamo Mwenyekiti', img: azizaImg },
    { name: 'Mhe. Awadh Ali Said', role: 'Mjumbe', img: awadhImg },
    { name: 'Mhe. Idrisa Haji Jecha', role: 'Mjumbe', img: idrisaImg },
    { name: 'Mhe. Ayoub Bakar Hamad', role: 'Mjumbe', img: ayoubImg },
    { name: 'Mhe. Halima Mohamed Said', role: 'Mjumbe', img: halimaImg },
    { name: 'Mhe. Juma Haji Ussi', role: 'Mjumbe', img: jumaImg },
    { name: 'Ndg. Thabit Idarous Faina', role: 'Mkurugenzi wa Uchaguzi na Katibu wa Tume', img: thabitImg },
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section. */}
      <div style={styles.heroBanner}>
        <div style={styles.heroOverlay} />
        <button 
          onClick={() => navigate(-1)} 
          style={{position: 'absolute', top: '16px', left: '16px', zIndex: 10, background: 'rgba(0,0,0,0.5)', border: 'none', padding: '8px', borderRadius: '50%', cursor: 'pointer', display: 'flex'}}
        >
          <ArrowLeft size={24} color="#fff" />
        </button>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>{t('aboutZec')}</h1>
          <p style={styles.heroSubtitle}>{t('aboutSubtitle')}</p>
        </div>
      </div>

      <div style={styles.content}>
        
        {/* Intro Text */}
        <p style={styles.introText}>
          {t('aboutIntro')}
        </p>

        {/* Vision & Mission */}
        <div style={styles.grid2}>
          <div style={{...styles.card, backgroundColor: 'var(--color-surface)'}}>
            <div style={styles.cardHeader}>
              <Eye size={24} color="var(--color-primary)" />
              <h2 style={styles.cardTitle}>{t('vision')}</h2>
            </div>
            <p style={styles.cardText}>
              {t('visionText')}
            </p>
          </div>

          <div style={{...styles.card, backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-primary)'}}>
            <div style={styles.cardHeader}>
              <Target size={24} color="var(--color-bg)" />
              <h2 style={{...styles.cardTitle, color: 'var(--color-bg)'}}>{t('mission')}</h2>
            </div>
            <p style={{...styles.cardText, color: 'rgba(255,255,255,0.9)'}}>
              {t('missionText')}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>{t('coreValues')}</h2>
          <div style={styles.grid2}>
            <div style={styles.valueCard}>
              <Scale size={28} color="var(--color-primary)" />
              <span style={styles.valueLabel}>{t('value1')}</span>
            </div>
            <div style={styles.valueCard}>
              <ShieldCheck size={28} color="var(--color-primary)" />
              <span style={styles.valueLabel}>{t('value2')}</span>
            </div>
            <div style={styles.valueCard}>
              <Eye size={28} color="var(--color-primary)" />
              <span style={styles.valueLabel}>{t('value3')}</span>
            </div>
            <div style={styles.valueCard}>
              <CheckCircle2 size={28} color="var(--color-primary)" />
              <span style={styles.valueLabel}>{t('value4')}</span>
            </div>
          </div>
        </section>

        {/* Mandate & History */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>{t('mandateHistory')}</h2>
          <div style={styles.historyContainer}>
            <div style={styles.historyItem}>
              <div style={styles.historyDot} />
              <h3 style={styles.historyTitle}>{t('established')}</h3>
              <p style={styles.historyText}>{t('establishedText')}</p>
            </div>
            <div style={styles.historyItem}>
              <div style={styles.historyDot} />
              <h3 style={styles.historyTitle}>{t('legalMandate')}</h3>
              <p style={styles.historyText}>{t('legalMandateText')}</p>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section style={{...styles.section, marginBottom: '40px'}}>
          <h2 style={styles.sectionTitle}>Uongozi wa Tume</h2>
          <div style={styles.leadershipGrid}>
            
            {leaders.map((leader, index) => (
              <div key={index} style={styles.leaderCard}>
                <div style={styles.leaderImgWrapper}>
                  {leader.img ? (
                    <img src={leader.img} alt={leader.name} style={styles.leaderImg} />
                  ) : (
                    <Users size={32} color="var(--color-text-muted)" />
                  )}
                </div>
                <h3 style={{...styles.leaderRole, color: 'var(--color-text)'}}>{leader.name}</h3>
                <p style={{...styles.leaderDesc, color: 'var(--color-primary)', fontWeight: 'bold'}}>{leader.role}</p>
              </div>
            ))}

          </div>
        </section>

      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },
  heroBanner: {
    position: 'relative',
    height: '240px',
    backgroundImage: `url(${heroImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '24px',
    borderBottomLeftRadius: '24px',
    borderBottomRightRadius: '24px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)',
    borderBottomLeftRadius: '24px',
    borderBottomRightRadius: '24px',
    zIndex: 1,
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    width: '100%',
  },
  heroTitle: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#fff',
    marginBottom: '4px',
  },
  heroSubtitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--color-primary)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  content: {
    flex: 1,
    padding: '24px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '28px',
  },
  introText: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: 'var(--color-text-muted)',
    fontWeight: '500',
  },
  grid2: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  card: {
    padding: '20px',
    borderRadius: '16px',
    border: '1px solid var(--color-border)',
    boxShadow: 'var(--shadow-sm)',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: 'var(--color-text)',
  },
  cardText: {
    fontSize: '14px',
    lineHeight: '1.5',
    color: 'var(--color-text-muted)',
    fontStyle: 'italic',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: '800',
    color: 'var(--color-text)',
    borderLeft: '4px solid var(--color-primary)',
    paddingLeft: '8px',
  },
  valueCard: {
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderTop: '4px solid var(--color-primary)',
    borderRadius: '16px',
    padding: '20px 12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    boxShadow: 'var(--shadow-sm)',
  },
  valueLabel: {
    fontSize: '14px',
    fontWeight: '700',
    color: 'var(--color-text)',
  },
  historyContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    borderLeft: '2px solid rgba(212, 175, 55, 0.3)',
    marginLeft: '12px',
    paddingLeft: '24px',
  },
  historyItem: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  historyDot: {
    position: 'absolute',
    left: '-31px', // 24 padding + 1 border + 6 half-width
    top: '4px',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-primary)',
    border: '3px solid var(--color-bg)',
    boxShadow: '0 0 0 1px var(--color-primary)',
  },
  historyTitle: {
    fontSize: '15px',
    fontWeight: '700',
    color: 'var(--color-primary)',
  },
  historyText: {
    fontSize: '14px',
    lineHeight: '1.5',
    color: 'var(--color-text-muted)',
  },
  leadershipGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: '16px',
  },
  leaderCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '8px',
  },
  leaderImgWrapper: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-surface)',
    border: '2px solid var(--color-border)',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4px',
    boxShadow: 'var(--shadow-sm)',
  },
  leaderImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top center',
  },
  leaderRole: {
    fontSize: '14px',
    fontWeight: '700',
    color: 'var(--color-primary)',
  },
  leaderDesc: {
    fontSize: '12px',
    color: 'var(--color-text-muted)',
  }
};
