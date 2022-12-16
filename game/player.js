export function Player(){
    this.sprite = document.getElementById("player")
    this.position = {hori: 400, vert:400}
    this.direction = {directionx: 0, directiony: 0}
    this.stepx = 0.5
    this.stepy = 0.5
    this.movex = function(){
            if ( this.position.hori + 1 < 760 && this.position.hori - 1 > 0){
        this.position.hori += this.stepx * this.direction.directionx
        this.sprite.style.left = this.position.hori + "px"
        this.stepx = 0.5
    } else if (this.position.hori + 1 >= 760) {
        this.position.hori += this.stepx * -1
       this.sprite.style.left = this.position.hori + "px"

    }else if (this.position.hori - 1 <= 0) {
        this.position.hori += this.stepx * 1
        this.sprite.style.left = this.position.hori + "px"
    }
    }
     this.movey = function(){
    if ( this.position.vert + 1 < 760 && this.position.vert - 1 > 0){
        this.position.vert += this.stepy * this.direction.directiony
        this.sprite.style.top = this.position.vert + "px"
        this.stepy = 0.5

    } else if ( this.position.vert - 1 <= 0) {
        this.position.vert += this.stepy * 1
        this.sprite.style.top = this.position.vert + "px"
    } else if ( this.vert + 1 >= 760) {
        this.position.vert += this.stepy * - 1
        this.sprite.style.top = this.position.vert + "px"
    }
 }
}

