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
        outcomeDiv.textContent = "Player wins round!";
        playerScore++;
    }
    else if(outcome == 0) {
        outcomeDiv.textContent = "It's a tie!";
    }
    else {
        outcomeDiv.textContent = "Computer wins round!";
        computerScore++;
    }

    if(playerScore == 5)
    {
        outcomeDiv.textContent = ("Player wins game!");
    }
    else if(computerScore == 5)
    {
        outcomeDiv.textContent = "Computer wins game!";
    } 
    else {
        outcomeDiv.textContent = (`Player: ${playerScore}\nComputer: ${computerScore}`)
    }
}

function playRound(playerChoice, computerChoice)
{
    if(playerScore == 5 || computerScore == 5) return;

    outcome = playerChoice - computerChoice;

    playDiv.textContent = (`Player: ${convertToString(playerChoice)}\nComputer: ${convertToString(computerChoice)}`);
    
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

const logDiv = document.createElement('div');

const scoreDiv = document.createElement('div');
const outcomeDiv = document.createElement('div');
const playDiv = document.createElement('div');

logDiv.appendChild(scoreDiv);
logDiv.appendChild(outcomeDiv);
logDiv.appendChild(playDiv);

document.body.appendChild(logDiv);

rockChoice.addEventListener('click', () => {
    game(playRound(0, getComputerChoice()));
});

paperChoice.addEventListener('click', () => {
    game(playRound(1, getComputerChoice()));
});

scissorsChoice.addEventListener('click', () => {
    game(playRound(2, getComputerChoice()));
});

