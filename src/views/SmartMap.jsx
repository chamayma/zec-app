import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Navigation, Clock, Search, ChevronRight, Map as MapIcon, Crosshair, ArrowLeft } from 'lucide-react';

export default function SmartMap() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const allStations = [
    // Mjini / West (Unguja)
    { id: 1, name: 'Skuli ya Kiembe Samaki', area: 'Kiembe Samaki, Jimbo la Dimani', dist: '1.2 km', time: '15 min', mapQuery: 'Kiembe Samaki, Zanzibar' },
    { id: 2, name: 'Skuli ya Mwanakwerekwe', area: 'Mwanakwerekwe, Jimbo la Mwanakwerekwe', dist: '3.4 km', time: '25 min', mapQuery: 'Mwanakwerekwe, Zanzibar' },
    { id: 3, name: 'Uwanja wa Amani', area: 'Amani, Jimbo la Amani', dist: '5.1 km', time: '40 min', mapQuery: 'Amani Stadium, Zanzibar' },
    { id: 4, name: 'Skuli ya Haile Selassie', area: 'Mjini, Jimbo la Kikwajuni', dist: '6.2 km', time: '45 min', mapQuery: 'Haile Selassie School, Zanzibar' },
    { id: 5, name: 'Skuli ya Bububu', area: 'Bububu, Jimbo la Bububu', dist: '8.5 km', time: '55 min', mapQuery: 'Bububu, Zanzibar' },
    { id: 6, name: 'Ofisi ya Shehia Mtoni', area: 'Mtoni, Jimbo la Mtoni', dist: '7.1 km', time: '50 min', mapQuery: 'Mtoni, Zanzibar' },
    { id: 7, name: 'Skuli ya Fuoni', area: 'Fuoni, Jimbo la Fuoni', dist: '4.8 km', time: '35 min', mapQuery: 'Fuoni, Zanzibar' },
    
    // North (Unguja)
    { id: 8, name: 'Skuli ya Nungwi', area: 'Nungwi, Jimbo la Nungwi', dist: '55 km', time: '1h 10m', mapQuery: 'Nungwi, Zanzibar' },
    { id: 9, name: 'Skuli ya Matemwe', area: 'Matemwe, Jimbo la Matemwe', dist: '48 km', time: '1h 5m', mapQuery: 'Matemwe, Zanzibar' },
    
    // South (Unguja)
    { id: 10, name: 'Skuli ya Makunduchi', area: 'Makunduchi, Jimbo la Makunduchi', dist: '65 km', time: '1h 20m', mapQuery: 'Makunduchi, Zanzibar' },
    { id: 11, name: 'Zahanati ya Paje', area: 'Paje, Jimbo la Paje', dist: '50 km', time: '1h', mapQuery: 'Paje, Zanzibar' },
    { id: 12, name: 'Skuli ya Jambiani', area: 'Jambiani, Jimbo la Makunduchi', dist: '53 km', time: '1h 5m', mapQuery: 'Jambiani, Zanzibar' },

    // Pemba
    { id: 13, name: 'Skuli ya Chake Chake', area: 'Chake Chake, Pemba', dist: '120 km', time: 'N/A', mapQuery: 'Chake Chake, Pemba' },
    { id: 14, name: 'Skuli ya Wete', area: 'Wete, Pemba', dist: '145 km', time: 'N/A', mapQuery: 'Wete, Pemba' },
    { id: 15, name: 'Skuli ya Mkoani', area: 'Mkoani, Pemba', dist: '110 km', time: 'N/A', mapQuery: 'Mkoani, Pemba' },
    { id: 16, name: 'Ofisi ya Shehia Micheweni', area: 'Micheweni, Pemba', dist: '160 km', time: 'N/A', mapQuery: 'Micheweni, Pemba' },
  ];

  const [selectedStation, setSelectedStation] = useState(null);
  const [isShowingRoute, setIsShowingRoute] = useState(false);

  const handleDirections = () => {
    if (selectedStation) {
      setIsShowingRoute(!isShowingRoute);
    }
  };

  const filteredStations = allStations.filter(st => 
    st.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    st.area.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectStation = (station) => {
    setSelectedStation(station);
    setShowResults(false);
    setSearchQuery('');
    setIsShowingRoute(false);
  };

  const mapSrc = !selectedStation
    ? `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Zanzibar&t=&z=11&ie=UTF8&iwloc=B&output=embed`
    : isShowingRoute
      ? `https://maps.google.com/maps?width=100%25&height=600&hl=en&saddr=Zanzibar+City&daddr=${encodeURIComponent(selectedStation.mapQuery)}&t=&z=13&ie=UTF8&iwloc=B&output=embed`
      : `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${encodeURIComponent(selectedStation.mapQuery)}+(${encodeURIComponent(selectedStation.name)})&t=&z=15&ie=UTF8&iwloc=B&output=embed`;

  return (
    <div style={styles.container}>
      {/* Real Interactive Map (Google Maps Embed without API key) */}
      <div style={styles.mapLayer}>
        <iframe 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight="0" 
          marginWidth="0" 
          src={mapSrc}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Floating Header & Search */}
      <div style={styles.headerLayer}>
        <button 
          onClick={() => navigate(-1)} 
          style={{background: 'rgba(255,255,255,0.9)', border: '1px solid var(--color-border)', padding: '10px', borderRadius: '50%', cursor: 'pointer', display: 'flex', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginRight: '12px'}}
        >
          <ArrowLeft size={24} color="var(--color-text)" />
        </button>
        <div style={styles.searchBox}>
          <Search size={20} color="var(--color-text-muted)" style={{marginRight: '12px'}} />
          <input 
            type="text" 
            placeholder={t('searchMap')} 
            style={styles.searchInput}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowResults(e.target.value.length > 0);
            }}
          />
        </div>
      </div>

      {/* Crosshair FAB */}
      <button style={styles.locationFab}>
        <Crosshair size={24} color="var(--color-primary)" />
      </button>

      {/* Bottom Sheet */}
      <div style={styles.bottomSheet}>
        <div style={styles.sheetHandle} />
        
        {!showResults ? (
          <>
            {!selectedStation ? (
              <div style={{textAlign: 'center', padding: '20px 0'}}>
                <div style={{...styles.iconCircle, margin: '0 auto 16px auto'}}>
                  <Crosshair size={24} color="#fff" />
                </div>
                <h3 style={styles.stationName}>{t('yourLocation')}</h3>
                <p style={styles.stationDesc}>{t('searchPrompt')}</p>
              </div>
            ) : (
              <>
                <div style={styles.sheetHeader}>
                  <div style={styles.iconCircle}>
                    <MapPin size={24} color="#fff" />
                  </div>
                  <div>
                    <h3 style={styles.stationName}>{selectedStation.name}</h3>
                    <p style={styles.stationDesc}>Kituo, {selectedStation.area}</p>
                  </div>
                </div>

                <div style={styles.statsRow}>
                  <div style={styles.statBox}>
                    <Navigation size={20} color="var(--color-info)" />
                    <div>
                      <p style={styles.statVal}>{selectedStation.dist}</p>
                      <p style={styles.statLbl}>{t('distance')}</p>
                    </div>
                  </div>
                  <div style={styles.statBox}>
                    <Clock size={20} color="var(--color-warning)" />
                    <div>
                      <p style={styles.statVal}>{selectedStation.time}</p>
                      <p style={styles.statLbl}>{t('duration')}</p>
                    </div>
                  </div>
                </div>

                <button style={{
                  ...styles.dirBtn, 
                  backgroundColor: isShowingRoute ? '#E53935' : 'var(--color-primary)',
                  color: isShowingRoute ? '#fff' : '#111'
                }} onClick={handleDirections}>
                  <Navigation size={18} style={{marginRight: 8}} />
                  {isShowingRoute ? t('closeRoute') : t('showRoute')}
                </button>
              </>
            )}
          </>
        ) : (
          <div style={styles.resultsContainer}>
            <h4 style={styles.resultsTitle}>{t('nearbyStations')}</h4>
            <div style={styles.resultsList}>
              {filteredStations.length > 0 ? filteredStations.map(st => (
                <div 
                  key={st.id} 
                  style={{...styles.resultItem, cursor: 'pointer'}}
                  onClick={() => handleSelectStation(st)}
                >
                  <div style={styles.resultIcon}>
                    <MapIcon size={20} color="var(--color-text-muted)" />
                  </div>
                  <div style={styles.resultInfo}>
                    <h5 style={styles.resultName}>{st.name}</h5>
                    <p style={styles.resultArea}>{st.area}</p>
                  </div>
                  <div style={styles.resultMeta}>
                    <span style={styles.resultDist}>{st.dist}</span>
                    <ChevronRight size={16} color="var(--color-text-muted)" />
                  </div>
                </div>
              )) : (
                <p style={{textAlign: 'center', padding: '20px', color: 'var(--color-text-muted)'}}>
                  {t('noStationFound')}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    position: 'relative',
    backgroundColor: '#e0e0e0',
    overflow: 'hidden',
  },
  mapLayer: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 1,
  },
  mapOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.2)', // Lightens the map slightly
    backdropFilter: 'sepia(20%)',
  },
  marker: {
    position: 'absolute',
    transform: 'translate(-50%, -100%)',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  markerPulse: {
    position: 'absolute',
    width: '40px',
    height: '40px',
    backgroundColor: 'rgba(229, 57, 53, 0.3)',
    borderRadius: '50%',
    top: '40%',
    animation: 'pulse 2s infinite',
    zIndex: -1,
  },
  headerLayer: {
    position: 'absolute',
    top: 20,
    left: 16,
    right: 16,
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
  },
  searchBox: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'var(--color-surface)',
    padding: '12px 20px',
    borderRadius: '999px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    border: '1px solid var(--color-border)',
  },
  searchInput: {
    width: '100%',
    border: 'none',
    outline: 'none',
    fontSize: '15px',
    backgroundColor: 'transparent',
    color: 'var(--color-text)',
    fontWeight: '500',
  },
  locationFab: {
    position: 'absolute',
    bottom: '280px',
    right: '16px',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-surface)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    zIndex: 10,
    border: 'none',
  },
  bottomSheet: {
    backgroundColor: 'var(--color-surface)',
    borderTopLeftRadius: '24px',
    borderTopRightRadius: '24px',
    padding: '16px 24px 32px 24px',
    boxShadow: '0 -8px 24px rgba(0,0,0,0.1)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 20,
    minHeight: '260px',
    transition: 'all 0.3s ease',
  },
  sheetHandle: {
    width: '40px',
    height: '5px',
    backgroundColor: 'var(--color-border)',
    borderRadius: '99px',
    margin: '0 auto 20px auto',
  },
  sheetHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px',
  },
  iconCircle: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '16px',
    boxShadow: '0 4px 8px rgba(212, 175, 55, 0.3)',
  },
  stationName: {
    fontSize: '18px',
    fontWeight: '700',
    color: 'var(--color-text)',
    marginBottom: '2px',
  },
  stationDesc: {
    fontSize: '13px',
    color: 'var(--color-text-muted)',
  },
  statsRow: {
    display: 'flex',
    gap: '12px',
    marginBottom: '24px',
  },
  statBox: {
    flex: 1,
    backgroundColor: 'var(--color-bg)',
    padding: '12px 16px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    border: '1px solid var(--color-border)',
  },
  statVal: {
    fontSize: '15px',
    fontWeight: '700',
    color: 'var(--color-text)',
  },
  statLbl: {
    fontSize: '11px',
    color: 'var(--color-text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginTop: '2px',
  },
  dirBtn: {
    width: '100%',
    backgroundColor: 'var(--color-primary)',
    color: '#111',
    padding: '16px',
    borderRadius: '16px',
    fontSize: '15px',
    fontWeight: '800',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    boxShadow: '0 4px 12px rgba(212, 175, 55, 0.4)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  resultsContainer: {
    animation: 'fadeIn 0.3s ease',
  },
  resultsTitle: {
    fontSize: '15px',
    fontWeight: '600',
    marginBottom: '16px',
    color: 'var(--color-text-muted)',
  },
  resultsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  resultItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px',
    borderRadius: '12px',
    border: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-surface)',
  },
  resultIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    backgroundColor: 'var(--color-bg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '12px',
  },
  resultInfo: {
    flex: 1,
  },
  resultName: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--color-text)',
    marginBottom: '2px',
  },
  resultArea: {
    fontSize: '12px',
    color: 'var(--color-text-muted)',
  },
  resultMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  resultDist: {
    fontSize: '12px',
    fontWeight: '600',
    color: 'var(--color-primary)',
  }
};
