let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playGame(userChoice) {
    let computerChoice = getComputerChoice();
    let resultText = `You chose ${userChoice}, Computer chose ${computerChoice}. `;

    if (userChoice === computerChoice) {
        resultText += "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "paper") || 
        (userChoice === "paper" && computerChoice === "scissors") || 
        (userChoice === "scissors" && computerChoice === "rock")
    ) {
        resultText += "Computer wins!";
        computerScore++;
    } else {
        resultText += "You win!";
        humanScore++;
    }

    // Update the score display
    document.getElementById("humanScore").textContent = humanScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("resultText").textContent = resultText;
}