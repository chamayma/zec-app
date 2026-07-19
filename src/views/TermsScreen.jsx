import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, FileText, Shield, UserCheck, Lock, AlertCircle } from 'lucide-react';

export default function TermsScreen() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.headerArea}>
        <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
          <button 
            onClick={() => navigate(-1)} 
            style={{background: 'none', border: 'none', padding: 0, marginRight: '12px', cursor: 'pointer', display: 'flex'}}
          >
            <ArrowLeft size={24} color="var(--color-primary)" />
          </button>
          <div style={styles.iconCircle}>
            <FileText size={24} color="var(--color-primary)" />
          </div>
        </div>
        <h2 style={styles.pageTitle}>{t('terms') || 'Vigezo na Masharti'}</h2>
        <p style={styles.pageSubtitle}>{t('termsSubtitle')}</p>
      </div>

      <div style={styles.contentCard}>
        <p style={styles.lastUpdated}>{t('lastUpdated')}</p>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <Shield size={20} color="var(--color-primary)" />
            <h3 style={styles.sectionTitle}>{t('termsIntroTitle')}</h3>
          </div>
          <p style={styles.paragraph}>
            {t('termsIntroDesc')}
          </p>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <UserCheck size={20} color="var(--color-primary)" />
            <h3 style={styles.sectionTitle}>{t('termsDataTitle')}</h3>
          </div>
          <p style={styles.paragraph}>
            {t('termsDataDesc')}
          </p>
          <ul style={styles.list}>
            <li>Hatutunzi kumbukumbu za utafutaji wako nje ya mfumo wetu salama.</li>
            <li>Hatugawi wala kuuza taarifa zako kwa wahusika wa tatu.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <Lock size={20} color="var(--color-primary)" />
            <h3 style={styles.sectionTitle}>{t('termsSecurityTitle')}</h3>
          </div>
          <p style={styles.paragraph}>
            {t('termsSecurityDesc')}
          </p>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <AlertCircle size={20} color="var(--color-primary)" />
            <h3 style={styles.sectionTitle}>{t('termsLawTitle')}</h3>
          </div>
          <p style={styles.paragraph}>
            {t('termsLawDesc')}
          </p>
        </section>
      </div>

      <div style={styles.footer}>
        <button style={styles.acceptBtn} onClick={() => navigate(-1)}>
          {t('iAgree')}
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '8px 20px 100px 20px',
  },
  headerArea: {
    marginBottom: '24px',
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
  contentCard: {
    backgroundColor: 'var(--color-surface)',
    borderRadius: '16px',
    padding: '24px',
    border: '1px solid var(--color-border)',
    boxShadow: 'var(--shadow-sm)'
  },
  lastUpdated: {
    fontSize: '12px',
    fontWeight: '600',
    color: 'var(--color-primary)',
    marginBottom: '24px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  section: {
    marginBottom: '24px',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '12px',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: 'var(--color-text)',
  },
  paragraph: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: 'var(--color-text-muted)',
    marginBottom: '12px',
  },
  list: {
    paddingLeft: '24px',
    fontSize: '15px',
    lineHeight: '1.6',
    color: 'var(--color-text-muted)',
    margin: 0,
  },
  footer: {
    marginTop: '32px',
    display: 'flex',
    justifyContent: 'center',
  },
  acceptBtn: {
    backgroundColor: 'var(--color-primary)',
    color: '#000',
    border: 'none',
    padding: '16px 32px',
    borderRadius: '99px',
    fontSize: '16px',
    fontWeight: '700',
    width: '100%',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(212, 175, 55, 0.2)'
  }
};
