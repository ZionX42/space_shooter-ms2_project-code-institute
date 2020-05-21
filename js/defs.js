// Image const list
const ImageFiles = [
    'rick_spacecraft.png'
];

// Keypresses for the movement of the spaceship.  
const GameSettings = {
    keyPress: {
        left: 37,
        right: 39,
        up: 38,
        down: 40,
        space: 32
},

// Game Area starting point
gameAreaWidth: 720,
gameAreaHeight: 576,
gameAreDiv: "#gameArea",

playerDivName: "playerSprite",
playerStart: {
    x: 360,
    y: 440
}

};

//  Game Manager 
let GameManager = {
    assets: {},
    player: undefined
}