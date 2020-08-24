const game = new Game();

function preload() {
    game.preloadGame();
}
function setup() {
    createCanvas(600,600);
    game.setupGame();
    
}
function draw() {
    game.drawGame();
}

function keyPressed() {
    
    if (keyCode === 37) {
        // console.log()
      game.player.moveLeft();
    }
  
    if (keyCode === 39) {
        // console.log()
      game.player.moveRight();
    }
}
