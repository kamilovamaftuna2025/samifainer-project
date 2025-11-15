const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "8463114097:AAF-xiHtOyG_rErPDxz22jDA4X5dgkH1ZSM";
const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const name = msg.from.first_name;

    const message = `👋 Assalomu alaykum, ${name}!
🎓 100x Academy o‘quv markazining rasmiy botiga xush kelibsiz!

Bu bot orqali siz:
• Kurslarimiz haqida batafsil ma’lumot olasiz
• Kurslarga onlayn ro‘yxatdan o‘tishingiz mumkin
• Jadval va to‘lovlar haqida ma’lumot olasiz

👇 Quyidagi menyudan kerakli bo‘limni tanlang`;

    bot.sendMessage(chatId, message, {
        reply_markup: {
            keyboard: [
                ["📚 Kurslar", "📝 Ro‘yxatdan o‘tish"],
                ["ℹ️ Markaz haqida", "💬 Fikr bildirish"],
                ["❓ Yordam"],
            ],
            resize_keyboard: true,
        },
    });
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;


    if (text === "📚 Kurslar") {
        bot.sendMessage(chatId, `🎓 Bizning o‘quv markazimizda quyidagi kurslar mavjud:

1️⃣ Ingliz tili
2️⃣ Rus tili
3️⃣ Matematika
4️⃣ Dasturlash (Python, Web)
5️⃣ Grafik dizayn

👇 Quyidagi kurslardan birini tanlang va batafsil ma’lumot oling:`, {
      reply_markup: {
            inline_keyboard: [
                [
                    { text: "🇺🇸 Ingliz tili", callback_data: "kurs_ingliz" },
                ],
                [
                    { text: "🇷🇺 Rus tili", callback_data: "kurs_rus" }

                ]
                [
                    { text: "📗 Matematika", callback_data: "kurs_matematika" }
                ],
                [
                    { text: " 💻 Dasturlash", callback_data: "kurs-dasturlash" }

                ]
            ]
        }
});
    }
});

console.log("Bot ishga tushdi ✅");
