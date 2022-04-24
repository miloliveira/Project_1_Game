class Bonus {
    constructor(xPos, yPos){
        this.x=xPos
        this.y=yPos
        this.width=40
        this.height=42
        this.img = new Image()
    }


    updateLifeBonus(){
        this.img.src="./docs/assets/imgs/heart_w40xh42.png"
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
            
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


let lifeBonus=[];

function updateBonus(){
    for (let i = 0; i < lifeBonus.length; i++) {
        lifeBonus[0].updateLifeBonus();
      }

    let minY = 200;
    let maxY = 600;
    let yPos = Math.floor(Math.random() * (maxY - minY) + minY);

    let minX = 300;
    let maxX = 450;
    let xPos = Math.floor(Math.random() * (maxX - minX) + minX);

    if (newPlayer.lifeBar < 170 && lifeBonus.length===0){
        lifeBonus.push(new Bonus(xPos, yPos));
    }

    for (let i = 0; i < lifeBonus.length; i++) {
        if (newPlayer.crashWith(lifeBonus[0]) && newPlayer.lifeBar < 340) {
          newPlayer.lifeBar += 10;
          lifeBonus.pop(lifeBonus[0])
        }
      }



}