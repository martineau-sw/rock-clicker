function getComputerChoice()
{
    const choice = Math.floor(Math.random() * 3);

    switch(choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissors";
    }
}

function getPlayerChoice() {
    const choice = prompt("Rock, paper, or scissors?");

    switch(choice.toLowerCase())
    {
        case "rock":
        case "r":
        case "1":
            return "rock";
        case "paper":
        case "p":
        case "2":
            return "paper";
        case "scissors":
        case "s":
        case "3":
            return "scissors";
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
    if(playerChoice == computerChoice)
    {
        return 0;
    }

    else if(playerChoice == "scissors") {
        switch(computerChoice)
        {
            case "rock":
                return -1;
            case "paper":
                return 1;
        }
    }

    else if(playerChoice == "paper") {
        switch(computerChoice)
        {
            case "scissors":
                return -1;
            case "rock":
                return 1;
        }
    }

    else if(playerChoice == "rock") {
        switch(computerChoice)
        {
            case "paper":
                return -1;
            case "scissors":
                return 1;
        }
    }
}

game();