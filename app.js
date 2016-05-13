function startGame() {
  for (var i = 1; i < 10; i++){
  clearCell(i);
  }
  document.turn = "X";
  document.winner = null;
  setMessage(document.turn + " gets to start!");
}

function setMessage(msg) {
  document.getElementById("message").innerText = msg;
}

function nextMove(unclaimed) {
  if (document.winner != null) {
  setMessage(document.winner + " already won the game.");
  } else if (unclaimed.innerText == ""){
  unclaimed.innerText = document.turn
  switchTurn();
  } else {
  setMessage("That space is already occupied!");
  }
}

function switchTurn() {
  if (checkForWinner(document.turn)){
    setMessage("Congratulations, " + document.turn + "! You win!");
    document.winner = document.turn;
  } else if (document.turn == "X") {
    document.turn = "O";
    setMessage("It's " + document.turn + "'s turn!");
  } else {
    document.turn = "X";
    setMessage("It's " + document.turn + "'s turn!");
  }
}

function cellStringer(a, b, c, move) {
  var result = false;
  if (getCell(a) == move && getCell(b) == move && getCell(c) == move) {
    result = true;
  }
  return result;
}

function checkForWinner(move){
  var result = false;
  if (cellStringer(1, 2, 3, move) ||
      cellStringer(4, 5, 6, move) ||
      cellStringer(7, 8, 9, move) ||
      cellStringer(1, 4, 7, move) ||
      cellStringer(2, 5, 8, move) ||
      cellStringer(3, 6, 9, move) ||
      cellStringer(1, 5, 9, move) ||
      cellStringer(3, 5, 7, move)) {
      result = true;
      }
  return result;
}

function getCell(number) {
  return document.getElementById("cell" + number).innerText;
}

function clearCell(number){
  document.getElementById("cell" + number).innerText = "";
}

function addResetListener(){
  var resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", resetBoard);
}

// function addHoverListener() {
//   var hoverListener = document.getElementsByTagName("td");
//   hoverListener.addEventListener("mouseover", hoverState() {
//     if (document.turn == "X") {
//       hoverListener.className = "xClass";
//     }
//     else {
//       hoverListener.className = "oClass";
//     }
//   });
// }
