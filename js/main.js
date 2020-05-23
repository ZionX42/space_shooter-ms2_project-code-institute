// Function to call the FPS of the game
function tick() {
  let now = Date.now();
  let dt = now - GameManager.lastUpdated;
  GameManager.lastUpdated = now;
  GameManager.fps = parseInt(1000 / dt);

  $("#FPS").text("FPS: " + GameManager.fps);

  GameManager.bullets.update(dt);

  setTimeout(tick, GameSettings.targetFPS);
}

// Reseting bullet function to allow right direction
function resetBullets() {
  if (GameManager.bullets != undefined) {
      GameManager.bullets.reset();
  } else {
      GameManager.bullets = new BulletCollection(GameManager.player);
  }
}

// Resetting player function
function resetPlayer() {
	if (GameManager.player == undefined) {
        console.log('resetPlayer() making new');
        let asset = GameManager.assets["rick_spacecraft"];

         GameManager.player = new Player(
            'playerSprite', 
         	new Point(GameSettings.playerStart.x, GameSettings.playerStart.y), 
             GameManager.assets["rick_spacecraft"],
             new Rect(40, 40, GameSettings.playAreaWidth - 80, GameSettings.playAreaHeight - 80));
         GameManager.player.addToBoard(true);

		console.log('resetPlayer() added new GameManager.player:' , GameManager.player);
    } 

    console.log('resetPlayer() GameManager.player:' , GameManager.player);
    GameManager.player.reset();
}


// Images & game loading
function resetGame() {
  console.log("Main Game init()");
  resetPlayer();
  resetBullets();
  setTimeout(tick, GameSettings.targetFPS);
}

function processAsset(indexNum) {
  let img = new Image();
  let fileName = "assets/" + ImageFiles[indexNum] + ".png";
  img.src = fileName;
  img.onload = function () {
    GameManager.assets[ImageFiles[indexNum]] = {
      width: this.width,
      height: this.height,
      fileName: fileName
    }

    indexNum++;
    if (indexNum < ImageFiles.length) {
      processAsset(indexNum);
    } else {
      console.log("Assets Done:", GameManager.assets);
      resetGame();
    }
  }
}

// Testing which key controls can be used
$(function () {
  processAsset(0);
  $(document).keydown(function (e) {
    switch (e.which) {
      case GameSettings.keyPress.up:
        GameManager.player.move(0, -1);
        break;
      case GameSettings.keyPress.down:
        GameManager.player.move(0, 1);
        break;
      case GameSettings.keyPress.left:
        GameManager.player.move(-1, 0);
        break;
      case GameSettings.keyPress.right:
        GameManager.player.move(1, 0);
        break;
      case GameSettings.keyPress.space:
        break;
    }
  });
  processAsset(0);
});
