/* 
    1. Creating a function for the computer to randomly choose an input to compete
    with the player's option of choice. 
*/
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
}
console.log(getRandomComputerResult());

let playerScore = 0;
let computerScore = 0;

/* 
    2. Winning Options that the player chooses which will beat the Computer 
*/
function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

/*
    3. After a round played out, it will increment a score for whoever's side chose the correct
    option. If there is a tie, the scores won't be updated at all.
*/
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

/*
    4. Creating a function that would show the results of the previous function "getRoundResults" where the score would be displayed to the user in the program.
*/
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("result-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.getElementById(".option-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;

  /*
    5. Setting the game to a certain amount of rounds so the game doesn't last forever, this function would show the results of whoever has won the game in a first to three setting.
  */
  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;
    optionsContainer.style.display = "none";
    resetGameBtn.style.display = "block";
  }
}

/*
    6. A reset function for the game after it has chosen a winner for replayability is important so you don't have to restart the program just to start a new instance.
*/
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = "0";
  computerScoreSpanElement.innerText = "0";
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  roundResultsMsg.innerText = "";
  winnerMsgElement.innerText = "";
}
