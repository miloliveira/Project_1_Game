const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const cWidth = canvas.width;
const cHeight = canvas.height;
let frames = 0;
let intervalId = null;
const newPlayer = new Player(0, 250);
const newGrandma = new Grandma();

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

function startGame() {
  intervalId = setInterval(() => {
    updateGame();
  }, 1000 / 60);
}

function drawBackground() {
  const bgImage = new Image();
  bgImage.src =
    "https://phaser.io/content/tutorials/making-your-first-phaser-3-game-portuguese/part3.png";
  ctx.drawImage(bgImage, 0, 0, cWidth, cHeight);
}

function updateGame() {
  drawBackground();
  newPlayer.drawPlayer();
  newGrandma.grandmaMoves();
  newGrandma.drawGrandma();
  updateObstacles();
  checkGameResult();
}

function stopGame() {
  clearInterval(intervalId);
}

function checkGameResult() {
  const crashed = foodObst.some(function (food) {
    return newPlayer.crashWithFood(food);
  });

  if (crashed) {
    newPlayer.lifeBar -= 1;

    if (newPlayer.lifeBar === 0) {
      stopGame();
      newPlayer.playerLost();
    }
  }
  if (newGrandma.lifeBar === 0) {
    stopGame();
    newGrandma.grandmaLost();
  }
}
