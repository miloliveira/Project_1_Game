const startButton = document.getElementsByClassName("start-button")[0];
let game = null;
function startGame() {
  if (!game) {
    game = new Game();
  }
  console.log(game.gameRuning);
  if (!game.gameRuning) {
    game.startGame();
  }
}

function resetGame() {
  clearInterval(game.intervalId);
  game.ctx.clearRect(0, 0, game.cWidth, game.cHeight);
  game = new Game();
  if (!game.gameRuning) {
    game.startGame();
  }
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
