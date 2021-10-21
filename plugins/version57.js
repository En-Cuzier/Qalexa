/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'version', fromMe: false}, (async (message, match) => {

    await message.sendMessage("*🙇NEUTRO VERSION CHECKER🙇*\n\n*🧚‍♂️Neutro ▻5.5.2*\n*Global Stable*");

}));
