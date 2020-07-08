// import functions and grab DOM elements
const button = document.querySelector('#guess-button');
const current = document.querySelector('#current');
const wins = document.querySelector('#wins');
const losses = document.querySelector('#losses');
// initialize state
let winsData = 0;
let totalGuesses = 0;

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    console.log('hello');
    totalGuesses++;

    const checkedRadio = document.querySelector('input:checked');
    console.log('checkedRadio, checkedRadio.value');

    const userGuess = checkedRadio.value;

    /*generate random correct answer: heads or tails*/
    //initialize local state
    let correctFlip = null;
    const myNumber = Math.random();

    //can use ternary -- const correctFlip = Math.random() < .5 ? 'heads' : 'tails';
    if (myNumber < .5) {
        correctFlip = 'tails';
    } else {
        correctFlip = 'heads';
    }

    console.log('correctFlip', 'correctFlip');
    /*compare the user guess to the correct answer*/
    if (userGuess === correctFlip) {
        console.log('win');

        current.textContent = 'You win!';
        winsData++;
    } else {
        console.log('loss');

        current.textContent('You lose.');
    }
    //set textContent to total
    totalGuesses.textContent = 'total' + totalGuesses;
    wins.textContent = 'winsData' + wins;
    losses.textContent = 'losses' + (totalGuesses - winsData);
    current.textContent = 'current' + totalGuesses;
})