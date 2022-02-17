import cards from "./cards.js";
import {saveResult} from "./gameResults.js";

const gameField = document.querySelector(".game");
let gameHasFlipped = null;
let gameHasFlippedPair = null;
let countSteps = 0;
let countFlippedPair = 0;

export const subscribeCardClick = () => {
	gameField.addEventListener("click", flipCard);
}

function flipCard(event) {
	if (event.target.classList.contains("back")) {
		if (!gameHasFlippedPair) {
			let flipCard = event.target.parentElement;
			flipCard.classList.toggle("flip");
			
			if (gameHasFlipped) {
				gameHasFlippedPair = flipCard;
				setTimeout(match, 1500);
			} else {
				gameHasFlipped = flipCard;
			}
		} 
	}
}

const match = () => {
	countSteps++;

	if (gameHasFlipped.getAttribute("data-card") === 
			gameHasFlippedPair.getAttribute("data-card")) {
		countFlippedPair++;

		if(countFlippedPair === 10){
			gameField.removeEventListener("click", flipCard);
			alert("Игра закончена! ");
			saveResult(countSteps);
		}
	} else {
		gameHasFlipped.classList.remove("flip");
		gameHasFlippedPair.classList.remove("flip");
	}

	gameHasFlipped = null;
	gameHasFlippedPair = null;
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
}

const insertCell = (card) => {
	const cell = document.createElement("div");
	cell.classList.add("card");
	cell.setAttribute("data-card", card.name);

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

