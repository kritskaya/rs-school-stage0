export const saveResult = (steps) => {
	let results = getResults();
	let result = {};
	
	result.date = Date.now();
	result.steps = steps;

	if (results.length === 10) {
		// let oldResult = results.reduce((prev, item, index) => prev.date > item.date ? item : prev);
		// let oldResultIndex = results.findIndex((item) => item === oldResult);
		// results.splice(oldResultIndex, 1);
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
	
	results.sort((item1, item2) => item1.steps - item2 - steps);
}



