const scissors = document.getElementById ('scissors');
const rock = document.getElementById ('rock');
const paper = document.getElementById ('paper');
const npc = document.getElementById ('npc');

function rps (n) {
  let myGame = event.target.id;
  let message;
  const srp = ['scissors', 'rock', 'paper'];
  let com = srp[Math.floor (Math.random () * 3)];

  if (myGame === com) {
    message = '비겼다람쥐~ 다시하리보~';
  }
  if (myGame == 'scissors') {
    switch (com) {
      case 'scissors':
        message = '비겼다람쥐~ 다시하리보~';
        break;
      case 'rock':
        message = '음하하하핫! 내가 이겼다람쥐~';
        npc.classList.add('npcmove');
        break;
      case 'paper':
        message = '으아앗! 다시 한판하자~';
        break;
    }
  } else if (myGame == 'rock') {
    switch (com) {
      case 'scissors':
        message = '으아앗! 다시 한판하자~';
        break;
      case 'rock':
        message = '비겼다람쥐~ 다시하리보~';
        break;
      case 'paper':
        message = '음하하하핫! 내가 이겼다람쥐~';
        npc.classList.add('npcmove');
        break;
    }
  } else if (myGame == 'paper') {
    switch (com) {
      case 'scissors':
        message = '음하하하핫! 내가 이겼다람쥐~';
        npc.classList.add('npcmove');
        break;
      case 'rock':
        message = '으아앗! 다시 한판하자~';
        break;
      case 'paper':
        message = '비겼다람쥐~ 다시하리보~';
        break;
    }
  }

  document.getElementById ('playgame').innerHTML = message;
  document.getElementById ('mrps').innerHTML = trans (myGame);
  document.getElementById ('crps').innerHTML = trans (com);
  document.getElementById ('mimg').src = "images/" +myGame + ".png";
  document.getElementById ('cimg').src = "images/" +com + ".png";
}
npc.addEventListener('animationend', classrm, false);
function classrm(){
  npc.classList.remove('npcmove');
}

function trans (ts) {
  let tss = '모름';
  switch (ts) {
    case 'scissors':
      tss = '가위';
      break;
    case 'rock':
      tss = '바위';
      break;
    case 'paper':
      tss = '보';
      break;
  }
  return tss;
}

scissors.addEventListener ('click', rps);
rock.addEventListener ('click', rps);
paper.addEventListener ('click', rps);
