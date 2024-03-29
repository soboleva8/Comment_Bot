import express from 'express';
import TelegramBot from 'node-telegram-bot-api';

import dotenv from 'dotenv';
dotenv.config();

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello s8')
})

app.listen(PORT, () => console.log(`My server is running on port ${PORT}`))

// Укажите ваш токен бота
const token = 'TCC_BOT_TOKEN';

// Укажите ID канала, куда нужно добавить комментарий
const channelId = '@-1002131752207';

// Создание бота
const bot = new TelegramBot(token, { polling: true });

// Функция для добавления комментария в канал
function addComment(comment) {
    bot.sendMessage(channelId, comment);
}

// Пример использования функции для добавления комментария
const commentText = "Всё тлен";
addComment(commentText);