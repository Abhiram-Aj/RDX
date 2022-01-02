const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://telegra.ph/file/5c4082bd35a3866b47978.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*RAJU-BHAI Bot Created By ABHIRAM SACHU AND SARATH ACHU*
This a Private bot 
*PUBLIC BOT (LINK)  :    https://github.com/DEVIL-SARATH/RajuBhai*
 PUBLIC BOT 2 (LINK)   :  https://github.com/KINGS-AS/RDX

`}) 

}));
