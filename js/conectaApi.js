async function listaVideos(){
	const url = "http://localhost:3000/videos"
	const apiConvertida = await fetch(url).then(res => res.json())

	return apiConvertida
}

export const conectaApi = {
	listaVideos
}