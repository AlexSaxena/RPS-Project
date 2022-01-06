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
  let playerChoice = playerSelection.toLowerCase();
  console.log(playerChoice);

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

function game() {
  let player = "";
  for (let i = 0; i < 5; i++) {
    player = prompt("Choose Rock, Paper Or Scissors!");
    console.log(playRound(player, computerChoice()));
    console.log(
      `Current Score is Player: ${playerScore} vs Computer: ${computerScore}`
    );
    if (i == 4 && playerScore > computerScore) {
      console.log("WOW you Won!!");
    } else if (i == 4 && playerScore < computerScore) {
      console.log("Unlucky Computer won, Try again next time!");
    }
  }
}
