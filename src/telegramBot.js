// src/telegramBot.js

// Вставьте сюда ваш реальный токен и chatId
const TELEGRAM_BOT_TOKEN = '8393684880:AAF7cEXRQR66MXPsLD5dO6O0jIq_l3meOHs';
const TELEGRAM_CHAT_ID = '683681423';

export const sendMessageToTelegram = async (message, parseMode = 'HTML') => {
    // Используем прокси для обхода CORS
    const url = `https://cors-anywhere.herokuapp.com/https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: parseMode,
            }),
        });

        if (response.ok) {
            console.log('✅ Сообщение успешно отправлено в Telegram');
            return true;
        } else {
            const errorData = await response.json();
            console.error('❌ Ошибка отправки:', errorData);
            return false;
        }
    } catch (error) {
        console.error('❌ Ошибка сети:', error);
        return false;
    }
};

export const sendTestMessage = async () => {
    const message = `
<b>🤖 Бот работает!</b>

Привет! Это тестовое сообщение из твоего свадебного сайта.

Если ты видишь это сообщение — значит, бот настроен правильно! 🎉

<i>Теперь можно отправлять ответы из опроса</i>
    `.trim();

    return await sendMessageToTelegram(message);
};