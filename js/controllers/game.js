getElement = (document, elementId) => document.getElementById(elementId);
addPixelSuffix = dimension => dimension + "px";

const applyElementPreferences = function(
  document,
  applyElementPreferences,
  elementId
) {
  let element = getElement(document, elementId);
  element.style.width = addPixelSuffix(applyElementPreferences.width);
  element.style.height = addPixelSuffix(applyElementPreferences.height);
  element.style.marginTop = addPixelSuffix(applyElementPreferences.positionOfY);
  element.style.marginLeft = addPixelSuffix(
    applyElementPreferences.positionOfX
  );
};

const createElement = function(document, tagName, elementId, elementClass) {
  let gameWindow = document.createElement(tagName);
  gameWindow.id = elementId;
  gameWindow.className = elementClass;
  return gameWindow;
};

const initializeGameWindow = function() {
  let wall = new Wall(960, 680, 0, 0);
  let body = getElement(document, "body");
  addWall(body,wall);
};

window.onload = initializeGameWindow;
