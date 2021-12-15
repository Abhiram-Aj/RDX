const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://telegra.ph/file/5c4082bd35a3866b47978.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*RAJU-BHAI Bot Created By ABHIRAM SACHU AND SARATH ACHU*

*Creator number : wa.me/919496306657?text=Hi%20im_coming_your%20RAJU-BHAI_git_massage.%20*

*Creator number 2 : wa.me/919605101516?text=Hi%20im_coming_your%20RAJU-BHAI_git_massage.%20*

*Githublink (Setup)  :    https://github.com/DEVIL-SARATH/RAJU-BHAI*


`}) 

}));
