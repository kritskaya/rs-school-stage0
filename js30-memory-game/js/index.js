import { generateGame, subscribeCardClick, subscribeVolumeBtn } from "./playProcess.js";
import { subscribeShowResultsBtn, subscribeCloseResultsBtn } from "./gameResults.js";

window.onload = () => {
	generateGame();
	subscribeCardClick();
	
	subscribeShowResultsBtn();
	subscribeCloseResultsBtn();
	subscribeVolumeBtn();
}