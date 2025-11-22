import { bot } from "../index.js";

function onStart(chatId,name){
    console.log("start...");
    bot.sendMessage(chatId,`👋 Assalomu alaykum, ${name}!
🎓 100x Academy o‘quv markazining rasmiy botiga xush kelibsiz!

Bu bot orqali siz:
• Kurslarimiz haqida batafsil ma’lumot olasiz
• Kurslarga onlayn ro‘yxatdan o‘tishingiz mumkin
• Jadval va to‘lovlar haqida ma’lumot olasiz
    
👇 Quyidagi menyudan kerakli bo‘limni tanlang`, {
        reply_markup: {
            keyboard: [
                ["📚 Kurslar", "📝 Ro‘yxatdan o‘tish"],
                ["ℹ️ Markaz haqida", "💬 Fikr bildirish"],
                ["❓ Yordam"],
            ],
            resize_keyboard: true,
        },
    });


}
export{ onStart }