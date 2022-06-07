const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const score = document.querySelector('.score-counter');
const record = document.querySelector('.record-counter');
const startGame = document.querySelector('.start-game');
const gameBoard = document.querySelector('.game-board');
var recordCounter = 0;
var scoreCounter = 0;
var endGame = false;

startGame.onclick = function(){
  endGame = false;
  gameBoard.style.display = "flex";
  startGame.disabled = true;
  pipe.classList.add('pipe-physical');
  clouds.classList.add('clouds-physical');
  defaultStyle();
  const jump = () => {
    if(!endGame){
      mario.classList.add("jump-mario");
      
      setTimeout(() =>{
        mario.classList.remove("jump-mario");
      }, 500);
    }
    
  }
  
  const timer = setInterval(() => {
    scoreCounter++;
    score.innerHTML = scoreCounter;
    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
    
    //console.log(marioPosition);
    if(pipePosition <= 170 && pipePosition > 0 && marioPosition < 40){
      //pipe.classList.remove('pipe-physical');
      //clouds.classList.remove('clouds-physical');
      if(recordCounter < scoreCounter){
        recordCounter = scoreCounter;
        record.innerHTML = recordCounter;
      }
      pipe.style.animation = "none";
      pipe.style.left = `${pipePosition}px`;
  
      mario.src = "drawable/mario-gameover.png";
      mario.style.width = "70px";
      mario.style.animation = "none";
      mario.style.marginLeft = "40px";
      mario.style.bottom = `${marioPosition + 50}px`;
  
      clouds.style.animation = "none";
      clouds.style.left = `${cloudsPosition}px`;
      startGame.disabled = false;
      endGame = true;
      scoreCounter = 0;
      clearInterval(timer);
    }
  }, 10);
  
  addEventListener("keydown", jump);
  
}

function defaultStyle(){
  pipe.style.animation = "";
  pipe.style.left = "";

  mario.style.animation = "";
  mario.src = "drawable/mario-running.gif";
  mario.style.width = "250px";
  mario.style.bottom = "-60px";
  mario.style.marginLeft = "";

  clouds.style.animation = "";
  clouds.style.left = "";
}

