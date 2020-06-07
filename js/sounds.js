// Setting up the sound functions for the game play
function loadSound(fileName) {
    GameManager.sounds[fileName] = new Audio(soundPath + fileName + '.wav');
}

function initSounds() {
    for (let i = 0; i < soundFiles.length; ++i) {
		loadSound(soundFiles[i]);
	}
}

function playSound(sound) {
    GameManager.sounds[sound].play();
}

let x = loadSound("DST-DasElectron"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
}