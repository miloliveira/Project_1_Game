class Grandma {
  constructor() {
    this.x = 650; //starts at x=0
    this.y = 50;
    this.width = 50; //width image
    this.height = 50; //height image
    this.img = new Image();
    this.lifeBar = 500;
  }

  drawGrandma() {
    this.img.src = "./docs/assets/imgs/playeravatar.jpg";
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  grandmaLost() {
    ctx.fillStyle = "black";
    ctx.fillRect(100, 200, 300, 100);
    ctx.font = "15px serif";
    ctx.fillStyle = "white";
    ctx.fillText(`CONGRATS`, 105, 235);
    ctx.fillText(`YOU WON!`, 105, 250);
    ctx.fillText(`NANA GOT TIRED OF THROWING SO MUCH CHICKEN`, 105, 265);
  }

  grandmaMoves() {
    frames++;
    /* 
    let minY=0
    let maxY=450
    let yPos=Math.floor(Math.random()*(maxY-minY))
 */
    /*  if(frames%120===0){
     */
    if (this.y % cHeight === 0) {
      this.y += 50;
    }
    // this.y= ((this.y+yPos)%cHeight===0)

    /* if(frames%120===0){
     */
  }
  /* 
    if (this.y === 50){
      this.y += 1
    }

    if (this.y === 450){
      this.y -= 1
    } 
 */
}

/* let grandmaPosition = [];

function updateGrandmaP() {
  frames++;

  for (let i = 0; i < grandmaPosition.length; i++) {
    grandmaPosition[i].x -= 10;
      let minY=0
      let maxY=450
      grandmaPosition[i].y=Math.floor(Math.random()*(maxY-minY)+minY)

    grandmaPosition[i].drawGrandma();
  }

  if (frames % 120 === 0) {
    grandmaPosition.push(new Grandma());
  } */
