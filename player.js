class Player {
  constructor(x, y, game) {
    this.x = x; //starts at x=0
    this.y = y;
    this.width = 55; //width image
    this.height = 90; //height image
    this.img = new Image();
    this.lifeBar = 340;
    this.heartBarImg = new Image();
    this.game = game;
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

  playerWins() {
    /* this.game.ctx.fillStyle = "black";
    this.game.ctx.fillRect(350, 200, 500, 300);
    this.game.ctx.font = "25px serif";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText(`CONGRATS`, 520, 250);
    this.game.ctx.fillText(`YOU WON!`, 525, 280);
    this.game.ctx.fillText(`NANA GOT TIRED OF`, 460, 330);
    this.game.ctx.fillText(`THROWING SO MUCH FOOD`, 420, 360);
    this.game.ctx.fillText(`Your score:${game.newPlayer.lifeBar}`, 430, 390); */
    this.game.ctx.drawImage(this.img2, 300, 200, 600, 400);
  }
}
