'use strict';

let currentscore = 0;
let activePlayer = 0;
let totalscorep0 = 0;
let totalscorep1 = 0;
let playing = true;

//
const scorep1 = document.querySelector('#score--0');
const scorep2 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let totalscore0 = document.querySelector('#score--0');
let totalscore1 = document.querySelector('#score--1');

scorep1.textContent = 0;
scorep2.textContent = 0;
dice.classList.add('hidden');

const rollbtn = document.querySelector('.btn--roll');
const newbtn = document.querySelector('.btn--new');
const holdbtn = document.querySelector('.btn--hold');

const scorecheck = function (x) {
  if (x >= 30) {
    document.querySelector(`#name--${activePlayer}`).textContent = `Player ${
      activePlayer + 1
    } is Winner`;

    document.querySelector(
      'body'
    ).style.backgroundImage = `  linear-gradient(to top left, #799F0C 0%, #FFE000 100%) `;
    playing = false;
    dice.classList.add('hidden');
  } else {
    activeplayerstate();
  }
};
const activeplayerstate = function () {
  // if(activePlayer===0){
  //    player0.classList.remove('player--active')
  //    player1.classList.add('player--active')
  // }
  // else
  // {
  //    player0.classList.add('player--active')
  //    player1.classList.remove('player--active')
  // }

  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');

  activePlayer = activePlayer === 0 ? 1 : 0;
};

rollbtn.addEventListener('click', function () {
  if (playing) {
    let randomno = Math.trunc(Math.random() * 6 + 1);

    currentscore += randomno;

    dice.classList.remove('hidden');
    dice.src = `dice-${randomno}.png`;

    if (randomno !== 1)
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentscore;
    else {
      currentscore = 0;
      document.querySelector(`#current--${activePlayer}`).textContent = 0;

      activeplayerstate();
    }
  }
});

holdbtn.addEventListener('click', function () {
  if (playing) {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    if (activePlayer === 0) {
      totalscorep0 += currentscore;
      totalscore0.textContent = totalscorep0;
      currentscore = 0;

      scorecheck(totalscorep0);
    } else {
      totalscorep1 += currentscore;
      totalscore1.textContent = totalscorep1;
      currentscore = 0;
      scorecheck(totalscorep1);
    }
  }
});

const newgame = function () {
  currentscore = 0;
  totalscorep1 = 0;
  totalscorep0 = 0;
  playing = true;

  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  totalscore0.textContent = 0;
  totalscore1.textContent = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  document.querySelector(`#name--0`).textContent = `Player 1`;
  document.querySelector(`#name--1`).textContent = `Player 2`;
  activePlayer = 0;
  document.querySelector(
    'body'
  ).style.backgroundImage = `  linear-gradient(to top left, #753682 0%, #bf2e34 100%) `;
};
newbtn.addEventListener('click', newgame);
