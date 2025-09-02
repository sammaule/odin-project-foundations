// Browser-based Tic Tac Toe Game using Factory Functions and Module Pattern

// Player Factory Function
const Player = (name, symbol) => {
    return { name, symbol };
};

// Gameboard Module (IIFE - Single Instance)
const Gameboard = (() => {
    let board = ['', '', '', '', '', '', '', '', ''];

    const getBoard = () => board;

    const setCell = (index, symbol) => {
        if (board[index] === '') {
            board[index] = symbol;
            return true;
        }
        return false;
    };

    const getCell = (index) => board[index];

    const reset = () => {
        board = ['', '', '', '', '', '', '', '', ''];
    };

    const isFull = () => {
        return board.every(cell => cell !== '');
    };

    return {
        getBoard,
        setCell,
        getCell,
        reset,
        isFull
    };
})();

// Display Controller Module (IIFE - Single Instance)
const DisplayController = (() => {
    const gameContainer = document.getElementById('game-container');
    const boardElement = document.getElementById('gameboard');
    const messageElement = document.getElementById('message');
    const restartButton = document.getElementById('restart-btn');
    const playerXNameInput = document.getElementById('player-x-name');
    const playerONameInput = document.getElementById('player-o-name');
    const startButton = document.getElementById('start-btn');
    const setupSection = document.getElementById('setup-section');
    const gameSection = document.getElementById('game-section');

    const renderBoard = () => {
        boardElement.innerHTML = '';
        const board = Gameboard.getBoard();
        
        board.forEach((cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.dataset.index = index;
            cellElement.textContent = cell;
            
            cellElement.addEventListener('click', () => {
                GameController.handleCellClick(index);
            });
            
            boardElement.appendChild(cellElement);
        });
    };

    const updateMessage = (message) => {
        messageElement.textContent = message;
    };

    const showGameSection = () => {
        setupSection.style.display = 'none';
        gameSection.style.display = 'block';
    };

    const showSetupSection = () => {
        setupSection.style.display = 'block';
        gameSection.style.display = 'none';
    };

    const getPlayerNames = () => {
        return {
            playerX: playerXNameInput.value || 'Player X',
            playerO: playerONameInput.value || 'Player O'
        };
    };

    const highlightWinningCells = (winningCombination) => {
        const cells = boardElement.querySelectorAll('.cell');
        winningCombination.forEach(index => {
            cells[index].classList.add('winning-cell');
        });
    };

    // Event listeners
    restartButton.addEventListener('click', () => {
        GameController.restartGame();
    });

    startButton.addEventListener('click', () => {
        GameController.startGame();
    });

    return {
        renderBoard,
        updateMessage,
        showGameSection,
        showSetupSection,
        getPlayerNames,
        highlightWinningCells
    };
})();

// Game Controller Module (IIFE - Single Instance)
const GameController = (() => {
    let players = [];
    let currentPlayerIndex = 0;
    let gameActive = false;

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    const startGame = () => {
        const playerNames = DisplayController.getPlayerNames();
        players = [
            Player(playerNames.playerX, 'X'),
            Player(playerNames.playerO, 'O')
        ];
        
        currentPlayerIndex = 0;
        gameActive = true;
        
        Gameboard.reset();
        DisplayController.showGameSection();
        DisplayController.renderBoard();
        DisplayController.updateMessage(`${getCurrentPlayer().name}'s turn (${getCurrentPlayer().symbol})`);
    };

    const getCurrentPlayer = () => players[currentPlayerIndex];

    const switchPlayer = () => {
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    };

    const handleCellClick = (index) => {
        if (!gameActive) return;

        if (Gameboard.setCell(index, getCurrentPlayer().symbol)) {
            DisplayController.renderBoard();
            
            if (checkWin()) {
                DisplayController.updateMessage(`${getCurrentPlayer().name} wins! 🎉`);
                gameActive = false;
                return;
            }
            
            if (Gameboard.isFull()) {
                DisplayController.updateMessage("It's a draw! 🤝");
                gameActive = false;
                return;
            }
            
            switchPlayer();
            DisplayController.updateMessage(`${getCurrentPlayer().name}'s turn (${getCurrentPlayer().symbol})`);
        }
    };

    const checkWin = () => {
        const board = Gameboard.getBoard();
        const currentSymbol = getCurrentPlayer().symbol;

        for (let combination of winningCombinations) {
            if (combination.every(index => board[index] === currentSymbol)) {
                DisplayController.highlightWinningCells(combination);
                return true;
            }
        }
        return false;
    };

    const restartGame = () => {
        gameActive = false;
        DisplayController.showSetupSection();
    };

    return {
        startGame,
        handleCellClick,
        restartGame
    };
})();

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    DisplayController.showSetupSection();
});
