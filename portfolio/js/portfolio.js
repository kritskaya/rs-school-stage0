const portfolioBtnContainer = document.querySelector(".portfolio-btns");
const portfolioBtns = document.querySelectorAll(".portfolio .btn");

portfolioBtnContainer.addEventListener("click", changeImage);

function changeImage(event) {
	
	if (event.target.classList.contains("btn")) {
		let clicked = event.target
		portfolioBtns.forEach((elem) => {
			elem.classList.add("btn-transparent");
			clicked.classList.remove("btn-transparent");
		});
	}
}