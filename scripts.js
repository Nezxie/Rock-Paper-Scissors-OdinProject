const points=document.querySelector('.points');
const container=document.querySelector('.buttonHolder');
const message=document.querySelector('.comm');
const buttRock=document.createElement("button");
const buttPaper=document.createElement("button");
const buttScissors=document.createElement("button");
const AIsChoiceDisplay=document.createElement("p");
const pointsDisplay=document.createElement("p");
const resultDisplay=document.createElement("p");
let pointCounter=0;

//buttRock.textContent="Rock";
buttRock.className="theButton";
buttRock.id="rock"
//buttPaper.textContent="Paper";
buttPaper.className="theButton";
buttPaper.id="paper"
//buttScissors.textContent="Scissors";
buttScissors.className="theButton";
buttScissors.id="scissors"
pointsDisplay.textContent=pointCounter;



buttRock.addEventListener('click', function(){
    buttRock.classList.add('selected');
    buttPaper.classList.remove('selected');
    buttScissors.classList.remove('selected');
    pointCounter+=playRound("rock");
    pointUpdate();
  }
);

buttPaper.addEventListener('click', function(){
    buttPaper.classList.add('selected');
    buttScissors.classList.remove('selected');
    buttRock.classList.remove('selected');
    pointCounter+=playRound("paper");
    pointUpdate();
  }
);

buttScissors.addEventListener('click', function(){
    buttScissors.classList.add('selected');
    buttPaper.classList.remove('selected');
    buttRock.classList.remove('selected');
    pointCounter+=playRound("scissors");
    pointUpdate();
  }
);

container.appendChild(resultDisplay);
container.appendChild(AIsChoiceDisplay);
container.appendChild(buttRock);
container.appendChild(buttPaper);
container.appendChild(buttScissors);
points.appendChild(pointsDisplay);
message.appendChild(resultDisplay);
message.appendChild(AIsChoiceDisplay);








function computerPlay(){
  let mess="Computer chose ";
    switch(Math.floor(Math.random() * 3)){
        case 0:
            AIsChoiceDisplay.textContent=mess+"rock";
            return "rock";
        case 1:
            AIsChoiceDisplay.textContent=mess+"paper";
            return "paper";
        case 2:
            AIsChoiceDisplay.textContent=mess+"scissors";
            return "scissors";
        default:
            consol.log("AI ERROR")
            return "rock";
    }

};


//returns 0 if player looses and 1 if player wins
function playRound(option){
    let userChoice = option;
    let AIChoice = computerPlay();
    if(AIChoice === userChoice){
      resultDisplay.textContent=("It's a draw!\n");
      return 0;
    }
    else if(AIChoice === "paper"){
      if(userChoice === "scissors")
        {
          resultDisplay.textContent=("You win!\n");
          return 1;
        }
      else{
        resultDisplay.textContent=("Sorry, you lose!\n")
        return 0;
      }
    }
    else if(AIChoice === "scissors"){
      if(userChoice === "rock")
        {
          resultDisplay.textContent=("You win!\n");
          return 1;
        }
      else{
        resultDisplay.textContent=("Sorry, you lose!\n")
        return 0;
      }
    }
    else if(AIChoice === "rock"){
      if(userChoice === "paper")
        {
          resultDisplay.textContent=("You win!\n");
          return 1;
        }
      else{
        resultDisplay.textContent=("Sorry, you lose!\n")
        return 0;
      }
    }
    else{
      resultDisplay.textContent=("Sorry, an error occured!")
    }
    
}

  
function pointUpdate(){
  pointsDisplay.textContent=pointCounter;
}