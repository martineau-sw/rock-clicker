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
    playRound(getPlayerChoice(), getComputerChoice());

    if(playerScore == 3)
    {
        console.log("PlAYER WINS");
    }
    else if(computerScore == 3)
    {
        console.log("COMPUTER WINS");
    } 
    else {
        console.log(`Player: ${playerScore}
        Computer: ${computerScore}`)
        game();   
    }
}

function playRound(playerChoice, computerChoice)
{
    if(playerChoice == computerChoice)
    {
        console.log("IT'S A TIE");
    }

    else if(playerChoice == "scissors") {
        switch(computerChoice)
        {
            case "rock":
                console.log("COMPUTER WINS");
                computerScore++;
                break;
            case "paper":
                console.log("PLAYER WINS");
                playerScore++;
                break;
        }
    }

    else if(playerChoice == "paper") {
        switch(computerChoice)
        {
            case "scissors":
                console.log("COMPUTER WINS");
                computerScore++;
                break;
            case "rock":
                console.log("PLAYER WINS");
                playerScore++;
                break;
        }
    }

    else if(playerChoice == "rock") {
        switch(computerChoice)
        {
            case "paper":
                console.log("COMPUTER WINS");
                computerScore++;
                break;
            case "scissors":
                console.log("PLAYER WINS");
                playerScore++;
                break;
        }
    }
}

game();