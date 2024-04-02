
//Main

let computerChoice = getComputerChoice()
let playerChoice = 'Rock'
identifyWinner(computerChoice, playerChoice)


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
            console.log("Rock")
            return "Rock";
        case 1:
            console.log("Paper")
            return "Paper";
        case 2:
            console.log("Scissors")
            return "Scissors";

    }
    
}


function identifyWinner(computerChoice, playerChoice) {

    console.log(computerChoice) 
    console.log(playerChoice) 

    if (computerChoice == playerChoice){
        console.log("Its a tie!")
    } else if (computerChoice == 'Rock'){
        if (playerChoice == 'Paper'){
            console.log("You win!")
        } else {
            console.log("Computer wins!")
        }

    } else if (computerChoice == 'Paper'){
        if (playerChoice == 'Scissors'){
            console.log("You win!")
        } else {
            console.log("Computer wins!")
        }

    } else {
        if (playerChoice == 'Rock'){
            console.log("You win!")
        } else {
            console.log("Computer wins!")
        }

    }

}