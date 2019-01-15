class Paddle {
  constructor(width, height, positionOfY, positionOfX, velocity) {
    this.height = height;
    this.width = width;
    this.velocity = velocity;
    this.positionOfY = positionOfY;
    this.positionOfX = positionOfX;
  }

  movePaddle() {
    this.positionOfX = this.positionOfX + this.velocity;
  }

  negateVelocity() {
    this.velocity = this.velocity;
  }

  moveRight() {
    return (this.positionOfX = this.positionOfX + this.velocity);
  }

  moveLeft() {
    return (this.positionOfX = this.positionOfX - this.velocity);
  }
}
