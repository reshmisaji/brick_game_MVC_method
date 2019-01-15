const addPaddle = function(document, wall) {
  let paddlePreferences = new Paddle(100, 30, 630, 430, 10);
  let paddle = createElement(document, "div", "paddle_1", "paddle");
  wall.appendChild(paddle);
  applyElementPreferences(document, paddlePreferences, "paddle_1");
  return paddlePreferences;
};
