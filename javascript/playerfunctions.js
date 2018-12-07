//Functions for operating the in-house music player of WIN 95 Player

var audio = document.getElementById("audio-stream-handler");
var track_timer = document.getElementById("track-timer");
var track_list = audio.audioTracks;

var track_number = 0;
var track_title = document.getElementById("track-title");

function playSong() {
    console.log(`Playing song... ${getTrackTitle()}`)
    audio.play();
}

function pauseSong() {
    console.log(`Paused playback...`)
    audio.pause();
}

function stopSong() {
    console.log(`Stopped playback.`)
    audio.pause();
    audio.currentTime = 0;
}

function getTrackTimeAsString() {
    var timer_string = `${onlyTwoDigits(Math.floor((audio.currentTime) / 60))} : ${onlyTwoDigits(Math.floor(audio.currentTime % 60)) }`

    return timer_string;
}

function getTrackNumber() {
    return track_number;
}

function updateMainTimer() {
    track_timer.innerHTML = `[${onlyTwoDigits(track_number)}] ${getTrackTimeAsString()}`;
}

function getTrackTitle() {
    //console.log(`Playing: ${audio.src}`)
    var split_String = (audio.src).split('/');

    for (i = 0; i < split_String.length; i++) {
        if (split_String[i + 1] == null) {
            return split_String[i];
        }
    }

    return "No data or disc loaded";
}

function updateTrackTitle() {
    track_title.innerHTML = getTrackTitle();
}

function updatePlayerUI() {
    updateMainTimer();
    updateTrackTitle();
}

function onlyTwoDigits(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}

//Looped functions
while (false) {
    //Updates time position of track    

    track_timer.innerHTML = audio.currentTime;
}