import {getData} from "./loadImages.js";

window.onload = () => {
	getData();

	const searchInput = document.querySelector(".search-input");
	searchInput.focus();

}
