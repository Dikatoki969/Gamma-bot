const axios = require("axios");
const fs = require("fs");
const ffmpeg = require("fluent-ffmpeg");

async function textToVoice(caracter,text) {
    const API_KEY = `sk_6a9dd625e217ffec7fb163dbb044d726ac798f2c913c7702` // Ganti dengan API Key kamu
    const VOICE_ID = caracter
    const API_URL = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}?output_format=mp3_44100_128`;

    try {
        const response = await axios.post(
            API_URL,
            { text: text, model_id: "eleven_multilingual_v2" },
            {
                headers: {
                    "xi-api-key": API_KEY,
                    "Content-Type": "application/json",
                },
                responseType: "arraybuffer",
            }
        );
        const mp3FilePath = `./temp/${Date.now()}.mp3`;
        fs.writeFileSync(mp3FilePath, response.data);
        console.log(`✅ Audio berhasil disimpan: ${mp3FilePath}`);
        const oggFilePath = await new Promise((resolve, reject) => {
            const outputPath = `./tmp/converted_${Date.now()}.ogg`;
            ffmpeg(mp3FilePath)
                .audioCodec("libopus")
                .audioBitrate(128)
                .on("end", () => resolve(outputPath))
                .on("error", (err) => reject(err))
                .save(outputPath);
        });

        console.log(`✅ Audio berhasil dikonversi: ${oggFilePath}`);
        fs.unlinkSync(mp3FilePath);

        return oggFilePath;
    } catch (error) {
        console.error("❌ Error:", error.response ? error.response.data : error);
        return null;
    }
}

module.exports = { textToVoice };
  