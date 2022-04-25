class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.cWidth = canvas.width;
    this.cHeight = canvas.height;
    this.frames = 0;
    this.intervalId = null;
    this.gameRuning = false;
    this.bgImage = new Image();
    this.lifeBonus = [];
    this.foodObst1 = [];
    this.foodObst2 = [];
    this.foodObst3 = [];
    this.foodObst4 = [];
    this.topScore = {};
    this.crashSound = new Audio(
      "./docs/assets/imgs/mixkit-small-hit-in-a-game-2072.wav"
    );
    this.gameOverSound = new Audio(
      "./docs/assets/imgs/failure-drum-sound-effect-2-7184.mp3"
    );
    this.playerWinsSound = new Audio(
      "./docs/assets/imgs/success-fanfare-trumpets-6185.mp3"
    );
    this.initSound = new Audio(
      "./docs/assets/imgs/mixkit-game-bonus-reached-2065.wav"
    );
  }

  startGame() {
    clearInterval(game.intervalId);
    game.ctx.clearRect(0, 0, game.cWidth, game.cHeight);
    console.log("click");
    this.newPlayer = new Player(0, 250, this);
    this.newGrandma = new Grandma(this);
    this.gameRuning = true;
    this.intervalId = setInterval(() => {
      this.updateGame();
    }, 1000 / 60);
  }

  drawBackground() {
    this.bgImage.src = "./docs/assets/imgs/bg.jpg";
    this.ctx.drawImage(this.bgImage, 0, 0, this.cWidth, this.cHeight);
  }

  updateGame() {
    console.log(this.gameRuning);
    this.drawBackground();
    this.newPlayer.drawPlayer();
    this.newPlayer.drawHeartBar();
    this.newGrandma.grandmaMoves();
    this.newGrandma.drawGrandma();
    this.newGrandma.drawTime();
    this.updateObstacles();
    this.checkGameResult();
    this.updateBonus();
    this.checkWinOrLose();
    //this.scoreBoard()
  }

  updateObstacles() {
    this.frames++;
    this.newGrandma.lifeBar -= 0.08;

    for (let i = 0; i < this.foodObst1.length; i++) {
      this.foodObst1[i].update1();
    }

    for (let i = 0; i < this.foodObst2.length; i++) {
      this.foodObst2[i].update2();
    }

    for (let i = 0; i < this.foodObst3.length; i++) {
      this.foodObst3[i].update3();
    }

    for (let i = 0; i < this.foodObst4.length; i++) {
      this.foodObst4[i].update4();
    }

    if (this.frames % 160 === 0) {
      this.foodObst1.push(new Food(60, 60, this.img1, this));
    }

    if (this.frames % 200 === 0) {
      this.foodObst2.push(new Food(60, 60, this.img2, this));
    }

    if (this.frames % 220 === 0) {
      this.foodObst3.push(new Food(60, 60, this.img3, this));
    }

    if (this.frames % 180 === 0) {
      this.foodObst4.push(new Food(40, 35, this.img4, this));
    }
  }

  checkGameResult() {
    for (let i = 0; i < this.foodObst1.length; i++) {
      if (this.newPlayer.crashWith(this.foodObst1[i])) {
        this.newPlayer.lifeBar -= 2;
        this.crashSound.loop = false;
        this.crashSound.play();
        //this.foodObst1.splice(this.foodObst1[i-1],1)
      }
    }

    for (let i = 0; i < this.foodObst2.length; i++) {
      if (this.newPlayer.crashWith(this.foodObst2[i])) {
        this.newPlayer.lifeBar -= 2;
        this.crashSound.loop = false;
        this.crashSound.play();
        //this.foodObst2.splice(this.foodObst2[i-1],1)
      }
    }

    for (let i = 0; i < this.foodObst3.length; i++) {
      if (this.newPlayer.crashWith(this.foodObst3[i])) {
        this.newPlayer.lifeBar -= 2;
        this.crashSound.loop = false;
        this.crashSound.play();
        //this.foodObst3.splice(this.foodObst3[i-1],1)
      }
    }
    for (let i = 0; i < this.foodObst4.length; i++) {
      if (this.newPlayer.crashWith(this.foodObst4[i])) {
        this.newPlayer.lifeBar -= 2;
        this.crashSound.loop = false;
        this.crashSound.play();
        // this.foodObst4.splice(this.foodObst4[i-1],1)
      }
    }
  }

  updateBonus() {
    for (let i = 0; i < this.lifeBonus.length; i++) {
      this.lifeBonus[0].updateLifeBonus();
    }

    if (this.newPlayer.lifeBar < 170 && this.lifeBonus.length === 0) {
      this.lifeBonus.push(new Bonus(this));
    }

    for (let i = 0; i < this.lifeBonus.length; i++) {
      if (
        this.newPlayer.crashWith(this.lifeBonus[0]) &&
        this.newPlayer.lifeBar < 340
      ) {
        this.newPlayer.lifeBar += 10;
        this.lifeBonus.pop(this.lifeBonus[0]);
      }
    }
  }

  checkWinOrLose() {
    if (this.newPlayer.lifeBar <= 0) {
      clearInterval(this.intervalId);
      this.gameRuning = false;
      this.newGrandma.grandmaWins();
      this.gameOverSound.loop = false;
      this.gameOverSound.play();
    }

    if (this.newGrandma.lifeBar <= 0) {
      clearInterval(this.intervalId);
      this.gameRuning = false;
      this.newPlayer.playerWins();
      this.playerWinsSound.loop = false;
      this.playerWinsSound.play();
    }
    localStorage.setItem(
      `last Score is:`,
      JSON.stringify(this.newPlayer.lifeBar)
    );
  }
  /* 
  scoreBoard(){
    let topScore =JSON.parse(localStorage.getItem('last Score is:'))
    
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(400, 200, 400, 300);
    this.ctx.font = "25px serif";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`your score is`, 540, 300);
    this.ctx.fillText(`${topScore}`, 550, 340);
  }  */

  sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
      this.sound.play();
    };
    this.stop = function () {
      this.sound.pause();
    };
  }
}
