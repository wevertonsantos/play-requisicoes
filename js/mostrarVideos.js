import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector('[data-lista]');

function constroiCard (url){
	const video = document.createElement('li');
	video.className = 'videos__item'

	video.innerHTML =+ `
			<iframe width="100%" height="100%" src="${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		`

	return video;
}

async function listaVideo(){
	const listaApi = await conectaApi.listaVideos()

	listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.url)))

}

listaVideo();