/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
N9EOTROX - TEENUHX API එකක් හරි උස්සලා තිබ්බොත් රෙපෝ එකටම Coppyright ගහනවා
*/

const Neotro = require('../events');
const Config = require('../hatzu');
const config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
let am = config.WORKTYPE == 'public' ? false : true
const EFFECT_DESC = "Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්."
const NEED_WORD = "*ඔබ වචනයක් ඇතුළත් කළ යුතුය*"

Neotro.addCommand({pattern: 'teenuhz ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/gtext?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));
//=============================START=======================
 Neotro.addCommand({pattern: 'nsky ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.BSITE}/api/photooxy/?text=${match[1]}&apikey=${Config.BAPI}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'romantic ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/photooxy/romantic?text=${match[1]}&apikey=TEENUU`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));
Neotro.addCommand({pattern: 'smoke ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://https://dapuhy-api.herokuapp.com/api/photooxy/smoke?text=${match[1]}&apikey=TEENUU`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));
Neotro.addCommand({pattern: 'burnpaper ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.BSITE}/api/photooxy/burnpaper?text=${match[1]}&apikey=${Config.BAPI}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));
Neotro.addCommand({pattern: 'lovemessage ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://https://dapuhy-api.herokuapp.com/api/photooxy/lovemessage?text=${match[1]}&apikey=TEENUU`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));
Neotro.addCommand({pattern: 'undergrass ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.BSITE}/api/photooxy/undergrass?text=${match[1]}&apikey=${Config.BAPI}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));
Neotro.addCommand({pattern: 'doubleheart ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.BSITE}/api/photooxy/doubleheart?text=${match[1]}&apikey=${Config.BAPI}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'coffecup ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.BSITE}/api/photooxy/coffecup?text=${match[1]}&apikey=${Config.BAPI}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'butterfly ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.BSITE}/api/photooxy/butterfly?text=${match[1]}&apikey=${Config.BAPI}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'wolfmetal ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.BSITE}/api/photooxy/wolfmetal?text=${match[1]}&apikey=${Config.BAPI}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'underwater ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.BSITE}/api/photooxy/underwater?text=${match[1]}&apikey=${Config.BAPI}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'roses ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.BSITE}/api/photooxy/roses?text=${match[1]}&apikey=${Config.BAPI}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));

Neotro.addCommand({pattern: 'whitecube ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.BSITE}/api/photooxy/whitecube?text=${match[1]}&apikey=${Config.BAPI}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: config.BOT_NAME})

    }));
