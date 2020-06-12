// Extending bullets sprite to funtion in the game
class Bullet extends Sprite {
  constructor(divName, assetDesc, position) {
    super(
      divName,
      position,
      assetDesc.fileName,
      new Size(assetDesc.width, assetDesc.height)
    );
    this.life = GameSettings.bulletLife;
    this.dead = false;
    this.addToBoard(true);
  }

  // Defining the bullets funtions to update throughout the game & bullet direction
  update(dt) {
    let inc = dt * GameSettings.bulletSpeed;
    this.incrementPosition(inc, 0);
    this.life -= dt;
    if (this.life < 0) {
      this.killMe();
    }
  }
  killMe() {
    this.dead = true;
    this.removeFromBoard();
  }
}

// Collection of bullets & how many added to player
class BulletCollection {
  constructor(player) {
    this.listBullets = [];
    this.lastAdded = 0;
    this.player = player;
    this.total_bullets = 0;
  }

  reset() {
    for (let i = 0; i < this.listBullets.length; ++i) {
      this.listBullets[i].removeFromBoard();
    }
    this.listBullets = [];
    this.lastAdded = 0;
    this.total_bullets = 0;
  }
  // Bullets update
  update(dt) {
    for (let i = this.listBullets.length - 1; i >= 0; --i) {
      if (this.listBullets[i].dead == true) {
        this.listBullets.splice(i, 1);
      } else {
        this.listBullets[i].update(dt);
      }
    }
    this.lastAdded += dt;

    // Detection to whether we need to add bullet to the game
    if (
      this.lastAdded > GameSettings.bulletFireRate &&
      this.player.state != GameSettings.playerState.hitFlashing
    ) {
      this.lastAdded = 0;
      this.listBullets.push(
        new Bullet(
          "bullet_" + this.total_bullets,
          GameManager.assets["bullets/pickledRick"],
          new Point(
            this.player.position.x + this.player.size.width,
            this.player.position.y + this.player.size.height / 1.5
          )
        )
      );
      this.total_bullets++;
    }
  }
}

// Initial code cited from: bluefeversoft, https://github.com/bluefeversoft/html_invaders
