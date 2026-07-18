import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Verified, CheckCircle, Search, Map, ChevronRight, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

import raisiImg from '../assets/images/raisi.jpeg';
import othmanImg from '../assets/images/othman.jpeg';
import hamadImg from '../assets/images/hamad.png';
export default function ResultsDashboard() {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [filter, setFilter] = useState('Presidential');

  const filters = ['Presidential', 'Parliamentary', 'Local Council'];

  const candidates = [
    {
      name: 'Dr. Hussein Ali Mwinyi',
      party: 'Chama Cha Mapinduzi (CCM)',
      votes: '380,451',
      percentage: 76.2,
      color: 'var(--color-primary)',
      img: raisiImg
    },
    {
      name: 'Othman Massoud Othman',
      party: 'ACT Wazalendo',
      votes: '98,842',
      percentage: 19.8,
      color: 'var(--color-primary)',
      img: othmanImg
    },
    {
      name: 'Hamad Rashid Mohamed',
      party: 'Alliance for Democratic Change (ADC)',
      votes: '15,472',
      percentage: 3.1,
      color: 'var(--color-primary)',
      img: hamadImg
    }
  ];

  return (
    <div style={styles.container}>
      {/* Top Indicators & Title */}
      <div style={styles.headerRow}>
        <div>
          <div style={styles.liveIndicatorRow}>
            <button 
              onClick={() => navigate(-1)} 
              style={styles.backButton}
            >
              <ArrowLeft size={20} color="var(--color-text)" />
            </button>
            <div style={styles.liveBadge}>
              <span style={styles.liveDot}></span>
              Live Updates
            </div>
            <span style={styles.lastUpdate}>Last updated: 14:32 PM, Oct 28 2026</span>
          </div>
          <h2 style={{...styles.pageTitle, color: isDark ? 'var(--color-primary)' : 'var(--color-text)'}}>General Election Results</h2>
        </div>
        
        <div style={styles.filterRow}>
          {filters.map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              style={{
                ...styles.filterBtn, 
                backgroundColor: filter === f ? 'var(--color-primary)' : 'var(--color-surface-variant)',
                color: filter === f ? 'var(--color-bg)' : 'var(--color-text)'
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* National Summary Hero */}
      <div style={styles.heroCard}>
        <div style={styles.heroContentGrid}>
          <div>
            <p style={styles.heroLabel}>National Progress</p>
            <div style={styles.heroMainStat}>
              <span style={styles.heroPercentage}>98.4%</span>
              <span style={styles.heroSubStat}>of votes tallied</span>
            </div>
            <div style={styles.progressBarBg}>
              <div style={{...styles.progressBarFill, width: '98.4%'}}></div>
            </div>
            <p style={styles.heroReporting}>
              <Verified size={16} />
              4,582 of 4,657 Polling Stations reporting
            </p>
          </div>
          
          <div style={styles.projectedWinnerCard}>
            <p style={styles.projectedLabel}>Current Projected Winner</p>
            <div style={styles.projectedContent}>
              <div style={styles.projectedAvatar}>
                <img src={candidates[0].img} alt="Winner" style={styles.avatarImg} />
              </div>
              <div>
                <h3 style={styles.projectedName}>Dr. Hussein Mwinyi</h3>
                <p style={styles.projectedParty}>CCM • 76.2% of votes</p>
                <div style={styles.leadingBadge}>
                  <CheckCircle size={12} /> Leading
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.heroDecor}></div>
      </div>

      {/* Main Content Grid */}
      <div style={styles.bentoGrid}>
        
        {/* Candidate Breakdown (Left) */}
        <div style={styles.mainColumn}>
          <div style={styles.sectionHeader}>
            <h3 style={{...styles.sectionTitle, color: isDark ? 'var(--color-primary)' : 'var(--color-text)'}}>Candidate Breakdown</h3>
            <div style={styles.searchBox}>
              <Search size={16} style={styles.searchIcon} color="var(--color-text-muted)" />
              <input type="text" placeholder="Find candidate..." style={styles.searchInput} />
            </div>
          </div>
          
          <div style={styles.candidateList}>
            {candidates.map((cand, idx) => (
              <div key={idx} style={styles.candidateCard}>
                <div style={styles.candAvatarWrap}>
                  <img src={cand.img} alt={cand.name} style={styles.avatarImg} />
                </div>
                <div style={styles.candDetails}>
                  <div style={styles.candTopRow}>
                    <div>
                      <h4 style={{...styles.candName, color: isDark ? 'var(--color-primary)' : 'var(--color-text)'}}>{cand.name}</h4>
                      <p style={styles.candParty}>{cand.party}</p>
                    </div>
                    <div style={styles.candStatsRight}>
                      <p style={styles.candPercent}>{cand.percentage}%</p>
                      <p style={styles.candVotesCount}>{cand.votes} votes</p>
                    </div>
                  </div>
                  <div style={styles.candProgressBarBg}>
                    <div style={{
                      ...styles.candProgressBarFill, 
                      width: `${cand.percentage}%`,
                      backgroundColor: cand.color
                    }}></div>
                  </div>
                </div>
                <ChevronRight size={20} color="var(--color-primary)" style={styles.candArrow} />
              </div>
            ))}
          </div>
        </div>

        {/* Regional Results (Right) */}
        <div style={styles.sideColumn}>
          <h3 style={{...styles.sectionTitle, color: isDark ? 'var(--color-primary)' : 'var(--color-text)'}}>Regional Results</h3>
          <h3 style={{...styles.sectionTitle, color: isDark ? 'var(--color-primary)' : 'var(--color-text)'}}>{t('regionalResults') || 'Regional Results'}</h3>
          
          <div style={styles.regionalCard}>
            <div style={styles.mapPlaceholder}>
              <Map size={48} color="rgba(0,0,0,0.1)" style={{position:'absolute'}} />
              <div style={styles.mapImage} />
              <div style={styles.mapOverlayLabel}>
                <span style={styles.mapLabelTiny}>{t('viewing')}</span>
                <span style={styles.mapLabelBold}>{t('allRegions')}</span>
              </div>
            </div>
            
            <div style={styles.regionalStats}>
              {/* Unguja */}
              <div style={styles.regionRow}>
                <div style={styles.regionLeft}>
                  <div style={{...styles.regionDot, backgroundColor: 'var(--color-primary)'}}></div>
                  <span style={styles.regionName}>Unguja</span>
                </div>
                <div style={styles.regionRight}>
                  <span style={styles.regionPercent}>78.5%</span>
                  <span style={styles.regionReporting}>{t('reporting')}: 100%</span>
                </div>
              </div>
              <div style={styles.candProgressBarBg}>
                <div style={{...styles.candProgressBarFill, width: '78.5%', backgroundColor: 'var(--color-primary)'}}></div>
              </div>

              {/* Pemba */}
              <div style={styles.regionRow}>
                <div style={styles.regionLeft}>
                  <div style={{...styles.regionDot, backgroundColor: 'var(--color-secondary)'}}></div>
                  <span style={styles.regionName}>Pemba</span>
                </div>
                <div style={styles.regionRight}>
                  <span style={styles.regionPercent}>71.2%</span>
                  <span style={styles.regionReporting}>Reporting: 96%</span>
                </div>
              </div>
              <div style={styles.candProgressBarBg}>
                <div style={{...styles.candProgressBarFill, width: '71.2%', backgroundColor: 'var(--color-secondary)'}}></div>
              </div>
            </div>
          </div>

          <div style={styles.certifiedCard}>
            <Verified size={32} color="var(--color-primary)" style={{marginBottom: '16px', opacity: 0.8}} />
            <h4 style={styles.certifiedTitle}>Certified Results</h4>
            <p style={styles.certifiedDesc}>
              These results are authenticated and certified by the Zanzibar Electoral Commission (ZEC) in accordance with the Electoral Act.
            </p>
            <button style={styles.certifiedBtn}>
              View Official Gazette <ArrowUpRight size={14} />
            </button>
            <div style={styles.certifiedDecor}></div>
          </div>
        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '24px 16px',
    maxWidth: '1200px',
    margin: '0 auto',
    paddingBottom: '100px'
  },
  headerRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '24px'
  },
  liveIndicatorRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '8px',
    flexWrap: 'wrap'
  },
  backButton: {
    background: 'none',
    border: 'none',
    padding: '4px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },
  liveBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '2px 10px',
    borderRadius: '99px',
    backgroundColor: 'rgba(34, 197, 94, 0.15)',
    color: 'rgb(22, 163, 74)',
    fontSize: '12px',
    fontWeight: '600'
  },
  liveDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: 'rgb(22, 163, 74)',
    animation: 'pulse 1.5s infinite'
  },
  lastUpdate: {
    fontSize: '12px',
    color: 'var(--color-text-muted)'
  },
  pageTitle: {
    fontSize: '28px',
    fontWeight: '800',
    color: 'var(--color-text)',
    lineHeight: 1.2
  },
  filterRow: {
    display: 'flex',
    gap: '8px',
    overflowX: 'auto',
    paddingBottom: '4px'
  },
  filterBtn: {
    padding: '8px 16px',
    borderRadius: '99px',
    fontSize: '14px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s'
  },
  heroCard: {
    background: 'linear-gradient(135deg, #1c1b1b 0%, #313030 100%)',
    borderRadius: '16px',
    padding: '24px',
    color: '#fff',
    marginBottom: '24px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)'
  },
  heroContentGrid: {
    position: 'relative',
    zIndex: 10,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
    alignItems: 'center'
  },
  heroLabel: {
    color: '#c8c6c5',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '8px',
    fontWeight: '600'
  },
  heroMainStat: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '8px',
    marginBottom: '16px'
  },
  heroPercentage: {
    fontSize: '56px',
    fontWeight: '800',
    letterSpacing: '-0.05em'
  },
  heroSubStat: {
    color: '#c8c6c5',
    fontSize: '18px'
  },
  progressBarBg: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    height: '12px',
    borderRadius: '99px',
    overflow: 'hidden'
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#fff'
  },
  heroReporting: {
    marginTop: '16px',
    color: '#c8c6c5',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  projectedWinnerCard: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(12px)',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid rgba(255,255,255,0.1)'
  },
  projectedLabel: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: '14px',
    marginBottom: '16px'
  },
  projectedContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  projectedAvatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '4px solid rgba(255,255,255,0.2)',
    flexShrink: 0
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  projectedName: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '4px'
  },
  projectedParty: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: '14px'
  },
  leadingBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    marginTop: '8px',
    fontWeight: '600'
  },
  heroDecor: {
    position: 'absolute',
    right: '-80px',
    bottom: '-80px',
    width: '320px',
    height: '320px',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    zIndex: 1
  },
  bentoGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '24px',
  },
  mainColumn: {
    flex: '1 1 60%',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  sideColumn: {
    flex: '1 1 35%',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8px'
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: 'var(--color-text)'
  },
  searchBox: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  searchIcon: {
    position: 'absolute',
    left: '12px'
  },
  searchInput: {
    padding: '6px 16px 6px 36px',
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: '99px',
    fontSize: '14px',
    width: '180px',
    color: 'var(--color-text)',
    outline: 'none'
  },
  candidateList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  candidateCard: {
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderTop: '4px solid var(--color-primary)',
    padding: '16px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    transition: 'box-shadow 0.2s',
    cursor: 'pointer'
  },
  candAvatarWrap: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: 'var(--color-surface-variant)',
    flexShrink: 0
  },
  candDetails: {
    flex: 1
  },
  candTopRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '12px'
  },
  candName: {
    fontSize: '18px',
    fontWeight: '700',
    color: 'var(--color-text)',
    marginBottom: '2px'
  },
  candParty: {
    fontSize: '14px',
    color: 'var(--color-text-muted)'
  },
  candStatsRight: {
    textAlign: 'right'
  },
  candPercent: {
    fontSize: '18px',
    fontWeight: '700',
    color: 'var(--color-text)',
    marginBottom: '2px'
  },
  candVotesCount: {
    fontSize: '12px',
    color: 'var(--color-text-muted)'
  },
  candProgressBarBg: {
    width: '100%',
    height: '8px',
    backgroundColor: 'var(--color-surface-variant)',
    borderRadius: '99px',
    overflow: 'hidden'
  },
  candProgressBarFill: {
    height: '100%',
    transition: 'width 1s ease-in-out'
  },
  candArrow: {
    opacity: 0.5,
    transition: 'opacity 0.2s'
  },
  regionalCard: {
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderTop: '4px solid var(--color-primary)',
    borderRadius: '16px',
    overflow: 'hidden'
  },
  mapPlaceholder: {
    height: '192px',
    backgroundColor: 'var(--color-surface-variant)',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapImage: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAl93dWdWfW-hGtsy8cuy7o3YxOW4GW4ToJwprX-nSTaDWrvsfFiWYiRExW05yQ2AtAs4GJRsjp6BWE9K3_bAkRSgBTNsise-CVqf_Um8RQ9UkYVhDKWylnS6I_wRA0aBmZNmwif9ieTDuXq2WkNnwiAo-vKtTPXcyjpUhAYFdTuAZQP_vAtjTraGJRguzHf5iS_h_E3Q_LPN8qh55BvV00yQ5AP46ZmAgJyB5oeltD8I5T6Mh2HtrVSG4IL7huU3vD8rgi06Ipur3D")',
    opacity: 0.8,
    position: 'absolute',
    inset: 0
  },
  mapOverlayLabel: {
    position: 'absolute',
    bottom: '16px',
    left: '16px',
    backgroundColor: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(4px)',
    padding: '6px 12px',
    borderRadius: '8px',
    border: '1px solid rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column'
  },
  mapLabelTiny: {
    fontSize: '10px',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#666',
    letterSpacing: '0.05em'
  },
  mapLabelBold: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#000'
  },
  regionalStats: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  regionRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px'
  },
  regionLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  regionDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%'
  },
  regionName: {
    fontWeight: '500',
    color: 'var(--color-text)',
    fontSize: '14px'
  },
  regionRight: {
    textAlign: 'right'
  },
  regionPercent: {
    fontWeight: '700',
    fontSize: '14px',
    color: 'var(--color-text)'
  },
  regionReporting: {
    display: 'block',
    fontSize: '10px',
    textTransform: 'uppercase',
    color: 'var(--color-text-muted)',
    marginTop: '2px'
  },
  certifiedCard: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '24px',
    borderRadius: '16px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
  },
  certifiedTitle: {
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '8px'
  },
  certifiedDesc: {
    fontSize: '14px',
    color: '#c8c6c5',
    lineHeight: 1.5,
    marginBottom: '16px'
  },
  certifiedBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '12px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: '#c8c6c5',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer'
  },
  certifiedDecor: {
    position: 'absolute',
    top: '-16px',
    right: '-16px',
    width: '96px',
    height: '96px',
    borderRadius: '50%',
    border: '8px solid rgba(255,255,255,0.05)'
  }
};
