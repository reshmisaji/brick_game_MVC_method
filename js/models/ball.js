class Ball {
  constructor(radius, positionOfY, positionOfX, speedX, speedY) {
    this.height = radius * 2;
    this.width = radius * 2;
    this.speedX = speedX;
    this.speedY = speedY;
    this.positionOfY = positionOfY;
    this.positionOfX = positionOfX;
  }

  moveBall() {
    this.positionOfX = this.positionOfX - this.speedX;
    this.positionOfY = this.positionOfY - this.speedY;
  }
}
