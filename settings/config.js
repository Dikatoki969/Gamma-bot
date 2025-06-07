/*

##CREATED BY DIKATOKI##

Contact me
- t.me/dikatoki111 
- wa.me/6285850185698

Note: Ambil fitur gpp asal taruh tto di sc kalian

##COPYRIGHT DIKATOKI 2024-2025##

*/
const fs = require('fs')

global.owner = "6285708112935"
global.nomorbot = "6288989928845"
global.namabot = "𝑮𝑨𝑴𝑴𝑨-𝑩𝑶𝑻"
global.chjid = "120363322427078436"
global.ucch = 'https://whatsapp.com/channel/0029ValalxrICVfeUyTSrV1O'
global.versisc = '6.0.0'
global.delaypushkontak = 4000 //jeda pushkontak
global.setmenu = "button2"
global.prefa = `☞`
//digitalocean
global.apiDigitalOcean = "-"
//cpanel
global.domain = '-' //ISI DOMAIN PANEL MU
global.apikey = '-' //ISI APIKEY PLTA MU
global.capikey = '-' //ISI APIKEY PLTC MU 
global.eggsnya = '15' //PAKE ID EGGS MU KALO GA TAU DEFAULT AJA
global.location = '1' //JANGAN DIGANTI KALO G MAU EROR
global.groupseller = "120363355280795492" //ganti pake punyamu gausah pake @g.us
global.bash = "bash <(curl -s https://pterodactyl-installer.se)"
global.imageurl = 'https://j.top4top.io/p_34189jnsj1.jpg'
global.packname = "bug"
global.author = "Dikzz"
global.jumlah = "5"

