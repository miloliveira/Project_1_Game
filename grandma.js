class Grandma {
  constructor(game) {
    this.x = 1115;
    this.y = 0;
    this.width = 85;
    this.height = 120;
    this.img1 = new Image();
    this.lifeBar = 230;
    this.game = game;
    const img = new Image();
    img.addEventListener("load", () => {
      this.img2 = img;
    });
    img.src = "./docs/assets/imgs/gameover.png";
  }

  drawGrandma() {
    this.img1.src = "./docs/assets/imgs/grandma_100x65.png";
    this.game.ctx.drawImage(this.img1, this.x, this.y, this.width, this.height);
  }

  drawTime() {
    this.game.ctx.strokeStyle = "black";
    this.game.ctx.strokeRect(920, 30, 230, 30);
    this.game.ctx.fillStyle = "orange";
    this.game.ctx.fillRect(920, 30, this.lifeBar, 30);
  }

  grandmaWins() {
    this.game.ctx.drawImage(this.img2, 300, 200, 600, 400);
    this.game.ctx.font = "55px helvetica";
    this.game.ctx.fillStyle = "black";
    this.game.ctx.fillText(`${this.game.newPlayer.playerCoins}`, 595, 548);
  }

  grandmaMoves() {
    this.game.frames++;

    let minY = 100;
    let maxY = 680;
    let yPos = Math.floor(Math.random() * (maxY - minY) + minY);

    if (this.game.frames % 120 === 1) {
      this.y = yPos;
    }
  }
}
