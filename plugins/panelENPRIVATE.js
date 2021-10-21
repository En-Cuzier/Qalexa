/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');

if (Config.LANG == 'EN') {
if (Config.NEOY == 'xyz') {

    Asena.addCommand({pattern: 'neotro', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
            
            var image = await axios.get (Config.MENU_LOGO, {responseType: 'arraybuffer'})
       
        await message.sendMessage (Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `*⊰᯽⊱┈──╌❊  ❊╌──┈⊰᯽⊱*
 *🚀═▣══❖⦁⦁⦁⦁⦁⦁❖══▣═🛸*
┏━━°✨•°:🌝 :°•✨°━━━┓
*◁       PRIVATE BOT◦        ▷*
┗━━°✨•°:🎭:°•✨°━━━┛

*🛸Command:* .textimg
*⭐Description:* Converts text to logo

*🛸Command:* .ftext
*⭐Description:* Converts text to francy text

*🛸Command:* .pluglist
*⭐Description:* Displays the plugin list

*🛸Command:* .emoji
*⭐Description:* Turns emoji into photos
*🚀example:* .emoji 🎭

*🛸Command:* .stemoji
*⭐Description:* Turns emoji into stickers
*🚀Example:* .stemoji 🎭

*🛸Command:* .twt
*⭐Description:* Twitter downloads videos

*🛸Command:* .mp4
*⭐Description:* Downloads video

*🛸Command:* .report
*⭐Description:* Reports a group person to the admin

*🛸Command:* .owner
*⭐Description:* Show owner details

*🛸Command:* .mmpack
*⭐Description:* Show memes list

*🛸Command:* .mediainfo
*⭐Description:* Shows media details

*🛸Command:* .nmedia
*⭐Description:* Displays a list of 25+ media editing media tools

*🛸Command:* .show
*⭐Description:* Shows details of films & tv series 

*🛸Command:*.ip
*⭐Description:* Show details of Ip address

*🛸Command:* .apkmod
*⭐Description:* Show mod app list

*🛸Command:* .anime
*⭐Description:* Provides random anime photos

*🛸Command:* .animesay
*⭐Description:* it Provided photos as if your letters were placed on a board with anime in hand

*🛸Command:* .trumpsay
*⭐Description:* Trump s Twitter account captures your text and provides photos

*🛸Command:* .lyric
*⭐Description:* Find the lyrics of the song you provided

*🛸Command:* .wame
*⭐Description:* Provides the introductory link

*🛸Command:* .eva
*⭐Description:* Activates full functional EVA AI features Turn your account into a ai chatbot
*⌨️ Example:* .eva  onoff

*🛸Command:* .jid
*⭐Description:* Giving user s JID.

*🛸Command:* .invite
*⭐Description:* Provides the group s invitation link.

*🛸Command:* .ttp
*⭐Description:* Converts text to plain painting.

*🛸Command:* .attp
*⭐Description:* Adds rainbow effect to the text as a sticker.

*🛸Command:* .carbon
*⭐Description:* Uses carbon.sh for Text-to-Image
*⚠️ Warn:* Please only type in en and tr character!

*🛸Command:* .mp3
*⭐Description:* Converts video to sound.

*🛸Command:* .photo
*⭐Description:* Converts the sticker to a photo.


*🛸Command:* .dyno
*⭐Description:* Check heroku dyno usage

*🛸Command:* .notes
*⭐Description:* Shows all your existing notes.

*🛸Command:* .qr
*⭐Description:* It Converts Text To Qr Code

*🛸Command:* .trt
*⭐Description:* It translates with Google Translate. You must reply any message.

*⌨️ Example:* .trt en si  (From english to sinhala)

*🛸Command:* .tts
*⭐Description:* It converts text to sound.

*🛸Command:* .song
*⭐Description:* Uploads the song you wrote.

*🛸Command:* .dcsong
*⭐Description:* Uploads the Mp3 Document  song you wrote.

*🛸Command:* .video
*⭐Description:* Downloads video from YouTube.

*🛸Command:* .yt
*⭐Description:* It searchs on YouTube.

*🛸Command:* .wiki
*⭐Description:* Searches query on Wikipedia.

*🛸Command:* .img
*⭐Description:* Searches for related pics on Google

*🛸Command:* .github
*⭐Description:* Collects github information from the given username.
⌨️ Example: .github TeenuhX

*🛸Command:* .ss
*⭐Description:* Takes a screenshot from the page in the given link.

*🛸Command:* .bot
*⭐Description:* Chat with Simi Simi AI Bot.

*🛸Command:* .spdf
*⭐Description:* Converts a Site into PDF

*🛸Command:* .sticker
*⭐Description:* It converts your replied photo or video to sticker.

*🛸Command:* .alive
*⭐Description:* Does bot work?

*🛸Command:* .sysd
*⭐Description:* Shows the system properties.

*🛸Command:* .tagadmin
*⭐Description:* Tags group admins.

*🛸Command:* .tagall
*⭐Description:* Tags everyone in the group.

*🛸Command:* .stam
*⭐Description:* Sends the replied message to all members in the group.

*🛸Command:* .unvoice
*⭐Description:* Converts audio to sound recording.

*🛸Command:* .unaudio
*⭐Description:* Converts sound recording to an audio File.

*🛸Command:* .weather
*⭐Description:* Shows the weather.

*🛸Command:* .ping
*⭐Description:* Measures your ping.

*🛸Command:* .short
*⭐Description:* Shorten the long link

*🛸Command:* .ban
*⭐Description:* Ban someone in the group. Reply to message or tag a person to use command.

*🛸Command:* .add
*⭐Description:* Adds someone to the group.

*🛸Command:* .promote
*⭐Description:* Makes any person an admin.

*🛸Command:* .demote
*⭐Description:* Takes the authority of any admin.

*🛸Command:* .mute
*⭐Description:* Mute the group chat. Only the admins can send a message.

*🛸Command:* .unmute
*⭐Description:* Unmute the group chat. Anyone can send a message.

*🛸Command:* .afk
*⭐Description:* It makes you AFK - Away From Keyboard.

*🛸Command:* .clear
*⭐Description:* Clear all the messages From this Chat.

*🛸Command:* .filter
*⭐Description:* It adds a filter. If someone writes your filter, it send the answer. If you just write .filter, it show s your filter list.

*🛸Command:* .stop
*⭐Description:* Stops the filter you added previously.

*🛸Command:* .welcome
*⭐Description:* It sets the welcome message. If you leave it blank it shows the welcome message.

*🛸Command:* .goodbye
*⭐Description:* Sets the goodbye message. If you leave blank, it show s the goodbye message.

*🛸Command:* .save
*⭐Description:* Reply a message and type .save or just use .save <Your note> without replying

*🛸Command:* .deleteNotes
*⭐Description:* Deletes *all* your saved notes.

*🛸Command:* .pkg
*⭐Description:* Install external plugins.

*🛸Command:* .plugin
*⭐Description:* Shows the plugins you have installed.

*🛸Command:* .remove
*⭐Description:* Removes the plugin.

*🛸Command:* .kickme
*⭐Description:* It kicks you from the group you are using it in.

*🛸Command:* .pp
*⭐Description:* Makes the profile photo what photo you reply.

*🛸Command:* .block
*⭐Description:* Block user.

*🛸Command:* .unblock
*⭐Description:* Unblock user.

*🛸Command:* .update
*⭐Description:* Checks the update.
*🛸Command:* .delvar
*⭐Description:* Delete heroku config var

*🛸Command:* .getvar
*⭐Description:* Get heroku config var

*🛸Command:* .update now
*⭐Description:* Its Update Your Bot New version..

*🛸Command:* .search
*⭐Description:* 

*⊰᯽⊱┈──╌❊  ❊╌──┈⊰᯽⊱*

`}) 

 }));
 }
}
