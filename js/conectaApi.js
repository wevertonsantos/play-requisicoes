const listaVideos = async () => {
	const url = "http://localhost:3000/videos"
	const apiConvertida = await fetch(url).then(res => res.json())

	return apiConvertida
}

const criaVideos = async (url,titulo) => {
	const conexao = await fetch("http://localhost:3000/videos", {
		method: "POST",
		headers: {
			"Content-type": "application/json"
		},
		body: JSON.stringify({
			url: url,
			titulo: titulo
		})
	});

	const conexaoConvertida = await conexao.json()

	return conexaoConvertida
}

export const conectaApi = {
	listaVideos,
	criaVideos
}