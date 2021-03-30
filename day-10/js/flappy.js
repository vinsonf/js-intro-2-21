// get element references
const player = document.querySelector('#player');
const hole = document.querySelector('#hole');
const scoreKeeper = document.querySelector('#scoreKeeper');
const highscore = document.querySelector('#highscore');

let highScore = localStorage.getItem('highScore') || 0;
let flapping = false;
let flapCount = 0;
let score = 0;
let hit = false;

highscore.innerHTML = highScore;
scorekeeper.innerHTML = score;

document.addEventListener('keyup', function(event) {
    flapping = true;
})

setInterval( function() {
    if (flapping) {
        if (flapCount < 4) {
            move(-6);
        } else if (flapCount < 10){
            move(-4);
        } else if (flapCount < 15) {
            move(-2);
        }
        flapCount++;
        if (flapCount > 20) {
            flapCount = 0;
            flapping = false;
        }
    } else {
        move(3);
    }
    hitDetection();
}, 10);

hole.addEventListener('animationiteration', function() {
    const random = Math.random() * 300;
    hole.style.top = random + 'px';
    if (hit) {
        if (score > highScore) {
            localStorage.setItem('highScore', score);
        } 
      score = 0;
    } else {
        score++; 
        scorekeeper.innerHTML = score;
    }
    highscore.innerHTML = highScore;
    scorekeeper.innerHTML = score;
    hit = false;
})

function getStyle( element, prop ) {
    return parseInt(window.getComputedStyle(element)
    .getPropertyValue(prop));  
}

function move(number) {
    const computed = getStyle(player, 'top');
    if (computed + number < 460 && computed + number > 0) {
        player.style.top = (computed + number) + 'px';
    }
}

function getObjectStyles(element) {
    return {
        left: getStyle(element, 'left'),
        top: getStyle(element, 'top'),
        right: getStyle(element, 'left') + getStyle(element, 'width'),
        bottom: getStyle(element, 'top') + getStyle(element, 'height'),
    }
}

function hitDetection() {
    const holeData = getObjectStyles(hole);
    if ( holeData.left < 40) {
        const playerData = getObjectStyles(player);
        if (
            playerData.top < holeData.top || 
            playerData.bottom > holeData.bottom
            ) {
            hit = true;
        }
    }
}