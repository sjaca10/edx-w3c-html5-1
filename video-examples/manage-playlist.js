var myVideo;
var currentVideo = 0;
var sources = [
    "http://html5doctor.com/demos/video-canvas-magic/video.mp4",
    "http://www.archive.org/download/AnimatedMechanicalArtPiecesAtMit/P1120973_512kb.mp4"
];

// Set the src of the video to the next URL in the playlist
// If at the end we start again from beginning (the modulo
// source.length does that)
function loadNextVideo() {
    myVideo.src = sources[currentVideo % sources.length];
    myVideo.load();
    currentVideo++;
}

// Listener plays the video
function loadAndplayNextVideo() {
    console.log("playing " + sources[currentVideo % sources.length]);
    loadNextVideo();
    myVideo.play();
}

// Called when the page is loaded
function init() {
    // Get the video element using the DOM API
    myVideo = document.querySelector("#myVideo");

    // Define a callback function called each time a video ended
    myVideo.addEventListener('ended', loadAndplayNextVideo, false);

    // Load the first video when the page is loaded.
    loadNextVideo();
}