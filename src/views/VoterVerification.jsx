import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Search, User, MapPin, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';

export default function VoterVerification() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [idNumber, setIdNumber] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    if (!idNumber) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      if (idNumber.length > 5) {
        setResult({
          status: 'success',
          name: 'Khamis Ali Juma',
          voterId: 'ZEC-2026-8921',
          regCenter: 'Skuli ya Kiembe Samaki',
          voteCenter: 'Kiembe Samaki A, Chumba 03',
          cardStatus: 'Active - Tayari kupiga kura'
        });
      } else {
        setResult({
          status: 'error',
          message: 'Namba uliyoingiza si sahihi au haitambuliki.'
        });
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={styles.container}>
      <div style={{display: 'flex', alignItems: 'center', marginBottom: '16px'}}>
        <button 
          onClick={() => navigate(-1)} 
          style={{background: 'none', border: 'none', padding: 0, marginRight: '12px', cursor: 'pointer', display: 'flex'}}
        >
          <ArrowLeft size={24} color="var(--color-text)" />
        </button>
        <h2 style={{...styles.pageTitle, marginBottom: 0}}>{t('verifyVoter')}</h2>
      </div>
      
      <div style={styles.card}>
        <p style={styles.instruction}>{t('verifyPrompt')}</p>
        
        <form onSubmit={handleVerify} style={styles.form}>
          <div style={styles.inputGroup}>
            <input 
              type="text" 
              placeholder="Mfano: 12345678"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
              style={styles.input}
            />
          </div>
          
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? 'Inatafuta...' : <><Search size={18} style={{marginRight: 8}} /> Hakiki Taarifa</>}
          </button>
        </form>
      </div>

      {result && result.status === 'success' && (
        <div style={styles.resultCard}>
          <div style={styles.resultHeader}>
            <CheckCircle color="var(--color-success)" size={24} />
            <h3 style={styles.resultTitle}>Taarifa Zimepatikana</h3>
          </div>
          
          <div style={styles.infoList}>
            <div style={styles.infoItem}>
              <User size={20} color="var(--color-secondary)" />
              <div>
                <p style={styles.infoLabel}>Jina Kamili</p>
                <p style={styles.infoValue}>{result.name}</p>
              </div>
            </div>
            
            <div style={styles.infoItem}>
              <MapPin size={20} color="var(--color-secondary)" />
              <div>
                <p style={styles.infoLabel}>Kituo cha Kuandikishwa</p>
                <p style={styles.infoValue}>{result.regCenter}</p>
              </div>
            </div>
            
            <div style={styles.infoItem}>
              <MapPin size={20} color="var(--color-primary)" />
              <div>
                <p style={styles.infoLabel}>Kituo cha Kupiga Kura</p>
                <p style={{...styles.infoValue, color: 'var(--color-primary)', fontWeight: 'bold'}}>{result.voteCenter}</p>
              </div>
            </div>
            
            <div style={styles.infoItem}>
              <CheckCircle size={20} color="var(--color-success)" />
              <div>
                <p style={styles.infoLabel}>Hali ya Kitambulisho</p>
                <p style={{...styles.infoValue, color: 'var(--color-success)'}}>{result.cardStatus}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {result && result.status === 'error' && (
        <div style={{...styles.resultCard, borderTop: '4px solid var(--color-error)'}}>
          <div style={styles.resultHeader}>
            <AlertCircle color="var(--color-error)" size={24} />
            <h3 style={{...styles.resultTitle, color: 'var(--color-error)'}}>Imeshindikana</h3>
          </div>
          <p style={{marginTop: 12}}>{result.message}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
  },
  pageTitle: {
    fontSize: '20px',
    marginBottom: '20px',
    color: 'var(--color-text)'
  },
  card: {
    backgroundColor: 'var(--color-surface)',
    padding: '24px',
    borderRadius: 'var(--radius-md)',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--color-border)',
    borderTop: '4px solid var(--color-primary)',
    marginBottom: '24px'
  },
  instruction: {
    marginBottom: '16px',
    fontSize: '15px',
    color: 'var(--color-text-muted)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  input: {
    width: '100%',
    padding: '14px 16px',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid var(--color-border)',
    fontSize: '16px',
    backgroundColor: 'var(--color-bg)',
    color: 'var(--color-text)'
  },
  button: {
    backgroundColor: 'var(--color-primary)',
    color: '#000',
    padding: '14px',
    borderRadius: 'var(--radius-sm)',
    fontSize: '16px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'var(--shadow-sm)',
  },
  resultCard: {
    backgroundColor: 'var(--color-surface)',
    padding: '24px',
    borderRadius: 'var(--radius-md)',
    boxShadow: 'var(--shadow-md)',
    border: '1px solid var(--color-border)',
    borderTop: '4px solid var(--color-success)',
    animation: 'fadeIn 0.3s ease'
  },
  resultHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '20px',
    paddingBottom: '16px',
    borderBottom: '1px solid var(--color-border)'
  },
  resultTitle: {
    fontSize: '18px',
    color: 'var(--color-success)',
    margin: 0
  },
  infoList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  infoItem: {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start'
  },
  infoLabel: {
    fontSize: '12px',
    color: 'var(--color-text-muted)',
    marginBottom: '4px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  infoValue: {
    fontSize: '16px',
    fontWeight: '500',
    color: 'var(--color-text)',
    margin: 0
  }
};
