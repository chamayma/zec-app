import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, Bell, Calendar, ChevronRight, FileText, Megaphone, Download } from 'lucide-react';

export default function AnnouncementsScreen() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const announcements = [
    {
      id: 1,
      title: 'Uteuzi wa Wasimamizi wa Uchaguzi na Wasimamizi Wasaidizi',
      date: 'Januari 15, 2026',
      type: 'Uteuzi',
      content: 'Tume ya Uchaguzi ya Zanzibar (ZEC) inawatangazia wananchi wote kuwa imefanya uteuzi wa Wasimamizi wa Uchaguzi kwa wilaya zote za Unguja na Pemba...',
      hasAttachment: true,
      icon: Megaphone
    },
    {
      id: 2,
      title: 'Maelekezo kuhusu Uhakiki wa Daftari la Kudumu',
      date: 'Februari 3, 2026',
      type: 'Maelekezo',
      content: 'Wapiga kura wote wanashauriwa kuhakiki taarifa zao kupitia mfumo huu wa mtandao au kufika katika vituo walivyojiandikisha kuanzia tarehe 10 Februari.',
      hasAttachment: false,
      icon: FileText
    },
    {
      id: 3,
      title: 'Kufungwa kwa Dirisha la Uandikishaji Wapiga Kura',
      date: 'Februari 20, 2026',
      type: 'Muhimu',
      content: 'Tunawakumbusha kuwa zoezi la kujiandikisha kwa wapiga kura wapya litafungwa rasmi tarehe 28 Februari 2026. Hakutakuwa na muda wa nyongeza.',
      hasAttachment: false,
      icon: Bell
    },
    {
      id: 4,
      title: 'Orodha ya Vituo Vipya vya Kupigia Kura',
      date: 'Machi 5, 2026',
      type: 'Taarifa',
      content: 'Tume imetangaza vituo vipya 45 vya kupigia kura ili kurahisisha upatikanaji wa huduma kwa wananchi waliopo pembezoni.',
      hasAttachment: true,
      icon: FileText
    }
  ];

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
            <Bell size={24} color="var(--color-primary)" />
          </div>
        </div>
        <h2 style={styles.pageTitle}>{t('announcements') || 'Matangazo'}</h2>
        <p style={styles.pageSubtitle}>{t('announcementsSubtitle')}</p>
      </div>

      <div style={styles.tabContainer}>
        {['all', 'uteuzi', 'muhimu'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              ...styles.tabBtn,
              backgroundColor: activeTab === tab ? 'var(--color-primary)' : 'var(--color-surface)',
              color: activeTab === tab ? '#000' : 'var(--color-text)',
              borderColor: activeTab === tab ? 'var(--color-primary)' : 'var(--color-border)'
            }}
          >
            {tab === 'all' ? t('tabAll') : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div style={styles.listContainer}>
        {announcements.map((item) => (
          <div key={item.id} style={styles.card}>
            <div style={styles.cardHeader}>
              <div style={styles.typeBadge}>
                {item.type}
              </div>
              <span style={styles.dateLabel}>
                <Calendar size={12} style={{marginRight: '4px'}} />
                {item.date}
              </span>
            </div>
            
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={styles.cardContent}>{item.content}</p>
            
            <div style={styles.cardFooter}>
              {item.hasAttachment ? (
                <button style={styles.downloadBtn}>
                  <Download size={16} /> {t('downloadDoc')}
                </button>
              ) : (
                <button style={styles.readMoreBtn}>
                  {t('readFull')} <ChevronRight size={16} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    paddingBottom: '100px',
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
  tabContainer: {
    display: 'flex',
    gap: '8px',
    marginBottom: '24px',
    overflowX: 'auto',
    paddingBottom: '4px'
  },
  tabBtn: {
    padding: '8px 16px',
    borderRadius: '99px',
    border: '1px solid',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  card: {
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderTop: '4px solid var(--color-primary)',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: 'var(--shadow-sm)'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px'
  },
  typeBadge: {
    backgroundColor: 'rgba(212, 175, 55, 0.15)',
    color: 'var(--color-primary)',
    padding: '4px 10px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  dateLabel: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '12px',
    color: 'var(--color-text-muted)'
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: 'var(--color-text)',
    marginBottom: '8px',
    lineHeight: '1.3'
  },
  cardContent: {
    fontSize: '14px',
    color: 'var(--color-text-muted)',
    lineHeight: '1.5',
    marginBottom: '16px'
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'flex-start',
    borderTop: '1px solid var(--color-border)',
    paddingTop: '16px'
  },
  downloadBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'var(--color-surface-variant)',
    color: 'var(--color-text)',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer'
  },
  readMoreBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    background: 'none',
    border: 'none',
    color: 'var(--color-primary)',
    padding: '0',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer'
  }
};
