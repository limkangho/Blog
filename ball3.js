export class Ball3 {
  constructor(stageWidth, stageHeight, x, y, radius) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    // this.x = stageWidth / 2;
    // this.y = stageHeight / 2;
    this.x = x;
    this.y = y;
    this.radius = radius;

    

    //key inputs
    this.keyStorage = [];

    //gravity
    this.gx = 0.3;
    this.gy = 0.98;
    
    //velecity
    // this.maxVX = 2;
    // this.maxVY = 16;
    this.vx = 3;
    this.vy = 3;
    
    //movement speed when the key is pressed
    this.left = 0.3;
    this.right = 0.3;
    this.jump = 30;

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
      this.jump();
      if (this.y -this.radius > stageHeight) {
        this.vy = 0;
      }
    } 
    
    
    if (this.y + this.radius > stageHeight) {
      this.g *= -0.9;
    }

    // this.x += this.directionX;
    // this.directionX *= 0.995;
    
    if (this.x + this.radius > stageWidth || this.x - this.radius < 0) {
      this.directionX *= -1;
    }

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
  }

  jump() {
    this.y -= this.vy;
    this.vy *= this.gy;
  }

  // hitBottom() {
  //   this.vy = 0;
  // }
}