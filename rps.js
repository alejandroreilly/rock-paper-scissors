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
const message = document.querySelector("div.score");
const results = document.querySelector("div.results");

function playGame(){

    function playRound(human, computer){
        human = human.toLowerCase();
        //win cases
        if ((human === "rock" && computer === "scissors") || (human === "scissors" && computer === "paper") || (human === "paper" && computer === "rock")){
            message.textContent = (`Computer chose ${computer}. You Win! ${human} beats ${computer}`);
            humanScore++;
            results.textContent = (`Your Score: ${humanScore} | Computer Score: ${computerScore}`);
            if (humanScore >= 5){
                message.textContent = "You got 5! YOU WIN!";
                humanScore = 0, computerScore = 0;
            }else if(computerScore >= 5){
                message.textContent = "Computer got 5! YOU LOSE!";
                humanScore = 0; computerScore = 0;
            }
            return;

        //lose conditions vvv
        }else if((computer === "rock" && human === "scissors") || (computer === "scissors" && human === "paper") || (computer === "paper" && human === "rock")){
            message.textContent = (`Computer chose ${computer}. You Lose! ${computer} beats ${human}`);
            computerScore++;

            results.textContent = (`Your Score: ${humanScore} | Computer Score: ${computerScore}`);
            if (humanScore >= 5){
                message.textContent = "You got 5! YOU WIN!";
                humanScore = 0, computerScore = 0;
            }else if(computerScore >= 5){
                message.textContent = "Computer got 5! YOU LOSE!";
                humanScore = 0; computerScore = 0;
            }
            return;
        }else{
            //tie
            message.textContent = (`Computer chose ${computer}. It's a Tie! ${human} equals ${computer}!`);
            if (humanScore >= 5 || computerScore >= 5){
                humanScore = 0, computerScore = 0;
                results.textContent = (`Your Score: ${humanScore} | Computer Score: ${computerScore}`);
            }
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
}

playGame();

