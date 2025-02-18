let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getUserChoice(){
  let choice = prompt("Enter your choice: rock, paper, or scissors, (or type 'exit' to quit)").toLowerCase();
  return choice;
}

while(true){
  let userChoice = getUserChoice();
  if(userChoice === 'exit'){
    alert("Thanks for playing! Final Score:");
    alert(`Human: ${humanScore}, Computer: ${computerScore}`);
    break;
  }

  if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
    alert("Invalid choice! Please enter rock, paper, or scissors.");
    continue; // Restart the loop
  }
  
  alert ("Your choice: " + userChoice);
  let computerChoice = getComputerChoice();
  alert ("Computer choice: " + computerChoice);

  if (userChoice === computerChoice) {
    alert("It's a tie!");
  } else if (
    (userChoice === "rock" && computerChoice === "paper") || 
    (userChoice === "paper" && computerChoice === "scissors") || 
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    alert("Computer wins!");
    computerScore++;
  } else {
    alert("You win!");
    humanScore++;
  }
  
  alert(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
}
