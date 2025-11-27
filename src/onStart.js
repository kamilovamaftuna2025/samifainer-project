import { bot } from "../index.js";
import User from "./models/User.js";


async function onStart(chatId, firstName) {
    console.log("start...");

    const userExists = await User.findOne({ telegramId: chatId })
    console.log(userExists);
    if (!userExists) {
        // malumotlar bazasida yangi foydalanuvchi yaratish
        const newUser = new User({
            telegramId: chatId,
            firstname: firstName,
        })

        newUser.save()
    }




    bot.sendMessage(

        chatId,

        `👋 Assalomu alaykum, ${name}!
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
export { onStart }