import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector('[data-formulario]');

const criarVideo = async (evento) => {
	evento.preventDefault();

	const url = document.querySelector('[data-url]').value;
	const titulo = document.querySelector('[data-titulo]').value;

	await conectaApi.criaVideos(url,titulo);

	window.location.href = "../pages/envio-concluido.html";
}

formulario.addEventListener('submit', evento => criarVideo(evento));