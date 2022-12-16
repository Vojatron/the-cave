import { Player } from "./player.js"
import {Trap} from "./trap.js"
const map = document.getElementById("map")

const trapsx = []
const trapsy = []

var player = new Player()

// const traps = [new Trap("top",20,0), new Trap ("top", 100, 0)]

const candyright = document.getElementById("candyright")
const candyleft = document.getElementById("candyleft")
const candyup = document.getElementById("candyup")
const cadydown = document.getElementById("candydown")

var startingPointTop = 20
var startingPointDown = 20
var startingPointLeft = 20
var startingPointRight = 20

function createTrapsArray (){
    for ( let i = 1; i <= 10; i++){
        var trap = new Trap ("top", startingPointTop, 0 )
        trapsx.push(trap)
        startingPointTop += 80
    } 
    for ( let j = 1; j <= 10; j++){
        var trap = new Trap ("down", startingPointDown, 760 )
        trapsx.push(trap)
        startingPointDown += 80
    } 
    for ( let k = 1; k <= 10; k++){
        var trap = new Trap ("down", 0 , startingPointLeft )
        trapsy.push(trap)
        startingPointLeft += 80
    } 
    for ( let l = 1; l <= 10; l++){
        var trap = new Trap ("down", 780 , startingPointRight )
        trapsy.push(trap)
        startingPointRight += 80
    } 
}

createTrapsArray()

var horicandy = 0
var vertcandy = 20

function drawTrapsX (trapsx) {
    for (let i = 0; i < trapsx.length; i++){
        trapsx[i].drawX(map)
    }
}

function drawTrapsY (trapsy) {
    for (let i = 0; i < trapsy.length; i++){
        trapsy[i].drawY(map)
    }
}

drawTrapsX(trapsx)
drawTrapsY(trapsy)

window.addEventListener("keydown", function(e){
    if ( e.key === 'ArrowDown' ){
        player.direction.directiony = 1

    } else if (e.key === 'ArrowUp'){
        player.direction.directiony = -1

    } else if (e.key === 'ArrowLeft'){
        player.direction.directionx = -1

    } else if (e.key === 'ArrowRight'){
        player.direction.directionx = 1

    } else if (e.key ==="Control"){
        player.stepx = 30
        player.stepy = 30
    }
})

window.addEventListener("keyup", function(e){
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp'){
        player.direction.directiony  = 0

    } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft'){
        player.direction.directionx = 0
    }
})

function game (){
 var start = setInterval(function(){
        player.movex()
        player.movey()
        candyFly()
    }, 1)
}

candyright.style.left = 20 + "px"
candyright.style.top = 0 + "px"


var stepx = 0.5
function candyFly() {
    if (horicandy == 760){
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
