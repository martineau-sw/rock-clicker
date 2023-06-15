function getComputerChoice()
{
    return Math.floor(Math.random() * 3);
}

function getPlayerChoice() {
    const choice = prompt("Rock, paper, or scissors?");

    switch(choice.toLowerCase())
    {
        case "rock":
        case "r":
        case "1":
            return 0;
        case "paper":
        case "p":
        case "2":
            return 1;
        case "scissors":
        case "s":
        case "3":
            return 2;
        default:
            getPlayerChoice()
    }
}

let playerScore = 0;
let computerScore = 0;

function game() {
    const outcome = playRound(getPlayerChoice(), getComputerChoice());

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

    if(playerScore == 3)
    {
        console.log("Player wins game!");
    }
    else if(computerScore == 3)
    {
        console.log("Computer wins game!");
    } 
    else {
        console.log(`Player: ${playerScore}\nComputer: ${computerScore}`)
        game();   
    }
}

function playRound(playerChoice, computerChoice)
{
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

game();