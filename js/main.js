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
const gameBoard = document.querySelector('.game-board')
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
// init()
function init() {
    console.log('Init function called!')
    // we need a data set to keep track of our player moves
    board = new Array(9).fill(null); // creates an array with nine positions, .fill will tell it what to put in those positions
    turn = 1; // X goes first, referencing the PLAYERS object
    winner = null; // set initial winner to no one
    render();
};

// start the game on page load
init();

// Handle user interaction
// handleMove()
function handleMove(event) {
    console.log('Handlemove function called!')
    console.log(`${event.target.dataset.square} was clicked!`) // .dataset will pull the data-square values
    const squareNumber = parseInt(event.target.dataset.square); // stores the clicked box as a variable, because it's a string, we need to use parseInt
    if (board[squareNumber] || winner) { // checks if the box clicked is already populated OR if winner is not null returns out if true
        return
    }
    board[squareNumber] = turn // set the index of the board array so we know that the spot has been claimed
    winner = checkForWinner(); // check for winner
    turn *= -1 // sets the turn to the next player, can also be written turn = turn * -1
    render() // renders the message to the user
};

// Check for 3 in a row - or winner (main game logic)
function checkForWinner() {
    console.log('Checkforwin function called!')
    // Loops through all possible winning combinations and checks if the current selections match
    for (let index in COMBOS) {
        if (
            board[COMBOS[index][0]] === turn &&
            board[COMBOS[index][1]] === turn &&
            board[COMBOS[index][2]] === turn
            ) {
                return turn
            }
    }

    if (board.includes(null)) {
        return null
    }
    return 'tie'
};

// Render messages to the DOM
// render()
function render() {
    console.log('Render function called')
    // puts an X or O on the board, mapped from the board variable
    board.forEach(function(value, index) {
        domSquares[index].textContent = PLAYERS[value]
    })
    // displays if there is a winner, a tie, or whose turn it is
    if (!winner) {
        domMessage.textContent = `${PLAYERS[turn]}'s turn` // tell player whose turn it is
    } else if (winner === 'tie') {
        domMessage.textContent = 'Tie game!' // tell the player it's a tie
    } else {
        domMessage.textContent = `${PLAYERS[winner]} wins!` // tell the player the winner
    }
};