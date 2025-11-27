import { bot } from "../index.js";
import User from "./models/User.js"; 


async function onUsers(chatId) {
    console.log("onUsers...");
  const userCount = await User.countDocuments()

  bot.sendMessage(chatId, `Users Count: ${userCount} `)
}

export default onUsers