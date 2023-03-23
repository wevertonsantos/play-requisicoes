import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

const constroiCard = (url,titulo) => {
	const video = document.createElement("li");
	video.className = "videos__item";

	video.innerHTML += `
			<iframe
			width="100%" height="72%" src="${url}"
			title="${titulo}"frameborder="0" allow="accelerometer;
			autoplay; clipboard-write; encrypted-media; gyroscope;
			picture-in-picture;web-share" allowfullscreen>
			</iframe>
			<div class="descricao-video">
				<h3>${titulo}</h3>
			</div>
		`

		return video
}

const listaVideos = async () => {
	const listaApi = await conectaApi.listaVideos()

	listaApi.forEach(e => 
		lista.appendChild(constroiCard(e.url, e.titulo))
	)
}

listaVideos();