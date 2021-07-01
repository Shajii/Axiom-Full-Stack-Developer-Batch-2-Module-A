const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const time = document.getElementById('time');


// Function to play or pause video
function playPause() {

};

// Function to play or pause icons
function updateIcons() {

};

// Function to update the video progress
function updateProgress() {

};

// Function to stop video
function stopVideo() {

};

// Function to update video progress
function updateVideoProgress() {

};

// Event Listener
video.addEventListener('click', playPause);
video.addEventListener('pause', updateIcons);
video.addEventListener('play', updateIcons);
video.addEventListener('timeupdate', updateProgress);
play.addEventListener('click', playPause);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', updateVideoProgress);

