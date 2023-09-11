let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let winner = "";

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const restartScreen = document.querySelector("#end-screen");
const restartBtn = document.querySelector("#restart");

let playerScoreText = document.querySelector(".player-score");
let computerScoreText = document.querySelector(".computer-score");
let resultP = document.querySelector(".round-results");
let winnerText = document.querySelector(".result-text");

playerScoreText.textContent = "Player score = " + playerScore;
computerScoreText.textContent = "Computer score = " + computerScore;



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
            result = "Test";
    }
    rounds += 1;
    return result;
};

function checkRounds() {
    if (rounds >= 5) {
        restartScreen.classList.remove("hidden");
        rockBtn.classList.add("disabled");
        paperBtn.classList.add("disabled");
        scissorsBtn.classList.add("disabled");
        if (playerScore > computerScore) {
            winnerText.textContent = "You Win!"
        }
        else {
            winnerText.textContent = "You Lose!"
        }
    }
}

function restart() {
    rounds = 0;
    playerScore = 0;
    computerScore = 0;
    restartScreen.classList.add("hidden");
    rockBtn.classList.remove("disabled");
    paperBtn.classList.remove("disabled");
    scissorsBtn.classList.remove("disabled");
    resultP.textContent = "Press Any Button To Play";
    playerScoreText.textContent = "Player score = " + playerScore;
    computerScoreText.textContent = "Computer score = " + computerScore;
}

rockBtn.addEventListener("click", () => {
    let compChoice = getComputerChoice()
    resultP.textContent = playRound(compChoice, "Rock");
    playerScoreText.textContent = "Player score = " + playerScore;
    computerScoreText.textContent = "Computer score = " + computerScore;
    checkRounds();
});
paperBtn.addEventListener("click", () => {
    let compChoice = getComputerChoice()
    resultP.textContent = playRound(compChoice, "Paper");
    playerScoreText.textContent = "Player score = " + playerScore;
    computerScoreText.textContent = "Computer score = " + computerScore;
    checkRounds();
});
scissorsBtn.addEventListener("click", () => {
    let compChoice = getComputerChoice()
    resultP.textContent = playRound(compChoice, "Scissors");
    playerScoreText.textContent = "Player score = " + playerScore;
    computerScoreText.textContent = "Computer score = " + computerScore;
    checkRounds();
});
restartBtn.addEventListener("click", () => {
    restart();
});