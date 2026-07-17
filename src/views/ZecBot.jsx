import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Bot, User, ArrowLeft } from 'lucide-react';

export default function ZecBot() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Habari! Mimi ni Msaidizi wa ZEC (ZEC Bot). Naweza kukusaidia nini kuhusu uchaguzi?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), type: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      let botResponse = 'Samahani, sijakuelewa vizuri. Tafadhali uliza kuhusu "Kituo changu", "Tarehe ya uchaguzi" au "Jinsi ya kupiga kura".';

      const lowerInput = userMsg.text.toLowerCase();
      if (lowerInput.includes('kituo') || lowerInput.includes('wapi')) {
        botResponse = 'Ili kujua kituo chako, tafadhali nenda kwenye sehemu ya "Hakiki Taarifa" kisha ingiza namba yako ya kitambulisho cha Mzanzibari Mkaazi.';
      } else if (lowerInput.includes('lini') || lowerInput.includes('tarehe')) {
        botResponse = 'Uchaguzi mkuu unatarajiwa kufanyika mwezi Oktoba 2026. Kwa ratiba kamili, tafadhali tembelea sehemu ya "Ratiba ya Uchaguzi".';
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: botResponse }]);
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button
          onClick={() => navigate(-1)}
          style={{ background: 'none', border: 'none', padding: 0, marginRight: '12px', cursor: 'pointer', display: 'flex' }}
        >
          <ArrowLeft size={24} color="var(--color-text)" />
        </button>
        <Bot size={28} color="var(--color-primary)" />
        <div>
          <h2 style={styles.title}>ZEC Bot</h2>
          <p style={styles.subtitle}>Msaidizi wako wa Kidijitali</p>
        </div>
      </div>

      <div style={styles.chatArea}>
        {messages.map(msg => (
          <div key={msg.id} style={msg.type === 'bot' ? styles.botMessageRow : styles.userMessageRow}>
            {msg.type === 'bot' && <div style={styles.botAvatar}><Bot size={16} color="#fff" /></div>}
            <div style={msg.type === 'bot' ? styles.botBubble : styles.userBubble}>
              <p>{msg.text}</p>
            </div>
            {msg.type === 'user' && <div style={styles.userAvatar}><User size={16} color="#fff" /></div>}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form style={styles.inputArea} onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Andika swali lako hapa..."
          style={styles.input}
        />
        <button type="submit" style={styles.sendBtn} disabled={!input.trim()}>
          <Send size={20} />
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: 'var(--color-bg)',
  },
  header: {
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    borderBottom: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-surface)',
    position: 'sticky',
    top: 0,
    zIndex: 10
  },
  title: {
    fontSize: '18px',
    color: 'var(--color-text)',
    margin: 0
  },
  subtitle: {
    fontSize: '12px',
    color: 'var(--color-text-muted)',
    margin: 0
  },
  chatArea: {
    flex: 1,
    padding: '20px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  botMessageRow: {
    display: 'flex',
    gap: '8px',
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
    maxWidth: '85%'
  },
  userMessageRow: {
    display: 'flex',
    gap: '8px',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    maxWidth: '85%'
  },
  botAvatar: {
    width: '28px',
    height: '28px',
    backgroundColor: 'var(--color-primary)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  userAvatar: {
    width: '28px',
    height: '28px',
    backgroundColor: 'var(--color-info)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  botBubble: {
    backgroundColor: 'var(--color-surface)',
    padding: '12px 16px',
    borderRadius: '16px',
    borderBottomLeftRadius: '4px',
    color: 'var(--color-text)',
    fontSize: '14px',
    lineHeight: 1.4,
    border: '1px solid var(--color-border)'
  },
  userBubble: {
    backgroundColor: 'var(--color-info)',
    color: '#fff',
    padding: '12px 16px',
    borderRadius: '16px',
    borderBottomRightRadius: '4px',
    fontSize: '14px',
    lineHeight: 1.4
  },
  inputArea: {
    padding: '16px',
    borderTop: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-surface)',
    display: 'flex',
    gap: '12px',
    position: 'sticky',
    bottom: 0
  },
  input: {
    flex: 1,
    padding: '12px 16px',
    borderRadius: 'var(--radius-full)',
    border: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-bg)',
    color: 'var(--color-text)',
    fontSize: '14px'
  },
  sendBtn: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-primary)',
    color: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    boxShadow: 'var(--shadow-sm)'
  }
};
