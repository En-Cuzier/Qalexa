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

    Asena.addCommand({pattern: 'textimg', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
            
            var image = await axios.get (Config.MENU_LOGO, {responseType: 'arraybuffer'})
       
        await message.sendMessage (Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `*⊰᯽⊱┈──╌❊  ❊╌──┈⊰᯽⊱*
 *═▣══❖⦁⦁⦁👽⦁⦁⦁❖══▣═*
 ╔════════════════╗
*╠▷  Neotro Logo Pack🎭◁╣*
╚════════════════╝

This makes it easy to create different LoGo All you have to do is put your letters in front of the following command.
Example: .ninjalogo Neotrox

▷ Failure to execute some of the commands here is not a bot error but an API issue with the service.

*🚀command*: .nxninja
*🌀 Description*: It translates your text into a ninja logo.

 *🚀command*: .nwolf
*🌀Description*: It translates your text into a wolf logo

 *command*: .nxwolf
*🌀Description*: It translates your text into a purple Wolf logo

*🚀command*: .marvel
*🌀Description*: It translates your text into the Marvel logo

*🚀command*: .dgold
*🌀 Description*: It converts your text into a photo with gold lettering

*🚀command*: .glossy
*🌀 Description*: It translates your text into a glossy logo

*🚀command*: .njoker
*🌀 Description*: It translates your text into a joker logo

*🚀command*: .horror
*🌀 Description*: It converts your text into Horror Photos

*🚀command*: .blood
*🌀Description*: .It translates your text into a bloody photo

*command*: .toxic
*🌀Description*: It translates your characters into toxic characters

*🚀command*: .space3d
*🌀Description*: It translate your text into Space LOGO

*🚀command*: .luxury
*🌀Description*: It translates your letters into luxury gold

*🚀command*: .xmas
*🌀Description*: It translates your text into Christmas photos

*🚀command*: .metald
*🌀 Description*: It translates your text into Metak Dark logo

*⚜command*: ▷ .sand
*💠 Description* : Creates a beach font.

*🚀command:* ▷  .bcwall
*🪐Description:* It translates characters as a wall art

*🌀command:* ▷  .ninjalogo
*🧞Description:* It creates a ninja style logo

*🌀command:* ▷ .buttonyt
*🧞Description:* This will add your text to the Youtube Golden button.

*🚀command:* ▷ .glitch
*🌀Description:* Photographs text in glitch format

*🚀command:* ▷ ▷ .freefire
*🧞 Description:* Creates freefire gaming logo

*🌀command:* ▷ .cfire
*🧞Description:* Creates gaming logo

*🚀command:* ▷ .light
*🧞Description:* Translates text into Neon text

*🌀command:* ▷  .cslogo
*🧞Description:* Creates gaming logo

*🌀command:* ▷  .nlogo
* 🧞Description:* Makes your font look like a logo

*🚀command:* ▷ .s3d
*🌀Description:* Sets the text as a 3D Box

*🌀command:* ▷  .blackpink
*🧞Description:* Makes your font look like a blackpink logo.

*🌀command:* ▷  .pornhub
*🧞 Description:* Set your font to Pornhub Logo

*🌀command:* ▷  .neolight
*🧞Description:* .It processes letters in a Neoncube

*command:* ● ▷ .blood
*🧞Description:* The letters are processed into bloody photos

*🌀command:* ● ▷ .3dtext
* 🧞Description:* Configures the font as 3D

*🌀command:* ns .nsky
*🚀Description:* Turns letters into photos drawn in the sky.

*🌀command:* ● ▷ .nleaves
*🧞Description:* The letters are written on bright grass.

*🌀command:* ▷ ▷ .nglow
*🚀Description:* Sets as Neon

*🌀command:* ▷ ▷ .nfire
*🧞Description:* It photographs the text brilliantly.

*command:* ▷ .anony
*🧞Description:* It translates your characters into a photo of anonymous hackers.

*🌀command:* .ptext
*💠 Description*: It converts text into video

*command*: .colortext
*💠Description*: Converts text to video as rainbow color

*🌀command*: .vtext
*💠 Description*: Converts text into video.

*━⚜NEUTRO PACK⚜━*
`}) 

 }));
 }
}
