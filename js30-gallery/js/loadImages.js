export async function getData() {
	const url = "https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=m5rdFYPyYCesIEQg2bMvsLOIEZwBhK5nw2W7FrjsCn8";
	const res = await fetch(url);
	let data = await res.json();

	const result = data.results;
	console.log(Array.isArray(result));
	
	result.forEach(element => {
		console.log(element.urls.regular);
		addImage(element.urls.regular);
	});	
	
};

const container = document.querySelector(".main .container");

const addImage = (url) => {
	let image = document.createElement('div');
	
	image.style.backgroundImage = `url(${url})`;
	image.classList.add("gallery-image");
	
	container.append(image);
}