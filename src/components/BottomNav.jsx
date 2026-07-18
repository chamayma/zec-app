import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Home, BookOpen, MapPin, Menu, Bot, Phone } from 'lucide-react';
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
      <nav style={styles.container}>
        {/* Left Items */}
        <div style={styles.sideGroup}>
          {leftItems.map((item) => (
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

        {/* Center Floating Chatbot */}
        <div style={styles.fabWrapper}>
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
            <Bot size={30} />
          </button>
          <span style={{
            ...styles.fabLabel,
            color: isBotActive ? 'var(--color-primary)' : 'var(--color-text-muted)'
          }}>
            {t('zecBotHelp') || 'ZEC Bot'}
          </span>
        </div>

        {/* Right Items */}
        <div style={styles.sideGroup}>
          {rightItems.map((item) => (
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
    height: '110px', // Space for the floating pill and the popped-out button
    pointerEvents: 'none', // Allow clicking through the wrapper
    zIndex: 1000,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 'calc(20px + env(safe-area-inset-bottom))', // Hover 20px above bottom
  },
  container: {
    width: 'calc(100% - 32px)', // 16px margin on each side
    height: '72px',
    backgroundColor: 'var(--glass-bg)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid var(--glass-border)',
    borderRadius: '36px', // Perfect pill shape
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 8px',
    boxShadow: '0 10px 32px rgba(0,0,0,0.1)',
    pointerEvents: 'auto', // Re-enable clicks on the nav bar itself
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
  fabWrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80px',
    height: '100%',
  },
  fab: {
    position: 'absolute',
    top: '-32px', // Pop out above the pill
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    border: '4px solid var(--color-bg)', // Creates a cutout illusion against app background
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  fabLabel: {
    position: 'absolute',
    bottom: '8px',
    fontSize: '11px',
    fontWeight: '700',
    whiteSpace: 'nowrap',
  }
};
