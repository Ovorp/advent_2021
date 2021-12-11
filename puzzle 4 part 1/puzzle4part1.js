var fs = require('fs');

try {
  var data = fs.readFileSync('input.txt', 'utf8');
} catch (e) {
  console.log('Error:', e.stack);
}
data = data.split(/\r?\n/);

// let data = [
//   '7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1',
//   ' ',
//   '22 13 17 11 0',
//   '8 2 23 4 24',
//   '21 9 14 16 7',
//   '6 10 3 18 5',
//   '1 12 20 15 19',
//   ' ',
//   '3 15  0  2 22',
//   '9 18 13 17  5',
//   '19  8  7 25 23',
//   '20 11 10 24  4',
//   '14 21 16 12  6',
//   ' ',
//   '14 21 17 24  4',
//   '10 16 15  9 19',
//   '18  8 23 26 20',
//   '22 11 13  6  5',
//   '2  0 12  3  7',
// ];

let numberCallOrder = data[0].split(',');
let newData = data.slice(2);
let boards = [];

for (let i = 0; i < newData.length; i += 6) {
  // maybe turning the strings into nums might help
  let block = [
    newData[i].split(' ').filter((val) => val !== ''),
    newData[i + 1].split(' ').filter((val) => val !== ''),
    newData[i + 2].split(' ').filter((val) => val !== ''),
    newData[i + 3].split(' ').filter((val) => val !== ''),
    newData[i + 4].split(' ').filter((val) => val !== ''),
  ];
  boards.push(block);
}

function checkRow(board) {
  let didWin = false;
  board.forEach((row) => {
    let sum = row.map((val) => parseInt(val)).reduce((acc, val) => acc + val);
    if (sum === -5) {
      didWin = true;
    }
  });
  return didWin;
}

function checkColumn(board) {
  let didWin = false;
  for (let i = 0; i < board.length; i++) {
    let sum = 0;
    board.forEach((row) => {
      sum += +row[i];
    });
    if (sum === -5) {
      didWin = true;
    }
  }
  return didWin;
}

function checkBoard(boards) {
  let theWinningBoard;

  boards.forEach((board, i) => {
    // console.log(checkRow(board), checkColumn(board));
    if (checkRow(board) || checkColumn(board)) {
      theWinningBoard = board;
    }
  });
  // console.log(theWinningBoard);
  return theWinningBoard;
}

function answer(board, lastNum) {
  let num = board
    .flat()
    .map((val) => +val)
    .filter((val) => val !== -1)
    .reduce((acc, val) => acc + val);
  console.log(num, lastNum, num * lastNum);
}

function winningBoard(callNumbers, bingBoards) {
  let bingoBoards = [...bingBoards];

  callNumbers.every((call) => {
    bingBoards.forEach((board, i) => {
      board.forEach((row, j) => {
        row.forEach((val, k) => {
          if (val === call) {
            bingoBoards[i][j][k] = '-1';
          }
        });
      });
    });
    let isDone = checkBoard(bingoBoards);
    if (isDone) {
      answer(isDone, call);
      return false;
    }
    return true;
    // if board has a the call number replace it with a zero.  .splice(position, number, replacement)

    // check if the sum of the row is zero
    // check if a column is zero
  });
}

// function winningBoard(arrNum, boards) {
//   let winningBoard = []
//   arrNum.forEach(val => {
//     numberCallBoard(val, boards)
//   })

winningBoard(numberCallOrder, boards);
// console.log(numberCallOrder, boards);
// console.log(boards);
