
//Main

playGame()


/*
Functions

Return a random 'rock', 'paper', or 'scissors' 
- produce a random integer from 0 - 2
- Selecet case from switch statement using random integer
*/

function getComputerChoice() {

    var randomChoice = Math.floor(Math.random()*3) //where Math.floor rounds to the nearest Int 

    switch(randomChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";

    }
    
}


function identifyWinner(computerChoice, playerChoice) {

    console.log(computerChoice) 
    console.log(playerChoice) 

    if (computerChoice == playerChoice){
        return "Its a tie!"
    } else if (computerChoice == 'rock'){
        if (playerChoice == 'paper'){
            return "You win! Paper beats Rock"
        } else {
            return "Computer wins! Rock beats Scissors"
        }

    } else if (computerChoice == 'paper'){
        if (playerChoice == 'scissors'){
            return "You win! Scissors beats Paper"
        } else {
            return "Computer wins! Paper beats Rock"
        }

    } else {
        if (playerChoice == 'rock'){
            return "You win! Rock beats Scissors"
        } else {
            return "Computer wins! Scissors beats Paper"
        }

    }

}


function playGame() {
    
    let playerPoints = 0
    let computerPoints = 0

    for (i = 0; i < 3; i++) {
        let computerChoice = getComputerChoice()
        let playerChoice = prompt('Rock, Paper, or Scissors?').toLowerCase()
        let winner = identifyWinner(computerChoice, playerChoice)
        
        if (winner.slice(0,1) == 'Y'){
            playerPoints = playerPoints + 1
        } else if (winner.slice(0,1) == 'I'){

        } else {
            computerPoints = computerPoints + 1
        }
        


        alert(winner)
        alert("Your Points: " + playerPoints + "   Computer Points: "  + computerPoints);
    }

    if (playerPoints > computerPoints) {
        alert("Great job, you won!")
    } else if (playerPoints == computerPoints) {
        alert("It was a tie!")
    } else {
        alert("Computer wins! Better luck next time!")
    }
    

}