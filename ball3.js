export class Ball3 {
  constructor(stageWidth, stageHeight) {
    this.x = stageWidth / 2;
    this.y = stageHeight - 100;
    this.radius = 20;

    //key inputs
    this.keyStorage = [];

    //ball speed
    this.vx = 5;
    this.vy = 5;

    document.addEventListener('keydown', this.keyStore.bind(this), true);
    document.addEventListener('keyup', this.keyDiscard.bind(this), true);
  }

  draw(ctx) {
    this.arrowMove();

    ctx.fillStyle = '#4284f3';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    ctx.fill();
  }

  keyStore(e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      this.keyStorage[e.keyCode] = true;
      console.log(e.keyCode);
    }
  }

  keyDiscard(e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      this.keyStorage[e.keyCode] = false;
    }
  }

  arrowMove() {
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
  }
}