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

    Asena.addCommand({pattern: 'help', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
            
            var image = await axios.get (Config.MENU_LOGO, {responseType: 'arraybuffer'})
       
        await message.sendMessage (Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `*⊰᯽⊱┈──╌❊  ❊╌──┈⊰᯽⊱*
 *╔═══◈⎚🧞මූලික උදව් ⎚◈═══╗*

🎭 *.alive* 
🔮 Bot ක්‍රියාත්මක වේදැයි පරීක්ෂා කරයි.

🎭 *.neotro* 
🔮 සම්පූර්ණ විධාන ලැයිස්තුව පෙන්වයි.

🎭 *.owner* 
🔮 බොට් අයිතිකරුවාගේ විස්තර පෙන්නයි

🎭 *.setvar WORK_TYPE: public* 
🔮 Bot public කිරීමට.

🎭 *.setvar WORK_TYPE: private* 
🔮 Bot private කිරීමට.

🎭 *.setvar MENU* : අදාල විස්තරය.
🔮 ඔබගෙ බොට්ගෙ විධාන ලැයිස්තුව එකතු කිරීමට යමක් ඇත්තන් මෙය භාවිතා කරන්න

🎭 *.restart* 
🔮 Bot නැවත පනගැන්වීමට (සිරවූ විටක)

🎭 *.shutdown* 
🔮 Bot වසා දැමිමට
⚙️ නැවත On කිරිමට Herokuහි Resources වලින් on කල යුතුය

🎭 *.setvar SUDO: 94XXXXXXXX* 
🔮 Bot වෙත තවත් පාලකයෙකු ලබදීමට(public/private අවස්ථා දෙකෙහිදීම ඔහුට පාලනය කල හැක.)

🎭 *.dyno* 
🔮 ඔබගේ Heroku පැය ප්‍රමාණය කොපමනද බැලීමට. මාසිකව පැය 550ක් ලැබෙන අතර එය මසකට පෙර අවසන් වූවිට ඔබගේ bot ක්‍රියා විරහිත වේ.ඊලග මාසය එනතුරු බලා හිදීම හෝ  අලුත් හෙරොකු එකක සාදාගත යුතු වේ. 

🎭 *.adon AI_BOT:false* 
🔮 AI Bot (.bot විධානය) ක්‍රියාවිරහිත කිරීමට මෙය භාවිතා කරන්න
🎭 *.adon AI_BOT:true* 
🔮 AI bot නැවත On කිරීම මෙය මඟින් සිදුකල හැක.

🎭 *.eva on* 
🔮 AI EVA චැට් බොට් ක්‍රියාත්මක කිරීම මෙය මගින් හැක.
🎭 *.eva off* 
🔮 AI EVA චැට් බොට් ක්‍රියාවිරහිත කරයි.

🎭 *.filter "text1" "text2"* 
🔮 යමෙකු යම් වචනයක් ඇතුලත් කලහොත් එයට පිලිතුරක් සකසා ගැනිමට 
⚙️ text1 ඇතුලත් කලහොත් text2 පෙන්නයි

🎭  *.setown*
🔮 Owner Menu එක සැකසිමට.
⚙️ ඉදිරියෙන් අදාල විස්තර එකොලහ # ලකුන මගින් වෙන්කර ඇතුලත් කරන්න. 
🧚 වැඩි විස්තර සදහා *.cmd setown* එක ඇතුලත් කරන්න

🎭 *setvar ALIVE_MESSAGE:අදාල MSG එක* 
🔮 Bot ගෙ Alive Message එක වෙනස් කරන්න ඕනෙ නම්.

🎭 *setvar ALIVE_LOGO: link*
🔮 Bot ගෙ alive පින්තූරෙ වෙනස් කරන්න ඔනෙනම් පහල Site එකට ඔයාගෙ Photo එක Upload කරලා Link එක දාන්න
🎲 https://imgbb.com/
🔮 ටෙලිග්‍රෑම් පාවිච්චි කරනවනම් ලේසියෙන් මේ Bot ට Img එක දාලා link එක ගන්න පුලුවන්
🎲 https://t.me/FnTelegraphBot

🎭 *setvar WELCOME_LOGO: link* 
🔮 මේකෙන් ඔයාට Welcome msg එකේ GIF එක වෙනස් කරන්න පුලුවන් එතනටත් පහල site එක්කට GIF එකක් Upload කරලා link එක දාන්න
🎲 https://www.mailboxdrive.com/upload/
🔮 ටෙලිග්‍රෑම් පාවිච්චි කරනවනම්
🎲 https://t.me/FnTelegraphBot

🎭 *setvar BYE_LOGO: link*
🔮 ඒකෙත් Good bye Logo වෙනස් කරන්න,පුලුවන්උඩ විදිහටම ඒකටත් දාන්න

🧚‍♀️Neutro Bot News :-
https://chat.whatsapp.com/LuLTEKm22fp8gv4ltCmKMo

🧚‍♀️Neutro plugins :-
https://chat.whatsapp.com/JJs2iwfF0VKL3IWrIyr7AT
https://t.me/neotroxplugins

🧚‍♀️Neutro Support Community :-
🎭https://chat.whatsapp.com/GTgqgMTo7FoJ1GqdijshsX

*╚═══✿══◈══⎚══◈══✿═══╝*

*⊰᯽⊱┈──╌❊ ❊╌──┈⊰᯽⊱*
 
`}) 

 }));
 }
}
