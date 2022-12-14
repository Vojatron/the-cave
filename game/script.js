import {Trap} from "./trap.js"
const player = document.getElementById("player")
const map = document.getElementById("map")

const trapsx = []
const trapsy = []

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
        var trap = new Trap ("down", startingPointDown, 780 )
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


var directionx = 0
var directiony = 0

var hori = 400
var vert = 400
var step = 0.5

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
// var trapsx = [
//     {side: "top", x: 20, y: 0}, 
//     {side: "top", x: 100, y: 0},
//     {side: "top", x: 180, y: 0},
//     {side: "top", x: 260, y: 0},
//     {side: "top", x: 340, y: 0},
//     {side: "top", x: 420, y: 0},
//     {side: "top", x: 500, y: 0},
//     {side: "top", x: 580, y: 0},
//     {side: "top", x: 660, y: 0},
//     {side: "top", x: 740, y: 0},
//     {side: "bot", x: 20, y: 780},
//     {side: "bot", x: 100, y: 780},
//     {side: "bot", x: 180, y: 780},
//     {side: "bot", x: 260, y: 780},
//     {side: "bot", x: 340, y: 780},
//     {side: "bot", x: 420, y: 780},
//     {side: "bot", x: 500, y: 780},
//     {side: "bot", x: 580, y: 780},
//     {side: "bot", x: 660, y: 780},
//     {side: "bot", x: 740, y: 780},
// ]

// var trapsy =[
//     {side: "right", x: 0, y: 20}, 
//     {side: "right", x: 0, y: 100},
//     {side: "right", x: 0, y: 180},
//     {side: "right", x: 0, y: 260},
//     {side: "right", x: 0, y: 340},
//     {side: "right", x: 0, y: 420},
//     {side: "right", x: 0, y: 500},
//     {side: "right", x: 0, y: 580},
//     {side: "right", x: 0, y: 660},
//     {side: "right", x: 0, y: 740},
//     {side: "left", x: 780, y: 20},
//     {side: "left", x: 780, y: 100},
//     {side: "left", x: 780, y: 180},
//     {side: "left", x: 780, y: 260},
//     {side: "left", x: 780, y: 340},
//     {side: "left", x: 780, y: 420},
//     {side: "left", x: 780, y: 500},
//     {side: "left", x: 780, y: 580},
//     {side: "left", x: 780, y: 660},
//     {side: "left", x: 780, y: 740},
// ]

// function createAllTraps (trapsx, trapsy){
//     for (let i = 0; i < trapsx.length; i++){
//         var createTrapsx = document.createElement("div")
//         createTrapsx.setAttribute("id", "trapx")
//         createTrapsx.style.left = trapsx[i].x + "px"
//         createTrapsx.style.top = trapsx[i].y + "px"
//         map.appendChild(createTrapsx)
//     }

//     for (let j = 0; j < trapsy.length; j++){
//         var createTrapsy = document.createElement("div")
//         createTrapsy.setAttribute("id", "trapy")
//         createTrapsy.style.left = trapsy[j].x + "px"
//         createTrapsy.style.top = trapsy[j].y + "px"
//         map.appendChild(createTrapsy)
//     }
// }


window.addEventListener("keydown", function(e){
    if ( e.key === 'ArrowDown' ){
        directiony = 1

    } else if (e.key === 'ArrowUp'){
        directiony = -1

    } else if (e.key === 'ArrowLeft'){
        directionx = -1

    } else if (e.key === 'ArrowRight'){
        directionx = 1
    }
})

window.addEventListener("keyup", function(e){
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp'){
        directiony = 0

    } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft'){
        directionx = 0
    }
})

function movex(){
    if ( hori + 1 < 760 && hori - 1 > 0){
        hori += step * directionx
        player.style.left = hori + "px"
        
    }if (hori == 760 || hori == 0) {
        hori += step * directionx * -1
        player.style.left = hori + "px"
    }
}


function movey(){
    vert += step * directiony
    player.style.top = vert + "px"
}


function game (){
var start = setInterval(function(){
        movex()
        movey()
        candyFly()
    }, 1)
}

candyright.style.left = 20 + "px"
candyright.style.top = 0 + "px"

function candyFly() {
    if (horicandy == 760){
        candyright.style.display = "none"
    }    
    
    horicandy += step
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
