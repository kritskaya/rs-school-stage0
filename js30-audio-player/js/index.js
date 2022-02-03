
const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play-btn');

const durationSpan = document.querySelector('.duration-time');
durationSpan.textContent = getTimeFromNumber(audio.duration);

playBtn.addEventListener("click", function () {
	
	if (audio.paused) {
		playBtn.src = "./assets/svg/pause.png";
		playAudio();
	} else {
		pauseAudio();
		playBtn.src = "./assets/svg/play.png";
	}
});

const progressBar = document.querySelector('.progress-bar');
progressBar.min = 0;
progressBar.max = Math.floor(audio.duration);
progressBar.step = 1;


function playAudio() {
	audio.play();
}

function pauseAudio() {
	audio.pause();
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

