export class Character {
  constructor(x, y, radius, speed) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    // this.vx = speed;
    // this.vy = speed;

    this.vx = speed;
    this.vy = 0;

    this.g= 0.05;
    this.vg = 0;

    this.direction = 0;
    this.keyStorage = [];

    document.addEventListener('keydown', this.keyStore.bind(this), true);
    document.addEventListener('keyup', this.keyDiscard.bind(this), true);
  }

  draw(ctx, stageWidth, stageHeight) {
    this.vg += this.g;
    this.y += this.vy + this.vg;
    this.hitBottom(stageWidth, stageHeight);
    

    if (this.keyStorage[37] == true) {
      this.x -= this.vx;
    }
    // if (this.keyStorage[38] == true) {
    //   this.y -= this.vy;
    // }
    if (this.keyStorage[39] == true) {
      this.x += this.vx;
    }
    // if (this.keyStorage[40] == true) {
    //   this.y += this.vy;
    // }

    ctx.fillStyle = '#1b1b1b';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    ctx.fill();
  }

  keyStore(e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      this.keyStorage[e.keyCode] = true;
    }
  }

  keyDiscard(e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      this.keyStorage[e.keyCode] = false;
    }
  }

  hitBottom(stageWidth, stageHeight) {
    if (this.y > stageHeight - this.radius) {
      this.y = stageHeight - this.radius;
      this.g = 0;
    }
  }
}