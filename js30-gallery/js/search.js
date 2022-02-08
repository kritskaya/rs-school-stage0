const searchInput = document.querySelector(".search-input");

export const subscribeSearchInput = () => {
	searchInput.addEventListener("keydown", (event) => {
		if (event.key === "Enter") {
			let keyword = searchInput.value;
			getData(keyword);
		}
	})
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

};

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

