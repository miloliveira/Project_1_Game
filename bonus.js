class Bonus {
  constructor(game) {
    this.x = Math.floor(Math.random() * (445 - 50) + 50);
    this.y = Math.floor(Math.random() * (750 - 150) + 150);
    this.width = 40;
    this.height = 42;
    this.imgHeart = heartImg;
    this.imgCoin = coinImg;
    this.game = game;
  }

  updateLifeBonus() {
    heartAnimation();
    this.game.ctx.drawImage(
      this.imgHeart,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  updateCoinBonus() {
    coinAnimation();

    this.game.ctx.drawImage(
      this.imgCoin,
      this.x,
      this.y,
      this.width,
      this.height
    );
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

coinImg1 = new Image();
coinImg1.src = "./docs/assets/imgs/coin_w40h42_1.png";
coinImg2 = new Image();
coinImg2.src = "./docs/assets/imgs/coin_w40h42_2.png";
coinImg = new Image();
coinImg.src = coinImg1.src;
function coinAnimation() {
  if (game.frames % 20 === 0) {
    coinImg.src = coinImg1.src;
  } else if (game.frames % 15 === 1) {
    coinImg.src = coinImg2.src;
  }
}

heartImg1 = new Image();
heartImg1.src = "./docs/assets/imgs/heart_w40xh42.png";
heartImg2 = new Image();
heartImg2.src = "./docs/assets/imgs/heart_w40h42_2.png";
heartImg = new Image();
heartImg.src = heartImg1.src;
function heartAnimation() {
  if (game.frames % 20 === 0) {
    heartImg.src = heartImg1.src;
  } else if (game.frames % 15 === 1) {
    heartImg.src = heartImg2.src;
  }
}
