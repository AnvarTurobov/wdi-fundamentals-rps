////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

// Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    
    
function getPlayerMove(move) {
    return move || getInput();
}



    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    
    
function getComputerMove(move) {
    return move || randomPlay();
}



    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */


function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove===computerMove) {
    winner=== "tie";
    }
    
    if (playerMove === rock && computerMove === scissors) {
    winner=== "playerMove";
    }
    
    else if (playerMove === paper && computerMove === rock) {
    winner=== "playerMove";
    }
    
    else if (playerMove === scissors && computerMove === paper) {
    winner=== "playerMove";
    }
    
    else { winner==="computerMove";
    }
    
    return winner;
}



function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins === 5 || computerWins === 5) {
    var playerMove= getPlayerMove();
    var computerMove= getComputerMove();
    var winner = getWinner(playerMove, computerMove);
    
    if (winner === "player") {
    playerWins +=1;
    }
    
    else if (winner === "computer") {
    comuperWins +=1;
    }
    
    else {
    playerWins +=0;
    computerWins +=0;
    }
    
        // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

