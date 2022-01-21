/* Copyright (C) 2021 RDXBOT.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Abhiram Sachu
Wa.me/+917736771516
*/

const rdxbot = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


rdxbot.addCommand({pattern: 'menu', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
         {title: 'ᴍᴇᴅɪᴀ ᴄᴏᴍᴍᴀɴᴅs', description: "\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.sᴏɴɢ``` sᴏɴɢ_ɴᴀᴍᴇ\n♦️ᴜsᴇ→ᴅᴏᴡɴʟᴏᴀᴅ sᴏɴɢ ғᴏʀ ʏᴏᴜ\n⚠️ᴇxᴀᴍᴘʟᴇ .sᴏɴɢ sʀɪᴠᴀʟʟɪ\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ᴠɪᴅᴇᴏ``` ʏᴛ_ʟɪɴᴋ\n♦️ᴜsᴇ→ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ ғʀᴏᴍ ʏᴏᴜᴛᴜʙᴇ ʟɪɴᴋ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ɪɴsᴛᴀ``` ʟɪɴᴋ\n♦️ᴜsᴇ→ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏɴᴛᴇɴᴛ ғʀᴏᴍ ɪɴsᴛᴀɢʀᴀᴍ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ʏᴛ``` ᴛxᴇᴛ\n♦️ᴜsᴇ→ɢɪᴠᴇs ʏᴏᴜ ʏᴛ ʟɪɴᴋs.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.sʜᴏᴡ``` sʜᴏᴡ ɴᴀᴍᴇ\n♦️ᴜsᴇ→ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ ғʀᴏᴍ ʏᴏᴜᴛᴜʙᴇ ʟɪɴᴋ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ɢɪғ```\n♦️ᴜsᴇ→ᴄᴏɴᴠᴇʀᴛs ᴠɪᴅᴇᴏ ᴛᴏ ɢɪғ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ᴍᴘ𝟹```\n♦️ᴜsᴇ→ᴄᴏɴᴠᴇʀᴛ ᴠɪᴅᴇᴏ ᴛᴏ ᴀᴜᴅɪᴏ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```sᴀʏ``` ᴛᴇxᴛ\n♦️ᴜsᴇ→ᴄᴏɴᴠᴇʀᴛs ᴛᴇxᴛ ɪɴᴛᴏ ᴠᴏɪᴄᴇ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ɪᴍɢ``` ᴛᴇxᴛ\n♦️ᴜsᴇ→ɪᴛ sᴇɴᴅs ɪᴍᴀɢᴇ ғʀᴏᴍ ɢᴏᴏɢʟᴇ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ᴛʀᴛ``` ʟᴀɴɢᴜᴀɢᴇ ᴄᴏᴅᴇ\n♦️ᴜsᴇ→ᴛʀᴀɴsʟᴀᴛᴇ ᴛʜᴇ ᴛᴇxᴛ ʏᴏᴜ ᴛᴀɢ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ᴡɪᴋɪ``` ᴛᴇxᴛ\n♦️ᴜsᴇ→ɪᴛ sᴇɴᴅs ᴡɪᴋɪᴘᴇᴅɪᴀ ʀᴇsᴜʟᴛ. \n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ʟʏʀɪᴄ``` ᴛᴇxᴛ\n♦️ᴜsᴇ→ғɪɴᴅs ᴛʜᴇ ʟʏʀɪᴄs ᴏғ ᴛʜᴇ sᴏɴɢ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ᴄᴏᴠɪᴅ``` ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ\n♦️ᴜsᴇ→sᴇɴᴅ ᴛʜᴇ ᴄᴏᴠɪᴅ sᴛᴀᴛs ᴏғ ʏᴏᴜʀ ᴄᴏᴜɴᴛʀʏ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ᴡᴇᴀᴛʜᴇʀ``` ᴄɪᴛʏ\n♦️ᴜsᴇ→ᴛᴇʟʟs ʏᴏᴜ ᴀʙᴏᴜᴛ ᴛʜᴇ ᴡᴇᴀᴛʜᴇʀ ᴏғ ʏᴏᴜʀ ᴘʟᴀᴄᴇ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ʀᴇᴍᴏᴠᴇʙɢ```\n♦️ᴜsᴇ→ʀᴇᴍᴏᴠᴇ ᴛʜᴇ ʙᴀᴄᴋɢʀᴏᴜɴᴅ ᴏғ ᴛɢᴇ ɪᴍᴀɢᴇ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ᴏᴄʀ```\n♦️ᴜsᴇ→ғɪɴᴅs ᴛʜᴇ ᴛᴇxᴛ ᴡʀɪᴛᴛᴇɴ ᴏɴ ᴛʜᴇ ɪᴍᴀɢᴇ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```ᴡᴀʟʟᴘᴀᴘᴇʀ```\n♦️ᴜsᴇ→ɪᴛ sᴇɴᴅs ʏᴏᴜ ʀᴀɴᴅᴏᴍ ᴡᴀʟʟᴘᴀᴘᴇʀ.\n\n\n\n\©ʀᴅx ʙᴏᴛ\n\n", rowId:"rowid1"},
         {title: 'ғᴜɴ ᴄᴏᴍᴍᴀɴᴅs', description: "\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ᴊᴏᴋᴇ```\n♦️ᴜsᴇ→ ɪᴛ sᴇɴᴅs ᴀ ʀᴀɴᴅᴏᴍ ᴊᴏᴋᴇ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ᴍᴇᴍᴇ``` ᴛᴇxᴛ\n♦️ᴜsᴇ→ ᴄᴀᴛɪᴏɴs ᴛʜᴇ ɪᴍᴀɢᴇ ɪɴᴛᴏ ᴀ ᴍᴇᴍᴇ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ǫᴜᴏᴛᴇ```\n♦️ᴜsᴇ→ ɪᴛ sᴇɴᴅs ᴀ ʀᴀɴᴅᴏᴍ ǫᴜᴏᴛᴇ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```ss``` ᴡᴇʙsɪᴛᴇ ʟɪɴᴋ\n♦️ᴜsᴇ→ ɪᴛ sᴇɴᴅs ᴛʜᴇ sᴄʀᴇᴇɴsʜᴏᴛ ᴏғ ᴛʜᴇ ᴡᴇʙsɪᴛᴇ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ᴄʜᴀɴɢᴇsᴀʏ```\n♦️ᴜsᴇ→ ᴄᴏɴᴠᴇʀᴛs ᴛᴇxᴛ ɪɴᴛᴏ ᴄʜᴀɴɢᴇsᴀʏ ᴍᴇᴍᴇ ɪᴍᴀɢᴇ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ᴛʀᴜᴍᴘsᴀʏ```\n♦️ᴜsᴇ→ ᴄᴏɴᴠᴇʀᴛ ᴛᴇxᴛ ɪɴᴛᴏ ᴛʀᴜᴍᴘ's ᴛᴡᴇᴇᴛ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ᴄᴏᴍᴘʟɪᴍᴇɴᴛ```\n♦️ᴜsᴇ→ ɢɪᴠᴇs ʏᴏᴜ ᴀ ᴄᴏᴍᴘʟɪᴍᴇɴᴛ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ʙɪᴛʟʏ``` ʟɪɴᴋ\n♦️ᴜsᴇ→ sʜᴏʀᴛᴇɴ ʏᴏᴜʀ ʟɪɴᴋ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ᴅɪᴄᴛ```\n♦️ᴜsᴇ→ ᴅɪᴄᴛɪᴏɴᴀʀʏ [-ᴅɪᴄᴛ ᴇɴ;ᴀɴɪᴍᴇ]\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ᴢᴏᴅɪᴀᴄ``` ʟᴇᴏ\n♦️ᴜsᴇ→ ᴛᴇʟʟs ʏᴏᴜ ᴀʙᴏᴜᴛ ʏᴏᴜʀ ʜᴏʀᴏsᴄᴏᴘᴇ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ǫʀ``` ᴛᴇxᴛ\n♦️ᴜsᴇ→ ᴄᴏɴᴠᴇʀᴛs ᴛᴇxᴛ ɪɴᴛᴏ ǫʀ ᴄᴏᴅᴇ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ᴍᴏᴠɪᴇ```\n♦️ᴜsᴇ→ ɢɪᴠᴇs ʏᴏᴜ ɪɴғᴏ ᴀʙᴏᴜᴛ ᴍᴏᴠɪᴇ.\n⚠️movie master\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ᴀɴɪᴍᴇ```\n♦️ᴜsᴇ→ ɢɪᴠᴇs ʏᴏᴜ ɪɴғᴏ ᴀʙᴏᴜᴛ ᴀɴɪᴍᴇ.\n\n\n\n\©ʀᴅx ʙᴏᴛ\n\n", rowId:"rowid2"},
         {title: 'sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀɴᴅs', description: "\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.sᴛɪᴄᴋᴇʀ```\n♦️ᴜsᴇ→ ᴄᴏɴᴠᴇʀᴛs ɪᴍɢ/ɢɪғ ɪɴᴛᴏ ᴀ sᴛɪᴄᴋᴇʀ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ᴘʜᴏᴛᴏ```\n♦️ᴜsᴇ→ ᴄᴏɴᴠᴇʀᴛs sᴛɪᴄᴋᴇʀ ɪɴᴛᴏ ɪᴍᴀɢᴇ.\n\n🔰ᴄᴏᴍᴍᴀɴᴅ→```.ᴀᴛᴛᴘ``` ᴛᴇxᴛ\n♦️ᴜsᴇ→ ᴄᴏɴᴠᴇʀᴛs ᴛᴇxᴛ ɪɴᴛᴏ ɢʟᴏᴡɪɴɢ sᴛɪᴄᴋᴇʀ.\n⚠️Example ```.attp``` RDX BOT\n\n\n\n\©ʀᴅx ʙᴏᴛ\n\n", rowId:"rowid3"},
        ]
       
       const sections = [{title: "KING AS", rows: rows}]
       
       const button = {
        buttonText: '♦ᴄʟɪᴄᴋ ʜᴇʀᴇ♦',
        description: "𝚁𝙳𝚇 𝙱𝙾𝚃\n\nMENU MASSAGE\n\n\n©ʀᴅx ʙᴏᴛ",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
