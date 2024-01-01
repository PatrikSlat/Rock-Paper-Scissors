/* Pseudocode: Get players choice, randomize comptuer choice, compare choices, decide who wins the turn
based on the choice, give the player/computer a point, do while <3 game points, first player to reach 3
points wins the game.*/

let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice(){
    const computerChoices = ["rock", "paper", "scissors"]
    //Getting a random number between 1 and 3 to automate the picking choice, using floor to round up
    let randomIndex = Math.floor(Math.random() * computerChoices.length); 
    return computerChoices[randomIndex]
};


function compareChoices(user) {
    // Logic behind deciding which choice won and giving points 
    const userChoice = user;
    const computerChoice = getComputerChoice();
    const output = document.getElementById("results-text");

    if (userChoice === computerChoice) {
        output.innerHTML = "It's a tie !";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        output.innerHTML = "You have won !";
    } else {
        output.innerHTML = "The computer has beat you !";
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const rockBtn = document.getElementById("rock");
    const paperBtn = document.getElementById("paper");
    const scissorsBtn = document.getElementById("scissors");

    rockBtn.addEventListener('click', () => compareChoices(rockBtn.value));
    paperBtn.addEventListener('click', () => compareChoices(paperBtn.value));
    scissorsBtn.addEventListener('click', () => compareChoices(scissorsBtn.value));
});

