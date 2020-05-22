// Poistioning of the sprite & anchor
class Sprite {
  constructor(divName, position, imgName, sizePx) {
    this.position = position;
    this.divName = divName;
    this.imgName = imgName;
    this.size = sizePx;
    this.anchorShift = new Point(-this.size.width / 2, -this.size.height / 2);
  }

  // Adding the player sprite to the game area in HTML
  addToBoard(shift) {
    let div = document.createElement("div");
    div.classList.add("sprite");
    div.id = this.divName;
    div.style.backgroundImage = "url('" + this.imgName + "')";
    div.style.width = this.size.width + 'px';
    div.style.height = this.size.height + 'px';
    $(GameSettings.gameAreaDiv).append(div);

    this.setPosition(this.position.x, this.position.y, shift);
  }

  //   Removes the object
  removeFromBoard() {
    $("#" + this.divName).remove();
  }

  draw() {
    $("#" + this.divName).css({
      "left": this.position.x,
      "top": this.position.y,
    });
  }

  // Anchor position
  setPosition(x, y, shift) {
    this.position.update(x, y);
    if (shift == true) {
      this.incrementPosition(this.anchorShift.x, this.anchorShift.y);
    }
    this.draw();
  }

  updatePosition(x, y) {
    this.position.update(x, y);
    this.draw();
  }

  incrementPosition(ix, iy) {
    this.position.increment(ix, iy);
    this.draw();
  }
}
