
class Board {
    constructor (score,best) {
        this.score = score
        this.best = best
    }

    createPicture() {
        ctx.drawImage(boardGameImg, 240, 10, 50, 70)

        ctx.font = 'bold 18px Flappy Bird Regular';
        ctx.fillText(`${this.score}`, 255, 43)
        ctx.fillText(`${this.best}`,255, 70)

        //ctx.drawImage(startButtonImg, )
    }
}

function creatBoard() {
    if (chek > best) {
        best = chek
    }
    let board = new Board (chek,best)
    board.createPicture()
}