//menunya
global.menugrup = `╭───❑ ⌜ *𝐆𝐑𝐎𝐔𝐏-𝐌𝐄𝐍𝐔* ⌟ ❑──❑
├${global.prefa} .promote
├${global.prefa} .demote
├${global.prefa} .acc
├${global.prefa} .open
├${global.prefa} .close
├${global.prefa} .tagall
├${global.prefa} .ytsearch
├${global.prefa} .yts
├${global.prefa} .play
├${global.prefa} .play2
├${global.prefa} .reminder
├${global.prefa} .spotifyplay
├${global.prefa} .rvo
├${global.prefa} .hidetag
├${global.prefa} .revoke
├${global.prefa} .add
├${global.prefa} .kick
├${global.prefa} .infogc
├${global.prefa} .clearchat
├${global.prefa} .brat
├${global.prefa} .bratvid
├${global.prefa} .cosplay
├${global.prefa} .intro
├${global.prefa} .afk
├${global.prefa} .ttsearch 
├${global.prefa} .ttsearch2
├${global.prefa} .antipromosi
├${global.prefa} .gett
╰──❑`
global.menuai = `╭───❑ ⌜ *𝐀𝐈-𝐌𝐄𝐍𝐔* ⌟ ❑──❑
├${global.prefa} .gpt4
├${global.prefa} .gptimg
├${global.prefa} .simi
├${global.prefa} .jadianime
├${global.prefa} .gemini
├${global.prefa} .ai
├${global.prefa} .flux
├${global.prefa} .luminai
├${global.prefa} .bocchi
├${global.prefa} .aivoice
├${global.prefa} .venice
├${global.prefa} .ghibli
╰──❑`
global.menudownload = `╭───❑ ⌜ *𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑-𝐌𝐄𝐍𝐔* ⌟ ❑──❑
├${global.prefa} .mediafire
├${global.prefa} .mediafire2
├${global.prefa} .tiktok
├${global.prefa} .tiktokslide
├${global.prefa} .pinterest
├${global.prefa} .pinterest2
├${global.prefa} .igdl
├${global.prefa} .ytmp3
├${global.prefa} .ytmp4
├${global.prefa} .terabox
├${global.prefa} .tweeterdl
├${global.prefa} .videy
├${global.prefa} .xnxxsearch
├${global.prefa} .xnxxdl
├${global.prefa} .fbdl
├${global.prefa} .gitclone
├${global.prefa} .snackvideo
╰──❑`
global.menujadibot = `╭───❑ ⌜ *𝐉𝐀𝐃𝐈𝐁𝐎𝐓-𝐌𝐄𝐍𝐔* ⌟ ❑──❑
├${global.prefa} .jadibot
├${global.prefa} .stopjadibot
├${global.prefa} .listjadibot
╰──❑`
global.menusound = `╭───❑ ⌜ *𝐒𝐎𝐔𝐍𝐃-𝐌𝐄𝐍𝐔* ⌟ ❑──❑
├${global.prefa} .sound1
├${global.prefa} .sound2
├${global.prefa} .sound3
├${global.prefa} .sound4
├${global.prefa} .sound5
├${global.prefa} .sound6
├${global.prefa} .sound7
├${global.prefa} .soundmeme
╰──❑`
global.menudgtl = `╭───❑ ⌜ *𝐌𝐄𝐍𝐔-𝐃𝐎𝐑𝐏𝐋𝐄𝐓* ⌟ ❑──❑
├${global.prefa} .createvps
├${global.prefa} .deldroplet
├${global.prefa} .listdroplet
├${global.prefa} .poweron
├${global.prefa} .poweroff
├${global.prefa} .resizevps
├${global.prefa} .rebuildvps
├${global.prefa} .restartvps
├${global.prefa} .sisadroplet
├${global.prefa} .totaldroplet
├${global.prefa} .setapidigitalocean
╰──❑`
global.menubug = `╭───❑ ⌜ *𝐁𝐔𝐆-𝐌𝐄𝐍𝐔* ⌟ ❑──❑
├${global.prefa} .xbug 
├${global.prefa} .bug-gc
├${global.prefa} .bulldozer
├${global.prefa} .xblank
├${global.prefa} .clearbug
├${global.prefa} .crashtotal 
├${global.prefa} .spam-pairing 
├${global.prefa} .buginplace
├${global.prefa} .iphone 
╰──❑`
global.menurandom = `╭───❑ ⌜ *𝐑𝐀𝐍𝐃𝐎𝐌-𝐌𝐄𝐍𝐔* ⌟ ❑──❑
├${global.prefa} .cekmemek
├${global.prefa} .cektobrut
├${global.prefa} .cekkonbrut
├${global.prefa} .cekjembud
├${global.prefa} .menfess
├${global.prefa} .tobrutcek
├${global.prefa} .cekumur
├${global.prefa} .bokep
├${global.prefa} .jumlahmantan
├${global.prefa} .readmore
╰──❑`
global.menuinstallpanel = `╭───❑ ⌜ *𝐈𝐍𝐒𝐓𝐀𝐋𝐋-𝐏𝐀𝐍𝐄𝐋* ⌟ ❑──❑
├${global.prefa} .installpanel
├${global.prefa} .uninstallpanel
├${global.prefa} .installthema
├${global.prefa} .installpanel2
├${global.prefa} .uninstallpanel2
├${global.prefa} .startwings
├${global.prefa} .hbpanel
╰──❑`
global.menustore = `╭───❑ ⌜ *𝐒𝐓𝐎𝐑𝐄-𝐌𝐄𝐍𝐔* ⌟ ❑──❑
├${global.prefa} .jpm
├${global.prefa} .pushkontak
├${global.prefa} .pushkontak2
├${global.prefa} .savekontak
├${global.prefa} .savekontak2
├${global.prefa} .done 
├${global.prefa} .proses
├${global.prefa} .modeoff
├${global.prefa} .modeon
╰──❑

╭───❑ ⌜ *𝐋𝐈𝐒𝐓-𝐏𝐑𝐎𝐃𝐔𝐊* ⌟ ❑──❑
├${global.prefa} .harganokos
├${global.prefa} .hargapanel
├${global.prefa} .topupml
├${global.prefa} .topupff
├${global.prefa} .listsuntik
├${global.prefa} .murbug
├${global.prefa} .qrispay
├${global.prefa} .payment
╰──❑`
global.menupanel = `╭───❑ ⌜ *𝐏𝐀𝐍𝐄𝐋-𝐌𝐄𝐍𝐔* ⌟ ❑──❑
├${global.prefa} .1gb nama,nomor
├${global.prefa} .2gb nama,nomor
├${global.prefa} .3gb nama,nomor
├${global.prefa} .4gb nama,nomor
├${global.prefa} .5gb nama,nomor
├${global.prefa} .6gb nama,nomor
├${global.prefa} .7gb nama,nomor
├${global.prefa} .8gb nama,nomor
├${global.prefa} .9gb nama,nomor
├${global.prefa} .10gb nama,nomor
├${global.prefa} .unli nama,nomor
├${global.prefa} .listsrv
├${global.prefa} .listusr
├${global.prefa} .delsrv
├${global.prefa} .delusr
├${global.prefa} .listadp
├${global.prefa} .createadp
├${global.prefa} .cadp
├${global.prefa} .clearserver
╰ ──❑`
global.menuother = `╭───❑ ⌜ *𝐎𝐓𝐇𝐄𝐑-𝐌𝐄𝐍𝐔* ⌟ ❑──❑
├${global.prefa} .owner
├${global.prefa} .tinyurl
├${global.prefa} .tourl
├${global.prefa} .tourl2
├${global.prefa} .lirik <judul lagu>
├${global.prefa} .remini
├${global.prefa} .scbot
├${global.prefa} .report
├${global.prefa} .bot
├${global.prefa} .enc
├${global.prefa} .ssweb
├${global.prefa} .ocr
├${global.prefa} .cekprovider
├${global.prefa} .qc
├${global.prefa} .quotes
├${global.prefa} .pantun
├${global.prefa} .motivasi
├${global.prefa} .attp
╰──❑`
global.menuowner = `╭───❑ ⌜ *𝐎𝐖𝐍𝐄𝐑-𝐌𝐄𝐍𝐔* ⌟ ❑──❑
├${global.prefa} .Addprem 
├${global.prefa} .addowner
├${global.prefa} .delowner
├${global.prefa} .Delprem 
├${global.prefa} .addseller 
├${global.prefa} .delseller
├${global.prefa} .addcase
├${global.prefa} .delcase
├${global.prefa} .getcase
├${global.prefa} .ddos
├${global.prefa} .mix-dos
├${global.prefa} .autoread
├${global.prefa} .anticall
├${global.prefa} .Public 
├${global.prefa} .Self 
├${global.prefa} .setmenu
├${global.prefa} .trackip
├${global.prefa} .join
├${global.prefa} .hidetag
├${global.prefa} .setppbot
├${global.prefa} .setppbotpanjang
├${global.prefa} .setbiobot
├${global.prefa} .setnamabot
├${global.prefa} .restart
├${global.prefa} .leave
├${global.prefa} .clearsession
├${global.prefa} .delsampah
├${global.prefa} .reactch
├${global.prefa} .banchat
├${global.prefa} .unbanchat
├${global.prefa} .listbanchat
├${global.prefa} .cjstoesm
├${global.prefa} .get
╰──❑`
global.menustalk = `╭───❑ ⌜ *𝐒𝐓𝐀𝐋𝐊𝐄𝐑-𝐌𝐄𝐍𝐔* ⌟ ❑──❑
├${global.prefa} .ytstalk
├${global.prefa} .tiktokstalk
├${global.prefa} .mlstalk
├${global.prefa} .ffstalk
├${global.prefa} .genshinstalk
├${global.prefa} .telestalk
├${global.prefa} .githubstalk
╰──❑`

