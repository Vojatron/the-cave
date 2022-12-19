import { Player } from "./player.js"
import { Trap } from "./trap.js"
import { Arrow } from "./arrow.js"
import { score } from "./score.js"

const map = document.getElementById("map")

const trapsx = []
const trapsy = []

const player = new Player()
const arrow = new Arrow()

// const traps = [new Trap("top",20,0), new Trap ("top", 100, 0)]

const candyright = document.getElementById("candyright")
const candyleft = document.getElementById("candyleft")
const candyup = document.getElementById("candyup")
const cadydown = document.getElementById("candydown")


function createTrapsArray() {
  let startingPointTop = 20
  let startingPointDown = 20
  let startingPointLeft = 20
  let startingPointRight = 20

  for (let i = 1; i <= 10; i++) {
    var trap = new Trap("top", startingPointTop, 0)
    trapsx.push(trap)
    startingPointTop += 80
  }
  for (let j = 1; j <= 10; j++) {
    var trap = new Trap("down", startingPointDown, 780)
    trapsx.push(trap)
    startingPointDown += 80
  }
  for (let k = 1; k <= 10; k++) {
    var trap = new Trap("left", 0, startingPointLeft)
    trapsy.push(trap)
    startingPointLeft += 80
  }
  for (let l = 1; l <= 10; l++) {
    var trap = new Trap("right", 780, startingPointRight)
    trapsy.push(trap)
    startingPointRight += 80
  }
}

function gameLoop() {
  update()
  draw()
}

function update() {
  setPlayerDirection()
  player.update()
}

function draw() {
  player.draw()
  drawTrapsX(trapsx)
  drawTrapsY(trapsy)
}

var horicandy = 0
var vertcandy = 20

function drawTrapsX(trapsx) {
  for (let i = 0; i < trapsx.length; i++) {
    trapsx[i].drawX(map)
  }
}

function drawTrapsY(trapsy) {
  for (let i = 0; i < trapsy.length; i++) {
    trapsy[i].drawY(map)
  }
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
    candyFly()
  }, 60)
}

function getRandomArrowX(min, max) {
  min = Math.ceil(0);
  max = Math.floor(20);
  return Math.floor(Math.random() * (max - min) + min);
} 
// console.log(getRandomArrowX())

var stepx = 100
function candyFly() {

  var trapShooting = getRandomArrowX()
  console.log(trapShooting)
  candyright.style.left = trapsx[trapShooting].x + "px"
  console.log(candyright.style.left)
  candyright.style.top = trapsx[trapShooting].y + "px"
  
  if (horicandy >= 760) {
    candyright.style.display = "none"
  }
  horicandy += stepx
  candyright.style.left = horicandy + "px"
}


game()

// window.addEventListener('keydown', function (e) {
//   if (e.key === 'ArrowUp') {
//     direction.x = -1
//     direction.y = 0
//   } else if (e.key === 'ArrowDown') {
//     direction.x = 1
//     direction.y = 0
//   } else if (e.key === 'ArrowLeft) {
//     direction.y = -1
//     direction.x = 0
//   } else if (e.key === 'ArrowRight') {
//     direction.y = 1
//     direction.x = 0
//   }
// })
