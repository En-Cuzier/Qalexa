const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

if (Config.WORKTYPE == 'public') {
Asena.addCommand({ pattern: 'ftext ?(.*)', fromMe: false }, async (message, match) => {

const word = match[1]
if (!word) return await message.sendMessage(" *Please Input Word* ")

await message.sendMessage('👻 *Text Converting* 🕊')

await axios
      .get(`https://bx-hunter.herokuapp.com/api/fancytext?text=${word}&apikey=Ikyy69`)
      .then(async (response) => {
        const {
         result,
	status,	
        } = response.data

   
	const msg = `*╔═══◈⎚ Fancy Text ⎚◈═══╗* \n             *┖ɴᴇᴏᴛʀᴏ x ʀᴀᴍɪʏᴀ┛* \n\n ${result} \n\n                 *ℕ𝕖𝕠𝕥𝕣𝕠𝕩 ℙ𝕣𝕠𝕛𝕖𝕔𝕥™*\n*╚═══✿══◈══⎚══◈══✿═══╝*`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	})    

})
  } /*Public close */
  
else if (Config.WORKTYPE == 'private') {
	
	Asena.addCommand({ pattern: 'ftext ?(.*)', fromMe: true }, async (message, match) => {

const word = match[1]
if (!word) return await message.sendMessage(" *Please Input Word* ")

await message.sendMessage('👻 *Text Converting* 🕊')

await axios
      .get(`https://bx-hunter.herokuapp.com/api/fancytext?text=${word}&apikey=Ikyy69`)
      .then(async (response) => {
        const {
         result,
	status,	
        } = response.data

   
	const msg = `*╔═══◈⎚ Fancy Text ⎚◈═══╗* \n             *┖ɴᴇᴏᴛʀᴏ x ʀᴀᴍɪʏᴀ┛* \n\n ${result} \n\n                 *ℕ𝕖𝕠𝕥𝕣𝕠𝕩 ℙ𝕣𝕠𝕛𝕖𝕔𝕥™*\n*╚═══✿══◈══⎚══◈══✿═══╝*`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	})    

})
  } /*Private close */
