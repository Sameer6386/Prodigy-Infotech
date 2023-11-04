const gameCells = document.querySelectorAll('.cell');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const restartbtn = document.querySelector('#restartbtn');
const alertbox = document.querySelector('.alertbox');
let currentplayer = 'X';
let nextplayer = 'O';
let playerTurn = currentplayer;
const startGame = () => {
  gameCells.forEach((cell) => {
    cell.addEventListener('click', handleClick);
  });
};
const handleClick = (event) => {
  const cell = event.target;
  if (cell.textContent === '') {
    cell.textContent = playerTurn;
    if (checkWin()) {
      showAlert(`${playerTurn} is the winner!`);
      disableCells();
    } else if (checkTie()) {
      showAlert('It is a draw!');
      disableCells();
    } else {
      changePlayerTurn();
    }
  }
};
const changePlayerTurn = () => {
  playerTurn = playerTurn === currentplayer ? nextplayer : currentplayer;
};

const checkWin = () => {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningConditions.length; i++) {
    const [pos1, pos2, pos3] = winningConditions[i];
    if (
      gameCells[pos1].textContent !== '' &&
      gameCells[pos1].textContent === gameCells[pos2].textContent &&
      gameCells[pos2].textContent === gameCells[pos3].textContent
    ) {
      return true;
    }
  }
  return false;
};

const checkTie = () => {
  let emptyCellCount = 0;
  gameCells.forEach((cell) => {
    if (cell.textContent === '') {
      emptyCellCount++;
    }
  });
  return emptyCellCount === 0 && !checkWin();
};

const showAlert = (message) => {
  alertbox.textContent = message;
  alertbox.style.display = 'block';
  setTimeout(() => {
    alertbox.style.display = 'none';
  }, 3000);
};

const disableCells = () => {
  gameCells.forEach((cell) => {
    cell.removeEventListener('click', handleClick);
    cell.classList.add('disabled');
  });
};
const restartGame = () => {
  gameCells.forEach((cell) => {
    cell.textContent = '';
  });
  enableCells();
  playerTurn = currentplayer;
};
const enableCells = () => {
  gameCells.forEach((cell) => {
    cell.addEventListener('click', handleClick);
    cell.classList.remove('disabled');
  });
};
startGame();