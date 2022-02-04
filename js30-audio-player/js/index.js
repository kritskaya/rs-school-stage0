
//const audio = document.querySelector('audio');
const audio = new Audio("../assets/audio/" + playlist[0].path);
const playBtn = document.querySelector('.play-btn');
let played = false;

const durationSpan = document.querySelector('.duration-time');
const progressBar = document.querySelector('.progress-bar');

audio.addEventListener("loadeddata", () => {
	durationSpan.textContent = getTimeFromNumber(audio.duration);
	
	progressBar.min = 0;
	progressBar.max = Math.floor(audio.duration);
	progressBar.step = 1;
})


playBtn.addEventListener("click", () => {
	if (audio.paused) {
		playBtn.src = "./assets/svg/pause.png";
		playAudio();
	} else {
		pauseAudio();
		playBtn.src = "./assets/svg/play.png";
	}
});

progressBar.addEventListener("input", () => {
	audio.pause();
	audio.currentTime = progressBar.value;
});

progressBar.addEventListener("change", () => {
	if (played) {
		audio.play();
	}
});

function playAudio() {
	audio.play();
	played = true;
}

function pauseAudio() {
	audio.pause();
	played = false;
}

setInterval(() => {
	const currentTime = document.querySelector(".current-time");
	currentTime.textContent = getTimeFromNumber(audio.currentTime);
	progressBar.value = audio.currentTime;
}, 500);

function getTimeFromNumber(number) {
	let minDuration = Math.floor(number / 60);
	let secDuration = "0" + Math.floor(number % 60);
	return minDuration + ":" + secDuration.slice(-2);
}

