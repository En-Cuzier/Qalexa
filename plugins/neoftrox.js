const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const Language = require('../language');
const XN_DESC = "NSFU වීඩියෝ බාගත කරයි"
const XN_NEED = "*Link අවශ්‍යයි!*"
const XN_D = "*🙇Downloading Your Video*"
const XN_UP = "*🔞Uploading Your Video*"
const XN_NO = "*කණගාටුයි හමු නොවීය...*"


if (Config.WORKTYPE == 'private') {

   Asena.addCommand({ pattern: 'xnx ?(.*)', fromMe: true, desc: XN_DESC}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,XN_NEED,MessageType.text, {quoted: message.data})
         await message.client.sendMessage(message.jid,XN_D,MessageType.text)
        await axios
          .get(`https://zenzapi.xyz/api/xnxx?url=${link}&apikey=3284f3b96df6`)
          .then(async (response) => {
            const {
              url,
            } = response.data.result
    
            const videoBuffer = await axios.get(url, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,XN_UP,MessageType.text, {quoted: message.data});
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,XN_NO,MessageType.text, {quoted: message.data}),
        )
      },
    )
}

if (Config.WORKTYPE == 'public') {

   Asena.addCommand({ pattern: 'xnx ?(.*)', fromMe: true, desc: XN_DESC}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,XN_NEED,MessageType.text, {quoted: message.data})
         await message.client.sendMessage(message.jid,XN_D,MessageType.text)
        await axios
          .get(`https://zenzapi.xyz/api/xnxx?url=${link}&apikey=3284f3b96df6`)
          .then(async (response) => {
            const {
              url,
            } = response.data.result
    
            const videoBuffer = await axios.get(url, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,XN_UP,MessageType.text, {quoted: message.data});
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,XN_NO,MessageType.text, {quoted: message.data}),
        )
      },
    )
}
