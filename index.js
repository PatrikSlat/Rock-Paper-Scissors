/* Pseudocode: Get players choice, randomize comptuer choice, compare choices, decide who wins the turn
based on the choice, give the player/computer a point, do while <3 game points, first player to reach 3
points wins the game.*/


function getComputerChoice(){
    const computerChoices = ["rock", "paper", "scissors"]
    //Getting a random number between 1 and 3 to automate the picking choice, using floor to round up
    let randomIndex = Math.floor(Math.random() * computerChoices.length); 
    return computerChoices[randomIndex]
};


function compareChoices(user) {
    // Logic behind deciding which choice won and giving points 
    console.log(user);
}; 

document.addEventListener('DOMContentLoaded', function() {
    const rockBtn = document.getElementById("rock");
    const paperBtn = document.getElementById("paper");
    const scissorsBtn = document.getElementById("scissors");

    rockBtn.addEventListener('click', () => compareChoices(rockBtn.value));
    paperBtn.addEventListener('click', () => compareChoices(paperBtn.value));
    scissorsBtn.addEventListener('click', () => compareChoices(scissorsBtn.value));
});

