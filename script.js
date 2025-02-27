console.log("Hello World!");

function getComputerChoice() {
  const compNumber = Math.random();
  if (compNumber < 0.33) {
    return "rock";
  } else if (compNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const choise = prompt("Write one of these: rock, paper, scissors");
  return choise;
}

const result = document.querySelector("#result");

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "Oops! We're tied";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      return "You Won!";
    } else {
      (humanChoice === "" && computerChoice === "scissors") ||
        (humanChoice === "" && computerChoice === "rock") ||
        (humanChoice === "" && computerChoice === "paper");
      computerScore++;
      return "You Lose!";
    }
  }
  for (let i = 1; i <= 5; i++) {
    // console.log("\n=== Round ${i} ===");
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));

    console.log("You " + humanScore + " vs", "Comp " + computerScore);
  }
  result.textContent = `Final Score: You ${humanScore} vs Computer ${computerScore}`;
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log("Computer:", computerChoice);
console.log("You choose:", humanChoice);
playGame();
