/* උස්සන්න එපා බේසිකෙ කොල්ලො අහලා ගනිම්
Codded BY teenuX
Wa.me/+94766598862
*/

const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Language = require('../language');
const XN_DESC = "NSFU වීඩියෝ බාගත කරයි"
const XN_NEED = "*Link අවශ්‍යයි!*"
const XN_D = "*🙇Downloading Your Video*"
const XN_UP = "*TITLE:* *🔞නදී - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const XXN_UP = "*TITLE:* *🔞සමන්ති - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const XXXN_UP = "*TITLE:* *🔞කින්නරාවි - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const XXXXN_UP = "*TITLE:* *🔞December Holiday - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const XXXXXN_UP = "*TITLE:* *🔞Xmas - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const XXXXXXN_UP = "*TITLE:* *🔞යදම් - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const XXXXXXXN_UP = "*TITLE:* *🔞පට්ටන්දර - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
// LIST
const EFFECT_DESC = "Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්."
const NEED_WORD = "*ඔබ Ebook URL එකක් ඇතුළත් කළ යුතුය*"

if (Config.NEOA == 'aca83a4354ac') {

Asena.addCommand({pattern: '1xst ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://netfiletolink.herokuapp.com/36614`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Asena.addCommand({pattern: '2xst ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://netfiletolink.herokuapp.com/36618`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XXN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Asena.addCommand({pattern: '3xst ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://netfiletolink.herokuapp.com/36628`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XXXN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Asena.addCommand({pattern: '4xst ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://netfiletolink.herokuapp.com/36630`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XXXXN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Asena.addCommand({pattern: '5xst ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://netfiletolink.herokuapp.com/36632`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XXXXXN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Asena.addCommand({pattern: '6xst ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://netfiletolink.herokuapp.com/36634`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XXXXXXN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Asena.addCommand({pattern: '7xst ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://netfiletolink.herokuapp.com/36636`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XXXXXXXN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

}
