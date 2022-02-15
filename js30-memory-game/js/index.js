import { generateGame, subscribeCardClick } from "./playProcess.js";

window.onload = () => {
	generateGame();
	subscribeCardClick();
}