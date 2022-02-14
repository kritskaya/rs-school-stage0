const cards = document.querySelectorAll(".card");

export const subscribeCardClick = () => {
	cards.forEach ((elem) => elem.addEventListener("click", flipCard));
}

function flipCard() {
	this.classList.toggle("flip");
}

