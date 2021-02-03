//OOP Ball Bounce

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let i=0; i<ballArray.length; i++) {
    for (let j=0; j<ballArray.length; j++) {
      if (i !== j) {
        ballArray[i].checkIfCollidingWith(ballArray[j]);
      }
    }
    ballArray[i].move();
    ballArray[i].display();
  }
}

function mousePressed() {
  let theBall = new Ball(mouseX, mouseY, random(10, 40));
  ballArray.push(theBall);
}

class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.someColor = color(random(255), random(255), random(255), random(255));
  }

  display() {
    fill(this.someColor);
    ellipse(this.x, this.y, this.radius*2, this.radius*2);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;

    //  bounce on walls
    if (this.x - this.radius < 0 || this.x + this.radius > width) {
      this.dx*= -1;
    }
    if (this.y - this.radius < 0 || this.y + this.radius > height) {
      this.dy*= -1;
    }

  }

  checkIfCollidingWith(otherBall) {
    let sumOfRadii = this.radius +otherBall.radius;
    let distanceBetweenCenters = dist(this.x, this.y, otherBall.x, otherBall.y);
    if(sumOfRadii > distanceBetweenCenters) {
      // this.someColor = "red";
      // otherBall.someColor = "red";
      let tempdx = this.dx;
      let tempdy = this.dy;
      this.dx = otherBall.dx;
      this.dy = otherBall.dy;
      otherBall.dx = tempdx;
      otherBall.dy = tempdy;
    }
  }
}