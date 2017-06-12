document.addEventListener('DOMContentLoaded', startGame)


// Define your `board` object here!
var board = {
  cells: [
      {row:0, col:0, isMine:true,  hidden:true, surroundingMines: 1},
      {row:0, col:1, isMine:false, hidden:true, surroundingMines: 1},
      {row:0, col:2, isMine:false, hidden:true, surroundingMines: 0},
      {row:1, col:0, isMine:false, hidden:true, surroundingMines: 1},
      {row:1, col:1, isMine:false, hidden:true, surroundingMines: 1},
      {row:1, col:2, isMine:false, hidden:true, surroundingMines: 1},
      {row:2, col:0, isMine:false, hidden:true, surroundingMines: 0},
      {row:2, col:1, isMine:false, hidden:true, surroundingMines: 1},
      {row:2, col:2, isMine:true,  hidden:true, surroundingMines: 1},

  ]
}


function startGame () {

  for (var i = 0; i < board.cells.length; i++) {
   board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
 }

 document.getElementsByClassName('board')[0].addEventListener('click', checkForWin);
 document.getElementsByClassName('board')[0].addEventListener('contextmenu', checkForWin);
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin (evt) {
    var mineCountTotal = 0;
    var totalMinesCorrect = 0;

    for (var i = 0; i < board.cells.length; i++) {
      if (board.cells[i].isMine && board.cells[i].isMarked) {
        totalMinesCorrect += 1;
      } else if (board.cells[i].hidden === true) {
        return;
      }

      if (board.cells[i].isMine === true) {
        mineCountTotal += 1;
      }
    }

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
      lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0;

    for (var i = 0; i < surrounding.length; i++){
      if (surrounding[i].isMine) {
        count += 1;
      }
    }
    return count;
}
