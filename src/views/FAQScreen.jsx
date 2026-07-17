import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';

export default function FAQScreen() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      q: 'Nani anastahili kujiandikisha kupiga kura?',
      a: 'Mzanzibari yeyote ambaye ametimiza umri wa miaka 18 au zaidi, mwenye akili timamu na aliye na kitambulisho cha Mzanzibari Mkaazi (ZANID) anastahili kujiandikisha.'
    },
    {
      q: 'Nifanye nini nikipoteza kadi yangu ya kura?',
      a: 'Ikiwa utapoteza kadi yako, unapaswa kutoa taarifa kituo cha Polisi kupata hati ya kupoteza (Loss Report) kisha ufike ofisi za ZEC wilayani kwako ukiwa na uthibitisho wa utambulisho wako ili upewe kadi mpya.'
    },
    {
      q: 'Ninaweza kubadili kituo changu cha kupigia kura?',
      a: 'Ndiyo. Ukihama makazi, unaweza kubadili kituo wakati wa zoezi la uboreshaji wa Daftari la Kudumu. Utatakiwa kuleta barua ya Sheha inayoonyesha makazi yako mapya.'
    },
    {
      q: 'Je, naweza kupiga kura mtandaoni au nikiwa nje ya nchi?',
      a: 'Kwa sasa, Sheria ya Uchaguzi ya Zanzibar hairuhusu kupiga kura mtandaoni au kwa raia walioko nje ya nchi. Mpiga kura anapaswa kufika mwenyewe kwenye kituo chake alichojiandikisha.'
    },
    {
      q: 'Kura hupigwa kuanzia saa ngapi?',
      a: 'Siku ya uchaguzi, vituo vyote hufunguliwa saa 1:00 asubuhi na kufungwa saa 10:00 jioni. Mtu yeyote atakayekuwepo kwenye mstari kabla ya saa 10:00 jioni ataruhusiwa kupiga kura.'
    },
    {
      q: 'Nitajuaje kituo changu cha kupigia kura?',
      a: 'Unaweza kutumia huduma ya "Hakiki Taarifa Zako" kwenye app hii kwa kuingiza namba yako ya Mzanzibari Mkaazi, na utapata taarifa za kituo chako na namba yako ya mpiga kura.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            <HelpCircle size={24} color="var(--color-primary)" />
          </div>
        </div>
        <h2 style={styles.pageTitle}>{t('faq') || 'Maswali (FAQ)'}</h2>
        <p style={styles.pageSubtitle}>{t('faqSubtitle')}</p>
      </div>

      <div style={styles.searchContainer}>
        <Search size={20} color="var(--color-text-muted)" style={styles.searchIcon} />
        <input 
          type="text" 
          placeholder={t('searchFaq')} 
          style={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div style={styles.faqList}>
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                style={{
                  ...styles.faqItem, 
                  borderColor: isOpen ? 'var(--color-primary)' : 'var(--color-border)'
                }}
              >
                <button 
                  style={styles.faqButton} 
                  onClick={() => toggleFaq(index)}
                >
                  <span style={{
                    ...styles.faqQuestion,
                    color: isOpen ? 'var(--color-primary)' : 'var(--color-text)'
                  }}>
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp size={20} color="var(--color-primary)" />
                  ) : (
                    <ChevronDown size={20} color="var(--color-text-muted)" />
                  )}
                </button>
                {isOpen && (
                  <div style={styles.faqAnswer}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div style={styles.emptyState}>
            <p style={{color: 'var(--color-text-muted)'}}>{t('noFaqFound')}</p>
          </div>
        )}
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
  searchContainer: {
    position: 'relative',
    marginBottom: '32px',
  },
  searchIcon: {
    position: 'absolute',
    left: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  searchInput: {
    width: '100%',
    padding: '16px 16px 16px 48px',
    borderRadius: '12px',
    border: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-surface)',
    color: 'var(--color-text)',
    fontSize: '16px',
    outline: 'none',
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  faqItem: {
    backgroundColor: 'var(--color-surface)',
    borderRadius: '12px',
    border: '1px solid var(--color-border)',
    overflow: 'hidden',
    transition: 'border-color 0.2s ease',
  },
  faqButton: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
  },
  faqQuestion: {
    fontSize: '16px',
    fontWeight: '600',
    paddingRight: '16px',
    lineHeight: '1.4',
    transition: 'color 0.2s ease',
  },
  faqAnswer: {
    padding: '0 20px 20px 20px',
    fontSize: '14.5px',
    color: 'var(--color-text-muted)',
    lineHeight: '1.6',
  },
  emptyState: {
    padding: '40px 20px',
    textAlign: 'center',
  }
};
