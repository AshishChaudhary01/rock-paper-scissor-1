const buttons = document.querySelectorAll("button");

//Run the Program/Game when "Click" event triggers
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});

const roundResult = document.querySelector(".round");
const gameResult = document.querySelector(".game");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
  let randomNumber = Math.random();

  if(randomNumber < 0.33){
    return "rock";
  }
  else if(randomNumber > 0.33 && randomNumber < 0.67){
    return "paper";
  }
  else{
    return "scissor";
  }
}

function decideWinner(humanChoice, computerChoice){
  let winner = "";
  if(humanChoice === "rock"){
    if(computerChoice === "paper"){
      winner = "computer";
    }else if(computerChoice === "scissor"){
      winner = "human";
    }
    else
      winner = "draw"
  }

  if(humanChoice === "paper"){
    if(computerChoice === "scissor"){
      winner = "computer";
    }else if(computerChoice === "rock"){
      winner = "human";
    }
    else
      winner = "draw"
  }

  if(humanChoice === "scissor"){
    if(computerChoice === "rock"){
      winner = "computer";
    }else if(computerChoice === "paper"){
      winner = "human";
    }
    else
      winner = "draw"
  }

  return winner;
}

function updateScore(winner){
  if(winner == "human"){
    humanScore += 1;
  }
  if(winner == "computer"){
    computerScore += 1;
  }
}

function showRoundResult(winner, humanChoice, computerChoice){
  let result = "";
  if(winner === "human"){
    result =  `You win! ${humanChoice} beats ${computerChoice}`;
  }else if(winner === "computer"){
    result = `You lose! ${computerChoice} beats ${humanChoice}`;
  }
  else{
    result = `Draw! both chose ${humanChoice}`;
  }
  roundResult.textContent = result; 
}

function showFinalResult(){
  let result = "";
  if(humanScore>computerScore){
    result = `You won! your score: ${humanScore} computer score: ${computerScore}`;
  } else if(humanScore<computerScore){
    result = `You Lost! your score: ${humanScore} computer score: ${computerScore}`;
  }else{
    result = `Draw! your score: ${humanScore} computer score: ${computerScore}`;
  }
  gameResult.textContent = result;
}

function playRound(humanChoice){
  let computerChoice = getComputerChoice();
  humanChoice = humanChoice.toLowerCase();
  let winner = decideWinner(humanChoice, computerChoice);
  updateScore(winner);
  showRoundResult(winner, humanChoice, computerChoice);
  if(humanScore>=5 || computerScore>=5){
    showFinalResult();
    humanScore = 0;
    computerScore = 0;
  }
}