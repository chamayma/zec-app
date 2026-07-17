import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, MapPin, Phone, Menu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function BottomNav() {
  const { t } = useLanguage();

  const navItems = [
    { to: '/', icon: Home, label: t('home') },
    { to: '/education', icon: BookOpen, label: t('education') },
    { to: '/stations', icon: MapPin, label: t('stations') },
    { to: '/contact', icon: Phone, label: t('contact') },
    { to: '/more', icon: Menu, label: t('more') }
  ];

  return (
    <nav style={styles.nav}>
      {navItems.map((item) => (
        <NavLink 
          key={item.to} 
          to={item.to} 
          style={({ isActive }) => ({
            ...styles.navItem,
            color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)'
          })}
        >
          <item.icon size={24} style={{ marginBottom: '4px' }} />
          <span style={styles.label}>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

const styles = {
  nav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '70px',
    backgroundColor: 'var(--color-surface)',
    borderTop: '1px solid var(--color-border)',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 'env(safe-area-inset-bottom)', // for mobile
    zIndex: 1000
  },
  navItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
    transition: 'color 0.2s ease',
  },
  label: {
    fontSize: '11px',
    fontWeight: '500',
  }
};
