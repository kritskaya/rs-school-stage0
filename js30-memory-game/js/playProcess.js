import cards from "./cards.js";
import {saveResult} from "./gameResults.js";

const gameField = document.querySelector(".game");
const restartBtn = document.querySelector(".restart");
const volumeBtn = document.querySelector(".volume-img");

const flipSnd = new Audio("./assets/sounds/click.mp3");
const matchSnd = new Audio("./assets/sounds/match.mp3");
const gameOverSnd = new Audio("./assets/sounds/gameover.mp3");

let gameHasFlipped = null;
let gameHasFlippedPair = null;
let countSteps = 0;
let countFlippedPair = 0;
let startGameTime;
let endGameTime;
let muted = false;

export const subscribeCardClick = () => {
	gameField.addEventListener("click", flipCard);
	restartBtn.addEventListener("click", () => document.location.reload());
}

function flipCard(event) {
	if (!startGameTime) startGameTime = Date.now();
	
	if (event.target.classList.contains("back")) {
		if (!gameHasFlippedPair) {
			let flipCard = event.target.parentElement;
			flipCard.classList.toggle("flip");
			flipSnd.play();
			
			if (gameHasFlipped) {
				gameHasFlippedPair = flipCard;
				match();
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
			endGameTime = Date.now();
			gameOverSnd.play();
			
			setTimeout(gameOver, 2500);
			saveResult(countSteps, endGameTime - startGameTime);

		} else {
			setTimeout(() => matchSnd.play(), 400);
		}

		gameHasFlipped = null;
		gameHasFlippedPair = null;
	} else {
		setTimeout(unFlip, 700);
	}

}

const unFlip = () => {
	gameHasFlipped.classList.remove("flip");
	gameHasFlippedPair.classList.remove("flip");
	gameHasFlipped = null;
	gameHasFlippedPair = null;
}

const gameOver = () => {
	alert(`Игра закончена! за ${countSteps} шагов
Ваш результат сохранён в таблице Результаты`);
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

export const subscribeVolumeBtn = () => {
	volumeBtn.addEventListener("click", () => {
		flipSnd.muted = !muted;
		matchSnd.muted = !muted;
		gameOverSnd.muted = !muted;
		muted = !muted;

		if (muted) {
			volumeBtn.src = "./assets/svg/mute.svg";
		} else {
			volumeBtn.src = "./assets/svg/volume.svg";
		}
	});
}

