import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { Moon, Sun, Languages, Bell, MessageCircleMore } from 'lucide-react';
import logo from '../assets/images/logo.png';

export default function Layout() {
  const { isDark, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <div style={styles.headerWrapper}>
        <header style={styles.header}>
          <div style={styles.logoArea} onClick={() => navigate('/')}>
            <img 
              src={logo} 
              alt="ZEC Logo" 
              style={{ 
                height: '38px', 
                objectFit: 'contain',
                filter: isDark ? 'brightness(0) invert(1)' : 'brightness(0)',
                cursor: 'pointer'
              }} 
            />
          </div>
          <div style={styles.actions}>
            <button style={styles.iconBtn} onClick={toggleLang} title="Toggle Language">
              <div style={styles.langBadge}>
                <Languages size={16} />
                <span style={{ fontSize: '11px', marginLeft: '4px', fontWeight: '800' }}>{lang.toUpperCase()}</span>
              </div>
            </button>
            <button style={styles.iconBtn} onClick={toggleTheme} title="Toggle Theme">
              <div style={styles.actionCircle}>
                {isDark ? <Sun size={18} color="var(--color-primary)" /> : <Moon size={18} />}
              </div>
            </button>
            <button style={styles.iconBtn} title="Notifications">
              <div style={styles.actionCircle}>
                <Bell size={18} />
                <span style={styles.notificationDot} />
              </div>
            </button>
          </div>
        </header>
      </div>

      <main className="main-content" style={{ paddingTop: '20px' }}>
        <Outlet />
      </main>

      <BottomNav />
    </div>
  );
}

const styles = {
  headerWrapper: {
    position: 'sticky',
    top: '16px',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    padding: '0 16px',
    pointerEvents: 'none', // Allow clicks to pass through the margin area
  },
  header: {
    width: '100%',
    height: '64px',
    backgroundColor: 'var(--glass-bg)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid var(--glass-border)',
    borderRadius: '32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 12px 0 20px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
    pointerEvents: 'auto',
  },
  logoArea: {
    display: 'flex',
    alignItems: 'center',
  },
  actions: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  },
  iconBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--color-text)',
    transition: 'transform 0.2s',
  },
  langBadge: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    padding: '6px 10px',
    borderRadius: '20px',
    boxShadow: 'var(--shadow-sm)'
  },
  actionCircle: {
    position: 'relative',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'var(--shadow-sm)'
  },
  notificationDot: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '8px',
    height: '8px',
    backgroundColor: 'var(--color-error)',
    borderRadius: '50%',
    border: '2px solid var(--color-surface)',
  }
};
