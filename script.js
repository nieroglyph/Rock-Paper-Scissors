// return rock paper or scissors randomly
function getComputerChoice() {
  let computer = Math.floor(Math.random() * 3);
  if (computer == 0) {
    return "rock";
  } else if (computer == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// actual round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!!!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    return "You Win! Paper beats Rock";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    return "You Win! Scissors beat Paper";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    return "You Lose! Scissors beat Paper";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    return "You Lose! Rock beats Scissors";
  } else {
    return "Please enter Rock, Paper, or Scissors";
  }
}

// first 5 rounds
function game() {
  while (playerScore < 5) {
    const playerSelection = prompt("What u gonna play?".toLowerCase());
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (playerScore === 5) {
      console.log(
        `You are a Winner!\nFinal Score = Player - ${playerScore} : Computer - ${computerScore}`
      );
      return false;
    } else if (computerScore === 5) {
      console.log(
        `You are a Loser.\nFinal Score = Player - ${playerScore} : Computer - ${computerScore}`
      );
      return false;
    }
  }
}

let playerScore = 0;
let computerScore = 0;
console.log("Rock Paper Scissors\nFirst to five rounds!!")
game();