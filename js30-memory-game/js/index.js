import { generateGame, subscribeCardClick } from "./playProcess.js";

window.onload = () => {
	generateGame();
	subscribeCardClick();
	
	console.log(JSON.parse(localStorage.getItem("memory-game-results")));
}