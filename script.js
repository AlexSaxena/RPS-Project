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
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log(
      `It is a tie between! ${playerSelection} and ${computerSelection}`
    );
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log(
      `You won using ${playerSelection} against ${computerSelection}`
    );
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    console.log(
      `You lost using ${playerSelection} against ${computerSelection}`
    );
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log(
      `You won using ${playerSelection} against ${computerSelection}`
    );
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log(
      `You lost using ${playerSelection} against ${computerSelection}`
    );
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    console.log(
      `You won using ${playerSelection} against ${computerSelection}`
    );
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    console.log(
      `You lost using ${playerSelection} against ${computerSelection}`
    );
  }
}
