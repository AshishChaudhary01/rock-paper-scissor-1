const buttons = document.querySelectorAll("button");

//Run the Program/Game when "Click" event triggers
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});

const scoreBoardTitle = document.querySelector("#score-board-title");
const score = document.querySelector("#score");
const result = document.querySelector(".result");
const roundResult = document.querySelector(".round");
const gameResult = document.querySelector(".game");

//Global Variable to track Score of players
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

function showUpdatedScore(){
  score.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`;
}

function showRoundResult(winner, humanChoice, computerChoice){
  let result = "Round result: ";
  if(winner === "human"){
    result = result + `You win! ${humanChoice} beats ${computerChoice}`;
  }else if(winner === "computer"){
    result = result +`You lose! ${computerChoice} beats ${humanChoice}`;
  }
  else{
    result = result + `Draw! both chose ${humanChoice}`;
  }
  roundResult.textContent = result; 
}

function showFinalResult(){
  let result = "Final Result: ";
  if(humanScore>computerScore){
    result = result + `YAY! You won! your score: ${humanScore} computer score: ${computerScore}`;
  } else if(humanScore<computerScore){
    result = result + `You Lost! your score: ${humanScore} computer score: ${computerScore}`;
  }
  gameResult.textContent = result;
}
  
function showRestartOption(){
  const restartButtonContainer = document.createElement("div");
  const restartButton = document.createElement("button");

  restartButtonContainer.classList.add("restart-button-container");
  restartButton.setAttribute("id", "restart");
  restartButton.textContent = "RESTART";

  restartButtonContainer.appendChild(restartButton);
  result.appendChild(restartButtonContainer);

  restartButton.addEventListener("click", () => {
    restartGame(restartButtonContainer);
  });
}

function restartGame(restartButtonContainer){
  humanScore = computerScore = 0;
  scoreBoardTitle.textContent = "";
  score.textContent = "";
  roundResult.textContent = "";
  gameResult.textContent = "";
  result.removeChild(restartButtonContainer);

  //Enable options buttons
  buttons.forEach((button) => {
    button.disabled = false;
  });
}

function playRound(humanChoice){
  let computerChoice = getComputerChoice();
  humanChoice = humanChoice.toLowerCase();
  let winner = decideWinner(humanChoice, computerChoice);
  updateScore(winner);
  //Show Score board title for context
  scoreBoardTitle.textContent = "[SCORE BOARD]";
  showUpdatedScore();
  showRoundResult(winner, humanChoice, computerChoice);
  if(humanScore>=5 || computerScore>=5){
    showFinalResult();

    //Disable options buttons
    buttons.forEach((button) => {
      button.disabled = true;
    });
    showRestartOption();
  }
}