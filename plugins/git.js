const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://telegra.ph/file/c14a8dc543d2815bf558c.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*RDX Bot Created By Abhiram Sachu*
*Creator number : wa.me/919605101516?text=Hi%20im_coming_your%20RDX_git_massage.%20*

*Githublink (Setup)  :    https://github.com/KINGS-AS/RDX*

*QR

*DEPLOYE

`}) 

}));
