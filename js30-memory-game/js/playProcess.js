import cards from "./cards.js";

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

export const generateGame = () => {
	const gameCards = new Map();
	let count = 20;

	for(let i = 0; i < count; i++) {
		let randomCardNum = Math.floor(Math.random() * 10);
		let randomCard = cards[randomCardNum];

		if (gameCards.has(randomCardNum)) {
			if (gameCards.get(randomCardNum) > 1) {
				count++;
			} else {
				gameCards.set(randomCardNum, 2);
				insertCell(randomCard);
			}
		} else {
			gameCards.set(randomCardNum, 1);
			insertCell(randomCard);
		}
	}

	console.log(gameCards);
}

const insertCell = (card) => {
	const cell = document.createElement("div");
	cell.classList.add("card");

	const front = document.createElement("img");
	front.src = "./assets/png/" + card.path;
	front.alt = card.name;
	front.classList.add("front");

	const back = document.createElement("img");
	back.src = "./assets/png/back.png";
	back.alt = "back cover";
	back.classList.add("back");

	cell.append(back);
	cell.append(front);

	gameField.append(cell);
}

