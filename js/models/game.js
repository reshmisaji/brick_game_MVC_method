class Game {
  constructor(wall, paddle) {
    this.wall = wall;
    this.paddle = paddle;
  }

  isInsideRightMargin() {
    return this.wall.marginRight > this.paddle.positionOfX + this.paddle.width;
  }

  isInsideLefttMargin() {
    return this.wall.left < this.paddle.positionOfX;
  }

  movePaddleRight() {
    if (this.isInsideRightMargin()) this.paddle.moveRight();
  }

  movePaddleLeft() {
    if (this.isInsideLefttMargin()) this.paddle.moveLeft();
  }
}
