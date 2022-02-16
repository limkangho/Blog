export class Ball3 {
  constructor(stageWidth, stageHeight, x, y, radius) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.x = x;
    this.y = y;
    this.radius = radius;
    // this.x = stageWidth / 2;
    // this.y = stageHeight / 2;

    //key inputs
    this.keyStorage = [];

    this.vx = 3;
    this.vy = 2;

    

    document.addEventListener('keydown', this.keyStore.bind(this), true);
    document.addEventListener('keyup', this.keyDiscard.bind(this), true);
  }

  draw(ctx) {
    ctx.fillStyle = '#4284f3';
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
    // if (e.keyCode == 32)
  }

  arrowMove(ctx) {
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
    this.draw(ctx);
  }

  jumping(ctx) {
  
  }
}