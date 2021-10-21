/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v5.5.2 Global Stable',
    HNLOCK: 'hadi-api',
    ZLOCK: 'zeks',
    ZNLOCK: 'zenzapi.xyz',
    CHANNEL: 'https://t.me/remasterplugin',
    SESSION: process.env.NEUTRO_SESSION === undefined ? '' : process.env.NEUTRO_SESSION,
    ANTILINK: process.env.ANTI_LINK === undefined ? 'false' : process.env.ANTI_LINK,
    ANTILINKMSG: process.env.ANTILINK_MESSAGE === undefined ? 'Kicked Out This Group 🛸Antilink system' : process.env.ANTILINK_MESSAGE,
    AUTOBİO: process.env.AUTO_BİO === undefined ? 'false' : process.env.AUTO_BİO,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://telegra.ph/file/0d5425a8dd1b5ad3e3d81.jpg' : process.env.ALIVE_LOGO,
    WELCOME_LOGO: process.env.WELCOME_LOGO === undefined ? 'https://telegra.ph/file/1c9d26b04ca643a8e20f7.mp4' : process.env.WELCOME_LOGO,
    BYE_LOGO: process.env.BYE_LOGO === undefined ? 'https://telegra.ph/file/1c9d26b04ca643a8e20f7.mp4' : process.env.BYE_LOGO,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    FULLEVA: process.env.FULL_EVA === undefined ? 'false' : process.env.FULL_EVA,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    MENUTEXT: process.env.MENU === undefined ?'*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*' : process.env.MENU,
    COMMAND: process.env.COMMAND === undefined ?'neotro' : process.env.COMMAND,
    AI_BOT: process.env.AI_BOT === undefined ?'true' : process.env.AI_BOT,
    ASENA_PLUG: process.env.ASENA_PLUG === undefined ?'VI6j4t4wCbwoc6Deh5wgrJL2Kt1' : process.env.ASENA_PLUG,
    NEOA: process.env.NEOA === undefined ?'aca83a4354ac' : process.env.NEOA,
    NEOS: process.env.NEOS === undefined ?'zenzapi' : process.env.NEOS,
    NEOY: process.env.NEOY === undefined ?'xyz' : process.env.NEOY,
    NY: process.env.NY === undefined ?'xyz' : process.env.NY,
    NA: process.env.NA === undefined ?'aca83a4354ac' : process.env.NA,
    NS: process.env.NS === undefined ?'zenzapi' : process.env.NS,
    TEENUH: process.env.TEENUH === undefined ?'ttps://netfiletolink.herokuapp.com/39742' : process.env.TEENUH,
    OWNMSG: process.env.OWN_MESSAGE === undefined ? 'unset' : process.env.OWN_MESSAGE,
    OWNMSG2: process.env.OWN_MESSAGE2 === undefined ? 'unset' : process.env.OWN_MESSAGE2,
    OWNMSG3: process.env.OWN_MESSAGE3 === undefined ? 'unset' : process.env.OWN_MESSAGE3,
    CAPTION_KEY: process.env.CAPTION_KEY === undefined ?'*🎭Neotro-X*' : process.env.CAPTION_KEY,
    HLOCK: process.env.HLOCK === undefined ?'hadi-api' : process.env.HLOCK,
    BANWORD: process.env.BANWORD === undefined ?'true' : process.env.BANWORD,
    BOT_NAME: process.env.BOT_NAME === undefined ?'🌜HASHZI' : process.env.BOT_NAME,
    MENU_LOGO: process.env.MENU_LOGO === undefined ? 'https://telegra.ph/file/0d5425a8dd1b5ad3e3d81.jpg' : process.env.MENU_LOGO,
    HACKER: process.env.HACKER === undefined ?'h4ck3rs404' : process.env.HACKER,
    A_HACKER: process.env.A_HACKER === undefined ?'h4ck3rs404-api' : process.env.A_HACKER,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    PKGPS: process.env.PKGPS === undefined ?'=xnxcom' : process.env.PKGPS,
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    CCN: "Ikyy69",
    ON: "hunter",
    ZA: "VI6j4t4wCbwoc6Deh5wgrJL2Kt1",
    ZNA: "aca83a4354ac",
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    SUPPORT: "905524317852-1612300121",
    SUPPORT2: "905511384572-1617736751",
    SUPPORT3: "905511384572-1621015274"
};
