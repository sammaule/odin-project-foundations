const gridContainer = document.querySelector('#grid-container');

// Function to create the grid
function createGrid(gridSize) {
    gridContainer.innerHTML = '';
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            console.log('i:', i, 'j:', j);
            const gridItem = document.createElement('div');
            gridItem.style.width = `calc(960px / ${gridSize})`;
            gridItem.style.height = `calc(960px / ${gridSize})`;
            gridItem.style.border =  `calc(5px / ${gridSize}) solid black`;
            gridItem.classList.add("grid-item");
            gridItem.addEventListener('mouseover', function() {
                // Generate random color
                const randomColor = getRandomColor();
                // Apply random color to the background
                gridItem.style.backgroundColor = randomColor;
        });
        gridContainer.appendChild(gridItem);
    }
}
};

createGrid(16);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
    const gridSize = parseInt(prompt('How many pixels wide should the grid be?'));
    if (isNaN(gridSize) || gridSize <= 0) {
        alert('Invalid input. Please enter a valid positive number.');
        return;
    }

    createGrid(gridSize);
});

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}