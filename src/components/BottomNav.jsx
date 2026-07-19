import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Home, BookOpen, MapPin, Menu, MessageCircleMore, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function BottomNav() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const leftItems = [
    { to: '/', icon: Home, label: t('home') },
    { to: '/education', icon: BookOpen, label: t('education') },
  ];

  const rightItems = [
    { to: '/stations', icon: MapPin, label: t('stations') },
    { to: '/contact', icon: Phone, label: t('contact') },
    { to: '/more', icon: Menu, label: t('more') }
  ];

  const isBotActive = location.pathname === '/bot';

  return (
    <div style={styles.wrapper}>
      {/* Right Corner Floating Chatbot Above Nav */}
      <div style={styles.floatingBotContainer}>
        <button 
          className={`jumping-bot ${isBotActive ? 'active' : ''}`}
          onClick={() => navigate('/bot')}
          style={{
            ...styles.fab,
            backgroundColor: isBotActive ? 'var(--color-bg)' : 'var(--color-primary)',
            color: isBotActive ? 'var(--color-primary)' : '#111',
            boxShadow: isBotActive 
              ? 'var(--shadow-lg)' 
              : '0 8px 24px rgba(229, 193, 88, 0.4)',
          }}
        >
          <MessageCircleMore size={30} />
        </button>
      </div>

      <nav style={styles.container}>
        {/* Normal Nav Items */}
        <div style={{ display: 'flex', flex: 1, justifyContent: 'space-evenly', alignItems: 'center', height: '100%' }}>
          {[...leftItems, ...rightItems].map((item) => (
            <NavLink 
              key={item.to} 
              to={item.to} 
              style={({ isActive }) => ({
                ...styles.navItem,
                color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)',
                transform: isActive ? 'scale(1.05)' : 'scale(1)'
              })}
            >
              <item.icon size={24} style={{ marginBottom: '4px' }} />
              <span style={styles.label}>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}

const styles = {
  wrapper: {
    position: 'fixed',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    maxWidth: '600px',
    pointerEvents: 'none',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingBottom: 'env(safe-area-inset-bottom)',
  },
  floatingBotContainer: {
    padding: '0 16px 16px 0',
    pointerEvents: 'auto',
  },
  container: {
    width: '100%',
    height: '72px',
    backgroundColor: 'var(--glass-bg)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderTop: '1px solid var(--glass-border)',
    borderBottom: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderRadius: '24px 24px 0 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 8px',
    boxShadow: '0 -10px 32px rgba(0,0,0,0.1)',
    pointerEvents: 'auto',
  },
  sideGroup: {
    display: 'flex',
    flex: 1,
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  navItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    flex: 1,
    height: '100%',
  },
  label: {
    fontSize: '11px',
    fontWeight: '600',
    marginTop: '2px',
  },
  fab: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  }
};
