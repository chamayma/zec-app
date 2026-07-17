import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Newspaper, Calendar, ChevronRight, Share2, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Import images for news
import newsImg1 from '../assets/images/img3.jpeg';
import newsImg2 from '../assets/images/img4.jpeg';
import newsImg3 from '../assets/images/img5.jpeg';
import newsImg4 from '../assets/images/img1.jpeg';

export default function NewsScreen() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const newsItems = [
    {
      id: 1,
      title: 'Tume yatangaza tarehe rasmi ya Uchaguzi Mkuu',
      date: 'Oktoba 12, 2025',
      category: 'Matangazo',
      reads: '2.4k',
      img: newsImg1,
      excerpt: 'Mwenyekiti wa Tume ya Uchaguzi ametangaza leo kuwa uchaguzi mkuu utafanyika mwezi Oktoba 2026. Wananchi wametakiwa kujiandaa.'
    },
    {
      id: 2,
      title: 'Uandikishaji Wapiga Kura kuanza rasmi Pemba',
      date: 'Novemba 5, 2025',
      category: 'Habari',
      reads: '1.8k',
      img: newsImg2,
      excerpt: 'Zoezi la uandikishaji wapiga kura kwenye Daftari la Kudumu linatarajiwa kuanza wiki ijayo kisiwani Pemba.'
    },
    {
      id: 3,
      title: 'Elimu ya Mpiga Kura yafikia vijiji 100 Unguja',
      date: 'Desemba 1, 2025',
      category: 'Elimu',
      reads: '956',
      img: newsImg3,
      excerpt: 'Maafisa wa ZEC wanaendelea na kampeni ya kutoa elimu kwa wapiga kura, ambapo zaidi ya vijiji 100 vimefikiwa hadi sasa.'
    },
    {
      id: 4,
      title: 'Kikao cha wadau wa uchaguzi chafanyika',
      date: 'Desemba 15, 2025',
      category: 'Mikutano',
      reads: '1.2k',
      img: newsImg4,
      excerpt: 'Vyama vya siasa na asasi za kiraia wamekutana na ZEC kujadili kanuni mpya za uchaguzi mkuu ujao.'
    }
  ];

  const featuredNews = newsItems[0];
  const regularNews = newsItems.slice(1);

  return (
    <div style={styles.container}>
      <div style={styles.headerArea}>
        <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
          <button 
            onClick={() => navigate(-1)} 
            style={{background: 'none', border: 'none', padding: 0, marginRight: '12px', cursor: 'pointer', display: 'flex'}}
          >
            <ArrowLeft size={24} color="var(--color-primary)" />
          </button>
          <div style={styles.iconCircle}>
            <Newspaper size={24} color="var(--color-primary)" />
          </div>
        </div>
        <h2 style={styles.pageTitle}>{t('news') || 'Habari & Matukio'}</h2>
        <p style={styles.pageSubtitle}>{t('newsSubtitle')}</p>
      </div>

      {/* Featured News */}
      <div style={styles.featuredCard}>
        <div style={{...styles.featuredImg, backgroundImage: `url(${featuredNews.img})`}}>
          <div style={styles.featuredOverlay} />
          <span style={styles.featuredBadge}>{featuredNews.category}</span>
        </div>
        <div style={styles.featuredContent}>
          <div style={styles.metaRow}>
            <span style={styles.dateLabel}>
              <Calendar size={14} style={{marginRight: '6px'}} />
              {featuredNews.date}
            </span>
            <span style={styles.readsLabel}>
              <Eye size={14} style={{marginRight: '6px'}} />
              {featuredNews.reads} {t('views')}
            </span>
          </div>
          <h3 style={styles.featuredTitle}>{featuredNews.title}</h3>
          <p style={styles.featuredExcerpt}>{featuredNews.excerpt}</p>
          <button style={styles.readMoreBtn}>
            {t('readMore')} <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* News List */}
      <div style={styles.newsList}>
        <h3 style={styles.sectionTitle}>{t('otherNews')}</h3>
        {regularNews.map(news => (
          <div key={news.id} style={styles.newsItem}>
            <div style={{...styles.newsThumb, backgroundImage: `url(${news.img})`}}>
              <span style={styles.smallBadge}>{news.category}</span>
            </div>
            <div style={styles.newsContent}>
              <h4 style={styles.newsTitle}>{news.title}</h4>
              <div style={styles.metaRowSmall}>
                <span style={styles.dateLabel}>
                  <Calendar size={12} style={{marginRight: '4px'}} />
                  {news.date}
                </span>
                <button style={styles.shareBtn}>
                  <Share2 size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
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
    marginBottom: '24px',
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
  featuredCard: {
    backgroundColor: 'var(--color-surface)',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid var(--color-border)',
    boxShadow: 'var(--shadow-sm)',
    marginBottom: '32px',
  },
  featuredImg: {
    height: '220px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  featuredOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)',
  },
  featuredBadge: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    backgroundColor: 'var(--color-primary)',
    color: '#000',
    padding: '4px 12px',
    borderRadius: '99px',
    fontSize: '12px',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  featuredContent: {
    padding: '20px',
  },
  metaRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  dateLabel: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '12px',
    color: 'var(--color-text-muted)',
    fontWeight: '500',
  },
  readsLabel: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '12px',
    color: 'var(--color-text-muted)',
  },
  featuredTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: 'var(--color-text)',
    marginBottom: '8px',
    lineHeight: '1.3',
  },
  featuredExcerpt: {
    fontSize: '14px',
    color: 'var(--color-text-muted)',
    lineHeight: '1.5',
    marginBottom: '16px',
  },
  readMoreBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    background: 'none',
    border: 'none',
    color: 'var(--color-primary)',
    fontWeight: '600',
    fontSize: '14px',
    padding: 0,
    cursor: 'pointer',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: 'var(--color-text)',
    marginBottom: '16px',
  },
  newsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  newsItem: {
    display: 'flex',
    gap: '16px',
    backgroundColor: 'var(--color-surface)',
    padding: '12px',
    borderRadius: '12px',
    border: '1px solid var(--color-border)',
    alignItems: 'center',
  },
  newsThumb: {
    width: '100px',
    height: '80px',
    borderRadius: '8px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    flexShrink: 0,
  },
  smallBadge: {
    position: 'absolute',
    bottom: '4px',
    left: '4px',
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: '#fff',
    padding: '2px 6px',
    borderRadius: '4px',
    fontSize: '9px',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  newsContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  newsTitle: {
    fontSize: '15px',
    fontWeight: '600',
    color: 'var(--color-text)',
    marginBottom: '8px',
    lineHeight: '1.3',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  metaRowSmall: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shareBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--color-text-muted)',
    padding: '4px',
    cursor: 'pointer',
    display: 'flex',
  }
};
