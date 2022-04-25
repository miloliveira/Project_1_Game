class Grandma {
  constructor(game) {
    this.x = 1115; //starts at x=0
    this.y = 0;
    this.width = 85; //width image
    this.height = 120; //height image
    this.img = new Image();
    this.lifeBar = 230;
    this.game = game;
  }

  drawGrandma() {
    this.img.src = "./docs/assets/imgs/grandma_100x65.png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawTime() {
    this.game.ctx.strokeStyle = "black";
    this.game.ctx.strokeRect(920, 30, 230, 30);
    this.game.ctx.fillStyle = "orange";
    this.game.ctx.fillRect(920, 30, this.lifeBar, 30);
  }

  grandmaWins() {
    this.game.ctx.fillStyle = "black";
    this.game.ctx.fillRect(400, 200, 400, 300);
    this.game.ctx.font = "25px serif";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillText(`GAME OVER!`, 540, 300);
    this.game.ctx.fillText(`NANA WON!`, 550, 340);
  }

  grandmaMoves() {
    this.game.frames++;

    let minY = 100;
    let maxY = 600;
    let yPos = Math.floor(Math.random() * (maxY - minY) + minY);

    if (this.game.frames % 120 === 1) {
      this.y = yPos;
    }
  }
}
