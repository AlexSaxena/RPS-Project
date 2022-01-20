console.log("Greetings, General Kenobi");
let playerScore = 0;
let computerScore = 0;

let rockBtn = document.querySelector("#rock-button");
let paperBtn = document.querySelector("#paper-button");
let scissorsBtn = document.querySelector("#scissors-button");

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
  console.log("-------------------------------------------------");

  if (playerChoice == computerSelection) {
    console.log(
      `It is a tie between! ${playerChoice} and ${computerSelection}`
    );
  } else if (playerChoice == "rock" && computerSelection == "scissors") {
    playerScore++;
    console.log(`You won using ${playerChoice} against ${computerSelection}`);
  } else if (playerChoice == "rock" && computerSelection == "paper") {
    computerScore++;
    console.log(`You lost using ${playerChoice} against ${computerSelection}`);
  } else if (playerChoice == "paper" && computerSelection == "rock") {
    playerScore++;
    console.log(`You won using ${playerChoice} against ${computerSelection}`);
  } else if (playerChoice == "paper" && computerSelection == "scissors") {
    computerScore++;
    console.log(`You lost using ${playerChoice} against ${computerSelection}`);
  } else if (playerChoice == "scissors" && computerSelection == "paper") {
    playerScore++;
    console.log(`You won using ${playerChoice} against ${computerSelection}`);
  } else if (playerChoice == "scissors" && computerSelection == "rock") {
    computerScore++;
    console.log(`You lost using ${playerChoice} against ${computerSelection}`);
  } else {
    console.log(`Please Enter Rock, Paper Or Scissors`);
  }
}
