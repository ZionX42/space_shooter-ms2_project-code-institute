// Poistioning of the sprite & anchor
class Sprite {
  constructor(divName, position, imgName, sizePx) {
    this.position = position;
    this.divName = divName;
    this.imgName = imgName;
    this.size = sizePx;
    this.anchorShift = new Point(-this.size.width / 2, -this.size.height / 2);
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
