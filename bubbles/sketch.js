// Buubles OOP

let theBubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  window.setInterval(spawnBubble, 500);
}

function draw() {
  background(220);
  for (let i=theBubbles.length-1; i >= 0; i--) {
    if (theBubbles[i].isPopped) {
      theBubbles.splice(i, 1);
    }
    else {
      theBubbles[i].move();
      theBubbles[i].display();
    }
   
  }
  
}

function spawnBubble() {
  let somebubble = new Bubble();
  theBubbles.push(somebubble);
}

class Bubble {
  constructor() {
    this.x = random(width);
    this.y = height + 100;
    this.dx = 0;
    this.dy = -3;
    this.radius = random(20, 40);
    this.theta = 0;
    this.isAlive = true;
    this.whenIDied = 0;
    this.waitTime = 1000;
    this.isPopped = false;
  }

  move() {
    if (this.y - this.radius > 0) {
      this.x += this.dx;
      this.y += this.dy;

      this.dx = map(noise(this.theta), 0, 1, -5, 5);
      this.theta += 0.02;
    }

    else if (this.isAlive) {
      this.isAlive = false;
      this.whenIDied = millis();
    }

    else {
      if (millis() > this.whenIDied + this.waitTime) {
        this.isPopped = true;
      }
    }
  }
    

  display() {
    if (!this.isPopped) {
      noStroke();
      fill("blue");
      ellipse(this.x, this.y,this.radius*2, this.radius*2);
    }
    
  }
}