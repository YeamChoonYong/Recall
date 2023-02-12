const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbarMenu')
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
});

const tracks = ["Track 1", "Track 2", "Track 3", "Track 4"]


var trackPreview1 = document.getElementById("trackPreview1")
var trackPlayButton1 = document.getElementById("playButton1")
var trackResetButton1 = document.getElementById("resetButton1")
var trackPreview2 = document.getElementById("trackPreview2")
var trackPlayButton2 = document.getElementById("playButton2")
var trackResetButton2 = document.getElementById("resetButton2")
var trackPreview3 = document.getElementById("trackPreview3")
var trackPlayButton3 = document.getElementById("playButton3")
var trackResetButton3 = document.getElementById("resetButton3")
var trackPreview4 = document.getElementById("trackPreview4")
var trackPlayButton4 = document.getElementById("playButton4")
var trackResetButton4 = document.getElementById("resetButton4")
trackPreview1.volume = 0.4;
trackPreview2.volume = 0.4;
trackPreview3.volume = 0.4;
trackPreview4.volume = 0.4;
trackPlayButton1.addEventListener("click", playAudio1);
trackResetButton1.addEventListener("click", resetAudio1);
trackPlayButton2.addEventListener("click", playAudio2);
trackResetButton2.addEventListener("click", resetAudio2);
trackPlayButton3.addEventListener("click", playAudio3);
trackResetButton3.addEventListener("click", resetAudio3);
trackPlayButton4.addEventListener("click", playAudio4);
trackResetButton4.addEventListener("click", resetAudio4);
var trackState1 = 0
var trackState2 = 0
var trackState3 = 0
var trackState4 = 0

function resetAudio1() {
    trackPreview1.load();
    trackPlayButton1.src = 'Assets/images/playbutton.png';
    if (trackState1 = 1) {
        trackState1 -= 1
    }
}

function resetAudio2() {
    trackPreview2.load();
    trackPlayButton2.src = 'Assets/images/playbutton.png';
    if (trackState2 = 1) {
        trackState2 -= 1
    }
}

function resetAudio3() {
    trackPreview3.load();
    trackPlayButton3.src = 'Assets/images/playbutton.png';
    if (trackState3 = 1) {
        trackState3 -= 1
    }
}

function resetAudio4() {
    trackPreview4.load();
    trackPlayButton4.src = 'Assets/images/playbutton.png';
    if (trackState4 = 1) {
        trackState4 -= 1
    }
}

function playAudio1() {
    if (trackState1 == 0) {
        trackPreview1.play();
        trackPlayButton1.src = 'Assets/images/pausebutton.png';
        trackState1 += 1
    } else {
        trackPreview1.pause();
        trackPlayButton1.src = 'Assets/images/playbutton.png';
        trackState1 -= 1
    }
    return
} 

function playAudio2() {
    if (trackState2 == 0) {
        trackPreview2.play();
        trackPlayButton2.src = 'Assets/images/pausebutton.png';
        trackState2 += 1
    } else {
        trackPreview2.pause();
        trackPlayButton2.src = 'Assets/images/playbutton.png';
        trackState2 -= 1
    }
    return
} 

function playAudio3() {
    if (trackState3 == 0) {
        trackPreview3.play();
        trackPlayButton3.src = 'Assets/images/pausebutton.png';
        trackState3 += 1
    } else {
        trackPreview3.pause();
        trackPlayButton3.src = 'Assets/images/playbutton.png';
        trackState3 -= 1
    }
    return
} 

function playAudio4() {
    if (trackState4 == 0) {
        trackPreview4.play();
        trackPlayButton4.src = 'Assets/images/pausebutton.png';
        trackState4 += 1
    } else {
        trackPreview4.pause();
        trackPlayButton4.src = 'Assets/images/playbutton.png';
        trackState4 -= 1
    }
    return
} 

var unlockedLogs = ['intro', '1', '2', '3']
const introductionName = 'Introduction'
document.getElementById('entryLogIntro').innerHTML = introductionName
console.log('banana')
