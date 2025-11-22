import { bot } from "../index.js"

function onElse(chatId){
     bot.sendMessage(
    chatId,
    `
      ⚠️ Kechirasiz, men sizning xabaringizni tushunmadim.
  
  Iltimos, quyidagi tugmani bosing 👇
  /start
  
      `
  );
  console.log("onElse...!");
}

export { onElse }