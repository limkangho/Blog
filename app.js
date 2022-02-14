import {
  Ball
} from './ball.js';

import {
  Block
} from './block.js';

import {
  Ball2
} from './ball2.js';

import {
  Ball3
} from './ball3.js';

class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    // this.ball = new Ball(this.stageWidth, this.stageHeight, 12, 18);
    // this.block = new Block(350, 30, 100, 250);
    // this.ball2 = new Ball2(this.stageWidth, this.stageHeight, 20, 20, 12, 10);
    this.ball3 = new Ball3(this.stageWidth, this.stageHeight, 20, 20, 12);

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    // this.block.draw(this.ctx);
    // this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
    // this.ball2.draw(this.ctx, this.stageWidth, this.stageHeight);
    this.ball3.draw(this.ctx, this.stageWidth, this.stageHeight);
  }
}

window.onload = () => {
  new App();
}