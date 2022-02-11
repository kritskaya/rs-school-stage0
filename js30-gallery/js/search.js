import { subscribeImageClick } from "./imageView.js";

const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-icon");
const clearBtn = document.querySelector(".clear-btn");

export const subscribeSearchInput = () => {
	searchInput.addEventListener("keydown", (event) => {
		if (event.key === "Enter") {
			let keyword = searchInput.value;
			getData(keyword);
		}
	});

	searchInput.addEventListener("input", () => {
		if (searchInput.value) {
			clearBtn.style.display = "block";
		} else {
			clearBtn.style.display = "none";
		}
	});
}

export const subscribeSearchBtn = () => {
	searchBtn.addEventListener("click", () => {
		let keyword = searchInput.value;
		getData(keyword);
	});
}

export const subscribeClearBtn = () => {
	clearBtn.addEventListener("click", () => {
		searchInput.value = "";
	});
}

export async function getData(keyword) {
	clearData();
	
	const url = `https://api.unsplash.com/search/photos?query=${keyword}&per_page=30&orientation=landscape&client_id=m5rdFYPyYCesIEQg2bMvsLOIEZwBhK5nw2W7FrjsCn8`;
	const res = await fetch(url);
	let data = await res.json();

	const result = data.results;

	result.forEach(element => {
		addImage(element.urls.regular);
	});

	subscribeImageClick();
}

const container = document.querySelector(".main .container");

const clearData = () => {
	container.querySelectorAll("*").forEach((element) => {
		element.remove();
	})
}

const addImage = (url) => {
	let image = document.createElement('div');

	image.style.backgroundImage = `url(${url})`;
	image.classList.add("gallery-image");

	container.append(image);
}

