class player {

  /*
  The constructor function inside of a class creates the instance of the object
  itself. You can think of it as a setup() function for the Ufo class only. It is
  where you will convert the passed in parameters into local varibles.
  */

  //Function to setup player class.
  //Type is used to indicate movement type and bounds.
  constructor(xpos, ypos, speed, size) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.speed = speed;
    this.size = size;
  }

  //draw player
  display() {
    push()
    stroke(235, 138, 35);
    strokeWeight(5);
    scribble.scribbleRect(this.xpos, this.ypos, this.size, this.size);
      scribble.maxOffset = 2;
      scribble.roughness = 1;
      pop()
  }

  //move player, dependant on player zone
  move() {


    switch (directionD) {
      case 'right':
        this.xpos = this.xpos + this.speed;
        break;
      case 'left':
        this.xpos = this.xpos - this.speed;
        break;
      case 'still':
        break;
      case 'up':
        this.ypos = this.ypos - this.speed;
        break;
      case 'down':
        this.ypos = this.ypos + this.speed;
        break;
    }
  }

  bound() {

    if (this.xpos > (width) - 20) {
      this.xpos = this.xpos - 5;
    }
    if (this.xpos < 20) {
      this.xpos = this.xpos + 5;
    }
    if (this.ypos < 20) {
      this.ypos = this.ypos + 5;
    }
    if (this.ypos > (height) - 20) {
      this.ypos = this.ypos - 5;
    }
  }

  hitCheck1() {
    if (this.xpos > 100 && this.xpos < 200 || this.xpos > 400 && this.xpos < 500) {
      if (this.ypos > 575) {
        gameState = 'stage2';
        this.xpos = width / 2;
        this.ypos = height / 2;
      }
    }
  }

  hitCheck2() {
    if (this.xpos > 100 && this.xpos < 200 || this.xpos > 400 && this.xpos < 500) {
      if (this.ypos > 575) {
        gameState = 'stage3';
        this.xpos = width / 2;
        this.ypos = height / 2;
      }
    }
  }

  hitCheck3() {
    if (this.xpos > 100 && this.xpos < 200 || this.xpos > 400 && this.xpos < 500) {
      if (this.ypos > 575) {
        gameState = 'Tstage1';
        this.xpos = width / 2;
        this.ypos = height / 2;
      }
    }
  }

  hitCheck4() {
    if (this.xpos > 100 && this.xpos < 200 || this.xpos > 400 && this.xpos < 500) {
      if (this.ypos > 575) {
        gameState = 'Tstage2';
        this.xpos = width / 2;
        this.ypos = height / 2;
      }
    }
  }

  hitCheck5() {
    if (this.xpos > 100 && this.xpos < 200 || this.xpos > 400 && this.xpos < 500) {
      if (this.ypos > 575) {
        gameState = 'endstage';
        this.xpos = width / 2;
        this.ypos = height / 2;
      }
    }
  }
}
