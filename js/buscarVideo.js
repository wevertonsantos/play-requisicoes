import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

const buscarVideo = async (evento) => {
	evento.preventDefault();

	const dadosPesquisa = document.querySelector('[data-pesquisa]').value;
	const busca = await conectaApi.buscaVideo(dadosPesquisa);

	const lista = document.querySelector('[data-lista]');

	// Removendo itens filhos de uma lista

	while (lista.firstChild){
		lista.removeChild(lista.firstChild);
	}

	// Mostrando o vídeo

	busca.forEach(elemento => lista.appendChild(constroiCard(
		elemento.url, elemento.titulo
		)));
}

const botaoPesquisa = document.querySelector('[data-botao-pesquisa]');

botaoPesquisa.addEventListener('click', evento => buscarVideo(evento))