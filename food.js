class Food {
  constructor(width, height, img) {
    this.x = cWidth - newGrandma.width;
    this.y = newGrandma.y;
    this.width = width;
    this.height = height;
    this.img = img;
    this.img1 = new Image();
    this.img2 = new Image();
    this.img3 = new Image();
  }

  update() {
    this.img1.src = "./docs/assets/imgs/playeravatar.jpg";
    ctx.drawImage(this.img1, this.x, this.y, this.width, this.height);

    this.img2.src = "./docs/assets/imgs/playeravatar.jpg";
    ctx.drawImage(this.img2, this.x, this.y, this.width, this.height);

    this.img3.src = "./docs/assets/imgs/playeravatar.jpg";
    ctx.drawImage(this.img3, this.x, this.y, this.width, this.height);
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
}
let foodObst = [];

function updateObstacles() {
  frames++;
  newGrandma.lifeBar -= 1;

  for (let i = 0; i < foodObst.length; i++) {
    foodObst[i].x -= 10;
    foodObst[i].update();
  }

  if (frames % 120 === 0) {
    foodObst.push(new Food(50, 50, this.img1));
  } else if (frames % 140 === 0) {
    foodObst.push(new Food(50, 50, this.img2));
  } else if (frames % 160 === 0) {
    foodObst.push(new Food(50, 50, this.img3));
  }
}
