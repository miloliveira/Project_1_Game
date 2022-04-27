class Bonus {
  constructor(game) {
    this.x = Math.floor(Math.random() * (445 - 50) + 50);
    this.y = Math.floor(Math.random() * (750 - 150) + 150);
    this.width = 40;
    this.height = 42;
    this.img1 = new Image();
    this.img2 = new Image();
    this.game = game;
  }

  updateLifeBonus() {
    this.img1.src = "./docs/assets/imgs/heart_w40xh42.png";
    this.game.ctx.drawImage(this.img1, this.x, this.y, this.width, this.height);
  }

  updateCoinBonus() {
    this.img2.src = "./docs/assets/imgs/coinw40h42.png";
    this.game.ctx.drawImage(this.img2, this.x, this.y, this.width, this.height);
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
