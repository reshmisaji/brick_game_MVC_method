const addWall = function(body, wall) {
  let gameWindow = createElement(document, "div", "gameWindow", "gameScreen");
  body.appendChild(gameWindow);
  applyWallPreferences(document, wall, "gameWindow");
};
