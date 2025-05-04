// Rocks beat scissors, paper beats rocks, scissors beat paper
let rockPaperScissors = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * rockPaperScissors.length);
  return rockPaperScissors[randomIndex];
}

function getHumanChoice(){
    let playerChoice = prompt("Enter your choice: rock, paper, or scissors");

    return playerChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {

    //key beats value
    const winConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper',
    }

    if (humanChoice === computerChoice) {
        return console.log("It's a tie!");
    } else if (winConditions[humanChoice] == computerChoice) {
        humanScore++;
        return console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }else{
        computerScore++
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

function playGame(){

    for (let playRoundCounter = 1; playRoundCounter <= 5; playRoundCounter++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`Your choice: ${humanSelection}`);
        console.log(`Computer's choice: ${computerSelection}`);

        playRound(humanSelection, computerSelection);

       console.log(`Scores after Round ${playRoundCounter}:`);
       console.log(`You: ${humanScore} | Computer: ${computerScore}`);
    }

    console.log("Game Over!");

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost the game.");
    } else {
        console.log("The game is a tie!");
    }
}

playGame()