/* Copyright (C) 2021 KING AS.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
KINGS-AS
Wa.me/+18254138025
*/

const Neotro = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Neotro.addCommand({pattern: 'help', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: 'Sᴇᴛᴠᴀʀ', description: "⚙Bot of understanding and basic help.\n\n\n*◁ === 🌐 basic help === ▷\n\n🌐```.setvar SUDO:91xxxxxxxxx,0 nigalude number sudo akkuvan```\n\n🌐```.setvar ALIVE_MESSAGE:alive msg sett cheyyan```\n\n🌐```.setvar ALL_CAPTION:all image/video caption mattan```\n\n🌐```. setvar BAN_MESSAGE:ban msg sett cheyyan```\n\n🌐```.setvar BOT_NAME:bot name sett cheyyan```\n\n🌐```.setvar KICKME_MESSAGE:kick msg diloge sett akkan```\n\n🌐```.setvar MUTE_MESSAGE:mute msg set akkan```\n\n🌐```.setvar OWNER_NAME:owner name mattan```\n\n🌐```.setvar PROMOTE_MESSAGE:admin akkumbol ulla msg sett akkuvan```\n\n🌐```.setvar TAG_HEADER:mention tagil heading sett akkuvan```\n\n🌐```.setvar TAG_REPLY:nigale mention vekkumbol audio/sticker varan ex 91xxxxxxxxxx@s.whatsapp.net```\n\n\n🌐```true and false```🌐\n\n🌐```ture=on```\n\n🌐```false=off```\n\n\n🌐```.setvar ALL_LINK_BAN:```\n\n🌐```.setvar ANTİ_LİNK:```\n\n🌐```.setvar AUTO_BİO:```\n\n🌐```.setvar BGM_FILTER:```\n\n🌐```.setvar BLOCK_CHAT:```\n\n🌐```.setvar DEBUG:```\n\n🌐```.setvar FULL_EVA:```\n\n🌐```.setvar NO_LOG:```\n\n🌐```.setvar NO_ONLINE:```\n\n🌐```.setvar SEND_READ:```\n\n🌐```.setvar STICKER_REPLY:```\n\n🌐```.setvar THERI_KICK:```\n\n\n🌐```WORK TYPE CHANGE MEATHEAD```🌐\n\n\n🌐```.setvar WORK_TYPE:private```\n\n🌐```.setvar WORK_TYPE:public```\n\n🌐```എളുപ്പവഴി```🌐\n\n🌐```.mlink on/off```\n\n🌐```.theri no/yes```\n\n🌐```.fulleva on/off```\n\n\n©RDX BOT\n ", rowId:" rowid1"},
        {title: 'Gɪᴛ', description: "Bᴏᴛ Gɪᴛʜᴜʙ Lɪɴᴋ.\n\n\n*◁ ===😈 RDX BOT 😈=== ▷*\n\nBOT NOT READY TO PUBLIC\n\n ", rowId:"rowid2"},
        {title: 'Bᴏᴛ Nᴀᴍᴇ', description: "😈RDX😈.\n\n🌐ᴍᴀᴋɪɴɢ ғᴏʀ ʜᴇʟᴘɪɴɢ ʙᴏᴛ♦\n\n ", rowId:" rowid3"},
        {title: 'Xᴍᴇᴅɪᴀ', description: "Xᴍᴇᴅɪᴀ Cᴏᴍᴍᴀɴᴅs Aʀᴇ.​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n\n\n\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​💻Usage: *.mp4enhance*\nℹ️Desc:Enhance video’s quality.\n\n💻Usage: *.interp*\nℹ️Desc:Increases the FPS of the video.\n\n💻Usage: *.mp4slowmo*\nℹ️Desc:Applies true-slowmo to non-slow motion videos.\n\n💻Usage: *.x4mp4*\nℹ️Desc:Reduce video’s quality by 75%.\n\n💻Usage: *.x2mp4*\nℹ️Desc: Reduce video’s quality by 50%.\n\n💻Usage: *.gif*\nℹ️Desc:Converts video to gif.\n\n💻Usage: *.agif*\nℹ️Desc:Converts video to voiced gif.\n\n💻Usage: *.mp4blur*\nℹ️Desc: Blurs the background of the video.\n\n💻Usage: *.mp4stab*\nℹ️Desc: Decreases the vibration of the video.\n\n💻Usage: *.mp4rainbow*\nℹ️Desc: Applies a rainbow effect to video.\n\n💻Usage: *.mp4color*\nℹ️Desc:Makes the colors of the video more vivid and beautiful.\n\n💻Usage: *.mp4art*\nℹ️Desc:Applies a art effect to the video.\n\n💻Usage: *.mp4negative*\nℹ️Desc:Applies a negative color filter to the video.\n\n💻Usage: *.mp4vintage*\nℹ️Desc:Applies a nostalgic effect to video.\n\n💻Usage: *.mp4bw*\nℹ️Desc: Applies a monochrome effect to video.\n\n💻Usage: *.mp4reverse*\nℹ️Desc: Plays the video in reverse.\n\n💻Usage: *.mp4edge*\nℹ️Desc:Applies a edge effect to the video.\n\n💻Usage: *.mp4image*\nℹ️Desc: Converts photo to 5 sec video.\n\n💻Usage: *.spectrum*\nℹ️Desc: Converts the spectrum of sound into video.\n\n💻Usage: *.waves*\nℹ️Desc: Converts the wave range of sound to video.\n\n💻Usage: *.frequency*\nℹ️Desc: Converts the frequency range of sound to video.\n\n💻Usage: *.avec*\nℹ️Desc: Converts the histogram of sound to video.\n\n💻Usage: *.volumeaudio*\nℹ️Desc: Converts the decibel value of the sound into video.\n\n💻Usage: *.cqtaudio*\nℹ️Desc: Converts the CQT value of audio to video.\n\n💻Usage: *.mp3eq*\nℹ️Desc: Adjusts the sound to a crystal clear level.\n\n💻Usage: *.mp3crusher*\nℹ️Desc:Distorts the sound, makes ridiculous.\n\n💻Usage: *.mp3reverse*\nℹ️Desc:Plays the sound in reverse.\n\n💻Usage: *.mp3pitch*\nℹ️Desc:Makes the sound thinner and faster.\n\n💻Usage *.mp3low*\nℹ️Desc:Makes the sound deep and slower.\n\n💻Usage: *.x2mp3*\nℹ️Desc:  Makes the sound twice as fast.\n\n💻Usage: *.mp3volume*\nℹ️Desc: 🇹🇷 Ses seviyesini fazalca arttırır.\n🇬🇧 Increase sound level so much.\n\n💻Usage: *.bwimage*\nℹ️Desc: 🇹🇷 Fotoğrafa monochrome efekti uygular.\n🇬🇧 Applies a monochrome effect to image.\n\n💻Usage: *.vintageimage*\nℹ️Desc: 🇹🇷 Fotoğrafa vintage efekti uygular.\n🇬🇧 Applies a vinatge effect to video.\n\n💻Usage: *.edgeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa edge efekti uygular.\n🇬🇧 Applies a edge effect to the photo.\n\n💻Usage: *.enhanceimage*\nℹ️Desc: 🇹🇷 Fotoğrafı daha net hale getirir.\n🇬🇧 Makes the photo clearer.\n\n💻Usage: *.blurimage*\nℹ️Desc: 🇹🇷 Fotoğrafın arka planını bulanıklaştırır.\n🇬🇧 Blurs the background of the photo.\n\n💻Usage: *.grenimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gren efekti uygular.\n🇬🇧 Applies grain effect to the photo.\n\n💻Usage: *.negativeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa negatif renk filtresi uygular.\n🇬🇧 Applies a negative color filter to the photo.\n\n💻Usage: *.rainbowimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gökkuşağı efekti uygular.\n🇬🇧 Applies rainbow effect to the photo.\n\n💻Usage: *.colorimage*\nℹ️Desc: 🇹🇷 Fotoğrafın renklerini daha canlı ve çekici yapar.\n🇬🇧 It makes the colors of the photo more vivid and attractive.\n\n💻Usage: *.artimage*\nℹ️Desc: 🇹🇷 Fotoğrafa çizim efekti uygular.\n🇬🇧 Applies a art effect to the photo\n\n ", rowId:" rowid4"},
        {title: 'Oᴡɴᴇʀ', description: "Kɪɴɢ As.\nOᴡɴᴇʀ number\n\nhttps://wa.me/qr/CYBN2KFKQTAIN1\n\n ", rowId:" rowid5"},
        {title: 'Hᴇʟᴘ', description: "list of all commands\n\n*🌐 Command:* ```.bgm```\n\n*♦️ Description:* ```turn on and turn of bgm. -bot owner command```\n\n*📝 Example:* ```.bgm on / off```\n\n*🌐 Command:* ```.insta```\n\n*♦️ Description:* ```Downloads Image/Video From Instagram```\n\n*🌐 Command:* ```.brainly```\n\n*♦️ Description:* ```Finds the answer.```\n\n*📝 Example:* ```.brainly <Question>```\n\n*🌐 Command:* ```.xmedia```\n\n*♦️ Description:* ```It is a plugin with more than 25 media tools.```\n\n*🌐 Command:* ```.ownercmnd```\n\n*♦️ Description:* ```set of commands for bot user or sudo```\n\n*🌐 Command:* ```.codtts```\n\n*♦️ Description:* ```language code to change the voice in .tts & also for .trt translation```\n\n*🌐 Command:* ```.install```\n\n*♦️ Description:* ```Install external plugins.```\n\n*🌐 Command:* ```.plugin```\n\n*♦️ Description:* ```Shows the plugins you have installed.```\n\n*🌐 Command:* ```.remove```\n\n*♦️ Description:* ```Removes the plugin.```\n\n*🌐 Command:* ```.adan```\n\n*♦️ Description:* ```Finds prayer time.```\n\n*📝 Example:* ```.prayer <city>```\n\n*🌐 Command:* ```.ban```\n\n*♦️ Description:* ```Ban someone in the group. Reply to message or tag a person to use command.```\n\n*🌐 Command:* ```.add```\n\n*♦️ Description:* ```Adds someone to the group.```\n\n*🌐 Command:* ```.promote```\n\n*♦️ Description:* ```Makes any person an admin.```\n\n*🌐 Command:* ```.demote```\n\n*♦️ Description:* ```Takes the authority of any admin.```\n\n*🌐 Command:* ```.mute```\n\n*♦️ Description:* ```Mute the group chat. Only the admins can send a message.```\n\n*🌐 Command:* ```.unmute```\n\n*♦️ Description:* ```Unmute the group chat. Anyone can send a message.```\n\n*🌐 Command:* ```.invite```\n\n*♦️ Description:* ```Provides the group's invitation link.```\n\n*🌐 Command:* ```.afk```\n\n*♦️ Description:* ```It makes you AFK - Away From Keyboard.```\n\n*🌐 Command:* ```.anime```\n\n*♦️ Description:* ```random anime image ```\n\n*🌐 Command:* ```.apkmod```\n\n*🌐 Command:* ```.fatp```\n\n*🌐 Command:* ```.jetau```\n\n*🌐 Command:* ```.ttp```\n\n*♦️ Description:* ```Converts text to plain painting.```\n\n*🌐 Command:* ```.attp```\n\n*♦️ Description:* ```Adds rainbow effect to the text as a sticker.```\n\n*🌐 Command:* ```.bgm```\n\n*♦️ Description:* ```turn on and turn of bgm. -bot owner command```\n\n*📝 Example:* ```.bgm on / off```\n\n*🌐 Command:* ```.brainly```\n\n*♦️ Description:* ```Finds answer for your query on brainly.```\n\n*📝 Example:* ```.brainly <Query>```\n\n*🌐 Command:* ```.carbon```\n\n*🌐 Command:* ```.compliment```\n\n*♦️ Description:* ```Get a compliment.```\n\n*🌐 Command:* ```.mp3```\n\n*♦️ Description:* ```Converts video to sound.```\n\n*🌐 Command:* ```.photo```\n\n*♦️ Description:* ```Converts the sticker to a photo.```\n\n*🌐 Command:* ```.mp4```\n\n*🌐 Command:* ```.doc```\n\n*♦️ Description:* ```CONVERT TO DOCUMENT AND ADD GIVEN NAME```\n\n*📝 Example:* ``````.doc Helena *replace helena with desired name*``````\n\n*🌐 Command:* ```.deepai```\n\n*♦️ Description:* ```Runs the most powerful artificial intelligence tools using artificial neural networks.```\n\n*🌐 Command:* ```.del```\n\n*♦️ Description:* ```Deletes The Replied Message Send By The Bot [ ✅️ Official External Plugin ]```\n\n*🌐 Command:* ```.dict```\n\n*♦️ Description:* ```Use it as a dictionary. Eg: .dict en_US;lead For supporting languages send *.lngcode*```\n\n*🌐 Command:* ```.effectimg```\n\n*♦️ Description:* ```Set of commands to convert text into effective images.```\n\n*🌐 Command:* ```.ffmpeg```\n\n*♦️ Description:* ```Applies the desired ffmpeg filter to the video.\n\n⌨️ Example: .ffmpeg fade=in:0:30```\n\n*🌐 Command:* ```.git```\n\n*♦️ Description:* ```Gives github link of the bot```\n\n*🌐 Command:* ```.gm```\n\n*♦️ Description:* ```it sends good morning message```\n\n*🌐 Command:* ```.gn```\n\n*♦️ Description:* ```it sends good night message```\n\n*🌐 Command:* ```.welcome```\n\n*♦️ Description:* ```It sets the welcome message. If you leave it blank it shows the welcome message.```\n\n*🌐 Command:* ```.goodbye```\n\n*♦️ Description:* ```Sets the goodbye message. If you leave blank, it show's the goodbye message.```\n\n*🌐 Command:* ```.help```\n\n*♦️ Description:* ```Gives information about using the bot from the help menu.```\n\n*🌐 Command:* ```.info```\n\n*♦️ Description:* ```Shows bot information and creator info```\n\n*🌐 Command:* ```.vinsta```\n\n*♦️ Description:* ```Instagram video dowloads.```\n\n*🌐 Command:* ```.pinsta```\n\n*♦️ Description:* ```instagram Media Downloads.```\n\n*🌐 Command:* ```.igtv```\n\n*♦️ Description:* ```Dwnlds Via Igtv.```\n\n*🌐 Command:* ```.igstalk```\n\n*♦️ Description:* ```Fetches user informations from instagram```\n\n*🌐 Command:* ```.profinsta```\n\n*♦️ Description:* ```Fetches user informations from instagram```\n\n*📝 Example:* ```.insta <userName>```\n\n*🌐 Command:* ```.insult```\n\n*♦️ Description:* ```Get an evil insult.```\n\n*🌐 Command:* ```.antilink```\n\n*♦️ Description:* ```Activates the Antilink tool.```\n\n*📝 Example:* ```.antilink on / off```\n\n*🌐 Command:* ```.ip```\n\n*♦️ Description:* ```gives you the detail of your IP```\n\n*🌐 Command:* ```.joke```\n\n*♦️ Description:* ```Get a random joke.```\n\n*🌐 Command:* ```.mlink```\n\n*♦️ Description:* ```remove for all link```\n\n*📝 Example:* ```.mlink on / of```\n\n*🌐 Command:* ```.voice```\n\n*♦️ Description:* ```Converts audio to sound recording.```\n\n*🌐 Command:* ```.locate```\n\n*♦️ Description:* ```It send your location.```\n\n*⚠️ Warn:* ```Please open your location before using command!```\n\n*🌐 Command:* ```.log```\n\n*♦️ Description:* ```Saves the message you reply to your private number.```\n\n*⚠️ Warn:* ```Does not support animated stickers!```\n\n*🌐 Command:* ```.meme```\n\n*♦️ Description:* ```Photo memes you replied to.```\n\n*🌐 Command:* ```.menu```\n\n*♦️ Description:* ```It sends high resolution wallpapers.```\n\n*🌐 Command:* ```.mmpack```\n\n*♦️ Description:* ```▷🤖നിങ്ങൾ ആഗ്രഹിക്കുന്ന രീതിയിൽ മെമ്മുകൾ ഇച്ഛാനുസൃതമാക്കാൻ മെമ്മെ ലിസ്റ്റ്◁ ```\n\n*🌐 Command:* ```.molu```\n\n*♦️ Description:* ```Chat with an AI Bot. Use .bot <message>```\n\n*🌐 Command:* ```.moretxt```\n\n*♦️ Description:* ```more txtit commands```\n\n*🌐 Command:* ```.ffire```\n\n*♦️ Description:* ```add your text to random freefire logo```\n\n*🌐 Command:* ```.movie```\n\n*♦️ Description:* ```Shows movie info.```\n\n*🌐 Command:* ```.insta```\n\n*♦️ Description:* ```Downloads Image/Video From Instagram```\n\n*🌐 Command:* ```.neko```\n\n*♦️ Description:* ```Replied messages will be added to nekobin.com.```\n\n*🌐 Command:* ```.notes```\n\n*♦️ Description:* ```Shows all your existing notes.```\n\n*🌐 Command:* ```.save```\n\n*♦️ Description:* ```Reply a message and type .save or just use .save <Your note> without replying```\n\n*🌐 Command:* ```.deleteNotes```\n\n*♦️ Description:* ```Deletes *all* your saved notes.```\n\n*🌐 Command:* ```.ocr```\n\n*♦️ Description:* ```Reads the text on the photo you have replied.```\n\n*🌐 Command:* ```.prayer```\n\n*♦️ Description:* ```Finds prayer time.```\n\n*📝 Example:* ```.prayer <city>```\n\n*🌐 Command:* ```.jid```\n\n*♦️ Description:* ```Giving user's JID.```\n\n*🌐 Command:* ```.qr```\n\n*♦️ Description:* ```Converts the given text into a qr code image.```\n\n*🌐 Command:* ```.quote```\n\n*♦️ Description:* ```It Sends Random Quote```\n\n*🌐 Command:* ```.quote```\n\n*♦️ Description:* ```Gives a random quote.```\n\n*🌐 Command:* ```.random```\n\n*♦️ Description:* ```word image```\n\n*🌐 Command:* ```.rashmika```\n\n*♦️ Description:* ```random rashmika images ```\n\n*🌐 Command:* ```.brdmore```\n\n*♦️ Description:* ```add readmore before your text```\n\n*🌐 Command:* ```.rdmore```\n\n*♦️ Description:* ```add readmore before your text```\n\n*🌐 Command:* ```.removebg```\n\n*♦️ Description:* ```Removes the background of the photos.```\n\n*🌐 Command:* ```.report```\n\n*🌐 Command:* ```.trollpack```\n\n*♦️ Description:* ```*▷🤖nigalk avashiyam ulla troll cherkkan◁* ```\n\n*🌐 Command:* ```.scam```\n\n*♦️ Description:* ```Creates 5 minutes of fake actions.```\n\n*🌐 Command:* ```.scan```\n\n*🌐 Command:* ```.trt```\n\n*♦️ Description:* ```It translates with Google Translate. You must reply any message.```\n\n*📝 Example:* ```.trt tr it (From Turkish to Italian)```\n\n*🌐 Command:* ```.detectlang```\n\n*♦️ Description:* ```Guess the language of the replied message.```\n\n*🌐 Command:* ```.currency```\n\n*🌐 Command:* ```.tts```\n\n*♦️ Description:* ```It converts text to sound.```\n\n*🌐 Command:* ```.song```\n\n*♦️ Description:* ```Uploads the song you wrote.```\n\n*🌐 Command:* ```.video```\n\n*♦️ Description:* ```Downloads video from YouTube.```\n\n*🌐 Command:* ```.yt```\n\n*♦️ Description:* ```It searchs on YouTube.```\n\n*🌐 Command:* ```.wiki```\n\n*♦️ Description:* ```Searches query on Wikipedia.```\n\n*🌐 Command:* ```.img```\n\n*♦️ Description:* ```Searches for related pics on Google.```\n\n*🌐 Command:* ```.github```\n\n*♦️ Description:* ```Collects github information from the given username.\n\n⌨️ Example: .github phaticusthiccy```\n\n*🌐 Command:* ```.lyric```\n\n*♦️ Description:* ```Finds the lyrics of the song.```\n\n*🌐 Command:* ```.covid```\n\n*♦️ Description:* ```Shows the daily and overall covid table of more than 15 countries.```\n\n*🌐 Command:* ```.ss```\n\n*♦️ Description:* ```Takes a screenshot from the page in the given link.```\n\n*🌐 Command:* ```.setvar```\n\n*♦️ Description:* ```*COMMANDS FOR SETTING HEROKU CONFIG VARS*```\n\n*🌐 Command:* ```.show```\n\n*♦️ Description:* ```Get info related to tv series and shows```\n\n*🌐 Command:* ```.bot```\n\n*♦️ Description:* ```Chat with an AI Bot. Use .bot <message>```\n\n*🌐 Command:* ```.pinsta```\n\n*♦️ Description:* ```instagram profile```\n\n*🌐 Command:* ```.animesay```\n\n*♦️ Description:* ```It writes the text inside the banner the anime girl is holding```\n\n*🌐 Command:* ```.changesay```\n\n*♦️ Description:* ```Turns the text into the change my mind poster.```\n\n*🌐 Command:* ```.trumpsay```\n\n*♦️ Description:* ```Converts the text to Trump's tweet.```\n\n*🌐 Command:* ```.audspam```\n\n*♦️ Description:* ```Spams audoio messages```\n\n*🌐 Command:* ```.sweather```\n\n*♦️ Description:* ```Gives you the weekly interpretations of space weather observations provided by the Space Weather Research Center (SWRC) for a p.```\n\n*🌐 Command:* ```.spam```\n\n*♦️ Description:* ```It spam until you stop it.\n\n⌨️ Example: .spam test```\n\n*🌐 Command:* ```.killspam```\n\n*♦️ Description:* ```Stops spam command.```\n\n*🌐 Command:* ```.sticker```\n\n*♦️ Description:* ```RDX It converts your replied photo or video to sticker.```\n\n*🌐 Command:* ```.alive```\n\n*♦️ Description:* ```Does bot work?```\n\n*🌐 Command:* ```.sysd```\n\n*♦️ Description:* ```Shows the system properties.```\n\n*🌐 Command:* ```.tagadmin```\n\n*🌐 Command:* ```.tblend```\n\n*♦️ Description:* ```Applies the selected TBlend effect to videos.```\n\n*🌐 Command:* ```.tdrs```\n\n*🌐 Command:* ```.txtit```\n\n*♦️ Description:* ```Shows text to image tools with unlimited access.```\n\n*🌐 Command:* ```.theri```\n\n*♦️ Description:* ```chilla theri vilichaal spot kick. -bot owner command```\n\n*📝 Example:* ```.theri no / yes```\n\n*🌐 Command:* ```.tiny```\n\n*♦️ Description:* ```Shortens the given link using tinyurl.```\n\n*🌐 Command:* ```.unaudio```\n\n*♦️ Description:* ```Converts sound recording to an audio File.```\n\n*🌐 Command:* ```.ttp```\n\n*♦️ Description:* ```Converts text to plain painting.```\n\n*🌐 Command:* ```.attp```\n\n*♦️ Description:* ```Adds rainbow effect to the text as a sticker.```\n\n*🌐 Command:* ```.U```\n\n*♦️ Description:* ```Converts audio to sound recording.```\n\n*🌐 Command:* ```.unvoice```\n\n*♦️ Description:* ```Converts audio to sound recording.```\n\n*🌐 Command:* ```.voicy```\n\n*♦️ Description:* ```It converts audio to text.```\n\n*🌐 Command:* ```.wallpaper```\n\n*♦️ Description:* ```It sends high resolution wallpapers.```\n\n*🌐 Command:* ```.wame```\n\n*♦️ Description:* ```Get a link to the user chat.```\n\n*?? Command:* ```.weather```\n\n*♦️ Description:* ```Shows the weather.```\n\n*🌐 Command:* ```.speedtest```\n\n*♦️ Description:* ```Measures Download and Upload speed.```\n\n*🌐 Command:* ```.ping```\n\n*♦️ Description:* ```Measures your ping.```\n\n*🌐 Command:* ```.short```\n\n*♦️ Description:* ```Shorten the long link.```\n\n*🌐 Command:* ```.calc```\n\n*🌐 Command:* ```.whois```\n\n*♦️ Description:* ```Displays metadata data of group or person.```\n\n  ", rowId:" rowid6"}
       ]
       
       const sections = [{title: "KING AS", rows: rows}]
       
       const button = {
        buttonText: '♦️ᴄʟɪᴄᴋ ʜᴇʀᴇ♦️',
        description: "ᴋɪɴɢ ᴀs ʀᴅx ʙᴏᴛ\n\n♦ʜᴇʟᴘ ᴍᴀssᴀɢᴇ ♦\n\n©ʀᴅx ʙᴏᴛ",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
