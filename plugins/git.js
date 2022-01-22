const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://telegra.ph/file/991a06ce548b9bf7d5185.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `RDX Bot Created By Abhiram Sachu


🌐Creator number : wa.me/917736771516🌐

🌐RDX UPGRADING: NEW VERSION COMING SOON🌐


©𝚁𝙳𝚇 𝙱𝙾𝚃
`}) 

}));
