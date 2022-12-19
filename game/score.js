var number = 0
export function score (){
    var timer = setInterval(function(){
        var score = document.getElementsByClassName("score-number")[0]
        score.innerHTML = number 
        number += 1
    }, 1000)
}

document.getElementsByClassName("score-number")