async function listaVideos(){
	const conectaApi = await fetch('http://localhost:3000/videos')
	.then(res => res.json())

	return conectaApi
}

export const conectaApi {
	listaVideos
}