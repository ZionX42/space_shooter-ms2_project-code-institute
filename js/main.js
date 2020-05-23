// Function to call the FPS of the game
function tick() {
  let now = Date.now();
  let dt = now - GameManager.lastUpdated;
  GameManager.lastUpdated = now;
  GameManager.fps = parseInt(1000 / dt);

  $("#FPS").text("FPS: " + GameManager.fps);

  setTimeout(tick, GameSettings.targetFPS);
}

// Resetting player function
function resetPlayer() {
  if (GameManager.player == undefined) {
    let asset = GameManager.assets["rick_spacecraft"];

    GameManager.player = new Player(
      GameSettings.playerDivName,
      new Point(GameSettings.playerStart.x, GameSettings.playerStart.y),
      asset,
      new Rect(
        40,
        40,
        GameSettings.gameAreaWidth - 80,
        GameSettings.gameAreaHeight - 80
      )
    );
    GameManager.player.addToBoard(true);
  }
  console.log("resetplayer() GameManager.player:", GameManager.player);
  GameManager.player.reset();
}

// Image loading
function init() {
  console.log("Main Game init()");
  resetPlayer();
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
      fileName: fileName,
    };
    indexNum++;
    if (indexNum < ImageFiles.length) {
      processAsset(indexNum);
    } else {
      console.log("Assets Done:", GameManager.assets);
      init();
    }
  };
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
});
