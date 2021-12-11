const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/YC766jA.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: *OXYMORON BOT CREATED BY KINGS-AS*

𝐂𝐑𝐄𝐀𝐓𝐎𝐑 𝐍𝐔𝐌𝐁𝐄𝐑 http://wa.me/919605101516?text=Hi%20im-coming%20your-bot-git-oxymoron%20

𝐆𝐈𝐓 𝐋𝐈𝐍𝐊 https://github.com/KINGS-AS/OXYMORON

🍃എന്നെ കꪆത്ത᭄ര᭄ക്കꪆൻ രꪆജ്യമോ രꪆജകുമꪆര᭄യോ ഇല്ല🥀💫 പകരം എ൱᭄ക്ക് ൨േണ്ട᭄ ചങ്ക് പറച്ചു തെരുന്ന കുറച്ചു ചങ്കന്മꪆർ കു‌ടെ ഉണ്ട്🌝അതു മതി എ൱᭄ക്കྂ♥

`}) 

}));
