import { Player } from "./player.js"
import { Trap } from "./trap.js"
import { Arrow } from "./arrow.js"
import { score } from "./score.js"

const map = document.getElementById("map")

const traps = []

const player = new Player()
const arrow1 = new Arrow("down", 400 , 400)
const arrow2 = new Arrow("left", 100 , 100)

function createTrapsArray() {
  let startingPointTop = 20
  let startingPointDown = 20
  let startingPointLeft = 20
  let startingPointRight = 20

  for (let i = 1; i <= 10; i++) {
    var trap = new Trap("top", startingPointTop, 0)
    traps.push(trap)
    startingPointTop += 80
  }
  for (let j = 1; j <= 10; j++) {
    var trap = new Trap("down", startingPointDown, 780)
    traps.push(trap)
    startingPointDown += 80
  }
  for (let k = 1; k <= 10; k++) {
    var trap = new Trap("left", 0, startingPointLeft)
    traps.push(trap)
    startingPointLeft += 80
  }
  for (let l = 1; l <= 10; l++) {
    var trap = new Trap("right", 780, startingPointRight)
    traps.push(trap)
    startingPointRight += 80
  }
}

function gameLoop() {
  update()
  draw()

}

function update() {

  // var arrows =  createArrows(traps)
  // for (let i=0; i<arrows.length; i++){
  //   console.log(arrows[i])
  //   arrows[i].candyFly(map)
  // }

  setPlayerDirection()
  player.update()
  arrow1.candyFly()
  arrow2.candyFly()

}

function draw() {
// var arrows =  createArrows(traps)
  // for (let i=0; i<arrows.length; i++){
  //   console.log(arrows[i])
  //   arrows[i].draw(map)
  // }
  arrow1.draw(map)
  arrow2.draw(map)
  player.draw()
}

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false
}

function keyEvents(e) {
  if (keys[e.code] !== undefined) { // check if its a key we are listening for
    keys[e.code] = event.type === "keydown" // set the state up or down
    e.preventDefault()  // stop default action
  }
}

addEventListener("keyup", keyEvents)  // set up the listeners
addEventListener("keydown", keyEvents)

function setPlayerDirection() {
  player.direction.x = 0
  player.direction.y = 0
  if (keys.ArrowUp) { player.direction.y = -1 }
  if (keys.ArrowDown) { player.direction.y = 1 }
  if (keys.ArrowLeft) { player.direction.x = -1 }
  if (keys.ArrowRight) { player.direction.x = 1 }
}

function game() {
  createTrapsArray()
  score()

  const start = setInterval(function () {
    gameLoop()
  }, 60)
}

function createArrows(traps){
    var randomNumber = getRandom(0, 40, 15)
    console.log(randomNumber)
    var arrows = []

    for (let i=0; i < randomNumber.length; i++ ){
      var arrow = new Arrow (traps[randomNumber[i]].side, traps[randomNumber[i]].x, traps[randomNumber[i]].y)
      arrows.push(arrow)
    }
    console.log(arrows)
    return arrows
}
  
  console.log(traps)
  
function getRandom(min, max, howManyNumbers) {
  var arrArrow = []
  for (let i=0; i<howManyNumbers; i++){
    min = Math.ceil(min);
    max = Math.floor(max);
    arrArrow.push(Math.floor(Math.random() * (max - min) + min));
  }return arrArrow
} 

game()

