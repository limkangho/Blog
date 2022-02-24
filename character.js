export class Character {
  constructor(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    
    this.img = new Image();
    this.img.src = './images/Helltaker_Lucifer.png';

    this.spriteWidth = 100;
    this.spriteHeight = 100;

    this.i = 1;
  }

  draw(ctx) {
    if (this.i > 11) {
      this.i = 0;
    }
    ctx.drawImage(this.img, this.spriteWidth * this.i, 0, this.spriteWidth, this.spriteHeight, this.stageWidth / 2 - this.spriteWidth / 2, this.stageHeight / 2 - this.spriteHeight / 2, this.spriteWidth, this.spriteHeight);
    this.i = this.i + 1;
  }
}

// 1200 * 200