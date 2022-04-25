const resetButton = document.getElementById("reset-button");
let game;
function resetGame() {
  game = new Game();
  clearInterval(game.intervalId);
  game.ctx.clearRect(0, 0, game.cWidth, game.cHeight);
  if (!game.gameRuning) {
    game.startGame();
  }
}
function startGame() {
  game = new Game();

  console.log(game.gameRuning);
  if (!game.gameRuning) {
    game.startGame();
  }
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  resetButton.onclick = () => {
    resetGame();
  };
};
