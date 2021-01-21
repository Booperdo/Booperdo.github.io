//Perlin Noise

let rectHeights;
let bikeLocation = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectHeights = generateHeights();
}

function draw() {
  background(220);
  
  let howMany = width;
  for (let i=bikeLocation; i<bikeLocation+howMany; i++) {
    let rectWidth = width / howMany;
    rect(rectWidth*(i-bikeLocation), height-rectHeights[i], rectWidth, rectHeights[i]);
  }

  if (keyIsPressed) {
    if (key === "d") {
      bikeLocation+=3;
    }
    if (key === "a" && bikeLocation > 3) {
      bikeLocation-=3;
    }
  }
}

function generateHeights() {
  let theHeights =[];
  for (let i=bikeLocation; i<5000; i++) {
    let rectHeight = noise(i*0.001) * height;
    theHeights.push(rectHeight);
  }
  return theHeights;
}