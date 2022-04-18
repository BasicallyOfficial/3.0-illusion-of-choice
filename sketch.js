let gameState = 'title';
let playerD;
let directionD;

function setup() {
  playerD = new player(300, 300, 5, 30);
  var canvas = createCanvas(600, 600);
  canvas.parent('sketch-holder');
  frameRate(60);
}

function draw() {
  switch (gameState) {
    case 'title':
      Titlescreen();
      break;
    case 'stage1':
      level1();
      break;
    case 'stage2':
      level2();
      break;
    case 'stage3':
      level3();
      break;
    case 'Tstage1':
      text1();
      break;
    case 'stage4':
      level4();
      break;
    case 'Tstage2':
      text2();
      break;
    case 'stage5':
      level5();
      break;
    case 'endstage':
      Gameover();
      break;
  }
}


//handle keyboard inputs
function keyPressed() {
  switch (key) {
    case 'a':
      directionD = 'left';
      break;
    case 'd':
      directionD = 'right';
      break;
    case 'w':
      directionD = 'up';
      break;
    case 's':
      directionD = 'down';
      break;
  }
}

function Titlescreen() {
  background(255, 255, 255);
  strokeWeight(10);
  noFill();
  rect(0, 0, 600, 600);
  noStroke();
  fill(38, 64, 45);
  textSize(55);
  textAlign(CENTER);
  text('The Illusion Of Choice', width * 0.5, height * 0.33);
  textSize(30);
  text('What Does It Mean To Have Free Will?', width * 0.5, height * 0.5)
  text('You Will Press Enter', width * 0.5, height * 0.7)
}

function level1() {
  background(255, 255, 255);
  strokeWeight(10);
  noFill();
  rect(0, 0, 600, 600);
  playerD.display();
  playerD.move();
  playerD.bound();
  fill(156, 29, 0);
  rect(100, 585, 100, 20);
  fill(0, 98, 237);
  rect(400, 585, 100, 20);
  playerD.hitCheck1();
}


function level2() {
  background(145, 194, 175);
  strokeWeight(10);
  noFill();
  rect(0, 0, 600, 600);
  playerD.display();
  playerD.move();
  playerD.bound();
  fill(156, 29, 0);
  rect(100, 585, 100, 20);
  fill(0, 98, 237);
  rect(400, 585, 100, 20);
  playerD.hitCheck2();
}

function level3() {
  background(162, 130, 179);
  strokeWeight(10);
  noFill();
  rect(0, 0, 600, 600);
  playerD.display();
  playerD.move();
  playerD.bound();
  fill(156, 29, 0);
  rect(100, 585, 100, 20);
  fill(0, 98, 237);
  rect(400, 585, 100, 20);
  playerD.hitCheck3();
}

function text1() {
  background(255, 255, 255);
  strokeWeight(10);
  noFill();
  rect(0, 0, 600, 600);
  noStroke();
  fill(38, 64, 45);
  textSize(55);
  textAlign(CENTER);
  text('Lorem Ipsum', width * 0.5, height * 0.33);
  textSize(30);
  text('Placeholder', width * 0.5, height * 0.5)
  text('You Will Press Enter', width * 0.5, height * 0.7)
}

function level4() {
  background(232, 240, 163);
  strokeWeight(10);
  noFill();
  rect(0, 0, 600, 600);
  playerD.display();
  playerD.move();
  playerD.bound();
  fill(156, 29, 0);
  rect(100, 585, 100, 20);
  fill(0, 98, 237);
  rect(400, 585, 100, 20);
  playerD.hitCheck4();
}

function text2() {
  background(255, 255, 255);
  strokeWeight(10);
  noFill();
  rect(0, 0, 600, 600);
  noStroke();
  fill(38, 64, 45);
  textSize(55);
  textAlign(CENTER);
  text('Lorem Ipsum X 2', width * 0.5, height * 0.33);
  textSize(30);
  text('Placeholder Again', width * 0.5, height * 0.5)
  text('You Will Press Enter', width * 0.5, height * 0.7)
}

function level5() {
  background(0);
  strokeWeight(10);
  noFill();
  rect(0, 0, 600, 600);
  playerD.display();
  playerD.move();
  playerD.bound();
  fill(156, 29, 0);
  rect(100, 585, 100, 20);
  fill(0, 98, 237);
  rect(400, 585, 100, 20);
  playerD.hitCheck5();
}

function Gameover() {
  background(0);
  strokeWeight(10);
  noFill();
  rect(0, 0, 600, 600);
  noStroke();
  fill(255, 255, 255);
  textSize(55);
  textAlign(CENTER);
  text('Ending Text', width * 0.5, height * 0.33);
  textSize(30);
  text('Philosophical Jargon', width * 0.5, height * 0.5)
  text('Sequel Bait', width * 0.5, height * 0.7)
  textSize(20);
  text('Reset With Enter', width * 0.5, height * 0.9)
}

function keyReleased() {
  if (key == 'a') {
    if (directionD == 'left') {
      directionD = 'still';
    }
  } else if (key == 'd') {
    if (directionD == 'right') {
      directionD = 'still';
    }
  } else if (key == 'w') {
    if (directionD == 'up') {
      directionD = 'still';
    }
  } else if (key == 's') {
    if (directionD == 'down') {
      directionD = 'still';
    }
  }

  if (gameState === 'title') {
    if (keyCode === ENTER) {
      gameState = 'stage1';
    }
  } else if (gameState === 'endstage') {
    if (keyCode === ENTER) {
      gameState = 'title';
    }
  } else if (gameState === 'Tstage1') {
    if (keyCode === ENTER) {
      gameState = 'stage4';
    }
  } else if (gameState === 'Tstage2') {
    if (keyCode === ENTER) {
      gameState = 'stage5';
    }
  }
}
