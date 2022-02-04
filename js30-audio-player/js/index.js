
//const audio = document.querySelector('audio');

const audio = new Audio("../assets/audio/" + playlist[0].path);

const playBtn = document.querySelector(".play-btn");
const nextBtn = document.querySelector(".next-btn");


const cover = document.querySelector(".cover");
const artist = document.querySelector(".artist");
const track = document.querySelector(".track-name");
const durationSpan = document.querySelector(".duration-time");
const progressBar = document.querySelector(".progress-bar");

const background = document.querySelector(".background");

let currentTrackNum = 0;
let played = false;

audio.addEventListener("loadeddata", () => {
	cover.style.backgroundImage = `url(../assets/img/${playlist[currentTrackNum].cover})`;
	background.style.backgroundImage = `url(../assets/img/${playlist[currentTrackNum].cover})`;
	artist.textContent = playlist[currentTrackNum].artist;
	track.textContent = playlist[currentTrackNum].track;
	durationSpan.textContent = getTimeFromNumber(audio.duration);
	
	progressBar.min = 0;
	progressBar.max = Math.floor(audio.duration);
	progressBar.step = 1;
});

audio.addEventListener("ended", () => {
	pauseAudio();
})

playBtn.addEventListener("click", playPause);

function playPause() {
	if (audio.paused) {	
		playAudio();
	} else {
		pauseAudio();
	}
}

nextBtn.addEventListener("click", nextTrack);

function nextTrack() {
	if (currentTrackNum === playlist.length - 1) currentTrackNum = -1;

	pauseAudio();
	audio.src = "../assets/audio/" + playlist[++currentTrackNum].path;
	playAudio();

}

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
	playBtn.src = "./assets/svg/pause.png";
	cover.style.backgroundSize = "115%";

	audio.play();
	played = true;
}

function pauseAudio() {
	audio.pause();
	played = false;

	playBtn.src = "./assets/svg/play.png";
	cover.style.backgroundSize = "100%";
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

