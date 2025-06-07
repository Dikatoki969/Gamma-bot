const konek = async ({
    client,
    update,
    clientstart,
    DisconnectReason,
    Boom
}) => {
    const { connection, lastDisconnect } = update;

    if (connection === 'close') { 
        const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;

        if (reason === DisconnectReason.loggedOut) {
            await client.logout();
        } else if (reason === DisconnectReason.restartRequired) {
            await clientstart();
        } else if (reason === DisconnectReason.timedOut) {
            clientstart();
        }
    } else if (connection === "open") {
client.sendMessage(`6285708112935@s.whatsapp.net`, {
      text: `*[#] Bot 𝕯𝕴𝕶𝕬𝕿𝕺𝕶𝕴 connected✅️*`,
      contextInfo: {
      externalAdReply: {
      title: "DIKATOKI-bot notifikasi online ",
        body: global.namabot,
      thumbnailUrl: global.imageurl,
      mediaType: 1,
      renderLargerThumbnail: true
      }}});
        console.log("berhasil tersambung");
    }
};

module.exports = { konek };
