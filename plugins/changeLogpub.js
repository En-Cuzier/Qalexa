const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
//language
const Language = require('../language');
const Lang = Language.getString('scrapers');

if (Config.WORKTYPE == 'public') {
Asena.addCommand({pattern: 'cnlog', fromMe: false, desc: Lang.UP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/ad6da8cf7b2f61717a4bc.jpg";
    r_text[1] = "https://telegra.ph/file/497ca2a8c2c767f6f3670.jpg";
    r_text[2] = "https://telegra.ph/file/2ee7da329678fdf999341.jpg";
    r_text[3] = "https://telegra.ph/file/ad6da8cf7b2f61717a4bc.jpg";
    r_text[4] = "https://telegra.ph/file/497ca2a8c2c767f6f3670.jpg";
    r_text[5] = "https://telegra.ph/file/2ee7da329678fdf999341.jpg";
    
        
     var i = Math.floor(6*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*ββNeutro ChangeLogs ββ·*

 *π§πππ§π¨ππ€π£ 5.2.4*
_2021/08/12_

βββββββββββββββ
*NEOTRO 5.2.4 UPDATE π₯³*
βββββββββββββββ·
*π‘BUG FIXED*
ββββββββββββββ·
*β βCommand Double Bug* Fixedπ₯΄
*β βTTS VOICE Updated* 
*β βSong Upload Error Fixed*
*β βοΈPlugging Install Command updated*
β·New Command: *.pkg*
βββββββββββββ·
*β οΈTEMPORARY UNAVAILABLE  COMMAND*
βββββββββββββ·
*β β­Menu List Added* *Commandβ·Temporary unavailable*
*β β­Menu Command Chnge* *Commandβ·Temporary Unavailable*
ββββββββββββββ·
*πPENDING COMMAND*
ββββββββββββββ·
*β πFacebook Download*
*β πinstergram Download*
*β πsportify download*
βββββββββββββββ·
*πWHAT'S NEW*
βββββββββββββββ·
*β π+ Panel Added ( Use : Admin Only*
β· Type:  .Admin
*β π§ββοΈAdded Update Report System*
βββββββββββββββ·
*π­NEOTRO-X NEXT UPDATE*
βββββββββββββββ·
β  πΰΆΰΆΊΰ·ΰΆ½ΰ· ΰΆ―ΰΆ±ΰ·ΰΆ±ΰ·ΰ· ΰΆΰΆ­ΰ· Logo Site Maintenance ΰΆΰΆ½ΰ·ΰΆ­ΰ· features Add ΰΆΰΆ»ΰΆ±ΰ·ΰΆ±ΰΆ½ΰ· ΰΆΊΰΆ±ΰ·ΰΆ±ΰ· ΰΆΰΆΊΰ·ΰΆ½ΰ·πΰΆ ΰΆ±ΰ·ΰ·ΰ· Logo pack ΰΆΰΆ ΰ·ΰ·ΰΆ© ΰΆ±ΰ· (ΰΆ­ΰ·ΰ·ΰΆΰ·ΰΆ½ΰ·ΰΆΰ·)
β
β πΰΆΰΆ½ΰ·ΰΆ­ΰ· Logo Pack ΰΆΰΆΰΆΰ· ΰΆ―ΰ·ΰΆ±ΰ·ΰΆ±ΰΆΈΰ· ΰΆΰΆ― ΰ·ΰ· ΰ·ΰ·ΰΆ§ (girls Logo pack)
β
β π Ban Words system ΰΆΰΆΰΆΰ· ΰΆΰΆ± ΰΆΰ·ΰ·ΰ·ΰ·ΰ· ΰΆΰΆ§ΰ·ΰΆ§ΰ·ΰΆΊ ΰΆΰΆΰ· ΰΆΆΰ·ΰΆΰΆΊΰΆΰ· ΰΆΰ·ΰΆ»ΰΆΊΰ·π
β
β  πTEXT EDITOR FEATURE ΰΆΰΆ Beta version ΰΆΰΆΰ· ΰΆΰΆΊΰΆ§ΰΆ±ΰΆΈΰ· ΰΆΰΆ½ΰ·ΰΆ±ΰ·ΰΆΈ ΰΆ―ΰ·ΰΆ½ΰ· ΰΆ­ΰ·ΰΆΆΰ·ΰΆ±ΰ· ΰΆ Feature ΰΆΰΆ ΰΆΰΆΊΰ·ΰΆ½ΰΆ­ΰ· ΰΆ―ΰ·ΰΆ±ΰ·ΰ·π
βββββββββββββββ·
*βοΈHOW TO INSTALL NEOTRO 5.2.4*
βββββββββββββββ·
β π§ββοΈΰΆΈΰ· Update Normal Update system ΰΆΰΆΰ·ΰΆ±ΰ· Update ΰ·ΰ·ΰΆ±ΰ·ΰΆ±ΰ· ΰΆ±ΰ· Bot ΰΆΰΆΊ Deploy ΰΆΰΆ»ΰΆ±ΰ·ΰΆ± ΰΆΰΆ±.
ΰΆΰΆ½ΰ·ΰΆ±ΰ· QR SESSION ΰΆΰΆΰΆΈ ΰΆ―ΰ·ΰΆ½ΰ· Deploy ΰΆΰΆ»ΰΆ±ΰ·ΰΆ±...ΰΆΰΆ ΰΆ±ΰ·ΰΆ­ΰ·ΰΆ­ΰΆ±ΰ· ΰΆ―ΰ·ΰΆ heroku App ΰΆΰΆΰ· settings ΰΆΰ·ΰ·ΰ·ΰΆ±ΰ· ΰΆΰΆ±ΰ·ΰΆ±

_β· Loging Heroku>Select App>>Click Settingβ>>> -scroll up- >>>> Click Reveal Config Var_

*β·π±: github Link: https://github.com/xneon2/Hashzi-X*

βββββββββββββββ·
β βUpdate ΰΆΰΆΰ· ΰ·ΰ· Bot ΰ·ΰΆΈΰ·ΰΆΆΰΆ±ΰ·ΰΆ° ΰΆΰΆ±ΰΆΈ ΰΆΰ·ΰΆ§ΰΆ½ΰ·ΰ·ΰΆΰ· ADMIN PANEL ΰΆΰΆΰΆ§ Inbox ΰΆΰΆ»ΰΆ±ΰ·ΰΆ±
βββββββββββββββ·

*π­Teenuhxγ½οΈL*
Wa.me/+94766598862

π°Cuizer
Wa.me/+94 77 082 8171
π°TutuZ
Wa.me/+94 78 150 8896
π°MASHZ
Wa.me/+94 76 265 7701


π€Thank For Using NEOTRO-X π Stay Safe &Stay With Usπ

*π§πππ§π¨ππ€π£ 5.2.3*
_2021/08/08

βmmpack updated
βAdded New Command ( .Admin)
βAdded Changelog View ( .changelog)
βUpdate Logo pack
βΈ .lava
βΈ .rock
βΈ .sbanner
βΈ βΈwarfacw
βΈ .sand
β Added Custom Panel Command
( .setvar COMMAND: test )

*π§πππ§π¨ππ€π£ 5.2.2*
_2021/08/01_

βAdded new Command ( .help)
βAdded Neuto QR session 
βsong tag Added
βmp3 document file uploader Added ( .dcsong muthu muthu pethi)
βAdded fulleva AI CHAT bot
( .eva on / .eva off)

*π§πππ§π¨ππ€π£ 5.2.1*
_2021/07/21_

βmerged: 5.1.6,5.1.7, 2.1.8, 5.1.9, 5.2.0
βAdded Custom Menu list
( login heroku >selectapp >> Settings >>>Reveal config var >>>> Add Own Captains)
βAdded Text to video effect ( .vtext / .ptext / .colortext)
βadded Tv series Details searcher ( .show got)
βAdded AI SIMSIHI on/off ( .adon on/.adon off)
βUpdate song Download 
βPlugging install Bug fixed
βAntispm Bug fixed

*π§πππ§π¨ππ€π£ 4.0.1*
_2021/07/15_

βBug fixed
β404 Error fixed
βAdded New Host 
βConnect Awsh servers
βadded console (beta)
βremoved Api key and billing details from account section

*π§πππ§π¨ππ€π£ 4.0.0*
_2021/06/28_

βmod apk download 
βglitch fixed
βPubg logo fixed
βYt searcher Update 
βvideo Download Update

*π§πππ§π¨ππ€π£ 3.9.0*
_2021/06/12_

βNew Base
β new Update Command 
β imagtosticker update ( .photo)
βmp4audio update ( .mp3)

*π§πππ§π¨ππ€π£ 3.8.0*
_2021/06/09_

βbug fixed
βsong uploader Bug fixed
βvideo uploader Fixed
βYt Search Updated
β Wiki version 7.0.0 updated
βfixed img Command 

*π§πππ§π¨ππ€π£ 3.7.0*
_2021/06/05_

βmerged: 3.0.0, 3.1.0, 3.2.0, 3.3.0, 3.4.0, 3.5.0, 3.6.0
βUpdate Sticker 
βAdded Mmpack
βUpdate support group 
βadded Bug Hole VIP ( .bh)
βAdded Unlimited Logo Api VIP (.textpro)

*π§πππ§π¨ππ€π£ 2.9.0*
_2021/05/02_

βupdate songs upload 
β update yt search 
βupdate covid js
βAdded SINHALA command list

_Conz : Lode404_
π­Ι΄α΄α΄α΄Κα΄π­πͺ is a first Made in sri lanka π±π°chat bot for WhatsApp. Makes it easy and fun to use Whatsapp.
β¦https://youtu.be/mcEeIspWOpY
βΌGithub link : https://github.com/xneon2/Hashzi-X

*ββNEUTRO CHANGELOGββ*
`}) 

 }));
}
