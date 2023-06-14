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

function playRound()
{
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    if(playerSelection == computerSelection)
    {
        console.log("IT'S A TIE");
    }

    else if(playerSelection == "scissors") {
        switch(computerSelection)
        {
            case "rock":
                console.log("COMPUTER WINS");
                break;
            case "paper":
                console.log("PLAYER WINS");
                break;
        }
    }

    else if(playerSelection == "paper") {
        switch(computerSelection)
        {
            case "scissors":
                console.log("COMPUTER WINS");
                break;
            case "rock":
                console.log("PLAYER WINS");
                break;
        }
    }

    else if(playerSelection == "rock") {
        switch(computerSelection)
        {
            case "paper":
                console.log("COMPUTER WINS");
                break;
            case "scissors":
                console.log("PLAYER WINS");
                break;
        }
    }
}