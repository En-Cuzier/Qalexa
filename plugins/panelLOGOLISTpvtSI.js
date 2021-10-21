const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');

if (Config.LANG == 'SI') {
if (Config.NEOY == 'xyz') {

    Asena.addCommand({pattern: 'textimg', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
            
            var image = await axios.get (Config.MENU_LOGO, {responseType: 'arraybuffer'})
       
        await message.sendMessage (Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `*⊰᯽⊱┈──╌❊  ❊╌──┈⊰᯽⊱*
 *═▣══❖⦁⦁⦁👽⦁⦁⦁❖══▣═*
 ╔════════════════╗
*╠▷  Neotro Logo Pack🎭◁╣*
╚════════════════╝

▷මෙය පහසුවෙන්ම විවිධ LoGo සාදයි කළයුතු වන්නෙ පහත විධානයකට ඉදිරියෙන් ඔබේ අකුරු දමන්න පමණි.
🙇උදා: .ninjalogo Neotrox

▷ මෙහි සමහරක් Command ක්‍රියා නොකිරීම Bot ගෙ දෝෂයක් නොවෙ සෙවාව ලබාගත් API ගැටලු වේ.

*🚀විධානය* : .nxninja
*🌀විස්තරය* : එය ඔබෙ අකුරු Ninja logo බවට පරිවර්තනය කරයි.

 *🚀විධානය* : .nwolf
*🌀විස්තරය* :එය ඔබෙ අකුරු wolf logo බවට පරිවර්තනය කරයි

 *🚀විධානය* : .nxwolf
*🌀විස්තරය* :එය ඔබෙ අකුරු දම් ලාට Wolf ලාංඡනයක්  බවට පරිවර්තනය කරයි

*🚀විධානය* : .marvel
*🌀විස්තරය* :එය ඔබෙ අකුරු Marvel  logo බවට පරිවර්තනය කරයි

*🚀විධානය* : .dgold
*🌀විස්තරය* :එය ඔබෙ අකුරු රත්තරං පැහැ අකුරු සහිත ඡායාරූපයක් බවට පරිවර්තනය කරයි

*🚀විධානය* : .glossy
*🌀විස්තරය* :එය ඔබෙ අකුරු glossy logo බවට පරිවර්තනය කරයි

*🚀විධානය* : .njoker
*🌀විස්තරය* :එය ඔබෙ අකුරු joker logo බවට පරිවර්තනය කරයි

*🚀විධානය* : .horror
*🌀විස්තරය* :එය ඔබෙ අකුරු Horror ඡායාරූප  බවට පරිවර්තනය කරයි

*🚀විධානය* : .blood
*🌀විස්තරය*: .එය ඔබෙ අකුරු ලේ සහිත ඡායාරූපයක් බවට පරිවර්තනය කරයි

*🚀විධානය* : .toxic
*🌀විස්තරය* :එය ඔබෙ අකුරු විෂ සහිත අකුරු  බවට පරිවර්තනය කරයි

*🚀විධානය* : .space3d
*🌀විස්තරය* :එය ඔබෙ අකුරු Space LOGO බවට පරිවර්තනය කරයි

*🚀විධානය* : .luxury
*🌀විස්තරය* :එය ඔබෙ අකුරු luxury gold බවට පරිවර්තනය කරයි

*🚀විධානය* : .xmas
*🌀විස්තරය* :එය ඔබෙ අකුරු නත්තල් සහිත ඡායාරූප බවට පරිවර්තනය කරයි

*🚀විධානය* : .metald
*🌀විස්තරය* :එය ඔබෙ අකුරු Metak Dark logo බවට පරිවර්තනය කරයි

*⚜විධානය* :●▷ .sand
*💠විස්තරය* : මුහුදු වෙරළක අකුරු සාදයි.

*🌀විධානය:* ●▷ .bcwall
*🧞විස්තරය:*  එය වෝල් ආර්ට් එකක් ලෙස අකුරු පරිවර්තනය කරයි

*🌀විධානය:* ●▷ .ninjalogo
*🧞විස්තරය:* එය Ninja ආකාරයේ Logo සාදයි

*🌀විධානය:* ●▷ .buttonyt
*🧞විස්තරය:* මෙය Youtube Golden බටනයට ඔබේ අකුරු යොදයි.

*🌀විධානය:* ●▷ .glitch
*🧞විස්තරය:* glitch අකාරයට අකුරු ඡායාරූප කරයි

*🌀විධානය:* ●▷.freefire
*🧞විස්තරය:* freefire gaming ලෝගෝ සාදයි

*🌀විධානය:* ●▷ .cfire
*🧞විස්තරය:* gaming ලෝගෝ සාදයි

*🌀විධානය:* ●▷ .light
*🧞විස්තරය:* අකුරු Neon text ලෙස පරිවර්තනය කරයි

*🌀විධානය:* ●▷ .cslogo
*🧞විස්තරය:* gaming ලෝගෝ සාදයි

*🌀විධානය:* ●▷ .nlogo
*🧞විස්තරය:*  ඔබෙ අකුරු ලෝගෝ එකක් ලෙස සකසයි

*🌀විධානය:* ●▷ .s3d
*🧞විස්තරය:* අකුරු 3D Box ලෙස සකසයි

*🌀විධානය:* ●▷ .blackpink
*🧞විස්තරය:* ඔබෙ අකුරු blackpink ලෝගෝ ලෙස සකසයි.

*🌀විධානය:* ●▷.pornhub
*🧞විස්තරය:* ඔබේ අකුරු Pornhub Logo ලෙස සකසයි

*🌀විධානය:* ●▷.neolight
*🧞විස්තරය:* .එය අකුරු Neoncube එකක් තුල සකසයි

*🌀විධානය:* ●▷ .blood
*🧞විස්තරය:* අකුරු ලේ සහිත ඡායාරූප ලෙස සකසයි

*🌀විධානය:* ●▷.3dtext
*🧞විස්තරය:* අකුරු 3D ලෙස සකසයි

*🌀විධානය:* ●▷ .nsky
*🧞විස්තරය:* අකුරු අහසේ ඇදි ලෙස ඡායාරූප බවට පත් කරයි.

*🌀විධානය:* ●▷.nleaves
*🧞විස්තරය:* අකුරු දීප්තිමත් තණකොළ මත ලියයි.

*🌀විධානය:* ●▷.nglow
*🧞විස්තරය:* Neon ලෙස සකසයි

*🌀විධානය:* ●▷.nfire
*🧞විස්තරය:* එය දීප්තිමත් ලෙස අකුරු ඡායාරූප කරයි.

*🌀විධානය:* ●▷.anony
*🧞විස්තරය:* එය Anonymous hacker වරුන්ගෙ චායාරූපයකට ඔබේ අකුරු පරිවර්තනය කරයි.

*🌀විධානය:*  .ptext
*💠විස්තරය* : එය අකුරු Video බවට හරවයි

*🌀විධානය* : .colortext
*💠විස්තරය* : එය අකුරු දේදුන්නක වර්ණ ලෙස video බවට හරවයි

*🌀විධානය* : .vtext
*💠විස්තරය* : එය අකුරු video බවට හරවයි.

*━⚜NEUTRO PACK⚜━*
`}) 

 }));
 }
}
