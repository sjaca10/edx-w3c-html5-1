vid = document.querySelector("#vid");

function playVideo() {
    vid.play()
}

function pauseVideo() {
    vid.pause();
}

function rewindVideo() {
    vid.currentTime = 0;
}