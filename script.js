// Get elements from the dom

const video = document.getElementById('video');
const play = document.getElementById('play');
const stopVid = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & pause video
function toggleVideoStatus() {
	video.paused ? video.play() : video.pause();
}

// Update play/pause icon
function updatePlayIcon() {
	video.paused
		? (play.innerHTML = '<i class="fa fa-play fa-2x"></i>')
		: (play.innerHTML = '<i class="fa fa-pause fa-2x"></i>');
}

// Update progress & timestamp
function updateProgress() {
	// Get the percentage of the video for the progress bar
	progress.value = (video.currentTime / video.duration) * 100;

	// Get minutes
	let mins = Math.floor(video.currentTime / 60);
	if (mins < 10) {
		mins = '0' + String(mins);
	}

	// Get seconds
	let secs = Math.floor(video.currentTime % 60);
	if (secs < 10) {
		secs = '0' + String(secs);
	}

	timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video time to progress
function setVideoProgress() {
	video.currentTime = (+progress.value * video.duration) / 100;
}

// Stop video
function stopVideo() {
	video.currentTime = 0;
	video.pause();
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stopVid.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
