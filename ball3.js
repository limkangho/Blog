export class Ball3 {
  constructor(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.radius = 20;
    this.x = stageWidth / 2;
    this.y = stageHeight - this.radius;
    
    //key inputs
    this.keyStorage = [];
    this.keyStorage[32] = false;

    //gravity
    this.gravity = 0.98;

    //jumping
    this.jumping = false;

    //speed
    this.vx = 0;
    this.vy = 0;

    document.addEventListener('keydown', this.keyStore.bind(this), true);
    document.addEventListener('keyup', this.keyDiscard.bind(this), true);
  }

  draw(ctx) {
    this.update();

    ctx.fillStyle = '#4284f3';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    ctx.fill();
  }

  update() {
    if (this.keyStorage[37] == true) {
      this.vx = 6;
      this.x -= this.vx;
    }
    if (this.keyStorage[38] == true) {
      this.y -= this.vy;
    }
    if (this.keyStorage[39] == true) {
      this.vx = 6;
      this.x += this.vx;
    }
    if (this.keyStorage[40] == true) {
      this.y += this.vy;
    }

    if (this.keyStorage[32] == true && this.jumping == false) {
      this.vy = this.vy - 30;
      this.jumping = true;
    }

    this.vy = this.vy + this.gravity;
    this.y = this.y + this.vy;

    if (this.y > this.stageHeight - this.radius) {
      this.jumping = false;
      this.y = this.stageHeight - this.radius;
      this.vy = 0;
    }

    if (this.x < -this.radius) {
      this.x = this.stageWidth;
    } else if (this.x > this.stageWidth) {
      this.x = -this.radius;
    }
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
