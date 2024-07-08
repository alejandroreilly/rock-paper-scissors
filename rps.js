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


let humanScore = 0 , computerScore = 0;

function playRound(human, computer){
    human = human.toLowerCase();
    //win cases
    if ((human === "rock" && computer === "scissors") || (human === "scissors" && computer === "paper") || (human === "paper" && computer === "rock")){
        console.log(`You Win! ${human} beats ${computer}`);
        humanScore++;
        return;

    //lose conditions vvv
    }else if((computer === "rock" && human === "scissors") || (computer === "scissors" && human === "paper") || (computer === "paper" && human === "rock")){
        console.log(`You Lose! ${computer} beats ${human}`);
        computerScore++;
        return;
    }else{
        //tie
        console.log(`It's a Tie! ${human} equals ${computer}!`);
        return;
    }
}

//add the buttons to js
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', function(){
        let comp = computerChoice()
        playRound(button.id, comp)
    })
});


console.log(`Your Score: ${humanScore}. Computer's Score: ${computerScore}`);
