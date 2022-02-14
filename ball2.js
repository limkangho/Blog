export class Ball2 {
  constructor(stageWidth, stageHeight, x, y, radius, speed) {
    this.radius = radius;
    this.x = stageWidth / 2;
    this.y = stageHeight / 2;
    this.vx = speed;
    this.vy = speed;

    this.direction = 0;
    this.keyStorage = [];

    document.addEventListener('keydown', this.keyStore.bind(this), true);
    document.addEventListener('keyup', this.keyDiscard.bind(this), true);
  }

  draw(ctx, stageWidth, stageHeight) {
    if (this.keyStorage[37] == true) {
      this.x -= this.vx;
    }
    if (this.keyStorage[38] == true) {
      this.y -= this.vy;
    }
    if (this.keyStorage[39] == true) {
      this.x += this.vx;
    }
    if (this.keyStorage[40] == true) {
      this.y += this.vy;
    }
    if (this.keyStorage[32] == true) {
      // this.jump();
      
    } 

    ctx.fillStyle = '#1b1b1b';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    ctx.fill();
  }

  keyStore(e) {
    if (e.keyCode >= 37 && e.keyCode <= 40 || e.keyCode == 32) {
      this.keyStorage[e.keyCode] = true;
    }
  }

  keyDiscard(e) {
    if (e.keyCode >= 37 && e.keyCode <= 40 || e.keyCode == 32) {
      this.keyStorage[e.keyCode] = false;
    }
  }
}