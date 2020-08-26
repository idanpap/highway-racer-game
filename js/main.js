const game = new Game();

function preload() {
    game.preloadGame();
}
function setup() {
    const canvas = createCanvas(600,600);
    canvas.parent('sketch-holder');
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
