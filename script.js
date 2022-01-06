console.log("Greetings, General Kenobi");

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
  let playerChoice = playerSelection.toLowerCase();

  if (playerChoice == computerSelection) {
    return `It is a tie between! ${playerChoice} and ${computerSelection}`;
  } else if (playerChoice == "rock" && computerSelection == "scissors") {
    return `You won using ${playerChoice} against ${computerSelection}`;
  } else if (playerChoice == "rock" && computerSelection == "paper") {
    return `You lost using ${playerChoice} against ${computerSelection}`;
  } else if (playerChoice == "paper" && computerSelection == "rock") {
    return `You won using ${playerChoice} against ${computerSelection}`;
  } else if (playerChoice == "paper" && computerSelection == "scissors") {
    return `You lost using ${playerChoice} against ${computerSelection}`;
  } else if (playerChoice == "scissors" && computerSelection == "rock") {
    return `You won using ${playerChoice} against ${computerSelection}`;
  } else if (playerChoice == "scissors" && computerSelection == "rock") {
    return `You lost using ${playerChoice} against ${computerSelection}`;
  } else {
    return "Please Choose Rock, Paper or Scissors";
  }
}

function game() {
  let player = "";
  for (let i = 0; i < 5; i++) {
    player = prompt("Choose Rock, Paper Or Scissors!");
    console.log(playRound(player, computerChoice()));
  }
}
