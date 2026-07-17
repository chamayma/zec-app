import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  UserCircle, 
  Settings, 
  HelpCircle, 
  MessageSquare, 
  Globe, 
  FileText, 
  ChevronRight, 
  LogOut,
  Calendar,
  Newspaper,
  BarChart3,
  UserSearch,
  Bell,
  Info
} from 'lucide-react';

export default function MoreMenu() {
  const { t, language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  const handleLanguageToggle = () => {
    setLanguage(language === 'sw' ? 'en' : 'sw');
  };

  const menuSections = [
    {
      title: t('electionServices'),
      items: [
        { icon: UserSearch, label: t('verifyInfo'), path: '/verify', color: '#4CAF50' },
        { icon: Calendar, label: t('schedule'), path: '/calendar', color: '#1976D2' },
        { icon: BarChart3, label: t('electionResults'), path: '/results', color: '#9C27B0' },
      ]
    },
    {
      title: t('infoAndHelp'),
      items: [
        { icon: Info, label: t('aboutUs'), path: '/about', color: '#3F51B5' },
        { icon: Newspaper, label: t('newsEvents'), path: '/news', color: '#FF9800' },
        { icon: Bell, label: t('announcements'), path: '/announcements', color: '#F44336' },
        { icon: MessageSquare, label: t('zecBotHelp'), path: '/bot', color: 'var(--color-primary)' },
        { icon: HelpCircle, label: t('faq'), path: '/faq', color: '#607D8B' },
      ]
    },
    {
      title: t('settings'),
      items: [
        { icon: Globe, label: t('changeLang'), action: handleLanguageToggle, color: '#009688' },
        { icon: FileText, label: t('terms'), path: '/terms', color: '#795548' },
      ]
    }
  ];

  return (
    <div style={styles.container}>
      {/* Header Profile Section */}
      <div style={styles.header}>
        <div style={styles.profileRow}>
          <div style={styles.profileInfoArea}>
            <div style={styles.avatarContainer}>
              <UserCircle size={56} color="var(--color-primary)" />
            </div>
            <div style={styles.profileText}>
              <h2 style={styles.profileName}>Mbarouk Othman Mbarouk</h2>
              <p style={styles.profileNumber}>VOTER ID: 847291034</p>
              <button style={styles.viewProfileBtn}>
                {t('viewProfile')}
                <ChevronRight size={14} style={{marginLeft: '2px'}} />
              </button>
            </div>
          </div>
          <button style={styles.settingsBtn}>
            <Settings size={22} color="var(--color-text)" />
          </button>
        </div>
      </div>

      <div style={styles.content}>
        {menuSections.map((section, idx) => (
          <div key={idx} style={styles.section}>
            <h3 style={styles.sectionTitle}>{section.title}</h3>
            <div style={styles.menuCard}>
              {section.items.map((item, itemIdx) => (
                <React.Fragment key={itemIdx}>
                  <div 
                    style={styles.menuItem}
                    onClick={() => item.action ? item.action() : navigate(item.path)}
                  >
                    <div style={styles.itemLeft}>
                      <div style={{...styles.iconBox, backgroundColor: `${item.color}15`}}>
                        <item.icon size={20} color={item.color} />
                      </div>
                      <span style={styles.itemLabel}>{item.label}</span>
                    </div>
                    <ChevronRight size={18} color="var(--color-text-muted)" />
                  </div>
                  {itemIdx < section.items.length - 1 && <div style={styles.divider} />}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}

        <button style={styles.logoutBtn}>
          <LogOut size={18} />
          <span>{t('logout')}</span>
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    paddingBottom: '20px',
  },
  header: {
    padding: '32px 20px 24px 20px',
    backgroundColor: 'var(--color-surface)',
    borderBottom: '1px solid var(--color-border)',
  },
  profileRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  profileInfoArea: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  avatarContainer: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  profileName: {
    fontSize: '18px',
    fontWeight: '800',
    color: 'var(--color-text)',
    marginBottom: '2px',
  },
  profileNumber: {
    fontSize: '13px',
    color: 'var(--color-text-muted)',
    fontWeight: '500',
    marginBottom: '6px',
  },
  viewProfileBtn: {
    background: 'none',
    border: 'none',
    padding: 0,
    color: 'var(--color-primary)',
    fontSize: '13px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  settingsBtn: {
    background: 'var(--color-background)',
    border: '1px solid var(--color-border)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  content: {
    flex: 1,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  sectionTitle: {
    fontSize: '13px',
    fontWeight: '700',
    color: 'var(--color-text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginLeft: '4px',
  },
  menuCard: {
    backgroundColor: 'var(--color-surface)',
    borderRadius: '16px',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--color-border)',
    overflow: 'hidden',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    transition: 'background-color 0.2s',
  },
  itemLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  iconBox: {
    width: '36px',
    height: '36px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemLabel: {
    fontSize: '15px',
    fontWeight: '600',
    color: 'var(--color-text)',
  },
  divider: {
    height: '1px',
    backgroundColor: 'var(--color-border)',
    marginLeft: '64px',
  },
  logoutBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: '100%',
    padding: '16px',
    backgroundColor: '#FFEBEE',
    color: '#D32F2F',
    border: '1px solid #FFCDD2',
    borderRadius: '16px',
    fontSize: '15px',
    fontWeight: '700',
    cursor: 'pointer',
    marginTop: '8px',
  }
};
