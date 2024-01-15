const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const log = document.querySelector(".log");
const result = document.querySelector(".result");

const playerScr = document.querySelector(".player");
const computerScr = document.querySelector(".computer");

let playerScore=0;
let computerScore=0;


rock.addEventListener("click", () => playRound(getComputerChoice(), "rock"));
paper.addEventListener("click", () => playRound(getComputerChoice(), "paper"));
scissors.addEventListener("click", () => playRound(getComputerChoice(), "scissors"));


function getComputerChoice(){
    let choice=(Math.floor((Math.random()*100))%3+1);
    switch(choice){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function playRound(computer, player) {
    log.textContent = `COMPUTER PLAYED ${computer.toUpperCase()}`;
    switch(true){
        case computer==="rock"&&player==="paper":
        case computer==="paper"&&player==="scissors":
        case computer==="scissors"&&player==="rock":
            result.textContent = "Player has won the round!";
            playerScore++;
            playerScr.textContent = `PLAYER: ${playerScore}`;

            if(playerScore===5){
                log.textContent = "PLAYER HAS WON THE GAME";
                result.textContent = "PLAYER HAS WON THE GAME";
                playerScore = 0;
                playerScr.textContent = `PLAYER: ${playerScore}`;
                computerScore = 0;
                computerScr.textContent = `COMPUTER: ${computerScore}`;
            }
            break;

        case player==="rock"&&computer==="paper":
        case player==="paper"&&computer==="scissors":
        case player==="scissors"&&computer==="rock":
            result.textContent = "Computer has won the round!";
            computerScore++;
            computerScr.textContent = `COMPUTER: ${computerScore}`;

            if(computerScore===5){
                log.textContent = "COMPUTER HAS WON THE GAME";
                result.textContent = "COMPUTER HAS WON THE GAME";
                computerScore = 0;
                computerScr.textContent = `COMPUTER: ${computerScore}`;
                playerScore = 0;
                playerScr.textContent = `PLAYER: ${playerScore}`;
            }
            break;

        default:
            result.textContent = "The round was a tie.";
    }
}