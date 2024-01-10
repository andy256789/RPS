function getComputerChoice(){
    let choice=(Math.floor((Math.random()*100))%3+1);
    return choice;
}
// 1 is Rock
// 2 is Paper
// 3 is Scissors

function getPlayerChoice(){
    let choice = prompt("What is your choice?(rock/paper/scissors):");
    switch (choice.toLocaleLowerCase()) {
        case "rock":
            return 1;
        case "paper":
            return 2;
        case "scissors":
            return 3;
        default:
            console.log("Invalid input");
            break;
    }
}

// scissors - paper = 1 -> so scissors wins
// rock - scissors = -2 -> rock wins

// rock - paper = -1 -> paper wins
// scissors - rock = 2 -> rock wins

// So the first one wins if result = 1, -2
// Second one wins if result = -1, 2

function playRound(computerChoice,playerChoice){
    switch(computerChoice){
        case 1:
            console.log("Computer played rock");
            break;
        case 2:
            console.log("Computer played paper");
            break;
        case 3:
            console.log("Computer played scissors");
            break;
    }
    let winner = computerChoice - playerChoice;
    switch (winner){
        case -2:
        case 1:
            return "computer";
        case -1:
        case 2:
            return "player";
        case 0:
            return "tie";

    }
}

function Game(){
    let playerScore=0;
    let computerScore=0;

    while(true){
        let round = playRound(getComputerChoice(),getPlayerChoice());
        if(round==="tie"){
            console.log("Round was a tie. ")
        }
        if(round==="player"){
            console.log("Player has won the round! ");
            playerScore++;
        }
        if(round==="tie"){
            console.log("Computer has won the round! ");
            computerScore++;
        }
        console.info(`SCORE:  Player: ${playerScore}   Computer: ${computerScore}`);

        if(playerScore===5){
            console.log("Player has won the game! :)");
            break;
        }
        if(computerScore===5){
            console.log("Computer has won the game! :(");
            break;
        }
    }
}

function playGame(){
    do{
        Game();
        let userInput = prompt("Play again?yes/no").toLowerCase();
        if(userInput==="yes"){
            continue;
        }
        else{
            break;
        }
    }while(true);
}
playGame();