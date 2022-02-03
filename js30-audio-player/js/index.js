
const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play-btn');
let played = false;


const durationSpan = document.querySelector('.duration-time');
durationSpan.innerHTML = getTimeFromNumber(audio.duration);

playBtn.addEventListener("click", function () {
	
	if (!played) {
		playBtn.src = "./assets/svg/pause.png";
		playAudio();
		played = true;
	} else {
		pauseAudio();
		played = false;
		playBtn.src = "./assets/svg/play.png";
	}
});

function playAudio() {
  audio.currentTime = 0;
  audio.play();
}

function pauseAudio() {
  audio.pause();
}


function getTimeFromNumber(number) {
	let minDuration = Math.floor(number / 60);
	let secDuration = Math.floor(number % 60);
	return minDuration + ":" + secDuration;
}