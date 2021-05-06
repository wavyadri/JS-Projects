// use let since these will need to be updated 
let sequence = []; //computer
let humanSequence = []; // human
let level = 0;

const startButton = document.querySelector('.js-start');
const info = document.querySelector('.js-info');
const heading = document.querySelector('.js-heading');
const tileContainer = document.querySelector('.js-container');

resetGame = (text) => {
    alert(text);
    sequence = [];
    humanSequence = [];
    level = 0;
    startButton.classList.remove('hidden');
    heading.textContent = 'Simon Game';
    info.classList.add('hidden');
    tileContainer.classList.add('unclickable');
}

humanTurn = (level) => {
    tileContainer.classList.remove('unclickable');
    info.textContent = `Your turn: ${level} Tap${level > 1 ? 's' : ''};`
}

activateTile = (color) => {
    const tile = document.querySelector(`[data-tile='${color}']`);
    const sound = document.querySelector(`[data-sound='${color}']`);

    tile.classList.add('activated');
    sound.play();

    setTimeout(() => {
        tile.classList.remove('activated');
    }, 300);
}

playRound = (nextSequence) => {
    nextSequence.forEach((color, index) => {
        setTimeout(() => {
            activateTile(color);
        }, (index + 1) * 600); ///////////
    });
}

nextStep = () => {
    const tiles = ['red', 'green', 'blue', 'yellow'];
    const random = tiles[Math.floor(Math.random() * tiles.length)];
    return random;
}

nextRound = () => {
    level++;

    tileContainer.classList.add('unclickable');
    info.textContent = 'Wait for the computer';
    heading.textContent = `Level ${level} of 20`;

    // copy all elements (spread) in the 'sequence' array to 'nextSequence'
    const nextSequence = [...sequence];
    // add next random element
    nextSequence.push(nextStep());
    playRound(nextSequence);

    sequence = [...nextSequence];
    setTimeout(() => {
        humanTurn(level);
    }, level * 600 + 1000);
}

handleClick = (tile) => {
    const index = humanSequence.push(tile) - 1;
    const sound = document.querySelector(`[data-sound='${tile}']`);
    sound.play();

    const remainingTaps = sequence.length - humanSequence.length;

    if (humanSequence[index] !== sequence[index]) {
        resetGame('Oops! Game over, you pressed the wrong tile.');
        return;
    }

    // human gets it right
    if (humanSequence.length === sequence.length) {
        if (humanSequence.length === 20) {
            resetGame('Congrats! You completed all the levels!');
            return;
        }

        humanSequence = [];
        info.textContent = 'Success! Keep going!';
        setTimeout(() => {
            nextRound();
        }, 1000);
        return;
    }

    info.textContent = `Your turn: ${remainingTaps} Tap${remainingTaps > 1 ? 's' : ''}`;
}

startGame = () => {
    startButton.classList.add('hidden');
    info.classList.remove('hidden');
    info.textContent = 'Wait for the computer';
    nextRound();
}

startButton.addEventListener('click', startGame);
tileContainer.addEventListener('click', e => {
    const {tile} = e.target.dataset;
    if (tile) {
        handleClick(tile);
    }
})
