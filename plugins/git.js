const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/YC766jA.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*OXYMORON bot created by ABHIRAM SACHU*
*Creator number : wa.me/919605101516?text=Hi%20im_coming_your%20oxymoron_git_link.%20*

*Githublink (Setup)  :    https://github.com/KINGS-AS/OXYMORON*


`}) 

}));
