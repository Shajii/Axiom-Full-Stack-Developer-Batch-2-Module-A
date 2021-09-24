// Get DOM Elements
const container = document.getElementById('container');
const prevBtn = document.getElementById('previous');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progressContainer = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');
const trackTitle = document.getElementById('song-title');
const albumArt = document.getElementById('album-art');
const image = document.getElementById('image');

var playCounter = false;

var isAudioPaused = false;

const arr = ['BFMV', 'KSE'];

var arrIndex = 0;

playBtn.addEventListener('click', playTrack);


function playTrack() {
    const check = playBtn.querySelector('i.fas').classList.contains('fa-play');

    if(check) {
            playBtn.querySelector('i.fas').classList.remove('fa-play');
            playBtn.querySelector('i.fas').classList.add('fa-pause');
            container.querySelector('div.image').classList.add('play');
            if (isAudioPaused === false) {
                albumArt.src = `Images/${arr[arrIndex]}.jpg`;
                audio.src = `Audio/${arr[arrIndex]}.mp3`;
            }
            
            audio.play();
            playCounter = true;
            isAudioPaused = false;
    } else {
            playBtn.querySelector('i.fas').classList.remove('fa-pause');
            playBtn.querySelector('i.fas').classList.add('fa-play');
            container.querySelector('div.image').classList.remove('play');
            // albumArt.src = `Images/${arr[arrIndex]}.jpg`;
            // audio.src = `Audio/${arr[arrIndex]}.mp3`;
            isAudioPaused = true;
            audio.pause();
            playCounter = true;
    }

    container.querySelector('div').classList.add('play');    

    trackTitle.innerText = `${arr[arrIndex]}`;

    audio.addEventListener('timeupdate', (e) =>{
        const timeline = (e.srcElement.currentTime/e.srcElement.duration)*100;
        progressBar.style.width = `${timeline}%`
    })
}

prevBtn.addEventListener('click',prevBtnPlay);

nextBtn.addEventListener('click',nextBtnPlay);

function prevBtnPlay() {
    alert(playCounter);
    if(playCounter) {
        arrIndex--;
    if (arrIndex < 0) {
        arrIndex = arr.length-1;
    }
        albumArt.src = `Images/${arr[arrIndex]}.jpg`;
        audio.src = `Audio/${arr[arrIndex]}.mp3`; 

        trackTitle.innerText = `${arr[arrIndex]}`;
        audio.play();
    }
}

function nextBtnPlay() {
    if(playCounter) {
        arrIndex++;
    if (arrIndex > arr.length-1) {
        arrIndex = 0;
    }
        albumArt.src = `Images/${arr[arrIndex]}.jpg`;
        audio.src = `Audio/${arr[arrIndex]}.mp3`; 

        trackTitle.innerText = `${arr[arrIndex]}`;
        audio.play();
    }
}