function computerChoice(){
    //get the computer's choice from random generation
    let random = Math.floor(Math.random()*3);
    switch (random){
        case 0:
            return "rock";
        case 1: 
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice(){
    // get the human input
    let choice;
    choice = prompt("Rock, Paper, or Scissors?: ");
    while (true){
        if(choice === "rock" || choice === "paper" || choice === "scissors"){
            return choice;
        }else{
            choice = prompt("Try again. Rock, Paper, or Scissors?: ");
        }
    }
}

//initialize the score variables within the global scope
let humanScore = 0 , computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(human, computer){
    human = human.toLowerCase();
    
}