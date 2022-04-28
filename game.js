class Game {
  constructor(level) {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.level = level;
    this.cWidth = canvas.width;
    this.cHeight = canvas.height;
    this.frames = 0;
    this.intervalId = null;
    this.gameRuning = false;
    this.bgImage = new Image();
    this.coinBonus = [];
    this.lifeBonus = [];
    this.foodObst1 = [];
    this.foodObst2 = [];
    this.foodObst3 = [];
    this.foodObst4 = [];
    this.topScore = {};
    this.imgCoin = new Image();
    this.crashSound = new Audio(
      "./docs/assets/sounds/mixkit-hard-typewriter-hit-1364.wav"
    );
    this.gameOverSound = new Audio(
      "./docs/assets/sounds/failure-drum-sound-effect-2-7184.mp3"
    );
    this.playerWinsSound = new Audio(
      "./docs/assets/sounds/success-fanfare-trumpets-6185.mp3"
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
      if (this.gameRuning) {
        this.updateGame();
      }
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
  }

  updateObstacles() {
    this.frames++;
    this.newGrandma.lifeBar -= 0.08;

    for (let i = 0; i < this.foodObst1.length; i++) {
      this.foodObst1[i].update1();
      this.newPlayer.crash = false;
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

    if (this.frames % (200 * this.level) === 0) {
      this.foodObst1.push(new Food(60, 60, this.img1, this));
    }

    if (this.frames % (240 * this.level) === 0) {
      this.foodObst2.push(new Food(60, 60, this.img2, this));
    }

    if (this.frames % (220 * this.level) === 0) {
      this.foodObst3.push(new Food(60, 60, this.img3, this));
    }

    if (this.frames % (180 * this.level) === 0) {
      this.foodObst4.push(new Food(40, 35, this.img4, this));
    }
  }

  checkGameResult() {
    const food1Crash = this.foodObst1.some((food, index) => {
      if (this.newPlayer.crashWith(food)) {
        this.foodObst1.splice(index, 1);
      }
      return this.newPlayer.crashWith(food);
    });
    const food2Crash = this.foodObst2.some((food, index) => {
      if (this.newPlayer.crashWith(food)) {
        this.foodObst2.splice(index, 1);
      }
      return this.newPlayer.crashWith(food);
    });
    const food3Crash = this.foodObst3.some((food, index) => {
      if (this.newPlayer.crashWith(food)) {
        this.foodObst3.splice(index, 1);
      }
      return this.newPlayer.crashWith(food);
    });
    const food4Crash = this.foodObst4.some((food, index) => {
      if (this.newPlayer.crashWith(food)) {
        this.foodObst4.splice(index, 1);
      }
      return this.newPlayer.crashWith(food);
    });

    if (food1Crash || food2Crash || food3Crash || food4Crash) {
      this.newPlayer.lifeBar -= 40;
      this.crashSound.loop = false;
      this.crashSound.play();
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
        this.newPlayer.lifeBar += 40;
        this.lifeBonus.splice(this.lifeBonus[0], 1);
      }
    }

    for (let i = 0; i < this.coinBonus.length; i++) {
      this.coinBonus[0].updateCoinBonus();
    }
    if (this.frames % (200 * this.level) === 0) {
      this.coinBonus.push(new Bonus(this));
    }
    for (let i = 0; i < this.coinBonus.length; i++) {
      if (this.newPlayer.crashWith(this.coinBonus[0])) {
        this.newPlayer.playerCoins += 10;
        this.coinBonus.splice(0, 1);
      }
    }
    this.ctx.font = "30px helvetica";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(`${this.newPlayer.playerCoins}`, 110, 108);
    this.imgCoin.src = "./docs/assets/imgs/coin_w40h42_full.png";
    this.ctx.drawImage(this.imgCoin, 70, 80, 30, 32);
  }

  checkWinOrLose() {
    if (this.newPlayer.lifeBar <= 0) {
      this.newGrandma.grandmaWins();
      this.gameOverSound.loop = false;
      this.gameOverSound.play();
      clearInterval(this.intervalId);
      this.gameRuning = false;
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
