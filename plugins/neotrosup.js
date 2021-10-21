
const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('anime');

    Asena.addCommand({pattern: 'tq1ns', fromMe: true, desc: Lang.AN}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.ibb.co/FwPP04q/images.jpg";
    r_text[1] = "https://i.ibb.co/GH2tWJ4/images-1.jpg";
    r_text[2] = "https://i.ibb.co/Mf79pVH/download.jpg";
    r_text[3] = "https://i.ibb.co/b11BDWH/images-2.jpg";
    r_text[4] = "https://i.ibb.co/7v1m94x/images-3.jpg";
    r_text[5] = "https://i.ibb.co/vdKJxNX/images-4.jpg";
    r_text[6] = "https://i.ibb.co/cvKvyzR/images-5.jpg";
    r_text[7] = "https://i.ibb.co/WWRt8vZ/images-6.jpg";
    r_text[8] = "https://i.ibb.co/m8Xg7Gj/images-7.jpg";
    r_text[9] = "https://i.ibb.co/FDYQHzB/images-8.jpg";
    r_text[10] = "https://i.ibb.co/fFTNXcy/images-9.jpg";
    r_text[11] = "https://i.ibb.co/rygwb0Q/images-10.jpg";
    r_text[12] = "https://i.ibb.co/ts8y9rC/images-11.jpg";
    r_text[13] = "https://i.ibb.co/VMHd02c/images-12.jpg";
    r_text[14] = "https://i.ibb.co/D1j3Np6/images-13.jpg";
    r_text[15] = "https://i.ibb.co/qWnhqVf/images-14.jpg";
    r_text[16] = "https://i.ibb.co/J7tr09N/images-15.jpg";
    r_text[17] = "https://i.ibb.co/NVhyQ1V/images-16.jpg";
    r_text[18] = "https://i.ibb.co/PcV78Mv/images-17.jpg";
    r_text[19] = "https://i.ibb.co/hYFY5PZ/images-18.jpg";
    r_text[20] = "https://i.ibb.co/n0vd5yR/images-19.jpg";
    r_text[21] = "https://i.ibb.co/hybc9KX/images-20.jpg";
    r_text[22] = "https://i.ibb.co/6JW0sL7/images-21.jpg";
    r_text[23] = "https://i.ibb.co/8MX592D/images-22.jpg";
    r_text[24] = "https://i.ibb.co/gPtrHPW/images-23.jpg";
    r_text[25] = "https://i.ibb.co/mGtWXyW/images-24.jpg";
    r_text[26] = "https://i.ibb.co/HD4rrbn/images-25.jpg";
    r_text[27] = "https://i.ibb.co/8mG4Xht/images-26.jpg";
    r_text[28] = "https://i.ibb.co/yF8qzgQ/images-27.jpg";
    r_text[29] = "https://i.ibb.co/vvhTtL9/images-28.jpg";
    r_text[30] = "https://i.ibb.co/x8WZS1G/images-29.jpg";
    r_text[31] = "https://i.ibb.co/hsb9c1N/images-30.jpg";
    r_text[32] = "https://i.ibb.co/tQ2r1d1/images-31.jpg";
    r_text[33] = "https://i.ibb.co/5Mr70MY/images-32.jpg";
    r_text[34] = "https://i.ibb.co/340nk6r/images-33.jpg";
    r_text[35] = "https://i.ibb.co/3yWYZ9X/images-34.jpg";
    r_text[36] = "https://i.ibb.co/59G5Gpc/images-35.jpg";
    r_text[37] = "https://i.ibb.co/j48QYXt/images-36.jpg";
    r_text[38] = "https://i.ibb.co/Nx2FHGB/images-37.jpg";
    r_text[39] = "https://i.ibb.co/7tc4Hph/images-38.jpg";
    r_text[40] = "https://i.ibb.co/jkKc78B/images-39.jpg";
    r_text[41] = "https://i.ibb.co/RTqRWn7/images-40.jpg";
    r_text[42] = "https://i.ibb.co/kS6LW3q/images.jpg";
    r_text[43] = "https://i.ibb.co/THdY0MS/images-1.jpg";
    r_text[44] = "https://i.ibb.co/n0P7KVt/images-2.jpg";
    r_text[45] = "https://i.ibb.co/MnZn5Tx/images-3.jpg";
    r_text[46] = "https://i.ibb.co/SVwMXrG/images-4.jpg";
    r_text[47] = "https://i.ibb.co/2jZb1mc/images-5.jpg";
    r_text[48] = "https://i.ibb.co/sPhWTxD/images-7.jpg";
    r_text[49] = "https://i.ibb.co/pjcFyzr/images-6.jpg";
    r_text[50] = "https://i.ibb.co/XFSmcfj/images-9.jpg";
    r_text[51] = "https://i.ibb.co/TM8Qxt9/images-8.jpg";
    r_text[52] = "https://i.ibb.co/f9RQ30f/images-10.jpg";
    r_text[53] = "https://i.ibb.co/9ZRBQHP/images-11.jpg";
    r_text[54] = "https://i.ibb.co/Sm9PmLT/images-12.jpg";
    r_text[55] = "https://i.ibb.co/B2BzjdR/images-13.jpg";
    r_text[56] = "https://i.ibb.co/HB8kDqr/images-14.jpg";
    r_text[57] = "https://i.ibb.co/r6HXkC6/images-15.jpg";
    r_text[58] = "https://i.ibb.co/6BMF531/images-16.jpg";
    r_text[59] = "https://i.ibb.co/47b8YYW/images-17.jpg";
    r_text[60] = "https://i.ibb.co/bzZ66dN/images-18.jpg";
    r_text[61] = "https://i.ibb.co/kmKGSJ1/images-19.jpg";
    r_text[62] = "https://i.ibb.co/nDfrfgd/images-20.jpg";
    r_text[63] = "https://i.ibb.co/bXf8Tj1/images-21.jpg";
    r_text[64] = "https://i.ibb.co/4pQxm7k/images-22.jpg";
    r_text[65] = "https://i.ibb.co/ngLqQdh/images-23.jpg";
    r_text[66] = "https://i.ibb.co/Y3RtBPB/images-24.jpg";
    r_text[67] = "https://i.ibb.co/0y2vDZ8/images-25.jpg";
    r_text[68] = "https://i.ibb.co/0Gzdx1d/images-26.jpg";
    r_text[69] = "https://i.ibb.co/54wVtm8/images-27.jpg";
    r_text[70] = "https://i.ibb.co/bQkJTZm/images-28.jpg";
    r_text[71] = "https://i.ibb.co/hCNMWqG/images-29.jpg";
    r_text[72] = "https://i.ibb.co/qDphPx9/images-30.jpg";
    r_text[73] = "https://i.ibb.co/M8jRW8N/IMG-20210410-WA0308.png";
    r_text[74] = "https://i.ibb.co/k1nmStf/IMG-20210410-WA0309.jpg";
    r_text[75] = "https://i.ibb.co/Ks5pgsB/IMG-20210410-WA0310.jpg";
    r_text[76] = "https://i.ibb.co/0YNzZxQ/IMG-20210410-WA0317.jpg";
    r_text[77] = "https://i.ibb.co/T0KbLFN/IMG-20210410-WA0318.jpg";
    r_text[78] = "https://i.ibb.co/wgQWTKy/IMG-20210410-WA0319.jpg";

    var i = Math.floor(79*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '_🧞මූලික උදව්_ \n\n🔹 *.alive:* Bot ක්‍රියාත්මක වේදැයි පරීක්ෂා කරයි.\n\n🔹 *.neotro :* සම්පූර්ණ විධාන ලැයිස්තුව පෙන්වයි.\n\n🔹 *.setvar WORK_TYPE: public* Bot public කිරීමට.\n\n🔹 *.setvar WORK_TYPE: private* Bot private කිරීමට.\n\n 🔹 ඔබගෙ බොට්ගෙ විධාන ලැයිස්තුව එකතු කිරීමට යමක් ඇත්තන් මෙය භාවිතා කරන්න\n🧚‍♀️*.setvar MENU: අදාල විස්තරය.\n\n🔹 *.restart* Bot නැවත පනගැන්වීමට (සිරවූ විටක)\n\n🔹 *.setvar SUDO: 94XXXXXXXX* Bot වෙත තවත් පාලකයෙකු ලබදීමට(public/private අවස්ථා දෙකෙහිදීම ඔහුට පාලනය කල හැක.)\n\n🔹 *.dyno* ඔබගේ Heroku පැය ප්‍රමාණය කොපමනද බැලීමට. මාසිකව පැය 550ක් ලැබෙන අතර එය මසකට පෙර අවසන් වූවිට ඔබගේ bot ක්‍රියා විරහිත වේ.ඊලග මාසය එනතුරු බලා හිදීම හෝ  අලුත් හෙරොකු එකක සාදාගත යුතු වේ. \n\n🔹 *.adon off* sim Bot (.bot විධානය)ක්‍රියාවිරහිත කිරීමට මෙය භාවිතා කරන්න\n🔹 *adon on* sim botනැවත On කිරීම මෙය මඟින් සිදුකල හැක.\n\n🔹 *.eva on* AI EVA චැට් බොට් ක්‍රියාත්මක කිරීම මෙය මගින් හැක.\n🔹 *eva off* AI EVA චැට් බොට් ක්‍රියාවිරහිත කරයි.\n\n🔷 *setvar ALIVE_ALIVEMSGBot ගෙ Alive Message එක වෙනස් කරන්න ඕනෙ නම්.🔷 *setvar ALIVE_LOGO: link*\nBot ගෙ alive පින්තූරෙ වෙනස් කරන්න ඔනෙනම් පහල Site එකට ඔයාගෙ Photo එක Upload කරලා Link එක දාන්න\n🎭 https://imgbb.com/\n🔹ටෙලිග්‍රෑම් පාවිච්චි කරනවම් ලේසියෙන් මේ Bot ට Img එක දාලා link එක ගන්න පුලුවන්🎭https://t.me/FnTelegraphBot\n\n🔷 *setvar WELCOME_LOGOWELCOME LOGO: link* \nමේකෙන් ඔයාට Welcome msg එකේ GIF එක වෙනස් කරන්න පුලුවන් එතනටත් පහල site එක්කට GIF එකක් Upload කරලා link එක දාන්න\n🎭https://www.mailboxdrive.com/upload/\n🔹telegram use කරනවනම්🎭https://t.me/FnTelegraphBot\n\n🔷 *setvar BYE_LOGO: link*\nඒකෙත් Good bye Logo වෙනස් කරන්න,පුලුවන්උඩ විදිහටම ඒකටත් දාන්න\n\n🧚‍♀️Neutro Bot Newshttps://chat.whatsapp.com/LuLTEKm22fp8gv4ltCmKMo\n🔹\n\n🧚‍♀️Neutro plugging\n🔹https://chat.whatsapp.com/JJs2iwfF0VKL3IWrIyr7AT\n\n🧚‍♀️Neutro Support Community\n🔹https://chat.whatsapp.com/GTgqgMTo7FoJ1GqdijshsX'})

    }));

 if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'tq1hn', fromMe: false, desc: Lang.AN}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.ibb.co/FwPP04q/images.jpg";
    r_text[1] = "https://i.ibb.co/GH2tWJ4/images-1.jpg";
    r_text[2] = "https://i.ibb.co/Mf79pVH/download.jpg";
    r_text[3] = "https://i.ibb.co/b11BDWH/images-2.jpg";
    r_text[4] = "https://i.ibb.co/7v1m94x/images-3.jpg";
    r_text[5] = "https://i.ibb.co/vdKJxNX/images-4.jpg";
    r_text[6] = "https://i.ibb.co/cvKvyzR/images-5.jpg";
    r_text[7] = "https://i.ibb.co/WWRt8vZ/images-6.jpg";
    r_text[8] = "https://i.ibb.co/m8Xg7Gj/images-7.jpg";
    r_text[9] = "https://i.ibb.co/FDYQHzB/images-8.jpg";
    r_text[10] = "https://i.ibb.co/fFTNXcy/images-9.jpg";
    r_text[11] = "https://i.ibb.co/rygwb0Q/images-10.jpg";
    r_text[12] = "https://i.ibb.co/ts8y9rC/images-11.jpg";
    r_text[13] = "https://i.ibb.co/VMHd02c/images-12.jpg";
    r_text[14] = "https://i.ibb.co/D1j3Np6/images-13.jpg";
    r_text[15] = "https://i.ibb.co/qWnhqVf/images-14.jpg";
    r_text[16] = "https://i.ibb.co/J7tr09N/images-15.jpg";
    r_text[17] = "https://i.ibb.co/NVhyQ1V/images-16.jpg";
    r_text[18] = "https://i.ibb.co/PcV78Mv/images-17.jpg";
    r_text[19] = "https://i.ibb.co/hYFY5PZ/images-18.jpg";
    r_text[20] = "https://i.ibb.co/n0vd5yR/images-19.jpg";
    r_text[21] = "https://i.ibb.co/hybc9KX/images-20.jpg";
    r_text[22] = "https://i.ibb.co/6JW0sL7/images-21.jpg";
    r_text[23] = "https://i.ibb.co/8MX592D/images-22.jpg";
    r_text[24] = "https://i.ibb.co/gPtrHPW/images-23.jpg";
    r_text[25] = "https://i.ibb.co/mGtWXyW/images-24.jpg";
    r_text[26] = "https://i.ibb.co/HD4rrbn/images-25.jpg";
    r_text[27] = "https://i.ibb.co/8mG4Xht/images-26.jpg";
    r_text[28] = "https://i.ibb.co/yF8qzgQ/images-27.jpg";
    r_text[29] = "https://i.ibb.co/vvhTtL9/images-28.jpg";
    r_text[30] = "https://i.ibb.co/x8WZS1G/images-29.jpg";
    r_text[31] = "https://i.ibb.co/hsb9c1N/images-30.jpg";
    r_text[32] = "https://i.ibb.co/tQ2r1d1/images-31.jpg";
    r_text[33] = "https://i.ibb.co/5Mr70MY/images-32.jpg";
    r_text[34] = "https://i.ibb.co/340nk6r/images-33.jpg";
    r_text[35] = "https://i.ibb.co/3yWYZ9X/images-34.jpg";
    r_text[36] = "https://i.ibb.co/59G5Gpc/images-35.jpg";
    r_text[37] = "https://i.ibb.co/j48QYXt/images-36.jpg";
    r_text[38] = "https://i.ibb.co/Nx2FHGB/images-37.jpg";
    r_text[39] = "https://i.ibb.co/7tc4Hph/images-38.jpg";
    r_text[40] = "https://i.ibb.co/jkKc78B/images-39.jpg";
    r_text[41] = "https://i.ibb.co/RTqRWn7/images-40.jpg";
    r_text[42] = "https://i.ibb.co/kS6LW3q/images.jpg";
    r_text[43] = "https://i.ibb.co/THdY0MS/images-1.jpg";
    r_text[44] = "https://i.ibb.co/n0P7KVt/images-2.jpg";
    r_text[45] = "https://i.ibb.co/MnZn5Tx/images-3.jpg";
    r_text[46] = "https://i.ibb.co/SVwMXrG/images-4.jpg";
    r_text[47] = "https://i.ibb.co/2jZb1mc/images-5.jpg";
    r_text[48] = "https://i.ibb.co/sPhWTxD/images-7.jpg";
    r_text[49] = "https://i.ibb.co/pjcFyzr/images-6.jpg";
    r_text[50] = "https://i.ibb.co/XFSmcfj/images-9.jpg";
    r_text[51] = "https://i.ibb.co/TM8Qxt9/images-8.jpg";
    r_text[52] = "https://i.ibb.co/f9RQ30f/images-10.jpg";
    r_text[53] = "https://i.ibb.co/9ZRBQHP/images-11.jpg";
    r_text[54] = "https://i.ibb.co/Sm9PmLT/images-12.jpg";
    r_text[55] = "https://i.ibb.co/B2BzjdR/images-13.jpg";
    r_text[56] = "https://i.ibb.co/HB8kDqr/images-14.jpg";
    r_text[57] = "https://i.ibb.co/r6HXkC6/images-15.jpg";
    r_text[58] = "https://i.ibb.co/6BMF531/images-16.jpg";
    r_text[59] = "https://i.ibb.co/47b8YYW/images-17.jpg";
    r_text[60] = "https://i.ibb.co/bzZ66dN/images-18.jpg";
    r_text[61] = "https://i.ibb.co/kmKGSJ1/images-19.jpg";
    r_text[62] = "https://i.ibb.co/nDfrfgd/images-20.jpg";
    r_text[63] = "https://i.ibb.co/bXf8Tj1/images-21.jpg";
    r_text[64] = "https://i.ibb.co/4pQxm7k/images-22.jpg";
    r_text[65] = "https://i.ibb.co/ngLqQdh/images-23.jpg";
    r_text[66] = "https://i.ibb.co/Y3RtBPB/images-24.jpg";
    r_text[67] = "https://i.ibb.co/0y2vDZ8/images-25.jpg";
    r_text[68] = "https://i.ibb.co/0Gzdx1d/images-26.jpg";
    r_text[69] = "https://i.ibb.co/54wVtm8/images-27.jpg";
    r_text[70] = "https://i.ibb.co/bQkJTZm/images-28.jpg";
    r_text[71] = "https://i.ibb.co/hCNMWqG/images-29.jpg";
    r_text[72] = "https://i.ibb.co/qDphPx9/images-30.jpg";
    r_text[73] = "https://i.ibb.co/M8jRW8N/IMG-20210410-WA0308.png";
    r_text[74] = "https://i.ibb.co/k1nmStf/IMG-20210410-WA0309.jpg";
    r_text[75] = "https://i.ibb.co/Ks5pgsB/IMG-20210410-WA0310.jpg";
    r_text[76] = "https://i.ibb.co/0YNzZxQ/IMG-20210410-WA0317.jpg";
    r_text[77] = "https://i.ibb.co/T0KbLFN/IMG-20210410-WA0318.jpg";
    r_text[78] = "https://i.ibb.co/wgQWTKy/IMG-20210410-WA0319.jpg";

    var i = Math.floor(79*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '_🧞මූලික උදව්_ \n\n🔹 *.alive:* Bot ක්‍රියාත්මක වේදැයි පරීක්ෂා කරයි.\n\n🔹 *.neotro :* සම්පූර්ණ විධාන ලැයිස්තුව පෙන්වයි.\n\n🔹 *.setvar WORK_TYPE: public* Bot public කිරීමට.\n\n🔹 *.setvar WORK_TYPE: private* Bot private කිරීමට.\n\n 🔹 ඔබගෙ බොට්ගෙ විධාන ලැයිස්තුව එකතු කිරීමට යමක් ඇත්තන් මෙය භාවිතා කරන්න\n🧚‍♀️*.setvar MENU: අදාල විස්තරය.\n\n🔹 *.restart* Bot නැවත පනගැන්වීමට (සිරවූ විටක)\n\n🔹 *.setvar SUDO: 94XXXXXXXX* Bot වෙත තවත් පාලකයෙකු ලබදීමට(public/private අවස්ථා දෙකෙහිදීම ඔහුට පාලනය කල හැක.)\n\n🔹 *.dyno* ඔබගේ Heroku පැය ප්‍රමාණය කොපමනද බැලීමට. මාසිකව පැය 550ක් ලැබෙන අතර එය මසකට පෙර අවසන් වූවිට ඔබගේ bot ක්‍රියා විරහිත වේ.ඊලග මාසය එනතුරු බලා හිදීම හෝ  අලුත් හෙරොකු එකක සාදාගත යුතු වේ. \n\n🔹 *.adon off* sim Bot (.bot විධානය)ක්‍රියාවිරහිත කිරීමට මෙය භාවිතා කරන්න\n🔹 *adon on* sim botනැවත On කිරීම මෙය මඟින් සිදුකල හැක.\n\n🔹 *.eva on* AI EVA චැට් බොට් ක්‍රියාත්මක කිරීම මෙය මගින් හැක.\n🔹 *eva off* AI EVA චැට් බොට් ක්‍රියාවිරහිත කරයි.\n\n🔷 *setvar ALIVE_ALIVEMSGBot ගෙ Alive Message එක වෙනස් කරන්න ඕනෙ නම්.🔷 *setvar ALIVE_LOGO: link*\nBot ගෙ alive පින්තූරෙ වෙනස් කරන්න ඔනෙනම් පහල Site එකට ඔයාගෙ Photo එක Upload කරලා Link එක දාන්න\n🎭 https://imgbb.com/\n🔹ටෙලිග්‍රෑම් පාවිච්චි කරනවම් ලේසියෙන් මේ Bot ට Img එක දාලා link එක ගන්න පුලුවන්🎭https://t.me/FnTelegraphBot\n\n🔷 *setvar WELCOME_LOGOWELCOME LOGO: link* \nමේකෙන් ඔයාට Welcome msg එකේ GIF එක වෙනස් කරන්න පුලුවන් එතනටත් පහල site එක්කට GIF එකක් Upload කරලා link එක දාන්න\n🎭https://www.mailboxdrive.com/upload/\n🔹telegram use කරනවනම්🎭https://t.me/FnTelegraphBot\n\n🔷 *setvar BYE_LOGO: link*\nඒකෙත් Good bye Logo වෙනස් කරන්න,පුලුවන්උඩ විදිහටම ඒකටත් දාන්න\n\n🧚‍♀️Neutro Bot Newshttps://chat.whatsapp.com/LuLTEKm22fp8gv4ltCmKMo\n🔹\n\n🧚‍♀️Neutro plugging\n🔹https://chat.whatsapp.com/JJs2iwfF0VKL3IWrIyr7AT\n\n🧚‍♀️Neutro Support Community\n🔹https://chat.whatsapp.com/GTgqgMTo7FoJ1GqdijshsX'})

    }));
}
