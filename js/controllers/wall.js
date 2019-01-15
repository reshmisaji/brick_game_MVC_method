const addWall = function(body, wall) {
  let gameWindow = createElement(document, "div", "gameWindow", "gameScreen");
  body.appendChild(gameWindow);
  gameWindow.tabIndex = "0";
  gameWindow.focus();
  applyWallPreferences(document, wall, "gameWindow");
  return gameWindow;
};
