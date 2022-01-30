const portfolioBtnContainer = document.querySelector(".portfolio-btns");
const portfolioBtns = document.querySelectorAll(".portfolio .btn");
const images = document.querySelectorAll(".portfolio-img");

portfolioBtnContainer.addEventListener("click", changeImage);

function changeImage(event) {
	
	if (event.target.classList.contains("btn")) {
		let clicked = event.target;

		portfolioBtns.forEach((elem) => {
			elem.classList.add("btn-transparent");
			clicked.classList.remove("btn-transparent");
		});

		images.forEach((img, index) => {
			img.src = `./assets/img/${clicked.dataset.season}/${index + 1}.jpg`;
		});
	}
}

