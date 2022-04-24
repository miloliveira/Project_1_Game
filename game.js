const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const cWidth = canvas.width;
const cHeight = canvas.height;
let frames = 0;
let intervalId = null;
const newPlayer = new Player(0, 250);
const newGrandma = new Grandma();
//const lifeBonus = new Bonus();

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
  bgImage.src = "./docs/assets/imgs/bg.jpg";
  ctx.drawImage(bgImage, 0, 0, cWidth, cHeight);
}

function updateGame() {
  drawBackground();
  newPlayer.drawPlayer();
  newPlayer.drawHeartBar();
  newGrandma.grandmaMoves();
  newGrandma.drawGrandma();
  newGrandma.drawTime();
  updateBonus();
  updateObstacles();
  checkGameResult();
  checkWinOrLose();
}

function stopGame() {
  clearInterval(intervalId);
}

function checkGameResult() {

  for (let i = 0; i < foodObst1.length; i++) {
    if (newPlayer.crashWith(foodObst1[i])) {
      newPlayer.lifeBar -= 2;
    }
  }

  for (let i = 0; i < foodObst2.length; i++) {
    if (newPlayer.crashWith(foodObst2[i])) {
      newPlayer.lifeBar -= 2;
    }
  }

  for (let i = 0; i < foodObst3.length; i++) {
    if (newPlayer.crashWith(foodObst3[i])) {
      newPlayer.lifeBar -= 2;
    }
  }
  for (let i = 0; i < foodObst4.length; i++) {
    if (newPlayer.crashWith(foodObst4[i])) {
      newPlayer.lifeBar -= 2;
    }
  }

  /* for(let i=0; i<foodObst5.length; i++){ 
        if(newPlayer.crashWithFood(foodObst5[i])){
          newPlayer.lifeBar -= 1;
        }
      } */

}

function checkWinOrLose(){
  
  if (newPlayer.lifeBar <= 0) {
    stopGame();
    newPlayer.playerLost();
  }

  if (newGrandma.lifeBar <= 0) {
    stopGame();
    newGrandma.grandmaLost();
  }

}
