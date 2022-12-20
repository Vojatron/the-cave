

const gameOverScreen = document.getElementsByClassName('gameover')[0]
const tryAgainButton = document.getElementsByClassName('restart-button')[0]
const startButton = document.getElementsByClassName('start-button')[0]
const startScreen = document.getElementsByClassName('newgame')[0]

// function gameOver() {
//     gameOverScreen.classList.remove('hide')
//     gameOverScreen.classList.add('game-over')
//     tryAgainButton.addEventListener('click', function () {
//       gameOverScreen.classList.remove('game-over')
//       gameOverScreen.classList.add('hide')
//       start()
//     })
//   }

  export function start() {
    startScreen.classList.remove('newgame')
    startScreen.classList.add('hide')
    // direction.x = 0
    // direction.y = 0
    // score = 0
    // scoreElement.innerText = `Score: ${score}`
    // food.position.row = 5
    // food.position.column = 5
    // snake.body = [{ row: 10, column: 10 }]
    // if (gameInterval) {
    //   clearInterval(gameInterval)
    // }
    // gameInterval = setInterval(gameLoop, 200, direction)
  
  }
  
  startButton.addEventListener('click', start)
  