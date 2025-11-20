const TelegramBot = require("node-telegram-bot-api");
const { config } = require("dotenv")
config()

const TOKEN = process.env.BOT_TOKEN;
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

                    ],
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




bot.on("callback_query", (query) => {
    const chatId = query.message.chat.id
    const data = query.data
    if (data == "kurs_ingliz") {
        bot.sendMessage(chatId, `🇬🇧 Ingliz tili kursi

🕒 Davomiyligi: 3 oy
🎯 Darajalar: Beginner – Intermediate
📘 O‘quv dasturi: Speaking, Listening, Grammar
📌 Har haftasi 3 ta dars
💰 Narx: 250 000 so’m / oy`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "✍️ Ro‘yxatdan o‘tish", callback_data: "register_english" }
                    ],
                    [
                        { text: "⬅️ Orqaga", callback_data: "back_to_courses" }
                    ]
                ]
            }
        })
    }
    else if (data == "kurs_rus") {
        bot.sendMessage(chatId, `🇷🇺 Rus tili kursi
🕒 Davomiyligi: 3 oy
🎯 0 dan boshlovchilar uchun
📘 So‘z boyligi, grammatikasi, og‘zaki nutq
📌 Haftada 3 ta dars
💰 Narx: 230 000 so’m / oy`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "✍️ Ro‘yxatdan o‘tish", callback_data: "register_english" }
                    ],
                    [
                        { text: "⬅️ Orqaga", callback_data: "back_to_courses" }
                    ]
                ]
            }
        })
    }
    else if (data == "kurs_matematika") {
        bot.sendMessage(chatId, `📗 Matematika kursi
🕒 Davomiyligi: 4 oy
🎯 Yo‘nalish: Maktab + Olimpiada
📘 Algebra, Geometriya, Testlar
📌 Haftada 3–4 dars
💰 Narx: 300 000 so’m / oy`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "✍️ Ro‘yxatdan o‘tish", callback_data: "register_english" }
                    ],
                    [
                        { text: "⬅️ Orqaga", callback_data: "back_to_courses" }
                    ]
                ]
            }
        })
    }
    else if (data == "kurs_dasturlash") {
        bot.sendMessage(chatId, `💻 Dasturlash (Frontend)
🕒 Davomiyligi: 5 oy
📘 HTML, CSS, JavaScript, React
🎯 Portfolio bilan bitirish
📌 Haftada 3 ta dars
💰 Narx: 450 000 so’m / oy`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "✍️ Ro‘yxatdan o‘tish", callback_data: "register" }
                    ],
                    [
                        { text: "⬅️ Orqaga", callback_data: "back_to_courses" }
                    ]
                ]
            }
        })
    }
   
})

    console.log("Bot ishga tushdi ✅");
