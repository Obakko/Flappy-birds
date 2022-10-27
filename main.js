let canvas = document.getElementById("canvas-birds");
let ctx = canvas.getContext('2d');
let widthCanvas = canvas.width;
let hieghtCanvas = canvas.hieght;
let speed = 2;
let chek = 0;
let best = 0;
let indexStop = true;
let indexStart = true;
let acceleration = 0.1
let jumpBird = -3

let flyAudio = new Audio('sounds/sfx_wing.ogg');
let pointAudio = new Audio('sounds/sfx_point.ogg')

let startWordImg = new Image();
let tapBirdImg = new Image();
let endWordImg = new Image();
let startButtonImg = new Image();
let boardGameImg = new Image();
let birdsImg = new Image();
let pipeUpImg = new Image();
let pipeDownImg = new Image();
let buildingImg = new Image();
let roadImg = new Image();

tapBirdImg.src = 'image/tap.png'
startWordImg.src = 'image/start-word.png'
endWordImg.src = 'image/game-over.png'
startButtonImg.src = 'image/start-button.png'
boardGameImg.src = 'image/board.png'
buildingImg.src = 'image/building.png';
pipeDownImg.src = 'image/pipe-down.png'
pipeUpImg.src = 'image/pipe-up.png'
birdsImg.src = 'image/birds.png'
roadImg.src = 'image/road.png';

function getDataInLocalStorage () {
    if (best === chek) {
        let seriaResult = JSON.stringify(best)
        localStorage.setItem('best', seriaResult)
    }
}

function setRecord() {
    let setResult = localStorage.getItem('best')
    if(!null) best = setResult
}
setRecord()

let creatWordGameOver = function () {
    ctx.drawImage(endWordImg, 50, 180, 200, 50)
    ctx.font = 'bold 12px Flappy Bird Regular';
    ctx.fillText('Нажмите ПРОБЕЛ чтобы начать заново', 30, 380)
    return indexStop = false
}

let getReady = function() {
    ctx.clearRect(0,0, 400, 600)
    ctx.drawImage(tapBirdImg, 18, 101,87, 75)
    ctx.drawImage(startWordImg, 50, 180, 200, 50)
    animationElementAtField(building,creatElement())
    animationElementAtField(field, creatElementRoad())
    creatBoard()
    ctx.font = 'bold 12px Flappy Bird Regular';
    ctx.fillText('Чтобы начать нажмите правую кнопку мыши', 25, 380)
    if(indexStart) requestAnimationFrame(getReady)
}

let runField = function() {
    ctx.clearRect(0,0, 400, 600)
    animationElementAtField(building,creatElement())
    animationElementAtObstacle()
    animationElementAtField(field, creatElementRoad())
    animationElementAtBirds()
    creatBoard()
    if (bird.y<=0) {
        bird.y = 0
        jump = 0.5
    }
    if (arrObstacle[0].dx < 74 && arrObstacle[0].dx > 12) {
        if (arrObstacle[0].y1+250 > bird.y || bird.y+20 > arrObstacle[0].y2 ) {
            getDataInLocalStorage()
            creatWordGameOver()
        }
    }
    if (bird.y > 350) {
        getDataInLocalStorage
        creatWordGameOver()
    }
    if (arrObstacle[0].dx == bird.x || arrObstacle[0].dx == bird.x+1) {
        chek += 1
        pointAudio.play()
        if (chek === 10) speed +=1
        if (chek === 20) {
            acceleration +=0.1
            speed +=2
            jumpBird = -4
        } 
    }
    if (indexStop) requestAnimationFrame(runField)  
}


function flyBird (event) {
    event.preventDefault
    if (event.button === 0) {
        if(indexStart)runField()
        flyAudio.play()
        indexStart = false
        jump = jumpBird
    }
}

function resetGame(event) {
    event.preventDefault
    if (event.keyCode == 32 && !indexStart && !indexStop) {
        location.reload()
    }
}

roadImg.onload = getReady()
document.addEventListener('mousedown',flyBird)
document.addEventListener('keydown',resetGame)