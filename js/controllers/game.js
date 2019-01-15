getElement = (document, elementId) => document.getElementById(elementId);
addPixelSuffix = dimension => dimension + "px";

const getKeyEvents = function(document, game) {
  if (event.key == "ArrowRight") game.movePaddleRight();
  if (event.key == "ArrowLeft") game.movePaddleLeft();
  applyElementPreferences(document, game.paddle, "paddle_1");
};

const initializeGameWindow = function() {
  let wall = new Wall(960, 680, 0, 0);
  let body = getElement(document, "body");
  let wallElement = addWall(body, wall);
  let paddle = addPaddle(document, wallElement);
  let ball = addBall(document, wallElement);
  let game = new Game(wall, paddle, ball);
  wallElement.onkeydown = getKeyEvents.bind(null, document, game);
};

window.onload = initializeGameWindow;
