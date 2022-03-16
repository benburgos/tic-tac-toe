console.log('JS is up and running!')

/*----- Constants -----*/
// X & O - Players
const PLAYERS = {
    '1': 'X',
    '-1': 'O',
};

// Winning Combinations
/*
Visuzlization of the grid!
012
345
678
*/
const COMBOS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


/*----- App's State (Variables) -----*/
// Where the users click (where to put an X or O) - make sure the square is not taken first
let board; // a data variable that stores the board positions, and what they hold

// Whose turn it is
let turn; // will be either X or O

// When we have a winner or if there is a tie - if game is ongoing
let winner; // this can be 3 things, win, lose, tie, or null

// Bonus: If the player wants to quit/end the game early
// Bonus: Score for games won
// Bonus: Move time limit

/*----- Cached Element References -----*/
// Message Container - h2
const domMessage = document.querySelector('h2');
// The Game Board
const gameBoard = document.querySelector('game-board')
// The Game Squares
const domSquares = document.querySelectorAll('.square');
// A 'Reset Game' Button
const resetButton = document.querySelector('button');


/*----- Event Listeners -----*/
// Mouse click on the 9 squares - using event delegation
gameBoard.addEventListener('click', handleMove);
// Mouse click on the reset button
resetButton.addEventListener('click', init);

// Optional - User intiiates game start

/*----- Functions -----*/
// Initialize (start) game

// Handle user interaction

// Render messages to the DOM

// Check for 3 in a row - or winner (main game logic)
