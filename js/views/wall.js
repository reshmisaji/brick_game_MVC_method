const applyWallPreferences = function(document, wall, elementId) {
  let wallElement = getElement(document, elementId);
  wallElement.style.left = addPixelSuffix(wall.left);
  wallElement.style.top = addPixelSuffix(wall.top);
  wallElement.style.width = addPixelSuffix(wall.marginRight);
  wallElement.style.height = addPixelSuffix(wall.marginBottom);
};
