

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

