import { bot } from "../index.js";

function onCourse(chatId) {
    console.log("onCourse...");
    bot.sendMessage(chatId,
        `🎓 Bizning o‘quv markazimizda quyidagi kurslar mavjud:

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

export { onCourse }