const gameField = document.querySelector(".game");

export const subscribeCardClick = () => {
	gameField.addEventListener("click", flipCard);

	const cards = document.querySelectorAll('.memory-card');
	cards.forEach(card => card.addEventListener('click', () => {
		flipCard.classList.toggle("flip");
	}));
}

function flipCard(event) {
	if (event.target.classList.contains("back")) {
		let flipCard = event.target.parentElement;
		flipCard.classList.toggle("flip");
	}

	
	if (event.target.classList.contains("back-face")) {
		let flipCard = event.target.parentElement;
		flipCard.classList.toggle("flip");
	}
}

