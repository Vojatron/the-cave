import { Player } from "./player.js"
import { Trap } from "./trap.js"
import { Arrow } from "./arrow.js"
import { Lives } from "./lives.js"

const gameOverScreen = document.getElementsByClassName('gameover')[0]
const tryAgainButton = document.getElementsByClassName('restart-button')[0]
const startButton = document.getElementsByClassName('start-button')[0]
const startScreen = document.getElementsByClassName('newgame')[0]
const map = document.getElementById("map")
const livesSpace = document.getElementsByClassName("livesSpace")[0]
// const live = new Lives(map)
// livesSpace.appendChild(live.sprite)

var lives = []
var traps = []
var arrows = []
var startid = null
var timer = null
let createArr = null
var number = 0
var backgroundMusic = new Audio("./Assets/music/pixelmusic.mp3")
var gameOverMusic = new Audio("./Assets/music/gameover/gameover.mp3")
backgroundMusic.volume = 0.05

createLives ()
function createLives (){
  var increment = 20;
  for (let i = 0; i<3; i++){
    var live = new Lives(map)
    live.position +=
    lives.push(live)
    livesSpace.appendChild(live.sprite)
    live.sprite.style.left += increment + "px"
    increment += 40
  }
}

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


function gameLoop(player) {
  update(player)
  draw(player)
}

function update(player, lives) {
  for (let i=0; i<arrows.length; i++){
    arrows[i].candyFly()
  }

  for (let i=0; i<arrows.length; i++){
    if ( arrows[i].x < player.position.hori + 40  &&
      arrows[i].y < player.position.vert + 40 &&
      arrows[i].x + 20 > player.position.hori &&
      arrows[i].y + 20 > player.position.vert) {
    // collision detected!

       gameover(player)
    }
  }
  setPlayerDirection(player)
  player.update()
}

function draw(player,) {
  for (let i=0; i<arrows.length; i++){
    arrows[i].draw(map)
  }
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

function setPlayerDirection(player) {
  if(player.itsalive = true){
    player.direction.x = 0
    player.direction.y = 0
    if (keys.ArrowUp) { player.direction.y = -1 }
    if (keys.ArrowDown) { player.direction.y = 1 }
    if (keys.ArrowLeft) { player.direction.x = -1 }
    if (keys.ArrowRight) { player.direction.x = 1 }
  }else{
    player.sprite.setAttribute("class", "dead")
  }
}

var balls = 5

function createArrows(traps){
    var randomNumber = getRandom(0, 40, balls)

    for (let i=0; i < randomNumber.length; i++ ){
      var arrow = new Arrow (traps[randomNumber[i]].side, traps[randomNumber[i]].x, traps[randomNumber[i]].y)
      arrows.push(arrow)
    
    }
}
  
function getRandom(min, max, howManyNumbers) {
  var arrArrow = []
  for (let i=0; i<howManyNumbers; i++){
    min = Math.ceil(min);
    max = Math.floor(max);
    arrArrow.push(Math.floor(Math.random() * (max - min) + min));
  }return arrArrow
} 


function game() {
  backgroundMusic.play()
  const player = new Player(map)
  createTrapsArray()
  createArrows(traps)
  score()

  createArr = setInterval(function () {
    createTrapsArray()
    createArrows(traps)
    balls += 1
  }, 3000)

  startid = setInterval(function () {
    gameLoop(player)
  }, 60)
}

function start() {
    startScreen.classList.remove('newgame')
    startScreen.classList.add('hide')
    startButton.classList.remove('start-button')
    startButton.classList.add('hide')
    game()
  }
  
  startButton.addEventListener('click', start)

  function gameover(player) {
    gameOverScreen.classList.remove('hide')
    gameOverScreen.classList.add('gameover')
    tryAgainButton.classList.remove('hide')
    tryAgainButton.classList.add('restart-button')
    backgroundMusic.pause()

    gameOverMusic.play()
    gameOverMusic.volume = 0.05
    clearInterval(startid)
    clearInterval(timer)
    clearInterval(createArr)
    player.sprite.setAttribute("class", "dead")
  }

  tryAgainButton.addEventListener('click', restart)



function score (){
  var score = document.getElementsByClassName("score-number")[0]
  score.innerHTML = 0
       timer = setInterval(function(){
        number += 1
        score.innerHTML = number 
    }, 1000)
}


function restart (){ 
  tryAgainButton.classList.add('hide')
  gameOverScreen.classList.add('hide')
  gameOverMusic.pause()
  clearScreen()
  arrows = []
  traps = []
  number = 0
  balls = 5
  game()
}

gameOverScreen.classList.remove('newgame')
gameOverScreen.classList.add('hide')
tryAgainButton.classList.remove('start-button')
tryAgainButton.classList.add('hide')

function clearScreen() {
  var board = document.getElementById('map')
  var childs = document.querySelectorAll('#map > *')
  for (let i = 0; i < childs.length; i++) {
      board.removeChild(childs[i])
  }
}