window.document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  // const cuteCat = new Image();
  // cuteCat.src = './cat-spritesheet.jpg';
  // let raf;
  // const canvasHeight = 1000;
  // const canvasWidth = 1000;
 
  // const loadImage = (e) => {
  //   moveRight();
  // };

  // cuteCat.addEventListener('load', loadImage, false);

  // let animationFrameId;
  // const sWidth = 480;
  // const sHeight = 395;
  // let sx = 25;
  // let sy = 150;
  // const dWidth = 490;
  // let dHeight = 500;
  // const dx = canvasWidth / 2 - sWidth / 2;
  // const dy = canvasHeight / 2 - sHeight / 2;
  // const scaling = 0.35;

  // let totalNumberOfFrames = 5;
  // const numberOfFramesPerLine = 3;
  // let currentFrameNumber = 0;

  // const moveRight = () => {
  //   if (currentFrameNumber > totalNumberOfFrames) {
  //     currentFrameNumber = 0;
  //     sx = 25;
  //     sy = 150;
  //   }

  //   if (currentFrameNumber === numberOfFramesPerLine) {
  //     sy = 590;
  //     sx = 15;
  //   }

  //   ctx.clearRect(0, 0, 1000, 1000);
  //   ctx.fillStyle = "#d8e9f3";
  //   ctx.fillRect(0,0,canvas.width,canvas.height);
  //   ctx.beginPath();
  //   ctx.drawImage(cuteCat, sx, sy, sWidth, sHeight, dx, dy, dWidth * scaling, dHeight * scaling);


  //   currentFrameNumber++;
  //   sx += sWidth;
  // }

  // window.document.addEventListener('keydown', (e) => {
  //   switch (e.key) {
  //     case 'ArrowRight': animationFrameId = requestAnimationFrame(moveRight);
  //       break;
  //   }
  // });

  /* ANOTHER ANIMATION */
  let raf;

  const ball = {
    x: 100,
    y: 300,
    vx: 15,
    vy: 1,
    radius: 25,
    color: "blue"
  };

  const drawBall = (x, y, radius, startAngle, endAngle, counterClockwise, color) => {
    console.log('calling drawBall()');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise, color);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  };

  const draw = () => {
    ctx.fillStyle = "rgb(255 255 255 / 30%)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawBall(ball.x, ball.y, ball.radius, 0, Math.PI * 2, true, ball.color);
    ball.x += ball.vx;
    ball.y -= ball.vy;
    ball.vy *= 0.99 ;
    ball.vy += 0.25;

    console.log('ball.y: ', ball.y);

    if (ball.y - ball.vy < 0 || ball.y - ball.vy > canvas.height) {
      ball.vy = -ball.vy;
    }

    if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
      ball.vx = -ball.vx;
    }

    raf = window.requestAnimationFrame(draw);
  }

  const moveBall = ({ key }) => {
    console.log('key: ', key);
    switch (key) {
      case ' ':
        draw();
        window.removeEventListener('keyup', moveBall);
        break;
      case 'Escape':
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      default:
        break;
    }
  };

  window.addEventListener('keyup', moveBall);

  // canvas.addEventListener("mouseover", (e) => {
  //   raf = window.requestAnimationFrame(draw);
  // });

  // canvas.addEventListener("mouseout", (e) => {
  //   window.cancelAnimationFrame(raf);
  // });

  drawBall(ball.x, ball.y, ball.radius, 0, Math.PI * 2, true, ball.color);
});