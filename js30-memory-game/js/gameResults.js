const showResultsBtn = document.querySelector(".show-results");
const resultsSection = document.querySelector(".results");
const closeResultsBtn = document.querySelector(".close-btn");
const resultsData = document.querySelector(".table .data");

export const saveResult = (steps, time) => {
	let results = getResults();
	localStorage.removeItem("memory-game-results");
	let result = {};
	
	result.date = Date.now();
	result.steps = steps;
	result.time = time;

	if (results.length === 10) {
		results.shift();
	}

	results.push(result);
		
	localStorage.setItem("memory-game-results", JSON.stringify(results));
}

export const getResults = () => {
	const results = JSON.parse(localStorage.getItem("memory-game-results"));
	if (!results) return [];
	
	return results;
}


export const subscribeShowResultsBtn = () => {
	showResultsBtn.addEventListener("click", showResultsTable);
}

const showResultsTable = () => {
	resultsSection.classList.add("active");
	generateResultsTable();
}

export const subscribeCloseResultsBtn = () => {
	closeResultsBtn.addEventListener("click", closeResultsTable);
}

const closeResultsTable = () => {
	resultsSection.classList.remove("active");
}

const generateResultsTable = () => {
	let results = getResults();
	sortResults(results);
	
	resultsData.innerHTML = "";

	for (let i = 0; i < 10; i++) {
		let resultRow = document.createElement("div");
		resultRow.classList.add("data-row");

		let resultId = document.createElement("span");
		resultId.textContent = i + 1 + ".";
		resultRow.append(resultId);

		let resultSteps = document.createElement("span");
		resultSteps.textContent = results[i].steps + " steps";
		resultRow.append(resultSteps);

		let resultTime = document.createElement("span");
		resultTime.textContent = results[i].time ? getTime(results[i].time) : "-";
		resultRow.append(resultTime);

		let resultDate = document.createElement("span");
		resultDate.textContent = getDate(results[i].date);
		resultRow.append(resultDate);

		resultsData.append(resultRow);
	}
}

const sortResults = (results) => {
	results.sort((item1, item2) => {
		if (item1.steps !== item2.steps) {
			return item1.steps - item2.steps;
		} else {
			return item1.time -item2.time;
		}
	});
	
}

const getDate = (seconds) => {
	const date = new Date(seconds);
	const year = date.getFullYear();
	const month = ("0" + (date.getMonth() + 1)).substr(-2, 2);
	const day = date.getDate();
	const hours = date.getHours();
	const minutes = ("0" + date.getMinutes()).substr(-2, 2);
	return `${day}.${month}.${year} ${hours}:${minutes}`;
}

const getTime = (time) => {
	let minutes;
	let seconds;

	time = Math.floor(time / 1000);

	if (time > 60) {
		minutes = Math.floor(time / 60);
		time = time - minutes * 60;
		minutes += " min ";
	}

	seconds = ("0" + time).substr(-2, 2) + " s";
	return minutes ? minutes + ": " + seconds : seconds;
}