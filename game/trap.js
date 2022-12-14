export function Trap (side, x, y){
    this.domTrap = document.createElement("div")
    this.side = side
    this.x = x
    this.y = y 
}

// Traps.prototype.update

Trap.prototype.drawX = function(map){
    this.domTrap.setAttribute("class", "trapx")
    this.domTrap.style.left = this.x + "px"
    this.domTrap.style.top = this.y + "px"
    map.appendChild(this.domTrap)
}

Trap.prototype.drawY = function(map){
    this.domTrap.setAttribute("class", "trapy")
    this.domTrap.style.left = this.x + "px"
    this.domTrap.style.top = this.y + "px"
    map.appendChild(this.domTrap)
}

