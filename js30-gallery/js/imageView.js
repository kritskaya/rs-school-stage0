
const gallery = document.querySelector(".container");

export const subscribeImageClick = () => {
	gallery.addEventListener("click", imageView);
}

const imageView = (event) => {
	let target = event.target;
	if (target.classList.contains("gallery-image")) {
		let image = document.createElement("div");
		image.style.backgroundImage = target.style.backgroundImage;
		image.classList.add("image-view");
		gallery.append(image);
		gallery.removeEventListener("click", imageView);
		gallery.addEventListener("click", removeImageView);
	}
}

const removeImageView = (image) => {
	document.querySelector(".image-view").remove();
	gallery.removeEventListener("click", removeImageView);
	gallery.addEventListener("click", imageView);
}