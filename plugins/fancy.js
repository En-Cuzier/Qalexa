const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

if (Config.WORKTYPE == 'public') {
Asena.addCommand({ pattern: 'ftext ?(.*)', fromMe: false }, async (message, match) => {

const word = match[1]
if (!word) return await message.sendMessage(" *Please Input Word* ")

await message.sendMessage('๐ป *Text Converting* ๐')

await axios
      .get(`https://bx-hunter.herokuapp.com/api/fancytext?text=${word}&apikey=Ikyy69`)
      .then(async (response) => {
        const {
         result,
	status,	
        } = response.data

   
	const msg = `*โโโโโโ Fancy Text โโโโโโ* \n             *โษดแดแดแดสแด x สแดแดษชสแดโ* \n\n ${result} \n\n                 *โ๐๐ ๐ฅ๐ฃ๐ ๐ฉ โ๐ฃ๐ ๐๐๐๐ฅโข*\n*โโโโโฟโโโโโโโโโโโโฟโโโโ*`
	
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

await message.sendMessage('๐ป *Text Converting* ๐')

await axios
      .get(`https://bx-hunter.herokuapp.com/api/fancytext?text=${word}&apikey=Ikyy69`)
      .then(async (response) => {
        const {
         result,
	status,	
        } = response.data

   
	const msg = `*โโโโโโ Fancy Text โโโโโโ* \n             *โษดแดแดแดสแด x สแดแดษชสแดโ* \n\n ${result} \n\n                 *โ๐๐ ๐ฅ๐ฃ๐ ๐ฉ โ๐ฃ๐ ๐๐๐๐ฅโข*\n*โโโโโฟโโโโโโโโโโโโฟโโโโ*`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	})    

})
  } /*Private close */
