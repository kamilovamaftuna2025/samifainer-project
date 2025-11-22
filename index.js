import TelegramBot from "node-telegram-bot-api";
import { config } from "dotenv";
import { onCourse } from "./src/onCourse.js";
import { onStart } from "./src/onStart.js";
import { onElse } from "./src/onElse.js";
import { onRegister } from "./src/onREgister.js";
config()

const TOKEN = process.env.BOT_TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });


bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    if (text === "📚 Kurslar") {
        onCourse(chatId)
    }else if(text == "📝 Ro‘yxatdan o‘tish"){
        onRegister(chatId)
    }else if(text == "/start"){
        onStart(chatId)
    }
     else{
        onElse(chatId)

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


export { bot }