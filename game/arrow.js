// Crear una función constructora para el candy
// donde dentro tenga la posición inicial
// la horientación y también debe tener un 
// prototype draw y un update.

// El update va a ir actualizando la posición en la que se encuentra
// el draw va a dibujar en el dom.

// Una vez hecho, como tenemos un array que contienen las trampas
// dentro de ese array elijamos un par de trampas al azar y usemos
// la posición de esas trampas definirá el punto de inicio del 
// proyecto. 
// const candyleft = document.getElementById("candyleft")
// const candyup = document.getElementById("candyup")
// const cadydown = document.getElementById("candydown")
export function Arrow (side, x, y){
    this.domArrow = document.createElement("div")
    this.side = side
    this.x = x
    this.y = y 
    this.step = 10
    this.domArrow.setAttribute("class", "snowball")
    map.appendChild(this.domArrow)
}

Arrow.prototype.candyFly = function(){

    if (this.side == "top"){
        this.y += this.step
        
    } else if (this.side == "down"){ 
        this.y -= this.step
    } else if (this.side == "right"){
        this.x -= this.step
    }else if (this.side == "left"){
        this.x += this.step 
    }
    
}

Arrow.prototype.draw = function(map){
    if (this.y >= 760 || this.y <= 0 || this.x <= 0 || this.x >= 760) {
        this.domArrow.style.display = "none"
    }

    this.domArrow.style.left = this.x + "px"
    this.domArrow.style.top = this.y + "px"
}

let random = Math.random();

// function randomArrow(){
//     if (random > 0 && random <= 0.25){
//         return candyleft

//     } else if (random > 0.25 && random <= 0.50) {
//         return candyright

//     } else if (random > 0.50 && random <= 0.75) {
//         return candyup

//     } else {
//         return candydown
//     }
// }


  // console.log(getRandomArrowX())

  

// randomArrow()
// console.log (randomArrow())