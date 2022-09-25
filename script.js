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
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beat Rock";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beat Paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Paper beats Rock";
    } else {
        return "It's a tie!!!";
    }
}

// 5 rounds
function game() {
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("What u gonna play?".toLowerCase());
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }
}

game();