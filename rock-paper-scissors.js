function getComputerChoice()
{
    return Math.floor(Math.random() * 3);
}

function getPlayerChoice() {
}

let playerScore = 0;
let computerScore = 0;

function game(outcome) {

    if(playerScore == 5 || computerScore == 5) return;

    if(outcome == 1) {
        console.log("Player wins round!");
        playerScore++;
    }
    else if(outcome == 0) {
        console.log("It's a tie!");
    }
    else {
        console.log("Computer wins round!");
        computerScore++;
    }

    if(playerScore == 5)
    {
        console.log("Player wins game!");
    }
    else if(computerScore == 5)
    {
        console.log("Computer wins game!");
    } 
    else {
        console.log(`Player: ${playerScore}\nComputer: ${computerScore}`)
    }
}

function playRound(playerChoice, computerChoice)
{
    if(playerScore == 5 || computerScore == 5) return;

    outcome = playerChoice - computerChoice;

    console.log(`Player: ${convertToString(playerChoice)}\nComputer: ${convertToString(computerChoice)}`);
    console.log(outcome);
    
    if(outcome == 0) {
        return 0;
    }
    else if(Math.abs(outcome) == 1) {
        return outcome;
    }
    else if(Math.abs(outcome) == 2) {
        return outcome / -2;
    }
}

function convertToString(index) {
    switch(index) 
    {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2: 
            return "Scissors";
    }
}

const rockChoice = document.querySelector('.rock');
const paperChoice = document.querySelector('.paper');
const scissorsChoice = document.querySelector('.scissors');

rockChoice.addEventListener('click', () => {
    game(playRound(0, getComputerChoice()));
});

paperChoice.addEventListener('click', () => {
    game(playRound(1, getComputerChoice()));
});

scissorsChoice.addEventListener('click', () => {
    game(playRound(2, getComputerChoice()));
});

