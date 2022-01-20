console.log("Greetings, General Kenobi");
let playerScore = 0;
let computerScore = 0;

let rockBtn = document.querySelector("#rock-button");
let paperBtn = document.querySelector("#paper-button");
let scissorsBtn = document.querySelector("#scissors-button");
let resultBox = document.querySelector("#result-box");

rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorsBtn.addEventListener("click", playRound);

// Function for Computer Choice
function computerChoice() {
  let random = Math.floor(Math.random() * 3) + 1;
  if (random == 1) {
    return "rock";
  } else if (random == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Function for playing a single round of RPS
function playRound(player) {
  let computerSelection = computerChoice();
  let playerChoice = player.target.innerText.toLowerCase();

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
}
