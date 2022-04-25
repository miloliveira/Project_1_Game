class Bonus {
  constructor(game) {
    this.x = Math.floor(Math.random() * (450 - 300) + 300);
    this.y = Math.floor(Math.random() * (600 - 200) + 200);
    this.width = 40;
    this.height = 42;
    this.img = new Image();
    this.game = game;
  }

  updateLifeBonus() {
    this.img.src = "./docs/assets/imgs/heart_w40xh42.png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  top() {
    return this.y;
  }
  left() {
    return this.x;
  }
  bottom() {
    return this.y + this.height;
  }
  right() {
    return this.x + this.width;
  }
}
