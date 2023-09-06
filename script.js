let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let numberChoice = Math.floor(Math.random() * 3) + 1;
    let choice;
    if (numberChoice === 1) {
        choice = "Rock";
    }
    else if (numberChoice === 2) {
        choice = "Paper";
    }
    else {
        choice = "Scissors";
    }
    return choice;
};


function getPlayerChoice() {
    let playerChoice = prompt("What do you choose? Rock, Paper, Or Scissors?");
    playerChoice = playerChoice.substring(0, 1).toUpperCase() + playerChoice.substring(1).toLowerCase();
    
    return playerChoice;
};

function playRound(computerSelection, playerSelection) {
    let result = ""
    switch (playerSelection !== computerSelection) {
        case (playerSelection == "Rock" && computerSelection == "Scissors"):
            result = "You Win! Rock beats Scissors!";
            playerScore += 1;
            break
        case (playerSelection == "Paper" && computerSelection == "Rock"):
            result = "You Win! Paper beats Rock!";
            playerScore += 1;
            break
        case (playerSelection == "Scissors" && computerSelection == "Paper"):
            result = "You Win! Scissors beats Paper!";
            playerScore += 1;
            break
        case (computerSelection == "Rock" && playerSelection == "Scissors"):
            result = "You Lose! Rock beats Scissors!";
            computerScore += 1;
            break
        case (computerSelection == "Paper" && playerSelection == "Rock"):
            result = "You Lose! Paper beats Rock!";
            computerScore += 1;
            break
        case (computerSelection == "Scissors" && playerSelection == "Paper"):
            result = "You Lose! Scissors beats Paper!";
            computerScore += 1;
            break 
        default:
            result = "Invalid Input!"
    }
    return result;
};

// function game() {
//     // console.log(playRound(getComputerChoice(), getPlayerChoice()));
//     // console.log(playRound(getComputerChoice(), getPlayerChoice()));
//     // console.log(playRound(getComputerChoice(), getPlayerChoice()));
//     // console.log(playRound(getComputerChoice(), getPlayerChoice()));
//     // console.log(playRound(getComputerChoice(), getPlayerChoice()));
//     // let winner;
//     // if (playerScore > computerScore) {
//     //     winner = "Player";
//     // }
//     // else {
//     //     winner = "Computer";
//     // }
//     // return "Winner is the " + winner;
// };

// console.log(game())