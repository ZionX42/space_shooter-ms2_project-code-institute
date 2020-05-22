// Player class inherting from Sprite class. Also the player score
class Player extends Sprite {
  constructor(divName, position, assetDesc) {
    super(
      divName,
      position,
      assetDesc.fileName,
      new Size(assetDesc.width, assetDesc.height)
    );
    this.lives = GameSettings.playerStartLives;
    this.score = 0;
    this.highScore = 0;
    this.state = GameSettings.playerState.ok;
  }

  reset() {
    this.state = GameSettings.playerState.ok;
    this.score = 0;
    this.lives = GameSettings.playerStartLives;
    this.setLives();
    this.setScore();
    this.setHighScore();
    this.setPosition(
      GameSettings.playerStart.x,
      GameSettings.playerStart.y,
      true
    );
  }

  // Player movement function
move(x,y) {
  let xStep = GameSettings.playerMoveStep * x;
        let yStep = GameSettings.playerMoveStep * y;

        this.incrementPosition(xStep, yStep);
}

  // Adding the hit scores of the enemy
  incrementScore(amount) {
    this.score += amount;
    this.setScore();
    this.setHighScore();
  }

  // Score container counter displayer
  setLives() {
    $("#lives").text("x " + this.lives);
  }
  setScore() {
    $("#score").text(this.score);
  }
  setHighScore() {
    if (this.score > this.highScore) {
      this.highScore = this.score;
    }
    $("#highScore").text(this.highScore);
  }
}

