const bricks = document.querySelectorAll('.brick');
const scoreBoard = document.querySelector('.score');
const cameras = document.querySelectorAll('.camera');
const button = document.querySelector('#start');
let lastBrick;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomBrick(bricks) {
  const idx = Math.floor(Math.random() * bricks.length);
  const brick = bricks[idx];

  if(brick === lastBrick) {
    console.log('Same one');
    return randomBrick(bricks);
  }

  lastBrick = brick;
  return brick;
}

function peep() {
  const time = randomTime(200, 1000);
  const brick = randomBrick(bricks);
  brick.classList.add('up');
  setTimeout(() => {
    brick.classList.remove('up');
    if(!timeUp) peep();
  }, time);
}

function startGame() {
startTimer();  
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  button.style.visibility = 'hidden';
  peep();
  setTimeout(() => {
    timeUp = true;
    button.innerHTML = 'Game over?';
    button.style.visibility = 'visible';
  }, 10000);
}

function bonk(e) {
  if(!e.isTrusted) return;
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

cameras.forEach(cameras => cameras.addEventListener('click', bonk));


function startTimer(){
            var timeleft = 10;
            var downloadTimer = setInterval(function(){
              document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
              timeleft -= 1;
              if(timeleft <= 0){
                clearInterval(downloadTimer);
                document.getElementById("countdown").innerHTML = "You're Fucked!";
                 //document.getElementById("btn").style.display = "none"; 
              }
            }, 1000);
        }