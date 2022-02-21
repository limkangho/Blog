export class Character {
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
    this.vy = 0;

    document.addEventListener('keydown', this.keyStore.bind(this), true);
    document.addEventListener('keyup', this.keyDiscard.bind(this), true);
  }

  draw(ctx) {
    this.update(ctx);

    ctx.fillStyle = '#4284f3';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    ctx.fill();
  }

  update(ctx) {
    if (this.keyStorage[32] == true && this.jumping == false) {
      console.log("hi?");
      this.vy = this.vy - 20;
      this.jumping = true;
    }

    this.vy = this.vy + this.gravity;
    this.y = this.y + this.vy;

    if (this.y > this.stageHeight - this.radius) {
      this.jumping = false;
      this.y = this.stageHeight - this.radius;
      this.vy = 0;
    }
  }

  keyStore(e) {
    if (e.keyCode == 32) {
      this.keyStorage[e.keyCode] = true;
      console.log(e.keyCode);
      console.log(this.jumping);
    }
  }

  keyDiscard(e) {
    if (e.keyCode == 32) {
      this.keyStorage[e.keyCode] = false;
      console.log(e.keyCode);
      console.log(this.jumping);
    }
  }
}
