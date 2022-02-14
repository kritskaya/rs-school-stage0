const gameField = document.querySelector(".game");

export const subscribeCardClick = () => {
	gameField.addEventListener("click", flipCard);
}

function flipCard(event) {
	if (event.target.classList.contains("back")) {
		let flipCard = event.target.parentElement;
		flipCard.classList.toggle("flip");
	}
}

