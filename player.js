class Player {
  constructor(x, y, game) {
    this.x = x;
    this.y = y;
    this.width = 55;
    this.height = 90;
    this.img = new Image();
    this.lifeBar = 340;
    this.heartBarImg = new Image();
    this.game = game;
    this.playerCoins=0;
    const img2 = new Image();
    img2.addEventListener("load", () => {
      this.img2 = img2;
    });
    img2.src = "./docs/assets/imgs/playerwins.png";
  }

  drawPlayer() {
    this.img.src = "./docs/assets/imgs/kid_90x50.png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawHeartBar() {
    this.game.ctx.fillStyle = "red";
    this.game.ctx.fillRect(10, 10, this.lifeBar, 70);

    this.heartBarImg.src = "./docs/assets/imgs/bgh360x90 (1).png";
    this.game.ctx.drawImage(this.heartBarImg, 0, 0, 360, 90);
  }

  moveUp() {
    if (this.y > 100) {
      this.y -= 25;
    }
  }
  moveDown() {
    if (this.y + this.height < 770) {
      this.y += 25;
    }
  }

  moveRight() {
    if (this.x + this.width < 500) {
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

  playerWins() {
    this.game.ctx.drawImage(this.img2, 300, 200, 600, 400);
    this.game.ctx.font = "55px helvetica";
    this.game.ctx.fillStyle = "black";
    this.game.ctx.fillText(`${this.playerCoins}`,595, 548)
  }
}
