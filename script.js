
//Main

getComputerChoice()


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
            break;
        case 1:
            console.log("Paper")
            break;
        case 2:
            console.log("Scissors")
            break;

    }
}