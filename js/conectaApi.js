// URL do servidor local

const url = "https://wevertonsantos.github.io/play-requisicoes/db.json"

// Conexão para criar pegar a lista de vídeos

const listaVideos = async () => {
	const apiConvertida = await fetch(url).then(res => res.json())

	return apiConvertida
}

// Conexão para acrescentar novos vídeos no servidor local

const criaVideos = async (url,titulo) => {
	const conexao = await fetch(url, {
		method: "POST",
		headers: {
			"Content-type": "application/json"
		},
		body: JSON.stringify({
			url: url,
			titulo: titulo
		})
	});

	if(!conexao.ok){
		throw new Error('Não foi possível enviar o vídeo');
	}

	const conexaoConvertida = await conexao.json()

	return conexaoConvertida
}

// Conexão para procurar vídeos no servidor local

const buscaVideo = async (termoDeBusca) => {
	const conexao = await fetch(`${url}?q=${termoDeBusca}`)
	const conexaoConvertida = conexao.json()

	return conexaoConvertida
}

// Exportações das funções com as respectivas conexões

export const conectaApi = {
	listaVideos,
	criaVideos,
	buscaVideo
}
