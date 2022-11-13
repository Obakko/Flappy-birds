//создание массива с обьектами препятствий
let arrObstacle = []

class Obstacle {
    constructor () {
        this.dx = 300
        this.y1 = - Math.floor(Math.random()*200)
        this.y2 = this.y1+250 + 400/4
    }
    creatPicture () {
        ctx.drawImage(pipeDownImg, this.dx,this.y1,50,250)
        ctx.drawImage(pipeUpImg, this.dx,this.y2,50 ,250)
    }
    
    update () {
        this.dx -= speed
    } 
}
function creatNewObstacle () {
    return new Obstacle()
}
arrObstacle = [creatNewObstacle()]

function animationElementAtObstacle() {
    if (arrObstacle[arrObstacle.length-1].dx < 50) {
        arrObstacle.push(creatNewObstacle())
    } else if(arrObstacle[0].dx < -52)  {
        arrObstacle.shift()
    }
    for (let i=0; i<arrObstacle.length; i++){
        arrObstacle[i].creatPicture()
        arrObstacle[i].update()
    }
}