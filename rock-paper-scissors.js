function getComputerChoice()
{
    return Math.floor(Math.random() * 3);
}

function getPlayerChoice() {
}

let playerScore = 0;
let computerScore = 0;

function trackScore(outcome) {
    if(outcome == 1) {
        playerScore++;
    }
    else if(outcome == 0) {
    }
    else {
        computerScore++;
    }

    playerScoreDisplay.textContent = playerScore.toString();
    computerScoreDisplay.textContent = computerScore.toString();
}

function rock() {
    if(checkScore()) return; 
    trackScore(playRound(0, getComputerChoice()));
}

function checkScore()  {
    if(playerScore == 5 || computerScore == 5) 
    {
        const player = document.querySelector('.player');
        const computer = document.querySelector('.computer');
        const score = document.querySelector('.contest');
        score.remove();
        computer.remove();
        player.lastElementChild.remove();

        player.firstElementChild.textContent = playerScore == 5 ? "YOU ROCK!" : "YOU DON'T ROCK!";
        

        rockChoice.removeEventListener('click', rock);
        return true;
    }
    return false;
}

function playRound(playerChoice, computerChoice)
{
    playerHand.textContent = convertToEmoji(playerChoice);
    computerHand.textContent = convertToEmoji(computerChoice);

    outcome = playerChoice - computerChoice;
    
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

function convertToEmoji(index) {
    switch(index)
    {
        case 0:
            return "🪨";
        case 1:
            return "📃";
        case 2:
            return "✂️";
    }
}

const rockChoice = document.querySelector('.rock');

const player = document.querySelector('.player');
const contest = document.querySelector('.contest');
const computer = document.querySelector('.computer');

const playerScoreDisplay = document.createElement('div');
const computerScoreDisplay = document.createElement('div');

const playerHand = contest.firstElementChild;
const computerHand = contest.lastElementChild;

playerScoreDisplay.textContent = "0";
computerScoreDisplay.textContent = "0";

player.appendChild(playerScoreDisplay);
computer.appendChild(computerScoreDisplay);

rockChoice.addEventListener('click', rock);



