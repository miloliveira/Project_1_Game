class Player {
  constructor(x, y) {
    this.x = x; //starts at x=0
    this.y = y;
    this.width = 55; //width image
    this.height = 90; //height image
    this.img = new Image();
    this.lifeBar = 340;
    this.heartBarImg = new Image();
  }

  drawPlayer() {
    this.img.src = "./docs/assets/imgs/kid_90x50.png";
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawHeartBar() {
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, this.lifeBar, 70);

    this.heartBarImg.src = "./docs/assets/imgs/bgh360x90 (1).png";
    ctx.drawImage(this.heartBarImg, 0, 0, 360, 90);
  }

  moveUp() {
    if (this.y > 100) {
      this.y -= 25;
    }
  }
  moveDown() {
    if (this.y + this.height < 800) {
      this.y += 25;
    }
  }

  moveRight() {
    if (this.x + this.width < 600) {
      this.x += 25;
    }
  }
  moveLeft() {
    if (this.x > 0) {
      this.x -= 25;
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

  crashWith(food) {
    return !(
      this.bottom() < food.top() ||
      this.top() > food.bottom() ||
      this.right() < food.left() ||
      this.left() > food.right()
    );
  }

  playerLost() {
    ctx.fillStyle = "black";
    ctx.fillRect(400, 200, 400, 300);
    ctx.font = "25px serif";
    ctx.fillStyle = "white";
    ctx.fillText(`GAME OVER!`, 540, 300);
    ctx.fillText(`NANA WON!`, 550, 340);
  }
}
