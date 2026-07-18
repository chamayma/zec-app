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
      <header style={styles.header}>
        <div style={styles.logoArea}>
          <img 
            src={logo} 
            alt="ZEC Logo" 
            style={{ 
              height: '56px', 
              objectFit: 'contain',
              filter: isDark ? 'brightness(0) invert(1)' : 'brightness(0)'
            }} 
          />
        </div>
        <div style={styles.actions}>
          <button style={styles.iconBtn} onClick={toggleLang} title="Toggle Language">
            <Languages size={20} />
            <span style={{ fontSize: '12px', marginLeft: '4px', fontWeight: 'bold' }}>{lang.toUpperCase()}</span>
          </button>
          <button style={styles.iconBtn} onClick={toggleTheme} title="Toggle Theme">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button style={styles.iconBtn} title="Notifications">
            <Bell size={20} />
          </button>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <button style={styles.fab} onClick={() => navigate('/bot')} title="ZEC Bot">
        <MessageCircleMore size={28} color="#000" />
      </button>

      <BottomNav />
    </div>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 20px',
    backgroundColor: 'var(--glass-bg)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--glass-border)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logoArea: {
    display: 'flex',
    alignItems: 'center',
  },
  actions: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
  },
  iconBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--color-text)',
    padding: '4px',
    borderRadius: '50%',
    transition: 'background-color 0.2s',
  },
  fab: {
    position: 'fixed',
    bottom: '90px',
    right: '20px',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'var(--shadow-glow)',
    zIndex: 999,
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    animation: 'float 3s ease-in-out infinite',
  },
  fabIconBg: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabText: {
    fontSize: '14px',
    fontWeight: '600',
  }
};
