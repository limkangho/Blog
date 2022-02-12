export class Character {
  constructor(stageWidth, stageHeight, x, y, radius, speed) {
    this.radius = radius;
    this.x = stageWidth / 2;
    this.y = stageHeight - this.radius;
    // this.vx = speed;
    // this.vy = speed;

    this.vx = 10;
    this.vy = 10;
    this.g = 0.98;
    // this.vg = 10;

    this.direction = 0;
    this.keyStorage = [];

    document.addEventListener('keydown', this.keyStore.bind(this), true);
    document.addEventListener('keyup', this.keyDiscard.bind(this), true);
  }

  draw(ctx, stageWidth, stageHeight) {
    if (this.y < stageHeight - this.radius) {
      this.gravity();
    } else {
      this.hitBottom(stageWidth, stageHeight);
    }
    
    

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
      this.jump();
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

  hitBottom(stageWidth, stageHeight) {
    if (this.y > stageHeight - this.radius) {
      this.y = stageHeight - this.radius;
      this.vy = 0;
    }
  }

  jump() {
    this.y -= 30;
  }

  gravity() {
    this.vy += this.vy * this.g;
    this.y += this.vy;
    console.log(this.vy);
  }
}