class Grandma {
  constructor() {
    this.x = 1115; //starts at x=0
    this.y = 0;
    this.width = 85; //width image
    this.height = 120; //height image
    this.img = new Image();
    this.lifeBar = 230;
  }

  drawGrandma() {
    this.img.src = "./docs/assets/imgs/grandma_100x65.png";
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawTime() {
    ctx.strokeStyle = "black";
    ctx.strokeRect(920, 30, 230, 30);
    ctx.fillStyle = "orange";
    ctx.fillRect(920, 30, this.lifeBar, 30);
  }

  grandmaLost() {
    ctx.fillStyle = "black";
    ctx.fillRect(350, 200, 500, 300);
    ctx.font = "25px serif";
    ctx.fillStyle = "white";
    ctx.fillText(`CONGRATS`, 520, 250);
    ctx.fillText(`YOU WON!`, 525, 280);
    ctx.fillText(`NANA GOT TIRED OF`, 460, 330);
    ctx.fillText(`THROWING SO MUCH FOOD`, 420, 360);
  }

  grandmaMoves() {
    frames++;

    let minY = 100;
    let maxY = 600;
    let yPos = Math.floor(Math.random() * (maxY - minY) + minY);

    if (frames % 120 === 1) {
      this.y = yPos;
    }
  }
}
