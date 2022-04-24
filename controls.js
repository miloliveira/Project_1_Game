document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      newPlayer.moveUp();
      break;
    case "ArrowDown":
      newPlayer.moveDown();
      break;
    case "ArrowRight":
      newPlayer.moveRight();
      break;
    case "ArrowLeft":
      newPlayer.moveLeft();
      break;
  }
});
