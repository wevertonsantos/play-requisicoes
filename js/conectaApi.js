async function listaVideos(){
	const url = "http://localhost:3000/videos"
	const apiConvertida = await fetch(url).then(res => res.json())

	return apiConvertida
}

async function criaVideos(url,titulo,descricao){
	const conexao = await fetch("http://localhost:3000/videos", {
		method: "POST",
		header: {
			"Content-type": "application/json"
		},
		body: JSON.stringify({
			url: url,
			titulo: titulo,
			descricao: `${descricao} visualizações`
		})
	});

	const conexaoConvertida = await conexao.json()

	return conexaoConvertida
}

export const conectaApi = {
	listaVideos,
	criaVideos
}