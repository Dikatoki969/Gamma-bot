exports.TelegraPh = async(Path) =>{

	return new Promise (async (resolve, reject) => {

		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))

		try {

			const form = new FormData();

			form.append("file", fs.createReadStream(Path))

			const data = await  axios({

				url: "https://telegra.ph/upload",

				method: "POST",

				headers: {

					...form.getHeaders()

				},

				data: form

			})

			return resolve("https://telegra.ph" + data.data[0].src)

		} catch (err) {

			return reject(new Error(String(err)))

		}

	})

}

exports.getBuffer = async (url, options) => {

	try {

		options ? options : {}

		const res = await axios({

			method: "get",

			url,

			headers: {

				'DNT': 1,

				'Upgrade-Insecure-Request': 1

			},

			...options,

			responseType: 'arraybuffer'

		})

		return res.data

	} catch (err) {

		return err

	}

}

async function uptotelegra (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new FormData();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}

global.uptotelegra = uptotelegra