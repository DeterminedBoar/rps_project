let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let result = ""
let winner = "";

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

let resultP = document.querySelector(".round-results");


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


function playRound(computerSelection, playerSelection) {
    switch (playerSelection !== computerSelection) {
        case (playerSelection == "Rock" && computerSelection == "Scissors"):
            result = "You Win! Rock beats Scissors!";
            playerScore += 1;
            rounds += 1;
            break
        case (playerSelection == "Paper" && computerSelection == "Rock"):
            result = "You Win! Paper beats Rock!";
            playerScore += 1;
            rounds += 1;
            break
        case (playerSelection == "Scissors" && computerSelection == "Paper"):
            result = "You Win! Scissors beats Paper!";
            playerScore += 1;
            rounds += 1;
            break
        case (computerSelection == "Rock" && playerSelection == "Scissors"):
            result = "You Lose! Rock beats Scissors!";
            computerScore += 1;
            rounds += 1;
            break
        case (computerSelection == "Paper" && playerSelection == "Rock"):
            result = "You Lose! Paper beats Rock!";
            computerScore += 1;
            rounds += 1;
            break
        case (computerSelection == "Scissors" && playerSelection == "Paper"):
            result = "You Lose! Scissors beats Paper!";
            computerScore += 1;
            rounds += 1;
            break 
        default:
            result = "Test";
    }
    return result;
};

rockBtn.addEventListener("click", () => {
    let compChoice = getComputerChoice()
    resultP.textContent = playRound(compChoice, "Rock");
});
paperBtn.addEventListener("click", () => {
    let compChoice = getComputerChoice()
    resultP.textContent = playRound(compChoice, "Paper");
});
scissorsBtn.addEventListener("click", () => {
    let compChoice = getComputerChoice()
    resultP.textContent = playRound(compChoice, "Scissors");
});

while (rounds >= 5) {
    if (playerScore > computerScore) {
        winner = "Player";
    }
    else {
        winner = "Computer";
    }
    alert("Winner is " + winner);
}

