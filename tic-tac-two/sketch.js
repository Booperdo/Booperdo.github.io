// Tic Tac Toe
// Cooper Buniak
// Tues 2/21
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let board = [
  [" "," "," "],
  [" "," "," "],
  [" "," "," "]
];

let w;
let h;
let ai = "X";
let human = "O";
let currentPlayer = human;

function setup() {
  createCanvas(400, 400);
  w = width/3;
  h = height/3;
}

function aiMove() {
  let move;
  if (currentPlayer === ai) {
    for (let i=0; i<3; i++) {
      for (let j=0; j<3; j++) {
        if (board[i][j] === " ") {
          board[i][j] = ai;
         
        }
      }
    }
  }
  currentPlayer = human;
}

function mousePressed() {
  if (currentPlayer === human) {
    let i = floor(mouseX / w);
    let j = floor(mouseY / h);
    if (board[i][j] === " ") {
      board[i][j] = human;
      currentPlayer = ai;
      aiMove();
    }
  }
}

function draw() {
  background(255);
  strokeWeight(4);

  line(w, 0, w, height);
  line(w*2, 0, w*2, height);
  line(0, h, width, h);
  line(0, h*2, width, h*2);
  for(let j=0; j<3; j++) {
    for(let i=0; i<3; i++) {
      let x = w*i + w/2;
      let y = h*j + h/2;
      let spot = board[i][j];
      textSize(32);
      let r = w/4;

      if (spot === human) {
        noFill();
        ellipse(x, y, r*2);
      }
      else if (spot === ai) {
        line(x-r, y-r, x+r, y+r);
        line(x+r, y-r, x-r, y+r);
      }
    }
  }
}
