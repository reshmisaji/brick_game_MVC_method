class Wall {
  constructor(width, height, left, top) {
    this.left = left;
    this.marginRight = width;
    this.top = top;
    this.marginBottom = height;
  }

  isRightCollide(horizontalPosition) {
    return this.marginRight == horizontalPosition;
  }

  isLeftCollide(horizontalPosition) {
    return this.left == horizontalPosition;
  }

  isTopCollide(verticalPosition) {
    return this.top == verticalPosition;
  }

  isBottomCollide(verticalPosition) {
    return this.marginBottom == verticalPosition;
  }
}
