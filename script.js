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

  if (playerChoice == computerSelection) {
    resultBox.textContent = `It is a tie between! ${playerChoice} and ${computerSelection}`;
  } else if (playerChoice == "rock" && computerSelection == "scissors") {
    playerScore++;
    resultBox.textContent = `You won using ${playerChoice} against ${computerSelection}`;
  } else if (playerChoice == "rock" && computerSelection == "paper") {
    computerScore++;
    resultBox.textContent = `You lost using ${playerChoice} against ${computerSelection}`;
  } else if (playerChoice == "paper" && computerSelection == "rock") {
    playerScore++;
    resultBox.textContent = `You won using ${playerChoice} against ${computerSelection}`;
  } else if (playerChoice == "paper" && computerSelection == "scissors") {
    computerScore++;
    resultBox.textContent = `You lost using ${playerChoice} against ${computerSelection}`;
  } else if (playerChoice == "scissors" && computerSelection == "paper") {
    playerScore++;
    resultBox.textContent = `You won using ${playerChoice} against ${computerSelection}`;
  } else if (playerChoice == "scissors" && computerSelection == "rock") {
    computerScore++;
    resultBox.textContent = `You lost using ${playerChoice} against ${computerSelection}`;
  }

  // Player || Computer score updates
  playerSpan.innerText = playerScore;
  computerSpan.innerText = computerScore;
  console.log(`Player score -> ${playerScore}`);
  console.log(`Ai score -> ${computerScore}`);
}

// Function for restarting the game
function restart() {}
