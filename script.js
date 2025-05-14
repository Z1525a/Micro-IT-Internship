let player1Choice = null;
let player2Choice = null;
let score1 = 0;
let score2 = 0;

function selectChoice(choice, player) {
  if (player === 1 && !player1Choice) {
    player1Choice = choice;
    document.getElementById('player1').style.opacity = "0.5";
  } else if (player === 2 && !player2Choice) {
    player2Choice = choice;
    document.getElementById('player2').style.opacity = "0.5";
  }

  if (player1Choice && player2Choice) {
    checkWinner();
  }
}

function checkWinner() {
  let result = "";

  if (player1Choice === player2Choice) {
    result = "It's a Tie!";
  } else if (
    (player1Choice === "rock" && player2Choice === "scissors") ||
    (player1Choice === "scissors" && player2Choice === "paper") ||
    (player1Choice === "paper" && player2Choice === "rock")
  ) {
    result = "🎉 Player 1 Wins!";
    score1++;
    document.getElementById("score1").innerText = score1;
  } else {
    result = "🎉 Player 2 Wins!";
    score2++;
    document.getElementById("score2").innerText = score2;
  }

  document.getElementById("resultText").innerText = result;
}

function resetGame() {
  player1Choice = null;
  player2Choice = null;
  document.getElementById('player1').style.opacity = "1";
  document.getElementById('player2').style.opacity = "1";
  document.getElementById("resultText").innerText = "Waiting for players...";
}

function resetAll() {
  score1 = 0;
  score2 = 0;
  document.getElementById("score1").innerText = score1;
  document.getElementById("score2").innerText = score2;
  resetGame();
}
