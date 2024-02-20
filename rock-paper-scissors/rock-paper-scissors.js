function playRound(playerSelection, computerSelection) {
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

  // Check if it's a tie
  if (playerSelection === computerSelection) {
    console.log('It\'s a tie!');
    return [0, 0];
  }

  // Check if player wins
  if (outcomes[playerSelection].beats === computerSelection) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    return [1, 0];
  }

  // Player loses
  console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  return [0, 1];
}

function playGame() {
  // Define the possible choices
  const choices = ['rock', 'paper', 'scissors'];
  let playerScore = 0;
  let computerScore = 0;

  // Play 5 rounds
  for (let i = 0; i < 5; i++) {
    // Get the player's choice
    let playerChoice = prompt('Enter your choice (rock, paper, or scissors):');

    // Check if the player's choice is valid
    if (!choices.includes(playerChoice)) {
      console.log('Invalid choice. Please try again.');
      i--;
      continue;
    }

    // Get the computer's choice
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Play the round
    let result = playRound(playerChoice, computerChoice);
    playerScore += result[0];
    computerScore += result[1];
    console.log(`Round ${i + 1}: Player ${playerScore}, Computer ${computerScore}`);
  }
  console.log(`Final score: Player ${playerScore}, Computer ${computerScore}`);
}