//set bot
global.autoAi = false
global.welcome = true
global.autoread = true
global.anticall = false
global.owneroff = false
global.autoBio = false
global.autoTyping = true
global.status = true
global.antipromosi = false

global.mess = {
    wait: "`</> Tunggu Lagi Proses Kontol`",
   success: "`</> Sukses Full Veri-veri good`",
   on: "*`[ On Feature ]` - Sudah Aktif*", 
   premium: "`Lu belum prem kocag`",
   wait: "*`KHUSUS OWNER BLOK GOBLOK`*",
   off: "*`[ Off Feature ]` - Sudah Off*",
   query: {
       text: "`</> Teks Nya Mana Kak?`",
       link: "`</> Link Nya Mana Kak?`",
   },
   error: {
       fitur: "`</> Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki`",
   },
   only: {
       group: "`</> Fitur Ini Cuma Bisa Di Akses Di Dalam Group`",
       private: "`</> Fitur Ini Cuma Bisa Di Akses Di Privat Chat`",
       owner: "`</> Khusus owner blok",
       admin: "`</> Fitur Ini Cuma Bisa Di Akses Oleh Aetmin`",
       badmin: "`</> Gabisa, Mangkanya Dikzz-bug Jadiin Aetmin`",
       premium: "`Lu belum prem kocag`",
       }
}
global.pairing = "DIKATOKI"


let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
