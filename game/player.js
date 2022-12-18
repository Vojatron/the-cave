export function Player() {
  this.sprite = document.getElementById("player")
  this.position = { hori: 400, vert: 400 }
  this.direction = { x: 0, y: 0 }
  this.stepx = 20
  this.stepy = 20
  this.width = 40
  this.height = 40
}

Player.prototype.update = function () {
  this.movex()
  this.movey()
}

Player.prototype.draw = function () {
  this.sprite.style.left = this.position.hori + "px"
  this.sprite.style.top = this.position.vert + "px"
}

Player.prototype.movex = function () {
  if (this.position.hori + this.stepx * this.direction.x <= 800 - this.width && this.position.hori + this.stepx * this.direction.x >= 0) {
    this.position.hori += this.stepx * this.direction.x
  } 

  if (this.direction.x == 1 ){
    this.sprite.setAttribute("class", "right")
  } else if (this.direction.x == -1){
    this.sprite.setAttribute("class", "left")
    }
  }


Player.prototype.movey = function () {
  if (this.position.vert <= 760 - this.stepy * this.direction.y - this.height && this.position.vert + this.stepy * this.direction.y >= 0) {
    this.position.vert += this.stepy * this.direction.y
    }

    if (this.direction.y == 1 ){
      this.sprite.setAttribute("class", "front")
    } else if (this.direction.y == -1){
      this.sprite.setAttribute("class", "back")
      }
  }





