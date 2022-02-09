
import {
	subscribeSearchInput, 
	subscribeSearchBtn, 
	subscribeClearBtn,
	getData
} 
	from "./search.js";

window.onload = () => {
	getData("spring");

	const searchInput = document.querySelector(".search-input");
	searchInput.focus();

	subscribeSearchInput();
	subscribeSearchBtn();
	subscribeClearBtn();
}
