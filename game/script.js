const player = document.getElementById("player")
const map = document.getElementById("map")

var directionx = 0
var directiony = 0

var hori = 400
var vert = 400
var step = 10

var trapsx = [
    {pos: "top", x: 20, y: 0}, 
    {pos: "top", x: 100, y: 0},
    {pos: "top", x: 180, y: 0},
    {pos: "top", x: 260, y: 0},
    {pos: "top", x: 340, y: 0},
    {pos: "top", x: 420, y: 0},
    {pos: "top", x: 500, y: 0},
    {pos: "top", x: 580, y: 0},
    {pos: "top", x: 660, y: 0},
    {pos: "top", x: 740, y: 0},
    {pos: "bot", x: 20, y: 780},
    {pos: "bot", x: 100, y: 780},
    {pos: "bot", x: 180, y: 780},
    {pos: "bot", x: 260, y: 780},
    {pos: "bot", x: 340, y: 780},
    {pos: "bot", x: 420, y: 780},
    {pos: "bot", x: 500, y: 780},
    {pos: "bot", x: 580, y: 780},
    {pos: "bot", x: 660, y: 780},
    {pos: "bot", x: 740, y: 780},
]

var trapsy =[
    {pos: "right", x: 0, y: 20}, 
    {pos: "right", x: 0, y: 100},
    {pos: "right", x: 0, y: 180},
    {pos: "right", x: 0, y: 260},
    {pos: "right", x: 0, y: 340},
    {pos: "right", x: 0, y: 420},
    {pos: "right", x: 0, y: 500},
    {pos: "right", x: 0, y: 580},
    {pos: "right", x: 0, y: 660},
    {pos: "right", x: 0, y: 740},
    {pos: "left", x: 780, y: 20},
    {pos: "left", x: 780, y: 100},
    {pos: "left", x: 780, y: 180},
    {pos: "left", x: 780, y: 260},
    {pos: "left", x: 780, y: 340},
    {pos: "left", x: 780, y: 420},
    {pos: "left", x: 780, y: 500},
    {pos: "left", x: 780, y: 580},
    {pos: "left", x: 780, y: 660},
    {pos: "left", x: 780, y: 740},
]

function createAllTraps (trapsx, trapsy){
    for (let i = 0; i < trapsx.length; i++){
        var createTrapsx = document.createElement("div")
        createTrapsx.setAttribute("id", "trapx")
        createTrapsx.style.left = trapsx[i].x + "px"
        createTrapsx.style.top = trapsx[i].y + "px"
        map.appendChild(createTrapsx)
    }

    for (let j = 0; j < trapsy.length; j++){
        var createTrapsy = document.createElement("div")
        createTrapsy.setAttribute("id", "trapy")
        createTrapsy.style.left = trapsy[j].x + "px"
        createTrapsy.style.top = trapsy[j].y + "px"
        map.appendChild(createTrapsy)
    }
}



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
    }, 100)
}

game()
createAllTraps(trapsx, trapsy) 

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
