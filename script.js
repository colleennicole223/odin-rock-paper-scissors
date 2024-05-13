


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

    if (playerChoice == ''){
        return "No input, Computer wins by default"
    }

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


function playGame(playerChoice) {

    console.log("Player choice "+playerChoice);

    
    let playerPoints = 0
    let computerPoints = 0

    let computerChoice = getComputerChoice()
    let winner = identifyWinner(computerChoice, playerChoice)
        
        const winnerStatement = document.createElement("div");
        winnerStatement.classList.add("winnerStatement");
        winnerStatement.textContent = winner;
        info.appendChild(winnerStatement);

        if (winner.slice(0,1) == 'Y'){
            playerPoints++;
            console.log(playerPoints) ;
        } else if (winner.slice(0,1) == 'I'){

        } else if (winner.slice(0,1) == 'N'){
            computerPoints = computerPoints + 1
        } else {
            computerPoints = computerPoints + 1
        }

        const scoreStatement = document.createElement("div");
        scoreStatement.classList.add("scoreStatement");
        scoreStatement.textContent = "Your Points: " + playerPoints + "   Computer Points: "  + computerPoints;
        info.appendChild(scoreStatement);
    

        if (playerPoints > computerPoints) {
            
            return "Great job, you won!"
        } else if (playerPoints == computerPoints) {
            return "It was a tie!"
        } else {
            return "Computer wins! Better luck next time!"
        }
    
    return
}



