class Player {
  constructor(x, y) {
    this.x = x; //starts at x=0
    this.y = y;
    this.width = 50; //width image
    this.height = 50; //height image
    this.img = new Image();
    this.lifeBar = 100;
  }

  drawPlayer() {
    this.img.src = "./docs/assets/imgs/playeravatar.jpg";
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  moveUp() {
    if (this.y > 0) {
      this.y -= 25;
    }
  }
  moveDown() {
    if (this.y + this.height < 500) {
      this.y += 25;
    }
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

  crashWithFood(food) {
    return !(
      this.bottom() < food.top() ||
      this.top() > food.bottom() ||
      this.right() < food.left() ||
      this.left() > food.right()
    );
  }

  playerLost() {
    ctx.fillStyle = "black";
    ctx.fillRect(100, 200, 300, 100);
    ctx.font = "15px serif";
    ctx.fillStyle = "white";
    ctx.fillText(`GAME OVER! NANA CAUGHT YOU!`, 105, 235);
    ctx.fillText(`NANA CAUGHT YOU!`, 105, 250);
    ctx.fillText(
      `NOW YOU HAVE TO EAT ALL THE FOOD SHE THROWN AT YOU!`,
      105,
      265
    );
  }
}
