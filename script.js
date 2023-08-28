function getComputerChoice() {
    let numberChoice = Math.floor(Math.random() * 3) + 1;
    let choice
    if (numberChoice === 1) {
        choice = "Rock"
    }
    else if (numberChoice === 2) {
        choice = "Paper"
    }
    else {
        choice = "Scissors"
    }
    return choice
};

function playRound(computerSelection, playerSelection) {
    let result = ""
    switch (computerSelection, playerSelection) {
        case playerSelection === "Rock" && computerSelection === "Scissors":
            result = "You Win! Rock beats Scissors!"
            break
        case playerSelection === "Paper" && computerSelection === "Rock":
            result = "You Win! Paper beats Rock!"
            break
        case playerSelection === "Scissors" && computerSelection === "Paper":
            result = "You Win! Scissors beats Paper!"
            break
        case computerSelection === "Rock" && playerSelection === "Scissors":
            result = "You Lose! Rock beats Scissors!"
            break
        case computerSelection === "Paper" && playerSelection === "Rock":
            result = "You Lose! Paper beats Rock!"
            break
        case computerSelection === "Scissors" && playerSelection === "Paper":
            result = "You Lose! Scissors beats Paper!"
            break  
    }
    return result
};