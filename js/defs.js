// Image const list
const ImageFiles = ["rick_spacecraft", "burrito_dog"];

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
  targetFPS: 1000 / 60,

  // Bullet spead
  bulletSpeed: 700 / 1000,
    bulletLife: 4000,
    bulletFireRate: 2000,

  gameAreaWidth: 720,
  gameAreaHeight: 576,
  gameAreaDiv: "#gameArea",

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
  bullets: undefined,
  lastUpdated: Date.now(),
  elapsedTime: 0,
  fps: 0
};
