let y = 281;
let sy = 0;
let ay = 0.2;

let x = 600;
let w = 10;
let h = 60;
let score = 0;
let speed = 5;

let gameOver = false;
let status;
let begin = 0

let scores = [0];

let bg;

function setup() {
  let canvas = createCanvas(600, 500);
  canvas.parent("p5-canvas-container");
}


function draw() {
  background(220);
  noStroke();
  if (begin == 0 && gameOver == false) {
    fill('black')
    rect(0, 0, 600, 500)
    circle(300, 300, 20)
    textSize(40)
    fill('white')
    text('JUMP-IT BALL!', 155, 230)
    textSize(15)
    text('Up arrow for jump', 234, 260)
    text('Down arrow for squeeze', 214, 276)
    text('Click the button to start!', 220, 306)
    if (mouseX > 296 - 25 && mouseX < 296 + 25 && mouseY > 370 - 25 && mouseY < 370 + 25) {
      fill('#a29e9e')
      circle(296, 370, 50)
      fill('black')
      rect(288, 358, 6, 25)
      rect(298, 358, 6, 25)
      if (mouseIsPressed == true) {
        begin = 1
        gameOver = true
      }

    } else {
      fill('white')
      circle(296, 370, 50)
      fill('black')
      triangle(287, 355, 287, 385, 311, 371)
    }
  }
  if (gameOver == true) {
    bg = 'white'
  } else {
    bg = 'black'
  }
  fill(bg)
  rect(0, 318, 600, 20);
  if (keyIsPressed == true && keyCode == DOWN_ARROW) {
    ellipse(74, y + 10, 80, 50);
    ay = 0.4;
    status = 2;
  } else {
    circle(74, y, 70);
    ay = 0.2;
    status = 1;
  }
  if (gameOver) {
    y -= sy;
    if (y < 281) {
      sy -= ay;
    } else if (y > 281 || y == 281) {
      sy = 0;
    }
    if (keyIsPressed == true && keyCode == UP_ARROW) {
      if (y == 281 || y > 281) {
        sy = 7;
      }
    }

    rect(x, 318 - h, w, h);
    x -= speed;
    if (x < 0 - w) {
      x = 600;
      w = random(10, 85);
      h = random(40, 100);
      score += 100;
    }

    if (frameCount % 6 == 0) {
      score += 1;
    }
    if (frameCount % 10 == 0) {
      speed += 0.01;
    }
  }
  textSize(12);
  fill('black')
  text("SCORE:", 10, 20);
  text(score, 60, 20);
  if (max(scores) != 0) {
    text('BEST SCORE:', 10, 40)
    if (score < max(scores)) {
      text(max(scores), 93, 40)
    } else {
      text(score, 93, 40)
    }
  }

  if (status == 1) {
    if (74 + 35 > x && 74 - 35 <= x + w) {
      if (y + 35 > 281 - h + 30) {
        gameOver = false;
        fill("black");
      }
    }
  } else if (status == 2) {
    if (74 + 40 > x && 74 - 40 <= x + w) {
      if (y + 10 > 281 - h + 30) {
        gameOver = false;
        fill("black");
      }
    }
  }

  if (gameOver == false && begin == 1) {
    scores.push(score)
    y += sy;
    sy += ay / 1.5;
    textSize(80);
    text("GAME OVER", width / 2 - 240, height / 2);
    textSize(20);
    text("Press space to restart", width / 2 - 90, height / 2 + 50);
    if (score == max(scores) && max(score != 0)) {
      fill('#942222')
      text('NEW BEST!', 250, 360)
    }
  }
}

/*
function mousePressed() {
  console.log(mouseX, mouseY);
  console.log(gameOver)
}
*/

function keyPressed() {
  if (key == ' ' && gameOver == false) {
    fill('white')
    y = 281
    sy = 0
    x = 600
    w = 10
    h = 60
    score = 0
    speed = 5
    gameOver = true
  }
}
