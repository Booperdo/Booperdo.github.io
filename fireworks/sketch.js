// FireWorks OOP

let fireWorks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); 
}

function draw() {
  background("black");
  for (let i=fireWorks.length-1; i>=0; i--) {
    if (fireWorks[i].isAlive()) {
      fireWorks[i].move();
      fireWorks[i].display();
    }
    else {
      fireWorks.splice(i, 1);
    }
  }
}

function mousePressed() {
  let numberOfParticles = 100;
  let  theta = 0;
  for (let i=0; i<numberOfParticles; i++) {
    let xSpeed = cos(theta)*2 + random(-0.5, 0.5);
    let ySpeed = sin(theta)*2 + random(-0.5, 0.5);
    let someParticle = new Particle(mouseX, mouseY, xSpeed, ySpeed, 255, 0, 0, 255);
    fireWorks.push(someParticle);
    theta += 360/numberOfParticles;
  }
 
}

class Particle {
  constructor(x, y, dx, dy, r, g, b ,a) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    this.diameter = 10;
    this.gravity = 0.03;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    this.dy += this.gravity;
    this.a -= 2;
  }

  display() {
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.x, this.y,this.diameter, this.diameter);
  }

  isAlive() {
    return this.a > 0;
  }
}