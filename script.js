'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const currentPlayer0 = document.querySelector('.player--0');
const currentPlayer1 = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById('current--' + activePlayer).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentPlayer0.classList.toggle('player--active');
  currentPlayer1.classList.toggle('player--active');
};

//rolling a dice
btnroll.addEventListener('click', function () {
  if (playing) {
    //1. Generating a andom dice roll
    const dice = Math.floor(Math.random() * 6) + 1;

    //2. display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = 'dice-' + dice + '.png';

    //3. check for roll 1 if true change player
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;

      document.getElementById('current--' + activePlayer).textContent =
        currentScore;
    } else {
      //switch player
      switchPlayer();
    }
  }
});

btnhold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;

    document.getElementById('score--' + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      //finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector('.player--' + activePlayer)
        .classList.add('player--winner');
      document
        .querySelector('.player--' + activePlayer)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  playing = true;

  diceEl.classList.add('hidden');
  document;
  currentPlayer0.classList.remove('player--winner');
  currentPlayer1.classList.remove('player--winner');
  currentPlayer0.classList.add('player--active');
  currentPlayer1.classList.remove('player--active');
});
