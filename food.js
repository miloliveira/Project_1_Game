class Food {
  constructor(width, height, img, game) {
    this.game = game;
    this.x = this.game.cWidth - this.game.newGrandma.width;
    this.y = game.newGrandma.y;
    this.width = width;
    this.height = height;
    this.img = img;
    this.img1 = new Image();
    this.img2 = new Image();
    this.img3 = new Image();
    this.img4 = new Image();
  }

  update1() {
    this.img1.src = "./docs/assets/imgs/90_strawberrycake.png";
    this.game.ctx.drawImage(this.img1, this.x, this.y, this.width, this.height);
    this.x -= 6;
    this.y -= 1;
  }

  update2() {
    this.img2.src = "./docs/assets/imgs/85_roastedchicken.png";
    this.game.ctx.drawImage(this.img2, this.x, this.y, this.width, this.height);
    this.x -= 5;
  }
  update3() {
    this.img3.src = "./docs/assets/imgs/99_taco.png";
    this.game.ctx.drawImage(this.img3, this.x, this.y, this.width, this.height);
    this.x -= 4;
    this.y += 1;
  }
  update4() {
    this.img4.src = "./docs/assets/imgs/coockie_35x40.png";
    this.game.ctx.drawImage(this.img4, this.x, this.y, this.width, this.height);
    this.x -= 5;
    this.y += 1;
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

  crashWith(food) {
    return !(
      this.bottom() < food.top() ||
      this.top() > food.bottom() ||
      this.right() < food.left() ||
      this.left() > food.right()
    );
  }
}
