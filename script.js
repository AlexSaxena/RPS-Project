console.log("Greetings, General Kenobi");
let playerScore = 0;
let computerScore = 0;

let rockImage = document.querySelector("#rock-img");
let paperImage = document.querySelector("#paper-img");
let scissorsImage = document.querySelector("#scissors-img");
let resultBox = document.querySelector("#result-box");
let playerSpan = document.querySelector("#player-counter");
let computerSpan = document.querySelector("#computer-counter");

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

// Function for Computer Choice
function computerChoice() {
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
  let computerSelection = computerChoice();
  let playerChoice = player;

  if (bestOfFive()) {
    if (playerChoice == computerSelection) {
      resultBox.textContent = `It is a tie between! ${playerChoice} and ${computerSelection}`;
    } else if (playerChoice == "rock" && computerSelection == "scissors") {
      playerScore++;
      updateScore();
      resultBox.textContent = `You won using ${playerChoice} against ${computerSelection}`;
    } else if (playerChoice == "rock" && computerSelection == "paper") {
      computerScore++;
      updateScore();
      resultBox.textContent = `You lost using ${playerChoice} against ${computerSelection}`;
    } else if (playerChoice == "paper" && computerSelection == "rock") {
      playerScore++;
      updateScore();
      resultBox.textContent = `You won using ${playerChoice} against ${computerSelection}`;
    } else if (playerChoice == "paper" && computerSelection == "scissors") {
      computerScore++;
      updateScore();
      resultBox.textContent = `You lost using ${playerChoice} against ${computerSelection}`;
    } else if (playerChoice == "scissors" && computerSelection == "paper") {
      playerScore++;
      updateScore();
      resultBox.textContent = `You won using ${playerChoice} against ${computerSelection}`;
    } else if (playerChoice == "scissors" && computerSelection == "rock") {
      computerScore++;
      updateScore();
      resultBox.textContent = `You lost using ${playerChoice} against ${computerSelection}`;
    }
  }
}

function updateScore() {
  playerSpan.innerText = playerScore;
  computerSpan.innerText = computerScore;
  resultBox.innerText = "Pick your hand!";
  console.log(`Player score -> ${playerScore}`);
  console.log(`Ai score -> ${computerScore}`);
}

function bestOfFive() {
  if (playerScore + computerScore == 5) {
    if (playerScore > computerScore) {
      resultBox.textContent = `Congratulation! You won with ${playerScore} to ${computerScore}`;
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
    updateScore();
    restartBtn.style.visibility = "hidden";
  });
}
