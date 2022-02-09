
import {
	subscribeSearchInput, 
	subscribeSearchBtn, 
	subscribeClearBtn,
	getData
} 
	from "./search.js";

// import {subscribeImageClick} from "./imageView.js";

window.onload = () => {
	getData("spring");

	const searchInput = document.querySelector(".search-input");
	searchInput.focus();

	subscribeSearchInput();
	subscribeSearchBtn();
	subscribeClearBtn();
	// subscribeImageClick();
}
