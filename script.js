console.log("Greetings, General Kenobi");
let playerScore = 0;
let computerScore = 0;

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
function playRound(playerSelection, computerSelection = computerChoice()) {
  let playerChoice = playerSelection.toLowerCase().trim();
  console.log("-------------------------------------------------");

  if (playerChoice == computerSelection) {
    return `It is a tie between! ${playerChoice} and ${computerSelection}`;
  } else if (playerChoice == "rock" && computerSelection == "scissors") {
    playerScore++;
    return `You won using ${playerChoice} against ${computerSelection}`;
  } else if (playerChoice == "rock" && computerSelection == "paper") {
    computerScore++;
    return `You lost using ${playerChoice} against ${computerSelection}`;
  } else if (playerChoice == "paper" && computerSelection == "rock") {
    playerScore++;
    return `You won using ${playerChoice} against ${computerSelection}`;
  } else if (playerChoice == "paper" && computerSelection == "scissors") {
    computerScore++;
    return `You lost using ${playerChoice} against ${computerSelection}`;
  } else if (playerChoice == "scissors" && computerSelection == "paper") {
    playerScore++;
    return `You won using ${playerChoice} against ${computerSelection}`;
  } else if (playerChoice == "scissors" && computerSelection == "rock") {
    computerScore++;
    return `You lost using ${playerChoice} against ${computerSelection}`;
  } else {
    return `Please Enter Rock, Paper Or Scissors`;
  }
}
