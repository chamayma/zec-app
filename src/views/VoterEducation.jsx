import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlayCircle, HelpCircle, FileText, ChevronDown, ChevronUp, Download, ArrowRight, ArrowLeft } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

import vidImg1 from '../assets/images/img8.jpeg';
import vidImg2 from '../assets/images/img9.jpeg';
import vidImg3 from '../assets/images/img10.jpeg';
import vidImg4 from '../assets/images/img11.jpeg';

import video1 from '../assets/Video/elimu_ya_wapiga_kura.mp4';
import video2 from '../assets/Video/mzunguuko_wa_uchaguzi.mp4';
import video3 from '../assets/Video/nafasi_ya_sheha_katika_uendelezaji_wa_daftari_la_kudumu_la_wapiga_kura.mp4';
import video4 from '../assets/Video/uwekaji_wazi_wa_orodha_waliopoteza_sifa_kuwa_wapiga_kura_na_waliohamisha_taarifa_zao.mp4';

import katImg1 from '../assets/images/img13.jpeg';
import katImg2 from '../assets/images/img14.jpeg';
import katImg3 from '../assets/images/img15.jpeg';
import katImg4 from '../assets/images/img16.jpeg';
import katImg5 from '../assets/images/img17.jpeg';

export default function VoterEducation() {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('videos');
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedKatuni, setSelectedKatuni] = useState(null);

  const tabs = [
    { id: 'videos', label: 'Video & Katuni', icon: PlayCircle },
    { id: 'faqs', label: 'Maswali (FAQ)', icon: HelpCircle },
    { id: 'guides', label: 'Miongozo', icon: FileText },
  ];

  const videos = [
    { id: 1, title: 'Elimu ya wapiga kura', duration: 'Video', category: 'Elimu', thumb: vidImg1, src: video1 },
    { id: 2, title: 'Mzunguko wa uchaguzi', duration: 'Video', category: 'Mafunzo', thumb: vidImg2, src: video2 },
    { id: 3, title: 'Nafasi ya sheha katika daftari la kudumu la wapiga kura', duration: 'Video', category: 'Mafunzo', thumb: vidImg3, src: video3 },
    { id: 4, title: 'Uwekaji wazi wa orodha ya wapiga kura waliopoteza sifa na waliohamisha taarifa', duration: 'Video', category: 'Elimu', thumb: vidImg4, src: video4 },
  ];

  const katuniList = [
    { id: 1, title: 'Jinsi ya kupiga kura', desc: 'Hatua 5 za kufuata unapofika kituoni.', badge: 'Katuni #1', badgeColor: 'var(--color-text-muted)', img: katImg1 },
    { id: 2, title: 'Wajibu wa mpiga kura', desc: 'Kwanini kura yako ni muhimu kwa taifa letu.', badge: 'Katuni #2', badgeColor: 'var(--color-text-muted)', img: katImg2 },
    { id: 3, title: 'Mambo ya kuzingatia kwa wapiga kura', desc: 'Ratiba na nyaraka muhimu za kubeba.', badge: 'Katuni #3', badgeColor: 'var(--color-text-muted)', img: katImg3 },
    { id: 4, title: 'Nafasi ya Asasi za Kiraia katika uchaguzi', desc: 'Ushiriki wa mashirika katika kuhamasisha amani.', badge: 'Katuni #4', badgeColor: 'var(--color-text-muted)', img: katImg4 },
    { id: 5, title: 'Makosa yanayoweza kuharibu kura', desc: 'Jinsi ya kuhakikisha kura yako inahesabiwa.', badge: 'Muhimu', badgeColor: 'var(--color-error, #d32f2f)', img: katImg5 },
  ];

  const faqs = [
    { id: 1, q: 'Nifanye nini nikihama eneo moja kwenda jengine la Uchaguzi?', a: 'Unatakiwa kufika ofisi ya uchaguzi ya wilaya uliyohamia ukiwa na uthibitisho wa makazi yako mapya ili kubadili kituo chako cha kupigia kura kabla ya daftari kufungwa.' },
    { id: 2, q: 'Kura huhesabiwa vipi?', a: 'Kura huhesabiwa wazi wazi kituoni mara baada ya zoezi la kupiga kura kukamilika. Mawakala wa vyama na waangalizi hushuhudia zoezi zima.' },
    { id: 3, q: 'Nani anaweza kupiga kura?', a: 'Mzanzibari yeyote mwenye umri wa kuanzia miaka 18, mwenye akili timamu, na aliyejiandikisha katika Daftari la Kudumu la Wapiga Kura.' },
    { id: 4, q: 'Nini kitatokea nikipoteza kitambulisho changu?', a: 'Ikiwa utapoteza kitambulisho chako cha Mzanzibari mkaazi, tafadhali fika ofisi za ZIDA kupata kingine haraka iwezekanavyo.' }
  ];

  const guides = [
    { id: 1, title: 'Mwongozo wa Mpiga Kura 2026', size: '2.4 MB', format: 'PDF' },
    { id: 2, title: 'Sheria za Uchaguzi Zanzibar', size: '1.8 MB', format: 'PDF' },
    { id: 3, title: 'Maadili ya Uchaguzi kwa Vyama', size: '3.1 MB', format: 'PDF' },
    { id: 4, title: 'Muongozo wa Waangalizi', size: '1.2 MB', format: 'PDF' }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.headerArea}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <button
            onClick={() => navigate(-1)}
            style={{ background: 'none', border: 'none', padding: 0, marginRight: '12px', cursor: 'pointer', display: 'flex' }}
          >
            <ArrowLeft size={24} color="var(--color-primary)" />
          </button>
          <div style={styles.iconCircle}>
            <FileText size={24} color="var(--color-primary)" />
          </div>
        </div>
        <h2 style={styles.pageTitle}>Elimu ya Mpiga Kura</h2>
        <p style={styles.pageSubtitle}>Pata miongozo, maswali na video za kuelimisha.</p>
      </div>

      <div style={styles.tabContainer}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            style={{
              ...styles.tab,
              borderBottom: activeTab === tab.id ? '3px solid var(--color-primary)' : '3px solid transparent',
              color: activeTab === tab.id ? 'var(--color-primary)' : 'var(--color-text-muted)'
            }}
            onClick={() => setActiveTab(tab.id)}
          >
            <tab.icon size={20} style={{ marginBottom: 4 }} />
            <span style={{ fontSize: '13px', fontWeight: '600' }}>{tab.label}</span>
          </button>
        ))}
      </div>

      <div style={styles.content}>
        {activeTab === 'videos' && (
          <>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={styles.sectionHeading}>Video za Mafunzo</h3>
              <div style={styles.videoGrid}>
                {videos.map(vid => (
                  <div key={vid.id} style={styles.videoCard}>
                    <div style={{ ...styles.videoThumb }}>
                      <video
                        src={vid.src}
                        poster={vid.thumb}
                        controls
                        style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: '#000' }}
                      />
                    </div>
                    <div style={styles.videoInfo}>
                      <span style={styles.category}>{vid.category}</span>
                      <h4 style={styles.videoTitle}>{vid.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={styles.sectionHeading}>Katuni za Elimu</h3>
              <div style={styles.katuniList}>
                {katuniList.map(item => (
                  <div 
                    key={item.id} 
                    style={{...styles.katuniCard, cursor: 'pointer'}}
                    onClick={() => setSelectedKatuni(item.img)}
                  >
                    <div style={{ ...styles.katuniThumb, backgroundImage: `url(${item.img})` }} />
                    <div style={styles.katuniBody}>
                      <h4 style={{ ...styles.katuniTitle, color: isDark ? 'var(--color-primary)' : '#000' }}>{item.title}</h4>
                      <p style={styles.katuniDesc}>{item.desc}</p>
                    </div>
                    <div style={styles.katuniRight}>
                      <span style={{ ...styles.katuniBadge, color: item.badgeColor }}>{item.badge}</span>
                      <ArrowRight size={20} color={isDark ? 'var(--color-primary)' : '#000'} />
                    </div>
                  </div>
                ))}
              </div>
              <p style={styles.katuniFooter}>Unaangalia toleo la hivi punde la katuni za elimu ya mpiga kura.</p>
            </div>
          </>
        )}

        {activeTab === 'faqs' && (
          <div style={styles.faqList}>
            {faqs.map(faq => (
              <div key={faq.id} style={styles.faqItem}>
                <button
                  style={styles.faqHeader}
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                >
                  <span style={{ ...styles.faqQ, color: openFaq === faq.id ? 'var(--color-primary)' : 'var(--color-text)' }}>{faq.q}</span>
                  <div style={{ ...styles.faqIconBox, backgroundColor: openFaq === faq.id ? 'var(--color-primary)' : 'var(--color-border)' }}>
                    {openFaq === faq.id ? <ChevronUp size={16} color={openFaq === faq.id ? '#fff' : (isDark ? 'var(--color-primary)' : '#000')} /> : <ChevronDown size={16} color={isDark ? 'var(--color-primary)' : '#000'} />}
                  </div>
                </button>
                {openFaq === faq.id && (
                  <div style={styles.faqA}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'guides' && (
          <div style={styles.guidesList}>
            {guides.map(guide => (
              <div key={guide.id} style={styles.guideCard}>
                <div style={styles.guideIcon}>
                  <FileText size={24} color="#fff" />
                </div>
                <div style={styles.guideDetails}>
                  <h4 style={styles.guideTitle}>{guide.title}</h4>
                  <p style={styles.guideMeta}>{guide.format} • {guide.size}</p>
                </div>
                <button style={styles.downloadBtn}>
                  <Download size={18} color="var(--color-primary)" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal for Katuni popup */}
      {selectedKatuni && (
        <div style={styles.modalOverlay} onClick={() => setSelectedKatuni(null)}>
          <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
            <img src={selectedKatuni} alt="Katuni Popup" style={styles.modalImg} />
            <button style={styles.closeBtn} onClick={() => setSelectedKatuni(null)}>
              Funga
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '16px',
    paddingBottom: '80px',
  },
  headerArea: {
    textAlign: 'center',
    marginBottom: '24px',
    padding: '20px 0',
  },
  iconCircle: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 12px auto',
  },
  pageTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: 'var(--color-text)',
    marginBottom: '4px',
  },
  pageSubtitle: {
    fontSize: '14px',
    color: 'var(--color-text-muted)',
  },
  tabContainer: {
    display: 'flex',
    borderBottom: '1px solid var(--color-border)',
    marginBottom: '24px',
  },
  tab: {
    flex: 1,
    padding: '12px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'all 0.2s',
    backgroundColor: 'transparent',
    border: 'none',
  },
  content: {
    minHeight: '400px'
  },
  videoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px'
  },
  videoCard: {
    backgroundColor: 'var(--color-surface)',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--color-border)',
    borderTop: '4px solid var(--color-primary)',
    display: 'flex',
    flexDirection: 'column',
  },
  videoThumb: {
    height: '110px',
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    position: 'relative'
  },
  playOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s'
  },
  duration: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.8)',
    color: '#fff',
    fontSize: '11px',
    fontWeight: '600',
    padding: '2px 6px',
    borderRadius: '6px'
  },
  videoInfo: {
    padding: '12px'
  },
  category: {
    fontSize: '10px',
    color: 'var(--color-primary)',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  videoTitle: {
    fontSize: '13px',
    fontWeight: '600',
    marginTop: '4px',
    color: 'var(--color-text)',
    lineHeight: 1.3
  },
  sectionHeading: {
    fontSize: '16px',
    fontWeight: '700',
    color: 'var(--color-text)',
    marginBottom: '12px',
    paddingLeft: '4px',
  },
  katuniList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  katuniCard: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'var(--color-surface)',
    borderRadius: '12px',
    border: '1px solid var(--color-border)',
    borderTop: '4px solid var(--color-primary)',
    padding: '12px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
  },
  katuniThumb: {
    width: '48px',
    height: '48px',
    borderRadius: '8px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginRight: '12px',
    flexShrink: 0,
    backgroundColor: '#eee',
  },
  katuniBody: {
    flex: 1,
    paddingRight: '12px',
  },
  katuniTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#000',
    marginBottom: '4px',
  },
  katuniDesc: {
    fontSize: '12px',
    color: 'var(--color-text-muted)',
    lineHeight: 1.3,
  },
  katuniRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: '4px',
  },
  katuniBadge: {
    fontSize: '11px',
    fontWeight: '700',
  },
  katuniFooter: {
    textAlign: 'center',
    fontSize: '12px',
    color: 'var(--color-text-muted)',
    marginTop: '24px',
    paddingBottom: '16px',
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  faqItem: {
    backgroundColor: 'var(--color-surface)',
    borderRadius: '16px',
    border: '1px solid var(--color-border)',
    borderTop: '4px solid var(--color-primary)',
    boxShadow: 'var(--shadow-sm)',
    overflow: 'hidden'
  },
  faqHeader: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    textAlign: 'left',
    backgroundColor: 'transparent',
    border: 'none',
  },
  faqQ: {
    fontSize: '14px',
    fontWeight: '600',
    paddingRight: '16px',
    lineHeight: 1.4,
    transition: 'color 0.2s',
  },
  faqIconBox: {
    minWidth: '28px',
    height: '28px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
  },
  faqA: {
    padding: '0 16px 16px 16px',
    fontSize: '14px',
    color: 'var(--color-text-muted)',
    lineHeight: 1.5,
  },
  guidesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  guideCard: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'var(--color-surface)',
    borderRadius: '16px',
    border: '1px solid var(--color-border)',
    borderTop: '4px solid var(--color-primary)',
    padding: '12px',
    boxShadow: 'var(--shadow-sm)',
  },
  guideIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    backgroundColor: 'var(--color-secondary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '16px',
  },
  guideDetails: {
    flex: 1,
  },
  guideTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--color-text)',
    marginBottom: '4px',
  },
  guideMeta: {
    fontSize: '12px',
    color: 'var(--color-text-muted)',
  },
  downloadBtn: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.85)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '20px',
  },
  modalContent: {
    position: 'relative',
    maxWidth: '100%',
    maxHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  modalImg: {
    maxWidth: '100%',
    maxHeight: '75vh',
    objectFit: 'contain',
    borderRadius: '16px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
  },
  closeBtn: {
    marginTop: '20px',
    padding: '12px 32px',
    backgroundColor: 'var(--color-primary)',
    color: '#111',
    border: 'none',
    borderRadius: '30px',
    fontWeight: '800',
    fontSize: '14px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(212, 175, 55, 0.4)',
  }
};
