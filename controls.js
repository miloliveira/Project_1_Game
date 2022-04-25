document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      game.newPlayer.moveUp();
      break;
    case "ArrowDown":
      game.newPlayer.moveDown();
      break;
    case "ArrowRight":
      game.newPlayer.moveRight();
      break;
    case "ArrowLeft":
      game.newPlayer.moveLeft();
      break;
  }
});
