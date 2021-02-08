// Tic Tac Toe
// Cooper Buniak
// Tues 2/21


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
let available = [];

function setup() {
  // center canvas
  let myCanvas = createCanvas(400, 400);
  myCanvas.position((windowWidth-400)/2, (windowHeight-400)/2);
  w = width/3;
  h = height/3;
}

function aiMove() {
  // Opossing player moves
  let move;
  for (let i=0; i<3; i++) {
    for (let j=0; j<3; j++) {
      if (board[i][j] === " ") {
        currentPlayer = human;

        return board[i][j] = ai;
         
      }
    }
  }
  
}

function mousePressed() {
  // Your move
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

// check winner formula
function equals3(a, b, c) {
  return a === b && b === c && a !== " ";
}

function checkWinner() {
  let winner = null;

  // horizontal win
  for (let i = 0; i < 3; i++) {
    if (equals3(board[i][0], board[i][1], board[i][2])) {
      winner = board[i][0];
    }
  }

  // Vertical win
  for (let i = 0; i < 3; i++) {
    if (equals3(board[0][i], board[1][i], board[2][i])) {
      winner = board[0][i];
    }
  }

  // Diagonal win
  if (equals3(board[0][0], board[1][1], board[2][2])) {
    winner = board[0][0];
  }
  if (equals3(board[2][0], board[1][1], board[0][2])) {
    winner = board[2][0];
  }

  let openSpots = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === " ") {
        openSpots++;
      }
    }
  }
  // tie
  if (winner === null && openSpots === 0) {
    return "tie";
  }
  else {
    return winner;
  }
}

function draw() {
  background(255);
  strokeWeight(4);

  // draw board lines
  line(w, 0, w, height);
  line(w*2, 0, w*2, height);
  line(0, h, width, h);
  line(0, h*2, width, h*2);

  // drawing pieces
  for(let j=0; j<3; j++) {
    for(let i=0; i<3; i++) {
      let x = w*i + w/2;
      let y = h*j + h/2;
      let spot = board[i][j];
      textSize(32);
      let r = w/4;

      // draw O's
      if (spot === human) {
        noFill();
        ellipse(x, y, r*2);
      }

      // draw X's
      else if (spot === ai) {
        line(x-r, y-r, x+r, y+r);
        line(x+r, y-r, x-r, y+r);
      }
    }
  }
  // check who won
  let result = checkWinner();
  if (result !== null) {
    noLoop();
    let resultP = createP(" ");
    resultP.style("font-size", "32pt");
    if (result === "tie") {
      resultP.html("Tie!");
    } 
    else {
      resultP.html(result + " wins!");
    }
  }
}
