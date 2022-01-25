console.log("Greetings, General Kenobi");
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

let rockImage = document.querySelector("#rock-img");
let paperImage = document.querySelector("#paper-img");
let scissorsImage = document.querySelector("#scissors-img");
let playerSpan = document.querySelector("#player-counter");
let computerSpan = document.querySelector("#computer-counter");
let tieSpan = document.querySelector("#tie-counter");
let resultBox = document.querySelector("#result-box");

// Eventlisteners for Player Selection
rockImage.addEventListener("click", () => {
  playRound("rock");
});
paperImage.addEventListener("click", () => {
  playRound("paper");
});
scissorsImage.addEventListener("click", () => {
  playRound("scissors");
});

// Function for random Computer Choice
function computerSelection() {
  let random = Math.floor(Math.random() * 3);
  if (random == 0) {
    return "rock";
  } else if (random == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Function for playing a single round of RPS
function playRound(player) {
  let computerChoice = computerSelection();
  let playerChoice = player;

  if (bestOfFive()) {
    if (playerChoice == computerChoice) {
      tieGame(playerChoice, computerChoice);
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
      wonGame(playerChoice, computerChoice);
    } else if (playerChoice == "paper" && computerChoice == "rock") {
      wonGame(playerChoice, computerChoice);
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
      wonGame(playerChoice, computerChoice);
    } else if (playerChoice == "rock" && computerChoice == "paper") {
      lostGame(playerChoice, computerChoice);
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
      lostGame(playerChoice, computerChoice);
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
      lostGame(playerChoice, computerChoice);
    }
  }
}

// Game outcomes W/L/T
function wonGame(player, computer) {
  playerScore++;
  resultBox.textContent = `You won using ${player} against ${computer}`;
  playerSpan.innerText = playerScore;
  bestOfFive();
}
function lostGame(player, computer) {
  computerScore++;
  resultBox.textContent = `You lost using ${player} against ${computer}`;
  computerSpan.innerText = computerScore;
  bestOfFive();
}
function tieGame(player, computer) {
  tieScore++;
  resultBox.textContent = `It is a tie between! ${player} and ${computer} try again!`;
  tieSpan.innerText = tieScore;
  bestOfFive();
}

function resetScore() {
  playerSpan.innerText = playerScore;
  computerSpan.innerText = computerScore;
  tieSpan.innerText = tieScore;
  resultBox.innerText = "Pick your hand!";
}

function bestOfFive() {
  if (playerScore + computerScore == 5) {
    if (playerScore > computerScore) {
      resultBox.textContent = `Congratulations! You won with ${playerScore} to ${computerScore}`;
    } else if (playerScore < computerScore) {
      resultBox.textContent = `Unlucky! You Lost with ${playerScore} to ${computerScore}`;
    }
    displayRestart();
    return false;
  } else if (playerScore + computerScore < 5) {
    return true;
  }
}

// Function for restarting the game
function displayRestart() {
  let restartBtn = document.querySelector("#restart-button");
  restartBtn.style.visibility = "visible";
  restartBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    tieScore = 0;
    resetScore();
    restartBtn.style.visibility = "hidden";
  });
}
