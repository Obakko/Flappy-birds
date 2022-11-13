//Созвдаем на поле дома и поле внизу
let building = []
let field = []

class Building {
    constructor(dx, dy, dWidth, dHieght) {
        this.dx = dx
        this.dy = dy
        this.dWidth = dWidth
        this.dHieght = dHieght
    }

    creatPicture(){
        ctx.drawImage(buildingImg,this.dx, this.dy, this.dWidth, this.dHieght)
    }

    update() {
        this.dx = this.dx -2
    }
}

class Road extends Building {
    creatPicture () {
        ctx.drawImage(roadImg,this.dx, this.dy, this.dWidth, this.dHieght)
    }
}
// создание Домов в правой части 
function creatElement () {
    return new Building( 300, 300, 300, 100)
}

// создание Дороги в правой части
function creatElementRoad () {
    return new Road (300,350,300,50)
}

building = [new Building(0, 300, 300, 100), creatElement ()]
field = [new Road(0,350,300,50),creatElementRoad()]

function animationElementAtField (arr,elem) {
    if (arr[0].dx === -300) {
        arr.shift()
        arr.push(elem)
    }
    for (let i=0; i<arr.length; i++){
        arr[i].creatPicture()
        arr[i].update()
    }   
}