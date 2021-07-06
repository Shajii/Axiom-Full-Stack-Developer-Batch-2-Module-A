const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const time = document.getElementById('time');


// Function to play or pause video
function playPause() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
};

// Function to play or pause icons
function updateIcons() {
        if (video.paused) {
             play.innerHTML = '<i class="fa fa-play fa-2x"></i>'; 
        } else {
            play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
        }
};

// Function to update the video progress
function updateProgress() {
        progress.value = (video.currentTime/video.duration)*100; 
        let minutes = Math.floor(video.currentTime/60);
        if (minutes < 10) {
                minutes = '0'+ String(minutes);
        }
        let seconds = Math.floor(video.currentTime%60);
        if (seconds < 10) {
                seconds = '0'+ String(seconds);
        }
        time.innerHTML = minutes+':'+seconds;
};

// Function to stop video
function stopVideo() {
        video.currentTime = 0;
        video.pause();
};

// Function to update video progress
function updateVideoProgress() {
       video.currentTime = (progress.value*video.duration)/100;
};

// Event Listener
video.addEventListener('click', playPause);
video.addEventListener('pause', updateIcons);
video.addEventListener('play', updateIcons);
video.addEventListener('timeupdate', updateProgress);
play.addEventListener('click', playPause);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', updateVideoProgress);

