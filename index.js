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


function getPlayerChoice(){
    //Eventlistener to get the choice
};

function compareChoices(){
    //Logic behind deciding which choice won and point giving 
};

while(playerPoints < 3 || computerPoints < 3){
    //Logic behind calling all the function
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

};



