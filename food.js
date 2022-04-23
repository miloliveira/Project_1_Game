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
    this.img4 = new Image();
    //this.img5 = new Image();
  }

  update1() {
    this.img1.src = "./docs/assets/imgs/90_strawberrycake.png";
    ctx.drawImage(this.img1, this.x, this.y, this.width, this.height);
  }

  update2() {
    this.img2.src = "./docs/assets/imgs/85_roastedchicken.png";
    ctx.drawImage(this.img2, this.x, this.y, this.width, this.height);
  }
  update3() {
    this.img3.src = "./docs/assets/imgs/99_taco.png";
    ctx.drawImage(this.img3, this.x, this.y, this.width, this.height);
  }
  update4() {
    this.img4.src = "./docs/assets/imgs/coockie_35x40.png";
    ctx.drawImage(this.img4, this.x, this.y, this.width, this.height);
  }

  /*  update5(){
      this.img5.src = "./docs/assets/imgs/38_friedegg.png";
    ctx.drawImage(this.img5, this.x, this.y, this.width, this.height);  
    } */

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
let foodObst1 = [];
let foodObst2 = [];
let foodObst3 = [];
let foodObst4 = [];
//let foodObst5 = [];

function updateObstacles() {
  frames++;
  newGrandma.lifeBar -= 0.08;

  for (let i = 0; i < foodObst1.length; i++) {
    foodObst1[i].x -= 6;
    foodObst1[i].y -= 1;
    foodObst1[i].update1();
  }

  for (let i = 0; i < foodObst2.length; i++) {
    foodObst2[i].x -= 5;
    foodObst2[i].update2();
  }

  for (let i = 0; i < foodObst3.length; i++) {
    foodObst3[i].x -= 4;
    foodObst3[i].y += 1;
    foodObst3[i].update3();
  }

  for (let i = 0; i < foodObst4.length; i++) {
    foodObst4[i].x -= 5;
    foodObst4[i].y += 1;
    foodObst4[i].update4();
  }

  /* for (let i = 0; i < foodObst5.length; i++) {
    foodObst5[i].x -= 7;
    foodObst5[i].y -= 2;
    foodObst5[i].update5()

  }  */

  if (frames % 100 === 0) {
    foodObst1.push(new Food(60, 60, this.img1));
  }

  if (frames % 120 === 0) {
    foodObst2.push(new Food(60, 60, this.img2));
  }

  if (frames % 140 === 0) {
    foodObst3.push(new Food(60, 60, this.img3));
  }

  if (frames % 60 === 0) {
    foodObst4.push(new Food(40, 35, this.img4));
  }

  /*  if (frames % 80 === 0) {
    foodObst5.push(new Food(50, 50, this.img5));
  }  */
}
