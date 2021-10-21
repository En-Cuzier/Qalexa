const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
//language
const Language = require('../language');
const Lang = Language.getString('scrapers');

if (Config.NEOA == 'aca83a4354ac') {
Asena.addCommand({pattern: 'nsfw', fromMe: true, desc: Lang.UP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/eab3f70720453825420b3.jpg";
    r_text[1] = "https://telegra.ph/file/f2ca8692932c18ffb88e6.jpg";
    r_text[2] = "https://telegra.ph/file/014f4669d9bf2d61a1751.jpg";
    r_text[3] = "https://telegra.ph/file/ef3ac7c23fc7137a5effa.jpg";
    r_text[4] = "https://telegra.ph/file/0947685121c5086f97e7f.jpg";
    r_text[5] = "https://telegra.ph/file/e866dbbb953a8e60a3d04.jpg";
    
        
     var i = Math.floor(6*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*◁○Neutro 🔞Panel ○▷*

*●🔞NEUTRO-X NSFU PANEL●*

_Limite එකක් ඇතුව Download කරන්න...🙂දිගටම එතකොට කට්ටියට Whatsapp එකෙන් Download කරගන්න පුලුවන්_

*🚫විධානය* : .xnx 
*🔞විස්තරය* : XNXX වීඩීයෝ බාගත කරයි.
*📵උදාහරණ:* .xnx https://www.xnxx.com/video-x0ly546/beautiful_girl

*🚫විධානය* : .nxlist
*📵විස්තරය*: XNXX විධාන ලැයිස්තුව පෙනවයි.

*🚫විධානය* : .feetggif
*🔞විස්තරය* : NSFU feetg Anime GIF ලබා ගැනීමට. (sticker සැකසීමට)

*🚫විධානය* : .spankgif
*🔞විස්තරය* :NSFU spnk Anime GIF ලබා ගැනීමට. (sticker සැකසීමට

*🚫විධානය* : .pussygif
*🔞විස්තරය* :NSFU pussy Anime GIF ලබා ගැනීමට. (sticker සැකසීමට

*🚫විධානය* :  .kunigif
*🔞විස්තරය* : NSFU kuni Anime GIF ලබා ගැනීමට. (sticker සැකසීමට

*🚫විධානය* : .analgif
*🔞විස්තරය* : NSFU kuni Anime GIF ලබා ගැනීමට. (sticker සැකසීමට

*⛔සිංහල XXX STORIES🙇*

*🚫විධානය* : .1xst
*📂විස්තරය* : නදී - සම්පූර්ණ කතාව -Pdf

*🚫විධානය* : .2xst
*📂විස්තරය* :සමන්ති - සම්පූර්ණ කතාව - pdf

*🚫විධානය* : .3xst
*📂විස්තරය* :කින්නරාවි - සම්පූර්ණ කතාව - pdf

*🚫විධානය* : .4xst
*📂විස්තරය* :December Holiday - සම්පූර්ණ කතාව - pdf

*🚫විධානය* : .5xst
*📂විස්තරය* :Xmas - සම්පූර්ණ කතාව - pdf

*🚫විධානය* : .6xst
*📂විස්තරය* :යදම් - සම්පූර්ණ කතාව - pdf

*🚫විධානය* : .7xst
*📂විස්තරය* :පට්ටන්දර - සම්පූර්ණ කතාව - pdf

*⛔ Random Sinhala NSFU MP4🙇*

📵 _Update එක දෙන්න වෙලා යන නිසා මේ කොටස දීලා නෑ..ඉක්මනට දෙන්නම්_
`}) 

 }));
}
