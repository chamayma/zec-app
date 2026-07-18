import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { ArrowLeft, CalendarDays, CheckCircle2, Clock, MapPin, Calendar } from 'lucide-react';

export default function CalendarScreen() {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      title: 'Uandikishaji Wapiga Kura',
      date: '10 Mei - 24 Mei, 2026',
      status: 'completed',
      desc: 'Zoezi la kuandikisha wapiga kura wapya na kuboresha daftari la kudumu.',
    },
    {
      id: 2,
      title: 'Uhakiki wa Daftari la Wapiga Kura',
      date: '15 Juni - 25 Juni, 2026',
      status: 'completed',
      desc: 'Wapiga kura kuhakiki taarifa zao katika vituo walivyojiandikisha.',
    },
    {
      id: 3,
      title: 'Uteuzi wa Wagombea',
      date: '10 Agosti, 2026',
      status: 'active',
      desc: 'Tume kupitisha majina ya wagombea kwa ngazi zote za uchaguzi.',
    },
    {
      id: 4,
      title: 'Kampeni za Uchaguzi',
      date: '15 Agosti - 24 Oktoba, 2026',
      status: 'upcoming',
      desc: 'Vyama vya siasa kufanya mikutano ya kampeni nchi nzima.',
    },
    {
      id: 5,
      title: 'Siku ya Kupiga Kura',
      date: '25 Oktoba, 2026',
      status: 'upcoming',
      desc: 'Wananchi kupiga kura kuchagua viongozi kuanzia saa 1:00 asubuhi hadi 10:00 jioni.',
    },
    {
      id: 6,
      title: 'Kutangaza Matokeo',
      date: '26 Oktoba - 28 Oktoba, 2026',
      status: 'upcoming',
      desc: 'Majumuisho na utangazaji wa matokeo ya uchaguzi mkuu.',
    }
  ];

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes pulseDot {
          0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(212, 175, 55, 0); }
          100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
        }
      `}</style>
      <div style={styles.headerArea}>
        <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
          <button 
            onClick={() => navigate(-1)} 
            style={{background: 'none', border: 'none', padding: 0, marginRight: '12px', cursor: 'pointer', display: 'flex'}}
          >
            <ArrowLeft size={24} color="var(--color-primary)" />
          </button>
          <div style={styles.iconCircle}>
            <Calendar size={24} color="var(--color-primary)" />
          </div>
        </div>
        <h2 style={{...styles.pageTitle, color: isDark ? 'var(--color-primary)' : 'var(--color-text)'}}>{t('electionCalendar') || 'Ratiba ya Uchaguzi'}</h2>
        <p style={styles.pageSubtitle}>{t('calendarSubtitle')}</p>
      </div>

      <div style={styles.timeline}>
        {events.map((ev, index) => {
          const isCompleted = ev.status === 'completed';
          const isActive = ev.status === 'active';
          
          return (
            <div key={ev.id} style={styles.timelineItem}>
              <div style={styles.timelineLine}>
                <div style={{
                  ...styles.timelineDot,
                  backgroundColor: isActive ? 'var(--color-primary)' : isCompleted ? 'var(--color-success)' : 'var(--color-surface)',
                  borderColor: isActive ? 'var(--color-primary)' : isCompleted ? 'var(--color-success)' : 'var(--color-border)',
                }}>
                  {isCompleted && <CheckCircle2 size={14} color="#fff" />}
                  {isActive && <div style={styles.activePulse} />}
                </div>
                {index < events.length - 1 && (
                  <div style={{
                    ...styles.lineTrail,
                    backgroundColor: isCompleted ? 'var(--color-success)' : 'var(--color-border)'
                  }} />
                )}
              </div>
              
              <div style={{
                ...styles.eventCard,
                borderColor: isActive ? 'var(--color-primary)' : 'var(--color-border)',
                boxShadow: isActive ? '0 4px 12px rgba(212, 175, 55, 0.2)' : '0 2px 4px rgba(0,0,0,0.02)'
              }}>
                <div style={styles.dateLabel}>
                  <Clock size={14} style={{marginRight: '6px'}} />
                  <span>{ev.date}</span>
                </div>
                <h3 style={{...styles.eventTitle, color: isDark ? 'var(--color-primary)' : 'var(--color-text)'}}>{ev.title}</h3>
                <p style={styles.eventDesc}>{ev.desc}</p>
                {isActive && (
                  <div style={styles.activeBadge}>
                    Inaendelea Sasa
                  </div>
                )}
              </div>
            </div>
          );
        })}
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
    marginBottom: '32px',
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
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
  },
  timelineItem: {
    display: 'flex',
    gap: '16px',
  },
  timelineLine: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '24px',
  },
  timelineDot: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    border: '2px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 2,
  },
  activePulse: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-primary)',
    animation: 'pulseDot 2s infinite',
  },
  lineTrail: {
    flex: 1,
    width: '2px',
    minHeight: '40px',
    marginTop: '-4px',
    marginBottom: '-4px',
    zIndex: 1,
  },
  eventCard: {
    flex: 1,
    backgroundColor: 'var(--color-surface)',
    border: '1px solid',
    borderRadius: '16px',
    padding: '16px',
    marginBottom: '24px',
    position: 'relative',
  },
  dateLabel: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '12px',
    color: 'var(--color-primary)',
    fontWeight: '600',
    marginBottom: '8px',
  },
  eventTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: 'var(--color-text)',
    marginBottom: '8px',
  },
  eventDesc: {
    fontSize: '13px',
    color: 'var(--color-text-muted)',
    lineHeight: '1.5',
  },
  activeBadge: {
    display: 'inline-block',
    marginTop: '12px',
    backgroundColor: 'rgba(212, 175, 55, 0.15)',
    color: 'var(--color-primary)',
    padding: '4px 10px',
    borderRadius: '99px',
    fontSize: '11px',
    fontWeight: '700',
  }
};
