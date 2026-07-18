import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ChevronRight, ChevronDown, ArrowLeft, Globe } from 'lucide-react';
import heroImg from '../assets/images/img12.jpeg';

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);

export default function Contact() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ name: '', phone: '', type: 'ulizo', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const messageOptions = [
    { value: 'ulizo', label: t('msgType3') },
    { value: 'lalamiko', label: t('msgType2') },
    { value: 'maoni', label: t('msgType1') },
    { value: 'msaada', label: t('msgType4') } // Repurposed "Pongezi/Msaada" if needed
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', phone: '', type: 'ulizo', message: '' });
    }, 4000);
  };

  return (
    <div style={styles.container}>
      {/* Full Image Header Banner */}
      <div style={{...styles.headerBanner, backgroundImage: `url(${heroImg})`}}>
        <div style={styles.headerOverlay} />
        <button 
          onClick={() => navigate(-1)} 
          style={{position: 'absolute', top: '16px', left: '16px', zIndex: 10, background: 'rgba(0,0,0,0.5)', border: 'none', padding: '8px', borderRadius: '50%', cursor: 'pointer', display: 'flex'}}
        >
          <ArrowLeft size={24} color="#fff" />
        </button>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>{t('contact')}</h1>
          <p style={styles.headerSubtitle}>{t('contactDesc')}</p>
        </div>
      </div>

      <div style={styles.content}>
        
        {/* Quick Contact Cards */}
        <div style={styles.cardsGrid}>
          <a href="tel:0880110221" style={styles.contactCard}>
            <div style={{...styles.iconWrapper, backgroundColor: 'rgba(212, 175, 55, 0.1)'}}>
              <Phone size={18} color="var(--color-primary)" />
            </div>
            <h3 style={styles.cardTitle}>Piga Simu (Bure)</h3>
            <p style={{...styles.cardValue, color: 'var(--color-text)'}}>0880 11 0221</p>
          </a>

          <a href="mailto:info@zec.go.tz" style={styles.contactCard}>
            <div style={{...styles.iconWrapper, backgroundColor: 'rgba(212, 175, 55, 0.1)'}}>
              <Mail size={18} color="var(--color-primary)" />
            </div>
            <h3 style={styles.cardTitle}>Barua Pepe</h3>
            <p style={{...styles.cardValue, color: 'var(--color-text)'}}>info@zec.go.tz</p>
          </a>
        </div>

        {/* Office Details & Socials */}
        <div style={styles.detailsSection}>
          <div style={styles.detailRowGrid}>
            <div style={styles.detailItem}>
              <MapPin size={16} color="var(--color-primary)" style={{minWidth: 16}} />
              <div>
                <h4 style={styles.detailLabel}>{t('headquarters')}</h4>
                <p style={styles.detailText}>P.O. Box 1001, Maisara, ZNZ</p>
              </div>
            </div>
            <div style={styles.detailItem}>
              <Clock size={16} color="var(--color-primary)" style={{minWidth: 16}} />
              <div>
                <h4 style={styles.detailLabel}>{t('workingHours')}</h4>
                <p style={styles.detailText}>{t('workingDays')}</p>
              </div>
            </div>
          </div>
          
          <div style={styles.divider} />
          
          <div style={styles.socialRowCenter}>
            <span style={{fontSize: '12px', fontWeight: '600', marginRight: '8px', color: 'var(--color-text-muted)'}}>Mitandao:</span>
            <a href="https://www.facebook.com/zec_pages" target="_blank" rel="noopener noreferrer" style={{...styles.socialBtn, backgroundColor: '#3b5998'}}>
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/zec_zanzibar" target="_blank" rel="noopener noreferrer" style={{...styles.socialBtn, background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'}}>
              <InstagramIcon />
            </a>
            <a href="https://www.youtube.com/results?search_query=Zec+Online+TV" target="_blank" rel="noopener noreferrer" style={{...styles.socialBtn, backgroundColor: '#FF0000'}}>
              <YoutubeIcon />
            </a>
            <a href="https://www.zec.go.tz" target="_blank" rel="noopener noreferrer" style={{...styles.socialBtn, backgroundColor: 'var(--color-primary)'}}>
              <Globe size={18} color="#fff" />
            </a>
          </div>
        </div>

        {/* Feedback Form */}
        <div style={styles.formContainer}>
          <div style={styles.formHeader}>
            <MessageSquare size={24} color="var(--color-primary)" />
            <h2 style={styles.formTitle}>{t('sendMessage')}</h2>
          </div>
          
          {isSubmitted ? (
            <div style={styles.successState}>
              <CheckCircle2 size={48} color="#4CAF50" style={{marginBottom: 16}} />
              <h3 style={styles.successTitle}>Ujumbe Umepokelewa!</h3>
              <p style={styles.successText}>Asante kwa kuwasiliana nasi. Tutarudi kwako hivi punde.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>{t('fullName')}</label>
                <input 
                  type="text" 
                  style={styles.input} 
                  placeholder={t('fullNamePlaceholder')} 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>{t('phoneNumber')} / Email</label>
                <input 
                  type="text" 
                  style={styles.input} 
                  placeholder={t('phoneNumberPlaceholder')} 
                  required
                  value={formState.phone}
                  onChange={(e) => setFormState({...formState, phone: e.target.value})}
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>{t('msgType')} *</label>
                <div style={{position: 'relative'}} ref={dropdownRef}>
                <div 
                  style={{
                    ...styles.select, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    cursor: 'pointer', 
                    color: formState.type === '' ? '#9CA3AF' : 'var(--color-text)'
                  }}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {formState.type === '' ? t('msgTypePlaceholder') : messageOptions.find(o => o.value === formState.type)?.label}
                  <ChevronDown size={16} color="#9CA3AF" />
                </div>
                {isDropdownOpen && (
                  <div style={{
                    position: 'absolute', top: '100%', left: 0, right: 0, 
                    backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', 
                    borderRadius: '8px', marginTop: '4px', zIndex: 100, overflow: 'hidden', 
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}>
                    {messageOptions.map(opt => (
                      <div 
                        key={opt.value}
                        style={{
                          padding: '10px 12px', 
                          fontSize: '13px',
                          cursor: 'pointer',
                          backgroundColor: formState.type === opt.value ? 'var(--color-primary)' : 'transparent',
                          color: formState.type === opt.value ? 'var(--color-bg)' : 'var(--color-text)'
                        }}
                        onClick={() => { setFormState({...formState, type: opt.value}); setIsDropdownOpen(false); }}
                        onMouseEnter={(e) => {
                          if(formState.type !== opt.value) e.target.style.backgroundColor = 'rgba(212, 175, 55, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                          if(formState.type !== opt.value) e.target.style.backgroundColor = 'transparent';
                        }}
                      >
                        {opt.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>{t('yourMsg')}</label>
                <textarea 
                  style={styles.textarea} 
                  placeholder={t('yourMsgPlaceholder')} 
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                />
              </div>

              <button type="submit" style={styles.submitBtn}>
                {t('sendMsgBtn')}
                <Send size={18} style={{marginLeft: 8}} />
              </button>
            </form>
          )}
        </div>
        
        {/* Bottom padding to account for navigation */}
        <div style={{height: 40}} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    // Removed hardcoded background so it matches the theme
  },
  headerBanner: {
    position: 'relative',
    height: '220px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '20px',
    borderBottomLeftRadius: '24px',
    borderBottomRightRadius: '24px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  headerOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)',
    borderBottomLeftRadius: '32px',
    borderBottomRightRadius: '32px',
    zIndex: 1,
  },
  headerContent: {
    position: 'relative',
    zIndex: 2,
    width: '100%',
  },
  headerTitle: {
    fontSize: '22px',
    fontWeight: '800',
    color: '#fff',
    marginBottom: '2px',
  },
  headerSubtitle: {
    fontSize: '12px',
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: '1.2',
  },
  content: {
    flex: 1,
    padding: '0 16px',
    marginTop: '-16px',
    position: 'relative',
    zIndex: 10,
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginBottom: '16px',
  },
  contactCard: {
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    padding: '12px',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    borderTop: '4px solid var(--color-primary)',
  },
  iconWrapper: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  cardTitle: {
    fontSize: '12px',
    fontWeight: '600',
    color: 'var(--color-text-muted)',
    marginBottom: '2px',
    textAlign: 'center',
  },
  cardValue: {
    fontSize: '14px',
    fontWeight: '700',
    textAlign: 'center',
  },
  detailsSection: {
    backgroundColor: 'var(--color-surface)',
    borderRadius: '12px',
    padding: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    marginBottom: '12px',
    border: '1px solid rgba(0,0,0,0.03)',
  },
  detailRowGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '8px',
  },
  detailItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  detailLabel: {
    fontSize: '11px',
    fontWeight: '700',
    color: 'var(--color-text)',
  },
  detailText: {
    fontSize: '10px',
    color: 'var(--color-text-muted)',
  },
  divider: {
    height: '1px',
    backgroundColor: 'var(--color-border)',
    margin: '8px 0',
  },
  socialRowCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
  },
  socialBtn: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    cursor: 'pointer',
  },
  formContainer: {
    backgroundColor: 'var(--color-surface)',
    borderRadius: '12px',
    padding: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    border: '1px solid rgba(0,0,0,0.03)',
  },
  formHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '12px',
  },
  formTitle: {
    fontSize: '14px',
    fontWeight: '700',
    color: 'var(--color-text)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  label: {
    fontSize: '11px',
    fontWeight: '600',
    color: 'var(--color-text-muted)',
  },
  input: {
    padding: '8px 10px',
    borderRadius: '8px',
    border: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-bg)',
    fontSize: '13px',
    color: 'var(--color-text)',
    outline: 'none',
  },
  select: {
    padding: '8px 10px',
    borderRadius: '8px',
    border: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-bg)',
    fontSize: '13px',
    outline: 'none',
    WebkitAppearance: 'none',
  },
  textarea: {
    padding: '8px 10px',
    borderRadius: '8px',
    border: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-bg)',
    fontSize: '13px',
    color: 'var(--color-text)',
    outline: 'none',
    resize: 'none',
  },
  submitBtn: {
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-bg)',
    padding: '10px',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    marginTop: '4px',
    boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)',
    cursor: 'pointer',
  },
  successState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    textAlign: 'center',
  },
  successTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: 'var(--color-text)',
    marginBottom: '8px',
  },
  successText: {
    fontSize: '15px',
    color: 'var(--color-text-muted)',
  }
};
