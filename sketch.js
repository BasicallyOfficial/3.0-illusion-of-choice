let playerD;
let directionD;

function setup() {
  var canvas = createCanvas(600, 600);
  canvas.parent('sketch-holder');
  playerD = new player(300, 300, 5, 30);
}

function draw() {
  background(54, 122, 62);
  //Render background and text

  //Zone D movement functions
  playerD.display();
  playerD.move();
  playerD.bound();
}


//handle keyboard inputs
function keyPressed() {
  switch (key) {
    //zone d controls
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

//used only for zone d movement
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
}
