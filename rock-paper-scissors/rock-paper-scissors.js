let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
  // Convert playerSelection to lowercase for case-insensitive comparison
  playerSelection = playerSelection.toLowerCase();
  // Define the possible outcomes
  const outcomes = {
    rock: {
      beats: 'scissors',
    },
    paper: {
      beats: 'rock',
    },
    scissors: {
      beats: 'paper',
    }
  };

  // Get the computer's choice
  const choices = ['rock', 'paper', 'scissors'];
  let computerSelection = choices[Math.floor(Math.random() * choices.length)];  

  // Check if it's a tie
  if (playerSelection === computerSelection) {
    document.getElementById('result').textContent = "It's a tie!";
    return;
  }

  // Check if player wins
  if (outcomes[playerSelection].beats === computerSelection) {
    document.getElementById('result').textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  }

  else {
  // Player loses
  document.getElementById('result').textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  computerScore++;
  }
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;

  // Check who won after 5 rounds then reset the game
  if (playerScore == 5 | computerScore === 5) {
  let winner = playerScore > computerScore ? 'Player' : 'Computer';
  alert(`${winner} has won the game!`);
  playerScore = 0;
  computerScore = 0;
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
}
return
}


const rockButton = document.querySelector('#rock-btn');
rockButton.addEventListener('click', function() {
  playRound('rock');
});

const paperButton = document.querySelector('#paper-btn');
paperButton.addEventListener('click', function() {
  playRound('paper');
});

const scissorsButton = document.querySelector('#scissors-btn');
scissorsButton.addEventListener('click', function() {
  playRound('scissors');
});

