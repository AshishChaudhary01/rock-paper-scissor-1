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

function getHumanChoice(){
  // return prompt("Enter your choice in Lower case\n'rock' 'paper' 'scissor'", "rock");
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
  console.log(result);
}

function showFinalResult(){
  if(humanScore>computerScore){
    console.log(`You won! your score: ${humanScore} computer score: ${computerScore}`)
  }
  if(humanScore<computerScore){
    console.log(`You Lost! your score: ${humanScore} computer score: ${computerScore}`)
  }
  else{
    console.log(`Draw! your score: ${humanScore} computer score: ${computerScore}`)
  }
}

function playRound(humanChoice){
  let computerChoice = getComputerChoice();
  
  humanChoice = humanChoice.toLowerCase();
  let winner = decideWinner(humanChoice, computerChoice);
  updateScore(winner);
  showRoundResult(winner, humanChoice, computerChoice);
}

// function playGame(){
//   //Play 5 rounds
//   // for(let i=0; i<5; i++){
//     playRound();
//   // }
//   showFinalResult();
// }

//Run the Program/Game on event trigger
const buttons = document.querySelectorAll("button")
  buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  })
});