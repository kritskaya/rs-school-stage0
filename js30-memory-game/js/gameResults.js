const showResultsBtn = document.querySelector(".show-results");
const resultsSection = document.querySelector(".results");
const closeResultsBtn = document.querySelector(".close-btn");

export const saveResult = (steps) => {
	let results = getResults();
	let result = {};
	
	result.date = Date.now();
	result.steps = steps;

	if (results.length === 10) {
		results.shift();
	}

	results.push(result);
	
	localStorage.setItem("memory-game-results", JSON.stringify(results));
}

export const getResults = () => {
	let results = JSON.parse(localStorage.getItem("memory-game-results"));
	if (!results) return [];
	
	console.log(results);
	return results;
}

const sortResults = (results) => {
	results.sort((item1, item2) => item1.steps - item2.steps);
}

export const subscribeShowResultsBtn = () => {
	showResultsBtn.addEventListener("click", showResultsTable);
}

const showResultsTable = () => {
	resultsSection.classList.add("active");
}

export const subscribeCloseResultsBtn = () => {
	closeResultsBtn.addEventListener("click", closeResultsTable);
}

const closeResultsTable = () => {
	resultsSection.classList.remove("active");
}


