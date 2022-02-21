import { generateGame, subscribeCardClick } from "./playProcess.js";
import { subscribeShowResultsBtn, subscribeCloseResultsBtn } from "./gameResults.js";

window.onload = () => {
	generateGame();
	subscribeCardClick();
	
	subscribeShowResultsBtn();
	subscribeCloseResultsBtn();
}