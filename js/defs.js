// Image const list
const ImageFiles = ["rick_spacecraft"];

// Keypresses for the movement of the spaceship.
const GameSettings = {
  keyPress: {
    left: 37,
    right: 39,
    up: 38,
    down: 40,
    space: 32,
  },

  // Game Area starting point
  gameAreaWidth: 720,
  gameAreaHeight: 576,
  gameAreDiv: "#gameArea",

  playerDivName: "playerSprite",
  playerStart: {
    x: 360,
    y: 440,
  },

  // Number of lives the Player has at start
  playerStartLives: 3,
  playerState: {
    ok: 0,
    dead: 1,
    hitFlashing: 2,
  },

  // Pixel count for directional movement
  playerMoveStep: 8
};

//  Game Manager
let GameManager = {
  assets: {},
  player: undefined,
};
