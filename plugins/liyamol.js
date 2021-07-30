const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');

Asena.addCommand({pattern: 'jidvoice ?(.*)', fromMe: true, desc: Sending Voice Using Jid}, (async (message, match) => {    
    if (message.reply_message === false);
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });
let id = match[1];
    ffmpeg(location)
        .format('mp3')
        .save('output.mp3')
        .on('end', async () => {
            await message.client.sendMessage(id, fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
});}));
