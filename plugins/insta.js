const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('scrapers');
const capt = "🎭 *NeotroX* 🕊"

if (Config.WORKTYPE == 'public') {
	
Asena.addCommand({ pattern: 'pinsta ?(.*)', fromMe: false }, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Insta Link That Includes Photo* ")

    await message.sendMessage('👻 *NeotroX Insta Downloader* 🕊 \n'+Lang.DOWNLOADING_VIDEO)

				await axios
					.get(`https://bx-hunter.herokuapp.com/api/igdownload?url=${link}&apikey=Ikyy69`)
					.then(async(response) => {
						const {
							linkdownload,
							status,
						} = response.data

						const linkdata = await axios.get(linkdownload, {
							responseType: 'arraybuffer'
						})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.image, {
								caption: capt,
						})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID LINK OR NO PHOTO FOUND*"),
							)
					})
					
}) /* pattern close*/

Asena.addCommand({ pattern: 'vinsta ?(.*)', fromMe: false }, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Insta Link That Includes Video* ")

    await message.sendMessage('👻 *NeotroX Insta Downloader* 🕊 \n'+Lang.DOWNLOADING_VIDEO)

				await axios
					.get(`https://bx-hunter.herokuapp.com/api/igdownload?url=${link}&apikey=Ikyy69`)
					.then(async(response) => {
						const {
							linkdownload,
							status,
						} = response.data

						const linkdata = await axios.get(linkdownload, {
							responseType: 'arraybuffer'
						})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {
								caption: capt,
						})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID LINK OR NO VIDEO FOUND*"),
							)
					})
					
}) /* pattern close*/

Asena.addCommand({ pattern: 'pinsta ?(.*)', fromMe: true }, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Insta Link That Includes Photo* ")

    await message.sendMessage('👻 *NeotroX Insta Downloader* 🕊 \n'+Lang.DOWNLOADING_VIDEO)

				await axios
					.get(`https://bx-hunter.herokuapp.com/api/igdownload?url=${link}&apikey=Ikyy69`)
					.then(async(response) => {
						const {
							linkdownload,
							status,
						} = response.data

						const linkdata = await axios.get(linkdownload, {
							responseType: 'arraybuffer'
						})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.image, {
								caption: capt,
						})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID LINK OR NO PHOTO FOUND*"),
							)
					})
					
}) /* pattern close*/

Asena.addCommand({ pattern: 'vinsta ?(.*)', fromMe: true }, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Insta Link That Includes Video* ")

    await message.sendMessage('👻 *NeotroX Insta Downloader* 🕊 \n'+Lang.DOWNLOADING_VIDEO)

				await axios
					.get(`https://bx-hunter.herokuapp.com/api/igdownload?url=${link}&apikey=Ikyy69`)
					.then(async(response) => {
						const {
							linkdownload,
							status,
						} = response.data

						const linkdata = await axios.get(linkdownload, {
							responseType: 'arraybuffer'
						})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {
								caption: capt,
						})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID LINK OR NO VIDEO FOUND*"),
							)
					})
					
}) /* pattern close*/

} /* public close*/

else if (Config.WORKTYPE == 'private') {
	
	Asena.addCommand({ pattern: 'pinsta ?(.*)', fromMe: true }, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Insta Link That Includes Photo* ")

    await message.sendMessage('👻 *NeotroX Insta Downloader* 🕊 \n'+Lang.DOWNLOADING_VIDEO)

				await axios
					.get(`https://bx-hunter.herokuapp.com/api/igdownload?url=${link}&apikey=Ikyy69`)
					.then(async(response) => {
						const {
							linkdownload,
							status,
						} = response.data

						const linkdata = await axios.get(linkdownload, {
							responseType: 'arraybuffer'
						})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.image, {
								caption: capt,
						})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID LINK OR NO PHOTO FOUND*"),
							)
					})
					
}) /* pattern close*/

Asena.addCommand({ pattern: 'vinsta ?(.*)', fromMe: true }, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Insta Link That Includes Video* ")

    await message.sendMessage('👻 *NeotroX Insta Downloader* 🕊 \n'+Lang.DOWNLOADING_VIDEO)

				await axios
					.get(`https://bx-hunter.herokuapp.com/api/igdownload?url=${link}&apikey=Ikyy69`)
					.then(async(response) => {
						const {
							linkdownload,
							status,
						} = response.data

						const linkdata = await axios.get(linkdownload, {
							responseType: 'arraybuffer'
						})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {
								caption: capt,
						})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID LINK OR NO VIDEO FOUND*"),
							)
					})
					
}) /* pattern close*/

} /* private close*/
