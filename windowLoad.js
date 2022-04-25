const resetButton = document.getElementById("reset-button");
const game = new Game();
window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  resetButton.onclick = () => {
    resetGame();
  };

  function startGame() {
    game.startGame();
  }
};
function resetGame() {
  const game = new Game();
  clearInterval(game.intervalId);
  game.ctx.clearRect(0, 0, game.cWidth, game.cHeight);
}
