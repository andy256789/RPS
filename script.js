function getComputerChoice(){
    let choice=(Math.floor((Math.random()*100))%3+1);
    return choice;
}
// 1 is Rock
// 2 is Paper
// 3 is Scissors

function getPlayerChoice(){
    let choice = prompt("What is your choice?(rock/paper/scissors):");
    console.log(typeof choice);
    switch (choice.toLocaleLowerCase()) {
        case "rock":
            return 1;
            break;
        case "paper":
            return 2;
            break;
        case "scissors":
            return 3;
            break;
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

function playGame(computerChoice,playerChoice){
    console.log("computer: " + computerChoice);
    console.log("player: " + playerChoice);
    let winner = computerChoice - playerChoice;
    switch (winner){
        case -2:
        case 1:
            console.log("Computer won!");
            break;
        case -1:
        case 2:
            console.log("Player won!");
            break;
        default:
            console.log("It was a tie");
    }
}

playGame(getComputerChoice(),getPlayerChoice());