const addBall = function(document, wall) {
  let ballPreferences = new Ball(15, 600, 460, 10, 10);
  let ball = createElement(document, "div", "ball_1", "ball");
  wall.appendChild(ball);
  applyElementPreferences(document, ballPreferences, "ball_1");
  return ballPreferences;
};
