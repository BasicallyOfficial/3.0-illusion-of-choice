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
    fill(235, 138, 35);
    noStroke();
    rect(this.xpos, this.ypos, this.size);
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

      if (this.xpos > (width)-50) {
        this.xpos = this.xpos - 5;
      }
      if (this.xpos < 20) {
        this.xpos = this.xpos + 5;
      }
      if (this.ypos < 20) {
        this.ypos = this.ypos + 5;
      }
      if (this.ypos > (width)-50) {
        this.ypos = this.ypos - 5;
      }
    }

 }
