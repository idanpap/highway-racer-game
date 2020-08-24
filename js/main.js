const game = new Game();

function preload() {
    game.preloadGame();
}
function setup() {
    createCanvas(400, 600);
    game.setupGame();
    
}
function draw() {
    game.drawGame();
}
