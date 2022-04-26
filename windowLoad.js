const startButton = document.getElementsByClassName("start-button")[0];
const buttonEasy = document.getElementById("button-easy");
const buttonMed = document.getElementById("button-med");
const buttonHard = document.getElementById("button-hard");

let gameLevel = 1;

let game = null;
function startGame() {
  if (!game) {
    game = new Game(gameLevel);
  }
  console.log(game.gameRuning);
  if (!game.gameRuning) {
    game.startGame();
    startButton.disabled = true;
  }
  buttonEasy.style.backgroundColor = "#e2ccce";
  buttonMed.style.backgroundColor = "#e2ccce";
  buttonHard.style.backgroundColor = "#e2ccce";
}

function resetGame() {
  clearInterval(game.intervalId);
  game.ctx.clearRect(0, 0, game.cWidth, game.cHeight);
  gameLevel = 1;
  game = new Game(gameLevel);
  if (!game.gameRuning) {
    game.startGame();
    startButton.disabled = true;
  }
  buttonEasy.style.backgroundColor = "#e2ccce";
  buttonMed.style.backgroundColor = "#e2ccce";
  buttonHard.style.backgroundColor = "#e2ccce";
}

window.onload = () => {
  startButton.onclick = () => {
    if (startButton.className === "start-button") {
      startGame();
      startButton.innerHTML = "PLAY AGAIN";
      startButton.className = "reset-button";
    } else {
      resetGame();
    }
  };
};

buttonEasy.addEventListener("click", () => {
  gameLevel = 1;

  startButton.disabled = false;
  buttonEasy.style.backgroundColor = "#A33531";
});

buttonMed.addEventListener("click", () => {
  gameLevel = 0.8;
  startButton.disabled = false;
  buttonMed.style.backgroundColor = "#A33531";
});

buttonHard.addEventListener("click", () => {
  gameLevel = 0.5;
  startButton.disabled = false;
  buttonHard.style.backgroundColor = "#A33531";
});
