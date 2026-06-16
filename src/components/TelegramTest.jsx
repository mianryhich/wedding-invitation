// src/components/TelegramTest.jsx
import { useState } from 'react';
import { sendTestMessage } from '../telegramBot';

function TelegramTest() {
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleTest = async () => {
        setLoading(true);
        setStatus('⏳ Отправка...');
        
        const success = await sendTestMessage();
        
        if (success) {
            setStatus('✅ Проверьте Telegram! Сообщение отправлено.');
        } else {
            setStatus('❌ Ошибка! Проверьте токен и chat_id в telegramBot.js');
        }
        
        setLoading(false);
        
        // Скрываем сообщение через 5 секунд
        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999,
            backgroundColor: '#4a3728',
            padding: '1rem 1.5rem',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
        }}>
            <button
                onClick={handleTest}
                disabled={loading}
                style={{
                    backgroundColor: '#f0d89e',
                    color: '#4a3728',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    opacity: loading ? 0.7 : 1
                }}
            >
                {loading ? '⏳ Отправка...' : '📨 Тест Telegram'}
            </button>
            {status && (
                <p style={{
                    color: '#f0d89e',
                    fontSize: '0.8rem',
                    marginTop: '0.5rem',
                    fontFamily: "'Playfair Display', serif"
                }}>
                    {status}
                </p>
            )}
        </div>
    );
}

export default TelegramTest;