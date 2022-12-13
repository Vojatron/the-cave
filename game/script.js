const player = document.getElementById("player")
const map = document.getElementById("map")

var directionx = 0
var directiony = 0

var hori = 400
var vert = 400
var step = 10

var traps = [
    {name: trap1, x: 0, y: 0}, 
    {name: trap2, x: 200, y: 0}
]

function createAllTraps (traps){
    for (let i = 0; i < traps.length; i++){
        var createTraps = document.createElement("div")
        createTraps.setAttribute("id", "trap")
        createTraps.style.left = traps[i].x + "px"
        createTraps.style.top = traps[i].y + "px"
        map.appendChild(createTraps)
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
    hori += step * directionx
    player.style.left = hori + "px"
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
createAllTraps(traps) 

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
