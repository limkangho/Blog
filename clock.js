export class Clock {
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.clockX = this.width / 2;
    this.clockY = this.height / 2;
  }

  draw(ctx) {
    const date = new Date();
    const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    ctx.fillStyle = '#ea4335';
    ctx.globalAlpha = '0.5'
    ctx.beginPath();
    // ctx.rect(this.x, this.y, this.width, this.height);
    ctx.rect(0, 0, this.width, this.height);
    ctx.fill();

    ctx.font = 'normal bold 48px menlo, sans-serif';
    ctx.fillStyle = '#1b1b1b';
    ctx.globalAlpha = '1.0'
    ctx.textAlign = "center";
    ctx.fillText(hours + ":" + minutes + ":" + seconds, this.clockX, this.clockY, this.width);
  }
}