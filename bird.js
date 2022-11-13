let frame = 0
let jump = 0

class Birds {
    constructor(x, y,wings) {
        this.x = x
        this.y = y
        this.wings = wings
    }

    createPicture () {
        ctx.drawImage(birdsImg,0 , this.wings, 34, 26, this.x,this.y, 25,20)
    }

    update () {
        this.y += jump
        jump +=acceleration
    }
}


let bird =  new Birds(50, 100, 26)

function animationElementAtBirds () {
    frame += 0.3
    bird.wings = Math.floor((frame % 9) / 3) * 26
    bird.createPicture()
    bird.update() 
}


